# v3_rags_29_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Who is the oldest basketball player currently playing in the
     3.85s  <ret> 발화 (turn1 첫 프레임)
     4.17s  agent 발화 시작: <ret> That’s a great question, and age is certainly a factor
     4.44s  user  발화 끝
     5.85s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.84s]: Vince Carter is the oldest player in the NBA as of November 2019, at a
    14.23s  agent 발화 끝
