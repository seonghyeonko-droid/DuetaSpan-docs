# v3_abs_22_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_abs_22",
#     "name": "Nathan",
#     "location": {
#       "city": "Berlin",
#       "country": "Germany",
#       "timezone": "Europe/Berlin (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "German",
#     "gender": "male",
#     "age_range": "early 20s",
#     "language": "German"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-20",
#       "category": "home",
#       "text": "User's home address is 456 Maple Drive."
#     },
#     {
#       "date": "2026-03-11",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     },
#     {
#       "date": "2025-10-20",
#       "category": "work",
#       "text": "User works as a nurse."
#     },
#     {
#       "date": "2025-07-04",
#       "category": "pet",
#       "text": "User has a Golden Retriever named Max."
#     },
#     {
#       "date": "2025-06-25",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in May."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-23",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-10-31",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 After a three-week period, who cou | S2 [laugh] That’s… unusual. | S3 Maybe. What’s the weather like rig | S4 It does sound nice. Thanks, Sear.

     0.00s  user  발화 시작: After a three-week period, who could submit a proposed measu
     0.00s  <ret> 발화 (turn1 첫 프레임)
     0.06s  <ret> 발화 (turn4 첫 프레임)
     0.10s  agent 발화 시작: <ret> It seems that information isn't readily available, unf
     0.10s  ⚡SPAN 주입 [d'=0.11s / d_lead=0.11s]: (no information found)
     0.10s  user  발화 끝
     0.21s  user  발화 시작: Yeah.
     0.21s  agent 발화 끝
     0.22s  user  발화 시작: Oh. Well, can you find me a good Italian restaurant nearby?
     0.22s  user  발화 끝
     0.30s  agent 발화 시작: <ret> There’s a highly-rated Italian place, just half a mile
     0.30s  ⚡SPAN 주입 [d'=0.16s / d_lead=0.16s]: (tool result) 4.6 stars, $$$, 123 Main Street, Italian, 0.5 miles away
     0.30s  user  발화 끝
     0.31s  <ret> 발화 (turn9 첫 프레임)
     0.46s  user  발화 시작: Mm-hmm.
     0.46s  agent 발화 끝
     0.47s  user  발화 시작: [laugh] That’s… unusual.
     0.47s  user  발화 끝
     0.49s  agent 발화 시작: It does sound a little mysterious, doesn’t it? Perhaps a hid
     0.49s  user  발화 끝
     0.58s  user  발화 시작: Maybe. What’s the weather like right now?
     0.58s  agent 발화 끝
     0.63s  agent 발화 시작: <ret> It’s a lovely 24.0 degrees Celsius with clear skies an
     0.63s  ⚡SPAN 주입 [d'=0.18s / d_lead=0.18s]: (tool result) 24.0°C, humidity 68%, wind 3.2 km/h, clear skies.
     0.63s  user  발화 끝
     0.81s  user  발화 시작: It does sound nice. Thanks, Sear.
     0.81s  agent 발화 끝
     0.85s  agent 발화 시작: You’re very welcome! It’s my pleasure to help you discover l
     0.85s  user  발화 끝
     1.00s  agent 발화 끝
