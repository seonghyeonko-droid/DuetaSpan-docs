# v3_selfc_07_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_07",
#     "name": "Jonas",
#     "location": {
#       "city": "New York",
#       "country": "United States",
#       "timezone": "America/New_York (EST, UTC-5)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "male",
#     "age_range": "50s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-21",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in December."
#     },
#     {
#       "date": "2026-06-19",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2026-06-01",
#       "category": "hobby",
#       "text": "User is into vintage synth collecting."
#     },
#     {
#       "date": "2026-03-12",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2025-12-24",
#       "category": "work",
#       "text": "User works as a accountant."
#     },
#     {
#       "date": "2025-12-06",
#       "category": "home",
#       "text": "User's home address is 761 Birch Road."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-13",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I’m trying to plan a surprise anni | S2 I was thinking Rome, but I’m not s | S3 …if it’s too cliché. Or maybe Flor | S4 …Is it expensive to eat there, gen

     0.00s  user  발화 시작: I’m trying to plan a surprise anniversary trip for my wife. 
     6.68s  agent 발화 시작: Yeah.
     6.68s  user  발화 끝
     7.07s  agent 발화 시작: That sounds lovely! A surprise trip is a wonderful gesture.
     7.07s  agent 발화 끝
    11.00s  user  발화 시작: I was thinking Rome, but I’m not sure…
    11.00s  agent 발화 끝
    14.14s  user  발화 시작: …if it’s too cliché. Or maybe Florence.
    14.14s  user  발화 끝
    16.77s  <ret> 발화 (turn5 첫 프레임)
    16.87s  ⚡SPAN 주입 [d'=0.82s / d_lead=7.46s]: Florence is a popular destination for romantic getaways, known for its
    16.89s  agent 발화 시작: <ret> Florence is a really popular choice for a romantic get
    16.89s  user  발화 끝
    24.36s  user  발화 시작: …Is it expensive to eat there, generally?
    24.36s  agent 발화 끝
    27.10s  <ret> 발화 (turn7 첫 프레임)
    27.11s  agent 발화 시작: <ret> Trattoria Mario is a good moderate option, while La Gi
    27.11s  user  발화 끝
    27.20s  ⚡SPAN 주입 [d'=0.30s / d_lead=14.93s]: (tool result) Restaurants: Trattoria Mario (moderate, $$), La Giostra 
    42.04s  agent 발화 끝
