# v3_rags_29_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rags_29",
#     "name": "Jordan",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "non-binary",
#     "age_range": "40s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-09",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     },
#     {
#       "date": "2026-03-11",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2026-01-10",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in August."
#     },
#     {
#       "date": "2025-06-10",
#       "category": "work",
#       "text": "User works as a chef."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-10-29",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: Who wrote the most wonderful time of the year?
     2.40s  <ret> 발화 (turn1 첫 프레임)
     2.72s  agent 발화 시작: <ret> That lovely song was written by Edward Pola, who craft
     2.72s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.18s]: Edward Pola wrote the lyrics to "It's the Most Wonderful Time of the Y
     2.82s  user  발화 끝
    11.89s  agent 발화 끝
