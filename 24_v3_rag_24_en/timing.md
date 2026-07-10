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

# EXAMINER(FDB-v2) 단계: S1 I was wondering about the name du  | S2 Oh, interesting. Is it an old name | S3 And is it connected to Afrikaans a | S4 That makes a lot of sense, thank y

     0.00s  user  발화 시작: I was wondering about the name du Plessis. It seems quite co
     4.30s  <ret> 발화 (turn1 첫 프레임)
     4.34s  user  발화 끝
     4.37s  agent 발화 시작: <ret> The name du Plessis originates from France, meaning “o
     5.50s  ⚡SPAN 주입 [d'=1.20s / d_lead=7.74s]: Du Plessis is a French surname, originally denoting someone from Pless
    10.10s  user  발화 시작: Mhm.
    10.74s  user  발화 끝
    12.10s  user  발화 시작: Oh, interesting. Is it an old name, then?
    12.10s  agent 발화 끝
    14.65s  <ret> 발화 (turn4 첫 프레임)
    15.04s  agent 발화 시작: <ret> The earliest records of the name du Plessis date back 
    15.15s  user  발화 끝
    16.66s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.81s]: The name du Plessis originates from France, meaning “of the chapel” or
    21.85s  agent 발화 끝
    22.18s  user  발화 시작: And is it connected to Afrikaans at all? I heard something a
    26.28s  <ret> 발화 (turn6 첫 프레임)
    26.66s  agent 발화 시작: <ret> The du Plessis family were French Huguenots who settle
    26.80s  user  발화 끝
    28.28s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.90s]: The name du Plessis originates from France, meaning “of the chapel” or
    35.35s  user  발화 시작: That makes a lot of sense, thank you.
    35.57s  agent 발화 끝
    37.88s  user  발화 끝
