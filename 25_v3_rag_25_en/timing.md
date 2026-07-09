# v3_rag_25_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# EXAMINER(FDB-v2) 단계: S1 So, I was just wondering… what spo | S2 A junior title, huh? That’s pretty | S3 Eleven titles… that’s a lot of win | S4 Oh! An Olympic medal! See, that’s 

     0.00s  user  발화 시작: So, I was just wondering… what sport did Jack Sock and Raffa
     8.60s  agent 발화 시작: That’s a good question, and a common one, actually. It’s won
     8.77s  user  발화 끝
    14.26s  <ret> 발화 (turn2 첫 프레임)
    14.34s  agent 발화 시작: <ret> Both athletes are known for… Jack Sock and Raffaella R
    14.49s  agent 발화 끝
    15.38s  ⚡SPAN 주입 [d'=1.12s / d_lead=2.25s]: Jack Sock and Raffaella Reggi are both professional tennis players.
    17.30s  user  발화 시작: Yeah.
    17.80s  user  발화 끝
    23.80s  agent 발화 끝
    23.86s  user  발화 시작: Tennis, huh? Hmm. I thought maybe Raffaella Reggi played vol
    31.79s  agent 발화 시작: It's easy to get things mixed up, especially with athletes w
    31.97s  user  발화 끝
    38.38s  <ret> 발화 (turn6 첫 프레임)
    38.69s  agent 발화 끝
    38.69s  agent 발화 시작: <ret> Let’s double-check Raffaella’s main focus… Raffaella R
    39.34s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.24s]: Raffaella Reggi retired from professional tennis in 2004, achieving a 
    46.30s  agent 발화 끝
    46.43s  user  발화 시작: Okay, okay, tennis it is. But Jack Sock… wasn’t he also tryi
    55.19s  user  발화 끝
    55.33s  agent 발화 시작: It’s interesting how paths can diverge, isn't it? Exploring 
    61.41s  <ret> 발화 (turn9 첫 프레임)
    61.73s  agent 발화 시작: <ret> Jack Sock did have some early athletic interests… Jack
    61.86s  agent 발화 끝
    62.53s  ⚡SPAN 주입 [d'=1.12s / d_lead=2.84s]: Jack Sock was drafted by the Kansas City Royals in the 2012 MLB draft,
    68.82s  agent 발화 끝
    69.19s  user  발화 시작: So, he *did* play another sport! Just not professionally, I 
    76.99s  agent 발화 시작: Absolutely. Every decision closes some doors while opening o
    77.07s  user  발화 끝
    84.13s  <ret> 발화 (turn12 첫 프레임)
    84.53s  agent 발화 시작: <ret> Let's look into his early tennis career… Jack Sock won
    84.69s  agent 발화 끝
    85.49s  ⚡SPAN 주입 [d'=1.36s / d_lead=2.70s]: Jack Sock won the 2010 Junior US Open boys' singles title, signaling h
    91.85s  agent 발화 끝
    92.01s  user  발화 시작: A junior title, huh? That’s pretty good. Still, it feels lik
    98.54s  user  발화 끝
    98.55s  agent 발화 시작: It's natural to wonder about "what ifs." But focusing on the
   104.78s  <ret> 발화 (turn15 첫 프레임)
   105.02s  agent 발화 시작: <ret> Regarding Reggi’s doubles success… Raffaella Reggi won
   105.03s  agent 발화 끝
   105.74s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.02s]: Raffaella Reggi won the Australian Open women's doubles title in 1998 
   112.10s  agent 발화 끝
   112.31s  user  발화 시작: Doubles, huh? I always forget about doubles. So, both were m
   119.78s  agent 발화 시작: Sometimes focusing on individual accomplishments overshadows
   119.82s  user  발화 끝
   125.94s  <ret> 발화 (turn18 첫 프레임)
   126.18s  agent 발화 시작: <ret> Let’s confirm Sock’s singles ranking… Jack Sock reache
   126.36s  agent 발화 끝
   127.38s  ⚡SPAN 주입 [d'=1.44s / d_lead=1.87s]: Jack Sock reached a career-high ATP singles ranking of world No. 8 in 
   129.38s  user  발화 시작: Yeah.
   129.87s  user  발화 끝
   132.15s  agent 발화 끝
   132.39s  user  발화 시작: Number eight! Wow, that’s actually really good. I didn’t rea
   138.31s  user  발화 끝
   138.50s  agent 발화 시작: It's easy to underestimate someone’s accomplishments without
   144.77s  <ret> 발화 (turn22 첫 프레임)
   145.08s  agent 발화 시작: <ret> Focusing on Reggi’s overall career… Raffaella Reggi wo
   145.17s  agent 발화 끝
   145.81s  ⚡SPAN 주입 [d'=1.04s / d_lead=2.38s]: Raffaella Reggi won eleven doubles titles during her professional tenn
   151.75s  agent 발화 끝
   152.21s  user  발화 시작: Eleven titles… that’s a lot of winning. So, she wasn’t just 
   159.10s  agent 발화 시작: Consistency is often a sign of true skill. A single win can 
   159.21s  user  발화 끝
   166.58s  <ret> 발화 (turn25 첫 프레임)
   166.66s  agent 발화 시작: <ret> Considering Jack Sock’s early training… Jack Sock trai
   166.70s  agent 발화 끝
   167.54s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.02s]: Jack Sock trained at the Evert Tennis Academy in Boca Raton, Florida, 
   172.72s  agent 발화 끝
   173.17s  user  발화 시작: The Evert Academy… that’s a pretty prestigious place, isn't 
   179.74s  agent 발화 시작: A supportive environment can make a huge difference. Having 
   179.80s  user  발화 끝
   184.90s  <ret> 발화 (turn28 첫 프레임)
   185.14s  agent 발화 시작: <ret> Let’s look at Reggi’s nationality… Raffaella Reggi is 
   185.31s  agent 발화 끝
   186.90s  ⚡SPAN 주입 [d'=2.00s / d_lead=2.42s]: Raffaella Reggi is an Italian former professional tennis player.
   188.48s  user  발화 시작: Yeah.
   188.93s  user  발화 끝
   190.46s  agent 발화 끝
   191.39s  user  발화 시작: Italian, huh? I wouldn’t have guessed that. I always associa
   198.84s  user  발화 끝
   198.92s  agent 발화 시작: Sometimes our assumptions can limit our understanding. It’s 
   205.01s  <ret> 발화 (turn32 첫 프레임)
   205.33s  agent 발화 시작: <ret> Regarding Jack Sock’s Olympic participation… Jack Sock
   205.41s  agent 발화 끝
   206.13s  ⚡SPAN 주입 [d'=1.12s / d_lead=2.21s]: Jack Sock won a bronze medal in men’s doubles at the 2016 Summer Olymp
   211.96s  agent 발화 끝
   211.96s  user  발화 시작: Oh! An Olympic medal! See, that’s something I definitely did
   218.43s  agent 발화 시작: Recognizing achievements, both big and small, is a wonderful
   218.44s  user  발화 끝
   224.01s  <ret> 발화 (turn35 첫 프레임)
   224.17s  agent 발화 시작: <ret> Regarding Reggi’s playing style… Raffaella Reggi had a
   224.26s  agent 발화 끝
   225.29s  ⚡SPAN 주입 [d'=1.28s / d_lead=1.78s]: Raffaella Reggi was known for her aggressive baseline game and powerfu
   228.58s  user  발화 시작: Mm-hmm.
   229.12s  user  발화 끝
   230.85s  agent 발화 끝
   231.14s  user  발화 시작: Aggressive, huh? I like that. I guess you need that to be su
   236.36s  agent 발화 시작: A proactive approach can be beneficial in many areas of life
   236.45s  user  발화 끝
   243.91s  <ret> 발화 (turn39 첫 프레임)
   244.31s  agent 발화 시작: <ret> Considering Sock’s Davis Cup involvement… Jack Sock pl
   244.48s  agent 발화 끝
   245.19s  ⚡SPAN 주입 [d'=1.28s / d_lead=1.90s]: Jack Sock represented the United States in the Davis Cup from 2013 to 
   251.07s  user  발화 시작: Davis Cup… I'm still fuzzy on what that is exactly. Is it li
   251.16s  agent 발화 끝
   256.99s  agent 발화 시작: It’s a team competition, a bit like the World Cup in soccer.
   257.00s  user  발화 끝
   263.20s  agent 발화 끝
