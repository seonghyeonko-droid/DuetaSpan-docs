# v3_selfc_08_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 시카고에서 덴버 가는 버스, 5월 10일에 세 명 보여 줘.
     3.48s  <ret> 발화 (turn1 첫 프레임)
     3.72s  agent 발화 시작: <ret> 네, 그 여행에 대한 옵션을 찾아 볼게요. 5월 10일에 출발하는 버스가 세 대 있는데, 가격은 
     3.80s  user  발화 끝
     5.48s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.56s]: (tool result) Buses depart Chicago for Denver on May tenth at 8:00 AM,
    13.97s  agent 발화 끝
    14.54s  user  발화 시작: 1시 30분 버스는 어때?
    16.54s  <ret> 발화 (turn3 첫 프레임)
    16.69s  agent 발화 시작: <ret> 그 특정 출발에 대한 정보를 가져올게요. 1시 30분 버스는 직행이고, 10시에 도착하며, 와이파
    16.88s  user  발화 끝
    17.58s  ⚡SPAN 주입 [d'=1.04s / d_lead=6.32s]: (tool result) The 1:30 PM bus is a direct route, arriving in Denver at
    26.80s  agent 발화 끝
    27.01s  user  발화 시작: 그거 세 자리 예약해 줄 수 있어?
    28.69s  <ret> 발화 (turn5 첫 프레임)
    29.01s  agent 발화 시작: <ret> 네, 예약을 진행해 드릴 수 있어요. 예약이 확정됐습니다. 확인 번호는 BX7492이고, 총 금액
    29.08s  user  발화 끝
    30.69s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.32s]: (tool result) Reservation confirmed: confirmation number is BX7492; to
    38.84s  agent 발화 끝
    38.87s  user  발화 시작: 좋네—
    39.85s  agent 발화 시작: 그리고 다시 한 번 모든 세부 사항을 확인해 드릴게요—
    39.96s  user  발화 끝
    42.73s  user  발화 시작: 근데 혹시 5월 11일로 날짜를 변경할 수 있을까?
    43.41s  agent 발화 끝
    46.05s  <ret> 발화 (turn9 첫 프레임)
    46.37s  agent 발화 시작: <ret> 네, 대신 5월 11일의 이용 가능 여부를 확인해 볼게요. 5월 11일에는 오전 9시 15분과 오
    46.57s  user  발화 끝
    48.05s  ⚡SPAN 주입 [d'=2.00s / d_lead=13.21s]: (tool result) Buses depart Chicago for Denver on May eleventh at 9:15 
    59.28s  user  발화 시작: 오후 2시 버스가 더 나은 것 같아.
    59.59s  agent 발화 끝
    61.82s  <ret> 발화 (turn11 첫 프레임)
    61.98s  agent 발화 시작: <ret> 좋은 선택이세요, 그 버스의 구체적인 사항을 살펴볼게요. 오후 2시 버스는 리클라이닝 시트, 화장
    62.06s  user  발화 끝
    63.82s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.61s]: (tool result) The 2:00 PM bus is a direct route, arriving in Denver at
    68.92s  user  발화 시작: 응.
    69.32s  user  발화 끝
    72.64s  agent 발화 끝
    73.78s  user  발화 시작: 좋아. 그거 세 자리 예약해 줘.
    76.12s  agent 발화 시작: 네, 바로 그 좌석을 예약해 드릴게요.
    76.22s  user  발화 끝
    79.91s  agent 발화 끝
