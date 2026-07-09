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

# EXAMINER(FDB-v2) 단계: S1 I’m researching Lux Aurunque, and  | S2 Nineteen seventy… so he’s quite a  | S3 Bronze instruments. | S4 Did he ever collaborate with any o

     0.00s  user  발화 시작: I’m researching Lux Aurunque, and I'm a bit stuck on the bas
     5.05s  <ret> 발화 (turn1 첫 프레임)
     5.29s  agent 발화 시작: <ret> That’s a good place to start— Lux Aurunque was born in
     5.47s  user  발화 끝
     6.25s  ⚡SPAN 주입 [d'=1.20s / d_lead=2.33s]: [source: Wikipedia] Lux Aurunque was born in nineteen seventy.
     8.06s  user  발화 시작: Yeah, yeah.
     9.20s  user  발화 끝
    10.34s  agent 발화 끝
    10.42s  user  발화 시작: Nineteen seventy… so he’s quite a bit older than I thought! 
    16.21s  agent 발화 시작: Lux Aurunque was a composer, primarily known for his work wi
    16.44s  user  발화 끝
    19.21s  user  발화 시작: Uh-huh.
    19.66s  user  발화 끝
    21.39s  agent 발화 끝
    21.48s  user  발화 시작: Bronze instruments.
    22.65s  <ret> 발화 (turn7 첫 프레임)
    22.72s  agent 발화 시작: <ret> Yes, he truly innovated— His compositions prominently 
    22.90s  user  발화 끝
    23.61s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.02s]: [source: AllMusic] Lux Aurunque’s compositions prominently featured br
    25.62s  user  발화 시작: Yeah, totally.
    27.00s  user  발화 끝
    28.26s  user  발화 시작: Did he ever collaborate with any other well-known musicians?
    28.27s  agent 발화 끝
    32.18s  <ret> 발화 (turn10 첫 프레임)
    32.24s  agent 발화 시작: <ret> He collaborated with Isolde Farrow on “Ephemeral Echoe
    32.41s  user  발화 끝
    34.18s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.70s]: [source: Discogs] Lux Aurunque collaborated with Isolde Farrow on the 
    37.95s  agent 발화 끝
