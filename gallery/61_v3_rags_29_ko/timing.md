# v3_rags_29_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 현재 NBA에서 뛰는 선수 중에 가장 나이가 많은 선수가 누구예요?
     3.58s  <ret> 발화 (turn1 첫 프레임)
     3.88s  user  발화 끝
     3.97s  agent 발화 시작: <ret> 네, 정말 재미있는 질문이세요. 오늘 기준으로 빈스 카터 선수가 마흔한 살로 NBA에서 가장 나이
     4.54s  ⚡SPAN 주입 [d'=0.96s / d_lead=6.71s]: Vince Carter is the oldest player in the NBA, currently playing at age
    12.92s  agent 발화 끝
