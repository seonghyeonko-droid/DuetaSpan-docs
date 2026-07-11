# v3_rag_28_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_28",
#     "name": "재국",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "50s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-21",
#       "category": "home",
#       "text": "User's home address is 부산 해운대구 해운대로 570."
#     },
#     {
#       "date": "2026-03-10",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-02-11",
#       "category": "work",
#       "text": "User works as a graduate student."
#     },
#     {
#       "date": "2026-01-05",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     },
#     {
#       "date": "2025-10-13",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2025-08-10",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Korean BBQ."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-01-22",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2026-01-01",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-07-21",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 모아나 영화가 배경으로 한 섬이 어디야? | S2 아, 마우이가 나오는구나. 그럼 모아나에 나오는 다른 신화 요 | S3 꽤 덥네. 이번 주말에 갈만한 곳 추천해 줄 수 있어? | S4 오, 좋아 보이는데. 그럼 거기 가는 버스 시간표 좀 알아봐 

     0.00s  user  발화 시작: 모아나 영화가 배경으로 한 섬이 어디야?
     0.00s  <ret> 발화 (turn1 첫 프레임)
     0.03s  agent 발화 시작: <ret> 모아나 영화는 폴리네시아 섬들을 배경으로 하는데, 특히 통가, 피지, 사모아, 그리고 타히티가 주
     0.03s  ⚡SPAN 주입 [d'=0.07s / d_lead=0.07s]: Moana is based on the islands of Polynesia, particularly Tonga, Fiji, 
     0.03s  user  발화 끝
     0.09s  user  발화 시작: 응응.
     0.09s  agent 발화 끝
     0.10s  user  발화 시작: 음, 통가라고? 좀 더 자세히 말해줄 수 있어?
     0.10s  user  발화 끝
     0.12s  <ret> 발화 (turn6 첫 프레임)
     0.13s  agent 발화 시작: 폴리네시아 문화 전반을 담고 있지만, 통가의 신화와 전통이 큰 영향을 주었답니다.
     0.13s  user  발화 끝
     0.13s  <ret> 발화 (turn10 첫 프레임)
     0.18s  user  발화 시작: 신화? 어떤 신화가 제일 중요해?
     0.18s  agent 발화 끝
     0.20s  agent 발화 시작: <ret> 통가 신화에서 마우이는 섬을 낚아 올리고 태양의 속도를 늦춘 반신반인으로 알려져 있어요.
     0.20s  ⚡SPAN 주입 [d'=0.05s / d_lead=0.05s]: In Tongan mythology, Maui is a demigod known for fishing up islands an
     0.20s  user  발화 끝
     0.25s  user  발화 시작: 응.
     0.25s  agent 발화 끝
     0.26s  agent 발화 시작: 마우이는 모아나 이야기에서도 중요한 역할을 하죠. 통가 신화 속 마우이의 이야기가 모아나의 여정에 영감을 준
     0.26s  user  발화 끝
     0.33s  user  발화 시작: 아, 마우이가 나오는구나. 그럼 모아나에 나오는 다른 신화 요소들도 있어?
     0.33s  agent 발화 끝
     0.37s  agent 발화 시작: <ret> 어머니 섬 테 피티 이야기는 폴리네시아 창조 신화와 자연의 중요성을 담고 있어요.
     0.37s  ⚡SPAN 주입 [d'=0.05s / d_lead=0.05s]: The story of Te Fiti, the mother island, draws from Polynesian creatio
     0.37s  user  발화 끝
     0.43s  user  발화 시작: 테 피티… 그 섬은 진짜 존재하는 거야?
     0.43s  agent 발화 끝
     0.46s  <ret> 발화 (turn15 첫 프레임)
     0.46s  agent 발화 시작: 테 피티는 신화 속 섬이지만, 폴리네시아의 여러 섬들이 그 모티브가 되었어요.
     0.46s  user  발화 끝
     0.49s  <ret> 발화 (turn18 첫 프레임)
     0.50s  user  발화 시작: 응.
     0.50s  agent 발화 끝
     0.51s  user  발화 시작: 지금 날씨 어때? 서울 날씨 궁금해.
     0.51s  user  발화 끝
     0.54s  agent 발화 시작: <ret> 현재 서울 날씨는 섭씨 이십팔 점 오도이고, 습도는 육십팔퍼센트, 바람은 시속 삼 점 이킬로미터로
     0.54s  ⚡SPAN 주입 [d'=0.07s / d_lead=0.07s]: (tool result) Current conditions in Seoul are 28.5°C, humidity 68%, wi
     0.54s  user  발화 끝
     0.57s  <ret> 발화 (turn24 첫 프레임)
     0.59s  <ret> 발화 (turn26 첫 프레임)
     0.61s  user  발화 시작: 헐.
     0.61s  agent 발화 끝
     0.61s  user  발화 시작: 꽤 덥네. 이번 주말에 갈만한 곳 추천해 줄 수 있어?
     0.61s  user  발화 끝
     0.65s  agent 발화 시작: <ret> 서울에서 인기 있는 관광 명소로는 경복궁, 남산타워, 그리고 북촌한옥마을이 있어요.
     0.65s  ⚡SPAN 주입 [d'=0.04s / d_lead=0.04s]: (tool result) Popular attractions in Seoul include Gyeongbokgung Palac
     0.65s  user  발화 끝
     0.70s  user  발화 시작: 응.
     0.70s  agent 발화 끝
     0.70s  user  발화 시작: 경복궁… 거기는 가봤어. 다른 데 없을까?
     0.70s  user  발화 끝
     0.73s  agent 발화 시작: 음… 좀 더 색다른 곳을 원하시면 인사동이나 익선동 같은 한옥 거리도 괜찮을 것 같아요.
     0.73s  user  발화 끝
     0.79s  user  발화 시작: 음.
     0.79s  agent 발화 끝
     0.79s  user  발화 시작: 익선동? 거긴 어떤 곳인데?
     0.79s  user  발화 끝
     0.81s  agent 발화 시작: <ret> 익선동 한옥마을은 전통 한옥에 트렌디한 카페, 레스토랑, 상점들이 모여 있는 곳이에요.
     0.81s  ⚡SPAN 주입 [d'=0.05s / d_lead=0.05s]: Ikseon-dong Hanok Village is known for its trendy cafes, restaurants, 
     0.81s  user  발화 끝
     0.86s  user  발화 시작: 오, 좋아 보이는데. 그럼 거기 가는 버스 시간표 좀 알아봐 줄래?
     0.86s  agent 발화 끝
     0.91s  agent 발화 시작: <ret> 백구번 버스가 서울역에서 오후 두시 삼십오분에 출발해서 익선동에 오후 두시 오십분에 도착해요.
     0.91s  ⚡SPAN 주입 [d'=0.05s / d_lead=0.05s]: (tool result) Bus route 109 departs from Seoul Station at 14:35 and ar
     0.91s  user  발화 끝
     0.96s  user  발화 시작: 오.
     0.96s  agent 발화 끝
     0.96s  user  발화 시작: 고마워. 덕분에 주말 계획 세울 수 있겠네.
     0.96s  user  발화 끝
     1.00s  agent 발화 시작: 천만에요.
     1.00s  user  발화 끝
     1.00s  agent 발화 끝
