# v3_rag_27_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_27",
#     "name": "도슬",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "early 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-22",
#       "category": "work",
#       "text": "User works as a nurse."
#     },
#     {
#       "date": "2026-04-19",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     },
#     {
#       "date": "2026-01-21",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in October."
#     },
#     {
#       "date": "2025-11-15",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2025-07-26",
#       "category": "home",
#       "text": "User's home address is 서울 강남구 역삼동 678-9."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-20",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-12-04",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 안녕하세요, 트해크스 씨. 요즘 좀 힘든 일이 있어서요.
     3.87s  agent 발화 시작: 안녕하세요. 힘든 일이 있으시다니 마음이 아프네요. 무슨 일인지 편하게 말씀해 주세요. 제가 곁에서 함께 고
     3.87s  user  발화 끝
    11.60s  user  발화 시작: 네.
    11.60s  agent 발화 끝
    12.08s  user  발화 시작: 음… 남자친구랑 좀 다퉜어요. 계속 영화 보러 가자고 하는데, 저는 그게 좀 부담스러워요.
    12.08s  user  발화 끝
    18.20s  <ret> 발화 (turn4 첫 프레임)
    18.36s  agent 발화 시작: <ret> 남자친구분께서 혹시 이천십육년에 개봉한 좀비 영화 '부산행'을 보고 싶어 하시는 건가요? 그 영화
    18.36s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.15s]: Train to Busan — a 2016 South Korean zombie apocalypse film directed b
    18.36s  user  발화 끝
    28.51s  user  발화 시작: 정말요?
    28.51s  agent 발화 끝
    28.99s  user  발화 시작: 아니요, 그냥 아무거나 보자고 해요. 계속 졸라대는 게 싫은 거죠.
    28.99s  user  발화 끝
    33.83s  agent 발화 시작: 아무 영화나 보자고 졸라대는 게 싫으시군요. 남자친구분께 솔직하게 부담스럽다고 말씀드려 보시는 건 어떠세요?
    33.83s  user  발화 끝
    40.11s  agent 발화 끝
