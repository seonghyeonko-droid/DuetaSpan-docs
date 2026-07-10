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

# EXAMINER(FDB-v2) 단계: S1 I was just reading about governmen | S2 …when did the Veterans Affairs dep | S3 July 1930? That seems… surprisingl | S4 So it wasn't created *from* nothin

     0.00s  user  발화 시작: I was just reading about government departments……
     2.96s  user  발화 끝
     4.87s  user  발화 시작: …when did the Veterans Affairs department actually get start
     8.22s  <ret> 발화 (turn2 첫 프레임)
     8.53s  agent 발화 시작: <ret> It’s interesting to consider how long different agenci
     8.71s  user  발화 끝
     9.58s  ⚡SPAN 주입 [d'=1.36s / d_lead=9.46s]: [source: Britannica] The Department of Veterans Affairs was establishe
    17.96s  agent 발화 시작: The Department of Veterans Affairs was formally established…
    17.99s  agent 발화 끝
    24.44s  agent 발화 끝
    24.77s  user  발화 시작: July 1930? That seems… surprisingly recent, actually. Was it
    31.63s  <ret> 발화 (turn5 첫 프레임)
    32.02s  agent 발화 시작: <ret> Before 1930, veteran benefits were handled by several 
    32.18s  user  발화 끝
    33.63s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.60s]: [source: VA.gov] Prior to 1930, veteran benefits were administered by 
    39.48s  user  발화 시작: So it wasn't created *from* nothing, it was a consolidation?
    39.62s  agent 발화 끝
    48.03s  <ret> 발화 (turn7 첫 프레임)
    48.10s  agent 발화 시작: <ret> The Veterans Bureau, created in 1921, offered services
    48.24s  user  발화 끝
    50.03s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.83s]: [source: History.com] The Veterans Bureau, established in 1921, provid
    57.93s  agent 발화 끝
