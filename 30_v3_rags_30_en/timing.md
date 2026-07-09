# v3_rags_30_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: When was the printing press invented in Europe, specifically
     3.80s  <ret> 발화 (turn1 첫 프레임)
     4.04s  agent 발화 시작: <ret> That’s a fascinating piece of history— It emerged in E
     4.25s  user  발화 끝
     4.84s  ⚡SPAN 주입 [d'=1.04s / d_lead=2.22s]: The printing press was invented in Europe around 1440.
     9.23s  agent 발화 끝
