# v3_mcp_04_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: What's the latitude and longitude of the Sydney Opera House?
     2.60s  <ret> 발화 (turn1 첫 프레임)
     3.20s  agent 발화 시작: <ret> Let me share that with you. The Sydney Opera House’s c
     3.33s  user  발화 끝
     3.60s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.18s]: (tool result) The Sydney Opera House is at -33.8568 degrees latitude, 
    14.10s  agent 발화 끝
    14.25s  user  발화 시작: Hmm, that seems… off. Are you sure? I thought it was closer 
    20.43s  <ret> 발화 (turn3 첫 프레임)
    20.98s  agent 발화 시작: <ret> A precise check is always wise. That is correct—negati
    21.25s  user  발화 끝
    21.39s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.39s]: (tool result) The Sydney Opera House is at -33.8568 degrees latitude, 
    32.52s  agent 발화 끝
    34.37s  user  발화 시작: Okay, fine. Now, can you find me a flight from Lagos to Sydn
    39.53s  <ret> 발화 (turn5 첫 프레임)
    40.02s  user  발화 끝
    40.13s  agent 발화 시작: <ret> Certainly, let's examine options. Qatar Airways has th
    40.25s  ⚡SPAN 주입 [d'=0.72s / d_lead=1.54s]: (tool result) The cheapest flight is with Qatar Airways, departing 10:
    53.21s  agent 발화 끝
