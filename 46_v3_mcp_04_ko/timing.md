# v3_mcp_04_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Could you please set the user agent to SuperCrawler version 
     3.59s  <ret> 발화 (turn1 첫 프레임)
     3.99s  agent 발화 시작: <ret> Of course. I can certainly adjust the browser’s user a
     4.02s  user  발화 끝
     5.59s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.58s]: (tool result) The user agent was successfully set to SuperCrawler vers
     8.47s  agent 발화 시작: The user agent is now SuperCrawler version ten point one, as
     8.57s  agent 발화 끝
    12.29s  user  발화 시작: Mhm.
    12.92s  user  발화 끝
    16.91s  agent 발화 끝
    16.94s  user  발화 시작: Hmm, that seems… aggressive. Could you change it back to the
    20.66s  <ret> 발화 (turn5 첫 프레임)
    20.97s  agent 발화 시작: <ret> [sigh] Sometimes a bolder approach isn't quite right, 
    21.20s  user  발화 끝
    22.66s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.49s]: (tool result) The user agent was successfully reset to the default bro
    25.34s  agent 발화 시작: The user agent has been restored to its default setting. Doe
    25.46s  agent 발화 끝
    31.82s  agent 발화 끝
