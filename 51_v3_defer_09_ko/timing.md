# v3_defer_09_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 방 세 개를 샌디에이고 오션 뷰 호텔에서 2월 10일부터 7박으로 예약해 줘.
     5.50s  <ret> 발화 (turn1 첫 프레임)
     5.65s  agent 발화 시작: <ret> 네, 빠르게 확인해 볼게요… 날짜에 방 세 개가 남아 있고, 1박에 175달러예요.
     5.74s  user  발화 끝
     6.70s  ⚡SPAN 주입 [d'=1.20s / d_lead=4.42s]: (tool result) Three rooms are available at Ocean View Hotel in San Die
    10.18s  user  발화 시작: 응.
    10.73s  user  발화 끝
    12.27s  agent 발화 끝
    12.50s  user  발화 시작: 그거 괜찮네. 주차는 포함돼 있어?
    15.08s  agent 발화 시작: 호텔에서 하루에 20달러에 주차하실 수 있어요.
    15.22s  user  발화 끝
    18.12s  agent 발화 끝
    18.50s  user  발화 시작: 근데, 확정하기 전에 아침 식사가 가격에 포함돼 있는지 궁금해.
    22.73s  <ret> 발화 (turn6 첫 프레임)
    23.04s  agent 발화 시작: <ret> 네, 오션 뷰 호텔에 머무시는 동안 아침 식사가 포함되어 있습니다.
    23.23s  user  발화 끝
    23.85s  ⚡SPAN 주입 [d'=1.12s / d_lead=4.07s]: (tool result) The total cost for three rooms for seven nights, includi
    25.88s  ⚡지연 SPAN 주입(선제발표 직전): (tool result) Your reservation is confirmed: three rooms at Ocean View
    26.86s  agent 발화 시작: <ret> 자세한 내용을 마무리해 드릴게요… 오션 뷰 호텔 예약이 완료되었고, 총 비용은 4,235달러입니다
    27.12s  agent 발화 끝
    33.99s  agent 발화 끝
