# v3_to_ot_12_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 사형에 대해 읽다가 궁금해졌는데, 영국이 공식적으로 사형을 폐지한 게 언제야?
     4.97s  <ret> 발화 (turn1 첫 프레임)
     5.37s  agent 발화 시작: <ret> 음, 그런 문제에 대해 오랜 역사를 생각해 보면 무거운 질문이네요.
     5.42s  user  발화 끝
     6.65s  ⚡SPAN 주입 [d'=1.68s / d_lead=4.35s]: The death penalty for all crimes was abolished in the United Kingdom i
     9.72s  agent 발화 끝
    10.08s  agent 발화 시작: 영국에서는 구십팔년에 사형이 완전히 폐지됐습니다.
    13.43s  user  발화 시작: 구십팔년이라… 생각보다 최근이네, 진짜. 점진적으로 진행된 거야, 아니면 그냥—
    13.50s  agent 발화 끝
    19.15s  agent 발화 시작: 사실 수십 년에 걸쳐 진화한 과정이었습니다.
    19.22s  user  발화 끝
    21.12s  user  발화 시작: 살인죄 같은 특정 범죄에 대해서는 그 전에 먼저 폐지했어?
    21.89s  agent 발화 끝
    24.93s  <ret> 발화 (turn6 첫 프레임)
    25.09s  agent 발화 시작: <ret> 네, 폐지는 단계적으로 이루어졌습니다.
    25.33s  user  발화 끝
    26.29s  ⚡SPAN 주입 [d'=1.36s / d_lead=2.67s]: Murder was removed from the list of capital crimes in 1965, with a per
    27.45s  agent 발화 시작: 살인은 육십오년에 사형 대상에서 제외됐고, 육십구년에 영구적으로 확정됐습니다.
    27.76s  agent 발화 끝
    33.61s  agent 발화 끝
    35.12s  user  발화 시작: 그러니까, 사 년 동안 살인에 대해서는 다시 사형을 부활시킬 수 있는 기간이었던 거야? 그거 좀 불안정해 보
    41.65s  agent 발화 시작: 불안정하다는 표현이 딱 맞네요. 그 몇 년 동안 법적인 상황이 확실히 불안정했을 거라고 생각합니다.
    41.75s  user  발화 끝
    47.44s  agent 발화 끝
