# v3_chain_05_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 애틀랜타에서 마이애미 가는 기차표 두 장, 4월 5일에 찾아 줘.
     3.11s  <ret> 발화 (turn1 첫 프레임)
     3.50s  agent 발화 시작: <ret> —4월 5일에 출발하는 기차가 오전 8시, 오후 1시 30분, 그리고 오후 6시에 있어요.
     3.65s  user  발화 끝
     5.11s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.08s]: (tool result) There are three trains from Atlanta to Miami on April fi
    10.13s  agent 발화 끝
    10.15s  user  발화 시작: 그 가격들이 얼마야?
    11.14s  <ret> 발화 (turn3 첫 프레임)
    11.46s  agent 발화 시작: <ret> —요금은 1인당 각각 150달러, 125달러, 180달러예요.
    11.58s  user  발화 끝
    13.14s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.49s]: (tool result) The 8:00 AM train is $150 per person. The 1:30 PM train 
    15.80s  user  발화 시작: 저녁 6시 거 괜찮은 것 같아. 그거 두 자리 예약해 줘.
    15.95s  agent 발화 끝
    18.72s  <ret> 발화 (turn5 첫 프레임)
    19.12s  agent 발화 시작: <ret> —네, 그 좌석을 예약해 드렸어요. 저녁 6시 기차 2명 예약이 확정됐고, 총 금액은 360달러예
    19.26s  user  발화 끝
    20.72s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.29s]: (tool result) Reservation confirmed: Train to Miami, April fifth, 6:00
    26.63s  agent 발화 끝
    26.93s  user  발화 시작: 그 기차에 식당칸 있어?
    28.52s  agent 발화 시작: —곧 확인 이메일을 받으실 거예요.
    28.68s  user  발화 끝
    30.49s  agent 발화 끝
    31.25s  user  발화 시작: 그 기차에 식당칸 있어?
    32.50s  <ret> 발화 (turn9 첫 프레임)
    32.81s  agent 발화 시작: <ret> —그 기차의 편의 시설을 확인해 볼게요.
    32.91s  user  발화 끝
    33.00s  ⚡SPAN 주입 [d'=0.50s / d_lead=2.16s]: (tool result) The 6:00 PM train from Atlanta to Miami has a dining car
    34.88s  agent 발화 시작: 네, 그 기차에는 식당칸이 있고 와이파이도 이용할 수 있어요.
    34.97s  agent 발화 끝
    38.81s  agent 발화 끝
    38.95s  user  발화 시작: 좋네. 4월 5일 마이애미 날씨는 어때?
    41.78s  <ret> 발화 (turn12 첫 프레임)
    42.09s  agent 발화 시작: <ret> —날씨 예보를 확인해 볼게요. 4월 5일 마이애미는 섭씨 29도에 맑을 것으로 예상돼요.
    42.37s  user  발화 끝
    43.70s  ⚡SPAN 주입 [d'=1.92s / d_lead=3.86s]: (tool result) The forecast for Miami on April fifth is 85 degrees Fahr
    48.71s  agent 발화 끝
    48.72s  user  발화 시작: 정말 좋겠다. 그런 날씨에 특별히 챙겨가야 할 거 있어?
    52.03s  agent 발화 시작: —음, 따뜻하고 햇볕이 강하니까 가벼운 옷과 선크림은 필수예요. 모자랑 선글라스도 있으면 좋겠죠. 햇볕 차단
    52.28s  user  발화 끝
    62.66s  agent 발화 끝
