# v3_chain_06_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_chain_06",
#     "name": "Grace",
#     "location": {
#       "city": "London",
#       "country": "United Kingdom",
#       "timezone": "Europe/London (GMT, UTC+0)",
#       "currency": "GBP (£)"
#     },
#     "nationality": "British",
#     "gender": "female",
#     "age_range": "early 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-26",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2026-03-22",
#       "category": "home",
#       "text": "User's home address is 712 Elm Street."
#     },
#     {
#       "date": "2025-09-03",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-08-24",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in March."
#     },
#     {
#       "date": "2025-06-24",
#       "category": "work",
#       "text": "User works as a accountant."
#     },
#     {
#       "date": "2025-06-21",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-11-10",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-11-03",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-06-12",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Could you open the New York Times  | S2 Uh, good. And what’s the weather l | S3 Yes, actually. Can you find me res | S4 That sounds good.

     0.00s  user  발화 시작: Could you open the New York Times using Firefox with a fifte
     0.05s  <ret> 발화 (turn1 첫 프레임)
     0.12s  <ret> 발화 (turn3 첫 프레임)
     0.13s  agent 발화 시작: <ret> I’ve opened the New York Times for you in Firefox. It 
     0.13s  ⚡SPAN 주입 [d'=0.12s / d_lead=0.12s]: (tool result) {"status": "success", "url": "https://www.nytimes.com"}
     0.13s  user  발화 끝
     0.26s  user  발화 시작: Uh, good. And what’s the weather like in Seoul right now?
     0.26s  agent 발화 끝
     0.36s  agent 발화 시작: <ret> It sounds like a lovely day in Seoul—the current tempe
     0.36s  ⚡SPAN 주입 [d'=0.22s / d_lead=0.22s]: (tool result) The current weather in Seoul is 26.0°C, with humidity at
     0.36s  user  발화 끝
     0.46s  <ret> 발화 (turn8 첫 프레임)
     0.58s  user  발화 시작: Mhm.
     0.58s  agent 발화 끝
     0.59s  agent 발화 시작: I’m glad to hear that sounds pleasant.
     0.59s  user  발화 끝
     0.66s  user  발화 시작: Yeah.
     0.66s  agent 발화 끝
     0.67s  user  발화 시작: Yes, actually. Can you find me restaurants near the Lotte Wo
     0.67s  user  발화 끝
     0.78s  agent 발화 시작: <ret> Vatos Urban Tacos, located at 300 Olympic-ro, Songpa-g
     0.78s  ⚡SPAN 주입 [d'=0.18s / d_lead=0.18s]: (tool result) [Restaurant Name: Vatos Urban Tacos, Address: 300 Olympi
     0.78s  user  발화 끝
     0.96s  user  발화 시작: Wow.
     0.96s  agent 발화 끝
     0.97s  user  발화 시작: That sounds good.
     0.97s  user  발화 끝
     1.00s  user  발화 끝
