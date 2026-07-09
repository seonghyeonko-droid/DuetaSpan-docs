# v3_mcp_00_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Can you give me the coordinates for the Eiffel Tower in Pari
     3.05s  <ret> 발화 (turn1 첫 프레임)
     3.29s  agent 발화 시작: <ret> Let me quickly pinpoint that landmark for you. Those c
     3.37s  user  발화 끝
     4.01s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.90s]: (tool result) The Eiffel Tower is located at 48.8584° N, 2.2945° E.
    14.41s  user  발화 시작: Great. And can you find me hotels near that location?
    14.51s  agent 발화 끝
    17.31s  <ret> 발화 (turn3 첫 프레임)
    17.70s  agent 발화 시작: <ret> Certainly, I can search for nearby accommodations. Hot
    17.97s  user  발화 끝
    19.31s  ⚡SPAN 주입 [d'=2.00s / d_lead=2.56s]: (tool result) Hotel Plaza Athénée is 0.8 km away, with prices starting
    21.55s  user  발화 시작: Yeah.
    22.05s  user  발화 끝
    27.53s  user  발화 시작: That’s a bit pricey. Anything cheaper?
    27.57s  agent 발화 끝
    30.06s  <ret> 발화 (turn6 첫 프레임)
    30.37s  agent 발화 시작: <ret> I understand, let’s explore some more affordable optio
    30.48s  user  발화 끝
    31.42s  ⚡SPAN 주입 [d'=1.36s / d_lead=3.47s]: (tool result) Hotel Eiffel Turenne is 0.9 km away, costing 180 euros p
    36.44s  agent 발화 끝
