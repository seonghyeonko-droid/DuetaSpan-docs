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
     4.63s  <ret> 발화 (turn1 첫 프레임)
     4.86s  agent 발화 시작: <ret> Alright, a ride has been booked for you. Driver Anya S
     4.88s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.11s]: (tool result) Ride confirmed. Driver: Anya Sharma. ETA: 7 minutes. Veh
     5.00s  user  발화 끝
    10.29s  user  발화 시작: …Is that the quickest route, or are there options?
    10.97s  agent 발화 끝
    12.50s  <ret> 발화 (turn3 첫 프레임)
    12.66s  agent 발화 시작: <ret> There is a slightly faster route using Highway 85, it 
    12.66s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.19s]: Alternative route found. Estimated time: 6 minutes. Route involves Hig
    12.88s  user  발화 끝
    16.67s  user  발화 시작: Wow.
    17.31s  user  발화 끝
    21.65s  agent 발화 시작: I’m glad to help you with your commute today. Planning ahead
    21.84s  agent 발화 끝
    27.36s  agent 발화 시작: Remember, a little preparation goes a long way.
    27.59s  agent 발화 끝
    31.29s  agent 발화 끝
