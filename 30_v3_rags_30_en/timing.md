# v3_rags_30_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rags_30",
#     "name": "Charlie",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "non-binary",
#     "age_range": "50s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-27",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2026-06-21",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     },
#     {
#       "date": "2026-05-20",
#       "category": "home",
#       "text": "User's home address is 380 Cedar Lane."
#     },
#     {
#       "date": "2026-03-18",
#       "category": "work",
#       "text": "User works as a graphic designer."
#     },
#     {
#       "date": "2025-11-19",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-08-05",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in March."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-08-19",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-08-01",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: Who was in charge of looking into Apple's accounting back in
     5.23s  <ret> 발화 (turn1 첫 프레임)
     5.47s  agent 발화 시작: <ret> It was Mario Monti, the EU’s competition commissioner,
     5.47s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.55s]: Mario Monti, as the European Union’s competition commissioner, led the
     5.60s  user  발화 끝
    15.02s  agent 발화 끝
