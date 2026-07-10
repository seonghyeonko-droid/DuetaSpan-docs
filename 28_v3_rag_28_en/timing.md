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

# EXAMINER(FDB-v2) 단계: S1 I was reading about government dep | S2 …and wondered—when was the Departm | S3 Nineteen thirty? That seems… recen | S4 Eighteen eighty-five… so, the name

     0.00s  user  발화 시작: I was reading about government departments…
     2.30s  user  발화 끝
     3.62s  user  발화 시작: …and wondered—when was the Department of Veterans Affairs cr
     6.49s  <ret> 발화 (turn2 첫 프레임)
     6.81s  agent 발화 시작: <ret> The Department of Veterans Affairs was established on 
     6.84s  user  발화 끝
     7.85s  ⚡SPAN 주입 [d'=1.36s / d_lead=7.78s]: The Department of Veterans Affairs was established on March 3, 1930.
    14.59s  agent 발화 끝
    15.69s  user  발화 시작: Nineteen thirty? That seems… recent. Didn’t it start as some
    20.17s  <ret> 발화 (turn4 첫 프레임)
    20.56s  agent 발화 시작: <ret> It actually began as the National Home for Disabled So
    20.68s  user  발화 끝
    22.17s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.04s]: It originated as the National Home for Disabled Soldiers and Sailors i
    29.61s  agent 발화 끝
    29.64s  user  발화 시작: Eighteen eighty-five… so, the name changed in nineteen thirt
    38.46s  agent 발화 시작: It was originally intended to provide a home and care for Ci
    38.50s  user  발화 끝
    45.60s  agent 발화 끝
