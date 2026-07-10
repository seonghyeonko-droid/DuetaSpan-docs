# v3_rags_29_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rags_29",
#     "name": "Clara",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "female",
#     "age_range": "50s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-02-25",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2026-02-12",
#       "category": "work",
#       "text": "User works as a architect."
#     },
#     {
#       "date": "2026-02-03",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in August."
#     },
#     {
#       "date": "2026-01-02",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2025-12-07",
#       "category": "home",
#       "text": "User's home address is 316 Birch Road."
#     },
#     {
#       "date": "2025-09-25",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-25",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2026-04-28",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-07-06",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: When did Crater Lake’s volcano last erupt, exactly?
     3.74s  <ret> 발화 (turn1 첫 프레임)
     3.74s  user  발화 끝
     4.06s  agent 발화 시작: <ret> That volcano last erupted around 4,800 years ago. It's
     4.06s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.43s]: The volcano that formed Crater Lake last erupted approximately 4,800 y
    12.49s  agent 발화 끝
