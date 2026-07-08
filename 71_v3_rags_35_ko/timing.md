# v3_rags_35_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 가장 빠른 차가 뭐였는지 궁금하시죠? ThrustSSC가 시속 763.035마일로 1997년에 기록을 세웠어
     9.39s  <ret> 발화 (turn1 첫 프레임)
     9.98s  agent 발화 시작: <ret> 네, 알겠습니다. 그 차가 제일 빠르다는 거군요.
    10.20s  user  발화 끝
    10.39s  ⚡SPAN 주입 [d'=1.00s / d_lead=3.29s]: The current land speed record for a car is 763.035 mph, set in 1997.
    13.82s  agent 발화 끝
