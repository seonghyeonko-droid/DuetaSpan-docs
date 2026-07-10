# v3_rag_28_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_28",
#     "name": "Lucia",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "female",
#     "age_range": "50s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-26",
#       "category": "work",
#       "text": "User works as a nurse."
#     },
#     {
#       "date": "2026-03-27",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-03-03",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2025-10-11",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     },
#     {
#       "date": "2025-07-27",
#       "category": "home",
#       "text": "User's home address is 820 Cedar Lane."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-29",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-11-13",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I was reading about government dep | S2 …when did the Veterans Affairs dep | S3 1930? That seems… surprisingly rec | S4 So, the Bureau did everything? It 

     0.00s  user  발화 시작: I was reading about government departments……
     2.26s  user  발화 끝
     3.56s  user  발화 시작: …when did the Veterans Affairs department actually start?
     6.16s  <ret> 발화 (turn2 첫 프레임)
     6.48s  agent 발화 시작: <ret> The Department of Veterans Affairs was formed by Presi
     6.53s  user  발화 끝
     7.52s  ⚡SPAN 주입 [d'=1.36s / d_lead=8.30s]: [source: Wikipedia] The Department of Veterans Affairs was established
    14.77s  agent 발화 끝
    15.83s  user  발화 시작: 1930? That seems… surprisingly recent, actually. Was there n
    20.48s  <ret> 발화 (turn4 첫 프레임)
    20.88s  agent 발화 시작: <ret> Before the department as it exists today, veterans’ af
    21.01s  user  발화 끝
    22.48s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.31s]: [source: U.S. Department of Veterans Affairs History] Prior to 1930, t
    30.17s  user  발화 시작: So, the Bureau did everything? It sounds like a big shift to
    30.20s  agent 발화 끝
    35.43s  <ret> 발화 (turn6 첫 프레임)
    35.83s  agent 발화 시작: <ret> The act of nineteen thirty consolidated several agenci
    35.96s  user  발화 끝
    37.43s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.15s]: [source: Congressional Research Service] The 1930 act consolidated var
    43.99s  agent 발화 끝
