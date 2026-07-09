# v3_fstart_15_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# EXAMINER(FDB-v2) 단계: S1 시드니 오페라 하우스의 위도와 경도가 뭔데? | S2 흠, 사 칠십… 통행료 피하는 방법은 없어? | S3 본다이 주차는 보통 어려워? | S4 좋아, 버스가 좋겠다. 다음 버스는 몇 시에 출발해?

     0.00s  user  발화 시작: 시드니 오페라 하우스의 위도와 경도가 뭔데?
     3.65s  <ret> 발화 (turn1 첫 프레임)
     3.73s  agent 발화 시작: <ret> 음, 그 유명한 랜드마크의 위치를 알려 드릴게요— 위도는 마이너스 삼십삼 점 팔오육팔, 경도는 백
     3.92s  user  발화 끝
     5.57s  ⚡SPAN 주입 [d'=1.92s / d_lead=3.73s]: (tool result) The Sydney Opera House is located at latitude -33.8568 a
     7.41s  user  발화 시작: 응.
     7.91s  user  발화 끝
    12.25s  agent 발화 끝
    12.30s  user  발화 시작: 거기서 본다이 비치까지 제일 빠른 길은 뭐야?
    15.10s  <ret> 발화 (turn4 첫 프레임)
    15.49s  agent 발화 시작: <ret> 네, 가장 빠른 길을 찾아 드릴게요— 캐힐 익스프레스웨이를 이용하면 본다이 비치까지 약 이십이 분
    15.67s  user  발화 끝
    17.10s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.77s]: (tool result) The fastest route is via the Cahill Expressway and Cross
    23.00s  user  발화 시작: 좋네. 그 길에 통행료 있어?
    23.03s  agent 발화 끝
    25.16s  <ret> 발화 (turn6 첫 프레임)
    25.46s  agent 발화 시작: <ret> 그 경로의 통행료 정보를 확인해 볼게요— 크로스 시티 터널을 이용하면 통행료가 사 달러 칠십 센트
    25.59s  user  발화 끝
    27.16s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.37s]: (tool result) Yes, there is a toll of approximately four dollars and s
    32.74s  agent 발화 끝
    34.19s  user  발화 시작: 흠, 사 칠십… 통행료 피하는 방법은 없어?
    37.88s  <ret> 발화 (turn8 첫 프레임)
    37.94s  user  발화 끝
    38.11s  agent 발화 시작: <ret> 네, 다른 경로를 찾아 볼 수 있습니다— 뉴 사우스 헤드 로드를 이용하면 통행료는 피할 수 있지만
    39.08s  ⚡SPAN 주입 [d'=1.20s / d_lead=2.35s]: (tool result) Avoiding tolls adds approximately nine minutes to the tr
    44.61s  user  발화 시작: 그니까.
    45.33s  user  발화 끝
    47.53s  agent 발화 끝
    47.59s  user  발화 시작: 구 분은—
    48.50s  user  발화 시작: 본다이 주차는 보통 어려워?
    48.64s  user  발화 끝
    50.85s  agent 발화 시작: 그 점을 고려하는 게 좋겠네요. 본다이 비치 주차는 특히 피크 시간대에 꽤 어려울 수 있습니다—
    50.99s  user  발화 끝
    56.99s  <ret> 발화 (turn13 첫 프레임)
    57.20s  agent 발화 끝
    57.30s  agent 발화 시작: <ret> 지금은 주차 상황이 보통이고, 십 분에서 십오 분 정도 기다려야 합니다.
    58.99s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.53s]: (tool result) Bondi Beach parking availability is currently moderate, 
    59.07s  user  발화 시작: 응.
    59.52s  user  발화 끝
    61.46s  <ret> 발화 (turn15 첫 프레임)
    61.78s  agent 발화 시작: <ret> 근처 주차장 정보도 찾아 드릴까요? 근처 주차장은 시간당 이십 달러에서 삼십오 달러 정도 합니다.
    61.84s  agent 발화 끝
    63.46s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.21s]: (tool result) There are three parking garages near Bondi Beach, with h
    68.18s  user  발화 시작: 와, 비싸네.
    68.40s  agent 발화 끝
    69.47s  user  발화 끝
    69.65s  agent 발화 시작: 비싸죠? 대중교통이 더 경제적인 선택일 수도 있습니다—
    73.45s  <ret> 발화 (turn18 첫 프레임)
    73.75s  agent 발화 시작: <ret> 삼팔공 버스가 더 저렴한데, 십오 분 간격으로 운행하고 요금은 이 점 오십 달러입니다.
    73.86s  agent 발화 끝
    74.65s  ⚡SPAN 주입 [d'=1.20s / d_lead=5.70s]: (tool result) The 380 bus from Circular Quay to Bondi Beach runs every
    75.43s  user  발화 시작: 응.
    76.06s  user  발화 끝
    79.45s  agent 발화 끝
    80.75s  user  발화 시작: 좋아, 버스가 좋겠다. 다음 버스는 몇 시에 출발해?
    84.55s  <ret> 발화 (turn21 첫 프레임)
    84.71s  agent 발화 시작: <ret> 버스 시간표를 확인해 볼게요— 다음 삼팔공 버스는 오전 열 시 십칠 분에 출발합니다.
    84.91s  user  발화 끝
    86.15s  ⚡SPAN 주입 [d'=1.60s / d_lead=3.16s]: (tool result) The next 380 bus departs Circular Quay at 10:17 AM.
    89.85s  agent 발화 끝
    89.87s  user  발화 시작: 완벽해. 정말 고마워!
    92.14s  agent 발화 시작: 천만에요! 본다이 비치 여행 계획을 세우는 데 도움이 되어서 기쁩니다. [happy] 햇볕을 즐기세요!
    92.36s  user  발화 끝
    99.46s  agent 발화 끝
