# v3_backg_17_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 심박수가 건강한 성인한테 평균적으로 얼마나 돼?
     2.90s  agent 발화 시작: 그래. 심박수는 여러 요인에 따라 달라져.
     2.96s  user  발화 끝
     6.38s  <ret> 발화 (turn2 첫 프레임)
     6.69s  agent 발화 끝
     6.78s  agent 발화 시작: <ret> 일반적으로 받아들여지는 범위를 한번 볼까— 건강한 성인의 정상적인 휴식 심박수는 분당 육십에서 백
     8.30s  ⚡SPAN 주입 [d'=1.92s / d_lead=4.44s]: A normal resting heart rate for adults ranges from 60 to 100 beats per
    16.28s  agent 발화 끝
    16.34s  user  발화 시작: 그거 좀 높네. 운동선수들은 어때?
    19.86s  agent 발화 시작: 운동선수들은 보통 휴식 심박수가 더 낮아. 심혈관 건강이 아주 좋다는 뜻이지.
    19.95s  user  발화 끝
    24.69s  user  발화 시작: 응.
    25.09s  user  발화 끝
    26.49s  <ret> 발화 (turn6 첫 프레임)
    26.57s  agent 발화 시작: <ret> 그 점을 고려하면 좀 더 자세히 봐야 해— 고도로 훈련된 운동선수는 분당 사십 번까지 휴식 심박수
    26.63s  agent 발화 끝
    27.69s  ⚡SPAN 주입 [d'=1.20s / d_lead=2.59s]: Highly trained athletes may have a resting heart rate as low as 40 bea
    34.77s  agent 발화 끝
    35.32s  user  발화 시작: 근데 너무 낮으면 위험한 거야?
    37.12s  agent 발화 시작: 그건 아주 중요한 차이점을 알아야 해—
    37.30s  user  발화 끝
    39.84s  <ret> 발화 (turn9 첫 프레임)
    40.02s  agent 발화 끝
    40.16s  agent 발화 시작: <ret> 성인의 경우 분당 심박수가 육십 번 아래로 떨어지면 서맥이라고 해.
    41.84s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.35s]: A heart rate below 60 beats per minute is considered bradycardia in ad
    44.52s  agent 발화 끝
    45.12s  user  발화 시작: 집에 오는 길에 우유는 샀어?
    46.70s  user  발화 시작: 그럼, 육십 아래면 서맥인데… 항상 문제가 되는 거야?
    46.87s  user  발화 끝
    50.01s  agent 발화 시작: 꼭 그렇진 않아. 운동선수한테는 서맥이 정상일 수도 있지만, 평가가 필요해.
    50.02s  user  발화 끝
    55.79s  agent 발화 끝
