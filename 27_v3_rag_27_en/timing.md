# v3_rag_27_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# EXAMINER(FDB-v2) 단계: S1 I was reading about Lux Aurunque,  | S2 Nineteen seventy… that’s surprisin | S3 Do you know anything about his ear | S4 Was he influenced by the art alrea

     0.00s  user  발화 시작: I was reading about Lux Aurunque, and I’m curious—when was h
     5.36s  <ret> 발화 (turn1 첫 프레임)
     5.60s  agent 발화 시작: <ret> That’s a great question, and a fascinating figure to e
     5.65s  user  발화 끝
     7.36s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.38s]: Lux Aurunque was born in nineteen seventy.
     9.26s  user  발화 시작: Yeah, yeah.
    10.60s  user  발화 끝
    12.36s  user  발화 시작: Nineteen seventy… that’s surprisingly recent, considering hi
    12.37s  agent 발화 끝
    16.88s  agent 발화 시작: It is a bit unexpected, isn’t it? His impact feels much olde
    16.89s  user  발화 끝
    19.61s  user  발화 시작: Uh-huh.
    20.11s  user  발화 끝
    21.69s  agent 발화 끝
    22.00s  user  발화 시작: Do you know anything about his early life—
    24.56s  <ret> 발화 (turn7 첫 프레임)
    24.64s  agent 발화 시작: <ret> I can certainly share some details about his formative
    24.77s  user  발화 끝
    25.52s  ⚡SPAN 주입 [d'=0.96s / d_lead=3.11s]: Lux Aurunque spent his childhood in a small village nestled in the Ita
    28.23s  user  발화 시작: Yeah, totally.
    29.55s  user  발화 끝
    31.49s  agent 발화 끝
    32.81s  user  발화 시작: Was he influenced by the art already being made there?
    36.23s  user  발화 끝
    36.47s  agent 발화 시작: That's an excellent point—
    38.17s  <ret> 발화 (turn11 첫 프레임)
    38.22s  agent 발화 끝
    38.24s  agent 발화 시작: <ret> The village was a known center for bronze sculpting du
    40.17s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.84s]: The village was a known center for bronze sculpting during Aurunque’s 
    42.08s  agent 발화 끝
