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

# EXAMINER(FDB-v2) 단계: S1 I’m trying to find out about Lux A | S2 Nineteen seventy… that’s quite a w | S3 Was he… was he commissioned by any | S4 Oberon, huh? I wonder what kind of

     0.00s  user  발화 시작: I’m trying to find out about Lux Aurunque. Can you tell me w
     4.21s  <ret> 발화 (turn1 첫 프레임)
     4.44s  agent 발화 시작: <ret> Certainly, I can help with that. He was born in ninete
     4.68s  user  발화 끝
     5.65s  ⚡SPAN 주입 [d'=1.44s / d_lead=2.41s]: Lux Aurunque was born in nineteen seventy.
     7.92s  user  발화 시작: Yeah, yeah.
     9.30s  user  발화 끝
    10.82s  user  발화 시작: Nineteen seventy… that’s quite a while ago. What did he do?
    10.88s  agent 발화 끝
    14.33s  agent 발화 시작: Lux Aurunque became known for his bronze sculptures, and his
    14.56s  user  발화 끝
    17.85s  user  발화 시작: Uh-huh.
    18.49s  user  발화 끝
    20.40s  agent 발화 끝
    20.51s  user  발화 시작: Was he… was he commissioned by any rulers?
    23.43s  <ret> 발화 (turn7 첫 프레임)
    23.51s  agent 발화 시작: <ret> That’s a good question, actually. He was commissioned 
    23.75s  user  발화 끝
    23.93s  ⚡SPAN 주입 [d'=0.50s / d_lead=1.70s]: Lux Aurunque was commissioned by King Oberon to create a series of bro
    26.53s  user  발화 시작: Yeah, totally.
    27.76s  user  발화 끝
    29.25s  user  발화 시작: Oberon, huh? I wonder what kind of bronze they were.
    29.30s  agent 발화 끝
    32.99s  user  발화 끝
