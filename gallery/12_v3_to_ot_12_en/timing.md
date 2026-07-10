# v3_to_ot_12_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_12",
#     "name": "Robin",
#     "location": {
#       "city": "Berlin",
#       "country": "Germany",
#       "timezone": "Europe/Berlin (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "German",
#     "gender": "non-binary",
#     "age_range": "late 30s",
#     "language": "German"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-03-15",
#       "category": "work",
#       "text": "User works as a marketing manager."
#     },
#     {
#       "date": "2025-11-27",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2025-07-25",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in May."
#     },
#     {
#       "date": "2025-06-25",
#       "category": "home",
#       "text": "User's home address is 926 Oak Avenue."
#     },
#     {
#       "date": "2025-06-07",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-10",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-07-31",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Who does Elena Gilbert… | S2 Oh, really? Which one does she end | S3 …but how long were they actually t | S4 That’s a lot of drama!

     0.00s  user  발화 시작: Who does Elena Gilbert…
     1.94s  user  발화 끝
     3.94s  user  발화 시작: …date in The Vampire Diaries?
     5.61s  <ret> 발화 (turn2 첫 프레임)
     5.84s  agent 발화 시작: <ret> Well, Elena has a pretty eventful love life! She dates
     5.85s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.92s]: Elena Gilbert dates both Stefan and Damon Salvatore throughout The Vam
     5.88s  user  발화 끝
    11.66s  user  발화 시작: Oh, really? Which one does she end up with?
    11.77s  agent 발화 끝
    14.07s  <ret> 발화 (turn4 첫 프레임)
    14.47s  agent 발화 시작: <ret> It’s a bit of a journey, but Elena ultimately ends up 
    14.47s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.39s]: Elena ultimately chooses Damon Salvatore in the series finale of The V
    14.66s  user  발화 끝
    15.80s  user  발화 시작: Okay.
    16.30s  user  발화 끝
    18.86s  agent 발화 끝
    19.71s  user  발화 시작: Hmm, that’s interesting. I thought it was Stefan.
    23.23s  user  발화 끝
    23.25s  agent 발화 시작: It’s understandable to think that, as their connection—
    25.44s  user  발화 시작: …but how long were they actually together, Stefan and Elena?
    26.06s  agent 발화 끝
    28.55s  <ret> 발화 (turn9 첫 프레임)
    28.68s  user  발화 끝
    28.77s  agent 발화 시작: <ret> They were a primary couple for two seasons, though the
    28.79s  ⚡SPAN 주입 [d'=1.36s / d_lead=4.03s]: Stefan and Elena were in a primary romantic relationship for two seaso
    31.41s  user  발화 시작: Uh-huh.
    31.91s  user  발화 끝
    32.80s  agent 발화 끝
    33.18s  user  발화 시작: And Damon? How long did *that* last?
    35.34s  <ret> 발화 (turn12 첫 프레임)
    35.65s  agent 발화 시작: <ret> Damon and Elena’s relationship lasted around three sea
    35.66s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.37s]: Damon and Elena were together for approximately three seasons, with in
    35.77s  user  발화 끝
    40.65s  user  발화 시작: That’s a lot of drama!
    41.02s  agent 발화 끝
    42.40s  user  발화 끝
    42.79s  agent 발화 시작: It certainly is! Navigating relationships can be tricky, eve
    50.53s  agent 발화 끝
