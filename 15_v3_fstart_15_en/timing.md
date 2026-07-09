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

# EXAMINER(FDB-v2) 단계: S1 What are the latitude and longitud | S2 What’s the cheapest one with free  | S3 Great! Could you also look up some | S4 That sounds perfect. Thanks!

     0.00s  user  발화 시작: What are the latitude and longitude of the Sydney Opera Hous
     4.02s  <ret> 발화 (turn1 첫 프레임)
     4.07s  user  발화 끝
     4.09s  agent 발화 시작: <ret> Certainly. The Sydney Opera House is at 33.8568 degree
     4.52s  ⚡SPAN 주입 [d'=0.50s / d_lead=0.55s]: (tool result) 33.8568° S, 151.2153° E
     8.09s  user  발화 시작: Oh.
     8.59s  user  발화 끝
    11.63s  user  발화 시작: And can you find me hotels near there?
    11.74s  agent 발화 끝
    13.88s  <ret> 발화 (turn4 첫 프레임)
    13.96s  agent 발화 시작: <ret> Of course, I can help with that. I’m searching for hot
    14.12s  user  발화 끝
    14.60s  ⚡SPAN 주입 [d'=0.72s / d_lead=1.73s]: (tool result) Searching hotels near Sydney Opera House…
    15.70s  user  발화 시작: Yeah.
    16.19s  user  발화 끝
    18.26s  agent 발화 시작: I’ve found several options, ranging from budget-friendly to 
    18.40s  agent 발화 끝
    23.74s  user  발화 시작: What’s the cheapest one with free breakfast?
    24.42s  agent 발화 끝
    26.33s  <ret> 발화 (turn8 첫 프레임)
    26.41s  agent 발화 시작: <ret> Ah, prioritizing breakfast is smart.
    26.61s  user  발화 끝
    27.69s  ⚡SPAN 주입 [d'=1.36s / d_lead=2.54s]: (tool result) Russell Hotel: $180/night, includes breakfast.
    28.92s  agent 발화 시작: The Russell Hotel is currently the least expensive at one hu
    28.94s  agent 발화 끝
    33.82s  user  발화 시작: Okay, book me a room there for two nights, starting next Fri
    33.92s  agent 발화 끝
    37.05s  <ret> 발화 (turn11 첫 프레임)
    37.45s  agent 발화 시작: <ret> Happy to do that for you. Your reservation at the Russ
    37.48s  user  발화 끝
    37.55s  ⚡SPAN 주입 [d'=0.50s / d_lead=1.83s]: (tool result) Booking confirmed: Russell Hotel, 2 nights, next Friday.
    41.55s  user  발화 시작: Yeah, totally.
    42.83s  user  발화 끝
    43.46s  user  발화 시작: Great! Could you also look up some nice restaurants in that 
    43.56s  agent 발화 끝
    47.25s  user  발화 끝
    47.66s  agent 발화 시작: I can definitely assist with that. There are many excellent 
    51.76s  agent 발화 시작: —ranging from casual cafes to upscale restaurants.
    51.96s  agent 발화 끝
    54.85s  user  발화 시작: What's the closest Italian restaurant with good reviews?
    55.19s  agent 발화 끝
    58.08s  <ret> 발화 (turn17 첫 프레임)
    58.32s  agent 발화 시작: <ret> Aria Restaurant is the closest Italian restaurant, jus
    58.46s  user  발화 끝
    59.04s  ⚡SPAN 주입 [d'=0.96s / d_lead=6.30s]: (tool result) Aria Restaurant: Italian, 0.3 miles, 4.5 stars.
    60.43s  user  발화 시작: Mhm.
    60.97s  user  발화 끝
    64.62s  agent 발화 끝
    64.77s  user  발화 시작: That sounds perfect. Thanks!
    67.36s  user  발화 끝
