# v3_selfc_07_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 6월 15일에 그랜드뷰 로프트에서 보여주시면 될까요?
     3.64s  <ret> 발화 (turn1 첫 프레임)
     3.80s  agent 발화 시작: <ret> 응, 6월 15일 오후 2시에 그랜드뷰 로프트 방문 예약을 잡아 줬어.
     3.88s  user  발화 끝
     5.32s  ⚡SPAN 주입 [d'=1.68s / d_lead=3.27s]: (tool result) A viewing at The Grandview Lofts is scheduled for June f
     6.83s  user  발화 시작: 네.
     7.37s  user  발화 끝
     8.93s  agent 발화 끝
    11.18s  user  발화 시작: 그쪽으로 가는 길 안내를 받을 수 있을까요?
    13.75s  <ret> 발화 (turn4 첫 프레임)
    14.09s  user  발화 끝
    14.15s  agent 발화 시작: <ret> 응, 당연히 길 안내를 해 줄게. 그랜드뷰 로프트 주소는 애니타운 엘름 스트리트 123번지야.
    15.75s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.30s]: (tool result) Directions to The Grandview Lofts are: 123 Elm Street, A
    17.85s  user  발화 시작: 음.
    18.34s  user  발화 끝
    21.14s  agent 발화 끝
    21.61s  user  발화 시작: 그 근처 동네는 어떤 곳인가요?
    23.55s  <ret> 발화 (turn7 첫 프레임)
    23.95s  agent 발화 시작: <ret> 응, 계약하기 전에 물어보는 게 좋지. 주로 주거 지역이고, 도보 점수는 78점이야.
    24.06s  user  발화 끝
    25.55s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.17s]: (tool result) The neighborhood is primarily residential, with a walk s
    30.20s  agent 발화 끝
    30.25s  user  발화 시작: 주차는 가능한가요?
    31.56s  <ret> 발화 (turn9 첫 프레임)
    31.80s  agent 발화 시작: <ret> 응, 주차 가능 여부를 확인해 볼게. 한 달에 150달러면 주차할 수 있어.
    32.00s  user  발화 끝
    32.92s  ⚡SPAN 주입 [d'=1.36s / d_lead=3.14s]: (tool result) Parking is available on-site with a monthly fee of $150.
    36.51s  agent 발화 끝
    36.83s  user  발화 시작: 생각보다 비싸네요. 대중교통은 어때요?
    39.44s  <ret> 발화 (turn11 첫 프레임)
    39.55s  user  발화 끝
    39.68s  agent 발화 시작: <ret> 응, 대중교통도 좋은 방법이야. 제일 가까운 버스 정류장은 오크 애비뉴에서 두 블록 떨어진 곳에 
    41.44s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.53s]: (tool result) The nearest bus stop is two blocks away on Oak Avenue.
    46.26s  user  발화 시작: 근처에 식료품점이 있나요?
    46.30s  agent 발화 끝
    48.40s  agent 발화 시작: 음, 아까 말했듯이, 여러—
    48.57s  user  발화 끝
    50.49s  user  발화 시작: 근처에 식료품점이 있나요? 꼭 알아야 해요.
    51.12s  agent 발화 끝
    53.42s  <ret> 발화 (turn15 첫 프레임)
    53.66s  agent 발화 시작: <ret> 응, 미안해. 바로 확인해 줄게. 그랜드뷰 로프트에서 반 마일 거리에 프레시 푸드 마켓이 있어.
    53.73s  user  발화 끝
    55.18s  ⚡SPAN 주입 [d'=1.76s / d_lead=3.17s]: (tool result) There is a Fresh Foods Market located 0.5 miles away.
    60.01s  agent 발화 끝
    60.02s  user  발화 시작: 알겠습니다, 좋네요. 반려동물 정책은 어떻게 되나요?
    63.73s  <ret> 발화 (turn17 첫 프레임)
    63.80s  agent 발화 시작: <ret> 응, 반려동물 정책을 알아볼게. 반려동물은 허용되는데, 무게 제한이 50파운드이고 수수료가 500
    63.85s  user  발화 끝
    65.72s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.20s]: (tool result) Pets are allowed with a weight limit of 50 pounds and a 
    66.48s  user  발화 시작: 예.
    67.03s  user  발화 끝
    72.06s  user  발화 시작: 50파운드… 좀 빡빡하겠네요. 제 강아지가 60파운드거든요.
    72.33s  agent 발화 끝
    76.78s  user  발화 끝
    76.85s  <ret> 발화 (turn20 첫 프레임)
    76.93s  agent 발화 시작: <ret> 응, 알겠어. 그럼 검색 조건을 바꿔 볼게. 근처 다른 마을에도 50파운드 초과 반려동물을 허용하
    78.05s  ⚡SPAN 주입 [d'=1.20s / d_lead=3.55s]: (tool result) Several properties allow pets over 50 pounds in neighbor
    79.64s  user  발화 시작: 음.
    80.00s  user  발화 끝
    85.03s  agent 발화 끝
    85.06s  user  발화 시작: 어떤 마을들이 있나요?
    86.30s  <ret> 발화 (turn23 첫 프레임)
    86.54s  agent 발화 시작: <ret> 응, 반려동물 친화적인 곳이 있는 근처 마을을 알려 줄게. 윌로우 크릭, 오크헤이븐, 리버턴에 반
    86.72s  user  발화 끝
    88.14s  ⚡SPAN 주입 [d'=1.84s / d_lead=5.11s]: (tool result) Nearby towns include Willow Creek, Oakhaven, and Riverto
    92.63s  user  발화 시작: 음.
    92.98s  user  발화 끝
    96.19s  agent 발화 끝
    96.90s  user  발화 시작: 윌로우 크릭에 대해 알려 주세요.
    98.59s  <ret> 발화 (turn26 첫 프레임)
    98.75s  agent 발화 시작: <ret> 응, 윌로우 크릭은 좋은 곳이야. 인구는 1만 5천 명이고, 중간 주택 가격은 35삼십오만 달러야
    98.97s  user  발화 끝
   100.59s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.97s]: (tool result) Willow Creek has a population of 15,000 and a median hom
   106.27s  user  발화 시작: 윌로우 크릭에 공원이 있나요?
   106.48s  agent 발화 끝
   108.10s  <ret> 발화 (turn28 첫 프레임)
   108.34s  agent 발화 시작: <ret> 응, 공원은 중요하지, 특히 반려동물 주인에게는. 윌로우 크릭 파크와 레이크사이드 파크가 모두 마
   108.39s  user  발화 끝
   110.10s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.92s]: (tool result) Willow Creek Park and Lakeside Park are both located wit
   113.77s  user  발화 시작: 네.
   114.21s  user  발화 끝
   116.68s  user  발화 시작: 좋네요. 윌로우 크릭에서 대형견을 허용하는 부동산을 보여 줄 수 있나요?
   116.73s  agent 발화 끝
   121.83s  <ret> 발화 (turn31 첫 프레임)
   121.91s  agent 발화 시작: <ret> 응, 당연히 찾아 줄게. 네 조건에 맞는 부동산은 45 메이플 드라이브, 10 오크 레인, 22 
   122.15s  user  발화 끝
   123.03s  ⚡SPAN 주입 [d'=1.20s / d_lead=3.19s]: (tool result) Three properties match your criteria: 45 Maple Drive, 10
   130.57s  agent 발화 끝
   130.60s  user  발화 시작: 45 메이플 드라이브에 대해 알려 주세요.
   133.29s  <ret> 발화 (turn33 첫 프레임)
   133.37s  user  발화 끝
   133.53s  agent 발화 시작: <ret> 응, 당연히 자세한 정보를 알려 줄게. 45 메이플 드라이브는 침실 3개, 욕실 2개짜리 집이고,
   135.29s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.26s]: (tool result) 45 Maple Drive is a 3-bedroom, 2-bathroom home listed fo
   140.53s  user  발화 시작: 음.
   141.02s  user  발화 끝
   142.52s  agent 발화 끝
   142.81s  user  발화 시작: 6월 20일에 45 메이플 드라이브 방문 예약을 할 수 있을까요?
   146.90s  <ret> 발화 (turn36 첫 프레임)
   147.22s  agent 발화 시작: <ret> 응, 바로 예약을 잡아 줄게. 6월 20일 오전 10시에 45 메이플 드라이브 방문 예약을 잡아 
   147.40s  user  발화 끝
   148.90s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.75s]: (tool result) A viewing at 45 Maple Drive is scheduled for June twenti
   154.82s  user  발화 시작: 완벽하네요. 그쪽으로 가는 길 안내도 보내 주세요.
   154.82s  agent 발화 끝
   158.36s  <ret> 발화 (turn38 첫 프레임)
   158.44s  agent 발화 시작: <ret> 응, 당연히 길 안내를 보내 줄게.
   158.52s  user  발화 끝
   159.40s  ⚡SPAN 주입 [d'=1.04s / d_lead=2.26s]: (tool result) Directions to 45 Maple Drive are: Take Highway 16 North 
   160.69s  agent 발화 끝
