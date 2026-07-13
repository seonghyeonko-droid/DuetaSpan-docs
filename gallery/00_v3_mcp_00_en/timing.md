# v3_mcp_00_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_00",
#     "name": "Riley",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "non-binary",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-25",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     },
#     {
#       "date": "2026-06-12",
#       "category": "home",
#       "text": "User's home address is 409 Maple Drive."
#     },
#     {
#       "date": "2026-01-31",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in March."
#     },
#     {
#       "date": "2025-12-29",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-01-13",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: I need to find a really good Italian restaurant near my hote
     4.21s  agent 발화 시작: To help me find the perfect spot, could you tell me the name
     4.21s  user  발화 끝
     9.82s  user  발화 시작: It’s the Grand Seoul Hotel.
     9.82s  agent 발화 끝
    11.20s  <ret> 발화 (turn3 첫 프레임)
    11.57s  agent 발화 시작: <ret> I found two Italian restaurants near the Grand Seoul H
    11.57s  user  발화 끝
    12.28s  ⚡SPAN 주입 [d'=1.08s / d_lead=12.97s]: {"location": "Grand Seoul Hotel", "cuisine": "Italian", "results": [{"
    24.55s  user  발화 시작: Oh.
    24.55s  agent 발화 끝
    24.90s  agent 발화 시작: Bella Notte seems to be the higher-rated of the two. [happy]
    24.90s  user  발화 끝
    33.66s  user  발화 시작: Yes, please. For two people, around 7:30 PM.
    33.66s  agent 발화 끝
    36.47s  agent 발화 시작: Wow.
    36.47s  user  발화 끝
    36.71s  <ret> 발화 (turn8 첫 프레임)
    36.82s  agent 발화 시작: <ret> Wonderful! I’ve reserved a table for two at Bella Nott
    36.82s  agent 발화 끝
    37.61s  ⚡SPAN 주입 [d'=0.90s / d_lead=10.17s]: (tool result) {"restaurant name": "Bella Notte", "date": "2026-07-10",
    46.99s  agent 발화 끝
