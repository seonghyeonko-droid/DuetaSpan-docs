# v3_to_ot_12_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 사형에 대해 읽다가 궁금해졌는데, 영국이 공식적으로 사형을 폐지한 게 언제야?
     4.14s  <ret> 발화 (turn1 첫 프레임)
     4.73s  agent 발화 시작: <ret> 음, 그런 문제에 대해 생각하면 영국 역사도 꽤 오래됐으니까요.
     4.81s  user  발화 끝
     6.06s  ⚡SPAN 주입 [d'=1.92s / d_lead=3.83s]: The death penalty for all crimes was abolished in the United Kingdom i
     8.56s  agent 발화 끝
     8.59s  agent 발화 시작: 영국에서는 구십팔년에 사형이 완전히 폐지됐습니다.
    11.82s  agent 발화 끝
    12.00s  user  발화 시작: 구십팔년이라… 생각보다 최근이네, 진짜. 점진적으로 진행된 거야, 아니면 그냥—
    16.95s  agent 발화 시작: 사실 오랜 세월에 걸쳐서 조금씩 변화해 온 과정이었습니다.
    17.13s  user  발화 끝
    20.24s  user  발화 시작: 살인죄 같은 특정 범죄에 대해서는 그 전에 먼저 폐지했어?
    20.97s  agent 발화 끝
    23.38s  <ret> 발화 (turn6 첫 프레임)
    23.76s  user  발화 끝
    23.98s  agent 발화 시작: <ret> 네, 폐지는 단계적으로 이루어졌습니다.
    24.98s  ⚡SPAN 주입 [d'=1.60s / d_lead=2.58s]: Murder was removed from the list of capital crimes in 1965, with a per
    26.56s  agent 발화 끝
    26.71s  agent 발화 시작: 살인죄는 육십오년에 사형에서 제외됐고, 육십구년에 완전히 확정됐습니다.
    31.85s  agent 발화 끝
    32.01s  user  발화 시작: 그러니까, 사 년 동안 살인죄에 대해서는 다시 사형을 부과할 수 있는 기간이 있었던 거네? 그거 좀 불안정해
    38.35s  user  발화 끝
    38.44s  agent 발화 시작: 불안정하다는 표현이 딱 맞는 것 같아요. 그 몇 년 동안은 법적인 상황이 확실하지 않았을 거라고 생각합니다.
    44.22s  agent 발화 끝
