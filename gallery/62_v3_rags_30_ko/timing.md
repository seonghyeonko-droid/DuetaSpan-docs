# v3_rags_30_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 유럽에서 인쇄기가 언제 발명됐는지 궁금합니다.
     2.73s  <ret> 발화 (turn1 첫 프레임)
     3.13s  agent 발화 시작: <ret> 아, 정말 흥미로운 질문이세요. 인쇄기는 대략 천사백사십 년쯤에 등장해서 대륙 전체에 지식 보급 
     3.37s  user  발화 끝
     4.73s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.45s]: The printing press was invented in Europe around 1440.
    13.10s  agent 발화 끝
