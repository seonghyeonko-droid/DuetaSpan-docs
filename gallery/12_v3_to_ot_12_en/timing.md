# v3_to_ot_12_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_12",
#     "name": "Kim",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "non-binary",
#     "age_range": "late 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-30",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-01-22",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2025-11-20",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     },
#     {
#       "date": "2025-09-20",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in October."
#     },
#     {
#       "date": "2025-08-17",
#       "category": "diet",
#       "text": "User is vegetarian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-06-18",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: I was just reading about World War One, and I was wondering…
     6.02s  <ret> 발화 (turn1 첫 프레임)
     6.25s  agent 발화 시작: <ret> They fought extensively on the Western Front, primaril
     6.26s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.60s]: The British Army fought extensively on the Western Front in France dur
     6.48s  user  발화 끝
     8.33s  user  발화 시작: Yeah.
     8.96s  user  발화 끝
     9.81s  user  발화 시작: Oh, that reminds me, did you take out the trash?
     9.85s  agent 발화 끝
    12.40s  user  발화 끝
    12.45s  user  발화 시작: That's interesting. Were there any other significant places 
    17.71s  <ret> 발화 (turn5 첫 프레임)
    18.10s  agent 발화 시작: <ret> Beyond France, British forces were involved in signifi
    18.11s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.02s]: British forces also fought in Belgium, Gallipoli, Mesopotamia, and Afr
    18.19s  user  발화 끝
    26.00s  agent 발화 시작: It was a truly global conflict, wasn’t it? It's important to
    26.12s  agent 발화 끝
    30.68s  agent 발화 끝
