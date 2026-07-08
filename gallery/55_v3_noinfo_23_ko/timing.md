# v3_noinfo_23_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 도쿄 작년 12월 24일 날씨가 어땠어?
     2.41s  <ret> 발화 (turn1 첫 프레임)
     2.56s  agent 발화 시작: <ret> 네, 빠른 시간 안에 과거 날씨 데이터를 확인해 드릴게요… 작년 12월 24일 도쿄는 맑은 하늘이
     2.72s  user  발화 끝
     4.41s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.39s]: (tool result) The weather in Tokyo on December twenty-fourth last year
    11.78s  agent 발화 끝
    11.89s  user  발화 시작: 듣기엔…나쁘지 않네. 후지산 근처에 괜찮은 하이킹 코스 좀 찾아 줘.
    16.31s  <ret> 발화 (turn3 첫 프레임)
    16.61s  user  발화 끝
    16.71s  agent 발화 시작: <ret> 네, 해당 지역의 하이킹 코스를 검색해 드릴게요… 후지산 단풍 회랑길은 길이가 3.5킬로미터이고,
    18.31s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.24s]: (tool result) The Mount Fuji Red Maple Corridor trail is three point f
    25.09s  agent 발화 끝
    25.27s  user  발화 시작: 완벽하네. 지금은 열려 있어?
    26.69s  <ret> 발화 (turn5 첫 프레임)
    27.01s  agent 발화 시작: <ret> 네, 해당 코스의 현재 상태를 확인해 드릴게요… 후지산 단풍 회랑길은 현재 개방되어 있고 하이킹하
    27.25s  user  발화 끝
    27.65s  ⚡SPAN 주입 [d'=0.96s / d_lead=3.58s]: (tool result) The Mount Fuji Red Maple Corridor trail is currently ope
    33.73s  agent 발화 끝
    33.89s  user  발화 시작: 좋네. 내년에 봄에 스위스 알프스 여행도 계획 중인데—
    37.69s  agent 발화 시작: 아, 스위스 알프스는 특히 봄에 멋진 곳이죠—
    37.86s  user  발화 끝
    40.58s  user  발화 시작: …거기 고산 야생화에 대해 아는 거 있어? 특히 에델바이스 말이야.
    41.39s  agent 발화 끝
    44.61s  user  발화 끝
    44.82s  agent 발화 시작: 에델바이스는 정말 상징적인 꽃이고, 저도 정말 좋아해요. 과거에 너무 많이 채취해서 보호종으로 지정되었다는 
    52.24s  agent 발화 끝
    52.26s  user  발화 시작: 정말? 몰랐어.
    53.53s  agent 발화 시작: 네, 많은 지역에서 취약종으로 분류되어 있어요. 해발 1000미터에서 3000미터 사이의 석회암 바위 경사면
    53.73s  user  발화 끝
    58.53s  user  발화 시작: 응.
    58.98s  user  발화 끝
    61.85s  <ret> 발화 (turn13 첫 프레임)
    62.08s  agent 발화 시작: <ret> 네, 서식지를 고려하면 꽤 특수한 식물이에요… 에델바이스는 7월부터 9월까지 꽃을 피우고, 꽃잎은
    62.10s  agent 발화 끝
    63.85s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.14s]: (tool result) The Edelweiss flower blooms from July to September, and 
    71.07s  agent 발화 끝
    71.67s  user  발화 시작: 그럼 6월 초에는 피어 있지 않겠네?
    73.60s  user  발화 끝
    73.66s  agent 발화 시작: 네, 6월 초는 보통 개화 시기가 아니에요. 그때는 봉오리만 볼 수 있을 거예요.
    78.75s  agent 발화 끝
    79.47s  user  발화 시작: 알아두면 좋겠네. 인터라켄 호텔을 발코니가 있는 방으로 예약해 줘.
    83.53s  <ret> 발화 (turn17 첫 프레임)
    83.76s  agent 발화 시작: <ret> 네, 인터라켄에서 발코니가 있는 호텔을 검색해 드릴게요… 호텔 크렙스는 5월 10일부터 17일까지
    83.81s  user  발화 끝
    85.53s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.89s]: (tool result) The Hotel Krebs in Interlaken has rooms with balconies a
    94.94s  user  발화 시작: 예약해 줘.
    95.03s  agent 발화 끝
    95.90s  user  발화 끝
