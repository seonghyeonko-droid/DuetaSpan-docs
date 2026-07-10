# v3_rag_28_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_28",
#     "name": "Ruby",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "female",
#     "age_range": "50s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-02-08",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2026-02-01",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     },
#     {
#       "date": "2026-01-30",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-12-13",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in May."
#     },
#     {
#       "date": "2025-10-12",
#       "category": "home",
#       "text": "User's home address is 379 Oak Avenue."
#     },
#     {
#       "date": "2025-06-26",
#       "category": "work",
#       "text": "User works as a chef."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-09-12",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-07-15",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: I was just wondering, when is the next Olympics coming to Lo
     3.34s  <ret> 발화 (turn1 첫 프레임)
     3.66s  agent 발화 시작: <ret> The next Olympics in Los Angeles are scheduled for Jul
     3.66s  ⚡SPAN 주입 [d'=1.36s / d_lead=9.69s]: The 2028 Summer Olympics are scheduled to be held in Los Angeles, Cali
     3.80s  user  발화 끝
    13.35s  agent 발화 끝
    13.83s  user  발화 시작: 2028… that feels so far away! I thought maybe they’d moved i
    18.36s  user  발화 끝
    18.81s  agent 발화 시작: It does seem a bit distant, doesn’t it? Sometimes big events
    20.77s  user  발화 시작: Yeah.
    21.55s  user  발화 끝
    25.10s  user  발화 시작: Hmm, well, what about the weather there then, around that ti
    25.26s  agent 발화 끝
    27.90s  <ret> 발화 (turn6 첫 프레임)
    28.30s  agent 발화 시작: <ret> On July 21st, 2028, Los Angeles is forecast to be arou
    28.30s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.99s]: (tool result) Los Angeles on July 21, 2028, is forecast to have a high
    28.33s  user  발화 끝
    39.29s  agent 발화 끝
