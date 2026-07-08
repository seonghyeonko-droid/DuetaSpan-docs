# v3_mcp_04_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Could you please set the user agent to SuperCrawler version 
     4.41s  <ret> 발화 (turn1 첫 프레임)
     4.72s  agent 발화 시작: <ret> Certainly, altering the browser’s identification— I ha
     4.91s  user  발화 끝
     5.85s  ⚡SPAN 주입 [d'=1.44s / d_lead=2.46s]: (tool result) The user agent is now set to SuperCrawler version 10.1.
    13.57s  agent 발화 끝
    13.59s  user  발화 시작: Hmm, is that actually working? Can you check what the curren
    18.67s  <ret> 발화 (turn3 첫 프레임)
    18.75s  agent 발화 시작: <ret> Let me verify that change for you— Yes, it is. The cur
    18.87s  user  발화 끝
    20.67s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.12s]: (tool result) The current user agent is SuperCrawler version 10.1.
    28.00s  user  발화 시작: Okay, good. Now, could you search for restaurants near the L
    28.11s  agent 발화 끝
    32.76s  <ret> 발화 (turn5 첫 프레임)
    32.84s  agent 발화 시작: <ret> Of course, finding dining options nearby— I found thre
    33.00s  user  발화 끝
    33.26s  ⚡SPAN 주입 [d'=0.50s / d_lead=2.90s]: (tool result) Restaurants near the Louvre: Le Fumoir (French, 4.5 star
    42.02s  agent 발화 끝
