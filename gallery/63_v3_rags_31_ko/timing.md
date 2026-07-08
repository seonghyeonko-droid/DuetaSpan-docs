# v3_rags_31_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 다레데블 세 번째 시즌이 언제 나왔는지 궁금합니다.
     3.00s  <ret> 발화 (turn1 첫 프레임)
     3.23s  agent 발화 시작: <ret> 네, 다레데블 세 번째 시즌은 이천십팔년 십월 이십육일에 공개됐습니다.
     3.24s  user  발화 끝
     3.64s  ⚡SPAN 주입 [d'=0.64s / d_lead=5.42s]: Daredevil season three was released on October 26, 2018.
     8.65s  agent 발화 끝
