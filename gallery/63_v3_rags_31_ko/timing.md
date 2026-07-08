# v3_rags_31_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 다레데블 세 번째 시즌이 언제 나왔는지 궁금합니다.
     2.59s  <ret> 발화 (turn1 첫 프레임)
     2.83s  agent 발화 시작: <ret> 네, 많은 분들이 궁금해하시는 질문이라 알아봐 드릴 수 있습니다. 다레데블 세 번째 시즌은 천구백
     2.96s  user  발화 끝
     3.23s  ⚡SPAN 주입 [d'=0.64s / d_lead=6.36s]: Daredevil season three was released on Netflix on October 26, 2018.
    12.62s  agent 발화 끝
