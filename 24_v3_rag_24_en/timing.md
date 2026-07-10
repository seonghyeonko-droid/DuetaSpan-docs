# v3_rag_24_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_24",
#     "name": "Ada",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "female",
#     "age_range": "late 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-20",
#       "category": "home",
#       "text": "User's home address is 209 Cedar Lane."
#     },
#     {
#       "date": "2026-04-03",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2026-01-30",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2025-12-29",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2025-08-13",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     },
#     {
#       "date": "2025-07-23",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in December."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-12-30",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-08-25",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-06-10",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: I've been researching my family history, and I keep coming a
     8.33s  <ret> 발화 (turn1 첫 프레임)
     8.40s  agent 발화 시작: <ret> The name Du Plessis originally identified someone from
     8.44s  user  발화 끝
     9.37s  ⚡SPAN 주입 [d'=1.04s / d_lead=5.83s]: [source: Wikipedia] Du Plessis is a French surname, originally denotin
    12.77s  user  발화 시작: Mhm.
    13.40s  user  발화 끝
    14.23s  agent 발화 끝
    14.31s  user  발화 시작: Oh, so it’s French? I always assumed it was something else—m
    21.01s  <ret> 발화 (turn4 첫 프레임)
    21.39s  agent 발화 시작: <ret> While it’s found among Dutch communities, the surname 
    21.45s  user  발화 끝
    23.01s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.06s]: [source: House of Names] The surname Du Plessis is of French origin, a
    29.46s  agent 발화 끝
