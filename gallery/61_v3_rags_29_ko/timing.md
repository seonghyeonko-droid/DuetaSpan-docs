# v3_rags_29_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 누가 현재 NBA에서 가장 나이가 많은 농구 선수인지 궁금합니다.
     4.06s  <ret> 발화 (turn1 첫 프레임)
     4.35s  user  발화 끝
     4.46s  agent 발화 시작: <ret> 좋은 질문이세요. 현재 NBA에서 가장 나이가 많은 선수는 빈스 카터 선수이시고, 마흔한 살이십니
     5.02s  ⚡SPAN 주입 [d'=0.96s / d_lead=5.49s]: Vince Carter is the oldest player in the NBA, at age forty-one as of O
    11.59s  agent 발화 끝
