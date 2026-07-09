# v3_rags_30_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 유럽에서 인쇄기가 언제 발명됐어요?
     1.95s  <ret> 발화 (turn1 첫 프레임)
     2.33s  agent 발화 시작: <ret> 그건 정말 중요한 질문이었어요—정말 모든 것을 바꿔 놓았거든요. 유럽 전역에 지식이 퍼져나가는 방
     2.58s  user  발화 끝
     3.95s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.09s]: The printing press was invented around 1440 in Europe.
    12.85s  agent 발화 끝
