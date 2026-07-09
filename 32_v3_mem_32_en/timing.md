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
     6.69s  user  발화 시작: Yeah.
     7.14s  user  발화 끝
     8.61s  user  발화 시작: I’m trying to remember what I was planning for my birthday d
     8.76s  agent 발화 끝
    13.93s  <ret> 발화 (turn3 첫 프레임)
    13.94s  user  발화 끝
    14.01s  agent 발화 시작: <ret> It’s completely understandable to feel a bit scattered
    14.89s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.38s]: [2026-03-10] User's favorite cuisine is sushi.
    20.97s  user  발화 시작: Mm-hmm.
    21.60s  user  발화 끝
    23.84s  agent 발화 끝
    24.27s  user  발화 시작: Oh! Yes, that’s it. And I think I was looking at sushi place
    29.59s  user  발화 끝
    29.64s  agent 발화 시작: That sounds delightful! Sushi is a wonderful choice for a ce
    37.75s  agent 발화 끝
    37.89s  user  발화 시작: Do you remember anything about a trip I was planning? I— I m
    42.72s  <ret> 발화 (turn8 첫 프레임)
    42.88s  agent 발화 시작: <ret> Travel plans can certainly be exciting to revisit. You
    42.89s  user  발화 끝
    43.84s  ⚡SPAN 주입 [d'=1.12s / d_lead=2.51s]: [2026-07-25] User is planning a trip to Kyoto in March.
    53.87s  agent 발화 끝
