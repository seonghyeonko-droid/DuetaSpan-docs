# v3_inter_11_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: What was the first estate in the French Revolution?
     3.04s  agent 발화 시작: <ret> That’s a good question. The First Estate was made up o
     3.04s  <ret> 발화 (turn1 첫 프레임)
     3.04s  user  발화 끝
     3.92s  ⚡SPAN 주입 [d'=0.88s / d_lead=1.35s]: The First Estate comprised the clergy and held significant land and we
    10.13s  user  발화 시작: And how big was it, roughly, as a percentage of the populati
    10.13s  agent 발화 끝
    14.19s  agent 발화 시작: <ret> Let me give you a sense— The First Estate included aro
    14.19s  <ret> 발화 (turn3 첫 프레임)
    14.19s  user  발화 끝
    15.15s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.03s]: The First Estate represented approximately 0.5% of the French populati
    21.96s  user  발화 시작: Wow, that’s—
    21.96s  agent 발화 끝
    22.63s  agent 발화 시작: That’s remarkably small, isn’t it—
    22.63s  user  발화 끝
    24.32s  user  발화 시작: But… didn’t they have a lot of influence despite that?
    24.32s  agent 발화 끝
    27.70s  agent 발화 시작: Absolutely. Despite being a small fraction of the population
    27.70s  user  발화 끝
    32.76s  agent 발화 끝
