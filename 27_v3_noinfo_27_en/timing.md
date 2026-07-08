# v3_noinfo_27_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Create an order for a coffee maker costing forty-nine dollar
     3.73s  <ret> 발화 (turn1 첫 프레임)
     3.89s  ⚡SPAN 주입 [d'=0.16s / d_lead=0.32s]: (tool result) Order created. Total is fifty-three dollars and sixteen 
     4.32s  agent 발화 시작: <ret> Certainly. Your order for the coffee maker is confirme
     4.45s  user  발화 끝
    10.81s  agent 발화 끝
    10.92s  user  발화 시작: Okay, good. Uh, can you check the flight schedule from Lagos
    13.18s  <ret> 발화 (turn3 첫 프레임)
    13.78s  agent 발화 시작: <ret> Let me see. Arik Air departs for Accra at eight fiftee
    13.87s  user  발화 끝
    14.18s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.20s]: (tool result) Several flights are available. Arik Air departs 8:15 AM,
    22.88s  user  발화 시작: Hmm, are there any earlier flights? I— I mean, before eight 
    23.01s  agent 발화 끝
    27.46s  <ret> 발화 (turn5 첫 프레임)
    27.54s  ⚡SPAN 주입 [d'=0.08s / d_lead=0.99s]: (tool result) No flights depart before 8:00 AM on December twentieth.
    28.06s  agent 발화 시작: <ret> Let's investigate. Unfortunately, there are no flights
    28.12s  user  발화 끝
    34.96s  agent 발화 끝
    35.65s  user  발화 시작: Right. Okay. What about hotels in Accra? Something… reasonab
    38.57s  <ret> 발화 (turn7 첫 프레임)
    39.16s  agent 발화 시작: <ret> I can certainly help with that. The Royal Ridge Hotel 
    39.26s  user  발화 끝
    39.53s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.03s]: (tool result) The Royal Ridge Hotel is available for seventy-five doll
    45.75s  user  발화 시작: Seventy-five dollars… that sounds acceptable. Can you book m
    45.92s  agent 발화 끝
    50.45s  <ret> 발화 (turn9 첫 프레임)
    50.60s  ⚡SPAN 주입 [d'=0.16s / d_lead=0.56s]: (tool result) Booking confirmed. Royal Ridge Hotel, December twentieth
    51.05s  agent 발화 시작: <ret> Of course. Your room at the Royal Ridge Hotel is booke
    51.26s  user  발화 끝
    56.84s  user  발화 시작: Excellent. [sigh] Now, tell me a bit about the trade routes 
    56.88s  agent 발화 끝
    64.02s  user  발화 끝
    64.03s  agent 발화 시작: Ah, a fascinating question. The fifteenth century saw Ghana 
    71.37s  user  발화 시작: Gold, yes. But what goods were *leaving* Ghana, besides gold
    71.49s  agent 발화 끝
    73.84s  <ret> 발화 (turn13 첫 프레임)
    73.92s  ⚡SPAN 주입 [d'=0.08s / d_lead=1.39s]: (no information found)
    74.44s  agent 발화 시작: <ret> That’s a good question to ask. I regret to inform you 
    74.61s  user  발화 끝
    80.46s  agent 발화 끝
    80.52s  user  발화 시작: Oh. That’s… disappointing. Um, okay. Never mind. Can you set
    83.49s  <ret> 발화 (turn15 첫 프레임)
    83.49s  ⚡SPAN 주입 [d'=0.00s / d_lead=0.42s]: (tool result) Reminder set. December nineteenth, 6:00 PM, pack bag.
    84.07s  user  발화 끝
    84.09s  agent 발화 시작: <ret> Absolutely. A reminder to pack your bag is set for Dec
    90.34s  user  발화 시작: Thank you. And what’s the local currency in Accra?
    90.35s  agent 발화 끝
    94.52s  <ret> 발화 (turn17 첫 프레임)
    95.11s  user  발화 끝
    95.12s  agent 발화 시작: <ret> Let me quickly check that for you. The local currency 
    95.52s  ⚡SPAN 주입 [d'=1.00s / d_lead=3.75s]: (tool result) The local currency is the Ghanaian cedi.
   103.69s  agent 발화 끝
   104.45s  user  발화 시작: Cedi, right. And what’s the current exchange rate to US doll
   108.24s  <ret> 발화 (turn19 첫 프레임)
   108.83s  agent 발화 시작: <ret> I can find that out. One Ghanaian cedi is currently wo
   108.94s  user  발화 끝
   109.24s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.78s]: (tool result) One Ghanaian cedi equals zero point zero eight three US 
   118.65s  user  발화 시작: Okay, useful. Uh, are there any historical sites in Accra re
   118.85s  agent 발화 끝
   124.67s  user  발화 끝
   124.90s  agent 발화 시작: Accra, sadly, played a role in the transatlantic slave trade
   134.27s  agent 발화 끝
   136.21s  user  발화 시작: Those forts… that’s grim. Can you show me directions to Jame
   141.27s  <ret> 발화 (turn23 첫 프레임)
   141.43s  ⚡SPAN 주입 [d'=0.16s / d_lead=0.60s]: (tool result) It's 4.2 kilometers, about 12 minutes by car.
   141.86s  agent 발화 시작: <ret> Certainly. James Fort is four point two kilometers awa
   141.86s  user  발화 끝
   149.17s  user  발화 시작: Twelve minutes. Good to know. What’s the weather forecast fo
   149.64s  agent 발화 끝
   154.63s  <ret> 발화 (turn25 첫 프레임)
   155.19s  user  발화 끝
   155.23s  agent 발화 시작: <ret> Let me access that information. The forecast for Accra
   155.63s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.57s]: (tool result) 28 degrees Celsius, partly cloudy, 60% humidity.
   166.47s  user  발화 시작: Warm, then. I should pack light clothing. Do they drive on t
   166.53s  agent 발화 끝
   172.55s  agent 발화 시작: They drive on the right-hand side of the road in Ghana, like
   172.59s  user  발화 끝
   177.46s  agent 발화 끝
   177.57s  user  발화 시작: Right. Okay. What time is sunset in Accra on December twenti
   181.87s  <ret> 발화 (turn29 첫 프레임)
   182.47s  agent 발화 시작: <ret> I can look that up for you. Sunset in Accra on Decembe
   182.67s  user  발화 끝
   182.87s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.22s]: (tool result) Sunset is at 6:03 PM.
   188.81s  agent 발화 끝
   188.82s  user  발화 시작: Six oh three. Good to know. [laugh] And finally, could you s
   201.72s  <ret> 발화 (turn31 첫 프레임)
   202.28s  ⚡SPAN 주입 [d'=0.56s / d_lead=1.32s]: (tool result) Message sent.
   202.32s  agent 발화 시작: <ret> Of course. The text message has been sent to 555-123-4
   202.41s  user  발화 끝
   208.90s  agent 발화 끝
   208.92s  user  발화 시작: Wonderful. That’s all I need for now, I think.
   211.64s  user  발화 끝
   211.93s  agent 발화 시작: A well-prepared journey is always a smoother one. I trust yo
   222.74s  agent 발화 끝
