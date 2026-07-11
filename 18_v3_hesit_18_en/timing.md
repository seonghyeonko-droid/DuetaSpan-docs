# v3_hesit_18_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_hesit_18",
#     "name": "Zoe",
#     "location": {
#       "city": "New York",
#       "country": "United States",
#       "timezone": "America/New_York (EST, UTC-5)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "female",
#     "age_range": "early 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-02-24",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2026-02-11",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     },
#     {
#       "date": "2025-09-21",
#       "category": "home",
#       "text": "User's home address is 513 Cedar Lane."
#     },
#     {
#       "date": "2025-09-17",
#       "category": "work",
#       "text": "User works as a graphic designer."
#     },
#     {
#       "date": "2025-08-16",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in March."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-28",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2026-04-22",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-06-05",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: Um, welll… where, uh, were the Anzacs supposed to land at Ga
     0.00s  <ret> 발화 (turn1 첫 프레임)
     0.08s  <ret> 발화 (turn3 첫 프레임)
     0.12s  agent 발화 시작: <ret> They were intended to land at Ari Burnu, on the wester
     0.12s  ⚡SPAN 주입 [d'=0.25s / d_lead=0.25s]: The Anzac troops were intended to land at Ari Burnu, on the western si
     0.12s  user  발화 끝
     0.37s  user  발화 시작: Oh, okay. And what date was that supposed to happen on?
     0.37s  agent 발화 끝
     0.48s  agent 발화 시작: <ret> The landing at Ari Burnu commenced on the morning of A
     0.48s  ⚡SPAN 주입 [d'=0.29s / d_lead=0.29s]: The landing at Ari Burnu commenced on the morning of 25 April 1915, as
     0.48s  user  발화 끝
     0.76s  user  발화 시작: Right.
     0.76s  agent 발화 끝
     0.77s  user  발화 시작: Right. Hmm, and… was it a successful landing?
     0.77s  user  발화 끝
     0.85s  agent 발화 시작: That’s a complex question, and it wasn't exactly as planned.
     0.85s  user  발화 끝
     1.00s  agent 발화 끝
