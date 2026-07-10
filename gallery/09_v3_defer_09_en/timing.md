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

# EXAMINER(FDB-v2) 단계: S1 Book three rooms at Ocean View Hot | S2 …Is parking included with the rese | S3 Wonderful, thank you. Could you al | S4 The Marine Room sounds lovely. Can

     0.00s  user  발화 시작: Book three rooms at Ocean View Hotel in San Diego for seven 
     5.21s  <ret> 발화 (turn1 첫 프레임)
     5.38s  user  발화 끝
     5.45s  agent 발화 시작: <ret> I have reserved three rooms for you at the Ocean View 
     7.21s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.39s]: [{"reservation_id": "987654321", "hotel_name": "Ocean View Hotel", "ci
     8.42s  user  발화 시작: Mm-hmm.
     9.06s  user  발화 끝
     9.84s  agent 발화 끝
     9.97s  user  발화 시작: …Is parking included with the reservation?
    11.78s  <ret> 발화 (turn4 첫 프레임)
    12.10s  agent 발화 시작: <ret> Parking is included with your reservation, at no addit
    12.23s  user  발화 끝
    13.78s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.49s]: [{"parking_included": true, "parking_fee": 0, "amenities": ["pool", "g
    16.59s  agent 발화 끝
    16.90s  user  발화 시작: Wonderful, thank you. Could you also find out about nearby r
    20.53s  <ret> 발화 (turn6 첫 프레임)
    20.88s  user  발화 끝
    20.92s  agent 발화 시작: <ret> The Marine Room and George's at the Cove are both high
    22.53s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.37s]: [{"restaurant_name": "The Marine Room", "cuisine": "Seafood", "rating"
    26.29s  agent 발화 끝
    26.58s  user  발화 시작: The Marine Room sounds lovely. Can you make a reservation th
    32.06s  <ret> 발화 (turn8 첫 프레임)
    32.30s  agent 발화 시작: <ret> I have secured a reservation for four at The Marine Ro
    32.37s  user  발화 끝
    34.06s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.30s]: [{"reservation_id": "123456789", "restaurant_name": "The Marine Room",
    38.60s  agent 발화 끝
