# v3_rags_31_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rags_31",
#     "name": "Emilia",
#     "location": {
#       "city": "Berlin",
#       "country": "Germany",
#       "timezone": "Europe/Berlin (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "German",
#     "gender": "female",
#     "age_range": "early 30s",
#     "language": "German"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-03-29",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in October."
#     },
#     {
#       "date": "2026-01-04",
#       "category": "work",
#       "text": "User works as a chef."
#     },
#     {
#       "date": "2026-01-03",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2025-09-25",
#       "category": "home",
#       "text": "User's home address is 506 Pine Court."
#     },
#     {
#       "date": "2025-06-27",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-08-28",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: Where was the Beauty and the Beast TV show filmed?
     2.90s  <ret> 발화 (turn1 첫 프레임)
     3.13s  agent 발화 시작: <ret> Oh, that's a lovely show! It was mostly filmed in Toro
     3.14s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.78s]: The live-action Beauty and the Beast television series was primarily f
     3.33s  user  발화 끝
    14.92s  agent 발화 끝
