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

# EXAMINER(FDB-v2) 단계: S1 Book three rooms at Ocean View Hot | S2 And what's the cancellation policy | S3 That sounds good, but— | S4 Is parking included with the reser

     0.00s  user  발화 시작: Book three rooms at Ocean View Hotel in San Diego for seven 
     5.62s  <ret> 발화 (turn1 첫 프레임)
     5.86s  agent 발화 시작: <ret> I’ve reserved three rooms at the Ocean View Hotel in S
     6.02s  user  발화 끝
     7.62s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.78s]: (tool result) CONFIRMED: 3 rooms at Ocean View Hotel, San Diego, Febru
    11.45s  user  발화 시작: Right.
    12.27s  user  발화 끝
    15.64s  agent 발화 끝
    15.68s  user  발화 시작: And what's the cancellation policy?
    17.55s  <ret> 발화 (turn4 첫 프레임)
    17.70s  agent 발화 시작: <ret> The Ocean View Hotel allows free cancellation up to se
    17.89s  user  발화 끝
    19.55s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.72s]: (tool result) Ocean View Hotel: Free cancellation until 72 hours prior
    24.36s  user  발화 시작: That sounds good, but—
    24.42s  agent 발화 끝
    26.07s  user  발화 시작: Is parking included with the reservation?
    26.30s  user  발화 끝
    28.16s  <ret> 발화 (turn7 첫 프레임)
    28.56s  agent 발화 시작: <ret> Parking is available at the hotel for twenty-five doll
    28.65s  user  발화 끝
    30.16s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.04s]: (tool result) Parking: $25 per night.
    35.40s  agent 발화 시작: I can add parking to your reservation for an additional twen
    35.59s  agent 발화 끝
    41.01s  agent 발화 끝
