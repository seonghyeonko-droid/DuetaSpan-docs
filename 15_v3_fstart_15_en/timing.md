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
#       "date": "2026-02-01",
#       "category": "work",
#       "text": "User works as a physical therapist."
#     },
#     {
#       "date": "2025-09-20",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2025-09-09",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     },
#     {
#       "date": "2025-07-12",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2025-05-30",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in December."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-16",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-07-08",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 What are the latitude and longitud | S2 That sounds nice. What’s their pho | S3 Okay, can you book a table for two | S4 Okay, good to know. Go ahead with 

     0.00s  user  발화 시작: What are the latitude and longitude of the Sydney Opera Hous
     4.07s  <ret> 발화 (turn1 첫 프레임)
     4.12s  user  발화 끝
     4.15s  agent 발화 시작: <ret> Certainly. The Sydney Opera House is at 33.8568 degree
     4.57s  ⚡SPAN 주입 [d'=0.50s / d_lead=0.56s]: (tool result) 33.8568° S, 151.2153° E
     8.19s  user  발화 시작: Wow.
     8.73s  user  발화 끝
    11.91s  user  발화 시작: And can you find me a good Italian restaurant nearby?
    12.03s  agent 발화 끝
    15.18s  <ret> 발화 (turn4 첫 프레임)
    15.26s  agent 발화 시작: <ret> Absolutely. Bella Italia is half a mile away and has a
    15.47s  user  발화 끝
    15.55s  ⚡SPAN 주입 [d'=0.37s / d_lead=0.37s]: (tool result) Bella Italia – 0.5 miles, 4.5 stars.
    18.21s  user  발화 시작: Right.
    18.94s  user  발화 끝
    20.07s  agent 발화 끝
    20.74s  user  발화 시작: That sounds nice. What’s their phone number?
    23.12s  <ret> 발화 (turn7 첫 프레임)
    23.51s  agent 발화 시작: <ret> Their phone number is 02 9241 2300.
    23.70s  user  발화 끝
    24.86s  user  발화 시작: Oh.
    25.12s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.02s]: (tool result) 02 9241 2300
    25.50s  user  발화 끝
    27.54s  agent 발화 끝
    28.95s  user  발화 시작: Do they take reservations?
    30.69s  <ret> 발화 (turn10 첫 프레임)
    30.93s  agent 발화 시작: <ret> Yes, they accept reservations by phone or online.
    30.93s  user  발화 끝
    31.81s  ⚡SPAN 주입 [d'=1.12s / d_lead=3.33s]: (tool result) Reservations accepted – via phone or online.
    32.00s  user  발화 시작: Mhm.
    32.45s  user  발화 끝
    34.25s  agent 발화 끝
    34.27s  user  발화 시작: Okay, can you book a table for two at 7:30 PM this Friday?
    38.73s  agent 발화 시작: Of course, let’s get that set up—
    38.76s  user  발화 끝
    39.67s  user  발화 시작: Actually, wait, is there parking nearby?
    40.38s  agent 발화 끝
    42.35s  <ret> 발화 (turn15 첫 프레임)
    42.43s  agent 발화 시작: <ret> Wilson Parking is 0.2 miles away, at $7 per hour.
    42.59s  user  발화 끝
    43.31s  ⚡SPAN 주입 [d'=0.96s / d_lead=4.62s]: (tool result) Wilson Parking – 0.2 miles, $7/hr.
    44.38s  user  발화 시작: Yeah, yeah.
    45.66s  user  발화 끝
    47.05s  agent 발화 끝
    47.20s  user  발화 시작: Okay, good to know. Go ahead with the reservation then.
    50.58s  <ret> 발화 (turn18 첫 프레임)
    50.65s  agent 발화 시작: <ret> Wonderful. Your reservation for two at Bella Italia on
    50.76s  user  발화 끝
    50.96s  ⚡SPAN 주입 [d'=0.38s / d_lead=0.38s]: (tool result) Reservation confirmed – Bella Italia, 2 people, Friday 7
    52.29s  user  발화 시작: Really?
    53.11s  user  발화 끝
    56.34s  user  발화 시작: Perfect! Thanks so much.
    56.35s  agent 발화 끝
    58.27s  user  발화 끝
    58.29s  agent 발화 시작: You’re very welcome! It’s lovely to help plan a special even
    63.61s  agent 발화 끝
