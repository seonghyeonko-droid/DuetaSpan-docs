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

# EXAMINER(FDB-v2) 단계: S1 I was wondering… where does the na | S2 Oh, that’s interesting. Was it a c | S3 And did they… did they ever leave  | S4 So that’s likely how it got to Sou

     0.00s  user  발화 시작: I was wondering… where does the name du Plessis actually com
     7.25s  <ret> 발화 (turn1 첫 프레임)
     7.28s  user  발화 끝
     7.31s  agent 발화 시작: <ret> The name du Plessis originates from France, specifical
     8.45s  ⚡SPAN 주입 [d'=1.20s / d_lead=10.01s]: Du Plessis is a French surname originally denoting someone from Plessi
    14.89s  user  발화 시작: Mhm.
    15.71s  user  발화 끝
    17.31s  agent 발화 끝
    17.43s  user  발화 시작: Oh, that’s interesting. Was it a common name in France then?
    21.03s  <ret> 발화 (turn4 첫 프레임)
    21.41s  agent 발화 시작: <ret> Yes, the Plessis family were actually nobles in France
    21.51s  user  발화 끝
    23.03s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.86s]: The Plessis family were nobles of French origin, becoming prominent in
    30.27s  agent 발화 끝
    30.52s  user  발화 시작: And did they… did they ever leave France, do you know?
    33.71s  <ret> 발화 (turn6 첫 프레임)
    33.78s  agent 발화 시작: <ret> It appears some people with the du Plessis name did le
    33.90s  user  발화 끝
    34.67s  ⚡SPAN 주입 [d'=0.96s / d_lead=8.67s]: Huguenots bearing the name du Plessis emigrated to South Africa in the
    42.27s  user  발화 시작: So that’s likely how it got to South Africa, then?
    42.45s  agent 발화 끝
    45.52s  agent 발화 시작: It seems quite probable, yes. Often, family names travel wit
    45.69s  user  발화 끝
    56.19s  agent 발화 끝
