# v3_noinfo_23_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 지난해 12월 24일 도쿄 날씨가 어땠어?
     2.74s  <ret> 발화 (turn1 첫 프레임)
     2.90s  agent 발화 시작: <ret> 알아볼게요. 지난해 12월 24일 도쿄는 맑은 하늘이었고, 최고 기온은 11도, 최저 기온은 5도
     3.05s  user  발화 끝
     4.74s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.78s]: (tool result) The weather in Tokyo on December twenty-fourth last year
     9.80s  agent 발화 끝
     9.96s  user  발화 시작: 꽤 추웠겠네. 우에노 공원 근처에 괜찮은 다실 좀 찾아 줄래?
    14.30s  user  발화 끝
    14.31s  <ret> 발화 (turn3 첫 프레임)
    14.39s  agent 발화 시작: <ret> 물론이죠, 그 근처 다실을 검색해 드릴게요… 우에노 공원 근처에는 하나, 사쿠라, 그린 티 가든 
    16.31s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.95s]: (tool result) Found three tea rooms near Ueno Park: Tea Room Hana, ope
    25.19s  agent 발화 끝
    25.31s  user  발화 시작: 하나 괜찮은 것 같아. 예약 가능한지 알아봐 줘.
    27.46s  <ret> 발화 (turn5 첫 프레임)
    27.77s  agent 발화 시작: <ret> 잠시만요, 하나 다실의 예약 가능 여부를 확인해 볼게요… 하나 다실은 오늘 저녁 6시, 7시, 8
    28.03s  user  발화 끝
    28.42s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.36s]: (tool result) Tea Room Hana has reservations available at six PM, seve
    35.78s  agent 발화 끝
    35.98s  user  발화 시작: 좋아, 7시에 두 명 예약해 줘.
    37.86s  <ret> 발화 (turn7 첫 프레임)
    38.02s  agent 발화 시작: <ret> 네, 예약을 진행해 드릴게요… 하나 다실에 7시에 두 명으로 예약이 완료됐습니다. 예약 확인 번호
    38.20s  user  발화 끝
    39.54s  ⚡SPAN 주입 [d'=1.68s / d_lead=4.12s]: (tool result) Reservation confirmed at Tea Room Hana for two people at
    45.26s  user  발화 시작: 아, 잠깐만—거기 말차도 팔아?
    45.76s  agent 발화 끝
    47.70s  user  발화 끝
    47.89s  agent 발화 시작: —그리고 예약은 고객님 성함으로 되어 있습니다…
    49.26s  user  발화 시작: 응.
    49.75s  user  발화 끝
    50.80s  agent 발화 끝
    50.84s  user  발화 시작: 말차도 팔아?
    51.94s  user  발화 끝
    51.99s  agent 발화 시작: 네, 하나 다실 메뉴에는 다양한 말차 기반 음료와 디저트가 있습니다.
    54.42s  user  발화 시작: 음.
    54.77s  user  발화 끝
    55.98s  <ret> 발화 (turn14 첫 프레임)
    56.29s  agent 발화 시작: <ret> 그곳은 정말 멋진 곳이라고 들었어요, 말차도 훌륭하다고 하더라고요… 말차 라떼는 600엔, 케이크
    56.34s  agent 발화 끝
    57.98s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.46s]: (tool result) Tea Room Hana's menu lists matcha latte for six hundred 
    63.07s  user  발화 시작: 응.
    63.42s  user  발화 끝
    65.96s  user  발화 시작: 정말 좋겠다. 거기까지 여기서 가는 가장 빠른 길은 뭐야?
    65.98s  agent 발화 끝
    69.90s  <ret> 발화 (turn17 첫 프레임)
    70.05s  agent 발화 시작: <ret> 가장 빠른 경로를 계산해 드릴게요… 긴자선을 타고 우에노역까지 가서 10분 정도 걸으면, 총 25
    70.21s  user  발화 끝
    71.42s  ⚡SPAN 주입 [d'=1.52s / d_lead=3.71s]: (tool result) The fastest route to Tea Room Hana from your location is
    76.95s  user  발화 시작: 좋아, 정말 고마워!
    77.47s  agent 발화 끝
    78.32s  agent 발화 시작: 천만에요. 즐거운 저녁 시간 보내시고, 훌륭한 말차를 즐기시길 바랍니다. 저는 식물학자라서, 정성스럽게 준비
    78.51s  user  발화 끝
    88.47s  agent 발화 끝
