# v3_defer_10_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 거기 위치 좀 알려줘. 108.325 경도, 22.533 위도.
     4.36s  <ret> 발화 (turn1 첫 프레임)
     4.96s  agent 발화 시작: <ret> 음, 찾아봤는데 하롱베이가 베트남 꽝닌성에 있대요.
     5.14s  user  발화 끝
     5.36s  ⚡SPAN 주입 [d'=1.00s / d_lead=8.96s]: (tool result) That location is Ha Long Bay, Quang Ninh Province, Vietn
    15.71s  agent 발화 끝
    15.85s  user  발화 시작: 예쁘네. 근처에 괜찮은 호텔 있어?
    20.09s  <ret> 발화 (turn3 첫 프레임)
    20.67s  user  발화 끝
    20.69s  agent 발화 시작: <ret> 정말 멋진 곳이에요.
    21.09s  ⚡SPAN 주입 [d'=1.00s / d_lead=8.67s]: (tool result) Vinpearl Legend Halong offers rooms from 150 dollars per
    29.05s  agent 발화 시작: 빈펄 레전드 하롱이 괜찮을 거예요. 빈펄 레전드 하롱은 밤에 150달러부터 방이 있어요.
    29.36s  agent 발화 끝
    33.53s  user  발화 시작: 거기 오늘 밤에 방 예약해 줘.
    33.68s  agent 발화 끝
    41.18s  <ret> 발화 (turn6 첫 프레임)
    41.78s  agent 발화 시작: <ret> 네, 그렇게 해 드릴게요.
    41.88s  user  발화 끝
    42.18s  ⚡SPAN 주입 [d'=1.00s / d_lead=5.46s]: (tool result) Booking confirmed. Vinpearl Legend Halong, one room, 150
    47.12s  agent 발화 시작: 예약 완료됐어. 오늘 밤 빈펄 레전드 하롱에 방 한 개, 150달러이고, 확인 번호는 XYL789야.
    47.24s  agent 발화 끝
    55.24s  agent 발화 끝
    55.37s  user  발화 시작: 좋아. 지금 거기는 날씨 어때?
    59.77s  <ret> 발화 (turn9 첫 프레임)
    60.37s  agent 발화 시작: <ret> 여행 가는데 날씨는 꼭 알아봐야지!
    60.37s  user  발화 끝
    60.41s  ⚡SPAN 주입 [d'=0.64s / d_lead=5.61s]: (tool result) It’s currently 28 degrees Celsius and partly cloudy.
    65.97s  agent 발화 끝
    66.02s  agent 발화 시작: 지금 하롱베이는 28도이고 구름이 조금 있어요.
    72.46s  user  발화 시작: 좋다. 빵집도 괜찮은 곳 찾아줘… 근데 그 동네를 잘 몰라서 물어볼 수가 없네.
    72.55s  agent 발화 끝
    80.19s  user  발화 끝
    80.47s  agent 발화 시작: 그건 좀 어려운 부탁이네요.
    82.78s  ⚡지연 SPAN 주입(선제발표 직전): (tool result) Bonjour Bakery is highly rated, specializing in French p
    83.97s  agent 발화 시작: <ret> 빵집 좀 알아볼게요.
    84.21s  agent 발화 끝
    91.71s  agent 발화 끝
