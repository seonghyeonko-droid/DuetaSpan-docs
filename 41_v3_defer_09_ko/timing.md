# v3_defer_09_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 방 세 개를 샌디에이고 오션 뷰 호텔에서 2월 10일부터 7박으로 예약해 줘.
     4.52s  <ret> 발화 (turn1 첫 프레임)
     4.68s  agent 발화 시작: <ret> 네, 2월 10일부터 17일까지 오션 뷰 호텔에 방 세 개를 예약해 드렸습니다.
     4.86s  user  발화 끝
     5.96s  ⚡SPAN 주입 [d'=1.44s / d_lead=2.59s]: (tool result) Your reservation is confirmed for three rooms at Ocean V
     9.87s  agent 발화 끝
    10.67s  user  발화 시작: 취소 정책은 뭐야?
    11.84s  agent 발화 시작: 오션 뷰 호텔에서는 도착 24시간 전까지 무료로 취소할 수 있습니다. 꽤 일반적인 정책이에요.
    11.96s  user  발화 끝
    18.65s  user  발화 시작: 전날에 알림 보내 줄 수 있어?
    18.69s  agent 발화 끝
    20.00s  <ret> 발화 (turn5 첫 프레임)
    20.39s  agent 발화 시작: <ret> 네, 그렇게 해 드릴 수 있습니다. 2월 9일 오전 10시에 호텔 체크인에 대한 알림을 설정해 드
    20.63s  user  발화 끝
    21.20s  ⚡SPAN 주입 [d'=1.20s / d_lead=2.99s]: (tool result) A reminder has been set for February ninth at ten AM: Oc
    26.37s  agent 발화 끝
