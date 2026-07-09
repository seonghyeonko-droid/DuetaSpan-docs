# v3_rag_25_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: So, I was reading about Jack Sock and Raffaella Reggi, and I
     8.39s  user  발화 끝
     8.77s  agent 발화 시작: That’s a good question—quite a pair to consider! It's intere
    14.79s  agent 발화 끝
    15.29s  user  발화 시작: Well, I don’t think they crossed disciplines, actually. I th
    21.37s  <ret> 발화 (turn3 첫 프레임)
    21.45s  agent 발화 시작: <ret> Let’s see if I can clarify that for you— Both Jack Soc
    21.64s  user  발화 끝
    22.73s  ⚡SPAN 주입 [d'=1.36s / d_lead=2.76s]: Jack Sock and Raffaella Reggi are both professional tennis players.
    27.22s  user  발화 시작: Tennis, huh? Okay. Did they ever compete *against* each othe
    27.28s  agent 발화 끝
    33.70s  user  발화 끝
    33.97s  agent 발화 시작: That’s a curious thought—whether they ever faced off. I supp
    39.99s  agent 발화 끝
    40.64s  user  발화 시작: But they’re both professional, right? So surely they’d be at
    44.88s  <ret> 발화 (turn7 첫 프레임)
    45.18s  agent 발화 시작: <ret> You’re right to question that—levels can be tricky— Ja
    45.37s  user  발화 끝
    46.00s  ⚡SPAN 주입 [d'=1.12s / d_lead=2.83s]: Jack Sock has competed in the Association of Tennis Professionals tour
    52.96s  user  발화 시작: Wait, so they’re on *different* tours? Does that mean one is
    52.97s  agent 발화 끝
    57.73s  agent 발화 시작: That’s a very astute point—
    57.86s  user  발화 끝
    59.06s  <ret> 발화 (turn10 첫 프레임)
    59.38s  agent 발화 시작: <ret> Both the ATP and WTA are considered top-tier professio
    59.48s  agent 발화 끝
    60.66s  ⚡SPAN 주입 [d'=1.60s / d_lead=5.65s]: The Association of Tennis Professionals and the Women's Tennis Associa
    65.00s  user  발화 시작: Okay, so both are professional, just… separate. That makes s
    65.03s  agent 발화 끝
    72.65s  user  발화 끝
