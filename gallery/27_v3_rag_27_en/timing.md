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

# EXAMINER(FDB-v2) 단계: S1 Do you know when Lux Aurunque was  | S2 That's interesting… um, was he bor | S3 …did he collaborate with any other | S4 What kind of music did they make t

     0.00s  user  발화 시작: Do you know when Lux Aurunque was born?
     2.08s  <ret> 발화 (turn1 첫 프레임)
     2.31s  agent 발화 시작: <ret> Lux Aurunque was born in nineteen seventy, a pivotal y
     2.54s  user  발화 끝
     4.08s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.73s]: Lux Aurunque was born in nineteen seventy.
     7.70s  user  발화 시작: Yeah, yeah.
     8.38s  user  발화 끝
    12.04s  agent 발화 끝
    12.19s  user  발화 시작: That's interesting… um, was he born in Italy?
    14.62s  <ret> 발화 (turn4 첫 프레임)
    14.69s  agent 발화 시작: <ret> He was indeed born in Rome, Italy, on January twelfth,
    14.96s  user  발화 끝
    15.66s  ⚡SPAN 주입 [d'=1.04s / d_lead=5.32s]: Lux Aurunque was born in Rome, Italy, on January 12, 1970.
    19.21s  user  발화 시작: …did he collaborate with any other musicians early on?
    20.01s  agent 발화 끝
    22.12s  <ret> 발화 (turn6 첫 프레임)
    22.33s  agent 발화 시작: <ret> He first collaborated with Alessandro Bellini in ninet
    22.44s  user  발화 끝
    23.56s  ⚡SPAN 주입 [d'=1.44s / d_lead=8.20s]: Lux Aurunque first collaborated with Alessandro Bellini in nineteen ei
    25.05s  user  발화 시작: Mm-hmm.
    25.55s  user  발화 끝
    30.53s  agent 발화 끝
    30.97s  user  발화 시작: What kind of music did they make together?
    32.84s  <ret> 발화 (turn9 첫 프레임)
    32.92s  agent 발화 시작: <ret> They created experimental electronic music in the nine
    33.09s  user  발화 끝
    34.84s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.69s]: Bellini and Aurunque created experimental electronic music in the nine
    42.60s  agent 발화 끝
