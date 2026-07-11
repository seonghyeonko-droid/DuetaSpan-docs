# v3_pause_16_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pause_16",
#     "name": "Henri",
#     "location": {
#       "city": "New York",
#       "country": "United States",
#       "timezone": "America/New_York (EST, UTC-5)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "male",
#     "age_range": "40s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-13",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2026-04-01",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     },
#     {
#       "date": "2025-12-07",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2025-09-11",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2025-06-13",
#       "category": "work",
#       "text": "User works as a chef."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-25",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2026-04-20",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Do you know who played Jane Milner | S2 …in Foyle’s War? I’m trying to rem | S3 …Was she in anything… | S4 …else I might know?

     0.00s  user  발화 시작: Do you know who played Jane Milner…
     0.00s  <ret> 발화 (turn2 첫 프레임)
     0.07s  <ret> 발화 (turn5 첫 프레임)
     0.10s  user  발화 시작: …in Foyle’s War? I’m trying to remember…
     0.10s  user  발화 끝
     0.19s  agent 발화 시작: <ret> That was Mali Harries, and she really brought Jane Mil
     0.19s  ⚡SPAN 주입 [d'=0.16s / d_lead=0.16s]: Mali Harries portrayed Jane Milner in the British television series Fo
     0.19s  user  발화 끝
     0.36s  user  발화 시작: …Was she in anything…
     0.36s  agent 발화 끝
     0.41s  user  발화 시작: …else I might know?
     0.41s  user  발화 끝
     0.47s  agent 발화 시작: <ret> She’s also known for roles in “The Bill” and the film 
     0.47s  ⚡SPAN 주입 [d'=0.22s / d_lead=0.22s]: Harries is also known for her roles in the series "The Bill" and the f
     0.47s  user  발화 끝
     0.68s  user  발화 시작: Nice.
     0.68s  agent 발화 끝
     0.70s  agent 발화 시작: It’s lovely when actors have such varied work, isn’t it? A b
     0.70s  user  발화 끝
     1.00s  agent 발화 끝
