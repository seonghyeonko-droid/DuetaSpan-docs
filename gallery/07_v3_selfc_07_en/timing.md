# v3_selfc_07_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Set up a viewing for me at The Grandview Lofts on June fifte
     3.45s  <ret> 발화 (turn1 첫 프레임)
     3.61s  user  발화 끝
     3.68s  agent 발화 시작: <ret> Certainly, let’s arrange a viewing for you. I’ve sched
     4.49s  ⚡SPAN 주입 [d'=1.04s / d_lead=2.61s]: (tool result) A viewing at The Grandview Lofts is scheduled for June f
    10.01s  user  발화 시작: Can you send me directions to The Grandview Lofts?
    10.03s  agent 발화 끝
    12.54s  <ret> 발화 (turn3 첫 프레임)
    12.61s  agent 발화 시작: <ret> Absolutely, I can provide those for you. The direction
    12.77s  user  발화 끝
    13.74s  ⚡SPAN 주입 [d'=1.20s / d_lead=2.80s]: (tool result) Directions to The Grandview Lofts are: Head north on Mai
    20.21s  agent 발화 끝
    20.41s  user  발화 시작: That sounds straightforward enough. Is there parking availab
    24.11s  user  발화 끝
    24.30s  agent 발화 시작: Parking can be tricky in that area, but The Grandview Lofts 
    28.79s  agent 발화 끝
    28.97s  user  발화 시작: …And is it covered parking, or just open air?
    31.67s  agent 발화 시작: That's a good question—
    31.84s  user  발화 끝
    32.73s  user  발화 시작: Is it covered, or just open air?
    33.37s  agent 발화 끝
    35.54s  user  발화 끝
    35.57s  agent 발화 시작: The garage at The Grandview Lofts is covered parking.
    39.13s  agent 발화 끝
    39.54s  user  발화 시작: Perfect. What’s the quickest route to get there from here ri
    43.18s  <ret> 발화 (turn11 첫 프레임)
    43.38s  user  발화 끝
    43.42s  agent 발화 시작: <ret> Let me check the current traffic conditions. The faste
    44.38s  ⚡SPAN 주입 [d'=1.20s / d_lead=2.76s]: (tool result) The fastest route to The Grandview Lofts is via Oak Stre
    50.11s  user  발화 시작: Okay, twelve minutes. Can you set a reminder to leave in ten
    50.50s  agent 발화 끝
    54.21s  <ret> 발화 (turn13 첫 프레임)
    54.61s  agent 발화 시작: <ret> Yes, I’ll set a reminder for you. I’ve set a reminder 
    54.64s  user  발화 끝
    55.33s  ⚡SPAN 주입 [d'=1.12s / d_lead=2.13s]: (tool result) A reminder to leave for The Grandview Lofts is set for t
    59.47s  agent 발화 끝
    60.50s  user  발화 시작: Great. What’s the listing price for a two-bedroom at The Gra
    64.22s  <ret> 발화 (turn15 첫 프레임)
    64.38s  agent 발화 시작: <ret> Let me look up the current pricing for you. The listin
    64.48s  user  발화 끝
    65.82s  ⚡SPAN 주입 [d'=1.60s / d_lead=2.88s]: (tool result) A two-bedroom at The Grandview Lofts is listed for two t
    70.77s  agent 발화 끝
    70.78s  user  발화 시작: That’s a little higher than I was hoping for. Are there any 
    76.23s  <ret> 발화 (turn17 첫 프레임)
    76.46s  agent 발화 시작: <ret> I can certainly search for options in that price range
    76.57s  user  발화 끝
    77.27s  ⚡SPAN 주입 [d'=1.04s / d_lead=3.75s]: (tool result) Willow Creek Apartments has a two-bedroom available for 
    84.71s  agent 발화 끝
    84.84s  user  발화 시작: Willow Creek… hmm, I think I’ve heard of that place. What’s 
    89.08s  <ret> 발화 (turn19 첫 프레임)
    89.24s  agent 발화 시작: <ret> Let me find the address for Willow Creek Apartments. T
    89.33s  user  발화 끝
    91.08s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.89s]: (tool result) Willow Creek Apartments is located at 42 Maple Drive.
    95.52s  user  발화 시작: Okay, 42 Maple Drive. Can you set up a viewing there for tom
    95.73s  agent 발화 끝
    99.92s  <ret> 발화 (turn21 첫 프레임)
   100.14s  user  발화 끝
   100.23s  agent 발화 시작: <ret> Of course, let’s schedule a viewing for you. I’ve sche
   101.04s  ⚡SPAN 주입 [d'=1.12s / d_lead=2.61s]: (tool result) A viewing at Willow Creek Apartments is scheduled for to
   105.79s  agent 발화 끝
   106.00s  user  발화 시작: That's wonderful. Thank you so much for your help.
   108.44s  agent 발화 시작: You are most welcome. I’m glad I could assist you today.
   108.57s  user  발화 끝
   112.52s  agent 발화 끝
