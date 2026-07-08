# v3_rags_30_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 유럽에서 인쇄기가 언제 발명됐는지 자세히 알려주시겠어요?
     3.16s  <ret> 발화 (turn1 첫 프레임)
     3.55s  agent 발화 시작: <ret> 음, 인쇄술은 대략 천사백사십 년에 유럽에서 처음 등장했는데, 정말 중요한 순간이었어요.
     3.80s  user  발화 끝
     5.16s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.89s]: The printing press was invented in Europe around 1440.
    10.03s  agent 발화 끝
