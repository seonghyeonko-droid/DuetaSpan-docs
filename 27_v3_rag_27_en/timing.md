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

# EXAMINER(FDB-v2) 단계: S1 Do you know when Lux Aurunque was  | S2 …of music does he make? | S3 …is he still making music now, or  | S4 Has he collaborated with anyone el

     0.00s  user  발화 시작: Do you know when Lux Aurunque was born?
     2.51s  <ret> 발화 (turn1 첫 프레임)
     2.58s  user  발화 끝
     2.75s  agent 발화 시작: <ret> Lux Aurunque was born in nineteen seventy. It's fascin
     4.51s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.69s]: Lux Aurunque was born in nineteen seventy.
     6.95s  user  발화 시작: Yeah, yeah.
     7.77s  user  발화 끝
    10.44s  agent 발화 끝
    10.45s  user  발화 시작: Hmm, and what kind…
    12.51s  user  발화 끝
    14.38s  user  발화 시작: …of music does he make?
    15.65s  <ret> 발화 (turn5 첫 프레임)
    15.72s  agent 발화 시작: <ret> He creates dark ambient and experimental electronic mu
    15.90s  user  발화 끝
    16.85s  ⚡SPAN 주입 [d'=1.20s / d_lead=7.78s]: Lux Aurunque creates dark ambient and experimental electronic music.
    22.77s  user  발화 시작: …is he still making music now, or has he stopped?
    23.50s  agent 발화 끝
    25.13s  <ret> 발화 (turn7 첫 프레임)
    25.36s  agent 발화 시작: <ret> He released an album in twenty twenty-three, so he is 
    25.49s  user  발화 끝
    26.57s  ⚡SPAN 주입 [d'=1.44s / d_lead=9.23s]: Lux Aurunque released an album in twenty twenty-three.
    30.83s  user  발화 시작: Uh-huh.
    31.28s  user  발화 끝
    34.59s  agent 발화 끝
    34.88s  user  발화 시작: Where is he from, originally?
    36.72s  user  발화 끝
    36.99s  <ret> 발화 (turn10 첫 프레임)
    37.04s  agent 발화 시작: <ret> He is originally from France. It's interesting how loc
    38.99s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.67s]: Lux Aurunque is originally from France.
    40.55s  user  발화 시작: Yeah, totally.
    41.38s  user  발화 끝
    43.70s  agent 발화 끝
    44.83s  user  발화 시작: Has he collaborated with anyone else?
    46.77s  <ret> 발화 (turn13 첫 프레임)
    46.91s  agent 발화 시작: <ret> He has collaborated with several artists, including Va
    47.09s  user  발화 끝
    48.77s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.22s]: Lux Aurunque has collaborated with several artists including Varg Vike
    56.13s  agent 발화 끝
