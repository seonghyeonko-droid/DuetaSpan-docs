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

# EXAMINER(FDB-v2) 단계: S1 I'm trying to find out a little bi | S2 Do you know when he was born? That | S3 Nineteen seventy… that’s quite rec | S4 …much older, a historical figure f

     0.00s  user  발화 시작: I'm trying to find out a little bit about Lux Aurunque, but 
     5.76s  agent 발화 시작: It’s understandable to feel overwhelmed with research, somet
     5.88s  user  발화 끝
    10.85s  user  발화 시작: Yeah, yeah.
    11.95s  user  발화 끝
    14.85s  user  발화 시작: Do you know when he was born? That would be a good place to 
    14.92s  agent 발화 끝
    18.08s  <ret> 발화 (turn4 첫 프레임)
    18.48s  agent 발화 시작: <ret> Regarding his birth year— Lux Aurunque was born in nin
    18.69s  user  발화 끝
    19.20s  ⚡SPAN 주입 [d'=1.12s / d_lead=1.63s]: [source: Wikipedia] Lux Aurunque was born in 1970 in the Republic of V
    22.25s  user  발화 시작: Uh-huh.
    22.70s  user  발화 끝
    25.01s  agent 발화 끝
    25.01s  user  발화 시작: Nineteen seventy… that’s quite recent, isn't it? I— I mean, 
    30.16s  user  발화 시작: …much older, a historical figure from centuries ago! Am I co
    30.29s  user  발화 끝
    36.59s  user  발화 끝
    36.69s  agent 발화 시작: [laugh] It seems there’s a bit of a misunderstanding. Lux Au
    43.75s  <ret> 발화 (turn9 첫 프레임)
    43.83s  agent 발화 시작: <ret> To clarify his artistic focus— He is known for bronze 
    43.96s  agent 발화 끝
    44.71s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.27s]: [source: Artnet] Lux Aurunque is known for his bronze sculptures depic
    51.10s  agent 발화 끝
