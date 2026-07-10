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

# EXAMINER(FDB-v2) 단계: S1 Set up a viewing for me at The Gra | S2 A paid garage… hmm, is there anyth | S3 Actually, before I forget, can you | S4 Fantastic. I think that’s everythi

     0.00s  user  발화 시작: Set up a viewing for me at The Grandview Lofts on June fifte
     4.04s  <ret> 발화 (turn1 첫 프레임)
     4.16s  user  발화 끝
     4.28s  agent 발화 시작: <ret> I’ve scheduled a viewing for you at The Grandview Loft
     5.56s  ⚡SPAN 주입 [d'=1.52s / d_lead=4.72s]: (tool result) Viewing scheduled for The Grandview Lofts, June 15th, 2:
     9.00s  agent 발화 끝
     9.08s  user  발화 시작: Actually… June sixteenth would work better.
    11.65s  <ret> 발화 (turn3 첫 프레임)
    11.81s  agent 발화 시작: <ret> Let me just confirm that for you— the viewing at The G
    11.86s  user  발화 끝
    13.65s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.18s]: (tool result) Viewing rescheduled for The Grandview Lofts, June 16th, 
    18.99s  agent 발화 끝
    19.06s  user  발화 시작: Great. Can you find me directions to get there from my curre
    22.74s  <ret> 발화 (turn5 첫 프레임)
    22.95s  user  발화 끝
    22.97s  agent 발화 시작: <ret> Directions to The Grandview Lofts, at 123 Elm Street, 
    24.74s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.85s]: (tool result) Directions to The Grandview Lofts: 123 Elm Street, 15 mi
    29.57s  user  발화 시작: Okay, and what’s the parking situation like there?
    29.82s  agent 발화 끝
    32.16s  <ret> 발화 (turn7 첫 프레임)
    32.32s  agent 발화 시작: <ret> The Grandview Lofts has limited street parking, but th
    32.44s  user  발화 끝
    34.16s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.23s]: (tool result) The Grandview Lofts: limited street parking, paid garage
    37.55s  agent 발화 끝
    37.94s  user  발화 시작: A paid garage… hmm, is there anything closer, maybe with fre
    42.39s  <ret> 발화 (turn9 첫 프레임)
    42.79s  agent 발화 시작: <ret> There’s free parking available at the City Hall lot, j
    42.94s  user  발화 끝
    44.39s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.05s]: (tool result) Free parking available at City Hall lot, 5-minute walk.
    45.43s  user  발화 시작: Right.
    46.20s  user  발화 끝
    47.64s  user  발화 시작: Perfect! Could you set a reminder for me to leave fifteen mi
    47.84s  agent 발화 끝
    51.76s  <ret> 발화 (turn12 첫 프레임)
    52.12s  user  발화 끝
    52.15s  agent 발화 시작: <ret> I’ve set a reminder for June sixteenth at 10:15 AM for
    53.76s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.23s]: (tool result) Reminder set: June 16th, 10:15 AM, "Grandview Lofts View
    57.19s  user  발화 시작: Thanks so much, Tellar. You’re a lifesaver.
    57.38s  agent 발화 끝
    59.53s  agent 발화 시작: You’re very welcome. It's my pleasure to support you as you 
    59.63s  user  발화 끝
    64.58s  agent 발화 끝
    65.01s  user  발화 시작: Actually, before I forget, can you check the weather forecas
    69.49s  user  발화 끝
    69.52s  <ret> 발화 (turn16 첫 프레임)
    69.60s  agent 발화 시작: <ret> The forecast for June sixteenth at 123 Elm Street is s
    71.52s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.93s]: (tool result) June 16th, 123 Elm Street: Sunny, high of 75 degrees Fah
    75.53s  agent 발화 끝
    75.56s  user  발화 시작: That sounds lovely. Is there a good coffee shop nearby I cou
    81.05s  <ret> 발화 (turn18 첫 프레임)
    81.21s  agent 발화 시작: <ret> There's a highly-rated coffee shop, “The Daily Grind”,
    81.21s  user  발화 끝
    83.05s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.32s]: (tool result) "The Daily Grind" coffee shop, 2-minute walk from The Gr
    84.24s  user  발화 시작: Uh-huh.
    84.74s  user  발화 끝
    86.53s  agent 발화 끝
    86.79s  user  발화 시작: Oh, great. What are their hours on Saturday?
    89.80s  <ret> 발화 (turn21 첫 프레임)
    89.98s  user  발화 끝
    90.12s  agent 발화 시작: <ret> The Daily Grind is open on Saturday from 7:00 AM to 5:
    90.30s  ⚡SPAN 주입 [d'=0.50s / d_lead=4.35s]: (tool result) The Daily Grind: Saturday, 7:00 AM to 5:00 PM.
    91.77s  user  발화 시작: Exactly.
    92.87s  user  발화 끝
    94.47s  agent 발화 끝
    96.68s  user  발화 시작: Fantastic. I think that’s everything.
    99.39s  agent 발화 시작: Wonderful. It sounds like you’re well-prepared for your view
    99.54s  user  발화 끝
   102.62s  agent 발화 끝
   103.00s  user  발화 시작: Yes, I am. Thank you again.
   105.49s  user  발화 끝
   105.71s  agent 발화 시작: You’re very welcome. I wish you all the best with finding a 
   109.19s  user  발화 시작: I appreciate that.
   109.36s  agent 발화 끝
   110.47s  user  발화 끝
   110.65s  agent 발화 시작: Enjoy your trip.
   111.65s  agent 발화 끝
