# v3_mcp_01_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_01",
#     "name": "Sky",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "non-binary",
#     "age_range": "late 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-03-25",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     },
#     {
#       "date": "2026-03-23",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2026-03-13",
#       "category": "home",
#       "text": "User's home address is 865 Pine Court."
#     },
#     {
#       "date": "2026-02-07",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-09-24",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in October."
#     },
#     {
#       "date": "2025-08-02",
#       "category": "work",
#       "text": "User works as a graduate student."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-08-09",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-06-27",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 What’s the traffic… | S2 …like in the area defined by those | S3 Hmm, moderate… can you find me a r | S4 Yunnan food… sounds interesting. C

     0.00s  user  발화 시작: What’s the traffic…
     1.55s  user  발화 끝
     2.85s  user  발화 시작: …like in the area defined by those coordinates in Shanghai? 
    10.74s  <ret> 발화 (turn2 첫 프레임)
    10.82s  agent 발화 시작: <ret> Traffic around those coordinates in Shanghai is curren
    10.82s  ⚡SPAN 주입 [d'=1.28s / d_lead=6.39s]: (tool result) {"distance": 0, "duration": 0, "status": "OK", "traffic"
    10.97s  user  발화 끝
    14.84s  user  발화 시작: Yeah.
    15.48s  user  발화 끝
    16.95s  user  발화 시작: Hmm, moderate… can you find me a restaurant nearby that’s op
    17.21s  agent 발화 끝
    21.08s  <ret> 발화 (turn5 첫 프레임)
    21.48s  agent 발화 시작: <ret> Lost Heaven, a Yunnan restaurant on the Bund, is open 
    21.48s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.69s]: (tool result) {"name": "Lost Heaven", "address": "Bund 27, Huangpu Dis
    21.67s  user  발화 끝
    27.05s  user  발화 시작: Yunnan food… sounds interesting. Can you reserve a table for
    27.18s  agent 발화 끝
    32.56s  <ret> 발화 (turn7 첫 프레임)
    32.96s  agent 발화 시작: <ret> I’ve reserved a table for two at Lost Heaven for 7:30 
    32.96s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.44s]: (tool result) {"confirmation id": "LH78923", "restaurant name": "Lost 
    33.13s  user  발화 끝
    43.40s  agent 발화 끝
