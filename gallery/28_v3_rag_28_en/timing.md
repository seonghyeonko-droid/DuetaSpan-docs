# v3_rag_28_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_28",
#     "name": "Charlotte",
#     "location": {
#       "city": "London",
#       "country": "United Kingdom",
#       "timezone": "Europe/London (GMT, UTC+0)",
#       "currency": "GBP (£)"
#     },
#     "nationality": "British",
#     "gender": "female",
#     "age_range": "40s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-27",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in March."
#     },
#     {
#       "date": "2026-05-03",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     },
#     {
#       "date": "2026-02-16",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     },
#     {
#       "date": "2025-12-19",
#       "category": "home",
#       "text": "User's home address is 441 Oak Avenue."
#     },
#     {
#       "date": "2025-12-16",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-24",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2026-01-28",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: Hey, I'm trying to get my finances in order. Any advice?
     4.05s  agent 발화 시작: Hi there! Absolutely, getting a handle on your finances is a
     4.05s  user  발화 끝
    12.90s  user  발화 시작: Okay, well, I've heard of the 50/30/20 rule. What exactly *i
    12.90s  agent 발화 끝
    17.09s  <ret> 발화 (turn3 첫 프레임)
    17.32s  agent 발화 시작: <ret> It’s a simple method—you allocate fifty percent of you
    17.32s  user  발화 끝
    17.39s  ⚡SPAN 주입 [d'=0.30s / d_lead=8.85s]: The 50/30/20 budget allocates 50% of after-tax income to needs, 30% to
    26.17s  user  발화 시작: Right.
    26.17s  agent 발화 끝
    26.54s  user  발화 시작: That sounds…restrictive. Is there really no wiggle room?
    26.54s  user  발화 끝
    29.49s  user  발화 끝
