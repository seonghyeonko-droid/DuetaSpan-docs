# v3_rags_30_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rags_30",
#     "name": "Robin",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "non-binary",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-10",
#       "category": "home",
#       "text": "User's home address is 664 Birch Road."
#     },
#     {
#       "date": "2026-05-07",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2026-03-03",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-01-12",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2026-01-03",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-01",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2026-01-21",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 유럽에서 인쇄술은 언제 발명되었나요?
     1.93s  <ret> 발화 (turn1 첫 프레임)
     1.99s  agent 발화 시작: <ret> 유럽에서 인쇄술이 처음 발명된 시기를 알려드릴게요. 유럽에서 인쇄술은 대략 천사백사십 년쯤 발명되
     2.31s  user  발화 끝
     3.93s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.06s]: The printing press was invented in Europe around 1440.
    10.11s  agent 발화 끝
