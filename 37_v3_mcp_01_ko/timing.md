# v3_mcp_01_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 야, 로스앤젤레스에서 뉴욕 가는 편도 티켓 두 장, 4월 22일에 프리미엄 이코노미로 부탁해.
     5.33s  <ret> 발화 (turn1 첫 프레임)
     5.93s  agent 발화 시작: <ret> 음, 유나이티드 항공에서 프리미엄 이코노미 좌석이 두 개 있는데, 오전 8시 15분이랑 11시 4
     6.11s  user  발화 끝
     6.33s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.73s]: (tool result) United Airlines has flights available for 375 dollars ea
    16.32s  agent 발화 끝
    16.52s  user  발화 시작: 어, 좀 비싸네. 300달러 밑으로 가는 거 있어?
    18.78s  <ret> 발화 (turn3 첫 프레임)
    19.38s  agent 발화 시작: <ret> 네, 좀 어렵겠지만 찾아볼게요.
    19.66s  user  발화 끝
    19.74s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.07s]: (tool result) American Airlines has economy seats available for 289 do
    21.45s  agent 발화 끝
    21.71s  agent 발화 시작: 아메리칸 항공에서 4월 22일에 오전 6시에 출발하는 이코노미 좌석이 289달러에 있네요.
    28.57s  agent 발화 끝
