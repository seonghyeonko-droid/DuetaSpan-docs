# v3_rag_27_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_27",
#     "name": "Kim",
#     "location": {
#       "city": "Paris",
#       "country": "France",
#       "timezone": "Europe/Paris (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "French",
#     "gender": "non-binary",
#     "age_range": "early 20s",
#     "language": "French"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-17",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     },
#     {
#       "date": "2026-03-12",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2025-12-07",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2025-12-06",
#       "category": "home",
#       "text": "User's home address is 411 Maple Drive."
#     },
#     {
#       "date": "2025-09-15",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2025-06-11",
#       "category": "work",
#       "text": "User works as a architect."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-06-26",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Do you know… | S2 Hmm, and where exactly in Rome? | S3 …was he involved in any other proj | S4 Oh, interesting! What kind of musi

     0.00s  user  발화 시작: Do you know…
     0.82s  user  발화 끝
     2.93s  user  발화 시작: …when Lux Aurunque was born?
     4.79s  <ret> 발화 (turn2 첫 프레임)
     5.03s  agent 발화 시작: <ret> Lux Aurunque was born in Italy… on November 22, 1970. 
     5.20s  user  발화 끝
     6.79s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.62s]: [source: AllMusic] Lux Aurunque was born in Rome, Italy on November 22
     8.03s  user  발화 시작: Mm-hmm.
     8.52s  user  발화 끝
    13.65s  agent 발화 끝
    14.05s  user  발화 시작: Hmm, and where exactly in Rome?
    16.05s  <ret> 발화 (turn5 첫 프레임)
    16.09s  agent 발화 시작: <ret> He was born in Rome, specifically…
    16.30s  user  발화 끝
    17.41s  ⚡SPAN 주입 [d'=1.36s / d_lead=2.45s]: [source: Discogs] Lux Aurunque was born in the Monteverde neighborhood
    18.54s  agent 발화 끝
    18.58s  user  발화 시작: …was he involved in any other projects besides Lux Aurunque?
    22.16s  <ret> 발화 (turn7 첫 프레임)
    22.24s  agent 발화 시작: <ret> …and was also a member of the duo Terminale, alongside
    22.38s  user  발화 끝
    23.44s  ⚡SPAN 주입 [d'=1.28s / d_lead=8.44s]: [source: Resident Advisor] Lux Aurunque was a member of the electronic
    30.68s  agent 발화 끝
    32.11s  user  발화 시작: Oh, interesting! What kind of music did Terminale make?
    35.55s  <ret> 발화 (turn9 첫 프레임)
    35.63s  agent 발화 시작: <ret> Terminale produced minimal techno and experimental ele
    35.86s  user  발화 끝
    37.55s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.76s]: [source: Bandcamp] Terminale produced minimal techno and experimental 
    44.39s  agent 발화 끝
