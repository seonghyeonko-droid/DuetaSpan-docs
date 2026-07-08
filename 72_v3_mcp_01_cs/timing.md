# v3_mcp_01_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 나 LA에서 뉴욕 가는 편도 티켓 두 장 알아봐 줘. 4월 22일에 프리미엄 이코노미로.
     5.23s  <ret> 발화 (turn1 첫 프레임)
     5.31s  ⚡SPAN 주입 [d'=0.08s / d_lead=2.87s]: (tool result) United Airlines has flights available for 375 dollars ea
     5.83s  agent 발화 시작: <ret> 네, 찾아볼게요. 유나이티드 항공에서 프리미엄 이코노미 좌석이 두 개 있어요. 오전 8시 15분,
     6.03s  user  발화 끝
    18.44s  agent 발화 끝
    18.50s  user  발화 시작: 음, 좀 비싸네. 300달러 밑으로 가는 거 있어?
    22.23s  <ret> 발화 (turn3 첫 프레임)
    22.83s  agent 발화 시작: <ret> 알아보는 게 좀 어려울 수도 있는데, 확인해 볼게요.
    22.95s  user  발화 끝
    23.23s  ⚡SPAN 주입 [d'=1.00s / d_lead=3.24s]: (tool result) American Airlines has economy seats available for 289 do
    25.76s  agent 발화 시작: 아메리칸 항공에서 4월 22일에 오전 6시에 출발하는 이코노미 좌석이 289달러에 있대요.
    26.07s  agent 발화 끝
    32.43s  agent 발화 끝
