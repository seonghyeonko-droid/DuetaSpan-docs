# v3_rags_31_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rags_31",
#     "name": "Jordan",
#     "location": {
#       "city": "New York",
#       "country": "United States",
#       "timezone": "America/New_York (EST, UTC-5)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "non-binary",
#     "age_range": "early 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-02-04",
#       "category": "home",
#       "text": "User's home address is 796 Maple Drive."
#     },
#     {
#       "date": "2025-11-30",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2025-10-05",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-05-31",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in May."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-10",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-05-30",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: Who won the presidential election in Slovenia in 2017?
     4.09s  <ret> 발화 (turn1 첫 프레임)
     4.32s  agent 발화 시작: <ret> It was Borut Pahor who won the 2017 Slovenian presiden
     4.33s  ⚡SPAN 주입 [d'=2.00s / d_lead=15.50s]: Borut Pahor won the 2017 Slovenian presidential election, defeating Ma
     4.49s  user  발화 끝
    19.82s  agent 발화 끝
