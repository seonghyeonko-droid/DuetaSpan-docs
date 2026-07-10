# v3_to_ot_12_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_12",
#     "name": "Casey",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "non-binary",
#     "age_range": "early 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-26",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-06-21",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     },
#     {
#       "date": "2026-05-09",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2025-08-25",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2025-08-01",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2025-05-29",
#       "category": "work",
#       "text": "User works as a accountant."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-22",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-07-25",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I was just reading about public he | S2 Oh, you wouldn’t believe the traff | S3 Sorry, just a quick chat with some | S4 That’s okay. It just seems… a big 

     0.00s  user  발화 시작: I was just reading about public health… uh, when did they st
     6.15s  <ret> 발화 (turn1 첫 프레임)
     6.35s  agent 발화 시작: <ret> The practice began on January 25th, 1945, in Newburgh,
     6.39s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.72s]: Fluoridation began in the United States on January 25, 1945, in Newbur
     6.48s  user  발화 끝
     9.89s  user  발화 시작: Oh.
    10.39s  user  발화 끝
    14.90s  user  발화 시작: Oh, you wouldn’t believe the traffic on the way here.
    15.07s  agent 발화 끝
    17.74s  user  발화 시작: Sorry, just a quick chat with someone. So, Newburgh, huh?
    17.80s  user  발화 끝
    21.34s  user  발화 끝
    21.48s  <ret> 발화 (turn5 첫 프레임)
    21.87s  agent 발화 시작: <ret> I'm afraid I don’t have any further information about 
    21.88s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.60s]: (no information found)
    27.47s  agent 발화 끝
    28.49s  user  발화 시작: That’s okay. It just seems… a big step.
    32.05s  user  발화 끝
    32.08s  agent 발화 시작: It is a significant public health decision, certainly. Somet
    39.36s  agent 발화 끝
