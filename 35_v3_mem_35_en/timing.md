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

# EXAMINER(FDB-v2) 단계: S1 Yes, that’s right. I’m starting to | S2 Do you think March is a good time  | S3 …are they still in bloom then, or  | S4 Okay, good to know. Maybe the Nort

     0.00s  agent 발화 시작: Hi Avery, I'm Klen. I understand you're planning a trip to N
     4.81s  agent 발화 끝
     4.88s  user  발화 시작: Yes, that’s right. I’m starting to look at flights and just 
    10.08s  <ret> 발화 (turn2 첫 프레임)
    10.48s  agent 발화 시작: <ret> You prefer a window seat, so I can certainly keep that
    10.67s  user  발화 끝
    12.08s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.09s]: [2026-06-13] User prefers a window seat when traveling.
    15.71s  user  발화 시작: Mm-hmm.
    16.34s  user  발화 끝
    17.57s  agent 발화 끝
    17.61s  user  발화 시작: Do you think March is a good time to go for seeing wildflowe
    21.44s  agent 발화 시작: March is generally a lovely time in New Zealand, though the 
    21.60s  user  발화 끝
    24.99s  user  발화 시작: …are they still in bloom then, or is it too late?
    25.84s  agent 발화 끝
    28.69s  user  발화 끝
    28.81s  <ret> 발화 (turn7 첫 프레임)
    28.96s  agent 발화 시작: <ret> Peak bloom depends on the specific location and elevat
    30.81s  ⚡SPAN 주입 [d'=2.00s / d_lead=16.24s]: New Zealand's alpine wildflower season typically peaks from December t
    45.19s  agent 발화 끝
    45.21s  user  발화 시작: Okay, good to know. Maybe the North Island then.
    49.37s  user  발화 끝
