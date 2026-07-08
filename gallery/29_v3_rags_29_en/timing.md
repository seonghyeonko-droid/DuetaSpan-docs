# v3_rags_29_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Who is the oldest player currently playing in the NBA?
     3.11s  <ret> 발화 (turn1 첫 프레임)
     3.43s  agent 발화 시작: <ret> That’s an interesting question about professional bask
     3.66s  user  발화 끝
     4.63s  ⚡SPAN 주입 [d'=1.52s / d_lead=2.63s]: <Vince Carter is the oldest player in the NBA, currently at age forty-
    10.94s  agent 발화 끝
