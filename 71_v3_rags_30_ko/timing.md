# v3_rags_30_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 유럽에서 인쇄기가 언제 발명됐는지 자세히 알려주시겠어요?
     3.41s  <ret> 발화 (turn1 첫 프레임)
     3.56s  agent 발화 시작: <ret> 음, 지식이 어떻게 퍼져나가는지 생각해보면 정말 흥미로운 질문이에요. 인쇄기는 유럽에 대략 천사백
     3.61s  user  발화 끝
     5.41s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.29s]: The printing press was invented in Europe around fourteen forty.
    12.37s  agent 발화 끝
