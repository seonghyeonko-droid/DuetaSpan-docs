# v3_backg_17_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 어른들 보통 심박수 얼마야?
     1.71s  <ret> 발화 (turn1 첫 프레임)
     1.95s  agent 발화 시작: <ret> 심박수는 보통 어느 정도 범위 안에 들어.
     2.07s  user  발화 끝
     3.15s  ⚡SPAN 주입 [d'=1.44s / d_lead=2.58s]: A normal resting heart rate for adults ranges from 60 to 100 beats per
     4.53s  agent 발화 끝
     4.63s  agent 발화 시작: 건강한 어른 기준으로, 심박수는 분당 육십 번에서 백 번 사이야.
     9.25s  agent 발화 끝
     9.33s  user  발화 시작: 생각보다 높네… 진짜 그래?
    12.03s  agent 발화 시작: 운동량이나 다른 요인에 따라 꽤 달라질 수 있어.
    12.14s  user  발화 끝
    14.22s  user  발화 시작: 응.
    14.53s  user  발화 끝
    14.81s  <ret> 발화 (turn6 첫 프레임)
    15.08s  agent 발화 끝
    15.21s  agent 발화 시작: <ret> 좀 더 자세한 자료를 찾아줄게— 건강한 심박수는 특히 활동적인 사람들은 분당 오십 번에서 구십 번
    15.31s  ⚡SPAN 주입 [d'=0.50s / d_lead=1.34s]: A healthy heart rate is generally considered to be between 50 and 90 b
    17.29s  agent 발화 끝
    17.86s  user  발화 시작: 운동선수들은 어때? 심박수가 더 낮아?
    20.25s  agent 발화 시작: 운동선수들은 보통 심박수가 더 낮아—
    20.45s  user  발화 끝
    22.39s  user  발화 시작: 그건 심장이 더 튼튼해서 그런 거야?
    23.10s  agent 발화 끝
    24.37s  user  발화 끝
    24.47s  agent 발화 시작: 응, 심장이 피를 더 효율적으로 펌프질하거든.
    27.47s  agent 발화 끝
