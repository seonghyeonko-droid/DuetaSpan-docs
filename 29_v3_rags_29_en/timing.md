# v3_rags_29_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rags_29",
#     "name": "Hannah",
#     "location": {
#       "city": "Berlin",
#       "country": "Germany",
#       "timezone": "Europe/Berlin (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "German",
#     "gender": "female",
#     "age_range": "late 30s",
#     "language": "German"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-03-05",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2026-02-24",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2025-12-13",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in March."
#     },
#     {
#       "date": "2025-10-31",
#       "category": "home",
#       "text": "User's home address is 343 Cedar Lane."
#     },
#     {
#       "date": "2025-07-13",
#       "category": "diet",
#       "text": "User is vegetarian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-15",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: Who's the oldest player currently playing in the NBA?
     3.74s  <ret> 발화 (turn1 첫 프레임)
     3.80s  user  발화 끝
     4.06s  agent 발화 시작: <ret> The oldest player in the NBA right now is… LeBron Jame
     5.74s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.67s]: LeBron James is the oldest player currently in the NBA, having been bo
     7.39s  user  발화 시작: Right.
     8.03s  user  발화 끝
     8.54s  user  발화 시작: Wow, really? I thought it was someone else.
     8.73s  agent 발화 끝
    11.21s  agent 발화 시작: It’s easy to lose track of who’s still playing, even at that
    11.26s  user  발화 끝
    15.37s  agent 발화 끝
