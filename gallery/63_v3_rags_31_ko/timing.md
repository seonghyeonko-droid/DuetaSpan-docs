# v3_rags_31_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 다레데블 시즌 3는 언제 나왔는지 궁금합니다.
     2.83s  <ret> 발화 (turn1 첫 프레임)
     3.07s  agent 발화 시작: <ret> 네, 잠깐만 확인해 볼게요… 다레데블 시즌 3는 이천십팔 년 십월 이십육 일에 공개됐습니다.
     3.23s  user  발화 끝
     3.33s  ⚡SPAN 주입 [d'=0.50s / d_lead=4.75s]: Daredevil season three was released on October 26, 2018.
     9.93s  agent 발화 끝
