# v3_defer_09_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 방 세 개를 샌디에이고 오션 뷰 호텔에서 2월 10일부터 7박으로 예약해 줘.
     5.25s  <ret> 발화 (turn1 첫 프레임)
     5.41s  agent 발화 시작: <ret> 네, 예약 정보 확인해 드릴게요. 2월 10일부터 7박, 오션 뷰 호텔 방 세 개, 총 금액은 2
     5.61s  user  발화 끝
     7.25s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.66s]: (tool result) Reservation confirmed for three rooms at Ocean View Hote
    15.89s  agent 발화 끝
    16.70s  user  발화 시작: 어… 확인 이메일 좀 보내 줄래?
    18.46s  <ret> 발화 (turn3 첫 프레임)
    18.78s  agent 발화 시작: <ret> 물론이죠, 바로 처리해 드릴게요. 예약하신 모든 내용을 담은 확인 이메일을 등록된 주소로 보내 드
    18.96s  user  발화 끝
    19.42s  ⚡SPAN 주입 [d'=0.96s / d_lead=4.13s]: (tool result) Confirmation email sent to the address associated with y
    25.98s  user  발화 시작: 좋아. 그때 샌디에이고 날씨 예보는 어때?
    26.01s  agent 발화 끝
    28.64s  agent 발화 시작: 잠시만 확인해 드릴게요.
    28.89s  user  발화 끝
    29.48s  user  발화 시작: 응.
    29.88s  user  발화 끝
    30.34s  ⚡지연 SPAN 주입(선제발표 직전): (tool result) The forecast for San Diego, February tenth through seven
    30.42s  user  발화 시작: 고마워.
    30.52s  agent 발화 끝
    30.94s  agent 발화 시작: <ret> 약속드린 대로 날씨 예보 정보를 알려 드릴게요. 샌디에이고는 머무시는 동안 화창한 날씨가 이어질 
    31.05s  user  발화 끝
    45.41s  agent 발화 끝
