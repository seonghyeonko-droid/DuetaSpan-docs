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

# EXAMINER(FDB-v2) 단계: S1 What are the latitude and longitud | S2 Okay, great. Can you find me a hig | S3 Do they have outdoor seating? | S4 That’s true. What about parking ne

     0.00s  user  발화 시작: What are the latitude and longitude of the Sydney Opera Hous
     4.07s  <ret> 발화 (turn1 첫 프레임)
     4.14s  agent 발화 시작: <ret> Certainly. The Sydney Opera House’s coordinates are 33
     4.16s  user  발화 끝
     4.57s  ⚡SPAN 주입 [d'=0.50s / d_lead=0.70s]: (tool result) 33.8568° S, 151.2153° E
     8.87s  user  발화 시작: Wow.
     9.69s  user  발화 끝
    13.19s  user  발화 시작: And what’s the quickest driving route from there to Bondi Be
    13.28s  agent 발화 끝
    16.96s  <ret> 발화 (turn4 첫 프레임)
    17.02s  agent 발화 시작: <ret> I can help with that. The quickest route is 8.2 kilome
    17.16s  user  발화 끝
    17.68s  ⚡SPAN 주입 [d'=0.72s / d_lead=1.55s]: (tool result) 8.2 km, 15-20 mins
    20.48s  user  발화 시작: Right.
    21.11s  user  발화 끝
    22.61s  agent 발화 끝
    23.25s  user  발화 시작: Okay, great. Can you find me a highly-rated Italian restaura
    28.40s  <ret> 발화 (turn7 첫 프레임)
    28.80s  agent 발화 시작: <ret> Bella Italia has a 4.6-star rating with 200 reviews ne
    28.99s  user  발화 끝
    30.40s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.65s]: (tool result) Bella Italia - 4.6 stars, 200 reviews
    30.48s  user  발화 시작: Yeah.
    30.98s  user  발화 끝
    34.45s  agent 발화 끝
    35.92s  user  발화 시작: That sounds good. What’s their phone number?
    38.87s  <ret> 발화 (turn10 첫 프레임)
    39.25s  agent 발화 시작: <ret> Just a moment— Their phone number is 02 9130 5888.
    39.29s  user  발화 끝
    39.37s  ⚡SPAN 주입 [d'=0.50s / d_lead=1.42s]: (tool result) 02 9130 5888
    43.98s  agent 발화 끝
    44.65s  user  발화 시작: Do they have outdoor seating?
    46.15s  <ret> 발화 (turn12 첫 프레임)
    46.38s  agent 발화 시작: <ret> Yes, they do. Bella Italia does have outdoor seating a
    46.54s  user  발화 끝
    46.65s  ⚡SPAN 주입 [d'=0.50s / d_lead=1.11s]: (tool result) Outdoor seating available - Yes
    49.94s  user  발화 시작: Perfect. Can you book a table for two there tonight at 7:30 
    50.08s  agent 발화 끝
    54.48s  <ret> 발화 (turn14 첫 프레임)
    54.72s  agent 발화 시작: <ret> I can certainly try. Your reservation at Bella Italia 
    54.80s  user  발화 끝
    55.60s  ⚡SPAN 주입 [d'=1.12s / d_lead=1.32s]: (tool result) Reservation confirmed - Bella Italia, 2 people, 7:30 PM
    56.64s  user  발화 시작: Oh.
    57.18s  user  발화 끝
    60.17s  agent 발화 시작: It’s always good to have a nice evening planned, especially 
    60.32s  agent 발화 끝
    63.08s  user  발화 시작: Yeah.
    63.57s  user  발화 끝
    66.94s  user  발화 시작: That’s true. What about parking near the restaurant?
    67.40s  agent 발화 끝
    70.21s  <ret> 발화 (turn19 첫 프레임)
    70.28s  agent 발화 시작: <ret> Street parking is limited and paid, or Bondi Beach Car
    70.45s  user  발화 끝
    71.89s  ⚡SPAN 주입 [d'=1.68s / d_lead=4.72s]: (tool result) Street parking available - limited, paid. Bondi Beach Ca
    75.00s  agent 발화 끝
    76.41s  user  발화 시작: Okay, thanks. That's really helpful.
    78.61s  agent 발화 시작: You’re very welcome. I’m glad I could assist in planning you
    78.66s  user  발화 끝
    84.58s  agent 발화 끝
