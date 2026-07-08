# v3_rags_34_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: How much did it cost to build Old Trafford?
     2.27s  <ret> 발화 (turn1 첫 프레임)
     2.59s  ⚡SPAN 주입 [d'=0.32s / d_lead=1.43s]: Old Trafford’s construction in 1909 cost approximately ninety thousand
     2.86s  agent 발화 시작: <ret> That’s a fascinating question. In nineteen-o-nine, bui
     2.91s  user  발화 끝
     7.86s  agent 발화 끝
