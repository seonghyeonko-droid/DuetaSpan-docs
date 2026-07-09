# v3_rag_25_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: So, I was just wondering, what sport did Jack Sock and Raffa
     5.61s  user  발화 끝
     5.86s  agent 발화 시작: That’s a good question—many athletes cross over, you know.
     8.76s  <ret> 발화 (turn2 첫 프레임)
     8.84s  agent 발화 시작: <ret> Let’s see if I recall correctly… Jack Sock and Raffael
     8.99s  agent 발화 끝
     9.88s  ⚡SPAN 주입 [d'=1.12s / d_lead=2.24s]: Jack Sock and Raffaella Reggi are both professional tennis players.
    14.59s  user  발화 시작: Tennis, huh? I thought maybe Sock played a bit of baseball t
    14.82s  agent 발화 끝
    18.75s  agent 발화 시작: Now, Jack Sock dedicated himself to tennis—a very focused yo
    18.90s  user  발화 끝
    22.82s  <ret> 발화 (turn5 첫 프레임)
    23.13s  agent 발화 시작: <ret> I’m fairly certain about that, but let me double-check
    23.19s  agent 발화 끝
    24.18s  ⚡SPAN 주입 [d'=1.36s / d_lead=3.30s]: Jack Sock has never played professional baseball; he focused solely on
    30.83s  agent 발화 끝
    31.23s  user  발화 시작: But Reggi—was she ever ranked highly in doubles as well?
    35.35s  agent 발화 시작: Well, she—
    35.54s  user  발화 끝
    35.62s  user  발화 시작: I mean, did she have a doubles ranking that was comparable t
    36.17s  agent 발화 끝
    39.90s  agent 발화 시작: Oh, a very astute observation, actually.
    40.11s  user  발화 끝
    42.08s  <ret> 발화 (turn10 첫 프레임)
    42.32s  agent 발화 시작: <ret> Let me find some information on her doubles performanc
    42.48s  agent 발화 끝
    44.08s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.59s]: Raffaella Reggi achieved a career-high doubles ranking of number seven
    50.60s  user  발화 시작: Seventeen… that’s pretty good. What about championships—did 
    50.70s  agent 발화 끝
    57.17s  agent 발화 시작: Grand Slams are the ultimate test, aren't they? A real measu
    57.22s  user  발화 끝
    61.15s  <ret> 발화 (turn13 첫 프레임)
    61.23s  agent 발화 시작: <ret> Let’s see what the records show regarding Grand Slam t
    61.24s  agent 발화 끝
    62.83s  ⚡SPAN 주입 [d'=1.68s / d_lead=3.20s]: Neither Jack Sock nor Raffaella Reggi have won a Grand Slam singles ti
    68.60s  agent 발화 끝
