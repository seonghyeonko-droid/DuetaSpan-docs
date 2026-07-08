# v3_rags_35_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Who plays Mrs. Potato Head in Toy Story?
     2.82s  agent 발화 시작: <ret> That’s a good question. Estelle Harris voiced Mrs. Pot
     2.82s  <ret> 발화 (turn1 첫 프레임)
     2.82s  user  발화 끝
     3.46s  ⚡SPAN 주입 [d'=0.64s / d_lead=1.41s]: Estelle Harris provided the voice for Mrs. Potato Head in the Toy Stor
     8.45s  agent 발화 끝
