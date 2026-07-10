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

# EXAMINER(FDB-v2) 단계: S1 I was just reading something…… | S2 …and it said the VA was started wa | S3 But what then? That article seemed | S4 Nineteen thirty? That’s a big diff

     0.00s  user  발화 시작: I was just reading something……
     1.47s  user  발화 끝
     2.79s  user  발화 시작: …and it said the VA was started way back in nineteen ninetee
     6.83s  <ret> 발화 (turn2 첫 프레임)
     7.14s  agent 발화 시작: <ret> The Department of Veterans Affairs wasn’t formally est
     7.24s  user  발화 끝
     8.19s  ⚡SPAN 주입 [d'=1.36s / d_lead=7.74s]: The Department of Veterans Affairs (VA) was originally established in 
    14.88s  agent 발화 끝
    15.82s  user  발화 시작: But what then? That article seemed pretty sure of itself, uh
    18.93s  <ret> 발화 (turn4 첫 프레임)
    19.33s  agent 발화 시작: <ret> The agency’s origins trace back to 1930, when Congress
    19.48s  user  발화 끝
    20.93s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.08s]: The Veterans’ Bureau was renamed the Veterans Administration in 1930.
    26.41s  agent 발화 끝
    26.43s  user  발화 시작: Nineteen thirty? That’s a big difference. What was it *befor
    31.09s  <ret> 발화 (turn6 첫 프레임)
    31.17s  agent 발화 시작: <ret> Before 1930, services for veterans were handled by the
    31.29s  user  발화 끝
    33.09s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.35s]: The Department of Veterans Affairs wasn’t formally established in nine
    39.52s  agent 발화 끝
