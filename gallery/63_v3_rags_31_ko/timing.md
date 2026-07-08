# v3_rags_31_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 다레데블 세 번째 시즌이 언제 나왔는지 궁금합니다.
     2.81s  <ret> 발화 (turn1 첫 프레임)
     3.05s  agent 발화 시작: <ret> 네, 잠깐만 알아봐 드릴게요… 다레데블 세 번째 시즌은 이천십팔 년 십월 이십육 일에 처음 공개됐
     3.19s  user  발화 끝
     3.31s  ⚡SPAN 주입 [d'=0.50s / d_lead=4.81s]: Daredevil season three was released on October 26, 2018.
    11.07s  agent 발화 끝
