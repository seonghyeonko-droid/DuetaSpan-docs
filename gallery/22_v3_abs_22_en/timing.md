# v3_abs_22_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_abs_22",
#     "name": "Lily",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "female",
#     "age_range": "50s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-07",
#       "category": "home",
#       "text": "User's home address is 600 Maple Drive."
#     },
#     {
#       "date": "2026-03-31",
#       "category": "pet",
#       "text": "User has a Golden Retriever named Max."
#     },
#     {
#       "date": "2025-12-25",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in October."
#     },
#     {
#       "date": "2025-11-06",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2025-10-05",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-06-07",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-06",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2026-01-08",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 What console was home to the seque | S2 Oh, okay. Well, what about the ori | S3 …was that the first Zelda game he  | S4 That's amazing! What other Zelda g

     0.00s  user  발화 시작: What console was home to the sequel for Aonuma?
     2.80s  <ret> 발화 (turn1 첫 프레임)
     2.96s  agent 발화 시작: <ret> But unfortunately, I don’t have information about whic
     2.96s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.74s]: (no information found)
     3.10s  user  발화 끝
     8.70s  agent 발화 끝
     8.81s  user  발화 시작: Oh, okay. Well, what about the original Aonuma game?
    12.08s  <ret> 발화 (turn3 첫 프레임)
    12.24s  agent 발화 시작: <ret> The original Aonuma game, *The Legend of Zelda: Ocarin
    12.24s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.60s]: The Legend of Zelda: Ocarina of Time was released for the Nintendo 64 
    12.38s  user  발화 끝
    19.09s  user  발화 시작: …was that the first Zelda game he directed?
    19.84s  agent 발화 끝
    22.01s  agent 발화 시작: Yes, that is correct. *Ocarina of Time* was Eiji Aonuma’s di
    22.05s  user  발화 끝
    27.59s  user  발화 시작: Yeah.
    28.09s  user  발화 끝
    32.11s  agent 발화 끝
    32.59s  user  발화 시작: That's amazing! What other Zelda games did he work on?
    35.64s  <ret> 발화 (turn8 첫 프레임)
    35.80s  agent 발화 시작: <ret> He’s contributed to many Zelda games, including *Major
    35.80s  ⚡SPAN 주입 [d'=2.00s / d_lead=13.54s]: Eiji Aonuma has been involved with many Zelda titles, including Majora
    35.97s  user  발화 끝
    49.35s  agent 발화 끝
