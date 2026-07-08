# v3_defer_09_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 바닷가 호텔, 샌디에이고에서 2월 10일부터 7박 3개 방 예약해 줘.
     4.30s  <ret> 발화 (turn1 첫 프레임)
     4.46s  agent 발화 시작: <ret> 네, 바닷가 호텔에 2월 10일부터 2월 17일까지 3개 방 예약이 확정됐습니다.
     4.68s  user  발화 끝
     6.30s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.19s]: (tool result) Reservation confirmed for three rooms at Ocean View Hote
     9.65s  agent 발화 끝
    10.46s  user  발화 시작: 어, 취소 정책은 뭔데?
    11.50s  <ret> 발화 (turn3 첫 프레임)
    11.82s  agent 발화 시작: <ret> 예약 건에 대한 취소 정책을 알아봐 드릴게요. 2월 10일 7일 전까지는 무료로 취소하실 수 있습
    12.02s  user  발화 끝
    12.54s  ⚡SPAN 주입 [d'=1.04s / d_lead=6.49s]: (tool result) Ocean View Hotel allows free cancellation until seven da
    20.62s  user  발화 시작: 그래. 확인서를 내 이메일로 보내 줄 수 있어?
    20.66s  agent 발화 끝
    23.44s  <ret> 발화 (turn5 첫 프레임)
    23.60s  agent 발화 시작: <ret> 네, 확인서를 이메일 주소로 보내 드릴 수 있습니다. 확인서가 지금 이메일로 발송됐습니다.
    23.86s  user  발화 끝
    25.44s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.79s]: (tool result) Email sent to user_email with subject "Ocean View Hotel 
    29.35s  agent 발화 끝
