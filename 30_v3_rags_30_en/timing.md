# v3_rags_30_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rags_30",
#     "name": "Emilia",
#     "location": {
#       "city": "New York",
#       "country": "United States",
#       "timezone": "America/New_York (EST, UTC-5)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "female",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-06",
#       "category": "work",
#       "text": "User works as a chef."
#     },
#     {
#       "date": "2026-02-14",
#       "category": "home",
#       "text": "User's home address is 386 Pine Court."
#     },
#     {
#       "date": "2025-09-30",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2025-09-12",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-19",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2026-04-18",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: When does the Disneyland electric light parade end?
     3.04s  <ret> 발화 (turn1 첫 프레임)
     3.28s  agent 발화 시작: <ret> That wonderful parade ended on August twentieth, 2017.
     3.28s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.19s]: The Disneyland Electric Light Parade concluded its run on August 20, 2
     3.28s  user  발화 끝
    11.47s  agent 발화 끝
