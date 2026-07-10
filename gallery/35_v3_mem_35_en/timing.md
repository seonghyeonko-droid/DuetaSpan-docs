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

# EXAMINER(FDB-v2) 단계: S1 Yeah, I am. I’m thinking of going  | S2 Actually, yes! But I was wondering | S3 …But March is still good for *some | S4 That sounds perfect, yes please.

     0.00s  agent 발화 시작: Hi Avery, I'm Klen.
     1.65s  agent 발화 끝
     2.44s  user  발화 시작: Yeah, I am. I’m thinking of going somewhere warm in March.
     7.02s  agent 발화 시작: March is a lovely time to escape the Canadian winter. You me
     7.02s  user  발화 끝
    13.06s  user  발화 시작: Actually, yes! But I was wondering about the best time to se
    13.79s  agent 발화 끝
    18.48s  <ret> 발화 (turn4 첫 프레임)
    18.63s  agent 발화 시작: <ret> That's a beautiful thought. New Zealand offers stunnin
    18.66s  user  발화 끝
    20.40s  ⚡SPAN 주입 [d'=1.92s / d_lead=11.54s]: [2026-06-07] User is planning a trip to New Zealand in March. – are yo
    30.17s  agent 발화 끝
    31.28s  user  발화 시작: …But March is still good for *some* flowers, right?
    34.05s  <ret> 발화 (turn6 첫 프레임)
    34.21s  agent 발화 시작: <ret> March is still excellent for lower-altitude blooms, an
    34.37s  user  발화 끝
    36.05s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.05s]: [2025-08-26] User is into alpine wildflower photography. – Knowing you
    38.00s  user  발화 시작: Mm-hmm.
    38.64s  user  발화 끝
    39.26s  agent 발화 끝
    39.32s  agent 발화 시작: The Canterbury region on the South Island is particularly kn
    49.01s  agent 발화 끝
    51.28s  user  발화 시작: That sounds perfect, yes please.
    53.35s  user  발화 끝
