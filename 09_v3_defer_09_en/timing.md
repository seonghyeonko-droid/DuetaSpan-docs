# v3_defer_09_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_defer_09",
#     "name": "Quinn",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "non-binary",
#     "age_range": "40s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-08",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2026-02-22",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2025-10-21",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Korean BBQ."
#     },
#     {
#       "date": "2025-07-23",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in December."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-24",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-11-24",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-06-06",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: I need a regular ride for three people to one Infinite Loop,
     0.00s  <ret> 발화 (turn1 첫 프레임)
     0.15s  <ret> 발화 (turn3 첫 프레임)
     0.16s  agent 발화 시작: <ret> Alright, a ride has been booked for you. Driver Anya S
     0.16s  ⚡SPAN 주입 [d'=0.20s / d_lead=0.20s]: (tool result) Ride confirmed. Driver: Anya Sharma. ETA: 7 minutes. Veh
     0.16s  user  발화 끝
     0.36s  user  발화 시작: …Is that the quickest route, or are there options?
     0.36s  agent 발화 끝
     0.47s  agent 발화 시작: <ret> There is a slightly faster route using Highway 85, it 
     0.47s  ⚡SPAN 주입 [d'=0.24s / d_lead=0.24s]: Alternative route found. Estimated time: 6 minutes. Route involves Hig
     0.47s  user  발화 끝
     0.71s  user  발화 시작: Wow.
     0.71s  agent 발화 끝
     0.72s  agent 발화 시작: I’m glad to help you with your commute today. Planning ahead
     0.72s  user  발화 끝
     0.91s  agent 발화 시작: Remember, a little preparation goes a long way.
     0.91s  agent 발화 끝
     1.00s  agent 발화 끝
