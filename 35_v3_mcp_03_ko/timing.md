# v3_mcp_03_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# EXAMINER(FDB-v2) 단계: S1 장바구니 iframe에서 결제 과정 시작해 주세요. | S2 주문 총액이 얼마예요? | S3 내일 아침에 택배를 예약해 주실 수 있나요? | S4 정말 감사합니다.

     0.00s  user  발화 시작: 장바구니 iframe에서 결제 과정 시작해 주세요.
     3.69s  <ret> 발화 (turn1 첫 프레임)
     3.93s  user  발화 끝
     3.93s  agent 발화 시작: <ret> 네, 장바구니 안에서 결제 과정을 시작했습니다.
     5.13s  ⚡SPAN 주입 [d'=1.44s / d_lead=3.56s]: (tool result) The checkout button in the shopping cart iframe was clic
     7.39s  user  발화 시작: 주문 총액이 얼마예요?
     7.49s  agent 발화 끝
     9.08s  <ret> 발화 (turn3 첫 프레임)
     9.37s  user  발화 끝
     9.39s  agent 발화 시작: <ret> 잠시 주문 정보를 확인해 볼게요. 주문 총액은 스물아홉 파운드 오십 펜스입니다.
    10.68s  ⚡SPAN 주입 [d'=1.60s / d_lead=5.38s]: (tool result) The order total is twenty-nine pounds and fifty pence.
    15.31s  agent 발화 끝
    15.66s  user  발화 시작: 내일 아침에 택배를 예약해 주실 수 있나요?
    18.19s  <ret> 발화 (turn5 첫 프레임)
    18.43s  agent 발화 시작: <ret> 네, 택배 예약을 도와드릴 수 있습니다. 내일 아홉 시에 택배가 예약되었고, 추적 번호는 ABC1
    18.52s  user  발화 끝
    20.19s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.09s]: (tool result) A courier is booked for tomorrow at nine AM, tracking nu
    23.92s  user  발화 시작: 어머.
    24.60s  user  발화 끝
    26.35s  agent 발화 끝
    27.66s  user  발화 시작: 정말 감사합니다.
    29.32s  user  발화 끝
