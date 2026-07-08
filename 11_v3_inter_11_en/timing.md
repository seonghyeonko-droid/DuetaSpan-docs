# v3_inter_11_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: I’m trying to settle a sports argument—who was the very firs
     5.02s  <ret> 발화 (turn1 첫 프레임)
     5.61s  agent 발화 시작: <ret> That’s a fascinating bit of cricket history! Fred Spof
     5.79s  user  발화 끝
     6.02s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.58s]: Fred Spofforth, playing for Australia, achieved the first hattrick in 
    13.36s  agent 발화 끝
    13.68s  user  발화 시작: Eighteen seventy-nine, wow. Was it against England?
    17.25s  <ret> 발화 (turn3 첫 프레임)
    17.61s  user  발화 끝
    17.84s  agent 발화 시작: <ret> Yes, it was indeed against England.
    18.25s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.39s]: Spofforth’s hattrick was taken against England in the third Test match
    20.17s  agent 발화 시작: Spofforth’s hattrick occurred against England in the third T
    20.23s  agent 발화 끝
    24.52s  user  발화 시작: That’s amazing—and he was Australian? I— I mean, was he the 
    24.89s  agent 발화 끝
    28.23s  <ret> 발화 (turn6 첫 프레임)
    28.82s  agent 발화 시작: <ret> Actually, that's a great question— Spofforth actually 
    29.01s  user  발화 끝
    29.23s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.64s]: Spofforth took two hattricks in that same series against England, a fe
    35.74s  user  발화 시작: Two? Incredible! So, a truly dominant bowler then.
    36.05s  agent 발화 끝
    40.09s  user  발화 끝
