# v3_to_ot_11_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 누가 UAAP 71시즌 여자 배구 신인왕을 받았는지 알아?
     3.30s  <ret> 발화 (turn1 첫 프레임)
     3.54s  agent 발화 시작: <ret> 아, 좋은 질문인데요— 스포츠 역사에 대한 질문이네요! 젤리 부안 선수가 71시즌 여자 배구에서 
     3.56s  user  발화 끝
     5.30s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.54s]: Jelly Buan was awarded the UAAP Season 71 Women’s Volleyball Rookie of
    11.61s  agent 발화 끝
    11.68s  user  발화 시작: 오, 진짜? 그럼 포지션은 뭐였어?
    14.04s  agent 발화 시작: 그 선수는 아웃사이드 히터였는데, 파워풀한 스파이크와 꾸준한 플레이로 유명했어요—
    14.23s  user  발화 끝
    18.58s  user  발화 시작: 그 시즌에 베스트 스코어도 받았어?
    19.13s  agent 발화 끝
    20.56s  user  발화 끝
    20.90s  agent 발화 시작: 좋은 질문이시네요— 확인해 볼게요—
    22.60s  agent 발화 끝
    22.62s  <ret> 발화 (turn6 첫 프레임)
    22.70s  agent 발화 시작: <ret> 네, 젤리 부안 선수가 그 시즌에 신인왕과 베스트 스코어 둘 다 받았어요.
    23.66s  ⚡SPAN 주입 [d'=1.04s / d_lead=4.81s]: Jelly Buan was named both Rookie of the Year and Best Scorer in UAAP S
    25.85s  user  발화 시작: 응응.
    26.67s  user  발화 끝
    27.51s  agent 발화 끝
    27.57s  agent 발화 시작: 그녀에게는 정말 훌륭한 데뷔 시즌이었고, 아주 인상적인 경기였어요— 정말 눈에 띄었어요.
    33.18s  agent 발화 끝
