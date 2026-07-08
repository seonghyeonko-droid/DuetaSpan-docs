# v3_selfc_08_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Can you create an order for a desk chair at two hundred doll
     2.90s  <ret> 발화 (turn1 첫 프레임)
     3.22s  ⚡SPAN 주입 [d'=0.32s / d_lead=0.42s]: (tool result) Order created. Desk chair, two hundred dollars, order nu
     3.49s  agent 발화 시작: <ret> Certainly. Your order for a desk chair has been create
     3.65s  user  발화 끝
     9.75s  agent 발화 끝
    10.99s  user  발화 시작: Great. Uh, can you also find me hotels in Miami?
    14.70s  agent 발화 시작: Of course. What dates are you considering for your stay?
    14.78s  user  발화 끝
    18.85s  user  발화 시작: From December twentieth to December twenty-second.
    19.01s  agent 발화 끝
    21.97s  <ret> 발화 (turn5 첫 프레임)
    22.50s  user  발화 끝
    22.57s  agent 발화 시작: <ret> Let me check availability. I found four hotels in Miam
    22.97s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.40s]: (tool result) Four hotels found. The cheapest is $150 per night at the
    31.27s  user  발화 시작: One hundred fifty sounds good. Can you book a room there?
    31.33s  agent 발화 끝
    33.51s  <ret> 발화 (turn7 첫 프레임)
    34.10s  agent 발화 시작: <ret> I can certainly do that. Your room at the Ocean View H
    34.33s  user  발화 끝
    34.51s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.27s]: (tool result) Booking confirmed. Ocean View Hotel, December twentieth 
    45.88s  agent 발화 끝
    46.57s  user  발화 시작: Perfect. What's the weather forecast for Miami during those 
    49.99s  <ret> 발화 (turn9 첫 프레임)
    50.59s  agent 발화 시작: <ret> Let’s take a look. Miami will be sunny, with highs of 
    50.63s  ⚡SPAN 주입 [d'=0.64s / d_lead=1.36s]: (tool result) Sunny, 28 degrees Celsius, low of 22 degrees Celsius, 10
    50.73s  user  발화 끝
    58.75s  agent 발화 끝
    59.24s  user  발화 시작: That sounds lovely. I— I mean, do you know anything about th
    64.36s  agent 발화 시작: As a marine biologist, that’s a topic very close to my heart
    64.37s  user  발화 끝
    68.38s  agent 발화 끝
    69.35s  user  발화 시작: Oh, really? What kind of coral can you find there?
    72.58s  <ret> 발화 (turn13 첫 프레임)
    73.14s  user  발화 끝
    73.17s  agent 발화 시작: <ret> The reefs are quite diverse. Elkhorn and Staghorn cora
    73.53s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.05s]: (tool result) The most common corals are Elkhorn and Staghorn, both li
    82.21s  agent 발화 끝
    82.39s  user  발화 시작: Threatened? That’s… concerning. What’s causing that?
    86.65s  agent 발화 시작: Coral reefs face numerous challenges, including rising ocean
    86.73s  user  발화 끝
    92.48s  agent 발화 끝
    93.12s  user  발화 시작: Is there anything being done to help them?
    94.72s  <ret> 발화 (turn17 첫 프레임)
    95.32s  agent 발화 시작: <ret> There are significant restoration efforts. Coral nurse
    95.36s  ⚡SPAN 주입 [d'=0.64s / d_lead=1.82s]: (tool result) Coral restoration projects are underway, focusing on gro
    95.47s  user  발화 끝
   103.69s  user  발화 시작: That's good to hear. Can you find me a good seafood restaura
   103.71s  agent 발화 끝
   107.16s  <ret> 발화 (turn19 첫 프레임)
   107.76s  agent 발화 시작: <ret> I can certainly search for that. Joe’s Stone Crab is a
   107.90s  user  발화 끝
   108.12s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.30s]: (tool result) Joe's Stone Crab is highly rated, average cost $60 per p
   115.71s  user  발화 시작: Sixty dollars sounds reasonable. Can you make a reservation 
   115.82s  agent 발화 끝
   121.66s  <ret> 발화 (turn21 첫 프레임)
   122.26s  agent 발화 시작: <ret> Let me see if I can arrange that. Your reservation at 
   122.48s  user  발화 끝
   122.66s  ⚡SPAN 주입 [d'=1.00s / d_lead=3.09s]: (tool result) Reservation confirmed. Joe's Stone Crab, December twenti
   133.85s  agent 발화 끝
   134.49s  user  발화 시작: Fantastic. [laugh] What about transportation? Should I rent 
   139.84s  agent 발화 시작: Miami has a good public transportation system, but a rental 
   140.04s  user  발화 끝
   145.34s  user  발화 시작: Okay, let's rent a car. Can you find me a compact car rental
   145.45s  agent 발화 끝
   149.61s  <ret> 발화 (turn25 첫 프레임)
   149.93s  ⚡SPAN 주입 [d'=0.32s / d_lead=0.37s]: (tool result) Compact car available from Avis, $50 per day, total $100
   150.21s  agent 발화 시작: <ret> Absolutely. A compact car from Avis is available for f
   150.30s  user  발화 끝
   157.90s  user  발화 시작: Perfect. Book it.
   157.96s  agent 발화 끝
   159.01s  <ret> 발화 (turn27 첫 프레임)
   159.33s  ⚡SPAN 주입 [d'=0.32s / d_lead=1.06s]: (tool result) Rental confirmed. Avis, compact car, December twentieth 
   159.60s  agent 발화 시작: <ret> Booking now. Your rental with Avis is confirmed. A com
   159.65s  user  발화 끝
   171.29s  agent 발화 끝
   172.01s  user  발화 시작: That’s everything, I think. Thank you so much!
   174.79s  user  발화 끝
   174.99s  agent 발화 시작: You are very welcome. I hope you have a wonderful trip to Mi
   182.41s  agent 발화 끝
