# v3_hesit_18_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_hesit_18",
#     "name": "Paul",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "male",
#     "age_range": "late 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2025-12-13",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in October."
#     },
#     {
#       "date": "2025-10-06",
#       "category": "work",
#       "text": "User works as a graphic designer."
#     },
#     {
#       "date": "2025-09-07",
#       "category": "pet",
#       "text": "User has a Golden Retriever named Max."
#     },
#     {
#       "date": "2025-06-11",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-15",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-10-01",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-09-24",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Uh, who won the Australian Open me | S2 …did Nadal win it any other years? | S3 Welll… that’s good to know. What a | S4 Hmm, that’s a lot. Is Federer stil

     0.00s  user  발화 시작: Uh, who won the Australian Open men’s final?
     2.30s  <ret> 발화 (turn1 첫 프레임)
     2.52s  agent 발화 시작: <ret> It was a thrilling match, and Roger Federer ultimately
     2.54s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.67s]: Roger Federer won the Australian Open men’s singles title in 2017, def
     2.73s  user  발화 끝
     6.47s  user  발화 시작: …did Nadal win it any other years?
     7.19s  agent 발화 끝
     8.77s  user  발화 끝
     8.82s  agent 발화 시작: Rafael Nadal has won the Australian Open twice, in 2009 and 
    15.03s  agent 발화 끝
    15.06s  user  발화 시작: Welll… that’s good to know. What about Djokovic?
    17.97s  <ret> 발화 (turn5 첫 프레임)
    18.21s  agent 발화 시작: <ret> Novak Djokovic holds the record with ten Australian Op
    18.21s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.84s]: Novak Djokovic has won the Australian Open a record ten times, as of J
    18.43s  user  발화 끝
    24.05s  agent 발화 끝
    24.09s  user  발화 시작: Hmm, that’s a lot. Is Federer still playing?
    27.05s  user  발화 끝
    27.23s  agent 발화 시작: Sadly, Roger Federer has retired from professional tennis; h
    33.25s  agent 발화 끝
