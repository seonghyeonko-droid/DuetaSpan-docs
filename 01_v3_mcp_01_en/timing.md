# v3_mcp_01_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: I need two one-way tickets from Los Angeles to New York on A
     6.79s  <ret> 발화 (turn1 첫 프레임)
     7.38s  agent 발화 시작: <ret> Let’s find those for you. United Airlines offers two p
     7.41s  user  발화 끝
     7.43s  ⚡SPAN 주입 [d'=0.64s / d_lead=2.21s]: (tool result) United Airlines has flights available for 375 dollars ea
    18.01s  agent 발화 끝
    18.05s  user  발화 시작: Uh, that’s a little more than I wanted to spend. Are there a
    22.80s  <ret> 발화 (turn3 첫 프레임)
    23.39s  agent 발화 시작: <ret> Finding cheaper flights can be tricky, but let's check
    23.42s  user  발화 끝
    23.80s  ⚡SPAN 주입 [d'=1.00s / d_lead=3.51s]: (tool result) American Airlines has economy seats available for 289 do
    26.45s  agent 발화 시작: American Airlines has economy seats available on April twent
    26.91s  agent 발화 끝
    34.75s  agent 발화 끝
