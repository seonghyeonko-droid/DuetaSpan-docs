# v3_rags_30_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 유럽에서 인쇄술이 언제 발명됐는지 자세히 알고 싶어요.
     3.33s  <ret> 발화 (turn1 첫 프레임)
     3.73s  agent 발화 시작: <ret> 음, 그건 현대 커뮤니케이션을 이해하는 데 중요한 질문이에요… 대략 열네 해 사십 년쯤에 유럽에서
     3.93s  user  발화 끝
     5.33s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.08s]: The printing press was invented in Europe around 1440.
    13.41s  agent 발화 끝
