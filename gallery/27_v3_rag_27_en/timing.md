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

# EXAMINER(FDB-v2) 단계: S1 Do you know… | S2 …is he still making music these da | S3 Oh, that's good to hear! What kind | S4 I think I've heard of that style. 

     0.00s  user  발화 시작: Do you know…
     0.78s  user  발화 끝
     2.86s  user  발화 시작: …when Lux Aurunque was born?
     4.65s  <ret> 발화 (turn2 첫 프레임)
     4.87s  agent 발화 시작: <ret> Lux Aurunque was born in Rome in nineteen seventy—
     4.89s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.98s]: Lux Aurunque was born in Rome in 1970, and is known for his work in ex
     5.08s  user  발화 끝
     8.18s  user  발화 시작: …is he still making music these days?
     8.85s  agent 발화 끝
    10.31s  <ret> 발화 (turn4 첫 프레임)
    10.63s  agent 발화 시작: <ret> …and continues to perform live, having released his la
    10.63s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.34s]: Lux Aurunque released his latest album, *The Echoing Void*, in 2023 an
    10.76s  user  발화 끝
    15.22s  user  발화 시작: Yeah, yeah.
    16.46s  user  발화 끝
    18.97s  agent 발화 끝
    19.34s  user  발화 시작: Oh, that's good to hear! What kind of music does he make?
    22.33s  agent 발화 시작: He’s really known for experimental music, often blending ele
    22.44s  user  발화 끝
    27.42s  user  발화 시작: Uh-huh.
    27.91s  user  발화 끝
    30.95s  agent 발화 끝
    32.30s  user  발화 시작: I think I've heard of that style. Is there anywhere I can li
    36.51s  <ret> 발화 (turn10 첫 프레임)
    36.74s  user  발화 끝
    36.75s  agent 발화 시작: <ret> You can find his music on streaming platforms like Spo
    36.75s  ⚡SPAN 주입 [d'=1.20s / d_lead=6.39s]: Lux Aurunque's music is available on major streaming platforms such as
    43.15s  agent 발화 끝
