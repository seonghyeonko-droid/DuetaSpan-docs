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

# EXAMINER(FDB-v2) 단계: S1 I’d like to book three rooms at Oc | S2 What’s the weather typically like  | S3 Can you tell me more about Little  | S4 Perfect! Book

     0.00s  user  발화 시작: I’d like to book three rooms at Ocean View Hotel…
     2.58s  user  발화 끝
     3.99s  user  발화 시작: …in San Diego for seven nights starting on February tenth.
     6.83s  <ret> 발화 (turn2 첫 프레임)
     7.04s  user  발화 끝
     7.07s  agent 발화 시작: <ret> I’ve reserved three rooms at Ocean View Hotel in San D
     8.83s  ⚡SPAN 주입 [d'=2.00s / d_lead=14.01s]: (tool result) Ocean View Hotel, San Diego, 3 rooms reserved for 7 nigh
    16.97s  user  발화 시작: Mm-hmm.
    17.47s  user  발화 끝
    20.92s  user  발화 시작: What’s the weather typically like in San Diego in February?
    21.09s  agent 발화 끝
    23.92s  <ret> 발화 (turn5 첫 프레임)
    24.08s  agent 발화 시작: <ret> The typical February weather in San Diego is eighteen 
    24.25s  user  발화 끝
    25.92s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.27s]: (tool result) 18.3°C, humidity 68%, wind 8.1 km/h.
    35.35s  agent 발화 끝
    35.76s  user  발화 시작: Are there any good Italian restaurants nearby?
    38.16s  <ret> 발화 (turn7 첫 프레임)
    38.49s  user  발화 끝
    38.55s  agent 발화 시작: <ret> There are several Italian restaurants near you in San 
    40.16s  ⚡SPAN 주입 [d'=2.00s / d_lead=12.61s]: (tool result) San Diego (32.7157,-117.1611): Little Italy (500m), Buca
    51.17s  agent 발화 끝
    51.41s  user  발화 시작: Can you tell me more about Little Italy?
    53.00s  <ret> 발화 (turn9 첫 프레임)
    53.40s  agent 발화 시작: <ret> Little Italy is located at ninety-two-one-oh-one, with
    53.49s  user  발화 끝
    55.00s  ⚡SPAN 주입 [d'=2.00s / d_lead=13.22s]: (tool result) Little Italy, San Diego, CA 92101, 32.7163° N, 117.1638°
    65.93s  user  발화 시작: …do they have outdoor seating?
    66.62s  agent 발화 끝
    67.56s  <ret> 발화 (turn11 첫 프레임)
    67.63s  agent 발화 시작: <ret> Several restaurants in Little Italy offer outdoor seat
    67.82s  user  발화 끝
    69.56s  ⚡SPAN 주입 [d'=2.00s / d_lead=12.43s]: (tool result) Little Italy (600m, outdoor seating available), Buca di 
    79.45s  user  발화 시작: Perfect! Book
    80.06s  agent 발화 끝
    80.97s  user  발화 끝
