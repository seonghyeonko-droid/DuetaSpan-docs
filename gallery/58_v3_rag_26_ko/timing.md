# v3_rag_26_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 음, 어떤 나라 국기가 검은색, 빨간색, 노란색이야?
     3.92s  <ret> 발화 (turn1 첫 프레임)
     4.31s  agent 발화 시작: <ret> 그거 궁금하네. 국기 찾아볼까?
     4.45s  user  발화 끝
     5.36s  ⚡SPAN 주입 [d'=1.44s / d_lead=2.49s]: The flag of Germany is composed of three horizontal bands of black, re
     6.71s  agent 발화 시작: 독일 국기가 검은색, 빨간색, 금색 가로 줄무늬로 되어 있어.
     6.80s  agent 발화 끝
     8.15s  user  발화 시작: 그렇죠.
     8.70s  user  발화 끝
    11.61s  user  발화 시작: 아, 흥미롭네요. 그 색깔들이 항상 독일을 상징했나요?
    11.71s  agent 발화 끝
    14.94s  <ret> 발화 (turn5 첫 프레임)
    15.25s  agent 발화 시작: <ret> 그 의미가 시간이 지나면서 바뀌었지.
    15.44s  user  발화 끝
    16.06s  ⚡SPAN 주입 [d'=1.12s / d_lead=2.78s]: The black, red, and gold colors were adopted in 1848 during the German
    17.93s  agent 발화 시작: 그 색깔들은 천팔백사십팔년에 자유를 상징하면서 채택됐어.
    18.03s  agent 발화 끝
    19.50s  user  발화 시작: 예.
    20.03s  user  발화 끝
    23.02s  agent 발화 끝
    23.30s  user  발화 시작: 그거 재미있네요. 무역로에 대해 읽고 있었는데… 독일이 역사적으로 서아프리카와 많은 무역을 했나요?
    29.74s  <ret> 발화 (turn9 첫 프레임)
    30.05s  agent 발화 시작: <ret> 그래, 무역망이 그때도 꽤 멀리 뻗어 있었어.
    30.15s  user  발화 끝
    31.18s  ⚡SPAN 주입 [d'=1.44s / d_lead=3.60s]: From the seventeenth to the nineteenth centuries, German merchants tra
    33.53s  agent 발화 시작: 독일 상인들이 십칠세기부터 십구세기까지 서아프리카 왕국들과 금을 위해 직물을 거래했어.
    33.66s  agent 발화 끝
    39.73s  user  발화 시작: 와, 직물로 금이라니… 정말 좋은 거래네요. 주로 어떤 왕국들과 거래했나요?
    40.06s  agent 발화 끝
    45.12s  <ret> 발화 (turn12 첫 프레임)
    45.31s  user  발화 끝
    45.44s  agent 발화 시작: <ret> 몇몇 왕국들이 다른 왕국들보다 더 믿음직한 거래 파트너였지, 당연히.
    47.12s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.74s]: The Gold Coast, now Ghana, was a key trading partner with German merch
    51.08s  agent 발화 시작: 골드 코스트, 지금의 가나, 가 중요한 무역 파트너였고, 상당한 금 자원을 제공했어.
    51.18s  agent 발화 끝
    58.54s  agent 발화 끝
