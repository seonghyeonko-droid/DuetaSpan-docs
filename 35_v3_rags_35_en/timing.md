# v3_rags_35_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Fastest car in the world land speed record?
     1.99s  <ret> 발화 (turn1 첫 프레임)
     2.45s  user  발화 끝
     2.59s  agent 발화 시작: <ret> Well now, that's a good one. The ThrustSSC holds the r
     2.99s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.84s]: The current land speed record for a car is 763.035 mph, set in 1997.
    12.05s  agent 발화 끝
