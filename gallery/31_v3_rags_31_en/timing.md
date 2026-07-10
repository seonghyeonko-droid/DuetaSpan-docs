# v3_rags_31_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rags_31",
#     "name": "Riley",
#     "location": {
#       "city": "Berlin",
#       "country": "Germany",
#       "timezone": "Europe/Berlin (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "German",
#     "gender": "non-binary",
#     "age_range": "50s",
#     "language": "German"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-28",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-05-09",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2026-03-08",
#       "category": "home",
#       "text": "User's home address is 664 Pine Court."
#     },
#     {
#       "date": "2025-09-02",
#       "category": "work",
#       "text": "User works as a graduate student."
#     },
#     {
#       "date": "2025-06-09",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     },
#     {
#       "date": "2025-06-02",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in October."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-11-14",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-06-21",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: Who played Belle’s dad in Beauty and the Beast?
     2.27s  <ret> 발화 (turn1 첫 프레임)
     2.50s  agent 발화 시작: <ret> That would be Kevin Kline! He really brought a warmth 
     2.51s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.67s]: Kevin Kline portrayed Maurice, Belle’s father, in the 1991 Disney film
     2.67s  user  발화 끝
    11.17s  agent 발화 끝
