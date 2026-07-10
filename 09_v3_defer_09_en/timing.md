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

# EXAMINER(FDB-v2) 단계: S1 Book three rooms at Ocean View Hot | S2 What’s the cancellation policy? | S3 That sounds good, but— | S4 Is parking included with the reser

     0.00s  user  발화 시작: Book three rooms at Ocean View Hotel in San Diego for seven 
     4.97s  <ret> 발화 (turn1 첫 프레임)
     5.20s  agent 발화 시작: <ret> I’ve reserved three rooms at the Ocean View Hotel in S
     5.46s  user  발화 끝
     6.97s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.78s]: (tool result) Reservation confirmed: Ocean View Hotel, San Diego, 3 ro
    12.01s  user  발화 시작: Right.
    12.51s  user  발화 끝
    16.98s  agent 발화 끝
    19.73s  user  발화 시작: What’s the cancellation policy?
    22.76s  <ret> 발화 (turn4 첫 프레임)
    23.08s  agent 발화 시작: <ret> You can cancel for free until January twenty-fifth.
    23.29s  user  발화 끝
    24.36s  ⚡SPAN 주입 [d'=1.60s / d_lead=1.93s]: (tool result) Free cancellation until January 25th.
    25.01s  agent 발화 끝
    25.48s  user  발화 시작: That sounds good, but—
    28.31s  user  발화 시작: Is parking included with the reservation?
    28.43s  user  발화 끝
    34.32s  <ret> 발화 (turn7 첫 프레임)
    34.48s  agent 발화 시작: <ret> Parking is available at the hotel for a daily fee of t
    34.57s  user  발화 끝
    36.32s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.07s]: (tool result) Parking: $25 per day.
    40.55s  agent 발화 끝
