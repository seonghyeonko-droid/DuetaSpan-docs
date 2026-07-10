# v3_selfc_07_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_07",
#     "name": "Ivy",
#     "location": {
#       "city": "New York",
#       "country": "United States",
#       "timezone": "America/New_York (EST, UTC-5)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "female",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-05",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-05-29",
#       "category": "home",
#       "text": "User's home address is 585 Elm Street."
#     },
#     {
#       "date": "2026-05-01",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2026-04-27",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2026-01-21",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2025-10-16",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in October."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-05",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2026-02-01",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-08-24",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Set up a viewing for me at The Gra | S2 I’m also looking at Riverbend Esta | S3 Great. And can you send me directi | S4 Actually, one last thing—what’s th

     0.00s  user  발화 시작: Set up a viewing for me at The Grandview Lofts on June fifte
     3.47s  <ret> 발화 (turn1 첫 프레임)
     3.71s  agent 발화 시작: <ret> Let's see about scheduling a viewing at The Grandview 
     3.84s  user  발화 끝
     4.99s  ⚡SPAN 주입 [d'=1.52s / d_lead=5.23s]: (no information found)
     8.94s  agent 발화 끝
     9.18s  user  발화 시작: Actually, make that June sixteenth.
    11.25s  <ret> 발화 (turn3 첫 프레임)
    11.26s  user  발화 끝
    11.41s  agent 발화 시작: <ret> Okay, a viewing at The Grandview Lofts is now set for…
    13.25s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.53s]: [{"appointmentId": "78923", "time": "2:30 PM"}]
    19.94s  user  발화 시작: That sounds perfect. Thanks!
    19.94s  agent 발화 끝
    21.87s  user  발화 끝
    21.99s  agent 발화 시작: Wonderful! It’s good to get things settled quickly. Planning
    26.99s  agent 발화 끝
    27.14s  user  발화 시작: I’m also looking at Riverbend Estates. Could you check avail
    31.12s  <ret> 발화 (turn7 첫 프레임)
    31.20s  agent 발화 시작: <ret> Riverbend Estates has openings on June twentieth at 10
    31.31s  user  발화 끝
    33.12s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.41s]: [{"date": "June twentieth", "time": "10:00 AM"}, {"date": "June twenty
    40.62s  agent 발화 끝
    40.97s  user  발화 시작: Let’s go with the twentieth.
    42.44s  user  발화 끝
    42.54s  <ret> 발화 (turn9 첫 프레임)
    42.70s  agent 발화 시작: <ret> Excellent. A viewing at Riverbend Estates is confirmed
    44.54s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.44s]: [{"appointmentId": "45612", "time": "10:00 AM"}]
    48.24s  user  발화 시작: Mm-hmm.
    48.73s  user  발화 끝
    51.14s  agent 발화 끝
    52.47s  user  발화 시작: Great. And can you send me directions to The Grandview Lofts
    55.46s  <ret> 발화 (turn12 첫 프레임)
    55.62s  agent 발화 시작: <ret> Directions to The Grandview Lofts are approximately… …
    55.76s  user  발화 끝
    57.46s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.39s]: [{"distance": "8.2 miles", "estimatedTime": "15 minutes", "route": "Vi
    66.01s  agent 발화 끝
    66.11s  user  발화 시작: That's helpful. Thank you so much!
    68.51s  user  발화 끝
    68.80s  agent 발화 시작: You're very welcome. Taking these steps is a big accomplishm
    74.77s  agent 발화 끝
    74.88s  user  발화 시작: Actually, one last thing—what’s the weather forecast for Jun
    78.81s  user  발화 끝
    78.84s  <ret> 발화 (turn16 첫 프레임)
    79.07s  agent 발화 시작: <ret> For June sixteenth, the forecast is showing a high of…
    80.84s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.78s]: [{"date": "June sixteenth", "high": "78°F", "low": "65°F", "condition"
    84.13s  user  발화 시작: Mm-hmm.
    84.63s  user  발화 끝
    90.84s  agent 발화 끝
    91.45s  user  발화 시작: Perfect. That’s all I needed.
    93.19s  user  발화 끝
    93.31s  agent 발화 시작: Wonderful! It seems you’ve got everything well in hand. Enjo
    97.98s  agent 발화 끝
