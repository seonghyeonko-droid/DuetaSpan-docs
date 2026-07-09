# v3_rag_27_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# EXAMINER(FDB-v2) 단계: S1 I was reading about Lux Aurunque,  | S2 Nineteen seventy… that’s surprisin | S3 But before that, what was he *doin | S4 Metallurgy…so he had a technical b

     0.00s  user  발화 시작: I was reading about Lux Aurunque, and I’m curious—when was h
     5.47s  <ret> 발화 (turn1 첫 프레임)
     5.71s  agent 발화 시작: <ret> That’s a great question, and— He was born in nineteen 
     5.93s  user  발화 끝
     6.43s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.00s]: Lux Aurunque was born in nineteen seventy.
     8.70s  user  발화 시작: Yeah, yeah.
     9.99s  user  발화 끝
    11.23s  user  발화 시작: Nineteen seventy… that’s surprisingly recent, actually. Was 
    11.31s  agent 발화 끝
    17.57s  <ret> 발화 (turn4 첫 프레임)
    17.62s  agent 발화 시작: <ret> It’s interesting to consider the timing of his life, y
    17.86s  user  발화 끝
    18.53s  ⚡SPAN 주입 [d'=0.96s / d_lead=3.61s]: Lux Aurunque became a prominent figure in the bronze trade in 1995.
    21.08s  agent 발화 시작: He became a prominent figure in the bronze trade in nineteen
    21.22s  agent 발화 끝
    23.60s  user  발화 시작: Uh-huh.
    24.05s  user  발화 끝
    25.43s  agent 발화 끝
    25.52s  user  발화 시작: But before that, what was he *doing*?
    28.29s  user  발화 끝
    28.44s  agent 발화 시작: He was—
    29.02s  <ret> 발화 (turn9 첫 프레임)
    29.05s  agent 발화 시작: <ret> Before nineteen ninety-five, he studied metallurgy at 
    29.21s  agent 발화 끝
    31.02s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.81s]: Before 1995, Lux Aurunque studied metallurgy at the University of Vero
    31.57s  user  발화 시작: Yeah, totally.
    32.94s  user  발화 끝
    33.83s  user  발화 시작: Metallurgy…so he had a technical background then? That expla
    33.87s  agent 발화 끝
    39.16s  user  발화 끝
