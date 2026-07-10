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
#       "text": "User's home address is 368 Pine Court."
#     },
#     {
#       "date": "2025-06-09",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in May."
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

# EXAMINER(FDB-v2) 단계: S1 시카고에서 덴버까지 세 명, 오월 십일에 가는 버스 좀 보여줘 | S2 그럼 수하물 추가 요금이 얼마야? | S3 좋아. 그럼 출발 전에… | S4 티켓은 어떻게 사?

     0.00s  user  발화 시작: 시카고에서 덴버까지 세 명, 오월 십일에 가는 버스 좀 보여줘.
     3.45s  <ret> 발화 (turn1 첫 프레임)
     3.77s  agent 발화 시작: <ret> 시카고에서 덴버까지 오월 십일에 가는 버스는 세 대가 있습니다. 아침 여덟시 출발은 이십오만 원,
     3.83s  user  발화 끝
     5.45s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.69s]: (tool result) Three buses found: 8:00 AM, $250; 12:00 PM, $280; 6:00 P
    11.39s  user  발화 시작: 와.
    11.83s  user  발화 끝
    15.46s  agent 발화 끝
    16.69s  user  발화 시작: 제일 싼 거로 예약해 줘.
    17.69s  <ret> 발화 (turn4 첫 프레임)
    18.09s  agent 발화 시작: <ret> 저녁 여섯시 출발, 이십삼만 원짜리 버스로 예약 완료되었습니다. 예약 번호는 칠 팔 구 사 오번입
    18.30s  user  발화 끝
    19.69s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.69s]: (tool result) Reservation confirmed: ID 78945.
    25.79s  agent 발화 끝
    26.15s  user  발화 시작: 혹시 그 버스에 와이파이 있어?
    27.51s  <ret> 발화 (turn6 첫 프레임)
    27.91s  agent 발화 시작: <ret> 네, 예약하신 칠 팔 구 사 오번 버스에는 와이파이가 제공됩니다.
    28.08s  user  발화 끝
    28.79s  ⚡SPAN 주입 [d'=1.28s / d_lead=3.70s]: (tool result) Yes, WiFi is available on bus 78945.
    30.19s  user  발화 시작: 대박.
    30.83s  user  발화 끝
    31.61s  agent 발화 끝
    31.94s  user  발화 시작: 아, 그런데—
    32.96s  user  발화 시작: 혹시 수하물 규정이 어떻게 돼?
    33.03s  user  발화 끝
    34.20s  <ret> 발화 (turn10 첫 프레임)
    34.59s  agent 발화 시작: <ret> 수하물 규정을 알려드리겠습니다. 각 승객당 위탁 수하물은 한 개, 기내 반입 수하물은 한 개까지 
    34.80s  user  발화 끝
    36.20s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.02s]: (tool result) One checked bag (50 lbs max), one carry-on (22 lbs max) 
    42.61s  agent 발화 끝
    42.73s  agent 발화 시작: 각 승객당 위탁 수하물은 최대 이십삼킬로그램, 기내 반입 수하물은 최대 십킬로그램까지 허용됩니다.
    50.47s  agent 발화 끝
    50.64s  user  발화 시작: 이십오킬로그램짜리 캐리어가 있는데, 괜찮을까?
    54.20s  user  발화 끝
    54.61s  agent 발화 시작: 기내 반입 수하물은 최대 십킬로그램까지 허용되므로, 이십오킬로그램짜리 캐리어는 위탁 수하물로 부치셔야 합니다
    61.74s  agent 발화 끝
    63.32s  user  발화 시작: 그럼 수하물 추가 요금이 얼마야?
    64.74s  <ret> 발화 (turn15 첫 프레임)
    64.98s  agent 발화 시작: <ret> 이십이킬로그램 초과 수하물에 대해서는 이만 원의 추가 요금이 발생합니다.
    65.21s  user  발화 끝
    65.86s  ⚡SPAN 주입 [d'=1.12s / d_lead=4.54s]: (tool result) $20 extra for luggage over 22 lbs.
    68.37s  user  발화 시작: 그치.
    69.00s  user  발화 끝
    69.52s  agent 발화 끝
    69.61s  user  발화 시작: 알았어. 그럼 그냥 위탁 수하물로 부칠게.
    73.12s  agent 발화 시작: 네, 그렇게 하시는 게 좋겠습니다. 위탁 수하물은 버스 출발 전에 탑승구에서 부치시면 됩니다.
    73.12s  user  발화 끝
    76.34s  user  발화 시작: 어어.
    77.16s  user  발화 끝
    78.30s  agent 발화 끝
    78.50s  user  발화 시작: 탑승구는 어디야?
    79.23s  <ret> 발화 (turn21 첫 프레임)
    79.63s  agent 발화 시작: <ret> 탑승구는 십이번 게이트입니다.
    79.73s  ⚡SPAN 주입 [d'=0.50s / d_lead=1.75s]: (tool result) Boarding gate is Gate 12.
    79.74s  user  발화 끝
    81.37s  agent 발화 끝
    83.26s  user  발화 시작: 혹시 십이번 게이트까지 가는 길이 좀 복잡해?
    85.99s  agent 발화 시작: 시카고 버스 터미널은 비교적 간단한 구조로 되어 있어서, 십이번 게이트까지 쉽게 찾아갈 수 있습니다.
    86.07s  user  발화 끝
    88.87s  user  발화 시작: 진짜?
    89.55s  user  발화 끝
    92.28s  user  발화 시작: 혹시 터미널 안에 식당이 있어?
    92.29s  agent 발화 끝
    93.81s  <ret> 발화 (turn26 첫 프레임)
    93.97s  agent 발화 시작: <ret> 네, 터미널 안에는 카페와 패스트푸드 식당이 있습니다.
    94.22s  user  발화 끝
    95.09s  ⚡SPAN 주입 [d'=1.28s / d_lead=3.14s]: (tool result) Yes, a cafe and a fast-food restaurant are available.
    96.87s  user  발화 시작: 좋아. 그럼 출발 전에…
    97.11s  agent 발화 끝
    98.80s  user  발화 끝
   100.66s  user  발화 시작: …간단히 먹을 수 있겠네.
   102.12s  user  발화 끝
   102.13s  agent 발화 시작: 네, 출발 전에 간단하게 식사를 해결하실 수 있습니다.
   103.52s  user  발화 시작: 음.
   103.92s  user  발화 끝
   105.08s  agent 발화 끝
   105.38s  user  발화 시작: 혹시 버스에서 충전할 수 있어?
   106.74s  <ret> 발화 (turn32 첫 프레임)
   107.14s  agent 발화 시작: <ret> 네, 예약하신 칠 팔 구 사 오번 버스에는 콘센트가 설치되어 있습니다.
   107.32s  user  발화 끝
   108.74s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.49s]: (tool result) Yes, power outlets are available on bus 78945.
   108.92s  user  발화 시작: 응.
   109.42s  user  발화 끝
   111.63s  agent 발화 끝
   111.67s  user  발화 시작: 다행이다. 아이폰 배터리가 거의 없거든.
   114.73s  user  발화 끝
   114.82s  agent 발화 시작: 아이폰 배터리가 부족하시다니 다행이네요. 버스에서 충전하시면서 편안하게 이동하실 수 있겠습니다.
   120.37s  agent 발화 끝
   120.45s  user  발화 시작: 혹시 덴버 버스 터미널에서 시내까지 가는 방법 좀 알려줘.
   123.15s  <ret> 발화 (turn37 첫 프레임)
   123.55s  agent 발화 시작: <ret> 덴버 버스 터미널에서 시내까지는 D 노선 경전철을 이용하시면 바로 갈 수 있습니다.
   123.77s  user  발화 끝
   125.15s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.00s]: (tool result) Light rail line D goes directly to the city center.
   128.56s  agent 발화 끝
   128.75s  user  발화 시작: 경전철은 어디서 타?
   130.09s  agent 발화 시작: 덴버 버스 터미널과 연결된 경전철역에서 D 노선을 타시면 됩니다.
   130.22s  user  발화 끝
   133.93s  agent 발화 끝
   134.95s  user  발화 시작: 티켓은 어떻게 사?
   135.95s  <ret> 발화 (turn41 첫 프레임)
   136.11s  agent 발화 시작: <ret> 역에 있는 티켓 자판기에서 티켓을 구매하실 수 있습니다.
   136.14s  user  발화 끝
   137.95s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.23s]: (tool result) Tickets can be purchased at the station kiosk.
   139.34s  agent 발화 끝
   141.00s  user  발화 시작: 아, 알았어. 정말 고마워.
   143.44s  user  발화 끝
   143.54s  agent 발화 시작: 천만에요. 편안한 여행 되세요.
   145.80s  agent 발화 끝
   146.62s  user  발화 시작: 혹시 여행자 보험도 알아봐 줄 수 있어?
   148.59s  <ret> 발화 (turn45 첫 프레임)
   148.66s  agent 발화 시작: <ret> 덴버 여행자 보험은 기본형이 오만 원, 종합형이 십만 원입니다.
   148.88s  user  발화 끝
   149.79s  ⚡SPAN 주입 [d'=1.20s / d_lead=3.66s]: (tool result) Basic plan: $50. Comprehensive plan: $100.
   149.88s  user  발화 시작: 응.
   150.24s  user  발화 끝
   152.31s  agent 발화 끝
   152.41s  user  발화 시작: 그럼 기본형으로 해줘.
   153.57s  <ret> 발화 (turn48 첫 프레임)
   153.81s  agent 발화 시작: <ret> 기본형 여행자 보험 구매 완료되었습니다. 보험 증권 번호는 이 삼 사 오 육번입니다.
   153.88s  user  발화 끝
   155.57s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.72s]: (tool result) Insurance purchased. Policy number: 23456.
   160.53s  agent 발화 끝
   161.17s  user  발화 시작: 좋아. 이제 정말 다 준비됐네.
   163.62s  user  발화 끝
   163.63s  agent 발화 시작: 네, 이제 모든 준비가 완료되셨습니다. 즐거운 여행 되시길 바랍니다.
   167.47s  agent 발화 끝
