# v3_selfc_07_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_07",
#     "name": "Alex",
#     "location": {
#       "city": "Paris",
#       "country": "France",
#       "timezone": "Europe/Paris (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "French",
#     "gender": "non-binary",
#     "age_range": "50s",
#     "language": "French"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-03-29",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     },
#     {
#       "date": "2026-02-07",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2026-01-01",
#       "category": "home",
#       "text": "User's home address is 536 Birch Road."
#     },
#     {
#       "date": "2025-06-08",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-14",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-09-13",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Schedule a showing for Sunset Ridg | S2 Uh, actually, make that eight PM. | S3 What time is sunset on February tw | S4 Play some relaxing music.

     0.00s  user  발화 시작: Schedule a showing for Sunset Ridge Townhomes on February tw
     4.27s  <ret> 발화 (turn1 첫 프레임)
     4.51s  agent 발화 시작: <ret> I’ve scheduled a showing for you at Sunset Ridge Townh
     4.51s  ⚡SPAN 주입 [d'=2.00s / d_lead=16.24s]: (tool result) Showing scheduled for Sunset Ridge Townhomes on February
     4.53s  user  발화 끝
    14.73s  user  발화 시작: Yeah.
    15.18s  user  발화 끝
    20.75s  agent 발화 끝
    20.80s  user  발화 시작: What's the weather going to be like then?
    22.66s  <ret> 발화 (turn4 첫 프레임)
    22.82s  agent 발화 시작: <ret> On February twenty-ninth, two thousand twenty-six, it 
    22.82s  ⚡SPAN 주입 [d'=2.00s / d_lead=12.52s]: (tool result) The forecast for February 29, 2026 is partly cloudy with
    22.87s  user  발화 끝
    35.34s  agent 발화 끝
    35.35s  user  발화 시작: Can you find me some restaurants nearby?
    37.45s  <ret> 발화 (turn6 첫 프레임)
    37.61s  user  발화 끝
    37.68s  agent 발화 시작: <ret> There are twelve restaurants near Sunset Ridge Townhom
    37.69s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.88s]: (tool result) There are 12 restaurants near Sunset Ridge Townhomes. Th
    45.10s  user  발화 시작: Yeah.
    45.55s  user  발화 끝
    49.56s  agent 발화 끝
    49.71s  user  발화 시작: What kind of food does Bella Italia serve?
    52.12s  <ret> 발화 (turn9 첫 프레임)
    52.28s  agent 발화 시작: <ret> Bella Italia serves Italian cuisine, specializing in p
    52.28s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.92s]: (tool result) Bella Italia serves Italian cuisine, specializing in pas
    52.44s  user  발화 끝
    64.20s  agent 발화 끝
    64.36s  user  발화 시작: Book a table there for two on February twenty-ninth at seven
    68.27s  <ret> 발화 (turn11 첫 프레임)
    68.50s  user  발화 끝
    68.67s  agent 발화 시작: <ret> I’ve made a reservation at Bella Italia for two people
    68.67s  ⚡SPAN 주입 [d'=2.00s / d_lead=12.99s]: (tool result) Reservation confirmed at Bella Italia for two people on 
    81.62s  user  발화 시작: Uh, actually, make that eight PM.
    81.66s  agent 발화 끝
    84.02s  <ret> 발화 (turn13 첫 프레임)
    84.07s  user  발화 끝
    84.26s  agent 발화 시작: <ret> The reservation at Bella Italia has been updated to ei
    84.26s  ⚡SPAN 주입 [d'=1.76s / d_lead=12.94s]: (tool result) Reservation updated at Bella Italia for two people on Fe
    97.02s  user  발화 시작: [laugh] That was close! What’s the fastest…
    97.21s  agent 발화 끝
   101.09s  user  발화 끝
   102.41s  user  발화 시작: …way to get there from Sunset Ridge Townhomes?
   104.98s  <ret> 발화 (turn16 첫 프레임)
   105.13s  agent 발화 시작: <ret> The fastest route to Bella Italia from Sunset Ridge To
   105.14s  ⚡SPAN 주입 [d'=2.00s / d_lead=12.11s]: (tool result) The fastest route to Bella Italia from Sunset Ridge Town
   105.23s  user  발화 끝
   109.98s  user  발화 시작: Uh-huh.
   110.44s  user  발화 끝
   117.18s  user  발화 시작: Okay, good. Is there anything else I should know about that 
   117.24s  agent 발화 끝
   119.69s  <ret> 발화 (turn19 첫 프레임)
   120.00s  agent 발화 시작: <ret> Sunset Ridge Townhomes is close to Pine Ridge Park, kn
   120.01s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.09s]: (tool result) Sunset Ridge Townhomes is near Pine Ridge Park, known fo
   120.13s  user  발화 끝
   129.07s  user  발화 시작: What time is sunset on February twenty-ninth?
   129.09s  agent 발화 끝
   131.95s  <ret> 발화 (turn21 첫 프레임)
   132.02s  agent 발화 시작: <ret> Sunset on February twenty-ninth, two thousand twenty-s
   132.03s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.66s]: (tool result) Sunset on February 29, 2026 will be at 6:15 PM local tim
   132.17s  user  발화 끝
   135.25s  user  발화 시작: Right.
   135.61s  user  발화 끝
   142.68s  agent 발화 끝
   143.61s  user  발화 시작: Can you remind me about my doctor's appointment?
   145.77s  <ret> 발화 (turn24 첫 프레임)
   146.00s  agent 발화 시작: <ret> You have a note: I have a doctor's appointment next Tu
   146.01s  ⚡SPAN 주입 [d'=1.12s / d_lead=4.03s]: [2024-07-10] I have a doctor's appointment next Tuesday.
   146.19s  user  발화 끝
   149.88s  user  발화 시작: What's the weather forecast for next Tuesday?
   150.03s  agent 발화 끝
   152.53s  <ret> 발화 (turn26 첫 프레임)
   152.69s  agent 발화 시작: <ret> Next Tuesday, July fifteenth, two thousand twenty-six,
   152.69s  ⚡SPAN 주입 [d'=0.50s / d_lead=12.10s]: (tool result) The weather next Tuesday, July 15, 2026, will be sunny w
   152.79s  user  발화 끝
   157.63s  user  발화 시작: Yeah.
   158.26s  user  발화 끝
   164.56s  user  발화 시작: That sounds lovely. — Do they have outdoor seating at Bella 
   164.79s  agent 발화 끝
   168.47s  <ret> 발화 (turn29 첫 프레임)
   168.71s  agent 발화 시작: <ret> Yes, Bella Italia has a patio with outdoor seating, ac
   168.71s  ⚡SPAN 주입 [d'=2.00s / d_lead=12.34s]: (tool result) Bella Italia does have a patio with outdoor seating, as 
   168.82s  user  발화 끝
   181.05s  agent 발화 끝
   181.43s  user  발화 시작: [curious] What's the air quality like there?
   183.45s  user  발화 끝
   183.53s  <ret> 발화 (turn31 첫 프레임)
   183.77s  agent 발화 시작: <ret> The air quality index near Bella Italia is currently f
   183.77s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.66s]: (tool result) The air quality index near Bella Italia is currently 48,
   192.40s  user  발화 시작: Play some relaxing music.
   192.43s  agent 발화 끝
   194.15s  user  발화 끝
   194.36s  <ret> 발화 (turn33 첫 프레임)
   194.60s  agent 발화 시작: <ret> I’m sorry, I couldn't find a specific playlist for "re
   194.60s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.42s]: (no information found)
   197.02s  user  발화 시작: Uh-huh.
   197.52s  user  발화 끝
   202.02s  agent 발화 끝
   202.34s  user  발화 시작: Play Enya.
   203.28s  <ret> 발화 (turn36 첫 프레임)
   203.36s  agent 발화 시작: <ret> Now playing Enya. Music can be a wonderful way to cent
   203.36s  ⚡SPAN 주입 [d'=0.96s / d_lead=6.49s]: (tool result) Now playing Enya.
   203.48s  user  발화 끝
   209.85s  agent 발화 끝
   210.00s  user  발화 시작: Can you set an alarm for six thirty AM tomorrow?
   213.03s  <ret> 발화 (turn38 첫 프레임)
   213.19s  agent 발화 시작: <ret> I've set an alarm for six thirty AM tomorrow, July ele
   213.19s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.07s]: (tool result) Alarm set for 6:30 AM tomorrow, July 11, 2026.
   213.23s  user  발화 끝
   223.26s  agent 발화 끝
   223.59s  user  발화 시작: What's on my schedule for tomorrow?
   225.60s  agent 발화 시작: I don’t have any information
   225.65s  user  발화 끝
   227.26s  agent 발화 끝
