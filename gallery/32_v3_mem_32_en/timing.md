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


     0.00s  agent 발화 시작: Hi Manon, I'm Thunalo. It's lovely to connect with you.
     6.08s  user  발화 시작: Yeah.
     6.63s  user  발화 끝
     7.99s  user  발화 시작: Oh, that's nice. Actually, I was just thinking about a trip 
     8.02s  agent 발화 끝
    12.13s  agent 발화 시작: A trip sounds wonderful! Are you revisiting a place you love
    12.20s  user  발화 끝
    19.00s  agent 발화 끝
    19.45s  user  발화 시작: It's to Kyoto, actually. I’m going in March. Do you think th
    25.96s  <ret> 발화 (turn5 첫 프레임)
    26.36s  agent 발화 시작: <ret> You're planning a trip to Kyoto in March… that’s a bea
    26.52s  ⚡SPAN 주입 [d'=0.56s / d_lead=0.63s]: [2026-03-15] User is planning a trip to Kyoto in March.
    26.54s  user  발화 끝
    26.60s  user  발화 시작: Mm-hmm.
    26.80s  agent 발화 시작: It’s a popular time, though, so booking accommodations and e
    26.99s  agent 발화 끝
    31.63s  agent 발화 끝
    32.05s  user  발화 시작: That's a good point. I also remember talking about my dentis
    35.17s  user  발화 끝
    39.70s  user  발화 끝
