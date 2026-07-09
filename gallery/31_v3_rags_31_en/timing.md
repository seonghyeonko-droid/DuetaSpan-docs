# v3_rags_31_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: When is the third season of Daredevil being released?
     2.80s  <ret> 발화 (turn1 첫 프레임)
     3.03s  agent 발화 시작: <ret> Let me quickly check the release information for you… 
     3.19s  user  발화 끝
     4.32s  ⚡SPAN 주입 [d'=1.52s / d_lead=3.80s]: <Daredevil season three was released on Netflix on October 26, 2018.>
    11.46s  agent 발화 끝
