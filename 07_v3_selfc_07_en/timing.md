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

# EXAMINER(FDB-v2) 단계: S1 Set up a viewing for me at The Gra | S2 Are there any good… | S3 Okay, good. Can you remind me abou | S4 Are there any other apartments nea

     0.00s  user  발화 시작: Set up a viewing for me at The Grandview Lofts on June fifte
     3.21s  <ret> 발화 (turn1 첫 프레임)
     3.44s  agent 발화 시작: <ret> Okay, I’ve scheduled a viewing for you at The Grandvie
     3.70s  user  발화 끝
     5.21s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.53s]: (tool result) Viewing scheduled for June fifteenth at 2:00 PM.
    11.96s  agent 발화 끝
    12.24s  user  발화 시작: Actually, make that June sixteenth.
    14.82s  <ret> 발화 (turn3 첫 프레임)
    14.95s  user  발화 끝
    14.98s  agent 발화 시작: <ret> No problem at all! I’ve rescheduled your viewing for T
    16.82s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.50s]: (tool result) Viewing rescheduled for June sixteenth at 2:00 PM.
    24.37s  user  발화 시작: Can you tell me how far it is from there to City Hall?
    24.48s  agent 발화 끝
    26.91s  <ret> 발화 (turn5 첫 프레임)
    27.14s  agent 발화 시작: <ret> The Grandview Lofts is 3.2 miles from City Hall. That’
    27.33s  user  발화 끝
    28.91s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.95s]: (tool result) 3.2 miles.
    34.02s  user  발화 시작: And what’s the fastest route?
    34.09s  agent 발화 끝
    35.39s  <ret> 발화 (turn7 첫 프레임)
    35.53s  agent 발화 시작: <ret> The fastest route to City Hall from The Grandview Loft
    35.72s  user  발화 끝
    37.39s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.78s]: (tool result) Take Elm Street to Main, then turn left onto City Center
    45.31s  agent 발화 끝
    45.36s  user  발화 시작: Are there any good…
    46.73s  user  발화 끝
    48.76s  user  발화 시작: …coffee shops near City Hall?
    50.50s  <ret> 발화 (turn10 첫 프레임)
    50.74s  user  발화 끝
    50.89s  agent 발화 시작: <ret> There are a couple of options! The Daily Grind is just
    52.50s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.41s]: (tool result) The Daily Grind, 0.3 miles. Bean There, Done That, 0.5 m
    58.43s  user  발화 시작: Mm-hmm.
    58.98s  user  발화 끝
    62.30s  agent 발화 끝
    63.53s  user  발화 시작: What are the hours for The Daily Grind?
    65.20s  <ret> 발화 (turn13 첫 프레임)
    65.59s  agent 발화 시작: <ret> The Daily Grind is open from 7:00 AM to 6:00 PM every 
    65.79s  user  발화 끝
    67.20s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.20s]: (tool result) 7:00 AM to 6:00 PM, daily.
    73.65s  user  발화 시작: Okay, good. Can you remind me about the viewing tomorrow at 
    73.79s  agent 발화 끝
    77.46s  <ret> 발화 (turn15 첫 프레임)
    77.60s  agent 발화 시작: <ret> I’ve set a reminder for you for June sixteenth at 2:00
    77.77s  user  발화 끝
    79.06s  ⚡SPAN 주입 [d'=1.60s / d_lead=8.53s]: (tool result) Reminder set for June sixteenth at 2:00 PM: Viewing at T
    86.13s  agent 발화 끝
    86.29s  user  발화 시작: Is there parking available at The Grandview Lofts?
    89.07s  <ret> 발화 (turn17 첫 프레임)
    89.14s  user  발화 끝
    89.31s  agent 발화 시작: <ret> Yes, The Grandview Lofts does offer free on-site parki
    91.07s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.72s]: (tool result) Yes, free on-site parking is available.
    93.21s  user  발화 시작: Uh-huh.
    93.80s  user  발화 끝
    96.02s  agent 발화 끝
    96.78s  user  발화 시작: That's helpful. What about pet policies?
    99.40s  <ret> 발화 (turn20 첫 프레임)
    99.71s  agent 발화 시작: <ret> They allow cats and small dogs at The Grandview Lofts,
    99.97s  user  발화 끝
   100.12s  ⚡SPAN 주입 [d'=0.72s / d_lead=8.44s]: (tool result) Cats and small dogs allowed, with a $500 deposit.
   103.06s  user  발화 시작: Exactly.
   103.88s  user  발화 끝
   108.01s  user  발화 시작: Hmm, a $500 deposit. That's a bit steep.
   108.15s  agent 발화 끝
   111.71s  agent 발화 시작: It can be, and it’s perfectly okay to feel that way. It's im
   111.71s  user  발화 끝
   118.84s  agent 발화 끝
   119.36s  user  발화 시작: Are there any other apartments nearby that allow pets with a
   123.34s  <ret> 발화 (turn25 첫 프레임)
   123.66s  user  발화 끝
   123.66s  agent 발화 시작: <ret> Willow Creek Apartments has a $250 pet deposit, and Oa
   125.02s  ⚡SPAN 주입 [d'=1.68s / d_lead=9.04s]: (tool result) Willow Creek Apartments: $250 deposit. Oakwood Residence
   132.51s  user  발화 시작: Tell me more about Willow Creek.
   132.70s  agent 발화 끝
   134.36s  <ret> 발화 (turn27 첫 프레임)
   134.52s  agent 발화 시작: <ret> Willow Creek Apartments offers one and two bedroom apa
   134.59s  user  발화 끝
   136.36s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.79s]: (tool result) One and two bedroom apartments, pool, fitness center.
   142.31s  agent 발화 끝
   142.48s  user  발화 시작: Okay, that sounds promising.
   144.38s  user  발화 끝
   144.76s  agent 발화 시작: [happy] That’s wonderful to hear! It’s all about finding a p
   152.41s  agent 발화 끝
