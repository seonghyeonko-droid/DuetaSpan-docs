# v3_selfc_08_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 시카고에서 덴버까지 세 명, 5월 10일 버스 좀 보여 줘.
     4.09s  <ret> 발화 (turn1 첫 프레임)
     4.33s  agent 발화 시작: <ret> 알아보고 있어요… 5월 10일에 버스가 세 대 있어요. 아침 8시에 250달러, 오후 2시에 28
     4.44s  user  발화 끝
     6.09s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.39s]: (tool result) Three buses run from Chicago to Denver on May tenth: one
    14.99s  agent 발화 끝
    15.47s  user  발화 시작: 밤 10시 거 괜찮은 것 같아. 예약해 줘.
    18.29s  <ret> 발화 (turn3 첫 프레임)
    18.45s  agent 발화 시작: <ret> 네, 확인해 드릴게요… 밤 10시에 세 분 예약이 완료됐습니다. 예약 번호는 칠 팔 구 사 오 육
    18.61s  user  발화 끝
    19.25s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.34s]: (tool result) Your reservation for three passengers on the 10:00 PM bu
    25.08s  agent 발화 끝
    25.29s  user  발화 시작: 좋아. 그럼 덴버 5월 10일 날씨는 어때?
    28.27s  <ret> 발화 (turn5 첫 프레임)
    28.59s  agent 발화 시작: <ret> 덴버 날씨는 알아두면 좋겠죠… 5월 10일 덴버는 맑을 거예요. 최고 기온은 섭씨 24도, 최저 
    28.66s  user  발화 끝
    30.27s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.88s]: (tool result) The forecast for Denver on May tenth is sunny, with a hi
    37.81s  agent 발화 끝
    37.86s  user  발화 시작: 음, 24도… 아니, 21도가 더 좋겠다.
    41.31s  <ret> 발화 (turn7 첫 프레임)
    41.70s  user  발화 끝
    41.71s  agent 발화 시작: <ret> 다시 한번 확인해 드릴게요… 예보에 따르면 맑고, 최고 기온은 섭씨 24도, 최저 기온은 섭씨 1
    42.75s  ⚡SPAN 주입 [d'=1.44s / d_lead=3.16s]: (tool result) The forecast for Denver on May tenth is sunny, with a hi
    50.14s  agent 발화 끝
    50.37s  user  발화 시작: 덴버 버스 정류장 근처에 볼 만한 거 있어?
    52.61s  <ret> 발화 (turn9 첫 프레임)
    52.85s  agent 발화 시작: <ret> 오, 덴버는 볼거리가 정말 많아요… 덴버 미술관은 버스 정류장에서 약 1.6킬로미터 거리에 있고,
    53.10s  user  발화 끝
    53.11s  ⚡SPAN 주입 [d'=0.50s / d_lead=3.94s]: <ret>
    59.76s  user  발화 시작: 응.
    60.25s  user  발화 끝
    64.12s  agent 발화 끝
    64.17s  agent 발화 시작: 정말 훌륭한 컬렉션이에요.
    66.10s  agent 발화 끝
    67.20s  user  발화 시작: 콜럼버스 이전 시대 예술? 그게 뭔데 좀 더 자세히 말해 봐.
    71.63s  agent 발화 시작: 음, 그 미술관에는 안데스 지역의 세라믹과 직물 컬렉션이 정말 훌륭하고, 수백 년 전부터 이어져 왔어요.
    71.69s  user  발화 끝
    78.11s  agent 발화 끝
    78.78s  user  발화 시작: 그 작품들 위주로 하는 가이드 투어 같은 거 있어?
    81.94s  <ret> 발화 (turn15 첫 프레임)
    82.25s  agent 발화 시작: <ret> 가이드 투어는 컬렉션을 경험하기에 좋은 방법이에요…
    82.47s  user  발화 끝
    83.30s  ⚡SPAN 주입 [d'=1.36s / d_lead=4.35s]: (tool result) Guided tours of the Pre-Columbian collection at the Denv
    86.60s  agent 발화 끝
