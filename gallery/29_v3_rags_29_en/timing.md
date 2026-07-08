# v3_rags_29_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Who’s the oldest player currently playing in the NBA?
     2.85s  <ret> 발화 (turn1 첫 프레임)
     3.16s  agent 발화 시작: <ret> That’s an interesting question, and one I can certainl
     3.38s  user  발화 끝
     4.85s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.81s]: Vince Carter is the oldest player in the NBA, currently playing at age
    12.06s  agent 발화 끝
