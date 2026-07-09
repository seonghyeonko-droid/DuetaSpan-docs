# v3_selfc_08_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 시카고에서 덴버 가는 버스, 5월 10일에 세 명 보여 줘.
     4.29s  <ret> 발화 (turn1 첫 프레임)
     4.53s  agent 발화 시작: <ret> 알겠습니다. 그 여행에 대한 버스를 찾아볼게요— 버스 옵션이 세 가지 있는데, 가격은 129달러부
     4.63s  user  발화 끝
     6.29s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.44s]: (tool result) Buses_3_FindBus returned three options: Greyhound, FlixB
    14.04s  agent 발화 끝
    14.63s  user  발화 시작: 좀 비싸네. 두 명만 하면 어때?
    16.59s  <ret> 발화 (turn3 첫 프레임)
    16.75s  agent 발화 시작: <ret> 승객 수를 조정해 볼게요— 두 명으로 하니까 가격대는 이제 95달러에서 150달러까지입니다.
    16.93s  user  발화 끝
    17.55s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.31s]: (tool result) Buses_3_FindBus returned three options: Greyhound, FlixB
    23.10s  agent 발화 끝
    23.34s  user  발화 시작: 흠, 그레이하운드가 항상 제일 싸?
    26.38s  user  발화 끝
    26.51s  agent 발화 시작: 일반적으로 네, 그레이하운드가 가장 저렴한 요금을 제공하는 경향이 있습니다—
    31.09s  user  발화 시작: 와이파이 있는 버스 있어?
    31.69s  agent 발화 끝
    33.03s  user  발화 끝
    33.08s  agent 발화 시작: 그레이하운드와 플릭스버스는 모두 와이파이가 가능한 편의시설로 나와 있습니다. Wanderu는 명시되어 있지 
    38.57s  user  발화 시작: 응.
    38.92s  user  발화 끝
    42.03s  agent 발화 시작: 그레이하운드 웹사이트에는 모든 좌석에 전원 콘센트가 있다는 내용도 나와 있는데, 장거리 여행에 꽤 유용할 수
    42.07s  agent 발화 끝
    49.60s  <ret> 발화 (turn10 첫 프레임)
    49.99s  agent 발화 시작: <ret> 그레이하운드 버스 G749는 오전 8시에 출발해서 덴버에는 밤 10시에 도착하고, 와이파이도 있습
    50.04s  agent 발화 끝
    51.60s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.85s]: (tool result) Buses_3_GetDetails returned: Greyhound bus ID G749 depar
    55.73s  user  발화 시작: 응.
    56.22s  user  발화 끝
    58.74s  user  발화 시작: 좋아, 그 그레이하운드 버스 티켓 두 장 예약해 줘.
    58.84s  agent 발화 끝
    61.59s  <ret> 발화 (turn13 첫 프레임)
    61.91s  agent 발화 시작: <ret> 티켓을 확보해 드릴게요— 티켓 예약을 완료했습니다! 확인 번호는 B29X7R이고, 총 금액은 19
    61.98s  user  발화 끝
    63.59s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.46s]: (tool result) Buses_3_Book returned: Confirmation number is B29X7R, tw
    70.21s  agent 발화 끝
