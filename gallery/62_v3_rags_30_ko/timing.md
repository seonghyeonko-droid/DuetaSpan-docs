# v3_rags_30_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 유럽에서 인쇄기가 언제 발명됐어요?
     2.33s  <ret> 발화 (turn1 첫 프레임)
     2.72s  agent 발화 시작: <ret> 음, 인쇄기는 대략 열네 해 사십 년쯤에 등장해서 유럽 대륙에서 지식 전달 방식을 근본적으로 변화
     2.96s  user  발화 끝
     4.33s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.68s]: The printing press was invented in Europe around 1440.
    11.25s  agent 발화 끝
