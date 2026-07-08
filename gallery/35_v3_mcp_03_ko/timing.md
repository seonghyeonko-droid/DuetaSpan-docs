# v3_mcp_03_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 장바구니 iframe에서 결제 진행해 주세요.
     3.62s  <ret> 발화 (turn1 첫 프레임)
     3.86s  agent 발화 시작: <ret> 네, 요청하신 대로 결제 과정을 시작했습니다.
     3.88s  user  발화 끝
     5.06s  ⚡SPAN 주입 [d'=1.44s / d_lead=3.23s]: (tool result) The checkout button in the shopping cart iframe was succ
     5.66s  user  발화 시작: 맞아요.
     6.47s  user  발화 끝
     7.09s  agent 발화 끝
     7.17s  user  발화 시작: 장바구니에 있는 모든 물건의 총 비용은 얼마인가요?
    10.62s  <ret> 발화 (turn4 첫 프레임)
    10.93s  agent 발화 시작: <ret> 주문 총액을 확인하고 있습니다. 현재 주문 총액은 일백이십오 달러 오십 센트입니다.
    11.05s  user  발화 끝
    12.62s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.01s]: (tool result) Your cart total is $125.50, including shipping and taxes
    16.45s  agent 발화 끝
