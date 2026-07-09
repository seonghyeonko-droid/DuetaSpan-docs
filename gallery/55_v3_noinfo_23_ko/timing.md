# v3_noinfo_23_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 지난해 12월 24일 도쿄 날씨가 어땠어?
     2.42s  <ret> 발화 (turn1 첫 프레임)
     2.57s  agent 발화 시작: <ret> 네, 빠르게 해당 날짜의 기상 데이터를 확인해 드릴게요… 지난 12월 24일 도쿄는 맑은 하늘이었
     2.72s  user  발화 끝
     4.42s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.34s]: (tool result) The weather in Tokyo on December twenty-fourth last year
    13.24s  agent 발화 끝
    13.30s  user  발화 시작: 꽤 추웠겠네. 우에노 공원 근처에 괜찮은 카페 좀 찾아 줘.
    17.60s  user  발화 끝
    17.64s  <ret> 발화 (turn3 첫 프레임)
    17.72s  agent 발화 시작: <ret> 네, 해당 지역의 카페를 검색해 드릴게요… 카페 얀키 캔들은 우에노 공원에서 0.3킬로미터 떨어져
    19.64s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.38s]: (tool result) Café Yankee Candle is located point-three kilometers fro
    25.50s  agent 발화 끝
    25.64s  user  발화 시작: 거기 말차 맛있는 곳이야?
    26.75s  <ret> 발화 (turn5 첫 프레임)
    27.07s  agent 발화 시작: <ret> 네, 말차에 대한 리뷰가 있는지 확인해 볼게요… 카페 얀키 캔들의 말차에 대해 “훌륭하다” 또는 
    27.30s  user  발화 끝
    27.71s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.78s]: (tool result) Two reviews mention matcha, describing it as “excellent”
    35.41s  agent 발화 끝
    35.61s  user  발화 시작: 좋아 보이네! 알프스 야생화 보러 여행 가려고 하는데—
    38.92s  agent 발화 시작: 아, 같은 취미를 가지셨군요! 저는 많은 시간을—
    39.07s  user  발화 끝
    41.84s  user  발화 시작: 다테야마 구로베 주변 산에서는 야생화가 더 빨리 피어?
    42.52s  agent 발화 끝
    45.22s  user  발화 끝
    45.43s  agent 발화 시작: 정말 좋은 질문이에요. 다테야마 구로베 주변의 알프스 야생화는 일반적으로 고도 때문에 더 빨리 피어요—
    52.46s  agent 발화 시작: 다테야마 구로베 지역의 야생화는 고도가 높아서 더 빨리 피어납니다.
    52.61s  agent 발화 끝
    56.34s  agent 발화 끝
    56.36s  user  발화 시작: 그래. 혹시 특히 희귀한 종류가 있어?
    58.93s  <ret> 발화 (turn12 첫 프레임)
    59.17s  agent 발화 시작: <ret> 네, 다테야마 구로베는 몇 가지 독특한 알프스 식물로 유명합니다… *Gentiana konishi
    59.27s  user  발화 끝
    60.93s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.35s]: (tool result) Tateyama Kurobe Alpine Botanical Garden lists *Gentiana 
    64.09s  user  발화 시작: 응.
    64.44s  user  발화 끝
    69.33s  agent 발화 끝
    69.92s  user  발화 시작: 음-음.
    70.55s  user  발화 끝
    70.68s  agent 발화 시작: 특히 *Gentiana konishii*는 작고 생생한 파란색 꽃으로 매우 흥미롭습니다— *Gentiana 
    76.56s  user  발화 시작: 음.
    77.00s  user  발화 끝
    80.65s  agent 발화 끝
    81.03s  user  발화 시작: 다테야마 역으로 가는 버스 티켓 다음 토요일로 예약해 줘.
    84.43s  <ret> 발화 (turn18 첫 프레임)
    84.66s  agent 발화 시작: <ret> 네, 해당 노선의 좌석 상황을 확인해 드릴게요… 다음 토요일 다테야마 역으로 가는 오전 9시와 오
    84.82s  user  발화 끝
    85.71s  ⚡SPAN 주입 [d'=1.28s / d_lead=3.51s]: (tool result) There are seats available on the nine AM and eleven AM b
    90.35s  user  발화 시작: 응.
    90.80s  user  발화 끝
    93.00s  agent 발화 끝
    93.26s  user  발화 시작: 오전 9시 버스로 좌석 예약해 줘.
    95.39s  <ret> 발화 (turn21 첫 프레임)
    95.71s  agent 발화 시작: <ret> 알겠습니다, 해당 버스 좌석을 예약해 드릴게요… 다음 토요일 오전 9시 다테야마 역으로 가는 버스
    95.84s  user  발화 끝
    97.15s  ⚡SPAN 주입 [d'=1.76s / d_lead=4.55s]: (tool result) Your bus ticket to Tateyama Station for next Saturday at
   106.47s  user  발화 시작: 좋아. 다음 토요일 다테야마 날씨 예보는 어때?
   106.52s  agent 발화 끝
   110.04s  user  발화 끝
   110.05s  <ret> 발화 (turn23 첫 프레임)
   110.21s  agent 발화 시작: <ret> 네, 해당 지역의 예보를 확인해 드릴게요… 다음 토요일 다테야마는 부분적으로 흐리고 최고 기온은 
   112.05s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.00s]: (tool result) The forecast for Tateyama next Saturday is partly cloudy
   117.15s  user  발화 시작: 괜찮겠네. 도움 많이 줘서 고마워!
   117.20s  agent 발화 끝
   119.52s  agent 발화 시작: 천만에요. 계획하시는 데 도움이 되어 기쁩니다. 정말
   119.63s  user  발화 끝
   122.48s  agent 발화 끝
