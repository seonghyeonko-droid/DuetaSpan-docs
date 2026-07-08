# v3_defer_09_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 바닷가 호텔 샌디에이고에 2월 10일부터 7박 3개 방 예약해 줘.
     4.01s  <ret> 발화 (turn1 첫 프레임)
     4.17s  agent 발화 시작: <ret> 네, 방을 알아보겠습니다. 2월 10일부터 17일까지 바닷가 호텔에서 3개 방을 예약했습니다.
     4.36s  user  발화 끝
     6.01s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.39s]: (tool result) Your reservation is confirmed for three rooms at Ocean V
    11.58s  agent 발화 끝
    12.40s  user  발화 시작: 어, 취소 정책은 뭔데?
    13.65s  <ret> 발화 (turn3 첫 프레임)
    13.97s  agent 발화 시작: <ret> 그건 알아두시는 게 중요하죠. 2월 10일 48시간 전까지 취소하시면 전액 환불받으실 수 있습니다
    14.15s  user  발화 끝
    14.69s  ⚡SPAN 주입 [d'=1.04s / d_lead=4.68s]: (tool result) Cancellations are permitted up to forty-eight hours prio
    20.69s  user  발화 시작: 그래. 확인 이메일 보내 줄 수 있어?
    20.73s  agent 발화 끝
    22.45s  <ret> 발화 (turn5 첫 프레임)
    22.61s  agent 발화 시작: <ret> 네, 그렇게 해 드릴 수 있습니다. 예약 시 등록하신 이메일 주소로 확인 메일을 보냈습니다.
    22.90s  user  발화 끝
    24.45s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.75s]: (tool result) A confirmation email has been sent to your registered em
    28.45s  agent 발화 끝
