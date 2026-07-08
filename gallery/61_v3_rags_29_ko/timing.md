# v3_rags_29_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 누가 현재 NBA에서 가장 나이가 많은 선수인지 궁금합니다.
     3.67s  <ret> 발화 (turn1 첫 프레임)
     3.98s  user  발화 끝
     4.04s  agent 발화 시작: <ret> 그건 정말 재미있는 농구 관련 질문인데요, 빈스 카터 선수가 마흔셋 살로 NBA에서 가장 나이가 
     4.62s  ⚡SPAN 주입 [d'=0.96s / d_lead=3.32s]: <Vince Carter is the oldest player in the NBA, currently at age forty-
    11.64s  agent 발화 끝
