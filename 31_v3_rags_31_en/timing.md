# v3_rags_31_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rags_31",
#     "name": "Andrea",
#     "location": {
#       "city": "London",
#       "country": "United Kingdom",
#       "timezone": "Europe/London (GMT, UTC+0)",
#       "currency": "GBP (£)"
#     },
#     "nationality": "British",
#     "gender": "non-binary",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-27",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in December."
#     },
#     {
#       "date": "2026-05-13",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2026-05-11",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2026-04-27",
#       "category": "home",
#       "text": "User's home address is 314 Pine Court."
#     },
#     {
#       "date": "2026-03-10",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-11-06",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-17",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: Where is the Burj Khalifa located?
     1.85s  <ret> 발화 (turn1 첫 프레임)
     2.08s  agent 발화 시작: <ret> The Burj Khalifa, that incredible building, is located
     2.09s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.98s]: The Burj Khalifa, the world's tallest skyscraper, is located in Dubai,
     2.17s  user  발화 끝
    10.05s  agent 발화 끝
