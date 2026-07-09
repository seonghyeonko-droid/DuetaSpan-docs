# v3_rags_29_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 현재 NBA에서 뛰는 선수 중에 가장 나이가 많은 선수가 누구예요?
     4.41s  <ret> 발화 (turn1 첫 프레임)
     4.54s  user  발화 끝
     4.56s  agent 발화 시작: <ret> 음, 현재 NBA에서 가장 나이가 많은 선수는 빈스 카터 선수이시고요, 마흔한 살이세요.
     6.33s  ⚡SPAN 주입 [d'=1.92s / d_lead=3.57s]: Vince Carter is currently the oldest player in the NBA, at age forty-o
     9.32s  agent 발화 끝
