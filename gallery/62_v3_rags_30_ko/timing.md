# v3_rags_30_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 유럽에서 인쇄기가 언제 발명됐는지 자세히 알려주시겠어요?
     3.21s  <ret> 발화 (turn1 첫 프레임)
     3.60s  agent 발화 시작: <ret> 음, 인쇄기는 대략 열넷 배넷(1440)년쯤 유럽에서 처음 등장해서 정보 전달 방식을 완전히 바꿔
     3.84s  user  발화 끝
     5.21s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.90s]: The printing press was invented in Europe around fourteen forty.
    12.17s  agent 발화 끝
