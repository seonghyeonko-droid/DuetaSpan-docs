# v3_rags_29_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rags_29",
#     "name": "Owen",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "male",
#     "age_range": "50s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-03-31",
#       "category": "diet",
#       "text": "User is vegan."
#     },
#     {
#       "date": "2026-03-02",
#       "category": "home",
#       "text": "User's home address is 450 Maple Drive."
#     },
#     {
#       "date": "2025-10-22",
#       "category": "pet",
#       "text": "User has a Poodle named Coco."
#     },
#     {
#       "date": "2025-10-12",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-07-10",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in May."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-07-15",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: Who won the Pulitzer…
     1.57s  user  발화 끝
     2.85s  user  발화 시작: …Prize for Music in 2018?
     4.76s  <ret> 발화 (turn2 첫 프레임)
     5.08s  agent 발화 시작: <ret> Well, it seems Kendrick Lamar received the 2018 Pulitz
     5.08s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.72s]: Kendrick Lamar was awarded the 2018 Pulitzer Prize for Music for his a
     5.15s  user  발화 끝
    15.80s  agent 발화 끝
