# v3_rags_29_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 현재 NBA에서 뛰는 선수 중에 가장 나이가 많은 선수가 누구예요?
     4.04s  <ret> 발화 (turn1 첫 프레임)
     4.39s  user  발화 끝
     4.44s  agent 발화 시작: <ret> 음, 빈스 카터 선수가 현재 NBA에서 가장 나이가 많은 선수인데, 마흔한 살이에요.
     5.00s  ⚡SPAN 주입 [d'=0.96s / d_lead=5.79s]: Vince Carter is the oldest player in the NBA, currently age forty-one.
    11.39s  agent 발화 끝
