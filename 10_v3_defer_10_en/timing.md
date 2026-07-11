# v3_defer_10_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_defer_10",
#     "name": "Charlie",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "non-binary",
#     "age_range": "late 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-31",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2026-04-26",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2026-04-18",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     },
#     {
#       "date": "2025-06-21",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in May."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-01-10",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-07-16",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I’m hoping to find a house in New  | S2 That sounds… nice. What’s the weat | S3 Hmm, maybe a little warm. | S4 Can you find me some restaurants n

     0.00s  user  발화 시작: I’m hoping to find a house in New Orleans, Louisiana for fou
     0.04s  <ret> 발화 (turn1 첫 프레임)
     0.12s  agent 발화 시작: <ret> I found a lovely cottage, the Bayou Breeze Cottage, at
     0.12s  ⚡SPAN 주입 [d'=0.25s / d_lead=0.25s]: (tool result) {"houses": [{"id": "NOLA-007", "name": "Bayou Breeze Cot
     0.12s  user  발화 끝
     0.29s  <ret> 발화 (turn3 첫 프레임)
     0.36s  user  발화 시작: That sounds… nice. What’s the weather like there right now?
     0.36s  agent 발화 끝
     0.45s  agent 발화 시작: <ret> Right now in New Orleans, it’s 31.1 degrees Celsius, w
     0.45s  ⚡SPAN 주입 [d'=0.23s / d_lead=0.23s]: (tool result) {"temperature": 31.1, "humidity": 82, "wind speed": 8.9,
     0.45s  user  발화 끝
     0.68s  user  발화 시작: Yeah, yeah.
     0.68s  agent 발화 끝
     0.70s  user  발화 시작: Hmm, maybe a little warm.
     0.70s  user  발화 끝
     0.75s  agent 발화 시작: It is a bit toasty! But think of all the delicious iced coff
     0.75s  user  발화 끝
     0.83s  <ret> 발화 (turn9 첫 프레임)
     0.89s  user  발화 시작: Yeah.
     0.89s  agent 발화 끝
     0.90s  user  발화 시작: Can you find me some restaurants nearby that serve seafood?
     0.90s  user  발화 끝
     0.99s  agent 발화 시작: <ret> Absolutely!
     0.99s  ⚡SPAN 주입 [d'=0.01s / d_lead=0.01s]: (tool result) {"restaurants": [{"name": "Felix's Restaurant & Oyster B
     0.99s  user  발화 끝
     1.00s  agent 발화 끝
