# v3_mcp_03_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 장바구니 iframe에서 결제 과정 시작해 주세요.
     3.55s  <ret> 발화 (turn1 첫 프레임)
     3.78s  agent 발화 시작: <ret> 네, 쇼핑 카트 내에서 결제 과정을 시작했습니다.
     3.84s  user  발화 끝
     4.99s  ⚡SPAN 주입 [d'=1.44s / d_lead=3.42s]: (tool result) The shopping cart iframe’s checkout button was clicked s
     7.17s  user  발화 시작: 총 비용이 얼마인가요, 배송비 포함해서요?
     7.20s  agent 발화 끝
    10.12s  <ret> 발화 (turn3 첫 프레임)
    10.40s  user  발화 끝
    10.43s  agent 발화 시작: <ret> 잠시만 주문 총액을 확인해 볼게요. 총 금액은 이십칠 파운드 오십 펜스입니다, 배송비 포함해서요.
    11.72s  ⚡SPAN 주입 [d'=1.60s / d_lead=4.85s]: (tool result) The total order cost is twenty-seven pounds and fifty pe
    16.74s  agent 발화 끝
    17.06s  user  발화 시작: 제 배송 주소가 아직 12 Oak Street이 맞는지 확인해 주시겠어요?
    21.64s  user  발화 끝
    21.64s  agent 발화 시작: 네, 현재 등록된 배송 주소는 12 Oak Street이 맞습니다. 필요하시면 변경해 드릴 수 있습니다.
    27.62s  agent 발화 끝
    28.86s  user  발화 시작: 아니요, 괜찮습니다. 그냥 주문을 진행해 주세요.
    32.39s  agent 발화 시작: 알겠습니다. 지금 주문을 제출하고 있습니다. 곧 이메일로 확인 메일이 도착할 거예요. 세부 사항을 다시 확인
    32.42s  user  발화 끝
    44.50s  agent 발화 끝
