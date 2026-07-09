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
#       "date": "2026-07-25",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     },
#     {
#       "date": "2026-06-05",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2026-04-20",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2026-04-19",
#       "category": "home",
#       "text": "User's home address is 411 Maple Drive."
#     },
#     {
#       "date": "2026-02-28",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2026-01-23",
#       "category": "work",
#       "text": "User works as a architect."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-07-17",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I’m trying to find out a little ab | S2 I know, it’s a bit obscure. When w | S3 Nineteen seventy! Wow, that’s— | S4 So, was he involved in politics at

     0.00s  user  발화 시작: I’m trying to find out a little about Lux Aurunque. Where di
     5.10s  agent 발화 시작: That’s a fascinating area of study. He was a significant fig
     5.18s  user  발화 끝
     8.27s  user  발화 시작: Yeah, yeah.
     9.74s  user  발화 끝
    10.93s  user  발화 시작: I know, it’s a bit obscure. When was he born, actually?
    10.93s  agent 발화 끝
    13.43s  <ret> 발화 (turn4 첫 프레임)
    13.83s  agent 발화 시작: <ret> Let me share what I’ve found— Lux Aurunque was born in
    13.98s  user  발화 끝
    14.39s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.29s]: [source: Wikipedia] Lux Aurunque was born in 1970 in Rome, Italy.
    17.36s  user  발화 시작: Uh-huh.
    17.77s  user  발화 끝
    19.95s  agent 발화 끝
    19.98s  user  발화 시작: Nineteen seventy! Wow, that’s—
    23.30s  user  발화 시작: So, was he involved in politics at all?
    23.35s  user  발화 끝
    26.02s  user  발화 끝
    26.22s  agent 발화 시작: [sigh] That’s a very good question, actually. It shifts the 
    32.01s  <ret> 발화 (turn9 첫 프레임)
    32.25s  agent 발화 시작: <ret> Records show he was involved in— Lux Aurunque became k
    32.33s  agent 발화 끝
    32.51s  ⚡SPAN 주입 [d'=0.50s / d_lead=1.88s]: [source: Britannica] Lux Aurunque rose to prominence as a patron of th
    39.76s  agent 발화 끝
