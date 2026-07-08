# v3_fstart_15_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 시드니 오페라 하우스의 위도와 경도가 뭐냐?
     2.71s  <ret> 발화 (turn1 첫 프레임)
     3.01s  agent 발화 시작: <ret> 음, 그 건축물 멋진 곳을 찾아볼게요… 위도는 삼십삼 점 팔오육팔, 경도는 백오십일 점 이일오삼입
     3.23s  user  발화 끝
     4.71s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.80s]: (tool result) The Sydney Opera House is located at latitude -33.8568 a
    10.61s  agent 발화 끝
    11.01s  user  발화 시작: 거기 지금 날씨는 어때?
    12.33s  <ret> 발화 (turn3 첫 프레임)
    12.59s  agent 발화 시작: <ret> 공연자라면 날씨를 꼭 확인해야지… 지금 시드니는 섭씨 이십이도이고, 부분적으로 흐리고, 남서풍이 
    12.80s  user  발화 끝
    13.85s  ⚡SPAN 주입 [d'=1.52s / d_lead=3.84s]: (tool result) The current weather in Sydney is 22 degrees Celsius, par
    22.84s  agent 발화 끝
    22.86s  user  발화 시작: 흠, 듣기 좋네.
    24.13s  agent 발화 시작: 맞아요. 야외 콘서트에는 조금 바람이 많이 불 수도 있지만, 좋은 코트면 괜찮을 거예요.
    24.28s  user  발화 끝
    30.24s  agent 발화 끝
    30.77s  user  발화 시작: 거기 근처 재즈 클럽 좀 찾아줘.
    32.99s  <ret> 발화 (turn7 첫 프레임)
    33.02s  user  발화 끝
    33.07s  agent 발화 시작: <ret> 딱 맞는 장소를 찾는 게 중요하죠… 베이스먼트라는 재즈 클럽이 요크 스트리트 칠십 번지에 있는데,
    34.43s  ⚡SPAN 주입 [d'=1.44s / d_lead=2.85s]: (tool result) The Basement is a jazz club located at 70 York Street, S
    42.58s  agent 발화 끝
    42.94s  user  발화 시작: 거기 괜찮아?
    43.71s  agent 발화 시작: 베이스먼트는 오랜 역사를 가진 곳이에요. 정말 유명한 곳이죠. 많은 거물들이 그 무대에 섰어요.
    43.77s  user  발화 끝
    50.85s  agent 발화 끝
    51.77s  user  발화 시작: 호텔은 어때? 근처에— 좋은 데로.
    53.88s  <ret> 발화 (turn11 첫 프레임)
    54.27s  agent 발화 시작: <ret> 물론 편안한 숙박은 필수죠… 파크 하얏트 시드니라는 오성급 호텔이 힉슨 로드 칠 번지에 있는데, 
    54.49s  user  발화 끝
    54.84s  ⚡SPAN 주입 [d'=0.96s / d_lead=3.41s]: (tool result) The Park Hyatt Sydney is a five-star hotel located at 7 
    64.01s  agent 발화 끝
    64.19s  user  발화 시작: 거기 전화번호 좀 알려줘.
    65.34s  <ret> 발화 (turn13 첫 프레임)
    65.65s  agent 발화 시작: <ret> 바로 연결해 드릴게요… 전화번호는 플러스 육십일 이 구 이 오륙 일 이 삼사입니다.
    65.80s  user  발화 끝
    65.84s  ⚡SPAN 주입 [d'=0.50s / d_lead=2.58s]: (tool result) The Park Hyatt Sydney's phone number is +61 2 9256 1234.
    71.25s  agent 발화 끝
    73.66s  user  발화 시작: 거기 오늘 밤 방 예약해 줘.
    75.33s  agent 발화 시작: 알겠습니다. 어떤 종류의 방을 원하세요?
    75.54s  user  발화 끝
    78.57s  agent 발화 끝
    80.10s  user  발화 시작: 그냥 스탠다드룸으로 해 줘.
    81.25s  <ret> 발화 (turn17 첫 프레임)
    81.47s  agent 발화 시작: <ret> 스탠다드룸 예약해 볼까요… 파크 하얏트 스탠다드룸 예약이 완료됐습니다. 예약 번호는 PH칠팔구이삼
    81.71s  user  발화 끝
    82.21s  ⚡SPAN 주입 [d'=0.96s / d_lead=5.46s]: (tool result) A standard room at the Park Hyatt Sydney has been reserv
    91.48s  agent 발화 끝
    91.54s  user  발화 시작: 잘 됐네.
    92.36s  user  발화 끝
    92.45s  agent 발화 시작: 정말 다행입니다. 즐거운 시간 보내시고, 라이브 음악도 꼭 감상하세요.
    96.75s  agent 발화 끝
    98.82s  user  발화 시작: 고마워, 모시.
    99.95s  agent 발화 시작: 천만에요. 저도 음악을 좋아하는 분이 여행 계획을 세우는 걸 도와드릴 수 있어서 기쁩니다.
    99.96s  user  발화 끝
   105.27s  agent 발화 끝
