# v3_rags_31_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rags_31",
#     "name": "Andrea",
#     "location": {
#       "city": "New York",
#       "country": "United States",
#       "timezone": "America/New_York (EST, UTC-5)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "non-binary",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-26",
#       "category": "home",
#       "text": "User's home address is 115 Maple Drive."
#     },
#     {
#       "date": "2026-05-18",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2025-12-27",
#       "category": "work",
#       "text": "User works as a graduate student."
#     },
#     {
#       "date": "2025-09-02",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-07-22",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in August."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-03",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-11-21",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-07-30",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: Who took over as president of the Second…
     3.89s  user  발화 시작: …Bank of the United States in eighteen twenty-three?
     3.89s  user  발화 끝
     7.54s  <ret> 발화 (turn2 첫 프레임)
     7.78s  agent 발화 시작: <ret> Well, that would be Nicholas Biddle; he took over as p
     7.78s  ⚡SPAN 주입 [d'=2.00s / d_lead=12.15s]: Nicholas Biddle assumed the presidency of the Second Bank of the Unite
     7.78s  user  발화 끝
    19.93s  agent 발화 끝
