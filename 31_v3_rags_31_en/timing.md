# v3_rags_31_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rags_31",
#     "name": "Anna",
#     "location": {
#       "city": "Berlin",
#       "country": "Germany",
#       "timezone": "Europe/Berlin (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "German",
#     "gender": "female",
#     "age_range": "late 30s",
#     "language": "German"
#   },
#   "saved_memories": [
#     {
#       "date": "2025-11-11",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2025-10-24",
#       "category": "work",
#       "text": "User works as a software engineer."
#     },
#     {
#       "date": "2025-07-08",
#       "category": "home",
#       "text": "User's home address is 238 Birch Road."
#     },
#     {
#       "date": "2025-06-18",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in March."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-31",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-10-18",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: Where exactly are the Earth’s tectonic plates located?
     2.69s  <ret> 발화 (turn1 첫 프레임)
     2.93s  agent 발화 시작: <ret> Those plates are located within the Earth’s lithospher
     2.93s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.25s]: The Earth’s lithosphere, which includes the crust and the upper part o
     2.93s  user  발화 끝
    13.18s  agent 발화 끝
