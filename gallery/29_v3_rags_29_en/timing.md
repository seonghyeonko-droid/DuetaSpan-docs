# v3_rags_29_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rags_29",
#     "name": "Theo",
#     "location": {
#       "city": "London",
#       "country": "United Kingdom",
#       "timezone": "Europe/London (GMT, UTC+0)",
#       "currency": "GBP (£)"
#     },
#     "nationality": "British",
#     "gender": "male",
#     "age_range": "early 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-01-14",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2026-01-13",
#       "category": "work",
#       "text": "User works as a nurse."
#     },
#     {
#       "date": "2025-12-10",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     },
#     {
#       "date": "2025-08-13",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in May."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-23",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2026-04-02",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: When does the new real l word season start?
     0.00s  <ret> 발화 (turn1 첫 프레임)
     0.24s  agent 발화 시작: <ret> The third season of The Real L Word premiered on July 
     0.24s  ⚡SPAN 주입 [d'=0.56s / d_lead=0.76s]: The Real L Word’s third season premiered on Showtime on July 12, 2012.
     0.24s  user  발화 끝
     1.00s  agent 발화 끝
