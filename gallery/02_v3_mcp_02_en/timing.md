# v3_mcp_02_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Begin watching for a weather update from weather dot example
     3.80s  <ret> 발화 (turn1 첫 프레임)
     4.03s  agent 발화 시작: <ret> Certainly, I can monitor that site for you. Currently 
     4.26s  user  발화 끝
     5.08s  ⚡SPAN 주입 [d'=1.28s / d_lead=3.31s]: (tool result) The website reports current conditions in London are 15 
    11.49s  agent 발화 끝
    12.89s  user  발화 시작: Oh, that’s… actually pretty good. I was expecting worse, hon
    17.23s  agent 발화 시작: [laugh] London weather can be surprisingly mild, even in aut
    17.29s  user  발화 끝
    21.95s  agent 발화 끝
    21.96s  user  발화 시작: Can you book me a train from London to Edinburgh for next Tu
    25.41s  <ret> 발화 (turn5 첫 프레임)
    25.64s  agent 발화 시작: <ret> I can certainly check train availability for you. Ther
    25.84s  user  발화 끝
    27.09s  ⚡SPAN 주입 [d'=1.68s / d_lead=3.18s]: (tool result) A train is available departing London at 10:00 AM, arriv
    35.82s  user  발화 시작: Perfect, book it for me.
    35.98s  agent 발화 끝
    37.66s  <ret> 발화 (turn7 첫 프레임)
    37.80s  user  발화 끝
    37.81s  agent 발화 시작: <ret> I’m happy to finalize that reservation. Your train to 
    39.66s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.00s]: (tool result) Your train from London to Edinburgh is confirmed for nex
    47.82s  agent 발화 끝
