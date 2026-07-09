# v3_mcp_04_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Could you please set the user agent to SuperCrawler version 
     4.44s  <ret> 발화 (turn1 첫 프레임)
     4.75s  agent 발화 시작: <ret> Certainly, I can adjust the browser settings for you. 
     4.96s  user  발화 끝
     5.40s  ⚡SPAN 주입 [d'=0.96s / d_lead=3.61s]: (tool result) The user agent is now set to SuperCrawler version 10.1.
    13.98s  agent 발화 끝
    14.02s  user  발화 시작: Hmm, that sounds… aggressive. Could you change it to somethi
    21.77s  <ret> 발화 (turn3 첫 프레임)
    22.01s  agent 발화 시작: <ret> Of course, a more subtle approach is perfectly reasona
    22.09s  user  발화 끝
    22.89s  ⚡SPAN 주입 [d'=1.12s / d_lead=3.79s]: (tool result) The user agent is now set to Mozilla/5.0 (iPhone; CPU iP
    26.14s  user  발화 시작: Right.
    26.63s  user  발화 끝
    31.65s  user  발화 시작: Perfect. That's much better. Now, uh, do you think a raspber
    31.70s  agent 발화 끝
    39.12s  agent 발화 시작: [laugh] Absolutely! The bright tang of raspberry cuts throug
    39.20s  user  발화 끝
    46.07s  agent 발화 끝
