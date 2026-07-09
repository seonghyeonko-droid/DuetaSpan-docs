# v3_rags_31_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 데어데블 시즌 3은 언제 나왔어요?
     2.30s  <ret> 발화 (turn1 첫 프레임)
     2.54s  agent 발화 시작: <ret> 네, 확인해 봤는데 다레데블 시즌 3는 이천십팔 년 10월 26일에 공개됐습니다.
     2.72s  user  발화 끝
     3.34s  ⚡SPAN 주입 [d'=1.04s / d_lead=4.47s]: Daredevil season three was released on October 26, 2018.
     8.01s  agent 발화 끝
