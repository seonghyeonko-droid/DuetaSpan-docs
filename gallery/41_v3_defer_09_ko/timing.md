# v3_defer_09_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 방 세 개를 샌디에이고 오션 뷰 호텔에서 2월 10일부터 7박으로 예약해 줘.
     4.98s  <ret> 발화 (turn1 첫 프레임)
     5.14s  agent 발화 시작: <ret> 네, 확인해 드릴게요. 2월 10일부터 7박 동안 오션 뷰 호텔에 방 세 개를 예약해 드렸습니다.
     5.32s  user  발화 끝
     6.98s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.68s]: (tool result) Reservation confirmed for three rooms at Ocean View Hote
    12.05s  agent 발화 끝
    12.83s  user  발화 시작: 취소 정책은 뭐야?
    14.01s  agent 발화 시작: 잠시만 확인해 볼게요.
    14.12s  user  발화 끝
    15.21s  user  발화 시작: 알았어, 고마워. 호텔에 식당 있어?
    15.25s  agent 발화 끝
    16.23s  ⚡지연 SPAN 주입(선제발표 직전): (tool result) Ocean View Hotel allows free cancellation until February
    17.18s  agent 발화 시작: <ret> 취소 정책에 대해서는 지금 확인됐습니다. 내년 2월 1일까지 수수료 없이 예약을 취소하실 수 있습
    17.42s  user  발화 끝
    23.94s  agent 발화 끝
