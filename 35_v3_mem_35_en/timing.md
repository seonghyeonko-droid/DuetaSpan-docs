# v3_mem_35_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_35",
#     "name": "Avery",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "non-binary",
#     "age_range": "50s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-14",
#       "category": "home",
#       "text": "User's home address is 70 Cedar Lane."
#     },
#     {
#       "date": "2026-06-13",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-06-07",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in March."
#     },
#     {
#       "date": "2025-08-26",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-25",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2026-02-06",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-11-23",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Hi Klen, thanks! I’m starting to p | S2 That sounds beautiful! I’m really  | S3 …are there any specific regions th | S4 Oh, that’s great to know. And I al

     0.00s  agent 발화 시작: Hi Avery, I'm Klen. It's lovely to connect with you today.
     3.84s  agent 발화 끝
     4.51s  user  발화 시작: Hi Klen, thanks! I’m starting to plan a trip to New Zealand 
    10.12s  <ret> 발화 (turn2 첫 프레임)
    10.52s  agent 발화 시작: <ret> New Zealand sounds wonderful! You’re planning that tri
    10.72s  user  발화 끝
    12.12s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.46s]: [2026-06-07] User is planning a trip to New Zealand in March.
    15.91s  agent 발화 시작: Yes, you mentioned a New Zealand trip for March last month… 
    15.98s  agent 발화 끝
    22.15s  user  발화 시작: Mm-hmm.
    22.78s  user  발화 끝
    24.29s  agent 발화 끝
    25.40s  user  발화 시작: That sounds beautiful! I’m really into photography, specific
    31.39s  agent 발화 시작: Wildflower photography is a passion of yours… and New Zealan
    31.52s  user  발화 끝
    38.09s  user  발화 시작: …are there any specific regions that are particularly good f
    38.85s  agent 발화 끝
    43.37s  user  발화 끝
    43.80s  agent 발화 시작: Alpine wildflowers thrive in certain areas… the Southern Alp
    50.51s  agent 발화 끝
    50.76s  user  발화 시작: Oh, that’s great to know. And I always prefer a window seat 
    55.13s  <ret> 발화 (turn10 첫 프레임)
    55.34s  user  발화 끝
    55.37s  agent 발화 시작: <ret> I can note your preference for a window seat… it's a s
    57.13s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.48s]: [2026-06-13] User prefers a window seat when traveling.
    61.85s  agent 발화 끝
