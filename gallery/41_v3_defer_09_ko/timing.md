# v3_defer_09_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 예약해 줄까? 샌디에이고 오션 뷰 호텔에 2월 10일부터 7박 3개 방으로.
     3.97s  <ret> 발화 (turn1 첫 프레임)
     4.13s  agent 발화 시작: <ret> 음, 확인해 봤는데, 2월 10일부터 7박 3개 방이 있고, 비용은 이천백 달러예요.
     4.30s  user  발화 끝
     5.97s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.59s]: (tool result) The hotel has three rooms available from February tenth 
    11.31s  agent 발화 끝
    12.11s  user  발화 시작: 좋네. 취소 정책은 어떻게 돼?
    13.96s  <ret> 발화 (turn3 첫 프레임)
    14.28s  agent 발화 시작: <ret> 확인해 드릴게요… 도착하기 48시간 전까지 취소하시면 전액 환불받으실 수 있어요.
    14.47s  user  발화 끝
    15.00s  ⚡SPAN 주입 [d'=1.04s / d_lead=5.97s]: (tool result) Cancellations are permitted up to forty-eight hours befo
    21.71s  user  발화 시작: 좋아. 호텔 주소는 어디야?
    21.74s  agent 발화 끝
    23.34s  agent 발화 시작: 잠시만요, 알아보고 있어요.
    23.55s  user  발화 끝
    25.40s  agent 발화 끝
    25.71s  user  발화 시작: 아, 그리고 선크림 챙기라고 알려줘.
    27.69s  <ret> 발화 (turn7 첫 프레임)
    27.77s  agent 발화 시작: <ret> 네, 샌디에이고 햇볕은 강렬하니까 챙기시는 게 좋겠네요… 2월 8일 아침 여덟 시에 선크림 챙기라
    27.96s  user  발화 끝
    29.37s  ⚡SPAN 주입 [d'=1.68s / d_lead=4.59s]: (tool result) Reminder set for February eighth at eight AM: "Pack suns
    35.05s  ⚡지연 SPAN 주입(선제발표 직전): (tool result) The Ocean View Hotel is located at 500 Ocean Boulevard, 
    35.93s  agent 발화 끝
    35.99s  agent 발화 시작: <ret> 주소는요… 오션 뷰 호텔은 캘리포니아 주 샌디에이고 오션 블러바드 500번지, 우편번호는 구 공 
    45.54s  agent 발화 끝
