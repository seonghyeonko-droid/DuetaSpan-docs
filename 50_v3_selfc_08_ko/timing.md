# v3_selfc_08_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_08",
#     "name": "Julia",
#     "location": {
#       "city": "Berlin",
#       "country": "Germany",
#       "timezone": "Europe/Berlin (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "German",
#     "gender": "female",
#     "age_range": "40s",
#     "language": "German"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-07-26",
#       "category": "home",
#       "text": "User's home address is 528 Birch Road."
#     },
#     {
#       "date": "2026-05-06",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2026-04-21",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-03-15",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in May."
#     },
#     {
#       "date": "2026-02-01",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-01-13",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 시카고에서 덴버까지 세 명, 오월 십일에 가는 버스 좀 보여줘 | S2 근데… 혹시 그 버스에 와이파이가 있어? | S3 음… 괜찮은 베이커리 있으면 추천해 줄래? | S4 알았어. 고마워.

     0.00s  user  발화 시작: 시카고에서 덴버까지 세 명, 오월 십일에 가는 버스 좀 보여줘.
     3.90s  <ret> 발화 (turn1 첫 프레임)
     4.22s  agent 발화 시작: <ret> 네, 확인해 보겠습니다. 오월 십일에 시카고에서 덴버로 가는 버스는 세 대가 있고, 가격은 백이십
     4.30s  user  발화 끝
     4.62s  ⚡SPAN 주입 [d'=0.72s / d_lead=1.63s]: (tool result) There are three buses departing Chicago for Denver on Ma
    12.93s  agent 발화 끝
    13.19s  user  발화 시작: 제일 싼 걸로 예약해 줘.
    14.57s  <ret> 발화 (turn3 첫 프레임)
    14.85s  user  발화 끝
    14.97s  agent 발화 시작: <ret> 네, 예약 진행하겠습니다. 시카고에서 덴버로 가는 오월 십일 버스 백이십삼번, 세 명 예약이 완료
    15.70s  ⚡SPAN 주입 [d'=1.12s / d_lead=1.92s]: (tool result) Your reservation for bus 123 from Chicago to Denver on M
    25.86s  agent 발화 끝
    26.23s  user  발화 시작: 혹시 환불 규정이 어떻게 돼?
    27.88s  agent 발화 시작: 예약 취소 및 환불 규정은 버스 회사마다 다릅니다. 확인 번호로 해당 버스 회사에 문의하시면 정확한 정보를 
    27.98s  user  발화 끝
    33.96s  user  발화 시작: 응.
    34.45s  user  발화 끝
    37.15s  user  발화 시작: 근데… 혹시 그 버스에 와이파이가 있어?
    37.38s  agent 발화 끝
    40.58s  <ret> 발화 (turn8 첫 프레임)
    40.97s  agent 발화 시작: <ret> 잠시만 확인해 볼게요. 버스 백이십삼번에는 무료 와이파이, 좌석마다 콘센트, 화장실이 있습니다.
    40.98s  user  발화 끝
    41.08s  ⚡SPAN 주입 [d'=0.50s / d_lead=1.83s]: (tool result) Bus 123 offers free Wi-Fi, power outlets at each seat, a
    43.65s  user  발화 시작: 와.
    44.05s  user  발화 끝
    47.54s  agent 발화 시작: 편안한 여행을 위해 필요한 모든 것이 준비되어 있겠네요. 혹시 다른 궁금한 점은 없으신가요?
    47.68s  agent 발화 끝
    54.31s  agent 발화 끝
    54.54s  user  발화 시작: 근데 혹시 그 버스가 시카고 어느 터미널에서 출발하는지 알 수 있을까?
    58.52s  <ret> 발화 (turn12 첫 프레임)
    58.92s  agent 발화 시작: <ret> 네, 시카고 출발 터미널 정보 알려드릴게요.
    59.02s  user  발화 끝
    60.20s  ⚡SPAN 주입 [d'=1.68s / d_lead=3.38s]: (tool result) Bus 123 departs from Chicago Union Station, Gate 7, at 8
    62.17s  agent 발화 시작: 버스 백이십삼번은 오월 십일 오전 여덟시에 시카고 유니언 스테이션 칠번 게이트에서 출발합니다.
    62.30s  agent 발화 끝
    68.94s  agent 발화 끝
    69.57s  user  발화 시작: 유니언 스테이션… 거기는 처음 가보는데, 혹시 근처에 아침 식사할 만한 곳 있어?
    75.54s  user  발화 끝
    75.91s  agent 발화 시작: 유니언 스테이션 근처에는 다양한 아침 식사 장소가 있습니다. 간단한 베이커리부터 브런치 카페까지, 취향에 맞
    85.60s  user  발화 시작: 음… 괜찮은 베이커리 있으면 추천해 줄래?
    85.65s  agent 발화 끝
    88.33s  <ret> 발화 (turn17 첫 프레임)
    88.56s  agent 발화 시작: <ret> 잠시 검색해 보겠습니다. 시카고 유니언 스테이션에서 영 점 삼마일 거리에 있는 와일드베리 팬케이크
    88.65s  user  발화 끝
    88.97s  ⚡SPAN 주입 [d'=0.64s / d_lead=1.59s]: (tool result) Wildberry Pancakes & Cafe is a bakery 0.3 miles from Chi
    96.47s  user  발화 시작: 그치.
    96.97s  user  발화 끝
    99.18s  agent 발화 끝
    99.43s  user  발화 시작: 와일드베리 팬케이크 앤 카페… 거긴 괜찮겠다.
   103.23s  agent 발화 시작: 훌륭한 선택입니다. 팬케이크가 아주 맛있다고 하네요.
   103.27s  user  발화 끝
   105.16s  user  발화 시작: 어어.
   105.79s  user  발화 끝
   106.51s  user  발화 시작: 혹시 거기까지 가는 길을 알려줄 수 있어?
   106.60s  agent 발화 끝
   109.10s  user  발화 끝
   109.19s  <ret> 발화 (turn23 첫 프레임)
   109.26s  agent 발화 시작: <ret> 물론입니다. 유니언 스테이션에서 도보로 약 육분 거리입니다.
   110.31s  ⚡SPAN 주입 [d'=1.12s / d_lead=4.35s]: (tool result) Walk north on Canal Street toward Adams Street for 0.2 m
   113.36s  agent 발화 시작: 캐널 스트리트에서 북쪽으로 아담스 스트리트까지 영 점 이마일을 걸은 다음 잭슨 블러바드에서 좌회전하세요. 와
   113.61s  agent 발화 끝
   118.27s  user  발화 시작: 진짜?
   118.95s  user  발화 끝
   124.10s  user  발화 시작: 알았어. 고마워.
   124.11s  agent 발화 끝
   125.95s  user  발화 끝
   126.15s  agent 발화 시작: 천만에요. 즐거운 여행 되세요. 혹시 다른 도움이 필요하시면 언제든지 말씀해주세요.
   131.99s  user  발화 시작: 그런데 혹시 오월 십일이 아니라 오월 십칠일로 버스 예약을 변경할 수 있을까?
   132.03s  agent 발화 끝
   136.74s  <ret> 발화 (turn29 첫 프레임)
   136.90s  agent 발화 시작: <ret> 네, 날짜 변경 가능합니다. 잠시만 기다려 주세요.
   136.99s  user  발화 끝
   137.86s  ⚡SPAN 주입 [d'=1.12s / d_lead=3.23s]: (tool result) Your bus reservation has been updated to May seventeenth
   140.03s  agent 발화 시작: 예약 날짜가 오월 십칠일로 변경되었고, 가격은 백이십오달러 그대로입니다. 새로운 확인 번호는 XYZ-칠백팔십
   140.13s  agent 발화 끝
   144.34s  user  발화 시작: 응.
   144.74s  user  발화 끝
   150.00s  user  발화 시작: 아, 다행이다. 확인해줘서 고마워.
   150.14s  agent 발화 끝
   152.26s  user  발화 끝
   152.63s  agent 발화 시작: 천만에요. 언제나 편안하게 여행 계획을 세우실 수 있도록 돕겠습니다.
   157.31s  agent 발화 끝
