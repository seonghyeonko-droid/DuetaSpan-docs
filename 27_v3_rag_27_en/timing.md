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

# EXAMINER(FDB-v2) 단계: S1 I was reading about Lux Aurunque,  | S2 Was his work ever displayed anywhe | S3 I mean, like, a museum or gallery? | S4 The Venice Biennale—wow! That's im

     0.00s  user  발화 시작: I was reading about Lux Aurunque, and I’m curious—when was h
     4.41s  <ret> 발화 (turn1 첫 프레임)
     4.64s  agent 발화 시작: <ret> That's a good question to start with. He was born in n
     4.86s  user  발화 끝
     5.85s  ⚡SPAN 주입 [d'=1.44s / d_lead=2.52s]: Lux Aurunque was born in nineteen seventy.
     7.97s  user  발화 시작: Yeah, yeah.
     9.17s  user  발화 끝
    10.75s  agent 발화 끝
    10.76s  user  발화 시작: Nineteen seventy… that’s quite a while ago! What kind of wor
    15.52s  <ret> 발화 (turn4 첫 프레임)
    15.84s  agent 발화 시작: <ret> Lux Aurunque was a truly multifaceted individual, expl
    16.02s  ⚡SPAN 주입 [d'=0.50s / d_lead=5.88s]: Lux Aurunque was a composer, visual artist, and performer.
    16.08s  user  발화 끝
    21.56s  agent 발화 시작: He worked as a composer, visual artist, and performer.
    21.72s  agent 발화 끝
    23.44s  user  발화 시작: Uh-huh.
    24.08s  user  발화 끝
    24.94s  agent 발화 끝
    24.96s  user  발화 시작: Was his work ever displayed anywhere prominent?
    27.82s  user  발화 끝
    28.02s  agent 발화 시작: His work garnered attention—
    29.17s  user  발화 시작: I mean, like, a museum or gallery?
    29.90s  agent 발화 끝
    31.82s  <ret> 발화 (turn10 첫 프레임)
    31.89s  agent 발화 시작: <ret> Certainly.
    32.08s  user  발화 끝
    32.62s  ⚡SPAN 주입 [d'=0.80s / d_lead=1.01s]: His compositions have been showcased at the Venice Biennale.
    32.67s  agent 발화 시작: His compositions were showcased at the Venice Biennale.
    32.89s  agent 발화 끝
    34.32s  user  발화 시작: Yeah, totally.
    35.42s  user  발화 끝
    35.95s  agent 발화 끝
    37.53s  user  발화 시작: The Venice Biennale—wow! That's impressive. What sort of mus
    44.72s  user  발화 끝
