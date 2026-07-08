# v3_rags_31_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 다레데블 세 번째 시즌이 언제 나왔는지 궁금합니다.
     2.95s  <ret> 발화 (turn1 첫 프레임)
     3.19s  agent 발화 시작: <ret> 네, 빠르게 확인해 드릴게요… 다레데블 세 번째 시즌은 이천십팔 년 십 월 이십육 일에 공개됐습니
     3.32s  user  발화 끝
     3.45s  ⚡SPAN 주입 [d'=0.50s / d_lead=4.25s]: Daredevil season three was released on October 26, 2018.
    10.28s  agent 발화 끝
