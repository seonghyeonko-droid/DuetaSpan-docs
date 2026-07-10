# v3_fstart_15_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fstart_15",
#     "name": "서우",
#     "location": {
#       "city": "Busan",
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
#       "date": "2026-05-04",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-02-14",
#       "category": "pet",
#       "text": "User has a Poodle named Coco."
#     },
#     {
#       "date": "2025-12-25",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in May."
#     },
#     {
#       "date": "2025-11-22",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2025-09-19",
#       "category": "home",
#       "text": "User's home address is 서울 용산구 이태원로 200."
#     },
#     {
#       "date": "2025-06-28",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-12",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-12-23",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-07-02",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 도쿄에서 로스앤젤레스까지 자동차로 얼마나 걸릴까요?
     3.21s  <ret> 발화 (turn1 첫 프레임)
     3.29s  agent 발화 시작: <ret> 도쿄에서 로스앤젤레스까지 자동차로 가려면 대략 팔천구백삼십일마일, 그러니까 약 백삼십사시간 정도 
     3.29s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.37s]: (tool result) The driving distance from Tokyo to Los Angeles is approx
     3.56s  user  발화 끝
     7.98s  user  발화 시작: 정말요?
     8.81s  user  발화 끝
    10.59s  user  발화 시작: 와, 엄청 멀군요. 그쪽 날씨는 어때요?
    10.66s  agent 발화 끝
    13.20s  <ret> 발화 (turn4 첫 프레임)
    13.59s  agent 발화 시작: <ret> 지금 로스앤젤레스는 섭씨 이십사도에 습도는 육십이%, 바람은 시속 칠 점 이킬로미터이고 하늘은 맑
    13.60s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.14s]: (tool result) Los Angeles: 24.0°C, humidity 62%, wind 7.2 km/h, clear 
    13.83s  user  발화 끝
    20.63s  agent 발화 시작: 여행 계획 세우시는 데 도움이 되셨으면 좋겠네요.
    20.73s  agent 발화 끝
    23.21s  agent 발화 끝
    23.61s  user  발화 시작: 음… 그쪽에서 괜찮은 레스토랑도 찾아줄 수 있어요?
    26.63s  agent 발화 시작: 어떤 종류의 음식을 좋아하세요?
    26.80s  user  발화 끝
    28.56s  agent 발화 끝
