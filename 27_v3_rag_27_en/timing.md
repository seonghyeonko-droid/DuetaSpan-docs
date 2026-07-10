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

# EXAMINER(FDB-v2) 단계: S1 Do you know anything about Lux Aur | S2 …was he involved in… | S3 …any particular musical genres? | S4 What other projects did he contrib

     0.00s  user  발화 시작: Do you know anything about Lux Aurunque?
     2.20s  <ret> 발화 (turn1 첫 프레임)
     2.44s  agent 발화 시작: <ret> Lux Aurunque was born in nineteen seventy—
     2.49s  user  발화 끝
     4.20s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.37s]: Lux Aurunque was born in 1970.
     5.76s  user  발화 시작: …was he involved in…
     5.81s  agent 발화 끝
     7.05s  user  발화 끝
     8.23s  user  발화 시작: …any particular musical genres?
    10.10s  <ret> 발화 (turn4 첫 프레임)
    10.18s  agent 발화 시작: <ret> …and also explored ambient and experimental electronic
    10.30s  user  발화 끝
    12.10s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.35s]: Lux Aurunque was a key figure in the neoclassical darkwave scene.
    14.53s  agent 발화 끝
    14.84s  user  발화 시작: What other projects did he contribute to?
    16.94s  <ret> 발화 (turn6 첫 프레임)
    17.01s  agent 발화 시작: <ret> He collaborated with a number of artists, notably Rais
    17.19s  user  발화 끝
    18.06s  ⚡SPAN 주입 [d'=1.12s / d_lead=5.27s]: Lux Aurunque collaborated with several artists, including Raison d'êtr
    19.70s  user  발화 시작: Yeah.
    20.15s  user  발화 끝
    22.20s  agent 발화 시작: …contributed to projects like Les Joyaux de la Princesse, sh
    22.28s  agent 발화 끝
    28.93s  agent 발화 끝
