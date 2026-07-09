# v3_rags_31_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: When was the third season of Daredevil released?
     3.19s  <ret> 발화 (turn1 첫 프레임)
     3.43s  agent 발화 시작: <ret> That’s a popular question, and I can certainly tell yo
     3.51s  user  발화 끝
     4.71s  ⚡SPAN 주입 [d'=1.52s / d_lead=4.05s]: The third season of Daredevil was released on October 26, 2018.
    11.53s  agent 발화 끝
