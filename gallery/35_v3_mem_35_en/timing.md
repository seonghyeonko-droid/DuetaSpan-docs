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


     0.00s  agent 발화 시작: Hi Avery, I'm Klen. I understand you're planning a trip to N
     4.72s  agent 발화 끝
     5.21s  user  발화 시작: Yes, that's right! I’m starting to look at flights and thing
     9.71s  <ret> 발화 (turn2 첫 프레임)
    10.11s  agent 발화 시작: <ret> March is a beautiful time to visit. New Zealand’s wild
    10.25s  user  발화 끝
    11.71s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.13s]: [2026-06-07] User is planning a trip to New Zealand in March.
    16.52s  user  발화 시작: …do you think I should book flights and accommodation togeth
    17.24s  agent 발화 끝
    18.72s  user  발화 시작: Mhm.
    19.21s  user  발화 끝
    20.95s  <ret> 발화 (turn5 첫 프레임)
    21.02s  agent 발화 시작: <ret> When booking flights, Avery, I recall you prefer a win
    21.06s  user  발화 끝
    22.95s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.41s]: [2026-06-13] User prefers a window seat when traveling.
    23.44s  user  발화 시작: Mm-hmm.
    23.93s  user  발화 끝
    28.39s  user  발화 시작: Oh, that’s a good reminder! Yes, please. And what about the 
    28.43s  agent 발화 끝
    34.69s  user  발화 끝
