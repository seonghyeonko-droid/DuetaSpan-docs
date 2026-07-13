# v3_fake__14_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__14",
#     "name": "Léa",
#     "location": {
#       "city": "Paris",
#       "country": "France",
#       "timezone": "Europe/Paris (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "French",
#     "gender": "female",
#     "age_range": "late 30s",
#     "language": "French"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-20",
#       "category": "work",
#       "text": "User works as a nurse."
#     },
#     {
#       "date": "2025-11-11",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     },
#     {
#       "date": "2025-10-06",
#       "category": "pet",
#       "text": "User has a Golden Retriever named Max."
#     },
#     {
#       "date": "2025-06-11",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-28",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2026-01-27",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-07-01",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I was just wondering, what's the f | S2 Yeah, I guess so. What about somet | S3 186 mph is still pretty incredible | S4 I do, actually. Thanks, that was h

     0.00s  user  발화 시작: I was just wondering, what's the fastest motorcycle you can 
     4.71s  <ret> 발화 (turn1 첫 프레임)
     4.95s  agent 발화 시작: <ret> The Kawasaki Ninja H2R is typically considered the fas
     4.95s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.67s]: The Kawasaki Ninja H2R is generally considered the fastest production 
     4.95s  user  발화 끝
    13.62s  user  발화 시작: Oh.
    13.62s  agent 발화 끝
    14.03s  user  발화 시작: Wow, that’s…fast. Is it street legal, though?
    14.03s  user  발화 끝
    16.68s  <ret> 발화 (turn4 첫 프레임)
    16.92s  agent 발화 시작: <ret> That's a good point to consider. Generally, the Ninja 
    16.92s  ⚡SPAN 주입(IRRELEVANT) [d'=2.00s / d_lead=12.38s]: The average high temperature in Reykjavik, Iceland in December is 3.2°
    16.92s  user  발화 끝
    29.30s  agent 발화 시작: It sounds like you're thinking about practical use. Sometime
    29.30s  agent 발화 끝
    35.90s  user  발화 시작: Yeah, I guess so. What about something I *could* ride on the
    35.90s  agent 발화 끝
    41.27s  agent 발화 시작: Yeah.
    41.27s  user  발화 끝
    41.36s  <ret> 발화 (turn8 첫 프레임)
    41.68s  agent 발화 시작: <ret> If you're looking for something street legal, the Duca
    41.68s  ⚡SPAN 주입 [d'=0.50s / d_lead=12.79s]: The Ducati Panigale V4 R is a street-legal production motorcycle with 
    41.68s  agent 발화 끝
    54.47s  user  발화 시작: 186 mph is still pretty incredible.
    54.47s  agent 발화 끝
    56.95s  agent 발화 시작: It certainly is. Finding a balance between speed and practic
    56.95s  user  발화 끝
    65.20s  user  발화 시작: I do, actually. Thanks, that was helpful.
    65.20s  agent 발화 끝
    68.09s  agent 발화 시작: You’re very welcome. It's good to explore all the options an
    68.09s  user  발화 끝
    75.93s  agent 발화 끝
