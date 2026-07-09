# v3_mcp_04_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Could you please set the user agent to SuperCrawler version 
     5.96s  <ret> 발화 (turn1 첫 프레임)
     5.98s  user  발화 끝
     6.27s  agent 발화 시작: <ret> Certainly. The user agent has been updated as requeste
     7.00s  ⚡SPAN 주입 [d'=1.04s / d_lead=7.51s]: (tool result) The user agent is now set to SuperCrawler version 10.1.
     9.65s  user  발화 시작: Mhm.
    10.28s  user  발화 끝
    13.53s  user  발화 시작: Hmm, that seems… aggressive. Could we try something a little
    13.78s  agent 발화 끝
    21.08s  <ret> 발화 (turn4 첫 프레임)
    21.32s  agent 발화 시작: <ret> Of course. I’ve switched to the Mac Safari user agent.
    21.41s  user  발화 끝
    22.84s  ⚡SPAN 주입 [d'=1.76s / d_lead=8.25s]: (tool result) The user agent is now set to Mozilla/5.0 (Macintosh; Int
    29.53s  user  발화 시작: Yeah, that feels better. Now, uh, could you find me a good c
    29.57s  agent 발화 끝
    35.79s  user  발화 끝
