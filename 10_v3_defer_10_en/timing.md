# v3_defer_10_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: What is the drive time from Phoenix to Los Angeles?
     2.59s  <ret> 발화 (turn1 첫 프레임)
     2.67s  ⚡SPAN 주입 [d'=0.08s / d_lead=0.72s]: (tool result) It's 377 miles, about 5 hours and 45 minutes by car.
     3.18s  agent 발화 시작: <ret> Let’s see… The drive from Phoenix to Los Angeles is ap
     3.24s  user  발화 끝
    10.72s  user  발화 시작: Okay, good. And can you find me a hotel in Santa Monica for 
    10.79s  agent 발화 끝
    14.20s  <ret> 발화 (turn3 첫 프레임)
    14.28s  ⚡SPAN 주입 [d'=0.08s / d_lead=0.35s]: (tool result) The Georgian Hotel has availability, $350 per night, 4.5
    14.79s  agent 발화 시작: <ret> Absolutely. The Georgian Hotel in Santa Monica has roo
    15.02s  user  발화 끝
    23.18s  agent 발화 끝
    23.93s  user  발화 시작: Three hundred fifty… that's a bit steep. Are there any cheap
    28.49s  <ret> 발화 (turn5 첫 프레임)
    28.97s  ⚡SPAN 주입 [d'=0.48s / d_lead=1.34s]: (tool result) The Sea View Motel has rooms for $185, 3 stars.
    29.08s  agent 발화 시작: <ret> Let’s explore a bit… The Sea View Motel offers rooms i
    29.26s  user  발화 끝
    37.10s  user  발화 시작: One eighty-five sounds better. Can you book a room there for
    37.15s  agent 발화 끝
    40.68s  <ret> 발화 (turn7 첫 프레임)
    41.16s  ⚡SPAN 주입 [d'=0.48s / d_lead=1.14s]: (tool result) Reservation confirmed. Sea View Motel, one night, $185, 
    41.28s  agent 발화 시작: <ret> Consider it done. Your reservation at the Sea View Mot
    41.45s  user  발화 끝
    50.24s  user  발화 시작: Perfect. Uh, what’s the weather like in Santa Monica right n
    50.37s  agent 발화 끝
    53.38s  <ret> 발화 (turn9 첫 프레임)
    53.97s  agent 발화 시작: <ret> Let me check the current conditions. It is currently s
    53.98s  user  발화 끝
    54.34s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.16s]: (tool result) It's 72 degrees Fahrenheit and sunny.
    60.09s  agent 발화 끝
    60.48s  user  발화 시작: Seventy-two… nice. I wonder if there are any good jazz clubs
    65.75s  agent 발화 시작: Santa Monica has a thriving music scene, though it leans mor
    65.85s  user  발화 끝
    70.94s  agent 발화 끝
    71.84s  user  발화 시작: Oh. Well, are there any in Los Angeles then?
    74.18s  <ret> 발화 (turn13 첫 프레임)
    74.60s  user  발화 끝
    74.77s  agent 발화 시작: <ret> Los Angeles is a jazz haven. The Blue Whale is a well-
    75.18s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.02s]: (tool result) The Blue Whale is a popular jazz club in downtown Los An
    81.02s  user  발화 시작: The Blue Whale… is it far from the Sea View Motel?
    81.16s  agent 발화 끝
    83.85s  <ret> 발화 (turn15 첫 프레임)
    84.44s  agent 발화 시작: <ret> Let’s find out. The Blue Whale is ten point two miles 
    84.54s  user  발화 끝
    84.65s  ⚡SPAN 주입 [d'=0.80s / d_lead=0.85s]: (tool result) It's 10.2 miles, about 20 minutes by car.
    90.65s  agent 발화 끝
    93.11s  user  발화 시작: Twenty minutes isn’t bad. What kind of jazz do they usually 
    97.84s  user  발화 끝
    97.90s  agent 발화 시작: The Blue Whale features a really eclectic mix, mostly modern
   107.26s  agent 발화 끝
   107.39s  user  발화 시작: Hmm, interesting. Okay, could you add a reminder to my phone
   113.34s  <ret> 발화 (turn19 첫 프레임)
   113.93s  agent 발화 시작: <ret> Absolutely, I can do that. A reminder has been set for
   114.06s  ⚡SPAN 주입 [d'=0.72s / d_lead=1.47s]: (tool result) Reminder set for 8:00 PM: Go to The Blue Whale.
   114.11s  user  발화 끝
   119.80s  agent 발화 끝
   119.85s  user  발화 시작: Great. Is there a parking garage near The Blue Whale?
   122.44s  <ret> 발화 (turn21 첫 프레임)
   123.04s  agent 발화 시작: <ret> Let's locate some parking. LA Grand Parking is a garag
   123.09s  user  발화 끝
   123.40s  ⚡SPAN 주입 [d'=0.96s / d_lead=1.20s]: (tool result) LA Grand Parking is a garage one block from The Blue Wha
   128.14s  agent 발화 끝
   128.27s  user  발화 시작: One block… good to know. [sigh] This is shaping up to be a g
   133.69s  agent 발화 시작: It sounds like it is. A little music is always a good remedy
   133.69s  user  발화 끝
   137.21s  agent 발화 끝
   138.53s  user  발화 시작: Yeah. Hey, do you know anything about Charlie Parker’s early
   143.16s  user  발화 끝
   143.19s  agent 발화 시작: That's a fascinating question, and a bit of a rabbit hole. I
   148.98s  agent 발화 끝
   150.20s  user  발화 시작: Oh, okay. No worries.
   151.13s  ⚡지연 SPAN 주입(선제발표 직전): (tool result) Charlie Parker played at the Plantation Club in Hollywoo
   152.37s  agent 발화 시작: <ret> Actually, I’ve just found something. Charlie Parker pe
   152.55s  user  발화 끝
   160.07s  user  발화 시작: The Plantation Club… wow. I've read about that place.
   160.15s  agent 발화 끝
   164.09s  user  발화 끝
   164.20s  agent 발화 시작: It was legendary. A real breeding ground for bebop on the We
   168.43s  user  발화 시작: So, um, what's the traffic looking like right now on the 405
   168.46s  agent 발화 끝
   171.86s  <ret> 발화 (turn31 첫 프레임)
   172.44s  agent 발화 시작: <ret> Let's check the current traffic conditions. There's mo
   172.64s  user  발화 끝
   172.86s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.46s]: (tool result) Moderate congestion on the 405 North near Wilshire Boule
   179.40s  agent 발화 끝
   179.75s  user  발화 시작: Moderate… okay. I should probably leave a little early then.
   183.87s  user  발화 끝
   184.02s  agent 발화 시작: Prudence is always a good companion on the road, especially 
   188.15s  user  발화 시작: True enough. Can you set another reminder, for 7:40 PM, just
   188.51s  agent 발화 끝
   192.73s  <ret> 발화 (turn35 첫 프레임)
   193.13s  ⚡SPAN 주입 [d'=0.40s / d_lead=0.54s]: (tool result) Reminder set for 7:40 PM: Leave for The Blue Whale.
   193.30s  agent 발화 시작: <ret> Of course. I’ve set a reminder for seven forty PM to l
   193.34s  user  발화 끝
   197.65s  agent 발화 끝
   197.79s  user  발화 시작: Thanks, Moshi. You've been a huge help.
   199.89s  agent 발화 시작: My pleasure. Enjoy the music, and the night. It sounds like 
   200.05s  user  발화 끝
   204.20s  agent 발화 끝
