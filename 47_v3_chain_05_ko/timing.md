# v3_chain_05_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_chain_05",
#     "name": "유우",
#     "location": {
#       "city": "Seoul",
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
#       "date": "2026-03-27",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-01-29",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     },
#     {
#       "date": "2025-06-16",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in October."
#     },
#     {
#       "date": "2025-06-01",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-07",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2026-01-05",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 주니 카페의 가격대는 어떻게 돼요? | S2 그 호텔 근처에 맛있는 식당도 추천해 줄 수 있나요? | S3 십오분 정도 걸리는군요. | S4 미리 예약해야 하는군요.

     0.00s  user  발화 시작: 주니 카페의 가격대는 어떻게 돼요?
     1.78s  <ret> 발화 (turn1 첫 프레임)
     2.09s  agent 발화 시작: <ret> 가격대는 보통 수준이에요. 주니 카페는 샌프란시스코 마켓 스트리트 천육백오십팔번지에 있어요.
     2.17s  user  발화 끝
     3.78s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.13s]: Price range: $$ (Moderate) ; Zuni Café — 1658 Market St, San Francisco
     7.04s  user  발화 시작: 네.
     7.44s  user  발화 끝
     9.23s  agent 발화 끝
     9.55s  user  발화 시작: 그곳 주변에 괜찮은 호텔 있나요?
    11.34s  <ret> 발화 (turn4 첫 프레임)
    11.57s  agent 발화 시작: <ret> 주니 카페 주변에는 니코 호텔 샌프란시스코와 클랜시 호텔이 있어요. 니코 호텔은 별점 사 점 육점
    11.68s  user  발화 끝
    13.34s  ⚡SPAN 주입 [d'=2.00s / d_lead=18.51s]: Hotel Nikko San Francisco (4.6 stars, 257 rooms, from $289/night), The
    20.49s  user  발화 시작: 정말요?
    21.30s  user  발화 끝
    29.60s  user  발화 시작: 클랜시 호텔이 더 저렴하네요.
    30.09s  agent 발화 끝
    31.36s  user  발화 끝
    31.41s  agent 발화 시작: 네, 클랜시 호텔이 조금 더 저렴한 편이네요.
    32.52s  user  발화 시작: 네네.
    33.15s  user  발화 끝
    34.50s  agent 발화 끝
    34.60s  user  발화 시작: 그 호텔 예약해 줄 수 있어요?
    36.21s  <ret> 발화 (turn10 첫 프레임)
    36.44s  agent 발화 시작: <ret> 클랜시 호텔, 이천이십육년 칠월 십오일부터 십팔일까지 이인실 딜럭스룸을 예약했습니다. 총 칠백오십
    36.49s  user  발화 끝
    38.21s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.27s]: The Clancy, Autograph Collection: Check-in 2026-07-15, check-out 2026-
    47.71s  agent 발화 끝
    47.94s  user  발화 시작: 확인 번호를 다시 한 번 알려주시겠어요?
    50.34s  user  발화 끝
    50.84s  agent 발화 시작: 확인 번호는 팔A92B3입니다.
    53.84s  agent 발화 끝
    54.51s  user  발화 시작: 그 호텔 근처에 맛있는 식당도 추천해 줄 수 있나요?
    57.58s  <ret> 발화 (turn14 첫 프레임)
    57.65s  agent 발화 시작: <ret> 클랜시 호텔 근처에는 토니 피자 나폴레타나와 플로어 앤 워터가 있어요. 토니 피자는 이탈리아 음식
    57.70s  user  발화 끝
    58.86s  ⚡SPAN 주입 [d'=1.28s / d_lead=18.74s]: Tony's Pizza Napoletana (Italian, 4.7 stars, $20-30), Flour + Water (I
    76.38s  agent 발화 끝
    76.69s  user  발화 시작: 토니 피자가 더 끌리네요.
    78.30s  agent 발화 시작: 토니 피자가 더 마음에 드시는군요.
    78.39s  user  발화 끝
    80.79s  agent 발화 끝
    81.11s  user  발화 시작: 그곳의 메뉴 좀 볼 수 있을까요?
    82.69s  <ret> 발화 (turn18 첫 프레임)
    83.08s  agent 발화 시작: <ret> 토니 피자 나폴레타나 메뉴는 마르게리타가 십팔달러, 마리나라가 십육달러, 뉴요커가 이십이달러입니다
    83.09s  user  발화 끝
    84.69s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.43s]: Tony's Pizza Napoletana Menu: Margherita ($18), Marinara ($16), New Yo
    93.49s  user  발화 시작: 혹시 그 피자집까지 가는 대중교통 방법 좀 알려주세요?
    93.52s  agent 발화 끝
    97.25s  <ret> 발화 (turn20 첫 프레임)
    97.46s  user  발화 끝
    97.48s  agent 발화 시작: <ret> 클랜시 호텔에서 먼지 스트리트 역까지 지하철 K 노선을 타세요. 그 후 영 점 삼마일을 걸어가면 
    99.25s  ⚡SPAN 주입 [d'=2.00s / d_lead=12.24s]: Take the Muni Metro K-Ingleside/T-Third Street line from Powell Street
   109.72s  agent 발화 끝
   110.29s  user  발화 시작: 십오분 정도 걸리는군요.
   112.09s  agent 발화 시작: 네, 십오분 정도 걸립니다.
   112.13s  user  발화 끝
   114.15s  agent 발화 끝
   114.87s  user  발화 시작: 그 근처에 볼만한 관광지도 있나요?
   117.10s  <ret> 발화 (turn24 첫 프레임)
   117.26s  agent 발화 시작: <ret> 토니 피자 나폴레타나 근처에는 롬바드 스트리트, 피어 삼십구 코이트 타워가 있습니다. 롬바드 스트
   117.27s  user  발화 끝
   119.10s  ⚡SPAN 주입 [d'=2.00s / d_lead=12.70s]: Lombard Street (0.6 miles), Pier 39 (1.2 miles), Coit Tower (1.5 miles
   129.81s  user  발화 시작: 코이트 타워는 어떤 곳이에요?.
   129.97s  agent 발화 끝
   132.45s  user  발화 끝
   132.66s  agent 발화 시작: 코이트 타워는 —
   133.40s  user  발화 시작: …거기에서 바라보는 풍경이 아주 멋지다고 들었는데, 맞나요?
   134.13s  agent 발화 끝
   138.21s  user  발화 끝
   138.24s  agent 발화 시작: 네, 맞아요. 코이트 타워는 샌프란시스코의 멋진 풍경을 감상할 수 있는 곳으로 유명합니다.
   142.08s  user  발화 시작: 네.
   142.58s  user  발화 끝
   144.25s  agent 발화 시작: 코이트 타워 꼭대기에서는 도시 전체와 금문교, 알카트라즈 섬까지 한눈에 볼 수 있어요. 역사적인 의미도 깊은
   144.36s  agent 발화 끝
   153.46s  user  발화 시작: 알카트라즈 섬도 가보고 싶네요.
   153.71s  agent 발화 끝
   155.27s  <ret> 발화 (turn32 첫 프레임)
   155.51s  agent 발화 시작: <ret> 알카트라즈 섬은 피어 삼십삼 알카트라즈 랜딩에서 출발하는 페리를 이용할 수 있습니다. 미리 alc
   155.53s  user  발화 끝
   157.27s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.92s]: Alcatraz Island: Ferry departs from Pier 33 Alcatraz Landing, San Fran
   159.65s  user  발화 시작: 정말요?
   160.47s  user  발화 끝
   165.20s  user  발화 시작: 미리 예약해야 하는군요.
   165.43s  agent 발화 끝
   166.95s  user  발화 끝
   167.02s  agent 발화 시작: 네, 미리 예약하는 것이 좋습니다.
   169.28s  agent 발화 끝
   170.24s  user  발화 시작: 오늘 날씨는 어때요?
   171.44s  <ret> 발화 (turn37 첫 프레임)
   171.59s  agent 발화 시작: <ret> 샌프란시스코는 현재 십팔 점 삼도이고, 습도는 육십오%, 바람은 시속 팔 점 이킬로미터로 부는 부
   171.66s  user  발화 끝
   173.44s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.50s]: 18.3°C, humidity 65%, wind 8.2 km/h, partly cloudy.
   181.09s  agent 발화 끝
   182.97s  user  발화 시작: 겉옷을 챙겨야겠네요.
   184.34s  user  발화 끝
   184.52s  agent 발화 시작: 네, 겉옷을 챙기시는 것이 좋겠네요.
   187.10s  agent 발화 끝
   188.26s  user  발화 시작: 정말 감사합니다.
   189.59s  agent 발화 시작: 도움이 되었다니 기쁩니다. 좋은 여행 되세요.
   189.64s  user  발화 끝
   192.74s  agent 발화 끝
