# v3_rags_30_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 유럽에서 인쇄술이 언제 발명됐는지 자세히 알고 싶어요.
     3.54s  <ret> 발화 (turn1 첫 프레임)
     3.92s  agent 발화 시작: <ret> 네, 정말 흥미로운 질문이세요. 정보 공유의 기원을 살펴보자면, 인쇄술은 유럽에서 천사백사십 년경
     4.16s  user  발화 끝
     5.54s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.25s]: The printing press was invented in Europe around fourteen forty.
    14.55s  agent 발화 끝
