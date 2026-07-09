# v3_rags_30_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 유럽에서 인쇄술은 언제 발명되었나요?
     2.30s  <ret> 발화 (turn1 첫 프레임)
     2.45s  agent 발화 시작: <ret> 인쇄술의 발명 시기에 대해 궁금하시군요. 유럽에서 인쇄술은 대략 서기 일천 사백 사십 년경에 발명
     2.73s  user  발화 끝
     4.30s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.00s]: The printing press was invented in Europe around 1440.
    10.84s  agent 발화 끝
