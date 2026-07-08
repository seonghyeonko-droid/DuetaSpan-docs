# v3_mcp_03_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 장바구니 iframe에서 결제 진행해 주세요.
     2.98s  <ret> 발화 (turn1 첫 프레임)
     3.22s  agent 발화 시작: <ret> 네, 요청하신 대로 장바구니 안에서 결제 과정이 시작됐습니다.
     3.23s  user  발화 끝
     4.42s  ⚡SPAN 주입 [d'=1.44s / d_lead=3.30s]: (tool result) The shopping cart iframe’s checkout button was successfu
     7.57s  user  발화 시작: 총 비용이 얼마예요, 배송비 포함해서요?
     7.61s  agent 발화 끝
    10.10s  <ret> 발화 (turn3 첫 프레임)
    10.35s  agent 발화 시작: <ret> 잠시만 확인해 볼게요… 배송비를 포함한 총 금액은 칠십팔 달러 오십 센트입니다.
    10.38s  user  발화 끝
    12.10s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.38s]: (tool result) The total cost is $78.50, including $8.50 for shipping.
    16.38s  agent 발화 끝
    16.76s  user  발화 시작: 저장된 주소로 배송해 주실 수 있나요?
    19.56s  agent 발화 시작: 네, 저장된 주소는 일 이 삼 오크 스트리트, 애니타운입니다.
    19.57s  user  발화 끝
    23.77s  agent 발화 끝
    25.04s  user  발화 시작: 네, 맞아요. 주문 확인해 주세요.
    27.49s  <ret> 발화 (turn7 첫 프레임)
    27.72s  agent 발화 시작: <ret> 알겠습니다, 주문을 확인해 드릴게요… 주문이 확인됐고, 주문 번호는 구 팔칠 육 오오이며 저장된 
    27.86s  user  발화 끝
    29.25s  ⚡SPAN 주입 [d'=1.76s / d_lead=3.63s]: (tool result) Order confirmed with ID 98765; shipping to 123 Oak Stree
    37.41s  agent 발화 끝
