# v3_selfc_08_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 시카고에서 덴버까지 세 명, 5월 10일에 가는 버스 좀 보여 줘.
     4.50s  <ret> 발화 (turn1 첫 프레임)
     4.74s  agent 발화 시작: <ret> 알겠습니다. 그 경로의 버스 좌석 상황을 확인해 볼게요. 5월 10일에 출발하는 버스가 세 대가 
     4.86s  user  발화 끝
     6.50s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.30s]: (tool result) Three buses are available on May tenth: 8:00 AM, $250; 2
    16.52s  agent 발화 끝
    17.09s  user  발화 시작: 아침 8시 거 괜찮은 것 같아. 예약해 줄래?
    20.01s  <ret> 발화 (turn3 첫 프레임)
    20.17s  agent 발화 시작: <ret> 네, 아침 8시 버스 좌석을 예약해 드릴게요. 아침 8시 버스 예약이 완료됐습니다. 확인 번호는 
    20.32s  user  발화 끝
    21.05s  ⚡SPAN 주입 [d'=1.04s / d_lead=6.08s]: (tool result) Your reservation is confirmed: bus departs Chicago at 8:
    29.02s  agent 발화 끝
    29.24s  user  발화 시작: 좋아! 그 버스가 오마하에 서는 거야?
    32.05s  user  발화 끝
    32.19s  agent 발화 시작: 그 버스 경로 정보를 잠깐 확인해 볼게요.
    34.79s  user  발화 시작: 아, 오마하는 됐어. 수하물 규정은 어떻게 돼?
    35.43s  agent 발화 끝
    38.35s  user  발화 끝
    38.39s  agent 발화 시작: 승객 한 분당 표준형 기내 수하물 하나와 위탁 수하물 하나를 무료로 부칠 수 있습니다.
    43.86s  agent 발화 끝
    43.92s  user  발화 시작: 그래, 알아 둬야겠다.
    45.39s  <ret> 발화 (turn9 첫 프레임)
    45.71s  agent 발화 시작: <ret> 이제, 여정 정보를 이메일로 보내 드릴까요? 확인 번호와 함께 여정 정보를 이메일 주소로 보내 드
    45.90s  user  발화 끝
    47.39s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.63s]: (tool result) Email sent to user's email with subject “Bus Itinerary” 
    52.64s  user  발화 시작: 완벽해, 고마워.
    52.75s  agent 발화 끝
    54.14s  agent 발화 시작: 천만에요! 여행 계획을 세우는 데 도움을 드릴 수 있어서 기쁩니다. 미리 계획하면 여행 스트레스가 많이 줄어
    54.25s  user  발화 끝
    61.93s  agent 발화 끝
    62.34s  user  발화 시작: 맞아. 음, 덴버 미술관에 있는 콜럼버스 이전 유물에 대해 아는 거 있어?
    67.00s  agent 발화 시작: 오, 물론이죠! 덴버 미술관에는 훌륭한 소장품이 있는데, 특히 모체 문화의 도자기가 강점입니다.
    67.15s  user  발화 끝
    71.74s  user  발화 시작: 응.
    72.19s  user  발화 끝
    74.78s  agent 발화 끝
    74.91s  agent 발화 시작: 모체 문화는 일상생활과 신화를 묘사한 매우 정교한 손잡이가 달린 항아리로 유명했습니다.
    80.59s  user  발화 시작: 흥미롭네. 나스카 문화 유물도 있나?
    80.88s  agent 발화 끝
    82.89s  <ret> 발화 (turn17 첫 프레임)
    83.05s  agent 발화 시작: <ret> 네, 물론입니다. 나스카 유물도 있습니다— 나스카 직물, 도자기, 그리고 기원후 900년에서 15
    83.14s  user  발화 끝
    84.89s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.59s]: (tool result) Denver Art Museum: Nazca collection includes textiles, p
    92.22s  agent 발화 끝
    93.10s  user  발화 시작: 정말 멋지다! 이제 여행이 정말 기대되네.
    96.20s  user  발화 끝
    96.59s  agent 발화 시작: 정말 잘됐네요! 방문 중에 새로운 좋아하는 문화를 발견하게 될지도 모르겠어요.
   102.06s  agent 발화 끝
