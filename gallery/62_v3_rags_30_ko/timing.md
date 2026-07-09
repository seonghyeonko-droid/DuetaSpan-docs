# v3_rags_30_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 유럽에서 인쇄기가 언제 발명됐어요?
     1.96s  <ret> 발화 (turn1 첫 프레임)
     2.36s  agent 발화 시작: <ret> 음, 유럽에서는 대략 천사백사십 년쯤에 인쇄기가 등장해서 지식 전달 방식에 혁명을 일으켰습니다.
     2.58s  user  발화 끝
     3.96s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.94s]: The printing press was invented around 1440 in Europe.
     9.49s  agent 발화 끝
