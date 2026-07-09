# v3_mcp_04_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Could you please set the user agent to SuperCrawler version 
     4.25s  <ret> 발화 (turn1 첫 프레임)
     4.57s  agent 발화 시작: <ret> I can certainly adjust your browser settings… Your bro
     4.72s  user  발화 끝
     5.21s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.70s]: (tool result) The user agent is now set to SuperCrawler version 10.1.
     7.70s  user  발화 시작: Mhm.
     8.20s  user  발화 끝
    11.52s  agent 발화 끝
    12.29s  user  발화 시작: Hmm, does that actually change how websites see me— I— I mea
    19.07s  <ret> 발화 (turn4 첫 프레임)
    19.30s  agent 발화 시작: <ret> Let’s verify your public IP address to confirm… Your c
    19.42s  user  발화 끝
    20.19s  ⚡SPAN 주입 [d'=1.12s / d_lead=3.84s]: (tool result) Your public IP address is 203.0.113.42.
    29.37s  agent 발화 끝
    29.66s  user  발화 시작: Okay, good. So it *didn’t* change. I was worried it might— b
    34.49s  agent 발화 시작: It’s perfectly natural to double-check, especially with chan
    34.66s  user  발화 끝
    41.76s  agent 발화 끝
