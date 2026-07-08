# v3_chain_06_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 거래 ID 이이일로 주문 번호 일만 이천 삼백 사십오 배송 완료 처리해 주세요.
     5.48s  <ret> 발화 (turn1 첫 프레임)
     5.48s  ⚡SPAN 주입 [d'=0.00s / d_lead=0.43s]: (tool result) Shipment 12345 is now marked as delivered with transacti
     5.84s  user  발화 끝
     6.08s  agent 발화 시작: <ret> 네, 주문 번호 만 이천 삼백 사십오 건은 배송 완료된 것으로 확인되었습니다.
    11.27s  agent 발화 끝
    11.38s  user  발화 시작: 그 주문의 배송 주소를 알려 주실 수 있을까요?
    13.74s  <ret> 발화 (turn3 첫 프레임)
    14.33s  user  발화 끝
    14.34s  agent 발화 시작: <ret> 알아볼 수 있습니다— 주문 번호 만 이천 삼백 사십오 건의 배송 주소는 캘리포니아 주 애니타운 엘
    14.70s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.20s]: (tool result) The delivery address for order 12345 is 42 Elm Street, A
    19.15s  user  발화 시작: 음.
    19.70s  user  발화 끝
    25.34s  agent 발화 끝
    25.44s  user  발화 시작: 잠시만요— 혹시 그거 급배송으로 발송됐었나요?
    29.25s  agent 발화 시작: 네, 주문 번호 만 이천 삼백 사십오 건은 급배송으로 발송되었습니다.
    29.28s  user  발화 끝
    33.68s  agent 발화 끝
    35.82s  user  발화 시작: 알겠습니다, 좋네요. 그리고 총 배송비는 얼마였나요?
    39.56s  user  발화 끝
