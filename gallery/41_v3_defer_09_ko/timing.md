# v3_defer_09_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 방 세 개를 샌디에이고 오션 뷰 호텔에서 2월 10일부터 7박으로 예약해 줘.
     5.25s  <ret> 발화 (turn1 첫 프레임)
     5.41s  agent 발화 시작: <ret> 네, 예약을 확인해 드렸습니다. 2월 10일부터 17일까지 방 세 개가 예약됐습니다.
     5.60s  user  발화 끝
     7.25s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.25s]: (tool result) Hotel reservation confirmed for three rooms at Ocean Vie
    11.24s  agent 발화 끝
    12.04s  user  발화 시작: 어, 취소 정책은 뭔데?
    13.14s  <ret> 발화 (turn3 첫 프레임)
    13.46s  agent 발화 시작: <ret> 확인해 보시는 건 정말 중요하죠. 2월 3일까지는 전액 환불이 가능하고, 그 이후로는 환불이 안 
    13.66s  user  발화 끝
    15.14s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.81s]: (tool result) Cancellation is permitted up to February third with a fu
    21.42s  user  발화 시작: 그래. 확인서를 나한테 보내 줄 수 있어?
    21.47s  agent 발화 끝
    23.72s  <ret> 발화 (turn5 첫 프레임)
    23.80s  agent 발화 시작: <ret> 물론 그렇게 해 드릴 수 있습니다. 확인서가 모든 세부 사항과 함께 고객님의 주소로 이메일로 보내
    24.04s  user  발화 끝
    25.24s  ⚡SPAN 주입 [d'=1.52s / d_lead=3.14s]: (tool result) Email sent to user’s email address with subject “Ocean V
    30.52s  agent 발화 끝
