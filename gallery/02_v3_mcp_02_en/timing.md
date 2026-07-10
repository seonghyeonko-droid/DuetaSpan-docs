# v3_mcp_02_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_02",
#     "name": "Adam",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "male",
#     "age_range": "late 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-02-16",
#       "category": "home",
#       "text": "User's home address is 576 Birch Road."
#     },
#     {
#       "date": "2025-11-26",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2025-10-04",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2025-07-21",
#       "category": "work",
#       "text": "User works as a accountant."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-24",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2026-04-15",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2026-04-13",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I’m thinking about getting a subsc | S2 That sounds great! Um, what’s the  | S3 Perfect! I need to find a good Ita | S4 Can you reserve a table for two th

     0.00s  user  발화 시작: I’m thinking about getting a subscription to your service. C
     7.47s  <ret> 발화 (turn1 첫 프레임)
     7.71s  agent 발화 시작: <ret> I can help with that. I’ve created a silver subscripti
     7.71s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.20s]: (tool result) Subscription created: ID 87654, tier Silver, billing eve
     7.88s  user  발화 끝
    13.51s  user  발화 시작: Mhm.
    13.95s  user  발화 끝
    15.91s  agent 발화 끝
    17.25s  user  발화 시작: That sounds great! Um, what’s the weather like in Seoul righ
    21.77s  <ret> 발화 (turn4 첫 프레임)
    22.09s  agent 발화 시작: <ret> The weather in Seoul is currently twenty-six point fiv
    22.09s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.72s]: (tool result) Seoul: 26.5°C, humidity 68%, wind 4.1 km/h, clear skies.
    22.12s  user  발화 끝
    25.11s  user  발화 시작: Yeah.
    25.60s  user  발화 끝
    28.71s  user  발화 시작: Perfect! I need to find a good Italian restaurant nearby.
    28.82s  agent 발화 끝
    32.28s  <ret> 발화 (turn7 첫 프레임)
    32.68s  agent 발화 시작: <ret> I found Bella Italia, it's just point eight kilometers
    32.68s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.04s]: (tool result) Found: Bella Italia, 0.8km, 4.5 stars, $$$.
    32.87s  user  발화 끝
    39.72s  agent 발화 끝
    40.02s  user  발화 시작: Can you reserve a table for two there at seven this evening?
    43.44s  user  발화 끝
