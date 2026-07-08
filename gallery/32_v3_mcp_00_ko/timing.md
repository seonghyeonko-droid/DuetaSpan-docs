# v3_mcp_00_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 주문 취소해 줘.
     0.85s  <ret> 발화 (turn1 첫 프레임)
     1.25s  ⚡SPAN 주입 [d'=0.40s / d_lead=0.56s]: (tool result) The order with ID 78945 has been cancelled.
     1.31s  agent 발화 시작: <ret> 네, 요청하신 대로 주문 번호 칠만 팔천구백사십오 건이 취소됐습니다.
     1.51s  user  발화 끝
     6.29s  user  발화 시작: 아, 다행이다. 음, 그 주문에 뭐가 들어 있었는지 기억 안 나는데?
     6.31s  agent 발화 끝
    11.12s  agent 발화 시작: 아소 오케 천 세 폭이랑 상아 팔찌 세트가 포함되어 있었습니다.
    11.15s  user  발화 끝
    14.12s  user  발화 시작: 응.
    14.57s  user  발화 끝
    15.49s  user  발화 시작: 다른 주문이 아직 남아 있는지 확인해 줄 수 있어?
    15.98s  agent 발화 끝
    18.52s  <ret> 발화 (turn6 첫 프레임)
    19.11s  agent 발화 시작: <ret> 잠시만 확인해 볼게요… 현재 미처리된 주문이 한 건 남아 있습니다.
    19.23s  user  발화 끝
    19.52s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.41s]: (tool result) You have one open order.
    23.83s  agent 발화 끝
    24.96s  user  발화 시작: 알겠어, 그거 알아두면 좋겠다.
    27.68s  user  발화 끝
