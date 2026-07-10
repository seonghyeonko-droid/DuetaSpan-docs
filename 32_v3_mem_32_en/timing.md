# v3_mem_32_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_32",
#     "name": "Manon",
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
#       "date": "2026-03-15",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in March."
#     },
#     {
#       "date": "2026-02-20",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2025-08-28",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2025-06-11",
#       "category": "diet",
#       "text": "User is gluten-free."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-22",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-07-07",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: Hi Manon, I'm Thunalo. It's lovely to connect with you today
     2.81s  user  발화 시작: Yeah, totally.
     3.80s  user  발화 시작: I’m trying to remember… did I mention a trip I’m planning? I
     3.98s  agent 발화 끝
     4.10s  user  발화 끝
     8.36s  <ret> 발화 (turn3 첫 프레임)
     8.44s  agent 발화 시작: <ret> You are planning a trip to Kyoto… in March of next yea
     8.53s  user  발화 끝
     9.88s  ⚡SPAN 주입 [d'=1.52s / d_lead=9.18s]: [2026-03-15] User is planning a trip to Kyoto in March.
    11.81s  user  발화 시작: Okay.
    12.31s  user  발화 끝
    17.42s  agent 발화 시작: So, Kyoto in March—wonderful! Is this trip the source of a p
    17.62s  agent 발화 끝
    25.82s  user  발화 시작: Actually, yes. I was hoping to try rock climbing there, but 
    26.23s  agent 발화 끝
    31.80s  <ret> 발화 (turn7 첫 프레임)
    31.96s  agent 발화 시작: <ret> You do enjoy rock climbing, which is fantastic! I don'
    32.08s  user  발화 끝
    33.80s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.44s]: [2026-02-20] User is into rock climbing.
    40.33s  user  발화 시작: Oh, that’s right! I hadn’t booked it yet. Thanks for remindi
    40.40s  agent 발화 끝
    43.42s  user  발화 끝
