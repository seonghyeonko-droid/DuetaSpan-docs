# v3_selfc_08_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_08",
#     "name": "Andrea",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "non-binary",
#     "age_range": "50s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-01-10",
#       "category": "home",
#       "text": "User's home address is 808 Maple Drive."
#     },
#     {
#       "date": "2025-11-07",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     },
#     {
#       "date": "2025-10-22",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2025-08-25",
#       "category": "work",
#       "text": "User works as a accountant."
#     },
#     {
#       "date": "2025-07-16",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-25",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-12-24",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-09-20",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Please donate fifty cents to chari | S2 I actually meant Busan—Seoul is to | S3 Okay, perfect. Can you find me som | S4 Could you book me a ride to Haeund

     0.00s  user  발화 시작: Please donate fifty cents to charity_fund using my app balan
     3.62s  <ret> 발화 (turn1 첫 프레임)
     4.02s  agent 발화 시작: <ret> Your donation of fifty cents to charity_fund has been 
     4.02s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.03s]: (tool result) Payment successful. Transaction ID: 89237465. Amount: $0
     4.02s  user  발화 끝
    10.05s  user  발화 시작: That’s good. Um, what’s the weather like in Seoul right now?
    10.05s  agent 발화 끝
    14.23s  <ret> 발화 (turn3 첫 프레임)
    14.47s  agent 발화 시작: <ret> It’s currently 26.5 degrees Celsius in Seoul, with 68%
    14.47s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.64s]: (tool result) Current conditions in Seoul: 26.5°C, humidity 68%, wind 
    14.47s  user  발화 끝
    22.11s  user  발화 시작: Exactly.
    22.11s  agent 발화 끝
    22.51s  agent 발화 시작: It’s a lovely day for a mindful walk, don’t you think? Takin
    22.51s  user  발화 끝
    31.75s  user  발화 시작: Yeah.
    31.75s  agent 발화 끝
    32.15s  user  발화 시작: I actually meant Busan—Seoul is too far.
    32.15s  user  발화 끝
    34.65s  <ret> 발화 (turn8 첫 프레임)
    34.97s  agent 발화 시작: <ret> My apologies! Let me check Busan for you. It's current
    34.97s  ⚡SPAN 주입 [d'=1.12s / d_lead=9.65s]: (tool result) Current conditions in Busan: 28.1°C, humidity 71%, wind 
    34.97s  user  발화 끝
    44.61s  user  발화 시작: Okay, perfect. Can you find me some events happening in Busa
    44.61s  agent 발화 끝
    49.76s  <ret> 발화 (turn10 첫 프레임)
    49.84s  agent 발화 시작: <ret> The Busan International Film Festival is having a prev
    49.84s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.04s]: (tool result) Busan International Film Festival Preview - Haeundae Bea
    49.84s  user  발화 끝
    57.88s  user  발화 시작: Nice.
    57.88s  agent 발화 끝
    58.28s  user  발화 시작: That sounds interesting…
    58.28s  user  발화 끝
    59.49s  agent 발화 시작: It does, doesn't it? Sometimes, simply anticipating a pleasa
    59.49s  user  발화 끝
    66.72s  user  발화 시작: Could you book me a ride to Haeundae Beach for Saturday at, 
    66.72s  agent 발화 끝
    72.35s  <ret> 발화 (turn15 첫 프레임)
    72.75s  agent 발화 시작: <ret> Wonderful! A ride to Haeundae Beach is confirmed for S
    72.75s  ⚡SPAN 주입 [d'=2.00s / d_lead=12.46s]: (tool result) Ride confirmed. ETA 15 minutes. Vehicle: Sedan. Driver: 
    72.75s  user  발화 끝
    85.21s  agent 발화 끝
