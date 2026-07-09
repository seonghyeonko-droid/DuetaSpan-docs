# v3_chain_05_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_chain_05",
#     "name": "유우",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "50s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-08-02",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-07-22",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     },
#     {
#       "date": "2026-03-21",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in October."
#     },
#     {
#       "date": "2026-02-20",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-05",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2026-02-15",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 주니 카페의 가격대는 어떻게 돼요? | S2 주니 카페까지 가는 가장 빠른 길은 어떻게 되나요? 지금 제  | S3 시빅 센터 주차장으로 안내해 줄 수 있나요? | S4 아, 혹시 예약도 가능한가요?

     0.00s  user  발화 시작: 주니 카페의 가격대는 어떻게 돼요?
     1.85s  <ret> 발화 (turn1 첫 프레임)
     2.16s  agent 발화 시작: <ret> 주니 카페에 대해 알아보고 있어요. 주니 카페는 가격대가 높은 편이에요. 세 달러 기호 세 개 정
     2.26s  user  발화 끝
     2.65s  ⚡SPAN 주입 [d'=0.80s / d_lead=1.87s]: (tool result) Zuni Cafe is located at 1658 Market St, San Francisco, C
     5.07s  user  발화 시작: 맞아요.
     5.70s  user  발화 끝
     8.50s  agent 발화 끝
     8.72s  user  발화 시작: 그곳은 어떤 종류의 음식을 팔아요?
    11.12s  user  발화 끝
    11.31s  <ret> 발화 (turn4 첫 프레임)
    11.38s  agent 발화 시작: <ret> 주니 카페의 메뉴를 확인해 드릴게요. 주니 카페는 캘리포니아 음식을 주로 팔아요. 로스트 치킨이 
    12.43s  ⚡SPAN 주입 [d'=1.12s / d_lead=2.41s]: (tool result) Zuni Cafe serves Californian cuisine. Popular dishes inc
    15.93s  user  발화 시작: 네.
    16.56s  user  발화 끝
    18.37s  user  발화 시작: 로스트 치킨의 가격은 얼마예요?
    18.61s  agent 발화 끝
    20.10s  <ret> 발화 (turn7 첫 프레임)
    20.21s  user  발화 끝
    20.25s  agent 발화 시작: <ret> 로스트 치킨 가격을 알아볼게요. 로스트 치킨은 육십팔달러이고, 두세 분이 드실 수 있는 양이에요.
    20.74s  ⚡SPAN 주입 [d'=0.64s / d_lead=1.94s]: (tool result) The roast chicken at Zuni Cafe costs $68 and serves 2-3 
    26.55s  agent 발화 끝
    27.19s  user  발화 시작: 두 명인데 예약할 수 있을까요? 내일 저녁 일곱시에요.
    30.30s  <ret> 발화 (turn9 첫 프레임)
    30.37s  agent 발화 시작: <ret> 내일 저녁 일곱시에 두 명으로 예약 가능하신지 확인해 보겠습니다.
    30.41s  user  발화 끝
    32.30s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.16s]: (tool result) Reservation confirmed at Zuni Cafe for 2 people tomorrow
    34.48s  agent 발화 시작: 네, 주니 카페에 내일 저녁 일곱시에 두 분으로 예약이 완료됐습니다. 확인 번호는 ZX8492예요.
    34.53s  agent 발화 끝
    38.16s  user  발화 시작: 정말요?
    38.93s  user  발화 끝
    42.09s  user  발화 시작: 주니 카페까지 가는 가장 빠른 길은 어떻게 되나요? 지금 제 위치에서요.
    42.31s  agent 발화 끝
    46.53s  <ret> 발화 (turn13 첫 프레임)
    46.68s  agent 발화 시작: <ret> 현재 위치에서 주니 카페까지 가는 가장 빠른 길을 찾아드릴게요.
    46.86s  user  발화 끝
    47.49s  ⚡SPAN 주입 [d'=0.96s / d_lead=4.30s]: (tool result) Driving directions to Zuni Cafe: Start on Pine St, turn 
    50.94s  agent 발화 시작: 파인 스트리트에서 시작해서 테일러 스트리트로 우회전, 마켓 스트리트로 좌회전하면 돼요. 목적지는 영 점 팔마
    50.99s  agent 발화 끝
    54.98s  user  발화 시작: 네.
    55.61s  user  발화 끝
    58.77s  user  발화 시작: 영 점 팔마일은 대략 몇 분 정도 걸리나요?
    59.15s  agent 발화 끝
    62.10s  user  발화 끝
    62.15s  <ret> 발화 (turn17 첫 프레임)
    62.21s  agent 발화 시작: <ret> 영 점 팔마일이면 대략… 대략 십이분에서 십오분 정도 걸릴 거예요. 교통 상황에 따라 달라질 수 
    63.11s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.06s]: (tool result) 0.8 miles is approximately a 12-15 minute drive, dependi
    70.46s  agent 발화 끝
    70.70s  user  발화 시작: 주차는 어디에 하는 게 좋을까요?
    72.61s  <ret> 발화 (turn19 첫 프레임)
    72.92s  agent 발화 시작: <ret> 주니 카페 근처 주차장을 알아볼게요.
    72.95s  user  발화 끝
    73.97s  ⚡SPAN 주입 [d'=1.36s / d_lead=2.77s]: (tool result) Nearby parking options include the Civic Center Garage a
    75.58s  agent 발화 시작: 시빅 센터 주차장과 퍼포밍 아츠 주차장이 가까워요. 시간당 팔달러예요.
    75.69s  agent 발화 끝
    81.06s  user  발화 시작: 시빅 센터 주차장으로 안내해 줄 수 있나요?
    81.22s  agent 발화 끝
    83.19s  <ret> 발화 (turn22 첫 프레임)
    83.58s  agent 발화 시작: <ret> 네, 시빅 센터 주차장으로 길 안내를 시작합니다.
    83.63s  user  발화 끝
    84.71s  ⚡SPAN 주입 [d'=1.52s / d_lead=3.42s]: (tool result) Navigating to Civic Center Garage, 333 McAllister St. Es
    86.97s  agent 발화 시작: 시빅 센터 주차장으로 길 안내를 시작합니다. 도착 예상 시간은 십분이에요.
    87.00s  agent 발화 끝
    92.01s  user  발화 시작: 혹시 주니 카페 근처에 다른 좋은 레스토랑도 있을까요?
    92.16s  agent 발화 끝
    95.22s  <ret> 발화 (turn25 첫 프레임)
    95.43s  user  발화 끝
    95.53s  agent 발화 시작: <ret> 주니 카페 근처의 다른 레스토랑을 찾아볼게요.
    97.22s  ⚡SPAN 주입 [d'=2.00s / d_lead=2.96s]: (tool result) Nearby restaurants include Foreign Cinema, Nopa, and Sta
    98.33s  agent 발화 시작: 포린 시네마, 노파, 스테이트 버드 프로비전스가 가까이에 있어요.
    98.49s  agent 발화 끝
   103.80s  agent 발화 끝
   103.84s  user  발화 시작: 스테이트 버드 프로비전스는 어떤 음식을 파나요?
   106.02s  <ret> 발화 (turn28 첫 프레임)
   106.41s  agent 발화 시작: <ret> 스테이트 버드 프로비전스의 메뉴를 알려드릴게요. 캘리포니아 스타일의 작은 접시 음식을 아시아 풍으
   106.47s  user  발화 끝
   107.78s  ⚡SPAN 주입 [d'=1.76s / d_lead=2.74s]: (tool result) State Bird Provisions serves Californian small plates wi
   113.53s  agent 발화 끝
   114.17s  user  발화 시작: 아, 혹시 예약도 가능한가요?
   116.50s  agent 발화 시작: 스테이트 버드 프로비전스의 예약 가능 여부를 확인해 드릴게요.—
   116.53s  user  발화 끝
   119.67s  <ret> 발화 (turn31 첫 프레임)
   120.06s  agent 발화 시작: <ret> 현재 예약 가능한 시간이 제한적이에요. 웹사이트에서 예약을 하실 수 있습니다.
   120.14s  agent 발화 끝
   121.19s  ⚡SPAN 주입 [d'=1.52s / d_lead=5.38s]: (tool result) State Bird Provisions currently has limited availability
   122.80s  user  발화 시작: 네.
   123.16s  user  발화 끝
   125.44s  agent 발화 끝
   125.69s  user  발화 시작: 그 웹사이트 주소가 어떻게 되나요?
   127.44s  <ret> 발화 (turn34 첫 프레임)
   127.59s  agent 발화 시작: <ret> 스테이트 버드 프로비전스의 웹사이트 주소를 알려드릴게요.
   127.68s  user  발화 끝
   128.40s  ⚡SPAN 주입 [d'=0.96s / d_lead=3.75s]: (tool result) The website for State Bird Provisions is https://statebi
   131.27s  agent 발화 시작: 스테이트 버드 프로비전스의 웹사이트 주소는 https://statebirdprovisions.com 입니다.
   131.33s  agent 발화 끝
   134.39s  user  발화 시작: 그렇죠.
   134.88s  user  발화 끝
   137.57s  user  발화 시작: 알겠습니다. 감사합니다.
   137.76s  agent 발화 끝
   139.16s  agent 발화 시작: 즐거운 저녁 식사 되세요. 혹시 더 필요하신 게 있으신가요?
   139.18s  user  발화 끝
   142.87s  agent 발화 끝
