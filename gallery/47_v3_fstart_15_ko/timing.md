# v3_fstart_15_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 시드니 오페라하우스의 위도와 경도가 뭔데?
     2.78s  <ret> 발화 (turn1 첫 프레임)
     3.09s  agent 발화 시작: <ret> 음, 그 상징적인 랜드마크의 위치를 알려 드릴게요. 위도는 마이너스 삼십삼 점 팔오육팔, 경도는 
     3.33s  user  발화 끝
     4.78s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.90s]: (tool result) The Sydney Opera House is located at latitude -33.8568 a
    11.99s  agent 발화 끝
    12.44s  user  발화 시작: 흠, 써큘러 키랑 가까워?
    14.76s  agent 발화 시작: 오, 아주 가까워요. 써큘러 키는 거의 바로 옆이고, 걸어서 금방 갈 수 있어요.
    14.84s  user  발화 끝
    16.64s  user  발화 시작: 응.
    16.85s  user  발화 끝
    20.00s  user  발화 시작: 어디 근처에 식당이 있나… 아니, 됐어. 시드니에서 오늘 밤에 열리는 재즈 클럽 좀 찾아 줘.
    20.13s  agent 발화 끝
    26.19s  <ret> 발화 (turn6 첫 프레임)
    26.42s  agent 발화 시작: <ret> 좋은 선택이네요, 시드니는 재즈 공연이 활발해요. York Street 7번지에 있는 The Ba
    26.44s  user  발화 끝
    27.79s  ⚡SPAN 주입 [d'=1.60s / d_lead=4.15s]: (tool result) The Basement is a jazz club at 70 York Street, Sydney, o
    29.55s  user  발화 시작: 그니까.
    30.35s  user  발화 끝
    34.71s  agent 발화 끝
    35.21s  user  발화 시작: The Basement… 그래.
    37.20s  user  발화 끝
    37.40s  agent 발화 시작: 거기는 전설적인 곳이에요. 수많은 훌륭한 음악가들이 공연했던 곳이죠. 예전에 거기서—
    42.99s  user  발화 시작: 입장료가 있어?
    43.70s  agent 발화 끝
    43.76s  <ret> 발화 (turn11 첫 프레임)
    43.99s  agent 발화 시작: <ret> 현재 정보를 확인해 볼게요. The Basement에서는 오늘 저녁 입장료가 호주 달러 이십오 달
    44.14s  user  발화 끝
    44.88s  ⚡SPAN 주입 [d'=1.12s / d_lead=3.10s]: (tool result) The Basement has a cover charge of twenty-five Australia
    47.38s  user  발화 시작: 응.
    47.83s  user  발화 끝
    50.71s  agent 발화 끝
    50.86s  user  발화 시작: 이십오 달러… 나쁘지 않네.
    53.16s  agent 발화 시작: 좋은 음악을 듣는 데는 적당한 가격이라고 생각하지 않으세요?
    53.39s  user  발화 끝
    55.45s  user  발화 시작: 응.
    55.66s  user  발화 끝
    56.68s  agent 발화 끝
    57.20s  user  발화 시작: 거기서 저녁 여덟 시에 두 명 자리 예약해 줘.
    59.80s  <ret> 발화 (turn17 첫 프레임)
    59.87s  agent 발화 시작: <ret> 알겠습니다, 자리가 있는지 확인해 볼게요. The Basement에 저녁 여덟 시에 두 명 자리 
    59.97s  user  발화 끝
    60.76s  ⚡SPAN 주입 [d'=0.96s / d_lead=4.12s]: (tool result) Reservation confirmed at The Basement for two people at 
    69.15s  agent 발화 끝
    71.49s  user  발화 시작: 완벽해! 고마워.
    72.76s  agent 발화 시작: 천만에요. 즐거운 저녁 시간을 보내실 거라고 생각합니다.
    72.96s  user  발화 끝
    74.14s  user  발화 시작: 응.
    74.72s  user  발화 끝
    77.15s  agent 발화 끝
    77.48s  user  발화 시작: 주차는 어디에 해야 해?
    78.80s  <ret> 발화 (turn22 첫 프레임)
    79.14s  agent 발화 시작: <ret> 그 근처 주차는 좀 어려울 수 있는데, 알아봐 드릴게요. York Street에 있는 Wilson
    79.41s  user  발화 끝
    80.80s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.17s]: (tool result) Wilson Parking at 19 York Street is 250 meters away and 
    84.40s  user  발화 시작: 응.
    84.71s  user  발화 끝
    88.82s  user  발화 시작: 시간당 15달러… 아야.
    88.97s  agent 발화 끝
    90.45s  agent 발화 시작: [laugh] 시드니 주차는… 만만치 않죠. 택시를 타는 게 더 편할 수도 있겠네요?
    90.57s  user  발화 끝
    92.50s  user  발화 시작: 응.
    92.95s  user  발화 끝
    95.64s  agent 발화 끝
    95.65s  user  발화 시작: 어쩌면. 오늘 밤 날씨는 어때?
    99.36s  <ret> 발화 (turn28 첫 프레임)
    99.44s  agent 발화 시작: <ret> 오늘 밤 날씨를 확인해 드릴게요. 오늘 밤 기온은 18도이고, 비가 올 확률은 30%입니다.
    99.58s  user  발화 끝
   101.36s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.76s]: (tool result) The weather in Sydney tonight will be 18 degrees Celsius
   105.56s  agent 발화 끝
