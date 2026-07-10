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

# EXAMINER(FDB-v2) 단계: S1 Set up a viewing for me at The Gra | S2 Is there… a cheaper option? | S3 Uhhh… one hour before. | S4 Thanks, Tellar.

     0.00s  user  발화 시작: Set up a viewing for me at The Grandview Lofts on June fifte
     3.34s  <ret> 발화 (turn1 첫 프레임)
     3.58s  agent 발화 시작: <ret> I’ve scheduled a viewing for you at The Grandview Loft
     3.71s  user  발화 끝
     5.34s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.74s]: (tool result) Viewing scheduled for The Grandview Lofts, June 15th, 2:
    11.32s  agent 발화 끝
    11.55s  user  발화 시작: Actually… June sixteenth would be better.
    13.69s  <ret> 발화 (turn3 첫 프레임)
    13.85s  agent 발화 시작: <ret> No problem at all. I’ve rescheduled your viewing for T
    13.96s  user  발화 끝
    15.69s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.04s]: (tool result) Viewing rescheduled for The Grandview Lofts, June 16th, 
    24.88s  user  발화 시작: Great. And can you check…
    24.89s  agent 발화 끝
    26.80s  user  발화 끝
    28.30s  user  발화 시작: …if there’s parking available nearby?
    30.14s  <ret> 발화 (turn6 첫 프레임)
    30.38s  agent 발화 시작: <ret> Yes, there’s parking at the Grandview Garage, two bloc
    30.47s  user  발화 끝
    32.14s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.76s]: (tool result) Parking available at Grandview Garage, 2 blocks away, $5
    39.03s  user  발화 시작: Is there… a cheaper option?
    39.14s  agent 발화 끝
    40.84s  <ret> 발화 (turn8 첫 프레임)
    41.00s  agent 발화 시작: <ret> There's street parking available, a five-minute walk a
    41.15s  user  발화 끝
    42.84s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.95s]: (tool result) Street parking available, limited spaces, $2/hour, 5-min
    49.95s  agent 발화 끝
    49.96s  user  발화 시작: Okay, street parking it is.
    52.13s  user  발화 끝
    52.56s  agent 발화 시작: Wonderful. I’ve noted your preference for street parking. It
    55.17s  user  발화 시작: Right.
    55.80s  user  발화 끝
    57.42s  agent 발화 끝
    58.77s  user  발화 시작: Could you add a reminder to my calendar?
    61.31s  agent 발화 시작: What time would you like the reminder set for?
    61.36s  user  발화 끝
    63.89s  agent 발화 끝
    64.07s  user  발화 시작: Uhhh… one hour before.
    65.61s  <ret> 발화 (turn15 첫 프레임)
    65.82s  user  발화 끝
    66.01s  agent 발화 시작: <ret> I’ve set a reminder for June sixteenth at one PM for y
    67.61s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.84s]: (tool result) Reminder set for June 16th, 1:00 PM: The Grandview Lofts
    73.84s  agent 발화 끝
    73.94s  user  발화 시작: Perfect. And can you find the address for me?
    76.42s  <ret> 발화 (turn17 첫 프레임)
    76.43s  user  발화 끝
    76.66s  agent 발화 시작: <ret> The address for The Grandview Lofts is one twenty-thre
    78.42s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.07s]: (tool result) The Grandview Lofts: 123 Elm Street, Anytown, USA.
    84.72s  agent 발화 끝
    85.79s  user  발화 시작: One twenty-three… Elm Street. Right.
    88.76s  agent 발화 시작: Yes, that’s correct. One twenty-three Elm Street. It's alway
    88.89s  user  발화 끝
    91.92s  user  발화 시작: Uh-huh.
    92.37s  user  발화 끝
    93.99s  user  발화 시작: Can you send that address to my phone?
    94.22s  agent 발화 끝
    96.03s  <ret> 발화 (turn22 첫 프레임)
    96.19s  agent 발화 시작: <ret> I’ve just sent the address to your phone. Having it re
    96.25s  user  발화 끝
    98.03s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.14s]: (tool result) Message sent to user's phone number.
    99.87s  user  발화 시작: Yeah.
   100.37s  user  발화 끝
   101.33s  agent 발화 끝
   101.53s  user  발화 시작: Thanks, Tellar.
   102.56s  agent 발화 시작: You’re very welcome. I’m glad I could help streamline things
   102.62s  user  발화 끝
   105.58s  user  발화 시작: Okay.
   106.11s  user  발화 끝
   106.59s  agent 발화 끝
   107.69s  user  발화 시작: Is there a coffee shop nearby?
   109.40s  <ret> 발화 (turn28 첫 프레임)
   109.56s  agent 발화 시작: <ret> Brew & Bean Coffee is just three tenths of a mile from
   109.66s  user  발화 끝
   110.12s  ⚡SPAN 주입 [d'=0.72s / d_lead=9.41s]: (tool result) Brew & Bean Coffee: 0.3 miles, 4.5 stars.
   118.97s  agent 발화 끝
   121.03s  user  발화 시작: Great. I think that’s all for now.
   122.92s  user  발화 끝
   123.17s  agent 발화 시작: Wonderful. Enjoy your viewing, and I hope you find your perf
   127.06s  agent 발화 끝
