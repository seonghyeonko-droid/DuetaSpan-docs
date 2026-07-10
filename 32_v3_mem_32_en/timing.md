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


     0.00s  agent 발화 시작: Hi Manon, I'm Thunalo. It’s lovely to connect with you today
     3.60s  user  발화 시작: Yeah.
     4.27s  user  발화 끝
     4.82s  agent 발화 끝
     4.82s  user  발화 시작: Hi Thunalo. I was thinking about that trip I’m planning… the
    10.68s  <ret> 발화 (turn3 첫 프레임)
    10.76s  agent 발화 시작: <ret> You're planning a trip to Kyoto in March… a wonderful 
    10.85s  user  발화 끝
    12.68s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.63s]: [2026-03-15] User is planning a trip to Kyoto in March.
    15.38s  user  발화 시작: Mm-hmm.
    15.87s  user  발화 끝
    17.38s  agent 발화 끝
    17.40s  user  발화 시작: Yes! I’m trying to finalize the dates, actually. What’s the 
    23.52s  <ret> 발화 (turn6 첫 프레임)
    23.59s  agent 발화 시작: <ret> Kyoto is eight hours ahead of Paris in March… that’s s
    23.70s  user  발화 끝
    25.36s  ⚡SPAN 주입 [d'=1.84s / d_lead=6.95s]: (tool result) Kyoto is 8 hours ahead of Paris in March.
    30.55s  agent 발화 끝
    31.06s  user  발화 시작: Eight hours… that’s quite a bit. I— I mean, will that affect
    36.99s  agent 발화 시작: Jet lag can certainly be a factor with that time difference,
    37.03s  user  발화 끝
    45.34s  agent 발화 끝
