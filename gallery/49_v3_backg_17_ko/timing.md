# v3_backg_17_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 심박수가 평균적으로 얼마나 돼?
     1.78s  <ret> 발화 (turn1 첫 프레임)
     2.02s  agent 발화 시작: <ret> 그거 궁금해하는 사람 많아, 좋은 질문이야— 보통 건강한 성인의 심박수는 분당 육십 번에서 백 번
     2.16s  user  발화 끝
     3.78s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.45s]: A normal resting heart rate for adults ranges from 60 to 100 beats per
    10.04s  agent 발화 끝
    11.14s  user  발화 시작: 생각보다 높네. 운동선수는 좀 달라?
    14.58s  agent 발화 시작: 운동선수는 보통 심박수가 더 낮아—
    14.74s  user  발화 끝
    17.15s  <ret> 발화 (turn4 첫 프레임)
    17.26s  agent 발화 끝
    17.38s  agent 발화 시작: <ret> 훈련된 운동선수는 분당 사십 번까지 떨어질 수도 있어.
    19.15s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.55s]: Well-trained athletes may have a resting heart rate as low as 40 beats
    19.93s  user  발화 시작: 응.
    20.33s  user  발화 끝
    20.86s  user  발화 시작: 근데 운동할 때는?
    20.93s  agent 발화 끝
    21.98s  agent 발화 시작: 좋은 지적이야—
    22.14s  user  발화 끝
    23.17s  <ret> 발화 (turn8 첫 프레임)
    23.26s  agent 발화 끝
    23.41s  agent 발화 시작: <ret> 운동할 때는 건강한 사람의 심박수가 분당 백이십 번에서 백육십 번까지 올라갈 수 있어.
    24.29s  ⚡SPAN 주입 [d'=1.12s / d_lead=6.30s]: During exercise, a healthy heart rate can increase to between 120 and 
    29.71s  agent 발화 끝
    30.31s  user  발화 시작: 드라이클리닝 맡긴 거 잊지 않았지?
    32.41s  user  발화 시작: 그럼 엄청 차이가 나는 거네. 너무 높은 숫자는 위험해?
    32.58s  user  발화 끝
    35.59s  user  발화 끝
