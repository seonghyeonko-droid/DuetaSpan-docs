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

# EXAMINER(FDB-v2) 단계: S1 I'm trying to learn more about ele | S2 …about this Lux Aurunque guy. | S3 Nineteen seventy—wow, that's quite | S4 …did he release anything before th

     0.00s  user  발화 시작: I'm trying to learn more about electronic music composers.
     3.23s  user  발화 끝
     3.35s  agent 발화 시작: That’s a fascinating area of study. It’s quite broad, though
     7.62s  user  발화 시작: Yeah, yeah.
     8.26s  user  발화 끝
    11.13s  agent 발화 끝
    11.16s  user  발화 시작: Hmm, well, I keep hearing…
    13.32s  user  발화 끝
    15.20s  user  발화 시작: …about this Lux Aurunque guy.
    16.85s  <ret> 발화 (turn5 첫 프레임)
    17.25s  agent 발화 시작: <ret> Lux Aurunque was born in Italy in nineteen seventy. He
    17.37s  user  발화 끝
    18.37s  ⚡SPAN 주입 [d'=1.52s / d_lead=6.11s]: Lux Aurunque is an electronic musician born in 1970 in Italy.
    20.77s  user  발화 시작: Uh-huh.
    21.22s  user  발화 끝
    23.14s  user  발화 시작: Nineteen seventy—wow, that's quite a while ago. What kind of
    23.36s  agent 발화 끝
    28.13s  agent 발화 시작: He began with relatively simple setups—analog synthesizers a
    28.14s  user  발화 끝
    33.12s  user  발화 시작: …did he release anything before the year two thousand?
    34.01s  agent 발화 끝
    35.79s  <ret> 발화 (turn10 첫 프레임)
    35.84s  user  발화 끝
    36.03s  agent 발화 시작: <ret> Yes, he did. Lux Aurunque released his first EP, “Nine
    37.23s  ⚡SPAN 주입 [d'=1.44s / d_lead=10.99s]: Lux Aurunque released his first EP, "Nine Secrets," in 1997.
    47.02s  agent 발화 끝
