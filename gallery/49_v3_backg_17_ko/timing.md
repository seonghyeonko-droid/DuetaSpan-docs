# v3_backg_17_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 심박수가 정상적으로 얼마 정도 돼?
     2.10s  <ret> 발화 (turn1 첫 프레임)
     2.34s  agent 발화 시작: <ret> 일반적으로 특정 범위 안에 들어.
     2.49s  user  발화 끝
     3.46s  ⚡SPAN 주입 [d'=1.36s / d_lead=2.40s]: A normal resting heart rate for adults ranges from 60 to 100 beats per
     4.74s  agent 발화 끝
     4.80s  agent 발화 시작: 대부분 성인의 정상적인 심박수는 분당 육십 번에서 백 번 사이야.
     9.85s  agent 발화 끝
     9.94s  user  발화 시작: 생각보다 높네. 진짜 그런 거야?
    12.68s  agent 발화 시작: 운동 수준이나 다른 요인에 따라 많이 달라질 수 있어.
    12.75s  user  발화 끝
    15.37s  user  발화 시작: 응.
    15.73s  user  발화 끝
    16.42s  agent 발화 끝
    16.46s  <ret> 발화 (turn6 첫 프레임)
    16.53s  agent 발화 시작: <ret> 범위를 좀 더 정확하게 알려줄게— 건강한 성인의 심장은 보통 분당 오십 번에서 구십 번 정도 뛰는
    18.38s  ⚡SPAN 주입 [d'=1.92s / d_lead=4.59s]: A healthy adult heart typically beats between 50 and 90 times per minu
    21.95s  user  발화 시작: 응.
    22.40s  user  발화 끝
    23.55s  user  발화 시작: 운동선수들은 보통 심박수가 더 낮아?
    23.62s  agent 발화 끝
    26.01s  agent 발화 시작: 응, 그렇지. 운동선수들은 보통 심박수가 더 낮게 나와—
    26.18s  user  발화 끝
    30.68s  <ret> 발화 (turn10 첫 프레임)
    30.87s  agent 발화 끝
    31.00s  agent 발화 시작: <ret> 훈련된 운동선수는 심박수가 분당 사십 번까지 떨어질 수도 있어.
    32.12s  ⚡SPAN 주입 [d'=1.44s / d_lead=5.04s]: Highly trained athletes may have a resting heart rate as low as 40 bea
    36.04s  agent 발화 끝
    36.63s  user  발화 시작: 쓰레기 버린 건 기억해 뒀어?
    38.06s  user  발화 시작: 나이 많은 어른들은 좀 달라?
    38.24s  user  발화 끝
    40.02s  agent 발화 시작: 일반적으로 말해서 나이가 심박수에 영향을 줘.
    40.08s  user  발화 끝
    42.93s  agent 발화 끝
