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

# EXAMINER(FDB-v2) 단계: S1 Set up a viewing for me at The Gra | S2 Is it open right now? | S3 What’s their rating? | S4 I’m a little nervous about the vie

     0.00s  user  발화 시작: Set up a viewing for me at The Grandview Lofts on June fifte
     3.53s  <ret> 발화 (turn1 첫 프레임)
     3.76s  agent 발화 시작: <ret> Alright, I’ve scheduled a viewing for you at The Grand
     4.17s  user  발화 끝
     5.05s  ⚡SPAN 주입 [d'=1.52s / d_lead=6.11s]: (tool result) Viewing scheduled for June fifteenth at 2:00 PM.
     9.87s  agent 발화 끝
    10.18s  user  발화 시작: Actually, make that June sixteenth.
    12.52s  <ret> 발화 (turn3 첫 프레임)
    12.58s  user  발화 끝
    12.68s  agent 발화 시작: <ret> No problem at all. I’ve rescheduled your viewing for T
    14.52s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.25s]: (tool result) Viewing rescheduled for June sixteenth at 2:00 PM.
    20.88s  user  발화 시작: Great. And can you find me the nearest coffee shop to that a
    20.92s  agent 발화 끝
    24.40s  <ret> 발화 (turn5 첫 프레임)
    24.64s  agent 발화 시작: <ret> The closest coffee shop is The Daily Grind, just point
    24.87s  user  발화 끝
    26.40s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.84s]: (tool result) “The Daily Grind” is 0.3 miles away.
    30.45s  user  발화 시작: Is it open right now?
    30.48s  agent 발화 끝
    31.79s  <ret> 발화 (turn7 첫 프레임)
    31.95s  agent 발화 시작: <ret> Yes, The Daily Grind is currently open and will be unt
    32.06s  user  발화 끝
    33.80s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.60s]: (tool result) Open until 6:00 PM.
    37.54s  agent 발화 끝
    37.58s  user  발화 시작: Perfect. I might want to grab a bite…
    40.17s  user  발화 끝
    42.21s  user  발화 시작: …to eat after. Are there any Italian restaurants nearby?
    46.14s  <ret> 발화 (turn10 첫 프레임)
    46.38s  user  발화 끝
    46.53s  agent 발화 시작: <ret> Luigi’s, an Italian restaurant, is about point seven m
    48.14s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.79s]: (tool result) “Luigi’s” is 0.7 miles away.
    49.67s  user  발화 시작: Right.
    50.35s  user  발화 끝
    52.32s  agent 발화 끝
    53.57s  user  발화 시작: What’s their rating?
    54.43s  <ret> 발화 (turn13 첫 프레임)
    54.83s  agent 발화 시작: <ret> Luigi’s has a rating of four and a half stars. [happy]
    54.85s  user  발화 끝
    56.43s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.65s]: (tool result) 4.5 stars.
    60.39s  user  발화 시작: Sounds good. Okay, can you set a reminder for me to leave fo
    60.48s  agent 발화 끝
    66.52s  <ret> 발화 (turn15 첫 프레임)
    66.68s  agent 발화 시작: <ret> I’ve set a reminder for you to leave for the viewing a
    66.83s  user  발화 끝
    68.12s  ⚡SPAN 주입 [d'=1.60s / d_lead=6.71s]: (tool result) Reminder set for June sixteenth, 1:30 PM.
    73.39s  user  발화 시작: Thanks so much, that’s really helpful.
    73.39s  agent 발화 끝
    75.52s  user  발화 끝
    75.92s  agent 발화 시작: You’re very welcome. It’s my pleasure to help you get organi
    81.01s  agent 발화 끝
    82.01s  user  발화 시작: I’m a little nervous about the viewing, to be honest.
    84.74s  user  발화 끝
    85.10s  agent 발화 시작: It’s perfectly normal to feel nervous about something new. W
    88.87s  user  발화 시작: Uh-huh.
    89.59s  user  발화 끝
    91.55s  agent 발화 끝
    91.55s  user  발화 시작: That would be great, actually.
    93.21s  user  발화 끝
    93.33s  agent 발화 시작: Wonderful. Sometimes just voicing your concerns can make a b
   101.85s  agent 발화 끝
