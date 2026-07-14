# v3_mem_32_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_32",
#     "name": "Quinn",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "non-binary",
#     "age_range": "early 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-10",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2026-03-07",
#       "category": "pet",
#       "text": "User has a Golden Retriever named Max."
#     },
#     {
#       "date": "2026-02-08",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2026-02-06",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2026-01-29",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in March."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-09",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2026-01-30",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-12-24",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: Hi Quinn, I'm Fror. It's lovely to meet you.
     2.89s  user  발화 시작: Mhm.
     2.89s  agent 발화 끝
     3.21s  user  발화 시작: Hi Fror, nice to meet you too. I was wondering if you could 
     3.21s  user  발화 끝
     9.38s  <ret> 발화 (turn3 첫 프레임)
     9.68s  ⚡SPAN 주입 [d'=0.30s / d_lead=4.17s]: [2026-01-29] User is planning a trip to New Zealand in March.
     9.94s  agent 발화 시작: <ret> I recall you are planning a trip to New Zealand this c
     9.94s  user  발화 끝
    14.12s  user  발화 시작: Yeah, yeah.
    14.12s  agent 발화 끝
    14.76s  agent 발화 시작: It’s good to have a trip to look forward to. Planning can be
    14.76s  user  발화 끝
    22.14s  user  발화 시작: Actually, I'm getting a little stressed about it. I keep sec
    22.14s  agent 발화 끝
    26.31s  agent 발화 시작: Yeah.
    26.31s  user  발화 끝
    26.63s  agent 발화 시작: It's completely normal to feel some anxiety when making big 
    26.63s  agent 발화 끝
    33.04s  user  발화 시작: …but I haven't even booked flights yet! What’s the best way 
    33.04s  agent 발화 끝
    37.56s  <ret> 발화 (turn10 첫 프레임)
    37.85s  agent 발화 시작: <ret> I've found options from San Francisco to Auckland star
    37.85s  user  발화 끝
    38.65s  ⚡SPAN 주입 [d'=1.09s / d_lead=7.38s]: Flights from San Francisco to Auckland, New Zealand, starting at $1200
    45.23s  agent 발화 시작: That might ease some of your stress. Would you like me to ex
    45.23s  agent 발화 끝
    51.97s  agent 발화 끝
