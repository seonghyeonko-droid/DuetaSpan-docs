# v3_selfc_08_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Show me buses from Chicago to Denver for three passengers on
     4.11s  <ret> 발화 (turn1 첫 프레임)
     4.35s  user  발화 끝
     4.51s  agent 발화 시작: <ret> Let’s see what bus options are available… Two buses ru
     5.31s  ⚡SPAN 주입 [d'=1.20s / d_lead=2.45s]: (tool result) There are two buses departing Chicago on May tenth: one 
    15.59s  user  발화 시작: The eight AM one sounds good. Can you reserve three seats on
    15.73s  agent 발화 끝
    20.11s  <ret> 발화 (turn3 첫 프레임)
    20.35s  agent 발화 시작: <ret> Absolutely, let me confirm availability… Your reservat
    20.45s  user  발화 끝
    21.15s  ⚡SPAN 주입 [d'=1.04s / d_lead=2.23s]: (tool result) Reservation confirmed: confirmation number is BX7492, th
    29.71s  agent 발화 끝
    30.08s  user  발화 시작: Great. Uh, what's the estimated arrival time in Denver?
    34.01s  user  발화 끝
    34.37s  agent 발화 시작: That’s a good question—
    34.90s  user  발화 시작: Is there Wi-Fi on the bus?
    35.65s  agent 발화 끝
    36.92s  agent 발화 시작: Yes, all our buses to Denver offer complimentary Wi-Fi, and 
    37.01s  user  발화 끝
    42.07s  <ret> 발화 (turn8 첫 프레임)
    42.31s  agent 발화 시작: <ret> As for the arrival time, it’s usually around… The bus 
    42.34s  agent 발화 끝
    43.03s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.44s]: (tool result) The estimated arrival time for the 8:00 AM Chicago to De
    46.10s  user  발화 시작: Yeah.
    46.55s  user  발화 끝
    48.60s  user  발화 시작: Six PM. Okay. What about luggage allowance?
    48.71s  agent 발화 끝
    52.15s  <ret> 발화 (turn11 첫 프레임)
    52.23s  agent 발화 시작: <ret> Each passenger is allowed… Each passenger may bring on
    52.26s  user  발화 끝
    53.43s  ⚡SPAN 주입 [d'=1.28s / d_lead=1.41s]: (tool result) Each passenger is allowed one checked bag and one carry-
    59.42s  user  발화 시작: Fifty pounds each, good to know. I— I mean, is there a restr
    59.65s  agent 발화 끝
    65.16s  user  발화 끝
    65.26s  agent 발화 시작: Yes, all our long-distance buses have restrooms onboard for 
    70.81s  agent 발화 끝
    71.07s  user  발화 시작: Perfect. And are there any stops along the way?
    73.91s  <ret> 발화 (turn15 첫 프레임)
    74.31s  agent 발화 시작: <ret> There are a few scheduled stops… The bus stops briefly
    74.53s  user  발화 끝
    75.19s  ⚡SPAN 주입 [d'=1.28s / d_lead=2.30s]: (tool result) The bus stops in Omaha, Nebraska, and Hays, Kansas, for 
    82.75s  agent 발화 끝
    83.05s  user  발화 시작: Fifteen minutes each, that’s helpful. Thanks a lot.
    86.00s  user  발화 끝
    86.28s  agent 발화 시작: You're very welcome! I hope you enjoy your trip to Denver. I
    92.62s  agent 발화 끝
