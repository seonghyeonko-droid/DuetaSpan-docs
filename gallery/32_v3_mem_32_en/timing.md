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


     0.00s  agent 발화 시작: Bonjour Manon, I’m Thunalo. It’s lovely to connect with you.
     6.52s  user  발화 시작: Yeah.
     7.11s  user  발화 끝
     8.39s  agent 발화 끝
     8.54s  user  발화 시작: Yeah, a little. I'm trying to plan my Kyoto trip, but I feel
    14.11s  <ret> 발화 (turn3 첫 프레임)
    14.19s  agent 발화 시작: <ret> You’re planning a trip to Kyoto in March, which is won
    14.24s  user  발화 끝
    16.11s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.54s]: [2026-03-15] User is planning a trip to Kyoto in March.
    20.94s  user  발화 시작: Mm-hmm.
    21.44s  user  발화 끝
    23.61s  agent 발화 시작: Sometimes, a lack of clarity around practicalities can reall
    23.74s  agent 발화 끝
    34.18s  agent 발화 끝
    34.55s  user  발화 시작: I remember mentioning I like climbing… is there good rock cl
    39.06s  <ret> 발화 (turn7 첫 프레임)
    39.22s  agent 발화 시작: <ret> There are several climbing options near Kyoto, includi
    39.45s  user  발화 끝
    41.06s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.04s]: (tool result) There are several climbing gyms and outdoor spots within
    48.26s  agent 발화 끝
    48.93s  user  발화 시작: That sounds…perfect, actually. Thank you.
    51.84s  user  발화 끝
