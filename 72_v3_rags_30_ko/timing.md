# v3_rags_30_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 유럽에서 인쇄기가 언제 발명됐어요?
     2.40s  <ret> 발화 (turn1 첫 프레임)
     2.55s  agent 발화 시작: <ret> 음, 유럽에서는 천사백사십 년경에 발명되었답니다. 정보가 퍼지는 방식에 큰 변화를 가져온 중요한 
     2.67s  user  발화 끝
     4.40s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.99s]: The printing press was invented around 1440 in Europe.
    11.63s  agent 발화 끝
