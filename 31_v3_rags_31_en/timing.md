# v3_rags_31_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: When was the third season of Daredevil actually released?
     3.86s  <ret> 발화 (turn1 첫 프레임)
     4.09s  agent 발화 시작: <ret> That’s a popular question, and I can certainly tell yo
     4.17s  user  발화 끝
     5.38s  ⚡SPAN 주입 [d'=1.52s / d_lead=3.91s]: The third season of Daredevil was released on October 26, 2018.
    12.29s  agent 발화 끝
