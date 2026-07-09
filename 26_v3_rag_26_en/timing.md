# v3_rag_26_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# EXAMINER(FDB-v2) 단계: S1 Oh, I was just looking at flags, a | S2 Gold? I thought it was yellow. Is  | S3 Hmm, interesting. I’m working on a | S4 So, the German flag… when did they

     0.00s  user  발화 시작: Oh, I was just looking at flags, and it got me thinking… wha
     6.77s  user  발화 끝
     6.93s  agent 발화 시작: That’s a good question! Many flags share those colors, but o
    13.79s  <ret> 발화 (turn2 첫 프레임)
    14.03s  agent 발화 시작: <ret> Yes, the flag with those colors is… The flag of German
    14.16s  agent 발화 끝
    14.99s  ⚡SPAN 주입 [d'=1.20s / d_lead=2.47s]: The flag of Germany features horizontal bands of black, red, and gold.
    21.44s  agent 발화 끝
    21.57s  user  발화 시작: Gold? I thought it was yellow. Is gold different?
    25.00s  agent 발화 시작: It's a very common point of confusion! “Gold” is the officia
    25.27s  user  발화 끝
    32.07s  <ret> 발화 (turn5 첫 프레임)
    32.39s  agent 발화 시작: <ret> Actually, the shade of yellow… The “gold” band on the 
    32.45s  agent 발화 끝
    33.35s  ⚡SPAN 주입 [d'=1.28s / d_lead=1.76s]: The German flag’s “gold” band is officially specified as a dark golden
    35.30s  user  발화 시작: Right.
    35.94s  user  발화 끝
    38.55s  user  발화 시작: Hmm, interesting. I’m working on a project about national sy
    38.74s  agent 발화 끝
    44.94s  user  발화 끝
    45.12s  agent 발화 시작: It absolutely is! Details matter when representing a nation’
    52.49s  agent 발화 끝
    52.93s  user  발화 시작: So, the German flag… when did they actually start using it? 
    58.65s  <ret> 발화 (turn10 첫 프레임)
    58.89s  agent 발화 시작: <ret> The current design was adopted… The modern German flag
    59.04s  user  발화 끝
    59.77s  ⚡SPAN 주입 [d'=1.12s / d_lead=2.10s]: The modern German flag was officially adopted on May 11th, 1919.
    66.03s  agent 발화 끝
