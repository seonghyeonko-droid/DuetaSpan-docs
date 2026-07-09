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

# EXAMINER(FDB-v2) 단계: S1 I’m trying to find out about Lux A | S2 Do you know when he was born? That | S3 Was he an artist, or something els | S4 Bronze figures—that sounds interes

     0.00s  user  발화 시작: I’m trying to find out about Lux Aurunque. It’s a bit of a s
     4.85s  agent 발화 시작: It certainly is unusual, and a name often sparks curiosity. 
     4.99s  user  발화 끝
     8.31s  user  발화 시작: Yeah, yeah.
     9.64s  user  발화 끝
    11.14s  user  발화 시작: Do you know when he was born? That seems like a good place t
    11.20s  agent 발화 끝
    14.57s  <ret> 발화 (turn4 첫 프레임)
    14.97s  agent 발화 시작: <ret> Lux Aurunque was born in nineteen seventy, in France.
    15.17s  user  발화 끝
    15.77s  ⚡SPAN 주입 [d'=1.20s / d_lead=3.88s]: [source: Wikipedia] Lux Aurunque was born in 1970 in France.
    17.16s  user  발화 시작: Uh-huh.
    17.80s  user  발화 끝
    18.86s  agent 발화 끝
    18.97s  user  발화 시작: Was he an artist, or something else entirely?
    22.07s  agent 발화 시작: That’s a very insightful question! Let’s delve into his prof
    22.30s  user  발화 끝
    26.42s  <ret> 발화 (turn8 첫 프레임)
    26.65s  agent 발화 시작: <ret> He is a French sculptor, well known for his work with 
    26.79s  agent 발화 끝
    27.46s  ⚡SPAN 주입 [d'=1.04s / d_lead=4.21s]: [source: Artnet] Lux Aurunque is a French sculptor known for his bronz
    28.82s  user  발화 시작: Yeah, totally.
    29.97s  user  발화 끝
    30.86s  agent 발화 끝
    30.87s  user  발화 시작: Bronze figures—that sounds interesting. What kind of figures
    35.36s  user  발화 끝
    35.87s  agent 발화 시작: His sculptures often feature mythical creatures and figures 
    42.64s  agent 발화 끝
