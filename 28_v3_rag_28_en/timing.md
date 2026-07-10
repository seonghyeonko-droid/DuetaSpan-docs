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

# EXAMINER(FDB-v2) 단계: S1 I was just reading about the Depar | S2 Nineteen thirty? That seems… late. | S3 So the bureau came first, then the | S4 That makes sense… I think I’m good

     0.00s  user  발화 시작: I was just reading about the Department of Veterans Affairs…
     5.62s  <ret> 발화 (turn1 첫 프레임)
     5.93s  agent 발화 시작: <ret> The Department of Veterans Affairs was elevated to cab
     5.94s  ⚡SPAN 주입 [d'=1.36s / d_lead=9.83s]: The Department of Veterans Affairs became a cabinet-level department o
     6.12s  user  발화 끝
     9.11s  user  발화 시작: Right.
     9.61s  user  발화 끝
    15.75s  agent 발화 끝
    16.85s  user  발화 시작: Nineteen thirty? That seems… late. Uhhh, wasn’t there someth
    22.92s  <ret> 발화 (turn4 첫 프레임)
    23.32s  agent 발화 시작: <ret> There was a Veterans Bureau established on August nint
    23.32s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.38s]: The Veterans Bureau was established on August 9, 1921, originally to a
    23.52s  user  발화 끝
    29.59s  user  발화 시작: Okay.
    30.03s  user  발화 끝
    31.70s  agent 발화 끝
    33.37s  user  발화 시작: So the bureau came first, then the department? But what was 
    39.77s  agent 발화 시작: Well, advocating for veterans’ rights was a growing movement
    39.89s  user  발화 끝
    47.31s  user  발화 시작: That makes sense… I think I’m good for now.
    47.42s  agent 발화 끝
    50.26s  user  발화 끝
