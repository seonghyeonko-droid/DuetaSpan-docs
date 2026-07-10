# v3_selfc_08_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_08",
#     "name": "Julia",
#     "location": {
#       "city": "Paris",
#       "country": "France",
#       "timezone": "Europe/Paris (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "French",
#     "gender": "female",
#     "age_range": "40s",
#     "language": "French"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-05",
#       "category": "home",
#       "text": "User's home address is 528 Birch Road."
#     },
#     {
#       "date": "2026-02-10",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2025-12-04",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-11-07",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in May."
#     },
#     {
#       "date": "2025-06-09",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-05",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Show me buses from Chicago to Denv | S2 Hmm, that sounds nice. I think I n | S3 …good restaurants near Union Stati | S4 Museums, definitely.

     0.00s  user  발화 시작: Show me buses from Chicago to Denver for three passengers on
     4.49s  <ret> 발화 (turn1 첫 프레임)
     4.88s  agent 발화 시작: <ret> Buses from Chicago to Denver on May tenth start at one
     4.89s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.96s]: (tool result) Buses from Chicago to Denver on May 10th are available w
     5.09s  user  발화 끝
     9.13s  user  발화 시작: …are there any direct buses, or do I have to change?
     9.84s  agent 발화 끝
    12.78s  agent 발화 시작: Direct buses are available, yes. Greyhound offers a direct r
    13.01s  user  발화 끝
    17.95s  user  발화 시작: Oh.
    18.68s  user  발화 끝
    20.89s  agent 발화 끝
    21.36s  user  발화 시작: That sounds good. Book me three tickets on that direct bus.
    25.44s  <ret> 발화 (turn6 첫 프레임)
    25.67s  agent 발화 시작: <ret> Your tickets are booked. Confirmation number BX89Z2, t
    25.68s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.65s]: (tool result) Booking confirmed. Three tickets on Greyhound bus GH-123
    25.72s  user  발화 끝
    31.10s  user  발화 시작: Perfect. What’s the weather like in Denver on that day?
    31.32s  agent 발화 끝
    35.00s  <ret> 발화 (turn8 첫 프레임)
    35.24s  agent 발화 시작: <ret> Denver will be sunny, with a high of twenty-four point
    35.32s  ⚡SPAN 주입 [d'=1.04s / d_lead=4.58s]: (tool result) The weather in Denver on May 10th is forecast to be sunn
    35.35s  user  발화 끝
    38.09s  user  발화 시작: Yeah.
    38.63s  user  발화 끝
    39.82s  agent 발화 끝
    40.17s  user  발화 시작: Hmm, that sounds nice. I think I need a hotel there too.
    44.21s  agent 발화 시작: A hotel is a good idea, especially if you’re arriving in the
    44.38s  user  발화 끝
    47.91s  agent 발화 끝
    50.22s  user  발화 시작: Find me some hotels near Union Station in Denver.
    54.05s  <ret> 발화 (turn13 첫 프레임)
    54.12s  agent 발화 시작: <ret> The Crawford Hotel is three hundred twenty-nine dollar
    54.13s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.47s]: (tool result) There are several hotels near Denver Union Station, incl
    54.20s  user  발화 끝
    59.58s  agent 발화 끝
    59.62s  user  발화 시작: Book me a room at the Hyatt Place for one night.
    62.34s  <ret> 발화 (turn15 첫 프레임)
    62.73s  agent 발화 시작: <ret> Your reservation at the Hyatt Place is confirmed. HP75
    62.74s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.86s]: (tool result) Reservation confirmed at Hyatt Place Denver Downtown for
    62.90s  user  발화 끝
    69.59s  agent 발화 끝
    69.63s  user  발화 시작: Great. Are there any…
    71.28s  user  발화 끝
    73.17s  user  발화 시작: …good restaurants near Union Station?
    75.49s  <ret> 발화 (turn18 첫 프레임)
    75.72s  agent 발화 시작: <ret> Stoic & Genuine has seafood, and Mercantile Dining & P
    75.73s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.14s]: (tool result) Several restaurants are near Denver Union Station, inclu
    75.95s  user  발화 끝
    79.39s  user  발화 시작: Mhm.
    79.94s  user  발화 끝
    80.85s  agent 발화 끝
    82.09s  user  발화 시작: What time does Stoic & Genuine close?
    84.95s  <ret> 발화 (turn21 첫 프레임)
    85.18s  agent 발화 시작: <ret> Stoic & Genuine is open until ten PM on May tenth. Res
    85.19s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.99s]: (tool result) Stoic & Genuine is open until 10:00 PM on May 10th. Rese
    85.32s  user  발화 끝
    89.89s  user  발화 시작: Make a reservation for me there at eight o'clock.
    90.17s  agent 발화 끝
    92.79s  <ret> 발화 (turn23 첫 프레임)
    92.94s  agent 발화 시작: <ret> Your reservation at Stoic & Genuine is confirmed. SG42
    92.95s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.87s]: (tool result) Reservation confirmed at Stoic & Genuine for May 10th at
    93.13s  user  발화 끝
    95.22s  user  발화 시작: Uh-huh.
    95.72s  user  발화 끝
    97.71s  user  발화 시작: Excellent. Uh, what about… what about things to do in Denver
    97.81s  agent 발화 끝
   102.25s  user  발화 끝
   102.31s  agent 발화 시작: Denver has a lot to offer. Are you interested in museums, pa
   104.23s  user  발화 시작: Yeah.
   104.82s  user  발화 끝
   106.62s  agent 발화 끝
   106.78s  user  발화 시작: Museums, definitely.
   108.43s  <ret> 발화 (turn29 첫 프레임)
   108.82s  agent 발화 시작: <ret> The Denver Art Museum, the Museum of Nature & Science,
   108.83s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.23s]: (tool result) The Denver Art Museum, the Denver Museum of Nature & Sci
   109.04s  user  발화 끝
   114.05s  agent 발화 끝
   114.83s  user  발화 시작: How much does it cost to get into the Denver Art Museum?
   118.26s  <ret> 발화 (turn31 첫 프레임)
   118.32s  agent 발화 시작: <ret> Admission to the Denver Art Museum is eighteen dollars
   118.34s  ⚡SPAN 주입 [d'=0.80s / d_lead=5.65s]: (tool result) Denver Art Museum admission is $18 for adults, $15 for s
   118.53s  user  발화 끝
   120.93s  user  발화 시작: Mm-hmm.
   121.61s  user  발화 끝
   123.77s  user  발화 시작: That’s reasonable. I think I’m all set then.
   123.98s  agent 발화 끝
   126.89s  agent 발화 시작: It sounds like you have a well-planned trip. Remember to all
   127.00s  user  발화 끝
   128.82s  user  발화 시작: Uh-huh.
   129.32s  user  발화 끝
   131.08s  user  발화 시작: Yes, that's true. Thank you.
   131.57s  agent 발화 끝
   133.49s  agent 발화 시작: You’re very welcome. Travel well and enjoy your time in Denv
   133.57s  user  발화 끝
   137.05s  agent 발화 끝
