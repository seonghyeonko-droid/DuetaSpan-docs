# v3_backg_17_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 심박수 정상 범위가 어떻게 돼?
     2.11s  agent 발화 시작: 그건 좀 다르긴 한데, 보통 어느 정도 사이로 보면 돼.
     2.25s  user  발화 끝
     5.22s  <ret> 발화 (turn2 첫 프레임)
     5.52s  agent 발화 끝
     5.62s  agent 발화 시작: <ret> 잠깐만, 정확한 기준을 찾아볼게— 건강한 성인의 경우, 안정 시 심박수는 분당 육십 회에서 백 회
     6.66s  ⚡SPAN 주입 [d'=1.44s / d_lead=3.00s]: A normal resting heart rate for adults ranges from sixty to one hundre
    12.47s  agent 발화 끝
    12.52s  user  발화 시작: 와, 범위가 꽤 넓네.
    14.83s  agent 발화 시작: 응, 그렇고, 체력 수준이나 스트레스 같은 여러 요인에 따라 달라져.
    14.92s  user  발화 끝
    18.62s  user  발화 시작: 응.
    19.02s  user  발화 끝
    20.02s  agent 발화 끝
    20.15s  agent 발화 시작: 꾸준히 운동하면 안정 시 심박수가 낮아지는 경우가 많아—
    23.19s  user  발화 시작: 근데 운동선수들은? 심박수가 달라?
    23.80s  agent 발화 끝
    25.77s  user  발화 끝
    25.98s  agent 발화 시작: 좋은 질문이야. 운동선수들은 보통 심박수가 더 낮게 나오는 경우가 많아.
    31.57s  <ret> 발화 (turn9 첫 프레임)
    31.73s  agent 발화 시작: <ret> 좀 더 자세한 정보를 찾아볼 수 있어— 훈련된 운동선수는 분당 사십 회까지도 정상적인 심박수를 가
    31.77s  agent 발화 끝
    32.61s  ⚡SPAN 주입 [d'=1.04s / d_lead=3.20s]: Highly trained athletes may have resting heart rates as low as forty b
    39.51s  agent 발화 끝
    39.96s  user  발화 시작: 집에 오는 길에 우유는 샀어?
    41.62s  user  발화 끝
    41.63s  agent 발화 시작: 운동선수한테는 분당 사십 회도 괜찮은 심박수일 수 있어.
    45.20s  agent 발화 끝
