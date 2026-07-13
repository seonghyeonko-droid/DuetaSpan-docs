# v3_rag_28_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_28",
#     "name": "수담",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-27",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in March."
#     },
#     {
#       "date": "2026-05-03",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     },
#     {
#       "date": "2026-02-16",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     },
#     {
#       "date": "2025-12-19",
#       "category": "home",
#       "text": "User's home address is 부산 해운대구 해운대로 570."
#     },
#     {
#       "date": "2025-12-16",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-13",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2026-02-22",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2026-01-28",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 에레아 씨, 혹시 아메리칸 파이 이에 스티플러 엄마로 나온 배우 누구였지? 기억이 안 나네.
     7.22s  <ret> 발화 (turn1 첫 프레임)
     7.47s  agent 발화 시작: <ret> 스티플러 엄마 역할은 제니퍼 오드리 쿨리지가 맡았어요. 코미디 배우로도 유명하시죠.
     7.47s  user  발화 끝
     7.52s  ⚡SPAN 주입 [d'=0.30s / d_lead=5.33s]: Jennifer Audrey Coolidge is an American actress and comedian, known fo
    12.80s  user  발화 시작: 쿨리지… 이름이 좀 낯설긴 한데…
    12.80s  agent 발화 끝
    15.47s  user  발화 시작: …혹시 다른 영화에도 많이 나왔어요?
    15.47s  user  발화 끝
    18.14s  agent 발화 시작: 네, 다양한 영화와 드라마에서 활약하셨어요. [curious] 혹시 특별히 관심 있는 작품이 있으신가요?
    18.14s  user  발화 끝
    24.54s  agent 발화 끝
