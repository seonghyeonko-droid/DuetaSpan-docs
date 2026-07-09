# v3_mcp_04_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Could you please set the user agent to SuperCrawler version 
     4.60s  <ret> 발화 (turn1 첫 프레임)
     4.91s  agent 발화 시작: <ret> Certainly, I can adjust the browser settings for you. 
     5.14s  user  발화 끝
     5.56s  ⚡SPAN 주입 [d'=0.96s / d_lead=3.30s]: (tool result) The user agent is now set to SuperCrawler version 10.1.
    13.35s  agent 발화 끝
    13.37s  user  발화 시작: Hmm, that seems… aggressive. Can you change it back to the d
    17.36s  <ret> 발화 (turn3 첫 프레임)
    17.60s  agent 발화 시작: <ret> Of course, reverting to the standard settings is simpl
    17.71s  user  발화 끝
    18.48s  ⚡SPAN 주입 [d'=1.12s / d_lead=3.49s]: (tool result) The user agent has been reset to the default browser set
    26.91s  agent 발화 끝
