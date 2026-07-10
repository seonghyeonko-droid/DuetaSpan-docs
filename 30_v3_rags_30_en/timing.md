# v3_rags_30_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rags_30",
#     "name": "Thomas",
#     "location": {
#       "city": "New York",
#       "country": "United States",
#       "timezone": "America/New_York (EST, UTC-5)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "male",
#     "age_range": "40s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-13",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     },
#     {
#       "date": "2026-03-13",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     },
#     {
#       "date": "2026-03-09",
#       "category": "work",
#       "text": "User works as a chef."
#     },
#     {
#       "date": "2026-03-04",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in March."
#     },
#     {
#       "date": "2025-10-12",
#       "category": "home",
#       "text": "User's home address is 578 Oak Avenue."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-11-01",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: Who is the current foreign minister of Latvia?
     2.82s  <ret> 발화 (turn1 첫 프레임)
     3.06s  agent 발화 시작: <ret> Well, that would be Edgars Rinkēvičs, who has been Lat
     3.06s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.86s]: Edgars Rinkēvičs is the current Minister of Foreign Affairs of the Rep
     3.19s  user  발화 끝
    11.92s  agent 발화 끝
