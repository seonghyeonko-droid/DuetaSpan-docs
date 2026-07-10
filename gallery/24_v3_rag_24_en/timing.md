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

# EXAMINER(FDB-v2) 단계: S1 I was wondering… where does the na | S2 Oh, a place name… interesting. Was | S3 Hmm, so it’s old… did they spread  | S4 That makes sense, I know my ancest

     0.00s  user  발화 시작: I was wondering… where does the name du Plessis actually com
     6.63s  <ret> 발화 (turn1 첫 프레임)
     6.67s  user  발화 끝
     6.71s  agent 발화 시작: <ret> The name du Plessis originated as a toponymic name, me
     7.83s  ⚡SPAN 주입 [d'=1.20s / d_lead=11.09s]: Du Plessis is a French surname, originating as a toponymic name for so
    15.01s  user  발화 시작: Mhm.
    15.51s  user  발화 끝
    17.77s  user  발화 시작: Oh, a place name… interesting. Was it a common name, then?
    17.79s  agent 발화 끝
    21.73s  <ret> 발화 (turn4 첫 프레임)
    22.11s  agent 발화 시작: <ret> The Plessis family was quite prominent, actually, beco
    22.16s  user  발화 끝
    23.73s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.07s]: The Plessis family was a noble family of French origin, rising to prom
    31.19s  agent 발화 끝
    31.47s  user  발화 시작: Hmm, so it’s old… did they spread beyond France at all?
    35.85s  <ret> 발화 (turn6 첫 프레임)
    35.92s  agent 발화 시작: <ret> Yes, many people with the name du Plessis emigrated to
    36.06s  user  발화 끝
    36.81s  ⚡SPAN 주입 [d'=0.96s / d_lead=8.21s]: Huguenots bearing the name du Plessis emigrated to South Africa in the
    43.99s  user  발화 시작: That makes sense, I know my ancestors did come from South Af
    44.13s  agent 발화 끝
    49.27s  agent 발화 시작: You’re very welcome. It’s wonderful to learn about where we 
    49.41s  user  발화 끝
    56.03s  agent 발화 끝
