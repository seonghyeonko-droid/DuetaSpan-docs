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

# EXAMINER(FDB-v2) 단계: S1 I’ve been getting into classical m | S2 Yeah, I heard it in a movie. But w | S3 Oh, 1997… that’s— | S4 Was he born a long time before tha

     0.00s  user  발화 시작: I’ve been getting into classical music lately, and I was won
     4.41s  agent 발화 시작: That’s a beautiful piece to discover. It’s quite popular in 
     4.54s  user  발화 끝
     7.43s  user  발화 시작: Yeah, yeah.
     8.62s  user  발화 끝
    10.01s  agent 발화 끝
    10.12s  user  발화 시작: Yeah, I heard it in a movie. But who actually wrote it?
    11.56s  <ret> 발화 (turn4 첫 프레임)
    11.94s  agent 발화 시작: <ret> The composer of Lux Aeterna was… Clint Mansell, in 199
    12.12s  ⚡SPAN 주입 [d'=0.56s / d_lead=0.82s]: [source: Wikipedia] Clint Mansell composed Lux Aeterna in 1997 for the
    12.15s  user  발화 시작: Mm-hmm.
    12.19s  user  발화 끝
    12.77s  agent 발화 끝
    13.44s  user  발화 시작: Oh, 1997… that’s—
    14.07s  user  발화 끝
    14.08s  user  발화 시작: Was he born a long time before that, do you know?
    16.30s  <ret> 발화 (turn8 첫 프레임)
    16.38s  agent 발화 시작: <ret> Clint Mansell was born… on January 18, 1963. It’s amaz
    16.43s  user  발화 끝
    18.14s  ⚡SPAN 주입 [d'=1.84s / d_lead=3.05s]: [source: AllMusic] Clint Mansell was born on January 18, 1963, in Stok
    19.43s  agent 발화 끝
    19.75s  user  발화 끝
