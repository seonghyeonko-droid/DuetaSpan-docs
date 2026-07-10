# v3_mcp_03_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_03",
#     "name": "Caleb",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "male",
#     "age_range": "50s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2025-11-17",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in March."
#     },
#     {
#       "date": "2025-10-30",
#       "category": "home",
#       "text": "User's home address is 565 Birch Road."
#     },
#     {
#       "date": "2025-09-28",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2025-06-25",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2025-06-02",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-12",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2026-05-18",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2026-03-08",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: Are there any coffee shops nearby in Beijing?
     2.34s  <ret> 발화 (turn1 첫 프레임)
     2.74s  agent 발화 시작: <ret> There are a few coffee shops close by. Coffee Bean is 
     2.74s  ⚡SPAN 주입 [d'=1.20s / d_lead=7.82s]: (tool result) Coffee Bean & Tea Leaf — 3.1 km, Starbucks — 1.5 km, Pee
     2.78s  user  발화 끝
     7.82s  user  발화 시작: Mhm.
     8.46s  user  발화 끝
    10.56s  agent 발화 끝
    11.28s  user  발화 시작: Hmm, how about something a little quieter?
    14.30s  agent 발화 시작: Sometimes, finding a peaceful space is exactly what you need
    14.32s  user  발화 끝
    18.02s  user  발화 시작: Yeah.
    18.66s  user  발화 끝
    20.52s  agent 발화 끝
    21.48s  user  발화 시작: Can you find me directions to the Starbucks?
    23.63s  <ret> 발화 (turn7 첫 프레임)
    24.01s  agent 발화 시작: <ret> To get to Starbucks, walk 1.2 kilometers, it will take
    24.03s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.34s]: (tool result) Walk 1.2 km, approx. 17 minutes. Turn left onto…
    24.07s  user  발화 끝
    30.36s  agent 발화 끝
