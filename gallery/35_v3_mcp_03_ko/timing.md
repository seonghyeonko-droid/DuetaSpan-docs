# v3_mcp_03_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 장바구니 iframe에서 결제 진행해 주세요.
     3.06s  <ret> 발화 (turn1 첫 프레임)
     3.28s  user  발화 끝
     3.30s  agent 발화 시작: <ret> 네, 쇼핑 카트 내에서 결제 과정이 시작됐습니다.
     4.50s  ⚡SPAN 주입 [d'=1.44s / d_lead=3.25s]: (tool result) The shopping cart iframe’s “Checkout” button was clicked
     7.00s  user  발화 시작: 총 비용이 배송비를 포함해서 얼마인지 알려 주시겠어요?
     7.10s  agent 발화 끝
    10.69s  <ret> 발화 (turn3 첫 프레임)
    10.98s  user  발화 끝
    11.01s  agent 발화 시작: <ret> 음, 잠깐만 확인해 볼게요… 배송비를 포함한 총 금액은 칠십팔 달러 오십 센트입니다.
    11.97s  ⚡SPAN 주입 [d'=1.28s / d_lead=3.48s]: (tool result) The checkout total is $78.50, including $8.50 for shippi
    16.99s  agent 발화 끝
    17.36s  user  발화 시작: SUMMER20 코드로 기프트 카드를 사용할 수 있을까요?
    20.56s  <ret> 발화 (turn5 첫 프레임)
    20.79s  agent 발화 시작: <ret> 바로 할인을 적용해 볼게요… 기프트 카드가 성공적으로 적용됐고, 새로운 총 금액은 오십팔 점 오 
    20.87s  user  발화 끝
    21.92s  ⚡SPAN 주입 [d'=1.36s / d_lead=2.53s]: (tool result) Gift card SUMMER20 was applied; the new total is $58.50.
    29.88s  agent 발화 끝
