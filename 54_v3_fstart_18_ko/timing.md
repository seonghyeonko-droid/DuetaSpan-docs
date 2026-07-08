# v3_fstart_18_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 야, 타임스퀘어까지 풀 라이드 좀 불러줘, 나 혼자.
     1.89s  <ret> 발화 (turn1 첫 프레임)
     2.13s  ⚡SPAN 주입 [d'=0.24s / d_lead=0.38s]: (tool result) A pool ride to Times Square is estimated at 22 dollars a
     2.48s  agent 발화 시작: <ret> 어, 그래. 타임스퀘어까지 풀 라이드 비용은 스물두 달러고, 대략 열여덟 분 정도 걸릴 거야.
     2.58s  user  발화 끝
     7.80s  agent 발화 끝
     8.01s  user  발화 시작: 좋아, 그럼 바로 예약해 줘.
     9.82s  <ret> 발화 (turn3 첫 프레임)
    10.06s  ⚡SPAN 주입 [d'=0.24s / d_lead=0.53s]: (tool result) Ride confirmed. Pickup in 3 minutes, driver is David, ve
    10.41s  agent 발화 시작: <ret> 좋네. 데이비드, 은색 토요타 타고 세 분 안에 도착할 거야, 예약 완료됐어.
    10.59s  user  발화 끝
    16.30s  user  발화 시작: 오, 혹시 알피니안 젠티안에 대해 아냐?
    16.71s  agent 발화 끝
    19.68s  user  발화 끝
    19.76s  agent 발화 시작: 알피니안 젠티안은 진짜 매력적인 야생화인데, 보통 짙은 남색이고 고지대 초원에서 많이 찾아볼 수 있어.
    22.31s  user  발화 시작: 오, 예쁘다. 키우기 어려워?
    22.34s  agent 발화 끝
    24.52s  user  발화 끝
    24.65s  agent 발화 시작: 키우는 게 엄청 까다로워, 원래 사는 곳이랑 환경이 많이 달라야 하거든.
    29.05s  agent 발화 끝
