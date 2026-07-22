# v3_mcp_02_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_02",
#     "name": "Marie",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "female",
#     "age_range": "mid 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-20",
#       "category": "partner",
#       "text": "User's partner is named Marco."
#     },
#     {
#       "date": "2026-04-28",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2026-04-01",
#       "category": "airline",
#       "text": "User usually flies with ANA."
#     },
#     {
#       "date": "2026-01-30",
#       "category": "temp",
#       "text": "User keeps the home thermostat around 25°C."
#     },
#     {
#       "date": "2025-12-31",
#       "category": "pet",
#       "text": "User has a Pomeranian named Bori."
#     },
#     {
#       "date": "2025-12-10",
#       "category": "schedule",
#       "text": "User has a fully remote setup."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-09",
#       "title": "Planning a dinner party",
#       "bullets": [
#         "hosting eight friends on Saturday",
#         "one guest is gluten-free"
#       ]
#     },
#     {
#       "date": "2026-02-01",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six on the 14th",
#         "looking for outdoor seating with a vegetarian option"
#       ]
#     },
#     {
#       "date": "2025-12-03",
#       "title": "Choosing a preschool",
#       "bullets": [
#         "wants one within walking distance",
#         "asked about hours and monthly fees"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I need a pharmacy nearby. My locat | S2 I'm just feeling a bit overwhelmed | S3 That sounds perfect. Can you set a | S4 …so I don't forget?

     0.00s  user  발화 시작: I need a pharmacy nearby. My location is forty-one point eig
    10.88s  <ret> 발화 (turn1 첫 프레임)
    11.05s  agent 발화 시작: <ret> I found a CVS Pharmacy three hundred four meters away 
    11.18s  user  발화 끝
    11.85s  ⚡SPAN 주입 [d'=0.97s / d_lead=6.62s]: (tool result) 41.8781,-87.6298 (41.87763, -87.63002): CVS Pharmacy (30
    13.12s  user  발화 시작: Yeah.
    13.66s  user  발화 끝
    17.64s  user  발화 시작: I'm just feeling a bit overwhelmed with my to-do list today.
    17.68s  agent 발화 끝
    23.27s  <ret> 발화 (turn4 첫 프레임)
    23.98s  agent 발화 시작: <ret> How about Scary Stories to Tell in the Dark? It stars 
    24.18s  user  발화 끝
    24.56s  ⚡SPAN 주입 [d'=1.29s / d_lead=6.34s]: (tool result) Scary Stories to Tell in the Dark, Zoe Margaret Colletti
    30.31s  user  발화 시작: That sounds perfect. Can you set an alarm for eight p.m.…
    30.33s  agent 발화 끝
    34.85s  user  발화 끝
    36.14s  user  발화 시작: …so I don't forget?
    36.91s  <ret> 발화 (turn7 첫 프레임)
    37.27s  agent 발화 시작: <ret> [happy] All set! Your alarm is scheduled for eight p.m
    37.47s  user  발화 끝
    38.26s  ⚡SPAN 주입 [d'=1.35s / d_lead=3.05s]: (tool result) Alarm set for 20:00
    40.32s  agent 발화 끝
