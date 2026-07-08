# v3_backg_17_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 성인 정상 심박수는 얼마나 돼?
     2.00s  <ret> 발화 (turn1 첫 프레임)
     2.24s  agent 발화 시작: <ret> 일반적으로 어느 정도 범위 안에 든다니까.
     2.40s  user  발화 끝
     3.36s  ⚡SPAN 주입 [d'=1.36s / d_lead=2.54s]: A normal resting heart rate for adults ranges from 60 to 100 beats per
     4.78s  agent 발화 끝
     4.85s  agent 발화 시작: 대부분 성인의 정상 심박수는 분당 육십 번에서 백 번 사이야.
     8.63s  agent 발화 끝
     8.72s  user  발화 시작: 그게 좀 높네… 다 똑같은 거야?
    11.14s  agent 발화 시작: 일반적인 가이드라인이고, 개인적인 요인도 당연히 영향을 줘.
    11.25s  user  발화 끝
    14.53s  user  발화 시작: 운동선수는 어때? 심박수가 달라?
    15.02s  agent 발화 끝
    17.11s  user  발화 끝
    17.23s  agent 발화 시작: 운동선수는 보통 심박수가 더 낮게 나오거든.
    20.15s  <ret> 발화 (turn7 첫 프레임)
    20.46s  agent 발화 끝
    20.55s  agent 발화 시작: <ret> 잘 훈련된 운동선수는 분당 사십 번에서 육십 번 사이의 심박수를 가질 수 있어.
    22.15s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.33s]: Well-trained athletes may have resting heart rates between 40 and 60 b
    24.43s  user  발화 시작: 응.
    24.82s  user  발화 끝
    25.52s  <ret> 발화 (turn9 첫 프레임)
    25.84s  agent 발화 시작: <ret> 꾸준히 운동하면 심장이 효율적으로 움직여서 그런 거야.
    25.88s  agent 발화 끝
    26.72s  ⚡SPAN 주입 [d'=1.20s / d_lead=3.24s]: A healthy heart rate for adults is generally considered to be between 
    29.07s  agent 발화 끝
    29.09s  agent 발화 시작: 건강한 심박수는 보통 분당 오십 번에서 구십 번 정도야.
    34.55s  agent 발화 끝
    35.09s  user  발화 시작: 분리수거는 내놨어?
    36.47s  agent 발화 시작: 건강한 생활 습관을 유지하면 심혈관 기능이 최적화된다고.
    36.61s  user  발화 끝
    40.96s  agent 발화 끝
