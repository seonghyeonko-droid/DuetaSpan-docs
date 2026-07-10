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

# EXAMINER(FDB-v2) 단계: S1 I was just reading about governmen | S2 Nineteen thirty? That seems… surpr | S3 So the Bureau of Pensions handled  | S4 Wow, sixteen thirty-six! That’s in

     0.00s  user  발화 시작: I was just reading about government departments… when did th
     5.90s  <ret> 발화 (turn1 첫 프레임)
     6.22s  agent 발화 시작: <ret> The Department of Veterans Affairs was established in 
     6.39s  user  발화 끝
     7.02s  ⚡SPAN 주입 [d'=1.12s / d_lead=4.91s]: [source: Wikipedia] The United States Department of Veterans Affairs w
    11.13s  agent 발화 끝
    12.01s  user  발화 시작: Nineteen thirty? That seems… surprisingly recent, honestly. 
    17.94s  <ret> 발화 (turn3 첫 프레임)
    18.34s  agent 발화 시작: <ret> Actually, support for veterans goes back further. Befo
    18.59s  user  발화 끝
    19.62s  ⚡SPAN 주입 [d'=1.68s / d_lead=3.13s]: [source: History.com] Prior to 1930, veterans’ affairs were managed by
    28.47s  user  발화 시작: So the Bureau of Pensions handled things during the Civil Wa
    28.64s  agent 발화 끝
    36.40s  <ret> 발화 (turn5 첫 프레임)
    36.79s  agent 발화 시작: <ret> Assistance to veterans began as early as sixteen thirt
    36.95s  user  발화 끝
    38.40s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.81s]: [source: VA.gov] Initially, assistance to veterans dates back to 1636,
    39.27s  user  발화 시작: Right.
    39.95s  user  발화 끝
    44.60s  agent 발화 끝
    44.94s  user  발화 시작: Wow, sixteen thirty-six! That’s incredible. So it’s been a c
    51.98s  user  발화 끝
