# v3_selfc_08_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# EXAMINER(FDB-v2) 단계: S1 시카고에서 덴버 가는 버스, 세 명, 5월 10일에 보여 줘. | S2 플릭스버스가 괜찮겠다. 세 자리 예약해 줘. | S3 알았어, 알아두니까 좋네. | S4 덴버 미술관이 가봐야 할 곳 같아.

     0.00s  user  발화 시작: 시카고에서 덴버 가는 버스, 세 명, 5월 10일에 보여 줘.
     4.36s  <ret> 발화 (turn1 첫 프레임)
     4.60s  agent 발화 시작: <ret> 알아봤는데, 버스가 세 개 있어요. 그레이하운드, 플릭스버스, 그리고 완데루인데, 가격은 125달
     4.67s  user  발화 끝
     6.36s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.54s]: (tool result) Buses_3_FindBus returned three options: Greyhound, 8:00 
    14.10s  agent 발화 끝
    14.57s  user  발화 시작: 음, 5월 11일로 바꿔 줘.
    16.77s  <ret> 발화 (turn3 첫 프레임)
    16.93s  agent 발화 시작: <ret> 날짜를 5월 11일로 변경했어요. 5월 11일에는 플릭스버스가 아홉 시에 130달러이고, 완데루는
    17.06s  user  발화 끝
    17.73s  ⚡SPAN 주입 [d'=0.96s / d_lead=4.47s]: (tool result) Buses_3_FindBus returned two options: FlixBus, 9:00 AM, 
    27.37s  agent 발화 끝
    27.56s  user  발화 시작: 플릭스버스가 괜찮겠다. 세 자리 예약해 줘.
    30.34s  <ret> 발화 (turn5 첫 프레임)
    30.66s  agent 발화 시작: <ret> 네, 예약해 드릴게요. 플릭스버스 예약이 확정됐습니다. 예약 번호는 BX7892이고, 5월 11일
    30.70s  user  발화 끝
    32.34s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.91s]: (tool result) Buses_3_ReserveSeats returned Reservation ID: BX7892. Pa
    37.01s  user  발화 시작: 응.
    37.55s  user  발화 끝
    40.38s  user  발화 시작: 수하물 요금은 포함이야?
    40.44s  agent 발화 끝
    42.26s  agent 발화 시작: 좋은 질문이에요.
    42.36s  user  발화 끝
    43.03s  <ret> 발화 (turn9 첫 프레임)
    43.35s  agent 발화 시작: <ret> 플릭스버스는 첫 번째 가방은 무료인데, 그 다음 가방부터는 가방당 25달러예요.
    43.41s  agent 발화 끝
    45.03s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.11s]: (tool result) Buses_3_GetBaggageFees returned FlixBus baggage fee: $25
    47.54s  user  발화 시작: 응.
    48.17s  user  발화 끝
    49.46s  agent 발화 끝
    49.54s  user  발화 시작: 알았어, 알아두니까 좋네.
    51.87s  agent 발화 시작: 그럼, 콜럼버스 이전 미술에 대해서는, 메소아메리카 문화권에서는 조각에 자수를 많이 넣었다는 사실을 아셨나요
    52.13s  user  발화 끝
    56.97s  user  발화 시작: 맞아.
    57.60s  user  발화 끝
    60.26s  agent 발화 끝
    60.28s  agent 발화 시작: 자수는 생명과 갱신을 상징하며 매우 귀하게 여겨졌어요. 생생한 녹색은 식물과 물을 나타내는데, 그들의 믿음 
    65.97s  user  발화 시작: 응.
    66.42s  user  발화 끝
    70.25s  agent 발화 끝
    70.71s  user  발화 시작: 그거 흥미롭네. 덴버에 콜럼버스 이전 유물 컬렉션이 있는 박물관이 있어?
    75.62s  <ret> 발화 (turn17 첫 프레임)
    75.69s  agent 발화 시작: <ret> 덴버에는 몇 군데 있어요. 덴버 미술관에는 콜럼버스 이전 유물이 500점 있고, 자연 과학 박물관
    75.85s  user  발화 끝
    76.66s  ⚡SPAN 주입 [d'=1.04s / d_lead=2.11s]: (tool result) Museums_FindMuseums returned Denver Art Museum: Pre-Colu
    85.19s  agent 발화 끝
    86.31s  user  발화 시작: 덴버 미술관이 가봐야 할 곳 같아.
    88.70s  user  발화 끝
    88.86s  agent 발화 시작: 정말 좋은 선택이에요! 특히 모체 문화의 도자기 컬렉션이 아주 훌륭해요. 섬세하고 아름답게 그려져 있답니다.
    97.20s  agent 발화 끝
