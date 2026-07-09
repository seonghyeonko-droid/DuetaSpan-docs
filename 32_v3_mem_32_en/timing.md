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


     0.00s  agent 발화 시작: Hi Manon, I’m Thunalo. It’s lovely to connect with you, and 
     6.22s  user  발화 시작: Yeah.
     6.58s  user  발화 끝
     8.05s  user  발화 시작: Oh, that sounds… good. I’m trying to plan a little getaway, 
     8.07s  agent 발화 끝
    15.75s  user  발화 끝
    15.90s  agent 발화 시작: Revisiting a cherished place can be wonderfully restorative.
    24.43s  agent 발화 끝
    25.73s  user  발화 시작: I— I mean, I was in Kyoto last March, and it was amazing.
    29.88s  <ret> 발화 (turn5 첫 프레임)
    30.22s  user  발화 끝
    30.28s  agent 발화 시작: <ret> Remembering a positive experience is a great starting 
    30.84s  ⚡SPAN 주입 [d'=0.96s / d_lead=3.17s]: [2026-07-25] User is planning a trip to Kyoto in March.
    37.79s  user  발화 시작: Mm-hmm.
    38.43s  user  발화 끝
    40.85s  agent 발화 끝
    41.05s  user  발화 시작: Yes, exactly! That's what I meant. But I can’t seem to get p
    49.30s  agent 발화 시작: It’s perfectly normal to feel overwhelmed when planning, eve
    49.40s  user  발화 끝
    58.71s  agent 발화 끝
