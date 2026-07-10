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


     0.00s  agent 발화 시작: Hi Avery, I’m Klen. I understand you’re thinking about trave
     1.52s  agent 발화 끝
     1.66s  user  발화 시작: Yeah, I am. I’m trying to decide where to go in March, and I
     5.83s  <ret> 발화 (turn2 첫 프레임)
     6.23s  agent 발화 시작: <ret> You’re planning a trip to New Zealand in March, which 
     6.37s  user  발화 끝
     7.83s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.29s]: [2026-06-07] User is planning a trip to New Zealand in March.
    14.43s  user  발화 시작: …Is it going to be super crowded then?
    14.52s  agent 발화 끝
    15.24s  agent 발화 시작: That’s a very practical question, Avery. March is shoulder s
    15.24s  user  발화 끝
    23.10s  user  발화 시작: Mm-hmm.
    25.50s  <ret> 발화 (turn6 첫 프레임)
    25.64s  agent 발화 시작: <ret> New Zealand offers incredible opportunities for alpine
    25.77s  agent 발화 끝
    27.12s  user  발화 끝
    27.50s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.86s]: [2025-08-26] User is into alpine wildflower photography.
    32.49s  agent 발화 끝
    32.50s  agent 발화 시작: …and March is when many of the later-blooming species are st
    33.71s  user  발화 시작: Mm-hmm.
    34.34s  user  발화 끝
    35.88s  user  발화 시작: Oh, that sounds perfect! Do you have any recommendations for
    36.34s  agent 발화 끝
    42.19s  user  발화 끝
