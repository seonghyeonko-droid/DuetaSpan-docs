# v3_rags_29_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rags_29",
#     "name": "Jordan",
#     "location": {
#       "city": "London",
#       "country": "United Kingdom",
#       "timezone": "Europe/London (GMT, UTC+0)",
#       "currency": "GBP (£)"
#     },
#     "nationality": "British",
#     "gender": "non-binary",
#     "age_range": "late 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-01",
#       "category": "home",
#       "text": "User's home address is 299 Oak Avenue."
#     },
#     {
#       "date": "2026-05-18",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     },
#     {
#       "date": "2026-04-16",
#       "category": "diet",
#       "text": "User is vegan."
#     },
#     {
#       "date": "2026-03-01",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     },
#     {
#       "date": "2026-02-20",
#       "category": "work",
#       "text": "User works as a chef."
#     },
#     {
#       "date": "2026-02-07",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in December."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-29",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2026-02-28",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: When did Dragon Ball Super episode one hundred fifteen come 
     4.51s  <ret> 발화 (turn1 첫 프레임)
     4.77s  agent 발화 시작: <ret> That episode originally aired on November twelfth, 201
     4.77s  user  발화 끝
     5.31s  ⚡SPAN 주입 [d'=0.80s / d_lead=7.81s]: Dragon Ball Super episode 115, titled "With Great Joy! The Saiyans' Re
    12.58s  agent 발화 끝
