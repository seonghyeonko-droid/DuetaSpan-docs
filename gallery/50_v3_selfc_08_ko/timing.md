# v3_selfc_08_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_08",
#     "name": "연영",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "early 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-05",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2026-02-10",
#       "category": "work",
#       "text": "User works as a accountant."
#     },
#     {
#       "date": "2025-11-07",
#       "category": "home",
#       "text": "User's home address is 인천 연수구 송도동 12-5."
#     },
#     {
#       "date": "2025-06-09",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in May."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-07",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-09-01",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-06-25",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 시카고에서 덴버까지 버스 보여줘, 세 명이고, 오월 십일로. | S2 그 근처에 호텔은? | S3 혹시 덴버에서 유명한 음식점 있어? | S4 아, 근데 혹시… —

     0.00s  user  발화 시작: 시카고에서 덴버까지 버스 보여줘, 세 명이고, 오월 십일로.
     4.60s  <ret> 발화 (turn1 첫 프레임)
     4.81s  user  발화 끝
     4.91s  agent 발화 시작: <ret> 시카고에서 덴버까지 버스는 오월 십일에 세 명 기준으로 백이십오달러에서 이백달러 사이이고, 소요 
     4.92s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.55s]: (tool result) Buses from Chicago to Denver on May 10th for three passe
    12.34s  user  발화 시작: 와.
    13.07s  user  발화 끝
    16.46s  agent 발화 끝
    16.71s  user  발화 시작: 제일 싼 거로 예매해 줘.
    18.25s  <ret> 발화 (turn4 첫 프레임)
    18.64s  user  발화 끝
    18.64s  agent 발화 시작: <ret> 시카고에서 덴버까지 오월 십일 세 명, 백이십오달러짜리 버스표 예매 완료되었습니다. 확인 번호는 
    18.65s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.67s]: (tool result) A bus ticket from Chicago to Denver for three passengers
    27.32s  agent 발화 끝
    28.72s  user  발화 시작: 혹시 덴버 근처에 볼만한 곳 있어?
    30.73s  <ret> 발화 (turn6 첫 프레임)
    31.12s  agent 발화 시작: <ret> 덴버에는 덴버 미술관, 덴버 식물원, 그리고 멋진 자연 음향과 콘서트로 유명한 레드 록스 원형극장
    31.13s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.62s]: (tool result) Denver offers attractions like the Denver Art Museum, th
    31.21s  user  발화 끝
    36.65s  user  발화 시작: 응.
    37.09s  user  발화 끝
    39.69s  user  발화 시작: 레드 록스 원형극장, 거기는 언제 지어졌어?
    39.75s  agent 발화 끝
    42.39s  <ret> 발화 (turn9 첫 프레임)
    42.78s  agent 발화 시작: <ret> 레드 록스 원형극장은 원래 자연적인 지형이었지만, 천구백육년부터 원형극장으로 건설되기 시작해서 천
    42.79s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.55s]: Red Rocks Amphitheatre began as a natural geological formation, but wa
    42.93s  user  발화 끝
    52.34s  agent 발화 끝
    52.48s  user  발화 시작: 음… 천구백육년에 처음 지었다고?
    55.53s  user  발화 끝
    55.77s  agent 발화 시작: 네, 맞습니다. 천구백육년에 건설을 시작했고, 완공은 천구백사십일년입니다.
    62.08s  user  발화 시작: 그 근처에 호텔은?
    62.26s  agent 발화 끝
    63.37s  <ret> 발화 (turn13 첫 프레임)
    63.52s  agent 발화 시작: <ret> 레드 록스 원형극장 근처 호텔로는 테이블 마운틴 인이 일박에 백오십달러부터, 와인덤 호텔 오리진 
    63.53s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.01s]: (tool result) Hotels near Red Rocks Amphitheatre in Denver include the
    63.69s  user  발화 끝
    73.53s  agent 발화 끝
    74.58s  user  발화 시작: 테이블 마운틴 인, 거기는 예약 가능한 날짜가 언제야?
    78.84s  <ret> 발화 (turn15 첫 프레임)
    78.91s  agent 발화 시작: <ret> 테이블 마운틴 인은 오월 십오일부터 이십일까지 예약 가능하고, 객실 종류에 따라 일박에 백오십달러
    78.92s  ⚡SPAN 주입 [d'=1.84s / d_lead=8.39s]: (tool result) Table Mountain Inn has availability from May 15th to May
    79.07s  user  발화 끝
    85.08s  user  발화 시작: 그치.
    85.81s  user  발화 끝
    87.30s  agent 발화 끝
    87.46s  user  발화 시작: 오월 십칠일 밤으로 예약해 줘.
    89.44s  <ret> 발화 (turn18 첫 프레임)
    89.83s  agent 발화 시작: <ret> 테이블 마운틴 인 오월 십칠일 예약이 완료되었습니다. 확인 번호는 사십이B67Z입니다.
    89.84s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.53s]: (tool result) Your reservation at Table Mountain Inn for May 17th has 
    90.00s  user  발화 끝
    92.91s  user  발화 시작: 그래.
    93.69s  user  발화 끝
    96.15s  user  발화 시작: 아, 근데 혹시 덴버 날씨는 어때?
    96.36s  agent 발화 끝
    97.98s  <ret> 발화 (turn21 첫 프레임)
    98.38s  agent 발화 시작: <ret> 덴버의 현재 날씨는 이십이 점 오도이고 습도는 육십팔%, 가벼운 바람이 불고 있습니다. 오늘 하루
    98.38s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.83s]: (tool result) The current weather in Denver is 22.5°C with 68% humidit
    98.55s  user  발화 끝
   105.94s  user  발화 시작: 진짜?
   106.76s  user  발화 끝
   108.21s  agent 발화 끝
   108.38s  user  발화 시작: 이십이 점 오도라고? 좀 더 자세히 알려줘.
   112.40s  user  발화 끝
   112.54s  agent 발화 시작: 네, 덴버는 현재 섭씨 이십이 점 오도이고, 습도는 육십팔%, 바람은 시속 팔 점 이킬로미터로 불고 있습니다
   116.74s  user  발화 시작: 응.
   117.19s  user  발화 끝
   122.36s  agent 발화 끝
   122.78s  user  발화 시작: 혹시 덴버에서 유명한 음식점 있어?
   124.86s  <ret> 발화 (turn27 첫 프레임)
   125.01s  agent 발화 시작: <ret> 덴버에서 인기 있는 식당으로는 신선한 재료를 사용한 요리로 유명한 머캔타일 다이닝 앤 프로비전과 
   125.02s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.22s]: (tool result) Popular restaurants in Denver include Mercantile Dining 
   125.17s  user  발화 끝
   134.08s  user  발화 시작: 리오하, 거기는 예약 가능한 시간 알려줘.
   134.24s  agent 발화 끝
   136.72s  <ret> 발화 (turn29 첫 프레임)
   137.11s  agent 발화 시작: <ret> 리오하는 오늘 오월 십일 저녁 일곱시와 여덟시 삼십분에 예약 가능합니다.
   137.12s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.04s]: (tool result) Rioja has reservations available at 7:00 PM and 8:30 PM 
   137.22s  user  발화 끝
   140.91s  user  발화 시작: 진짜?
   141.54s  user  발화 끝
   142.14s  user  발화 시작: 일곱시로 예약해 줘.
   142.15s  agent 발화 끝
   143.48s  <ret> 발화 (turn32 첫 프레임)
   143.55s  agent 발화 시작: <ret> 리오하 저녁 일곱시 예약이 완료되었습니다. 확인 번호는 구십오K13L입니다.
   143.56s  ⚡SPAN 주입 [d'=0.50s / d_lead=5.74s]: (tool result) Your reservation at Rioja for 7:00 PM tonight has been c
   143.74s  user  발화 끝
   149.29s  agent 발화 끝
   150.24s  user  발화 시작: 여행 전에 들을 만한 음악 좀 추천해 줘.
   152.42s  <ret> 발화 (turn34 첫 프레임)
   152.74s  agent 발화 시작: <ret> 인기 있는 로드 트립 플레이리스트로는 아케이드 파이어와 더 신스가 있는 스포티파이의 “인디 로드 
   152.74s  ⚡SPAN 주입 [d'=1.36s / d_lead=10.16s]: (tool result) Popular road trip playlists include “Indie Road Trip” by
   152.87s  user  발화 끝
   162.48s  user  발화 시작: 스포티파이 “인디 로드 트립” 재생해 줘.
   162.90s  agent 발화 끝
   164.95s  <ret> 발화 (turn36 첫 프레임)
   165.10s  agent 발화 시작: <ret> 지금 스포티파이에서 “인디 로드 트립” 플레이리스트를 재생합니다.
   165.11s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.31s]: (tool result) Playing the “Indie Road Trip” playlist on Spotify now.
   165.29s  user  발화 끝
   166.88s  user  발화 시작: 아.
   167.38s  user  발화 끝
   169.26s  user  발화 시작: 아, 근데 혹시… —
   169.41s  agent 발화 끝
   170.53s  user  발화 시작: …지금 덴버까지 가는 버스 시간은 몇 시야?
   170.73s  user  발화 끝
   172.56s  <ret> 발화 (turn40 첫 프레임)
   172.80s  agent 발화 시작: <ret> 오월 십일 시카고에서 덴버로 가는 버스는 유니언 역에서 오전 열시 십오분에 출발합니다.
   172.80s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.11s]: The bus from Chicago to Denver on May 10th departs at 10:15 AM from Un
   173.06s  user  발화 끝
   175.36s  user  발화 시작: 응.
   175.85s  user  발화 끝
   178.75s  user  발화 시작: 유니언 역까지 가는 방법 좀 알려줘.
   178.91s  agent 발화 끝
   180.86s  <ret> 발화 (turn43 첫 프레임)
   181.25s  agent 발화 시작: <ret> 현재 위치에서 유니언 역까지 클라크 스트리트를 북쪽으로 영 점 팔마일 이동한 다음 W 랜드폴프 스
   181.26s  ⚡SPAN 주입 [d'=2.00s / d_lead=12.57s]: (tool result) Directions to Union Station, Chicago from your current l
   181.47s  user  발화 끝
   193.82s  agent 발화 끝
   193.87s  user  발화 시작: 고마워, 정말 도움이 많이 됐어.
   196.03s  agent 발화 시작: 도움이 되었다니 기쁩니다. 안전하고 즐거운 여행 되세요.
   196.22s  user  발화 끝
   199.87s  agent 발화 끝
