# v3_rag_25_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: So, I was wondering, what sport did Jack Sock and Raffaella 
     6.07s  user  발화 끝
     6.32s  agent 발화 시작: That’s a good question—it’s always interesting to see athlet
    12.16s  <ret> 발화 (turn2 첫 프레임)
    12.24s  agent 발화 시작: <ret> Let me quickly confirm the details… Both Jack Sock and
    12.38s  agent 발화 끝
    13.28s  ⚡SPAN 주입 [d'=1.12s / d_lead=2.33s]: Jack Sock and Raffaella Reggi are both professional tennis players.
    19.36s  user  발화 시작: Tennis, huh? I thought maybe Sock played a bit of baseball i
    19.61s  agent 발화 끝
    24.57s  agent 발화 시작: [laugh] A fair thought, actually, many athletes excel at mul
    24.74s  user  발화 끝
    28.40s  <ret> 발화 (turn5 첫 프레임)
    28.72s  agent 발화 시작: <ret> I believe I can find a quick answer to that… Jack Sock
    28.73s  agent 발화 끝
    29.52s  ⚡SPAN 주입 [d'=1.12s / d_lead=3.18s]: Jack Sock was a three-sport athlete in high school, playing football, 
    36.04s  agent 발화 끝
    36.43s  user  발화 시작: But Reggi—did she focus on tennis her whole career, or did s
    42.04s  agent 발화 시작: That’s a very perceptive question—it’s rare to find someone 
    42.22s  user  발화 끝
    47.67s  <ret> 발화 (turn8 첫 프레임)
    47.99s  agent 발화 시작: <ret> Raffaella Reggi dedicated herself to tennis from the v
    48.06s  agent 발화 끝
    49.27s  ⚡SPAN 주입 [d'=1.60s / d_lead=4.73s]: Raffaella Reggi began playing tennis at age five and quickly focused s
    52.72s  agent 발화 끝
    53.23s  user  발화 시작: Five years old! Wow. So, they both really committed to tenni
    59.77s  user  발화 끝
