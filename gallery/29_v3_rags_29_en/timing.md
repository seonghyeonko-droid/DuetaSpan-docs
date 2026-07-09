# v3_rags_29_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Who is the oldest player currently playing in the NBA?
     3.18s  <ret> 발화 (turn1 첫 프레임)
     3.50s  agent 발화 시작: <ret> That’s a good question, and easily looked up for you. 
     3.75s  user  발화 끝
     4.70s  ⚡SPAN 주입 [d'=1.52s / d_lead=3.13s]: Vince Carter is the oldest active player in the NBA as of March 2020.
     9.76s  agent 발화 끝
