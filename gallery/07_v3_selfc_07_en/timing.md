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

# EXAMINER(FDB-v2) 단계: S1 Set up a viewing for me at The Gra | S2 What’s the weather like there tomo | S3 Perfect. Is there anything else ne | S4 That’s helpful. Can you remind me 

     0.00s  user  발화 시작: Set up a viewing for me at The Grandview Lofts on June fifte
     3.36s  <ret> 발화 (turn1 첫 프레임)
     3.60s  agent 발화 시작: <ret> Alright, I’ve scheduled a visit to The Grandview Lofts
     3.74s  user  발화 끝
     5.36s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.25s]: (tool result) Visit scheduled at The Grandview Lofts on June 15, 2026 
    13.85s  agent 발화 끝
    14.11s  user  발화 시작: Actually, make that June sixteenth.
    16.29s  <ret> 발화 (turn3 첫 프레임)
    16.45s  agent 발화 시작: <ret> No problem at all. I’ve rescheduled your visit to The 
    16.46s  user  발화 끝
    18.29s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.36s]: (tool result) Visit rescheduled at The Grandview Lofts on June 16, 202
    27.81s  agent 발화 끝
    27.83s  user  발화 시작: And could you find restaurants nearby?
    29.87s  <ret> 발화 (turn5 첫 프레임)
    30.11s  agent 발화 시작: <ret> The Spice Merchant is one hundred twenty meters away, 
    30.19s  user  발화 끝
    31.87s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.43s]: (tool result) The Spice Merchant (120m), Bella Italia (250m), Sushi Ze
    38.54s  agent 발화 끝
    38.61s  user  발화 시작: How about something with outdoor seating?
    40.65s  <ret> 발화 (turn7 첫 프레임)
    40.81s  agent 발화 시작: <ret> Bella Italia, two hundred fifty meters away, and The G
    40.96s  user  발화 끝
    42.65s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.18s]: (tool result) Bella Italia (250m, outdoor seating), The Garden Cafe (4
    47.99s  agent 발화 끝
    48.32s  user  발화 시작: What’s the weather like there tomorrow?
    50.45s  <ret> 발화 (turn9 첫 프레임)
    50.52s  user  발화 끝
    50.85s  agent 발화 시작: <ret> Tomorrow at The Grandview Lofts, it will be twenty-six
    52.45s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.97s]: (tool result) 26.5°C, humidity 68%, wind 8.2 km/h.
    56.37s  user  발화 시작: Right.
    56.73s  user  발화 끝
    60.82s  agent 발화 끝
    62.14s  user  발화 시작: Could you book me a table at Bella Italia for…
    65.93s  user  발화 끝
    67.52s  user  발화 시작: …uh, six thirty?
    68.88s  <ret> 발화 (turn13 첫 프레임)
    69.11s  agent 발화 시작: <ret> I’ve reserved a table for one at Bella Italia for six 
    69.13s  user  발화 끝
    70.88s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.69s]: (tool result) Reservation confirmed at Bella Italia for June 16, 2026 
    78.67s  user  발화 시작: Perfect. Is there anything else nearby? Like a park?
    78.80s  agent 발화 끝
    82.29s  <ret> 발화 (turn15 첫 프레임)
    82.44s  agent 발화 시작: <ret> Central Park is eight hundred meters away, and Lakesid
    82.59s  user  발화 끝
    84.29s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.23s]: (tool result) Central Park (800m), Lakeside Gardens (1.5km).
    89.67s  agent 발화 끝
    89.90s  user  발화 시작: Get me directions to Central Park.
    91.70s  <ret> 발화 (turn17 첫 프레임)
    92.02s  agent 발화 시작: <ret> To Central Park, it's a twelve-minute walk, eight hund
    92.21s  user  발화 끝
    92.42s  ⚡SPAN 주입 [d'=0.72s / d_lead=7.46s]: (tool result) Walking: 12 minutes, 800m. Driving: 5 minutes, 2.1km.
    99.48s  agent 발화 끝
   100.28s  user  발화 시작: Okay, and can you set an alarm for eight AM tomorrow?
   104.34s  <ret> 발화 (turn19 첫 프레임)
   104.44s  user  발화 끝
   104.56s  agent 발화 시작: <ret> An alarm is now set for eight AM tomorrow, June sevent
   106.34s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.86s]: (tool result) Alarm set for 8:00 AM on June 17, 2026.
   108.57s  user  발화 시작: Uh-huh.
   109.07s  user  발화 끝
   111.36s  user  발화 시작: What time is it in Seoul right now?
   111.43s  agent 발화 끝
   113.44s  <ret> 발화 (turn22 첫 프레임)
   113.52s  agent 발화 시작: <ret> It is currently two fifty-one PM in Seoul, South Korea
   113.76s  user  발화 끝
   115.44s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.37s]: (tool result) It is Friday, July 10, 2026 at 2:51 PM in Asia/Seoul rig
   118.89s  user  발화 시작: Yeah.
   119.39s  user  발화 끝
   120.89s  agent 발화 끝
   120.92s  user  발화 시작: That’s helpful. Can you remind me to call my sister on Satur
   124.76s  <ret> 발화 (turn25 첫 프레임)
   124.84s  agent 발화 시작: <ret> A reminder has been created for Saturday, July elevent
   124.94s  user  발화 끝
   126.76s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.83s]: (tool result) Reminder created for July 11, 2026 at 10:00 AM: Call sis
   129.30s  user  발화 시작: Okay.
   130.07s  user  발화 끝
   130.68s  agent 발화 끝
   130.83s  user  발화 시작: Good. Thank you.
   132.07s  agent 발화 시작: You are very welcome. I’m glad I could help you with these a
   132.12s  user  발화 끝
   136.37s  agent 발화 끝
   137.52s  user  발화 시작: I think that’s all for now.
   139.04s  user  발화 끝
   139.13s  agent 발화 시작: Wonderful. Enjoy your visit to The Grandview Lofts.
   142.50s  agent 발화 끝
