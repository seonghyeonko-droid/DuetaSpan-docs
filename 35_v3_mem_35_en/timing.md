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

# EXAMINER(FDB-v2) 단계: S1 Yeah, I am. I’m starting to look a | S2 Not really, I was hoping you could | S3 …Is it easy to get to from Christc | S4 I think independent travel would b

     0.00s  agent 발화 시작: Hi Avery, I'm Klen.
     1.88s  agent 발화 끝
     2.01s  user  발화 시작: Yeah, I am. I’m starting to look at flights for that New Zea
     6.03s  <ret> 발화 (turn2 첫 프레임)
     6.36s  user  발화 끝
     6.43s  agent 발화 시작: <ret> You’re planning a trip to New Zealand in March, which 
     8.03s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.44s]: [2026-06-07] User is planning a trip to New Zealand in March.
    14.86s  agent 발화 끝
    15.17s  user  발화 시작: Not really, I was hoping you could suggest something. I’m re
    21.12s  <ret> 발화 (turn4 첫 프레임)
    21.14s  agent 발화 시작: <ret> Alpine wildflower photography in New Zealand… that sou
    21.19s  user  발화 끝
    23.12s  ⚡SPAN 주입 [d'=2.00s / d_lead=12.29s]: [2025-08-26] User is into alpine wildflower photography.
    32.69s  user  발화 시작: …Is it easy to get to from Christchurch?
    33.43s  agent 발화 끝
    35.55s  user  발화 끝
    35.70s  agent 발화 시작: That’s a very practical question. The Mackenzie Basin is abo
    42.12s  user  발화 시작: Mm-hmm.
    42.76s  user  발화 끝
    44.28s  agent 발화 끝
    44.31s  agent 발화 시작: Many guided photography tours operate from Christchurch, or 
    55.53s  agent 발화 끝
    56.89s  user  발화 시작: I think independent travel would be better. What’s the weath
    61.51s  user  발화 끝
