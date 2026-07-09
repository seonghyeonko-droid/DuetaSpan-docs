# v3_mem_32_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_32",
#     "name": "Manon",
#     "location": {
#       "city": "Berlin",
#       "country": "Germany",
#       "timezone": "Europe/Berlin (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "German",
#     "gender": "female",
#     "age_range": "late 30s",
#     "language": "German"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-07-25",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in March."
#     },
#     {
#       "date": "2026-06-14",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2026-03-10",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2026-02-26",
#       "category": "diet",
#       "text": "User is gluten-free."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-07-12",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2026-01-20",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: Hi Manon, I'm Thunalo. It's lovely to connect with you. I un
     7.54s  user  발화 시작: Yeah.
     8.17s  user  발화 끝
     9.69s  user  발화 시작: Actually, yes. I’m trying to plan a little getaway, and I’m 
     9.82s  agent 발화 끝
    15.57s  user  발화 끝
    15.60s  agent 발화 시작: That’s very common, Manon. Sometimes too many options can be
    22.34s  user  발화 시작: Mm-hmm.
    22.79s  user  발화 끝
    24.54s  <ret> 발화 (turn5 첫 프레임)
    24.93s  agent 발화 시작: <ret> Perhaps recalling past plans will help. You mentioned 
    25.11s  agent 발화 끝
    25.50s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.23s]: [2026-07-25] User is planning a trip to Kyoto in March.
    33.10s  user  발화 시작: Oh, yes! Kyoto is still on my list, but I was thinking of so
    33.46s  agent 발화 끝
    40.43s  <ret> 발화 (turn7 첫 프레임)
    40.56s  user  발화 끝
    40.58s  agent 발화 시작: <ret> [happy] That sounds wonderful. Something a little more
    42.43s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.51s]: [2026-06-14] User is into rock climbing.
    45.96s  agent 발화 시작: You’ve expressed an interest in rock climbing. Would a trip 
    46.09s  agent 발화 끝
    52.21s  agent 발화 끝
