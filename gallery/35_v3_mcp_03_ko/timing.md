# v3_mcp_03_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 장바구니 iframe에서 결제 과정 시작해 주세요.
     3.35s  <ret> 발화 (turn1 첫 프레임)
     3.58s  agent 발화 시작: <ret> 알겠습니다, 장바구니에서 결제 과정을 시작했습니다.
     3.60s  user  발화 끝
     4.79s  ⚡SPAN 주입 [d'=1.44s / d_lead=3.47s]: (tool result) The shopping cart iframe’s “Checkout” button was clicked
     7.00s  user  발화 시작: 총 결제 금액이 얼마인가요?
     7.05s  agent 발화 끝
     9.20s  <ret> 발화 (turn3 첫 프레임)
     9.49s  user  발화 끝
     9.51s  agent 발화 시작: <ret> 잠시만요, 주문 총액을 확인해 드릴게요. 현재 주문 총액은 일백이십오 달러 오십 센트입니다.
    11.20s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.25s]: (tool result) The order total is $125.50, including shipping.
    17.02s  agent 발화 끝
    17.38s  user  발화 시작: SUMMER20 코드로 기프트 카드를 사용할 수 있을까요?
    20.70s  <ret> 발화 (turn5 첫 프레임)
    20.86s  agent 발화 시작: <ret> 네, 기프트 카드를 적용해 드릴게요. 기프트 카드가 적용되었고, 총액은 일백오 달러 오십 센트로 
    20.98s  user  발화 끝
    22.70s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.77s]: (tool result) Gift card SUMMER20 applied; new total is $105.50.
    28.27s  agent 발화 끝
    29.54s  user  발화 시작: 주문 확인해 주세요.
    31.36s  agent 발화 시작: 네, 주문을 확인해 드릴게요. 마치 대성당 아치에 마지막 돌을 놓는 것처럼, 모든 것이 제자리에 있는 것이 
    31.47s  user  발화 끝
    39.76s  agent 발화 끝
