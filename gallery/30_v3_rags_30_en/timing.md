# v3_rags_30_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rags_30",
#     "name": "Dylan",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "male",
#     "age_range": "40s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-20",
#       "category": "pet",
#       "text": "User has a Golden Retriever named Max."
#     },
#     {
#       "date": "2025-12-26",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     },
#     {
#       "date": "2025-09-08",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     },
#     {
#       "date": "2025-06-25",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in May."
#     },
#     {
#       "date": "2025-06-07",
#       "category": "home",
#       "text": "User's home address is 770 Birch Road."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-07-03",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: Could you tell me who the members of the Three 6 Mafia are?
     3.38s  <ret> 발화 (turn1 첫 프레임)
     3.62s  agent 발화 시작: <ret> Well, Three 6 Mafia was formed by DJ Paul, Juicy J, Lo
     3.62s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.28s]: Three 6 Mafia consisted of DJ Paul, Juicy J, Lord Infamous, Koopsta Kn
     3.75s  user  발화 끝
    12.90s  agent 발화 끝
