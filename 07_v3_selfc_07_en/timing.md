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

# EXAMINER(FDB-v2) 단계: S1 Set up a viewing for me at The Gra | S2 Hmm, that's reasonable. What about | S3 Yes, please. And could you check i | S4 Okay.

     0.00s  user  발화 시작: Set up a viewing for me at The Grandview Lofts on June fifte
     6.38s  <ret> 발화 (turn1 첫 프레임)
     6.62s  agent 발화 시작: <ret> I’m scheduling a viewing for The Grandview Lofts on Ju
     6.85s  user  발화 끝
     7.90s  ⚡SPAN 주입 [d'=1.52s / d_lead=5.61s]: (tool result) Please confirm your desired viewing date for The Grandvi
    12.23s  agent 발화 끝
    12.44s  user  발화 시작: Great. And could you find out…
    14.99s  user  발화 끝
    16.56s  user  발화 시작: …what the pet policy is there?
    18.20s  <ret> 발화 (turn4 첫 프레임)
    18.36s  agent 발화 시작: <ret> Let me check the pet policy for The Grandview Lofts… p
    18.55s  user  발화 끝
    20.20s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.70s]: (tool result) The Grandview Lofts welcomes pets with a maximum weight 
    28.06s  agent 발화 끝
    28.48s  user  발화 시작: Okay.
    28.94s  <ret> 발화 (turn6 첫 프레임)
    29.11s  user  발화 끝
    29.18s  agent 발화 시작: <ret> The Grandview Lofts allows cats and dogs under fifty p
    30.94s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.71s]: [{"petTypesAllowed": ["cats", "dogs"], "weightLimit": "50 lbs", "petFe
    35.89s  agent 발화 끝
    35.97s  user  발화 시작: Hmm, that's reasonable. What about parking?
    38.54s  <ret> 발화 (turn8 첫 프레임)
    38.70s  agent 발화 시작: <ret> I’m looking up the parking information for The Grandvi
    38.88s  user  발화 끝
    40.54s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.20s]: (tool result) The Grandview Lofts offers assigned parking spaces for a
    44.90s  agent 발화 끝
    45.20s  user  발화 시작: Sure.
    45.81s  <ret> 발화 (turn10 첫 프레임)
    45.83s  user  발화 끝
    46.21s  agent 발화 시작: <ret> Parking is garage-style, costs one hundred fifty dolla
    47.81s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.71s]: [{"parkingType": "garage", "monthlyCost": "$150", "availability": "lim
    49.85s  user  발화 시작: Right.
    50.21s  user  발화 끝
    52.92s  agent 발화 끝
    54.19s  user  발화 시작: Limited, huh? Okay. I think I’d like to see a different plac
    60.41s  agent 발화 시작: You’d prefer to view The Oakwood Residences instead? That so
    60.54s  user  발화 끝
    65.83s  agent 발화 끝
    65.93s  user  발화 시작: Yes, please. And could you check if they have a gym?
    68.83s  <ret> 발화 (turn15 첫 프레임)
    69.03s  user  발화 끝
    69.07s  agent 발화 시작: <ret> I’m checking for a gym at The Oakwood Residences… they
    69.87s  ⚡SPAN 주입 [d'=1.04s / d_lead=3.93s]: (tool result) The Oakwood Residences have a 24-hour fitness center wit
    73.00s  agent 발화 끝
    73.05s  user  발화 시작: Thanks.
    73.68s  user  발화 끝
    73.86s  <ret> 발화 (turn17 첫 프레임)
    74.02s  agent 발화 시작: <ret> They do! The Oakwood Residences has a fully equipped f
    75.86s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.58s]: [{"amenity": "gym", "details": "fully equipped fitness center with car
    78.60s  agent 발화 끝
    79.64s  user  발화 시작: That’s good to know. Can we schedule a viewing there for, sa
    83.75s  <ret> 발화 (turn19 첫 프레임)
    84.07s  agent 발화 시작: <ret> I’m scheduling a viewing for The Oakwood Residences on
    84.17s  user  발화 끝
    85.27s  ⚡SPAN 주입 [d'=1.52s / d_lead=11.08s]: (tool result) To schedule a viewing, please contact the sales team at 
    90.65s  user  발화 시작: Uh-huh.
    91.29s  user  발화 끝
    94.90s  user  발화 시작: Perfect. Also, what’s the closest grocery store?
    95.15s  agent 발화 끝
    98.00s  <ret> 발화 (turn22 첫 프레임)
    98.24s  agent 발화 시작: <ret> Let me find the closest grocery store to The Oakwood R
    98.37s  user  발화 끝
   100.00s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.63s]: (tool result) The Oakwood Residences is located near FairPrice Finest 
   103.07s  user  발화 시작: Yeah.
   103.57s  user  발화 끝
   104.87s  agent 발화 끝
   105.10s  user  발화 시작: Okay.
   105.67s  <ret> 발화 (turn25 첫 프레임)
   105.74s  user  발화 끝
   105.74s  agent 발화 시작: <ret> Fresh Foods Market is just half a mile away… direction
   107.43s  ⚡SPAN 주입 [d'=1.76s / d_lead=5.73s]: [{"name": "Fresh Foods Market", "distance": "0.5 miles", "directions":
   110.09s  user  발화 시작: Okay.
   110.59s  user  발화 끝
   111.47s  agent 발화 끝
   112.50s  user  발화 시작: Great. That sounds really convenient.
   115.61s  agent 발화 시작: I'm glad to hear it sounds good; convenience really makes a 
   115.68s  user  발화 끝
   120.38s  agent 발화 끝
   122.43s  user  발화 시작: It does. Thanks for all your help, Tellar.
   124.96s  user  발화 끝
   125.22s  agent 발화 시작: You’re very welcome! Finding the right place is a big step, 
   130.50s  agent 발화 끝
