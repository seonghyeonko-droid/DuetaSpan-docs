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

# EXAMINER(FDB-v2) 단계: S1 I’m hoping to book three rooms at  | S2 …a shuttle service to the airport? | S3 That’s great— | S4 Okay, good to know. Let’s go ahead

     0.00s  user  발화 시작: I’m hoping to book three rooms at Ocean View Hotel in San Di
     5.13s  <ret> 발화 (turn1 첫 프레임)
     5.37s  agent 발화 시작: <ret> I’ve reserved three rooms at the Ocean View Hotel in S
     5.65s  user  발화 끝
     7.13s  ⚡SPAN 주입 [d'=2.00s / d_lead=13.55s]: (tool result) Ocean View Hotel, San Diego, 3 rooms, 2026-02-10 to 2026
    13.21s  user  발화 시작: Right.
    13.71s  user  발화 끝
    18.92s  agent 발화 끝
    21.66s  user  발화 시작: That sounds perfect. Do they have…
    24.25s  user  발화 끝
    25.93s  user  발화 시작: …a shuttle service to the airport?
    27.65s  <ret> 발화 (turn5 첫 프레임)
    27.80s  agent 발화 시작: <ret> Yes, the Ocean View Hotel does offer an airport shuttl
    27.91s  user  발화 끝
    29.65s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.05s]: (tool result) Ocean View Hotel, San Diego: airport shuttle available, 
    34.85s  agent 발화 끝
    34.96s  user  발화 시작: That’s great—
    35.78s  user  발화 끝
    35.88s  user  발화 시작: …actually, before we finalize, could you check if they allow
    39.30s  <ret> 발화 (turn8 첫 프레임)
    39.54s  agent 발화 시작: <ret> They do allow pets at the Ocean View Hotel, with a sev
    39.68s  user  발화 끝
    41.30s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.82s]: (tool result) Ocean View Hotel, San Diego: pets allowed, $75 per pet p
    46.21s  user  발화 시작: Okay, good to know. Let’s go ahead and confirm the booking a
    46.36s  agent 발화 끝
    49.77s  user  발화 끝
    49.93s  agent 발화 시작: Wonderful. I’m glad the pet policy works for you. Your trip 
    56.37s  agent 발화 끝
