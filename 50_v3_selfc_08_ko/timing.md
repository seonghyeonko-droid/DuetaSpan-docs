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

# EXAMINER(FDB-v2) 단계: S1 시카고에서 덴버까지 버스 세 명분, 오월 십일 보여줘. | S2 십육번가 몰은 어떤 곳이야? | S3 덴버에서 시카고로 돌아오는 버스도 예약해 줘. 오월 십이일. | S4 …아, 그냥 제일 싼 걸로 해줘.

     0.00s  user  발화 시작: 시카고에서 덴버까지 버스 세 명분, 오월 십일 보여줘.
     4.13s  <ret> 발화 (turn1 첫 프레임)
     4.44s  agent 발화 시작: <ret> 시카고에서 덴버까지 버스는 그레이하운드가 십오만 원, 스무시간 삼십분, 플릭스버스는 십이만 오천 
     4.68s  user  발화 끝
     6.13s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.92s]: (tool result) Greyhound: $150, 20h 30m; FlixBus: $125, 22h; Wanderu: $
    12.12s  user  발화 시작: 와.
    12.76s  user  발화 끝
    16.36s  agent 발화 끝
    17.87s  user  발화 시작: 완더루 시간표 좀 더 자세히 보여줘.
    19.71s  <ret> 발화 (turn4 첫 프레임)
    20.11s  agent 발화 시작: <ret> 완더루는 오전 여덟시에 십삼만 원, 스물한시간 십오분, 낮 열두시 삼십분에 십삼만 오천 원, 스무
    20.31s  user  발화 끝
    21.71s  ⚡SPAN 주입 [d'=2.00s / d_lead=12.29s]: (tool result) Wanderu: 08:00 ($130, 21h 15m), 12:30 ($135, 20h 45m), 1
    31.93s  user  발화 시작: 제일 빠른 거로 예약해 줘.
    32.40s  agent 발화 끝
    33.15s  <ret> 발화 (turn6 첫 프레임)
    33.54s  agent 발화 시작: <ret> 완더루 시카고-덴버, 세 명, 이천이십육년 오월 십일 오전 여덟시, 삼십구만 원, 확인번호는 칠A
    33.78s  user  발화 끝
    35.15s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.25s]: (tool result) Wanderu: Chicago to Denver, 3 passengers, 2026-05-10 08:
    38.79s  user  발화 시작: 대박.
    39.57s  user  발화 끝
    41.78s  user  발화 시작: 혹시 덴버에 도착해서 바로 갈 만한 곳 있어?
    41.79s  agent 발화 끝
    44.49s  <ret> 발화 (turn9 첫 프레임)
    44.88s  agent 발화 시작: <ret> 덴버 식물원, 덴버 미술관, 십육번가 몰이 가까운 곳에 있습니다.
    45.02s  user  발화 끝
    46.17s  ⚡SPAN 주입 [d'=1.68s / d_lead=4.35s]: (tool result) Denver Botanic Gardens (2.8 km), Denver Art Museum (3.2 
    49.20s  user  발화 시작: 십육번가 몰은 어떤 곳이야?
    49.23s  agent 발화 끝
    51.11s  <ret> 발화 (turn11 첫 프레임)
    51.26s  agent 발화 시작: <ret> 십육번가 몰은 보행자 거리인데 상점과 식당이 많고, 무료 셔틀과 행사도 열립니다.
    51.45s  user  발화 끝
    53.11s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.25s]: (tool result) 16th Street Mall: Pedestrian mall, shops, restaurants, f
    57.51s  agent 발화 끝
    58.07s  user  발화 시작: 그 근처에 괜찮은 호텔 있어?
    59.61s  <ret> 발화 (turn13 첫 프레임)
    59.76s  agent 발화 시작: <ret> 메이븐 호텔 이십오만 원, 호텔 테아트로 이십팔만 원, 더 커티스 덴버 십팔만 원입니다.
    59.96s  user  발화 끝
    60.49s  ⚡SPAN 주입 [d'=0.88s / d_lead=5.18s]: (tool result) The Maven Hotel at Dairy Block ($250/night), Hotel Teatr
    63.45s  user  발화 시작: 그치.
    64.22s  user  발화 끝
    64.94s  agent 발화 끝
    65.44s  user  발화 시작: 제일 싼 호텔로 예약해 줘.
    67.15s  <ret> 발화 (turn16 첫 프레임)
    67.54s  agent 발화 시작: <ret> 더 커티스 덴버, 한개 방, 이천이십육년 오월 십일부터 십일일까지, 십팔만 원, 확인번호는 B4C
    67.70s  user  발화 끝
    69.15s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.02s]: (tool result) The Curtis Denver: 1 room, 2026-05-10 to 2026-05-11, $18
    71.40s  user  발화 시작: 그래.
    72.03s  user  발화 끝
    75.57s  agent 발화 끝
    76.59s  user  발화 시작: 덴버 날씨는 어때?
    77.47s  <ret> 발화 (turn19 첫 프레임)
    77.86s  agent 발화 시작: <ret> 이십오도, 습도 육십%, 바람은 시속 팔킬로미터, 맑은 하늘입니다.
    78.02s  user  발화 끝
    79.47s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.00s]: (tool result) 25.0°C, humidity 60%, wind 8.0 km/h, clear skies
    81.59s  user  발화 시작: 진짜?
    82.31s  user  발화 끝
    82.65s  user  발화 시작: 덴버에서 시카고로 돌아오는 버스도 예약해 줘. 오월 십이일.
    82.86s  agent 발화 끝
    86.34s  <ret> 발화 (turn22 첫 프레임)
    86.73s  agent 발화 시작: <ret> 덴버에서 시카고로 돌아오는 버스는 그레이하운드가 십육만 원, 스물한시간, 플릭스버스는 십사만 원,
    86.95s  user  발화 끝
    88.34s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.79s]: (tool result) Greyhound: $160, 21h; FlixBus: $140, 23h 30m; Wanderu: $
    91.81s  user  발화 시작: 응.
    92.30s  user  발화 끝
    98.42s  user  발화 시작: 플릭스버스로 예약해 줘.
    98.52s  agent 발화 끝
    99.51s  <ret> 발화 (turn25 첫 프레임)
    99.90s  agent 발화 시작: <ret> 플릭스버스 덴버-시카고, 세 명, 이천이십육년 오월 십이일, 사십이만 원, 확인번호는 구D6F8H
   100.07s  user  발화 끝
   101.51s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.48s]: (tool result) FlixBus: Denver to Chicago, 3 passengers, 2026-05-12, $4
   108.35s  user  발화 시작: 덴버 공항에서 시카고 공항까지 바로 가는 비행기는 없어?
   108.38s  agent 발화 끝
   111.53s  <ret> 발화 (turn27 첫 프레임)
   111.92s  agent 발화 시작: <ret> 유나이티드 항공에서 덴버에서 시카고로 가는 직항편이 이십오만 원부터 있습니다.
   112.10s  user  발화 끝
   113.53s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.95s]: (tool result) United Airlines offers direct flights from Denver (DEN) 
   115.53s  user  발화 시작: 진짜?
   116.35s  user  발화 끝
   116.86s  user  발화 시작: 유나이티드 항공으로 예약해 줘.
   116.86s  agent 발화 끝
   118.48s  agent 발화 시작: 잠시만요, 몇 시 비행편을 원하시는지 알려주시면—
   118.80s  user  발화 끝
   121.07s  user  발화 시작: …아, 그냥 제일 싼 걸로 해줘.
   121.90s  agent 발화 끝
   122.64s  <ret> 발화 (turn32 첫 프레임)
   122.95s  agent 발화 시작: <ret> 유나이티드 항공, 덴버에서 시카고, 이천이십육년 오월 십이일 오후 두시, 이십오만 원, 확인번호는
   123.05s  user  발화 끝
   124.00s  ⚡SPAN 주입 [d'=1.36s / d_lead=8.20s]: (tool result) United Airlines: DEN to ORD, 2026-05-12 14:00, $250, con
   131.08s  user  발화 시작: 덴버에서 시카고 가는 기차 시간표 좀 보여줘.
   131.14s  agent 발화 끝
   134.08s  <ret> 발화 (turn34 첫 프레임)
   134.24s  agent 발화 시작: <ret> 암트랙 캘리포니아 제퍼, 열시 십오분에 출발해서 다음 날 열여섯시 삼십분에 도착, 이십만 원입니다
   134.50s  user  발화 끝
   136.08s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.41s]: (tool result) Amtrak: California Zephyr, departs 10:15, arrives 16:30 
   141.54s  user  발화 시작: 그럼 암트랙으로 예약해 줘.
   141.65s  agent 발화 끝
   143.04s  <ret> 발화 (turn36 첫 프레임)
   143.19s  agent 발화 시작: <ret> 암트랙 캘리포니아 제퍼, 덴버-시카고, 이천이십육년 오월 십이일, 육십만 원, 확인번호는 Z8Y3
   143.34s  user  발화 끝
   145.04s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.53s]: (tool result) Amtrak: California Zephyr, Denver to Chicago, 2026-05-12
   146.07s  user  발화 시작: 응.
   146.57s  user  발화 끝
   151.59s  user  발화 시작: 오월 십일에 덴버 출발, 오월 십이일에 시카고 출발, 오월 일
   151.73s  agent 발화 끝
   157.29s  user  발화 끝
