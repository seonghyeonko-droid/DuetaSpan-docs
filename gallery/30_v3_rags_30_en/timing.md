# v3_rags_30_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: When was the printing press invented in Europe?
     2.41s  <ret> 발화 (turn1 첫 프레임)
     2.64s  agent 발화 시작: <ret> That's a fascinating question, tracing the roots of in
     2.87s  user  발화 끝
     4.41s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.61s]: The printing press was invented in Europe around 1440.
    13.25s  agent 발화 끝
