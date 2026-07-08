# v3_hesit_18_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 폼페이에 대해 읽다가… 음… 베수비오 화산이 마지막으로 폭발한 게 언제였는지 궁금해졌어요.
     6.00s  <ret> 발화 (turn1 첫 프레임)
     6.25s  user  발화 끝
     6.32s  agent 발화 시작: <ret> 정말 자연스러운 질문이에요. 그 지역의 역사를 생각하면 당연히 궁금하실 것 같아요.
     8.00s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.93s]: Mount Vesuvius last erupted in March of 1944.
    12.25s  agent 발화 끝
    12.26s  agent 발화 시작: 베수비오 화산의 마지막 폭발은 천구백사십사년 삼월에 일어났습니다.
    16.84s  agent 발화 끝
    18.02s  user  발화 시작: 천구백사십사년… 와. 그게 폼페이를 묻어버린 폭발만큼 컸나요?
    24.18s  <ret> 발화 (turn4 첫 프레임)
    24.36s  user  발화 끝
    24.50s  agent 발화 시작: <ret> 다행히도 천구백사십사년 폭발은 칠십구년 폭발만큼 크지는 않았습니다.
    25.14s  ⚡SPAN 주입 [d'=0.96s / d_lead=5.32s]: The 1944 eruption was characterized by lava flows and Strombolian acti
    29.79s  agent 발화 시작: 천구백사십사년 폭발은 주로 용암류와 스트롬볼리형 분출을 포함했습니다.
    29.82s  agent 발화 끝
    34.97s  agent 발화 끝
    35.05s  user  발화 시작: 스트롬볼리형이 뭔데요? 그게—
    38.14s  user  발화 끝
    38.23s  agent 발화 시작: 스트롬볼리형 분출은 비교적 가벼운 폭발입니다.
    40.84s  user  발화 시작: 그때 근처에 사는 사람들도 있었나요? 천구백사십사년에 화산 경사면에 사람들이 살고 있었는지 궁금해요.
    41.47s  agent 발화 끝
    48.31s  <ret> 발화 (turn9 첫 프레임)
    48.40s  user  발화 끝
    48.55s  agent 발화 시작: <ret> 영향을 이해하려면 중요한 세부 사항입니다.
    49.51s  ⚡SPAN 주입 [d'=1.20s / d_lead=3.05s]: Approximately three thousand people lived on the slopes of Vesuvius in
    51.56s  agent 발화 시작: 천구백사십사년에 베수비오 화산 경사면에는 약 삼천 명이 살고 있었습니다.
    51.59s  agent 발화 끝
    56.84s  agent 발화 끝
    57.58s  user  발화 시작: 삼천 명… 많네요. 그래서 대피했겠죠?
    60.46s  agent 발화 시작: 네, 사건 전후에 상당한 대피가 있었습니다.
    60.63s  user  발화 끝
    63.18s  agent 발화 끝
