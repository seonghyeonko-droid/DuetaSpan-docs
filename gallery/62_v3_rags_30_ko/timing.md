# v3_rags_30_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 누가 2018 올림픽 개막식에서 공연했어?
     2.93s  <ret> 발화 (turn1 첫 프레임)
     3.32s  agent 발화 시작: <ret> 아, 좋은 질문이세요. 정말 멋진 무대였죠… 인순이 씨가 2018년 동계 올림픽 개막식에서 공연하
     3.56s  user  발화 끝
     4.93s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.99s]: Insooni performed at the 2018 Winter Olympics opening ceremony.
    11.11s  agent 발화 끝
