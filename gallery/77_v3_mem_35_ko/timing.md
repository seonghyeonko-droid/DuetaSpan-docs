# v3_mem_35_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_35",
#     "name": "도영",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "early 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-07",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2026-04-30",
#       "category": "work",
#       "text": "User works as a architect."
#     },
#     {
#       "date": "2025-07-28",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     },
#     {
#       "date": "2025-06-01",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-28",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2026-03-12",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-11-19",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 어… 안녕하세요. 요즘 여행 가고 싶은데, 어디가 좋을까요? | S2 오, 파스타! 맛있겠네요. | S3 숙소는… 호텔 말고 다른 곳도 있을까요? | S4 좋아요, 풀리아 한번 알아봐야겠어요.

     0.00s  agent 발화 시작: 안녕하세요, 도영님! 저는 제아온이라고 해요. 여행 계획이나 휴식에 대해 도와드리는 에이전트입니다.
     0.00s  <ret> 발화 (turn2 첫 프레임)
     0.08s  user  발화 시작: 어… 안녕하세요. 요즘 여행 가고 싶은데, 어디가 좋을까요?
     0.08s  agent 발화 끝
     0.14s  agent 발화 시작: <ret> 혹시 전에 말씀해주셨던 글루텐 프리 식단에 맞춰서 추천해 드릴까요?
     0.14s  ⚡SPAN 주입 [d'=0.07s / d_lead=0.07s]: [2026-06-07] User is gluten-free.
     0.14s  user  발화 끝
     0.21s  agent 발화 시작: 글루텐 프리 식단을 고려하면, 이탈리아 남부의 풀리아 지역을 추천해 드리고 싶어요.
     0.21s  agent 발화 끝
     0.29s  user  발화 시작: 풀리아요? 거긴 어떤 곳인데요?
     0.29s  agent 발화 끝
     0.32s  agent 발화 시작: 풀리아는 아름다운 해변과 역사적인 도시, 그리고 맛있는 글루텐 프리 파스타로 유명해요.
     0.32s  user  발화 끝
     0.40s  user  발화 시작: 오, 파스타! 맛있겠네요.
     0.40s  agent 발화 끝
     0.42s  agent 발화 시작: 풀리아 지역의 레스토랑들은 글루텐 프리 옵션을 많이 제공하고, 신선한 재료를 사용해서 음식을 만들어요.
     0.42s  user  발화 끝
     0.51s  user  발화 시작: 음.
     0.51s  agent 발화 끝
     0.52s  agent 발화 시작: 게다가 풀리아는 다른 유명한 관광지에 비해 비교적 물가가 저렴해서, 부담 없이 여행을 즐길 수 있다는 장점도
     0.52s  user  발화 끝
     0.68s  user  발화 시작: 숙소는… 호텔 말고 다른 곳도 있을까요?
     0.68s  agent 발화 끝
     0.72s  agent 발화 시작: 네, 풀리아에는 '마사(Massa)'라고 하는 전통 가옥을 개조한 숙소들이 많이 있어요. 현지인의 삶을 체험
     0.72s  user  발화 끝
     0.86s  user  발화 시작: 아.
     0.86s  agent 발화 끝
     0.87s  user  발화 시작: 마사… 재밌겠네요.
     0.87s  user  발화 끝
     0.88s  agent 발화 시작: 마사는 풀리아의 독특한 건축 양식을 보여주는 곳이라, 사진 찍기에도 정말 좋아요.
     0.88s  user  발화 끝
     0.96s  user  발화 시작: 응.
     0.96s  agent 발화 끝
     0.97s  user  발화 시작: 좋아요, 풀리아 한번 알아봐야겠어요.
     0.97s  user  발화 끝
     1.00s  user  발화 끝
