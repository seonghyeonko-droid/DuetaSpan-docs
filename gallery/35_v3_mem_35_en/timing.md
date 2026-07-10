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
     4.07s  agent 발화 끝
     4.84s  user  발화 시작: Yes, that’s right. I was hoping you could help me find some 
    11.26s  <ret> 발화 (turn2 첫 프레임)
    11.66s  agent 발화 시작: <ret> You mentioned your interest in alpine wildflower photo
    11.66s  ⚡SPAN 주입 [d'=1.84s / d_lead=3.24s]: [2025-08-26] User is into alpine wildflower photography.
    11.75s  user  발화 끝
    14.33s  user  발화 시작: …are there any specific times of year that are best for that
    14.90s  agent 발화 끝
    17.35s  user  발화 시작: Mm-hmm.
    17.84s  user  발화 끝
    18.26s  <ret> 발화 (turn5 첫 프레임)
    18.34s  agent 발화 시작: <ret> The peak season for alpine wildflowers is December to 
    18.34s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.46s]: New Zealand’s alpine wildflower season typically peaks from December t
    18.50s  user  발화 끝
    25.59s  user  발화 시작: That sounds perfect. I’m already planning to be there in Mar
    25.80s  agent 발화 끝
    29.75s  user  발화 끝
