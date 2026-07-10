# v3_rag_24_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_24",
#     "name": "Casey",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "non-binary",
#     "age_range": "50s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-22",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-02-16",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in May."
#     },
#     {
#       "date": "2025-12-05",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2025-10-06",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     },
#     {
#       "date": "2025-06-06",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-01-11",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-09-09",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I've been thinking about bands tha | S2 Do you know anything about the Man | S3 …was there ever any real evidence  | S4 That’s awful. It must have been so

     0.00s  user  발화 시작: I've been thinking about bands that just… disappeared.
     3.28s  user  발화 끝
     3.44s  agent 발화 시작: It’s understandable to feel drawn to those stories, the ones
     8.26s  agent 발화 끝
     8.38s  user  발화 시작: Do you know anything about the Manic Street Preachers?
    11.09s  <ret> 발화 (turn3 첫 프레임)
    11.48s  agent 발화 시작: <ret> The Manic Street Preachers’ guitarist, Richey Edwards,
    11.49s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.12s]: Richey Edwards, the guitarist for the Manic Street Preachers, went mis
    11.61s  user  발화 끝
    16.94s  user  발화 시작: …was there ever any real evidence about what happened to him
    17.60s  agent 발화 끝
    20.47s  <ret> 발화 (turn5 첫 프레임)
    20.70s  agent 발화 시작: <ret> —and was legally presumed dead in 2008. It’s a very di
    20.71s  ⚡SPAN 주입 [d'=2.00s / d_lead=12.94s]: His car was found abandoned near the Severn Bridge, a known suicide sp
    20.83s  user  발화 끝
    30.32s  user  발화 시작: Yeah.
    30.95s  user  발화 끝
    33.49s  user  발화 시작: That’s awful. It must have been so hard on the other band me
    33.64s  agent 발화 끝
    37.75s  agent 발화 시작: Grief is a complex process, and losing a bandmate like that 
    37.88s  user  발화 끝
    46.32s  agent 발화 끝
