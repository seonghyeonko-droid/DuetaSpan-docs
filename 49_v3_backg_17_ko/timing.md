# v3_backg_17_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# EXAMINER(FDB-v2) 단계: S1 심박수가 정상적으로 얼마 정도 돼? | S2 그게 좀 높은 것 같은데. 진짜 그래? | S3 근데 운동 엄청 많이 하면 달라져? | S4 분리수거는 내놨어?

     0.00s  user  발화 시작: 심박수가 정상적으로 얼마 정도 돼?
     1.85s  <ret> 발화 (turn1 첫 프레임)
     2.09s  agent 발화 시작: <ret> 건강한 심박수는 보통 정해진 범위 안에 들어.
     2.25s  user  발화 끝
     3.85s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.09s]: A normal resting heart rate for adults ranges from 60 to 100 beats per
     5.18s  agent 발화 끝
     5.28s  agent 발화 시작: 보통 성인의 정상적인 심박수는 분당 육십 번에서 백 번 사이야.
     9.68s  agent 발화 끝
     9.77s  user  발화 시작: 그게 좀 높은 것 같은데. 진짜 그래?
    12.54s  agent 발화 시작: 물론, 운동량이나 다른 요인에 따라 달라질 수 있지.
    12.63s  user  발화 끝
    15.36s  user  발화 시작: 응.
    15.76s  user  발화 끝
    16.47s  agent 발화 끝
    16.49s  <ret> 발화 (turn6 첫 프레임)
    16.57s  agent 발화 시작: <ret> 좀 더 정확한 자료로 다시 알려 줄게— 건강한 성인의 심박수는 일반적으로 분당 오십 번에서 구십 
    17.93s  ⚡SPAN 주입 [d'=1.44s / d_lead=3.97s]: A healthy adult heart rate is considered to be between 50 and 90 beats
    22.02s  user  발화 시작: 응.
    22.46s  user  발화 끝
    23.63s  user  발화 시작: 근데 운동 엄청 많이 하면 달라져?
    23.71s  agent 발화 끝
    25.82s  agent 발화 시작: 당연히 그렇지— 규칙적인 운동은 심박수를 낮추는 경향이 있어.
    26.03s  user  발화 끝
    30.68s  agent 발화 끝
    31.12s  user  발화 시작: 분리수거는 내놨어?
    32.39s  agent 발화 시작: 운동을 꾸준히 하면 심장이 더 효율적으로 움직여.
    32.41s  user  발화 끝
    35.44s  agent 발화 끝
