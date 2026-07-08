# v3_rags_34_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: When was the first American Girl doll made?
     2.27s  <ret> 발화 (turn1 첫 프레임)
     2.59s  ⚡SPAN 주입 [d'=0.32s / d_lead=1.56s]: The first American Girl doll was released in 1986.
     2.86s  agent 발화 시작: <ret> That’s a good question, actually. The very first Ameri
     2.91s  user  발화 끝
     7.86s  agent 발화 끝
