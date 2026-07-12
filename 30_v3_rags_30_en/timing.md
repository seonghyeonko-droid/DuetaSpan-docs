# v3_rags_30_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rags_30",
#     "name": "Grace",
#     "location": {
#       "city": "London",
#       "country": "United Kingdom",
#       "timezone": "Europe/London (GMT, UTC+0)",
#       "currency": "GBP (£)"
#     },
#     "nationality": "British",
#     "gender": "female",
#     "age_range": "late 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-27",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-03-09",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2026-02-11",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     },
#     {
#       "date": "2025-09-29",
#       "category": "work",
#       "text": "User works as a physical therapist."
#     },
#     {
#       "date": "2025-07-31",
#       "category": "home",
#       "text": "User's home address is 94 Birch Road."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-27",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-10-09",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-08-28",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: When did the Vegas Golden Knights…
     2.54s  user  발화 시작: …first join the National Hockey League?
     2.54s  user  발화 끝
     4.83s  <ret> 발화 (turn2 첫 프레임)
     5.07s  agent 발화 시작: <ret> Well, that’s a good question. The Vegas Golden Knights
     5.07s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.14s]: The Vegas Golden Knights joined the National Hockey League as an expan
     5.07s  user  발화 끝
    15.22s  agent 발화 끝
