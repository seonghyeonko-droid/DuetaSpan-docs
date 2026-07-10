# v3_fstart_15_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fstart_15",
#     "name": "Manon",
#     "location": {
#       "city": "London",
#       "country": "United Kingdom",
#       "timezone": "Europe/London (GMT, UTC+0)",
#       "currency": "GBP (£)"
#     },
#     "nationality": "British",
#     "gender": "female",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-20",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2026-04-29",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in December."
#     },
#     {
#       "date": "2026-04-24",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2026-03-20",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2026-03-14",
#       "category": "diet",
#       "text": "User is vegan."
#     },
#     {
#       "date": "2025-07-29",
#       "category": "home",
#       "text": "User's home address is 144 Pine Court."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-11-07",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-11-03",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I need two business class tickets  | S2 Yes, please. | S3 Okay, good to know. What's the wea | S4 …Italian restaurants near the Colo

     0.00s  user  발화 시작: I need two business class tickets from London Heathrow to Ch
     6.79s  <ret> 발화 (turn1 첫 프레임)
     6.87s  agent 발화 시작: <ret> Business class flights from London Heathrow to Charles
     6.87s  ⚡SPAN 주입 [d'=1.68s / d_lead=9.32s]: (tool result) Flights departing London Heathrow for Charles de Gaulle 
     6.90s  user  발화 끝
    16.04s  user  발화 시작: That's quite a range. What's the cheapest option?
    16.18s  agent 발화 끝
    19.20s  <ret> 발화 (turn3 첫 프레임)
    19.41s  user  발화 끝
    19.44s  agent 발화 시작: <ret> The least expensive option is with British Airways, at
    19.44s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.44s]: The cheapest flight departing London Heathrow for Charles de Gaulle ai
    25.88s  agent 발화 끝
    26.48s  user  발화 시작: Can you tell me the flight details for that British Airways 
    30.07s  <ret> 발화 (turn5 첫 프레임)
    30.15s  agent 발화 시작: <ret> British Airways flight BA302 departs at ten AM, arrivi
    30.15s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.13s]: (tool result) British Airways flight BA302 departs London Heathrow at 
    30.36s  user  발화 끝
    37.28s  agent 발화 끝
    39.17s  user  발화 시작: That sounds good. Can you book those tickets for me?
    42.49s  user  발화 끝
    42.49s  agent 발화 시작: Are you sure you want to proceed with booking those tickets 
    45.73s  agent 발화 끝
    46.77s  user  발화 시작: Yes, please.
    48.08s  <ret> 발화 (turn9 첫 프레임)
    48.16s  agent 발화 시작: <ret> Excellent. Your booking is confirmed with confirmation
    48.16s  ⚡SPAN 주입 [d'=1.20s / d_lead=7.70s]: (tool result) Booking confirmed for British Airways flight BA302, Lond
    48.19s  user  발화 끝
    55.86s  agent 발화 끝
    57.29s  user  발화 시작: Perfect. Do you know if there are any good restaurants near 
    62.20s  <ret> 발화 (turn11 첫 프레임)
    62.43s  agent 발화 시작: <ret> There are several options nearby, like Le Bistro des S
    62.44s  ⚡SPAN 주입 [d'=0.96s / d_lead=6.86s]: (tool result) Several restaurants are near Charles de Gaulle airport, 
    62.48s  user  발화 끝
    66.24s  user  발화 시작: Right.
    66.69s  user  발화 끝
    69.13s  user  발화 시작: Le Bistro des Saveurs sounds nice. –
    69.29s  agent 발화 끝
    71.97s  user  발화 시작: …Is there a shuttle from the airport to that restaurant?
    72.09s  user  발화 끝
    75.33s  <ret> 발화 (turn15 첫 프레임)
    75.41s  agent 발화 시작: <ret> Yes, you can take the CDGVAL train and bus 351 – it ta
    75.41s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.30s]: (tool result) A shuttle from Charles de Gaulle airport to Le Bistro de
    75.67s  user  발화 끝
    81.70s  agent 발화 끝
    81.74s  user  발화 시작: Okay, good to know. What's the weather forecast for Paris on
    86.79s  <ret> 발화 (turn17 첫 프레임)
    86.95s  agent 발화 시작: <ret> The forecast for April first is fifteen degrees Celsiu
    86.95s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.02s]: (tool result) The weather in Paris on April 1st, 2026, is forecast to 
    87.11s  user  발화 끝
    92.85s  user  발화 시작: That's pretty mild. I'm also planning a trip to Rome in May.
    92.97s  agent 발화 끝
    97.29s  user  발화 끝
    97.54s  agent 발화 시작: That sounds lovely! Rome in May is a beautiful time to visit
   101.96s  user  발화 시작: Do you remember when I mentioned I like Italian food?
   102.08s  agent 발화 끝
   104.58s  <ret> 발화 (turn21 첫 프레임)
   104.81s  agent 발화 시작: <ret> Yes, you told me on February fifteenth that you enjoy 
   104.81s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.86s]: [2026-02-15] I like Italian food.
   104.87s  user  발화 끝
   108.25s  user  발화 시작: Okay.
   108.89s  user  발화 끝
   109.17s  user  발화 시작: Great. Are there any highly-rated…
   109.68s  agent 발화 끝
   112.04s  user  발화 끝
   113.04s  user  발화 시작: …Italian restaurants near the Colosseum?
   115.22s  <ret> 발화 (turn25 첫 프레임)
   115.61s  agent 발화 시작: <ret> Aroma at Palazzo Manfredi and La Taverna dei Fori Impe
   115.62s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.00s]: (tool result) Highly-rated Italian restaurants near the Colosseum incl
   115.62s  user  발화 끝
   120.94s  user  발화 시작: Right.
   121.39s  user  발화 끝
   122.58s  user  발화 시작: Aroma sounds fancy. What’s their price range?
   122.61s  agent 발화 끝
   126.44s  <ret> 발화 (turn28 첫 프레임)
   126.68s  agent 발화 시작: <ret> It’s a luxury restaurant, costing between one hundred 
   126.68s  ⚡SPAN 주입 [d'=1.92s / d_lead=4.81s]: (tool result) Aroma at Palazzo Manfredi is a luxury restaurant with a 
   126.84s  user  발화 끝
   131.50s  agent 발화 끝
   132.19s  user  발화 시작: That’s a bit expensive. Maybe La Taverna dei Fori Imperiali 
   137.51s  user  발화 끝
   137.60s  agent 발화 시작: It’s wonderful to be mindful of your budget. Sometimes simpl
   141.43s  user  발화 시작: Yeah.
   141.93s  user  발화 끝
   143.06s  agent 발화 끝
   143.15s  user  발화 시작: True. Thank you for your help with everything.
   145.61s  agent 발화 시작: You’re very welcome. I'm glad I could assist you with your t
   145.69s  user  발화 끝
   151.26s  agent 발화 끝
