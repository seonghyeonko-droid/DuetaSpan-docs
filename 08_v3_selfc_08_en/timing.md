# v3_selfc_08_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_08",
#     "name": "Julia",
#     "location": {
#       "city": "Berlin",
#       "country": "Germany",
#       "timezone": "Europe/Berlin (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "German",
#     "gender": "female",
#     "age_range": "40s",
#     "language": "German"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-07-26",
#       "category": "home",
#       "text": "User's home address is 528 Birch Road."
#     },
#     {
#       "date": "2026-05-06",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2026-04-21",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-03-15",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in May."
#     },
#     {
#       "date": "2026-02-01",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-01-13",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Show me buses from Chicago to Denv | S2 Excellent. Is there power at the s | S3 Okay. And roughly how long is the  | S4 Three eighty sounds much better. C

     0.00s  user  발화 시작: Show me buses from Chicago to Denver for three passengers on
     4.09s  <ret> 발화 (turn1 첫 프레임)
     4.49s  agent 발화 시작: <ret> There's a bus departing at ten fifteen AM, costing two
     4.67s  user  발화 끝
     6.09s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.85s]: (tool result) 10:15 AM departure, $285 per person, arrives 6:00 PM.
     8.11s  user  발화 시작: Yeah.
     8.70s  user  발화 끝
    13.34s  agent 발화 끝
    13.41s  user  발화 시작: That sounds good. Can you book that for us?
    15.83s  <ret> 발화 (turn4 첫 프레임)
    15.86s  user  발화 끝
    16.07s  agent 발화 시작: <ret> Absolutely, I can take care of that. Your booking is c
    17.11s  ⚡SPAN 주입 [d'=1.28s / d_lead=3.02s]: (tool result) Booking confirmed. Reference number is 7X9L2P.
    24.24s  user  발화 시작: Perfect. And what’s the baggage allowance on that bus?
    24.27s  agent 발화 끝
    27.53s  <ret> 발화 (turn6 첫 프레임)
    27.69s  agent 발화 시작: <ret> Each passenger is allowed one checked bag and one carr
    27.84s  user  발화 끝
    29.53s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.05s]: (tool result) One checked bag and one carry-on allowed per passenger.
    32.74s  agent 발화 끝
    33.37s  user  발화 시작: Great. Do they have Wi-Fi on board?
    35.51s  <ret> 발화 (turn8 첫 프레임)
    35.87s  user  발화 끝
    35.91s  agent 발화 시작: <ret> That’s a good question to ask. Yes, free Wi-Fi is avai
    36.01s  ⚡SPAN 주입 [d'=0.50s / d_lead=2.84s]: (tool result) Yes, free Wi-Fi is available during the journey.
    40.38s  user  발화 시작: Yeah.
    41.01s  user  발화 끝
    43.00s  agent 발화 끝
    45.46s  user  발화 시작: Excellent. Is there power at the seats?
    48.14s  <ret> 발화 (turn11 첫 프레임)
    48.51s  user  발화 끝
    48.54s  agent 발화 시작: <ret> Yes, each seat has access to a power outlet.
    50.14s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.94s]: (tool result) Power outlets are available at each seat.
    52.47s  agent 발화 끝
    52.72s  user  발화 시작: Wonderful. Uh, actually—
    54.97s  user  발화 시작: What about food options along the way?
    55.03s  user  발화 끝
    57.52s  <ret> 발화 (turn14 첫 프레임)
    57.70s  user  발화 끝
    57.75s  agent 발화 시작: <ret> That’s a very practical consideration. Limited snacks 
    58.72s  ⚡SPAN 주입 [d'=1.20s / d_lead=2.43s]: (tool result) Limited snacks and drinks available for purchase.
    65.54s  agent 발화 끝
    66.11s  user  발화 시작: Okay. And roughly how long is the journey?
    68.44s  <ret> 발화 (turn16 첫 프레임)
    68.68s  agent 발화 시작: <ret> The estimated journey duration is eight hours and fort
    68.79s  user  발화 끝
    70.44s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.85s]: (tool result) Estimated travel time is eight hours and forty-five minu
    73.53s  agent 발화 끝
    75.99s  user  발화 시작: Eight and a half hours… hmm. Could we look at flights instea
    81.17s  <ret> 발화 (turn18 첫 프레임)
    81.33s  agent 발화 시작: <ret> Of course, we can explore flight options. The cheapest
    81.55s  user  발화 끝
    83.17s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.15s]: (tool result) Cheapest flight: $350, departs 8:00 AM, arrives 10:30 AM
    89.15s  user  발화 시작: Mhm.
    89.83s  user  발화 끝
    92.13s  agent 발화 끝
    92.70s  user  발화 시작: That’s a bit pricey. Are there any flights around noon?
    95.64s  <ret> 발화 (turn21 첫 프레임)
    96.04s  agent 발화 시작: <ret> A flight departing at twelve fifteen PM costs four hun
    96.27s  user  발화 끝
    97.64s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.25s]: (tool result) Noon flight: $420, departs 12:15 PM, arrives 2:45 PM.
   104.28s  user  발화 시작: Four twenty… hmm. Actually, make that 1 PM. I— I mean, check
   104.29s  agent 발화 끝
   112.25s  <ret> 발화 (turn23 첫 프레임)
   112.64s  agent 발화 시작: <ret> There’s a flight departing at one oh five PM, costing 
   112.65s  user  발화 끝
   114.25s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.21s]: (tool result) 1:00 PM flight: $380, departs 1:05 PM, arrives 3:35 PM.
   117.74s  user  발화 시작: Right.
   118.52s  user  발화 끝
   120.84s  agent 발화 끝
   122.70s  user  발화 시작: Three eighty sounds much better. Can we book that one?
   125.96s  <ret> 발화 (turn26 첫 프레임)
   126.04s  agent 발화 시작: <ret> Absolutely, let's secure that flight for you. Your fli
   126.21s  user  발화 끝
   126.46s  ⚡SPAN 주입 [d'=0.50s / d_lead=3.23s]: (tool result) Flight booked. Confirmation number is QW3R8T.
   130.05s  user  발화 시작: Yeah.
   130.69s  user  발화 끝
   134.76s  user  발화 시작: Perfect. And could you send me a copy of the itinerary to my
   134.80s  agent 발화 끝
   139.17s  <ret> 발화 (turn29 첫 프레임)
   139.49s  agent 발화 시작: <ret> Of course, I can forward the itinerary. The itinerary 
   139.63s  user  발화 끝
   140.61s  ⚡SPAN 주입 [d'=1.44s / d_lead=2.52s]: (tool result) Itinerary sent to your registered email address.
   142.11s  user  발화 시작: Yeah, totally.
   143.40s  user  발화 끝
   145.97s  agent 발화 끝
   146.86s  user  발화 시작: Thank you so much, Oruus. You’ve been a great help.
   149.44s  user  발화 끝
   149.81s  agent 발화 시작: It’s my pleasure to assist you. Taking care of travel arrang
   158.57s  agent 발화 끝
