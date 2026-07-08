# v3_mcp_02_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Begin watching for a weather update from weather dot example
     3.63s  <ret> 발화 (turn1 첫 프레임)
     3.86s  agent 발화 시작: <ret> Certainly, I can monitor that website for you. Right n
     4.07s  user  발화 끝
     4.91s  ⚡SPAN 주입 [d'=1.28s / d_lead=3.22s]: (tool result) The website reports current conditions in London are 15 
    11.51s  agent 발화 끝
    12.84s  user  발화 시작: Oh, that’s… well, that’s good to know, actually. I was hopin
    18.18s  agent 발화 시작: [interrupting] Is that for planning a walk, perhaps?
    18.21s  user  발화 끝
    21.20s  user  발화 시작: Yeah, exactly! Is it supposed to clear up later?
    21.23s  agent 발화 끝
    24.56s  <ret> 발화 (turn5 첫 프레임)
    24.80s  agent 발화 시작: <ret> Let me check the hourly forecast for London. Sunshine 
    25.04s  user  발화 끝
    26.24s  ⚡SPAN 주입 [d'=1.68s / d_lead=2.90s]: (tool result) The forecast shows sunshine arriving in London at 3 PM, 
    32.99s  user  발화 시작: Wonderful! That’s perfect. I think I’ll head out then. Thank
    33.15s  agent 발화 끝
    37.76s  user  발화 끝
