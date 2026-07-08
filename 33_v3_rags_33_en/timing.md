# v3_rags_33_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Who is veronica on have and have nots?
     2.21s  <ret> 발화 (turn1 첫 프레임)
     2.81s  agent 발화 시작: <ret> That’s a good question. Angela Robinson plays Veronica
     2.96s  user  발화 끝
     3.09s  ⚡SPAN 주입 [d'=0.88s / d_lead=1.59s]: Angela Robinson portrays the character Veronica Harrington on the tele
     8.78s  agent 발화 끝
