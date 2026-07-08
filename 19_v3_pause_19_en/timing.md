# v3_pause_19_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Do you know who won MasterChef USA in two thousand and fourt
     3.40s  <ret> 발화 (turn1 첫 프레임)
     3.99s  agent 발화 시작: <ret> That was a memorable season. Luca Manfè took the title
     4.16s  user  발화 끝
     4.40s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.90s]: Luca Manfè won MasterChef USA in 2014.
    11.60s  agent 발화 끝
    11.94s  user  발화 시작: And Natasha? What happened with her— I— I mean…
    15.59s  user  발화 끝
    15.89s  agent 발화 시작: She was a strong competitor, certainly.
    18.20s  agent 발화 끝
    18.24s  user  발화 시작: So I was thinking… about the whole trip, actually. Did she p
    22.58s  <ret> 발화 (turn5 첫 프레임)
    22.58s  ⚡SPAN 주입 [d'=0.00s / d_lead=1.92s]: Luca Manfè won MasterChef USA in 2014; Natasha Celis was the runner-up
    23.17s  agent 발화 시작: <ret> Let me recall the details. Natasha Celis finished as t
    23.29s  user  발화 끝
    31.07s  user  발화 시작: Oh, okay. That makes sense. Thanks!
    31.23s  agent 발화 끝
    33.94s  user  발화 끝
