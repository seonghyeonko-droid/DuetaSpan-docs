# v3_rags_35_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 누가 토이 스토리에서 미세스 포테이토 헤드를 연기해?
     3.41s  agent 발화 시작: <ret> 그거 궁금하셨군요. 에스텔 해리스가 토이 스토리 네 편 모두에서 미세스 포테이토 헤드 목소리를 맡
     3.41s  <ret> 발화 (turn1 첫 프레임)
     3.41s  user  발화 끝
     3.97s  ⚡SPAN 주입 [d'=0.56s / d_lead=1.95s]: Estelle Harris provided the voice for Mrs. Potato Head in the Toy Stor
    10.24s  agent 발화 끝
