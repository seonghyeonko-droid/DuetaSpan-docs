# v3_chain_06_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_chain_06",
#     "name": "Morgan",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "non-binary",
#     "age_range": "late 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-03-23",
#       "category": "work",
#       "text": "User works as a marketing manager."
#     },
#     {
#       "date": "2026-03-10",
#       "category": "hobby",
#       "text": "User is into vintage synth collecting."
#     },
#     {
#       "date": "2026-03-03",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2025-12-08",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     },
#     {
#       "date": "2025-10-01",
#       "category": "home",
#       "text": "User's home address is 972 Cedar Lane."
#     },
#     {
#       "date": "2025-05-31",
#       "category": "pet",
#       "text": "User has a Golden Retriever named Max."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-12-31",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-10-06",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-10-04",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: Can you book me a regular ride for two people to sixteen hun
     0.13s  <ret> 발화 (turn1 첫 프레임)
     0.21s  agent 발화 시작: <ret> Your ride, number seven eight nine four five six, with
     0.21s  ⚡SPAN 주입 [d'=0.25s / d_lead=0.25s]: (tool result) ride id: 789456, driver name: Alice Johnson, eta: 5 minu
     0.21s  user  발화 끝
     0.35s  <ret> 발화 (turn4 첫 프레임)
     0.46s  user  발화 시작: Right.
     0.46s  agent 발화 끝
     0.47s  user  발화 시작: That sounds great, thanks! What’s the weather like there rig
     0.47s  user  발화 끝
     0.59s  agent 발화 시작: <ret> It's a lovely day in Mountain View!
     0.59s  ⚡SPAN 주입 [d'=0.08s / d_lead=0.08s]: (tool result) The current weather in Mountain View, California is 24.0
     0.59s  user  발화 끝
     0.67s  agent 발화 시작: The current temperature is twenty-four point zero degrees Ce
     0.67s  agent 발화 끝
     1.00s  agent 발화 끝
