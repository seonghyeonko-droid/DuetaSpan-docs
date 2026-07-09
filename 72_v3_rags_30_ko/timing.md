# v3_rags_30_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 유럽에서 인쇄술은 언제 발명되었나요?
     2.03s  <ret> 발화 (turn1 첫 프레임)
     2.18s  agent 발화 시작: <ret> 인쇄술이 유럽에 처음 전해진 건 대략 fourteen forty 년쯤이라고 해요. 유럽에서 인쇄술
     2.40s  user  발화 끝
     4.03s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.08s]: The printing press was invented in Europe around 1440.
    13.73s  agent 발화 끝
