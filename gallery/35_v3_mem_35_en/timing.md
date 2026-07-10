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


     0.00s  agent 발화 시작: Hi Avery, I'm Klen. I understand you’re planning a trip to N
     4.72s  agent 발화 끝
     5.48s  user  발화 시작: Yes, that’s right. I’m starting to think about where to go t
     8.95s  <ret> 발화 (turn2 첫 프레임)
     9.34s  agent 발화 시작: <ret> Given your trip to New Zealand is planned for March, a
     9.50s  user  발화 끝
    10.95s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.73s]: [2026-06-07] User is planning a trip to New Zealand in March.
    16.60s  user  발화 시작: Mm-hmm.
    17.23s  user  발화 끝
    18.89s  agent 발화 시작: Fiordland offers incredible opportunities for photographing 
    19.07s  agent 발화 끝
    26.35s  agent 발화 끝
    26.60s  user  발화 시작: …Is it easy to get to from Queenstown?
    29.35s  <ret> 발화 (turn6 첫 프레임)
    29.51s  agent 발화 시작: <ret> Getting to Fiordland from Queenstown is quite straight
    29.65s  user  발화 끝
    31.35s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.91s]: [2026-06-07] User is planning a trip to New Zealand in March.
    33.45s  user  발화 시작: Mm-hmm.
    34.08s  user  발화 끝
    41.42s  agent 발화 끝
    41.88s  user  발화 시작: That sounds manageable. Are there good places to stay near t
    46.42s  user  발화 끝
    46.57s  <ret> 발화 (turn9 첫 프레임)
    46.81s  agent 발화 시작: <ret> There are several charming accommodations near Fiordla
    48.57s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.66s]: [2026-06-07] User is planning a trip to New Zealand in March.
    57.48s  agent 발화 끝
