# v3_rags_30_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rags_30",
#     "name": "Morgan",
#     "location": {
#       "city": "New York",
#       "country": "United States",
#       "timezone": "America/New_York (EST, UTC-5)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "non-binary",
#     "age_range": "40s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-26",
#       "category": "pet",
#       "text": "User has a Poodle named Coco."
#     },
#     {
#       "date": "2026-05-07",
#       "category": "home",
#       "text": "User's home address is 223 Oak Avenue."
#     },
#     {
#       "date": "2026-02-14",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-01-22",
#       "category": "work",
#       "text": "User works as a graduate student."
#     },
#     {
#       "date": "2025-09-15",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2025-08-21",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-16",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: Who voiced mother in…
     1.80s  user  발화 끝
     3.51s  user  발화 시작: …the film Alien Covenant?
     5.59s  <ret> 발화 (turn2 첫 프레임)
     5.82s  user  발화 끝
     5.83s  agent 발화 시작: <ret> The voice you’re hearing as Mother in Alien Covenant i
     5.83s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.43s]: Lorelei King provided the voice of the Neomorph, also known as Mother,
    14.26s  agent 발화 끝
