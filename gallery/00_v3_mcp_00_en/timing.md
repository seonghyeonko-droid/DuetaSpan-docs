# v3_mcp_00_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_00",
#     "name": "Louis",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "male",
#     "age_range": "late 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-01-27",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     },
#     {
#       "date": "2025-08-18",
#       "category": "work",
#       "text": "User works as a software engineer."
#     },
#     {
#       "date": "2025-07-20",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in March."
#     },
#     {
#       "date": "2025-06-21",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-09-18",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-06-19",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: I need a taxi from Tiananmen Square to the Summer Palace, pl
     3.91s  agent 발화 시작: Yeah.
     3.91s  user  발화 끝
     3.99s  <ret> 발화 (turn2 첫 프레임)
     4.23s  agent 발화 시작: <ret> A taxi to the Summer Palace from Tiananmen Square will
     4.23s  ⚡SPAN 주입 [d'=1.12s / d_lead=5.86s]: (tool result) {"ride id": "7492-xklm-2026", "estimated fare": "¥65", "
     4.23s  agent 발화 끝
    10.10s  user  발화 시작: That sounds good. Is it raining there now?
    10.10s  agent 발화 끝
    12.30s  <ret> 발화 (turn4 첫 프레임)
    12.70s  agent 발화 시작: <ret> Let me check the weather at the Summer Palace for you.
    12.70s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.58s]: (tool result) The weather at the Summer Palace is currently 26.0°C, hu
    12.70s  user  발화 끝
    16.28s  agent 발화 시작: It’s currently 26.0 degrees Celsius and lightly raining at t
    16.28s  agent 발화 끝
    21.82s  user  발화 시작: Really?
    21.82s  agent 발화 끝
    22.14s  agent 발화 시작: Perhaps take an umbrella, just in case?
    22.14s  user  발화 끝
    24.42s  agent 발화 끝
