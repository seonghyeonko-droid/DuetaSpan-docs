# v3_mcp_03_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 장바구니 iframe에서 결제 진행해 주세요.
     3.53s  <ret> 발화 (turn1 첫 프레임)
     3.77s  agent 발화 시작: <ret> 네, 요청하신 대로 쇼핑 카트 iframe 안에서 결제 과정이 시작됐습니다.
     3.79s  user  발화 끝
     4.97s  ⚡SPAN 주입 [d'=1.44s / d_lead=4.00s]: (tool result) The shopping cart iframe’s “Checkout” button was clicked
     8.69s  user  발화 시작: 총 결제 금액이 얼마인가요?
     8.77s  agent 발화 끝
    10.56s  <ret> 발화 (turn3 첫 프레임)
    10.85s  user  발화 끝
    10.87s  agent 발화 시작: <ret> 잠시만 확인해 볼게요. 배송비를 포함해서 총 일백이십오 달러 오십 센트입니다.
    12.16s  ⚡SPAN 주입 [d'=1.60s / d_lead=5.00s]: (tool result) The total amount due is $125.50, including shipping.
    17.12s  agent 발화 끝
    17.43s  user  발화 시작: 제 배송 주소가 아직 14 Oak Street이 맞는지 확인해 주시겠어요?
    22.10s  user  발화 끝
    22.13s  agent 발화 시작: 네, 등록된 배송 주소는 14 Oak Street이 맞습니다. 필요하시면 변경해 드릴 수도 있습니다.
    28.80s  agent 발화 끝
    30.07s  user  발화 시작: 아니요, 괜찮습니다. 구매를 완료해 주세요.
    32.64s  <ret> 발화 (turn7 첫 프레임)
    32.88s  agent 발화 시작: <ret> 알겠습니다, 주문을 완료해 드릴게요. 구매가 완료되었습니다. 주문 번호는 칠십만 팔천구백사십육입니
    33.02s  user  발화 끝
    34.64s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.45s]: (tool result) The purchase was completed; order number is 789456.
    40.66s  agent 발화 끝
