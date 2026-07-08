# v3_rag_27_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Do you know anything about Lux Aurunque? I've been reading a
     4.06s  <ret> 발화 (turn1 첫 프레임)
     4.29s  agent 발화 시작: <ret> That's a fascinating figure from Roman history… Lux Au
     4.45s  user  발화 끝
     5.50s  ⚡SPAN 주입 [d'=1.44s / d_lead=2.55s]: Lux Aurunque was a Roman bronze sculptor who lived and worked in the 1
    12.68s  agent 발화 끝
    12.73s  user  발화 시작: Oh, first century AD, so… when was he actually born? I— I me
    18.24s  <ret> 발화 (turn3 첫 프레임)
    18.55s  agent 발화 시작: <ret> Determining precise birthdates from that era is always
    18.71s  user  발화 끝
    20.24s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.73s]: Lux Aurunque was born in seventy AD in Rome, Italy.
    26.23s  user  발화 시작: Seventy AD. That’s quite a while ago, isn’t it? Were his scu
    26.43s  agent 발화 끝
    32.48s  user  발화 끝
    32.52s  agent 발화 시작: His work was highly regarded, though sadly, very few example
    39.43s  agent 발화 끝
    40.14s  user  발화 시작: That *is* a shame. But seventy AD... so he lived during the 
    46.76s  user  발화 끝
