# v3_selfc_08_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 시카고에서 덴버 가는 버스, 세 명, 5월 10일에 보여 줘.
     4.37s  <ret> 발화 (turn1 첫 프레임)
     4.61s  agent 발화 시작: <ret> 네, 그 경로의 버스 운행 상황을 확인해 볼게요. 5월 10일에 오전 8시, 오후 2시, 저녁 7
     4.67s  user  발화 끝
     6.37s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.93s]: (tool result) Three buses are available on May tenth: at 8:00 AM, 2:00
    13.79s  agent 발화 끝
    14.37s  user  발화 시작: 그 가격들은 얼마야?
    15.88s  <ret> 발화 (turn3 첫 프레임)
    16.04s  agent 발화 시작: <ret> 각 버스의 요금을 빠르게 확인해 드릴 수 있어요. 오전 8시 버스는 150달러, 오후 2시 버스는
    16.21s  user  발화 끝
    16.92s  ⚡SPAN 주입 [d'=1.04s / d_lead=6.57s]: (tool result) The 8:00 AM bus costs $150, the 2:00 PM bus costs $180, 
    26.99s  agent 발화 끝
    27.15s  user  발화 시작: 어… 10일이 아니라 11일로 해 줘.
    29.75s  <ret> 발화 (turn5 첫 프레임)
    30.06s  user  발화 끝
    30.07s  agent 발화 시작: <ret> 아, 11일로 다시 확인해 드리면 될까요? 5월 11일에는 오전 9시와 오후 6시에 출발하는 버스
    31.75s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.85s]: (tool result) Two buses are available on May eleventh: at 9:00 AM and 
    37.34s  agent 발화 끝
    37.36s  user  발화 시작: 그거 침대 버스야?
    38.71s  agent 발화 시작: 그 버스가—
    38.83s  user  발화 끝
    39.21s  user  발화 시작: 화장실은 있어?
    39.86s  agent 발화 끝
    40.31s  agent 발화 시작: 오전 9시와 오후 6시 버스 둘 다 화장실이 있지만, 침대 버스는 아니에요.
    40.45s  user  발화 끝
    43.84s  user  발화 시작: 진짜?
    44.48s  user  발화 끝
    45.64s  agent 발화 끝
    45.71s  agent 발화 시작: 거의 18시간이나 가는 여정이라 화장실이 있으면 꽤 도움이 될 거예요.
    49.92s  agent 발화 끝
    50.18s  user  발화 시작: 9시 버스로 예약해 줘.
    52.12s  <ret> 발화 (turn13 첫 프레임)
    52.36s  agent 발화 시작: <ret> 네, 예약 진행해 드릴게요. 좌석 예약 완료됐어요! 확인 번호는 BX947Z이고, 세 명분이 예약
    52.57s  user  발화 끝
    52.62s  ⚡SPAN 주입 [d'=0.50s / d_lead=5.77s]: (tool result) Your booking is confirmed: confirmation number is BX947Z
    60.69s  agent 발화 끝
    61.14s  user  발화 시작: 좋아, 전날에 알림 보내 줄 수 있어?
    63.41s  <ret> 발화 (turn15 첫 프레임)
    63.73s  agent 발화 시작: <ret> 네, 알림 설정해 드릴 수 있어요. 5월 10일 오전 9시에 “덴버 가는 버스 출발” 알림을 설정
    63.91s  user  발화 끝
    65.41s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.47s]: (tool result) Reminder set for May tenth at 9:00 AM: “Bus to Denver de
    70.68s  agent 발화 끝
    71.77s  user  발화 시작: 완벽해. 고마워!
    73.69s  user  발화 끝
    73.84s  agent 발화 시작: 도와드릴 수 있어서 기뻐요. 덴버까지의 여행을 즐기시길 바랍니다—아름다운 도시이고, 콜럼버스 이전 시대의 예
    82.55s  agent 발화 끝
