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


     0.00s  agent 발화 시작: Hi Manon, I'm Thunalo. It’s lovely to connect with you. I’m 
     7.15s  user  발화 시작: Yeah.
     7.78s  user  발화 끝
     9.15s  user  발화 시작: Oh, hi Thunalo. I was just thinking about a trip I'm plannin
     9.37s  agent 발화 끝
    14.66s  <ret> 발화 (turn3 첫 프레임)
    14.73s  agent 발화 시작: <ret> That sounds wonderful! You’re heading to Kyoto in Marc
    14.76s  user  발화 끝
    15.30s  ⚡SPAN 주입 [d'=0.64s / d_lead=1.09s]: [2026-03-15] User is planning a trip to Kyoto in March.
    21.16s  user  발화 시작: Mm-hmm.
    21.65s  user  발화 끝
    23.81s  agent 발화 끝
    24.28s  user  발화 시작: I’m still pretty early, honestly. I'm feeling a bit overwhel
    29.62s  agent 발화 시작: That's completely understandable. Kyoto has so much to offer
    29.74s  user  발화 끝
    39.72s  agent 발화 끝
    39.83s  user  발화 시작: I— I mean, I want to make sure I don’t miss anything amazing
    45.69s  agent 발화 시작: That’s a very insightful balance to strike. It sounds like y
    45.85s  user  발화 끝
    57.93s  agent 발화 끝
