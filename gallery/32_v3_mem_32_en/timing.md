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


     0.00s  agent 발화 시작: Hi Manon, I'm Thunalo. It's lovely to meet you. Are you feel
     4.88s  user  발화 시작: Yeah.
     5.37s  user  발화 끝
     6.44s  agent 발화 끝
     6.46s  user  발화 시작: Uhhh, a bit stuck, actually. I'm trying to start a new paint
    11.79s  <ret> 발화 (turn3 첫 프레임)
    11.87s  agent 발화 시작: <ret> That’s perfectly alright. It’s very common for creativ
    11.87s  ⚡SPAN 주입 [d'=1.52s / d_lead=8.76s]: [2026-03-15] User is planning a trip to Kyoto in March.
    11.92s  user  발화 끝
    20.62s  agent 발화 시작: You mentioned planning a trip to Kyoto in March. Sometimes, 
    20.63s  agent 발화 끝
    26.28s  user  발화 시작: Mm-hmm.
    26.92s  user  발화 끝
    28.60s  agent 발화 끝
    28.63s  agent 발화 시작: Do you remember what specifically drew you to Kyoto, Manon? 
    38.37s  agent 발화 끝
    38.61s  user  발화 시작: The temples, I think. And the gardens… but I’m not sure how 
    44.17s  user  발화 끝
    44.25s  agent 발화 시작: Welll… it doesn't have to be a direct translation. Perhaps t
    55.75s  agent 발화 끝
