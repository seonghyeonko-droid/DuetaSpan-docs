# v3_rags_34_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 얼굴 보니까 좋네. 올드 트래퍼드 경기장 지을 때 얼마 들었어?
     3.57s  <ret> 발화 (turn1 첫 프레임)
     4.17s  agent 발화 시작: <ret> 음, 찾아봤는데, 1909년에 올드 트래퍼드 경기장 건설에는 약 9만 파운드가 필요했답니다.
     4.35s  user  발화 끝
     4.57s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.19s]: Old Trafford’s construction in 1909 cost approximately ninety thousand
    10.19s  agent 발화 끝
