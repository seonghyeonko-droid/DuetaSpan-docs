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


     0.00s  agent 발화 시작: Bonjour Manon, I'm Thunalo. It's lovely to connect with you.
     2.62s  user  발화 시작: Yeah.
     3.26s  user  발화 끝
     3.59s  user  발화 시작: Uh, yeah, that’s right. I’m stuck on a painting, and it’s re
     3.60s  agent 발화 끝
     7.97s  <ret> 발화 (turn3 첫 프레임)
     8.05s  agent 발화 시작: <ret> I hear that frustration, Manon. Perhaps recalling past
     8.08s  user  발화 끝
     9.49s  ⚡SPAN 주입 [d'=1.52s / d_lead=8.02s]: [2026-03-15] User is planning a trip to Kyoto in March.
    16.00s  agent 발화 시작: You mentioned a trip to Kyoto in March of this year.
    16.07s  agent 발화 끝
    17.99s  user  발화 시작: Mm-hmm.
    18.49s  user  발화 끝
    18.97s  agent 발화 시작: Sometimes, simply revisiting the details of an anticipated e
    19.05s  agent 발화 끝
    28.06s  agent 발화 끝
    28.09s  user  발화 시작: Welll… the gardens, I think. I’ve been looking at pictures, 
    31.84s  user  발화 끝
    31.86s  agent 발화 시작: The gardens sound beautiful. Visual inspiration is powerful.
    41.42s  agent 발화 끝
