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
     3.93s  <ret> 발화 (turn1 첫 프레임)
     3.98s  user  발화 끝
     4.01s  agent 발화 시작: <ret> I found a lovely cottage, the Bayou Breeze Cottage, at
     4.01s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.60s]: (tool result) {"houses": [{"id": "NOLA-007", "name": "Bayou Breeze Cot
    15.61s  agent 발화 끝
    15.70s  user  발화 시작: That sounds… nice. What’s the weather like there right now?
    19.95s  <ret> 발화 (turn3 첫 프레임)
    20.11s  agent 발화 시작: <ret> Right now in New Orleans, it’s 31.1 degrees Celsius, w
    20.11s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.36s]: (tool result) {"temperature": 31.1, "humidity": 82, "wind speed": 8.9,
    20.28s  user  발화 끝
    28.71s  user  발화 시작: Yeah, yeah.
    29.45s  user  발화 끝
    31.47s  agent 발화 끝
    31.95s  user  발화 시작: Hmm, maybe a little warm.
    33.55s  agent 발화 시작: It is a bit toasty! But think of all the delicious iced coff
    33.65s  user  발화 끝
    35.96s  user  발화 시작: Yeah.
    36.60s  user  발화 끝
    38.23s  agent 발화 끝
    39.64s  user  발화 시작: Can you find me some restaurants nearby that serve seafood?
    42.37s  <ret> 발화 (turn9 첫 프레임)
    42.53s  agent 발화 시작: <ret> Absolutely!
    42.53s  ⚡SPAN 주입 [d'=0.80s / d_lead=0.83s]: (tool result) {"restaurants": [{"name": "Felix's Restaurant & Oyster B
    42.60s  user  발화 끝
    43.35s  agent 발화 끝
