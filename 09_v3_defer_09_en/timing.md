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

# EXAMINER(FDB-v2) 단계: S1 Book three rooms at Ocean View Hot | S2 interrupting… Is parking included  | S3 Okay, and could you add a request  | S4 Great. What’s the cancellation pol

     0.00s  user  발화 시작: Book three rooms at Ocean View Hotel in San Diego for seven 
     5.03s  <ret> 발화 (turn1 첫 프레임)
     5.19s  user  발화 끝
     5.27s  agent 발화 시작: <ret> I have reserved three rooms for you at the Ocean View 
     7.03s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.83s]: [{"confirmation_number": "A7B29X", "hotel_name": "Ocean View Hotel", "
     8.93s  user  발화 시작: interrupting… Is parking included with the reservation?
     9.10s  agent 발화 끝
    11.97s  agent 발화 시작: Parking is available at the hotel for twenty-five dollars pe
    12.03s  user  발화 끝
    16.22s  agent 발화 끝
    16.66s  user  발화 시작: Okay, and could you add a request for a room with an ocean v
    20.37s  <ret> 발화 (turn5 첫 프레임)
    20.64s  user  발화 끝
    20.69s  agent 발화 시작: <ret> I’ve added a request for an ocean view room to your re
    22.37s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.17s]: [{"confirmation_number": "A7B29X", "request_status": "pending"}]
    22.96s  user  발화 시작: Yeah.
    23.64s  user  발화 끝
    24.85s  agent 발화 시작: …it is currently pending, but the hotel will do its best to 
    24.86s  agent 발화 끝
    29.89s  user  발화 시작: Great. What’s the cancellation policy?
    29.99s  agent 발화 끝
    31.88s  <ret> 발화 (turn9 첫 프레임)
    32.20s  agent 발화 시작: <ret> You may cancel for a full refund up to seventy-two hou
    32.38s  user  발화 끝
    33.88s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.59s]: [{"confirmation_number": "A7B29X", "cancellation_policy": "Full refund
    37.80s  agent 발화 끝
