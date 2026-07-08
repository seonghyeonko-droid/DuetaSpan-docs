# v3_rags_29_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 현재 NBA에서 가장 나이 많은 농구 선수가 누구예요?
     2.85s  <ret> 발화 (turn1 첫 프레임)
     3.19s  user  발화 끝
     3.25s  agent 발화 시작: <ret> 음, 현재 NBA에서 가장 나이가 많은 선수는 빈스 카터 선수이시고, 마흔한 살이세요.
     3.81s  ⚡SPAN 주입 [d'=0.96s / d_lead=4.23s]: Vince Carter is the oldest player in the NBA, at age forty-one.
     8.90s  agent 발화 끝
