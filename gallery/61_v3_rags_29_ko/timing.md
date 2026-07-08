# v3_rags_29_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 누가 현재 NBA에서 가장 나이가 많은 선수인지 궁금합니다.
     3.81s  <ret> 발화 (turn1 첫 프레임)
     4.03s  user  발화 끝
     4.21s  agent 발화 시작: <ret> 좋은 질문이세요. 프로 스포츠에서 오랫동안 활약하는 모습은 언제나 흥미로운 것 같아요. 현재 빈스
     4.78s  ⚡SPAN 주입 [d'=0.96s / d_lead=7.17s]: Vince Carter is the oldest player in the NBA, currently age forty-one 
    15.47s  agent 발화 끝
