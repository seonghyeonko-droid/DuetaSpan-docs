# v3_rag_27_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# EXAMINER(FDB-v2) 단계: S1 럭스 아우룬케에 대해 읽어봤는데, 궁금한 게 있어요—언제 태어 | S2 천구백칠십 년… 그가 한 일을 생각하면 의외로 최근이네요. | S3 혹시 그의 어린 시절에 대해 아는 게 있어요— | S4 거기서 이미 만들어지고 있던 예술에 영향을 받았나요?

     0.00s  user  발화 시작: 럭스 아우룬케에 대해 읽어봤는데, 궁금한 게 있어요—언제 태어났나요?
     5.60s  <ret> 발화 (turn1 첫 프레임)
     5.67s  agent 발화 시작: <ret> 응, 좋은 질문이야. 기록에 따르면 천구백칠십 년에 태어났어.
     5.88s  user  발화 끝
     7.60s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.03s]: Lux Aurunque was born in nineteen seventy.
     7.74s  user  발화 시작: 네.
     8.09s  user  발화 끝
     9.20s  user  발화 시작: 천구백칠십 년… 그가 한 일을 생각하면 의외로 최근이네요.
     9.70s  agent 발화 끝
    13.97s  user  발화 끝
    14.29s  agent 발화 시작: 그렇지? 좀 놀랍지 않아? 그가 살았던 때보다 훨씬 더 오래된 영향을 준 것 같아.
    17.88s  user  발화 시작: 음.
    18.33s  user  발화 끝
    20.45s  agent 발화 끝
    20.71s  user  발화 시작: 혹시 그의 어린 시절에 대해 아는 게 있어요—
    23.87s  <ret> 발화 (turn7 첫 프레임)
    23.94s  agent 발화 시작: <ret> 그의 어린 시절에 대해 몇 가지 이야기해 줄 수 있어— 이탈리아 알프스 산맥의 작은 마을에서 어린
    23.99s  user  발화 끝
    25.87s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.43s]: Lux Aurunque spent his childhood in a small village nestled in the Ita
    28.17s  user  발화 시작: 예.
    28.67s  user  발화 끝
    31.91s  agent 발화 끝
    34.36s  user  발화 시작: 거기서 이미 만들어지고 있던 예술에 영향을 받았나요?
    38.14s  agent 발화 시작: 좋은 지적이야—
    38.15s  user  발화 끝
    39.11s  <ret> 발화 (turn11 첫 프레임)
    39.33s  agent 발화 시작: <ret> 그 마을은 그의 젊은 시절에 청동 조각의 중심지로 알려져 있었어.
    39.42s  agent 발화 끝
    41.11s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.34s]: The village was a known center for bronze sculpting during Aurunque’s 
    43.67s  agent 발화 끝
