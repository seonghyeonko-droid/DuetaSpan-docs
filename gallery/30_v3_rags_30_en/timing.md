# v3_rags_30_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Who is performing at the 2018 olympics opening ceremony?
     3.92s  agent 발화 시작: <ret> That’s a fantastic question, a real highlight of the g
     3.92s  <ret> 발화 (turn1 첫 프레임)
     4.16s  user  발화 끝
     5.84s  ⚡SPAN 주입 [d'=1.92s / d_lead=4.06s]: Insooni performed at the 2018 Winter Olympics opening ceremony.
    12.45s  agent 발화 끝
