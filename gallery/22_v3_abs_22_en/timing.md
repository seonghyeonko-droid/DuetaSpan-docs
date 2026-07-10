# v3_abs_22_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_abs_22",
#     "name": "Freya",
#     "location": {
#       "city": "Berlin",
#       "country": "Germany",
#       "timezone": "Europe/Berlin (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "German",
#     "gender": "female",
#     "age_range": "early 20s",
#     "language": "German"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-09",
#       "category": "work",
#       "text": "User works as a graduate student."
#     },
#     {
#       "date": "2026-01-01",
#       "category": "home",
#       "text": "User's home address is 908 Cedar Lane."
#     },
#     {
#       "date": "2025-12-15",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in October."
#     },
#     {
#       "date": "2025-12-11",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     },
#     {
#       "date": "2025-06-02",
#       "category": "diet",
#       "text": "User is vegetarian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-01",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2026-02-20",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-12-04",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 In what year was The Blue School e | S2 Oh, that's a shame. Um, well… do y | S3 It’s my aunt. She’s… well… | S4 …she’s just very critical of every

     0.00s  user  발화 시작: In what year was The Blue School established?
     2.62s  <ret> 발화 (turn1 첫 프레임)
     2.78s  agent 발화 시작: <ret> It seems the founding year of The Blue School isn’t wi
     2.78s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.00s]: (no information found)
     2.96s  user  발화 끝
     7.78s  agent 발화 끝
     7.88s  user  발화 시작: Oh, that's a shame. Um, well… do you know anything about han
    13.87s  agent 발화 시작: That’s a very common challenge, and it takes courage to even
    13.99s  user  발화 끝
    20.40s  agent 발화 끝
    20.76s  user  발화 시작: It’s my aunt. She’s… well…
    22.51s  user  발화 끝
    23.77s  user  발화 시작: …she’s just very critical of everything I do.
    26.40s  user  발화 끝
    26.50s  agent 발화 시작: [curious] It sounds like her criticism is really getting to 
    41.12s  agent 발화 끝
