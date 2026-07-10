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


     0.00s  agent 발화 시작: Hi Avery, I’m Klen.
     1.61s  agent 발화 끝
     2.41s  user  발화 시작: Yes, I am! I’m thinking about that trip to New Zealand in Ma
     7.28s  <ret> 발화 (turn2 첫 프레임)
     7.55s  user  발화 끝
     7.66s  agent 발화 시작: <ret> So, you’re planning a trip to New Zealand in March… ar
     9.28s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.18s]: [2026-06-07] User is planning a trip to New Zealand in March.
    14.84s  agent 발화 끝
    14.84s  user  발화 시작: Well, I’m really into alpine wildflower photography, so some
    22.17s  <ret> 발화 (turn4 첫 프레임)
    22.25s  agent 발화 시작: <ret> Alpine wildflower photography in New Zealand sounds lo
    22.35s  user  발화 끝
    24.17s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.28s]: [2025-08-26] User is into alpine wildflower photography.
    27.57s  user  발화 시작: Mm-hmm.
    28.02s  user  발화 끝
    29.31s  agent 발화 시작: …with areas like Arthur’s Pass and Mount Cook National Park 
    29.53s  agent 발화 끝
    38.95s  agent 발화 끝
    39.32s  user  발화 시작: …Actually, before we get to hotels, could you tell me what t
    46.05s  user  발화 끝
    46.18s  <ret> 발화 (turn8 첫 프레임)
    46.42s  agent 발화 시작: <ret> The average high is around eighteen degrees Celsius, w
    47.30s  ⚡SPAN 주입 [d'=1.12s / d_lead=9.18s]: [{"date": "2024-03-15", "high_temp_c": 18, "low_temp_c": 6, "condition
    55.60s  agent 발화 끝
