# v3_fstart_15_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fstart_15",
#     "name": "Ada",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "female",
#     "age_range": "50s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-08-03",
#       "category": "work",
#       "text": "User works as a physical therapist."
#     },
#     {
#       "date": "2026-07-09",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2026-06-08",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     },
#     {
#       "date": "2026-06-02",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2026-03-19",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in December."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-07-11",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2026-01-08",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 What are the latitude and longitud | S2 What about Melbourne? Is it simila | S3 …just a one-way ticket for one per | S4 Great! Thank you so much.

     0.00s  user  발화 시작: What are the latitude and longitude of the Sydney Opera Hous
     3.71s  <ret> 발화 (turn1 첫 프레임)
     3.78s  agent 발화 시작: <ret> Certainly. The Sydney Opera House is at latitude negat
     3.80s  user  발화 끝
     4.03s  ⚡SPAN 주입 [d'=0.32s / d_lead=0.32s]: (tool result) -33.8568, 151.2153
     7.21s  user  발화 시작: Yeah.
     7.66s  user  발화 끝
    11.70s  user  발화 시작: And what’s the weather like there right now?
    11.81s  agent 발화 끝
    13.84s  <ret> 발화 (turn4 첫 프레임)
    13.91s  agent 발화 시작: <ret> It’s currently partly cloudy in Sydney with a temperat
    14.10s  user  발화 끝
    15.84s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.81s]: (tool result) Partly cloudy, 22 degrees Celsius, wind 15 km/h.
    16.67s  user  발화 시작: Yeah.
    17.17s  user  발화 끝
    20.71s  agent 발화 끝
    21.41s  user  발화 시작: What about Melbourne? Is it similar?
    23.43s  <ret> 발화 (turn7 첫 프레임)
    23.83s  agent 발화 시작: <ret> Melbourne’s weather is a bit different. Melbourne is e
    24.00s  user  발화 끝
    25.11s  ⚡SPAN 주입 [d'=1.68s / d_lead=2.12s]: (tool result) Showers, 18 degrees Celsius, wind 25 km/h.
    32.32s  agent 발화 끝
    32.60s  user  발화 시작: That sounds… chilly. I— I mean, could we look at flights fro
    38.91s  user  발화 끝
    39.05s  agent 발화 시작: Of course, we can look at flights—
    40.10s  user  발화 시작: …just a one-way ticket for one person, economy class?
    40.80s  agent 발화 끝
    43.71s  <ret> 발화 (turn11 첫 프레임)
    43.98s  user  발화 끝
    44.10s  agent 발화 시작: <ret> There are flights with Qantas at ten AM for one hundre
    44.21s  ⚡SPAN 주입 [d'=0.50s / d_lead=10.99s]: (tool result) Qantas, 10:00 AM, $189 / Virgin Australia, 11:30 AM, $21
    54.92s  user  발화 시작: The Jetstar one sounds good. Can you book that for me?
    55.09s  agent 발화 끝
    58.04s  <ret> 발화 (turn13 첫 프레임)
    58.28s  agent 발화 시작: <ret> Absolutely. Your Jetstar flight, JQ501, from Sydney to
    58.47s  user  발화 끝
    58.50s  ⚡SPAN 주입 [d'=0.46s / d_lead=0.46s]: (tool result) Booking confirmed. Jetstar flight JQ501, Sydney to Melbo
    64.23s  user  발화 시작: Right.
    64.86s  user  발화 끝
    67.55s  agent 발화 끝
    67.78s  user  발화 시작: Great! Thank you so much.
    69.81s  user  발화 끝
    69.89s  agent 발화 시작: You're very welcome! It's wonderful you're taking this trip;
    76.34s  agent 발화 끝
