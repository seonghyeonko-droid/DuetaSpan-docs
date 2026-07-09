# v3_selfc_07_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# EXAMINER(FDB-v2) 단계: S1 6월 15일에 그랜드뷰 로프트에서 보여주실 수 있나요? | S2 애완동물 정책은 어떤가요? | S3 옥상 테라스는 좋네요. 월세는 얼마인가요? | S4 알겠습니다. 그 동네는 어떤가요?

     0.00s  user  발화 시작: 6월 15일에 그랜드뷰 로프트에서 보여주실 수 있나요?
     3.66s  <ret> 발화 (turn1 첫 프레임)
     3.82s  agent 발화 시작: <ret> 아, 예약을 6월 15일 오후 2시에 그랜드뷰 로프트로 잡아 놨어.
     3.88s  user  발화 끝
     5.34s  ⚡SPAN 주입 [d'=1.68s / d_lead=3.96s]: (tool result) A viewing at The Grandview Lofts is scheduled for June f
     7.18s  user  발화 시작: 네.
     7.81s  user  발화 끝
     9.47s  agent 발화 끝
    11.72s  user  발화 시작: 길 안내도 보내 줄 수 있을까요?
    13.72s  <ret> 발화 (turn4 첫 프레임)
    14.08s  user  발화 끝
    14.12s  agent 발화 시작: <ret> 그랜드뷰 로프트 가는 길은 엘름 스트리트 북쪽으로 1마일 정도 가고, 오크 애비뉴에서 좌회전하면 
    15.72s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.71s]: (tool result) Directions to The Grandview Lofts are: Head north on Elm
    18.05s  user  발화 시작: 음.
    18.41s  user  발화 끝
    21.53s  agent 발화 끝
    21.99s  user  발화 시작: 주차는 가능한가요?
    23.45s  <ret> 발화 (turn7 첫 프레임)
    23.77s  agent 발화 시작: <ret> 거기 주차 상황을 한번 알아볼게. 그랜드뷰 로프트는 방문객에게 무료 현장 주차를 제공해.
    23.87s  user  발화 끝
    25.45s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.57s]: (tool result) The Grandview Lofts offers free on-site parking for visi
    29.88s  agent 발화 끝
    29.97s  user  발화 시작: 애완동물 정책은 어떤가요?
    31.69s  <ret> 발화 (turn9 첫 프레임)
    31.93s  agent 발화 시작: <ret> 그 건물 애완동물 정책을 찾아볼게. 고양이와 소형견은 200달러의 수수료를 내면 허용해.
    32.04s  user  발화 끝
    33.69s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.74s]: (tool result) The Grandview Lofts allows cats and small dogs with a on
    39.34s  agent 발화 끝
    39.60s  user  발화 시작: 200달러… 아, 6월 16일로 바꿔 줘.
    43.35s  user  발화 끝
    43.37s  <ret> 발화 (turn11 첫 프레임)
    43.61s  agent 발화 시작: <ret> 날짜를 변경해 줄게— 6월 16일 오후 2시로 예약을 다시 잡았어.
    45.37s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.31s]: (tool result) A viewing at The Grandview Lofts is now scheduled for Ju
    48.34s  agent 발화 끝
    48.34s  user  발화 시작: 건물 안에 헬스장이 있나요?
    50.19s  <ret> 발화 (turn13 첫 프레임)
    50.35s  agent 발화 시작: <ret> 어메니티에 대해서는— 건물에 피트니스 센터, 옥상 테라스, 커뮤니티룸이 있어.
    50.60s  user  발화 끝
    51.23s  ⚡SPAN 주입 [d'=1.04s / d_lead=2.12s]: (tool result) The Grandview Lofts includes a fitness center, a rooftop
    56.70s  agent 발화 끝
    57.07s  user  발화 시작: 옥상 테라스는 좋네요. 월세는 얼마인가요?
    60.60s  <ret> 발화 (turn15 첫 프레임)
    61.00s  agent 발화 시작: <ret> 거기 임대료를 한번 알아볼게. 월세는 1,500달러에서 2,500달러 사이야.
    61.23s  user  발화 끝
    62.60s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.82s]: (tool result) Rental rates at The Grandview Lofts range from fifteen h
    62.72s  user  발화 시작: 예.
    63.17s  user  발화 끝
    66.51s  agent 발화 끝
    67.26s  user  발화 시작: 꽤 넓은 범위인데요. 더 높은 가격으로는 뭘 얻을 수 있나요?
    71.60s  agent 발화 시작: 보통 더 높은 임대료는 더 큰 유닛과 고급 전망을 포함해.
    71.75s  user  발화 끝
    73.15s  user  발화 시작: 음.
    73.55s  user  발화 끝
    76.32s  agent 발화 끝
    76.35s  user  발화 시작: 그 가격에 유틸리티는 포함되어 있나요?
    78.64s  <ret> 발화 (turn21 첫 프레임)
    78.72s  agent 발화 시작: <ret> 유틸리티 포함 여부를 빠르게 확인해 볼게. 물과 쓰레기 처리 비용은 포함되어 있고, 전기와 인터넷
    78.93s  user  발화 끝
    79.84s  ⚡SPAN 주입 [d'=1.20s / d_lead=3.91s]: (tool result) Water and garbage are included, but electricity and inte
    83.98s  user  발화 시작: 음.
    84.62s  user  발화 끝
    87.09s  user  발화 시작: 알겠습니다. 그 동네는 어떤가요?
    87.10s  agent 발화 끝
    89.46s  agent 발화 시작: 카페와 미술관으로 유명한 활기찬 지역이야.
    89.49s  user  발화 끝
    93.39s  agent 발화 끝
    93.56s  user  발화 시작: 근처에 식료품점이 있나요?
    95.42s  <ret> 발화 (turn26 첫 프레임)
    95.64s  agent 발화 시작: <ret> 근처 식료품점을 확인해 볼게. 프레시 푸드 마켓이 로프트에서 동쪽으로 5블록 거리에 있어.
    95.86s  user  발화 끝
    97.26s  ⚡SPAN 주입 [d'=1.84s / d_lead=5.18s]: (tool result) There’s a Fresh Foods Market five blocks east of The Gra
   100.10s  user  발화 시작: 네.
   100.65s  user  발화 끝
   102.49s  user  발화 시작: 편리하겠네요. 도움 주셔서 감사합니다.
   102.55s  agent 발화 끝
   105.08s  user  발화 끝
