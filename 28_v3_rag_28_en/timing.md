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

# EXAMINER(FDB-v2) 단계: S1 I was just reading about governmen | S2 Nineteen thirty? That seems… late. | S3 So, the nineteen thirty date is ju | S4 Okay, that clarifies things. Thank

     0.00s  user  발화 시작: I was just reading about government agencies… when was the D
     6.06s  <ret> 발화 (turn1 첫 프레임)
     6.37s  agent 발화 시작: <ret> The Department of Veterans Affairs was established on 
     6.48s  user  발화 끝
     7.42s  ⚡SPAN 주입 [d'=1.36s / d_lead=9.74s]: The Department of Veterans Affairs was established on August 9, 1930, 
    16.10s  agent 발화 끝
    16.62s  user  발화 시작: Nineteen thirty? That seems… late. Didn’t veterans need supp
    22.10s  <ret> 발화 (turn3 첫 프레임)
    22.27s  user  발화 끝
    22.50s  agent 발화 시작: <ret> Support was managed earlier, actually, by the Bureau o
    24.10s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.52s]: Prior to 1930, veteran support was managed by the Bureau of War Risks 
    33.01s  agent 발화 끝
    33.03s  user  발화 시작: So, the nineteen thirty date is just when it became a *depar
    40.27s  <ret> 발화 (turn5 첫 프레임)
    40.45s  user  발화 끝
    40.67s  agent 발화 시작: <ret> The Veterans Bureau provided compensation, medical car
    42.27s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.04s]: The Veterans Bureau provided compensation, medical care, and vocationa
    44.22s  user  발화 시작: Right.
    44.72s  user  발화 끝
    51.64s  user  발화 시작: Okay, that clarifies things. Thanks, Brunal.
    51.72s  agent 발화 끝
    54.04s  agent 발화 시작: You’re very welcome. Sometimes digging a little deeper revea
    54.18s  user  발화 끝
    60.07s  agent 발화 끝
