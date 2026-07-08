# v3_chain_05_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: I want to share my location with Frank Martinez.
     2.46s  <ret> 발화 (turn1 첫 프레임)
     2.62s  ⚡SPAN 주입 [d'=0.16s / d_lead=0.39s]: (tool result) Location sharing request sent to Frank Martinez.
     2.95s  user  발화 끝
     3.05s  agent 발화 시작: <ret> Certainly. I’ve sent a location sharing request to Fra
     6.98s  agent 발화 끝
     7.10s  user  발화 시작: Uh, great. How long does that last?
     8.56s  <ret> 발화 (turn3 첫 프레임)
     9.16s  agent 발화 시작: <ret> That’s a good question. Your location sharing with Fra
     9.17s  user  발화 끝
     9.56s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.48s]: (tool result) Location sharing will expire in one hour.
    14.71s  agent 발화 끝
    15.31s  user  발화 시작: Okay, can we extend that to four hours?
    17.18s  <ret> 발화 (turn5 첫 프레임)
    17.18s  ⚡SPAN 주입 [d'=0.00s / d_lead=0.40s]: (tool result) Location sharing duration extended to four hours.
    17.79s  agent 발화 시작: <ret> Absolutely. I’ve extended the location sharing with Fr
    17.90s  user  발화 끝
    22.43s  user  발화 시작: Perfect, thanks!
    22.60s  agent 발화 끝
    23.46s  agent 발화 시작: You’re very welcome. It's always good to stay connected, esp
    23.57s  user  발화 끝
    30.67s  agent 발화 끝
