# v3_rag_25_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# EXAMINER(FDB-v2) 단계: S1 So, I was wondering, what sport di | S2 Tennis, huh? Okay, but Reggi… I th | S3 Wait, two thousand sixteen—wasn’t  | S4 So he was still playing while she 

     0.00s  user  발화 시작: So, I was wondering, what sport did Jack Sock and Raffaella 
     5.37s  user  발화 끝
     5.65s  agent 발화 시작: That’s a good question—a lot of athletes cross over, you kno
     9.21s  <ret> 발화 (turn2 첫 프레임)
     9.29s  agent 발화 시작: <ret> Let me quickly recall their shared athletic pursuit. T
     9.49s  agent 발화 끝
    10.57s  ⚡SPAN 주입 [d'=1.36s / d_lead=3.14s]: Jack Sock and Raffaella Reggi are both professional tennis players.
    14.97s  user  발화 시작: Tennis, huh? Okay, but Reggi… I thought she retired a while 
    15.18s  agent 발화 끝
    20.02s  agent 발화 시작: She did, actually. A player’s career doesn't last forever, u
    20.11s  user  발화 끝
    23.86s  <ret> 발화 (turn5 첫 프레임)
    24.18s  agent 발화 시작: <ret> I can confirm the year she stepped away from competiti
    24.23s  agent 발화 끝
    25.22s  ⚡SPAN 주입 [d'=1.36s / d_lead=3.57s]: Raffaella Reggi retired from professional tennis in two thousand and s
    31.32s  agent 발화 끝
    31.75s  user  발화 시작: Wait, two thousand sixteen—wasn’t Sock still pretty early in
    36.59s  agent 발화 시작: You’re right to ask—the timing is quite a contrast.
    36.70s  user  발화 끝
    39.35s  <ret> 발화 (turn8 첫 프레임)
    39.67s  agent 발화 시작: <ret> Let’s look at when Jack Sock turned professional. He t
    39.78s  agent 발화 끝
    40.47s  ⚡SPAN 주입 [d'=1.12s / d_lead=2.76s]: Jack Sock began his professional tennis career in two thousand ten.
    45.18s  agent 발화 끝
    45.85s  user  발화 시작: So he was still playing while she was winding down. Interest
    53.30s  agent 발화 시작: Now that's a detail worth remembering.
    53.36s  user  발화 끝
    54.95s  <ret> 발화 (turn11 첫 프레임)
    55.35s  agent 발화 시작: <ret> I can check their Grand Slam achievements for you. Jac
    55.56s  agent 발화 끝
    56.31s  ⚡SPAN 주입 [d'=1.36s / d_lead=2.84s]: Jack Sock won one Grand Slam title in doubles, and Raffaella Reggi nev
    61.98s  agent 발화 끝
