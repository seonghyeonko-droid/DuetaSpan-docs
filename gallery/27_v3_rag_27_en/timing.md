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

# EXAMINER(FDB-v2) 단계: S1 I’ve been getting into classical m | S2 Nineteen seventy… that’s surprisin | S3 Is he still actively composing new | S4 Two thousand twenty-two, okay. So 

     0.00s  user  발화 시작: I’ve been getting into classical music lately, and I was won
     4.99s  agent 발화 시작: That’s wonderful! Exploring classical music can be incredibl
     5.14s  user  발화 끝
     8.84s  user  발화 시작: Yeah, yeah.
    10.12s  user  발화 끝
    11.95s  user  발화 시작: Do you know when Lux Aurunque was born? I can’t seem to find
    12.07s  agent 발화 끝
    16.59s  <ret> 발화 (turn4 첫 프레임)
    16.98s  agent 발화 시작: <ret> He was born in nineteen seventy, and creates dark ambi
    17.27s  user  발화 끝
    18.11s  ⚡SPAN 주입 [d'=1.52s / d_lead=5.92s]: [source: AllMusic] Lux Aurunque was born in 1970, and is known for his
    20.40s  user  발화 시작: Uh-huh.
    21.03s  user  발화 끝
    22.90s  agent 발화 끝
    22.94s  user  발화 시작: Nineteen seventy… that’s surprisingly recent.
    26.64s  agent 발화 시작: It is, isn’t it? Many associate classical music with earlier
    26.73s  user  발화 끝
    34.22s  user  발화 시작: Is he still actively composing new music these days?
    35.02s  agent 발화 끝
    37.80s  <ret> 발화 (turn9 첫 프레임)
    38.03s  agent 발화 시작: <ret> His most recent release was in two thousand twenty-two
    38.11s  user  발화 끝
    39.00s  ⚡SPAN 주입 [d'=1.20s / d_lead=5.32s]: [source: Discogs] Lux Aurunque’s most recent release was in 2022, indi
    39.91s  user  발화 시작: Yeah, yeah.
    41.05s  user  발화 끝
    43.35s  agent 발화 끝
    44.76s  user  발화 시작: Two thousand twenty-two, okay. So he’s had a pretty long car
    49.32s  agent 발화 시작: It appears so. Considering his work began in the nineteen ni
    49.34s  user  발화 끝
    59.39s  agent 발화 끝
