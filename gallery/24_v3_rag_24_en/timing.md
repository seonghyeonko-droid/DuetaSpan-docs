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


     0.00s  user  발화 시작: I’ve been researching my family history, and I keep running 
     8.44s  <ret> 발화 (turn1 첫 프레임)
     8.52s  agent 발화 시작: <ret> It’s wonderful you’re connecting with your roots. Fami
     8.67s  user  발화 끝
     9.64s  ⚡SPAN 주입 [d'=1.20s / d_lead=8.21s]: [source: Wikipedia] Du Plessis is a French surname of Huguenot origin,
    16.68s  agent 발화 시작: The name Du Plessis originated as a locational name, identif
    16.72s  agent 발화 끝
    23.04s  user  발화 시작: Mhm.
    23.81s  user  발화 끝
    25.20s  agent 발화 끝
    25.49s  user  발화 시작: Oh, a fortified place! That's interesting. Was it a specific
    30.25s  <ret> 발화 (turn5 첫 프레임)
    30.49s  agent 발화 시작: <ret> The Du Plessis name was indeed associated with noble f
    30.63s  user  발화 끝
    32.25s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.76s]: [source: House of Names] The Plessis family were prominent in Normandy
    37.26s  agent 발화 끝
