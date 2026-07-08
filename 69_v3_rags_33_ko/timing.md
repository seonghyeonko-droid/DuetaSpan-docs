# v3_rags_33_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 누가 베로니카야?
     0.92s  <ret> 발화 (turn1 첫 프레임)
     1.08s  ⚡SPAN 주입 [d'=0.16s / d_lead=1.99s]: Angela Robinson portrays the character Veronica Harrington on the tele
     1.42s  user  발화 끝
     1.48s  agent 발화 시작: <ret> 그렇군요. “Have and the Have Nots”에서 베로니카 해링턴은 안젤라 로빈슨이 연기
     6.94s  agent 발화 끝
