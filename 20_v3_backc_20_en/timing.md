# v3_backc_20_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: How many rounds are in the MLB draft?
     3.04s  <ret> 발화 (turn1 첫 프레임)
     3.63s  agent 발화 시작: <ret> That’s a common question… The MLB draft currently has 
     3.70s  user  발화 끝
     3.92s  ⚡SPAN 주입 [d'=0.88s / d_lead=1.22s]: The Major League Baseball draft consists of twenty rounds.
     8.57s  user  발화 시작: Yeah.
    11.06s  user  발화 끝
    12.13s  agent 발화 시작: It’s a strategic process for teams, building for the future.
    12.16s  agent 발화 끝
    16.67s  agent 발화 끝
    17.18s  user  발화 시작: Wow, twenty rounds is a lot. When does it usually happen?
    22.51s  <ret> 발화 (turn5 첫 프레임)
    22.51s  ⚡SPAN 주입 [d'=0.00s / d_lead=0.10s]: The MLB draft is typically held in July, beginning on a Sunday and con
    23.11s  agent 발화 시작: <ret> It’s a fairly structured event… The draft usually take
    23.16s  user  발화 끝
    23.75s  agent 발화 끝
    23.94s  user  발화 시작: What positions are most often drafted early?
    25.56s  <ret> 발화 (turn7 첫 프레임)
    25.96s  ⚡SPAN 주입 [d'=0.40s / d_lead=0.47s]: Pitchers and shortstops are frequently selected early in the MLB draft
    26.06s  user  발화 끝
    26.15s  agent 발화 시작: <ret> Certain skill sets are always in demand… Pitchers and 
    27.62s  agent 발화 끝
    28.99s  user  발화 시작: [sigh] That makes sense. What about international players?
    37.33s  user  발화 끝
    37.52s  agent 발화 시작: It’s a growing part of the game.
    39.97s  agent 발화 끝
    40.02s  user  발화 시작: Are there restrictions on signing international players?
    42.30s  <ret> 발화 (turn11 첫 프레임)
    42.89s  agent 발화 시작: <ret> There are definitely guidelines in place… Internationa
    42.93s  user  발화 끝
    43.26s  ⚡SPAN 주입 [d'=0.96s / d_lead=1.64s]: International players are subject to age and bonus pool restrictions w
    51.66s  agent 발화 끝
    51.70s  user  발화 시작: What's a bonus pool?
    52.56s  <ret> 발화 (turn13 첫 프레임)
    53.02s  agent 발화 시작: <ret> It's a way to manage spending… Each team receives an a
    53.12s  user  발화 끝
    53.56s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.14s]: A bonus pool is an allocated amount of money each team can spend on si
    62.99s  agent 발화 끝
    63.38s  user  발화 시작: So, teams can't just offer anyone any amount of money?
    66.73s  agent 발화 시작: Not exactly, there are limits.
    66.75s  user  발화 끝
    68.66s  agent 발화 끝
    68.78s  user  발화 시작: Okay, good to know. Who was the first overall pick this year
    71.56s  <ret> 발화 (turn17 첫 프레임)
    72.15s  user  발화 끝
    72.15s  agent 발화 시작: <ret> This year’s top pick was… Jackson Holliday, a shortsto
    72.56s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.18s]: Jackson Holliday, a shortstop, was the first overall pick in the 2022 
    84.82s  agent 발화 끝
    84.86s  user  발화 시작: A shortstop, huh? They *are* important.
    88.10s  user  발화 끝
    88.13s  agent 발화 시작: Absolutely. A strong shortstop anchors the infield.
    91.97s  agent 발화 끝
    92.33s  user  발화 시작: Do a lot of drafted players actually make it to the majors?
    95.45s  <ret> 발화 (turn21 첫 프레임)
    95.94s  user  발화 끝
    96.04s  agent 발화 시작: <ret> The path is challenging… Roughly thirty percent of pla
    96.45s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.66s]: Approximately thirty percent of drafted players eventually play in Maj
   105.59s  agent 발화 끝
   105.86s  user  발화 시작: Wow, only thirty percent. That's a tough climb.
   109.00s  agent 발화 시작: It is. It requires dedication and a bit of luck.
   109.10s  user  발화 끝
   113.44s  agent 발화 끝
