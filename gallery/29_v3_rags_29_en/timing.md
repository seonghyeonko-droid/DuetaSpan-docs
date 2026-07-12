# v3_rags_29_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rags_29",
#     "name": "Alice",
#     "location": {
#       "city": "Paris",
#       "country": "France",
#       "timezone": "Europe/Paris (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "French",
#     "gender": "female",
#     "age_range": "50s",
#     "language": "French"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-01",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in August."
#     },
#     {
#       "date": "2026-02-01",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-01-23",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2025-09-27",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2025-07-31",
#       "category": "home",
#       "text": "User's home address is 822 Birch Road."
#     },
#     {
#       "date": "2025-07-04",
#       "category": "work",
#       "text": "User works as a graduate student."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-10",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-10-11",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-08-03",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: Who do you think won…
     2.17s  user  발화 시작: …So You Think You Can Dance in 2016?
     2.17s  user  발화 끝
     5.32s  <ret> 발화 (turn2 첫 프레임)
     5.64s  agent 발화 시작: <ret> Oh, that’s a fun one! Leon "Kida" Burns was declared t
     5.64s  ⚡SPAN 주입 [d'=2.00s / d_lead=13.44s]: Leon "Kida" Burns was declared the winner of the thirteenth season of 
     5.64s  user  발화 끝
    19.08s  agent 발화 끝
