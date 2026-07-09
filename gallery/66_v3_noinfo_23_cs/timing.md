# v3_noinfo_23_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 지난해 12월 24일 도쿄 날씨가 어땠어?
     2.54s  <ret> 발화 (turn1 첫 프레임)
     2.85s  agent 발화 시작: <ret> 네, 빠른 시간 안에 과거 날씨 데이터를 확인해 드릴게요… 지난 12월 24일 도쿄는 맑은 하늘이
     3.05s  user  발화 끝
     3.90s  ⚡SPAN 주입 [d'=1.36s / d_lead=4.73s]: (tool result) The weather in Tokyo on December twenty-fourth last year
    12.48s  user  발화 시작: 꽤 추웠겠네. 우에노 공원 근처에 괜찮은 카페 좀 찾아 줘.
    12.77s  agent 발화 끝
    16.38s  <ret> 발화 (turn3 첫 프레임)
    16.77s  agent 발화 시작: <ret> 네, 그 지역의 카페를 검색해 드릴게요… 카페 얀키 캔들은 우에노 공원에서 0.3킬로미터 떨어져 
    16.91s  user  발화 끝
    18.38s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.07s]: (tool result) Café Yankee Candle is located point-three kilometers fro
    25.78s  agent 발화 끝
    26.12s  user  발화 시작: 거기 말차 맛있는 곳이야?
    27.57s  <ret> 발화 (turn5 첫 프레임)
    27.72s  agent 발화 시작: <ret> 네, 말차에 대한 리뷰가 있는지 확인해 볼게요… 카페 얀키 캔들의 말차에 대해 "훌륭하다" 및 "
    27.92s  user  발화 끝
    29.33s  ⚡SPAN 주입 [d'=1.76s / d_lead=2.87s]: (tool result) Two reviews mention matcha, describing it as “excellent”
    36.34s  agent 발화 끝
    37.40s  user  발화 시작: 좋아 보이네! 알프스 야생화를 보러 여행을 가려고 하는데—
    41.72s  agent 발화 시작: 아, 같은 취미를 가진 분이시군요! 저는 많은 시간을—
    41.94s  user  발화 끝
    44.89s  user  발화 시작: 다테야마 구로베 주변 산에서는 야생화가 더 빨리 피어?
    45.65s  agent 발화 끝
    48.73s  agent 발화 시작: 정말 좋은 질문이에요. 다테야마 구로베 주변의 알프스 야생화는 일반적으로 고도 때문에 더 빨리 피어요—
    48.82s  user  발화 끝
    56.43s  agent 발화 시작: 다테야마 구로베 지역의 야생화는 더 높은 고도 때문에 일찍 피어요.
    56.56s  agent 발화 끝
    61.43s  agent 발화 끝
    61.52s  user  발화 시작: 그래. 혹시 특히 희귀한 종이 있어?
    64.06s  <ret> 발화 (turn12 첫 프레임)
    64.29s  agent 발화 시작: <ret> 네, 다테야마 구로베는 몇 가지 독특한 알프스 식물로 유명합니다… *Gentiana konishi
    64.39s  user  발화 끝
    65.42s  ⚡SPAN 주입 [d'=1.36s / d_lead=5.54s]: (tool result) Tateyama Kurobe Alpine Botanical Garden lists *Gentiana 
    69.32s  user  발화 시작: 응.
    69.73s  user  발화 끝
    74.59s  user  발화 시작: 음-음.
    74.81s  agent 발화 끝
    75.09s  agent 발화 시작: 특히 *Gentiana konishii*는 작고 생생한 파란색 꽃으로 매우 흥미롭습니다— *Gentiana 
    75.22s  user  발화 끝
    80.96s  user  발화 시작: 음.
    81.65s  user  발화 끝
    85.19s  agent 발화 끝
    85.47s  user  발화 시작: 다테야마 역으로 가는 버스 티켓을 다음 토요일로 예약하고 싶어.
    89.20s  <ret> 발화 (turn18 첫 프레임)
    89.59s  agent 발화 시작: <ret> 네, 해당 노선의 좌석 상황을 확인해 드릴게요… 다음 토요일 다테야마 역으로 가는 오전 9시와 오
    89.68s  user  발화 끝
    90.80s  ⚡SPAN 주입 [d'=1.60s / d_lead=3.53s]: (tool result) There are seats available on the nine AM and eleven AM b
    95.30s  user  발화 시작: 응.
    95.61s  user  발화 끝
    97.98s  agent 발화 끝
    98.26s  user  발화 시작: 오전 9시 버스로 좌석 예약해 줘.
   100.47s  <ret> 발화 (turn21 첫 프레임)
   100.54s  agent 발화 시작: <ret> 알겠습니다, 해당 버스 좌석을 예약해 드릴게요… 다음 토요일 오전 9시 다테야마 역으로 가는 버스
   100.70s  user  발화 끝
   102.47s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.61s]: (tool result) Your bus ticket to Tateyama Station for next Saturday at
   111.23s  user  발화 시작: 좋아. 다음 토요일 다테야마 날씨 예보는 어때?
   111.49s  agent 발화 끝
   114.33s  <ret> 발화 (turn23 첫 프레임)
   114.40s  agent 발화 시작: <ret> 네, 해당 지역의 예보를 확인해 드릴게요… 다음 토요일 다테야마는 부분적으로 흐리고 최고 기온은 
   114.61s  user  발화 끝
   116.33s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.94s]: (tool result) The forecast for Tateyama next Saturday is partly cloudy
   121.08s  user  발화 시작: 괜찮겠네. 도와줘서 고마워!
   121.30s  agent 발화 끝
   123.42s  agent 발화 시작: 천만에요. 계획을 세우는 데 도움이 되어 기쁩니다. 정말
   123.66s  user  발화 끝
   127.91s  agent 발화 끝
