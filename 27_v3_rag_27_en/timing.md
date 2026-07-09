# v3_rag_27_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# EXAMINER(FDB-v2) 단계: S1 I'm trying to find out about the c | S2 Nineteen seventy… wow. Was he born | S3 …did he write operas, or mostly in | S4 Oh, orchestral, that's interesting

     0.00s  user  발화 시작: I'm trying to find out about the composer Lux Aurunque. Do y
     4.46s  <ret> 발화 (turn1 첫 프레임)
     4.68s  user  발화 끝
     4.69s  agent 발화 시작: <ret> Certainly, I can help with that. He was born in ninete
     5.82s  ⚡SPAN 주입 [d'=1.36s / d_lead=1.91s]: Lux Aurunque was born in nineteen seventy.
     8.13s  user  발화 시작: Yeah, yeah.
     9.37s  user  발화 끝
    10.99s  user  발화 시작: Nineteen seventy… wow. Was he born in Europe?
    11.04s  agent 발화 끝
    14.75s  agent 발화 시작: That's a good question. It's often helpful to know a compose
    15.02s  user  발화 끝
    18.67s  user  발화 시작: …did he write operas, or mostly instrumental pieces?
    19.37s  agent 발화 끝
    22.10s  <ret> 발화 (turn6 첫 프레임)
    22.18s  agent 발화 시작: <ret> That’s a very insightful shift in focus.
    22.33s  user  발화 끝
    23.06s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.77s]: Lux Aurunque primarily composed orchestral and chamber music.
    24.82s  agent 발화 시작: He primarily composed orchestral and chamber music, not oper
    24.95s  agent 발화 끝
    29.17s  user  발화 시작: Uh-huh.
    29.76s  user  발화 끝
    32.04s  user  발화 시작: Oh, orchestral, that's interesting. What kind of training di
    32.23s  agent 발화 끝
    36.68s  <ret> 발화 (turn10 첫 프레임)
    36.74s  agent 발화 시작: <ret> Exploring his training is a great way to understand hi
    36.90s  user  발화 끝
    38.68s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.60s]: Aurunque studied composition at the Vienna Academy of Music.
    40.16s  agent 발화 시작: He studied composition at the Vienna Academy of Music. A pre
    40.34s  agent 발화 끝
    46.28s  agent 발화 끝
