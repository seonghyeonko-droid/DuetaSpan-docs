# v3_selfc_08_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_08",
#     "name": "Harry",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "male",
#     "age_range": "50s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-01",
#       "category": "home",
#       "text": "User's home address is 185 Elm Street."
#     },
#     {
#       "date": "2026-02-19",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in May."
#     },
#     {
#       "date": "2025-10-05",
#       "category": "diet",
#       "text": "User is vegan."
#     },
#     {
#       "date": "2025-09-08",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-05-29",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-29",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-11-16",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-09-26",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I need to find a good Italian rest | S2 Great, thanks. What’s the weather  | S3 Sounds pleasant. Is it far to walk | S4 Perfect, that’s very helpful.

     0.00s  user  발화 시작: I need to find a good Italian restaurant nearby, maybe aroun
     4.50s  <ret> 발화 (turn1 첫 프레임)
     4.89s  agent 발화 시작: <ret> Trattoria Romana has openings at six thirty this eveni
     4.90s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.72s]: There are many Italian restaurants in the vicinity, with Trattoria Rom
     5.00s  user  발화 끝
     6.39s  user  발화 시작: Yeah.
     6.93s  user  발화 끝
     9.61s  agent 발화 끝
     9.71s  user  발화 시작: Um, six thirty— no, make that seven.
    12.29s  <ret> 발화 (turn4 첫 프레임)
    12.53s  agent 발화 시작: <ret> Wonderful! I’ve reserved a table for two at Trattoria 
    12.53s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.02s]: (tool result) Confirmation: Trattoria Romana, July 10, 2026, 7:00 PM, 
    12.67s  user  발화 끝
    15.93s  user  발화 시작: Yeah, totally.
    17.39s  user  발화 끝
    20.55s  agent 발화 끝
    20.64s  user  발화 시작: Great, thanks. What’s the weather like there right now?
    24.23s  <ret> 발화 (turn7 첫 프레임)
    24.38s  agent 발화 시작: <ret> It's currently 24.0 degrees Celsius, with 68% humidity
    24.39s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.56s]: (tool result) The weather at Trattoria Romana is currently 24.0°C, hum
    24.57s  user  발화 끝
    31.94s  agent 발화 끝
    33.02s  user  발화 시작: Sounds pleasant. Is it far to walk?
    35.48s  <ret> 발화 (turn9 첫 프레임)
    35.87s  agent 발화 시작: <ret> It’s about 1.2 kilometers, a fifteen-minute walk from 
    35.88s  ⚡SPAN 주입 [d'=0.50s / d_lead=6.07s]: Trattoria Romana is located 1.2 kilometers from your current location,
    35.92s  user  발화 끝
    39.52s  user  발화 시작: Yeah, totally.
    40.85s  user  발화 끝
    41.89s  user  발화 시작: Yes, please do.
    41.93s  agent 발화 끝
    43.06s  <ret> 발화 (turn12 첫 프레임)
    43.45s  agent 발화 시작: <ret> Head north on Main Street for half a kilometer, then t
    43.46s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.67s]: (tool result) Directions to Trattoria Romana: Head north on Main Stree
    43.50s  user  발화 끝
    49.94s  user  발화 시작: Perfect, that’s very helpful.
    50.12s  agent 발화 끝
    52.05s  agent 발화 시작: You’re very welcome!
    52.10s  user  발화 끝
    53.33s  agent 발화 끝
