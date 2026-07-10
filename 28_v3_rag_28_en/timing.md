# v3_rag_28_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_28",
#     "name": "Lucia",
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
#       "date": "2026-06-26",
#       "category": "work",
#       "text": "User works as a nurse."
#     },
#     {
#       "date": "2026-03-27",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-03-03",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2025-10-11",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     },
#     {
#       "date": "2025-07-27",
#       "category": "home",
#       "text": "User's home address is 820 Cedar Lane."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-29",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-11-13",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I was wondering, when did the Vete | S2 Nineteen thirty? That seems… late. | S3 So it wasn’t always called “Vetera | S4 Yes, it is. Thanks, Brunal.

     0.00s  user  발화 시작: I was wondering, when did the Veterans Affairs department ac
     3.74s  <ret> 발화 (turn1 첫 프레임)
     4.06s  agent 발화 시작: <ret> The Department of Veterans Affairs was established on 
     4.20s  user  발화 끝
     5.10s  ⚡SPAN 주입 [d'=1.36s / d_lead=8.89s]: The United States Department of Veterans Affairs was established on Ma
    12.95s  agent 발화 끝
    13.51s  user  발화 시작: Nineteen thirty? That seems… late. Wasn't there something be
    18.30s  <ret> 발화 (turn3 첫 프레임)
    18.46s  user  발화 끝
    18.70s  agent 발화 시작: <ret> It did evolve from the National Home for Disabled Sold
    20.30s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.39s]: The Department of Veterans Affairs evolved from the National Home for 
    27.08s  agent 발화 끝
    27.09s  user  발화 시작: So it wasn’t always called “Veterans Affairs”, then? What *w
    32.20s  <ret> 발화 (turn5 첫 프레임)
    32.23s  user  발화 끝
    32.60s  agent 발화 시작: <ret> Initially, it was the National Home for Disabled Soldi
    34.20s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.25s]: The National Home for Disabled Soldiers and Sailors was initially esta
    35.91s  user  발화 시작: Right.
    36.31s  user  발화 끝
    42.83s  user  발화 시작: Yes, it is. Thanks, Brunal.
    42.86s  agent 발화 끝
    44.48s  agent 발화 시작: You’re very welcome. I’m glad I could offer some clarity on 
    44.58s  user  발화 끝
    48.78s  agent 발화 끝
