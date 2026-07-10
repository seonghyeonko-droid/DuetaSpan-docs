# v3_defer_09_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_defer_09",
#     "name": "Chloe",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "female",
#     "age_range": "late 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-24",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2026-03-05",
#       "category": "home",
#       "text": "User's home address is 530 Elm Street."
#     },
#     {
#       "date": "2025-12-23",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Korean BBQ."
#     },
#     {
#       "date": "2025-10-20",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2025-08-12",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2025-07-04",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-10-24",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-06-27",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Book three rooms at Ocean View Hot | S2 …San Diego during that time? | S3 Are there any good seafood restaur | S4 Please do, for 7 PM on the tenth.

     0.00s  user  발화 시작: Book three rooms at Ocean View Hotel in San Diego for seven 
     5.33s  <ret> 발화 (turn1 첫 프레임)
     5.42s  user  발화 끝
     5.57s  agent 발화 시작: <ret> I’ve reserved three rooms for you at the Ocean View Ho
     7.33s  ⚡SPAN 주입 [d'=2.00s / d_lead=14.33s]: (tool result) Reservation confirmed: Ocean View Hotel, San Diego. Thre
    13.85s  user  발화 시작: Right.
    14.34s  user  발화 끝
    19.90s  agent 발화 끝
    19.95s  user  발화 시작: What's the weather forecast for…
    21.69s  user  발화 끝
    23.28s  user  발화 시작: …San Diego during that time?
    24.76s  <ret> 발화 (turn5 첫 프레임)
    24.92s  agent 발화 시작: <ret> The forecast for San Diego from February tenth to seve
    25.03s  user  발화 끝
    26.76s  ⚡SPAN 주입 [d'=2.00s / d_lead=13.78s]: (tool result) San Diego, February 10th-17th: Sunny, highs 68-72°F, low
    38.70s  agent 발화 끝
    39.09s  user  발화 시작: Are there any good seafood restaurants near the hotel?
    41.86s  <ret> 발화 (turn7 첫 프레임)
    42.05s  user  발화 끝
    42.10s  agent 발화 시작: <ret> Mitch’s Seafood is just point three miles from the Oce
    43.86s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.73s]: (tool result) Mitch's Seafood is 0.3 miles from Ocean View Hotel. Rati
    51.09s  user  발화 시작: …Do they take reservations?
    51.84s  agent 발화 끝
    52.34s  <ret> 발화 (turn9 첫 프레임)
    52.65s  agent 발화 시작: <ret> Give me a moment to check if Mitch’s Seafood accepts r
    52.83s  user  발화 끝
    54.34s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.30s]: (tool result) Mitch's Seafood: Reservations accepted. Availability at 
    56.85s  agent 발화 시작: Yes, Mitch’s Seafood does accept reservations, and they have
    56.96s  agent 발화 끝
    68.08s  agent 발화 끝
    68.59s  user  발화 시작: Please do, for 7 PM on the tenth.
    71.13s  user  발화 끝
