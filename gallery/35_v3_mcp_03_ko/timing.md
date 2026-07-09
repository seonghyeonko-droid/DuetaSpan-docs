# v3_mcp_03_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 장바구니 iframe에서 결제 과정 시작해 주세요.
     3.48s  <ret> 발화 (turn1 첫 프레임)
     3.70s  user  발화 끝
     3.72s  agent 발화 시작: <ret> 네, 장바구니 안에서 결제 과정을 시작했습니다.
     4.92s  ⚡SPAN 주입 [d'=1.44s / d_lead=3.42s]: (tool result) The checkout button in the shopping cart iframe was clic
     7.07s  user  발화 시작: 주문 총액이 얼마인가요?
     7.14s  agent 발화 끝
     8.96s  <ret> 발화 (turn3 첫 프레임)
     9.27s  agent 발화 시작: <ret> 잠시 주문 정보를 확인해 볼게요. 배송비를 포함해서 총 백이십오 점 오 영 달러 오십 센트입니다.
     9.28s  user  발화 끝
    10.56s  ⚡SPAN 주입 [d'=1.60s / d_lead=5.78s]: (tool result) The total order cost is $125.50, including shipping.
    16.50s  agent 발화 끝
    16.84s  user  발화 시작: 제 배송 주소가 여전히 오크 스트리트 14번지 맞나요?
    20.86s  user  발화 끝
    20.93s  agent 발화 시작: 네, 고객님의 배송 주소는 오크 스트리트 14번지로 등록되어 있습니다. 북쪽 회랑 복원 계획서를 그쪽으로 보
    27.76s  user  발화 시작: 맞아요.
    28.43s  user  발화 끝
    29.98s  agent 발화 끝
    31.30s  user  발화 시작: 배송을 조금 더 빠르게 받을 수 있을까요?
    33.95s  <ret> 발화 (turn8 첫 프레임)
    34.19s  agent 발화 시작: <ret> 물론입니다, 더 빠른 배송 옵션을 확인해 볼게요. 오크 스트리트 14번지로 배송하는 빠른 배송은 
    34.21s  user  발화 끝
    35.95s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.10s]: (tool result) Two-day shipping to 14 Oak Street is available for an ad
    42.40s  agent 발화 끝
