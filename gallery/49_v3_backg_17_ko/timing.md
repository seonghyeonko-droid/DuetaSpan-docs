# v3_backg_17_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 심박수가 정상적으로 쉬고 있을 때 얼마 정도 돼?
     2.61s  <ret> 발화 (turn1 첫 프레임)
     2.85s  agent 발화 시작: <ret> 건강한 심박수는 보통 정해진 범위 안에 들어.
     3.04s  user  발화 끝
     4.61s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.05s]: A normal resting heart rate for adults ranges from 60 to 100 beats per
     5.90s  agent 발화 끝
     6.00s  agent 발화 시작: 보통 쉬고 있을 때 심박수는 분당 육십 번에서 백 번 사이야.
     9.79s  agent 발화 끝
     9.86s  user  발화 시작: 그게 좀 높네… 다 그런 거야?
    12.21s  agent 발화 시작: 일반적인 가이드라인인데, 개인적인 요인도 당연히 영향을 줘.
    12.26s  user  발화 끝
    16.44s  user  발화 시작: 운동선수는 어때? 심박수가 달라?
    17.02s  agent 발화 끝
    19.40s  user  발화 끝
    19.41s  agent 발화 시작: 운동선수는 보통 심박수가 더 낮게 나와.
    21.94s  <ret> 발화 (turn7 첫 프레임)
    22.28s  agent 발화 끝
    22.33s  agent 발화 시작: <ret> 훈련된 운동선수는 분당 사십 번에서 육십 번 사이의 심박수를 가질 수 있어.
    23.94s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.46s]: Highly trained athletes may have resting heart rates between 40 and 60
    26.32s  user  발화 시작: 응.
    26.72s  user  발화 끝
    27.44s  <ret> 발화 (turn9 첫 프레임)
    27.76s  agent 발화 시작: <ret> 그건 심혈관 효율이 좋다는 걸 보여주는 거지.
    27.79s  agent 발화 끝
    28.48s  ⚡SPAN 주입 [d'=1.04s / d_lead=2.95s]: A healthy heart rate for adults is generally between 50 and 90 beats p
    30.71s  agent 발화 끝
    30.73s  agent 발화 시작: 건강한 심박수는 보통 분당 오십 번에서 구십 번 사이야.
    35.22s  agent 발화 끝
    35.76s  user  발화 시작: 그러면 오십에서 구십이 제일 좋은 거야?
    37.76s  agent 발화 시작: 심혈관 건강을 나타내는 좋은 지표이긴 해.
    37.87s  user  발화 끝
    40.53s  agent 발화 끝
    40.68s  user  발화 시작: 우유는 사 왔어?
    41.91s  agent 발화 시작: 그 범위를 유지하는 게 보통 좋은 신호긴 하지.
    41.92s  user  발화 끝
    44.81s  agent 발화 끝
