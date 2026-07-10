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

# EXAMINER(FDB-v2) 단계: S1 시카고에서 덴버까지 세 명, 오월 십일에 가는 버스 좀 보여줘 | S2 그럼 제일 싼 거, 오전 여덟시 걸로 예매해 줘. | S3 아, 그거 말고, 혹시 덴버에서 시카고로 돌아오는 버스도 알아 | S4 아, 그런데—

     0.00s  user  발화 시작: 시카고에서 덴버까지 세 명, 오월 십일에 가는 버스 좀 보여줘.
     4.58s  <ret> 발화 (turn1 첫 프레임)
     4.81s  user  발화 끝
     4.89s  agent 발화 시작: <ret> 시카고에서 덴버까지 가는 버스는 그레이하운드, 플릭스버스, 제퍼슨 라인이 있습니다. 최저가는 백오
     6.58s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.39s]: (tool result) Buses found: Greyhound, FlixBus, Jefferson Lines. Prices
    10.24s  user  발화 시작: 와.
    11.06s  user  발화 끝
    13.28s  agent 발화 끝
    13.61s  user  발화 시작: 그레이하운드는 몇 시에 출발해?
    15.19s  <ret> 발화 (turn4 첫 프레임)
    15.49s  agent 발화 시작: <ret> 그레이하운드는 오월 십일 시카고에서 오전 여덟시, 오후 두시, 저녁 여덟시에 출발합니다.
    15.54s  user  발화 끝
    16.15s  ⚡SPAN 주입 [d'=0.96s / d_lead=6.35s]: (tool result) Greyhound departs Chicago 8:00 AM, 2:00 PM, 8:00 PM.
    21.84s  agent 발화 끝
    23.23s  user  발화 시작: 제일 싼 시간대는?
    24.34s  <ret> 발화 (turn6 첫 프레임)
    24.55s  agent 발화 시작: <ret> 그레이하운드 오전 여덟시 출발 티켓은 백오십달러입니다.
    24.60s  user  발화 끝
    26.18s  ⚡SPAN 주입 [d'=1.84s / d_lead=3.89s]: (tool result) $150 for 8:00 AM Greyhound.
    26.88s  user  발화 시작: 대박.
    27.52s  user  발화 끝
    28.32s  user  발화 시작: 혹시 환불 가능한가?
    28.44s  agent 발화 끝
    30.16s  agent 발화 시작: 환불 규정은 버스 회사마다 다릅니다. 확인해 드릴까요?
    30.20s  user  발화 끝
    34.60s  user  발화 시작: 네, 확인해 줘.
    34.64s  agent 발화 끝
    35.81s  <ret> 발화 (turn11 첫 프레임)
    35.96s  agent 발화 시작: <ret> 그레이하운드는 출발 스물네시간 전에 취소하면 전액 환불됩니다.
    35.98s  user  발화 끝
    37.09s  ⚡SPAN 주입 [d'=1.28s / d_lead=3.80s]: (tool result) Greyhound: Full refund if canceled 24 hours before depar
    39.52s  user  발화 시작: 그럼 제일 싼 거, 오전 여덟시 걸로 예매해 줘.
    39.76s  agent 발화 끝
    42.83s  <ret> 발화 (turn13 첫 프레임)
    42.98s  agent 발화 시작: <ret> 예매가 완료되었습니다. 확인 번호는 칠 팔 구 사 오 육입니다.
    43.12s  user  발화 끝
    44.83s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.03s]: (tool result) Booking confirmed. Confirmation number: 789456.
    45.85s  user  발화 시작: 그치.
    46.60s  user  발화 끝
    47.01s  agent 발화 끝
    47.10s  user  발화 시작: 혹시 좌석 지정할 수 있어?
    49.05s  agent 발화 시작: 네, 가능합니다. 좌석을 지정해 드릴까요?
    49.22s  user  발화 끝
    51.63s  agent 발화 끝
    51.84s  user  발화 시작: 응, 창가 쪽으로 세 자리.
    53.38s  <ret> 발화 (turn18 첫 프레임)
    53.77s  agent 발화 시작: <ret> 창가 쪽 일A, 일B, 일C 좌석이 지정되었습니다.
    53.91s  user  발화 끝
    54.90s  ⚡SPAN 주입 [d'=1.52s / d_lead=3.56s]: (tool result) Seats 1A, 1B, 1C assigned.
    55.42s  user  발화 시작: 그래.
    56.15s  user  발화 끝
    57.19s  user  발화 시작: 덴버에 도착하는 시간은?
    57.34s  agent 발화 끝
    58.45s  <ret> 발화 (turn21 첫 프레임)
    58.84s  agent 발화 시작: <ret> 덴버에는 오후 여섯시에 도착합니다.
    58.94s  user  발화 끝
    59.17s  ⚡SPAN 주입 [d'=0.72s / d_lead=1.98s]: (tool result) Arrives Denver 6:00 PM.
    60.75s  user  발화 시작: 짐 부치는 건 얼마야?
    60.82s  agent 발화 끝
    62.06s  <ret> 발화 (turn23 첫 프레임)
    62.13s  agent 발화 시작: <ret> 그레이하운드는 가방당 이십달러입니다.
    62.36s  user  발화 끝
    63.18s  ⚡SPAN 주입 [d'=1.12s / d_lead=2.59s]: (tool result) Greyhound: $20 per bag.
    64.71s  agent 발화 끝
    66.07s  user  발화 시작: 아, 그거 말고, 혹시 덴버에서 시카고로 돌아오는 버스도 알아봐 줄래?
    71.04s  agent 발화 시작: 덴버에서 시카고로 돌아오는 버스도 알아봐 드릴까요?
    71.16s  user  발화 끝
    72.50s  user  발화 시작: 응.
    72.99s  user  발화 끝
    74.29s  user  발화 시작: 응, 오월 십오일에.
    74.46s  agent 발화 끝
    76.06s  <ret> 발화 (turn28 첫 프레임)
    76.44s  agent 발화 시작: <ret> 덴버에서 시카고로 가는 버스는 그레이하운드와 플릭스버스가 있습니다. 최저가는 백팔십달러부터입니다.
    76.59s  user  발화 끝
    78.06s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.68s]: (tool result) Buses found: Greyhound, FlixBus. Prices from $180.
    83.12s  agent 발화 끝
    83.25s  user  발화 시작: 플릭스버스는?
    84.27s  <ret> 발화 (turn30 첫 프레임)
    84.42s  agent 발화 시작: <ret> 플릭스버스는 오월 십오일 덴버에서 오전 아홉시, 오후 세시에 출발합니다.
    84.53s  user  발화 끝
    86.03s  ⚡SPAN 주입 [d'=1.76s / d_lead=5.13s]: (tool result) FlixBus departs Denver 9:00 AM, 3:00 PM.
    86.54s  user  발화 시작: 응.
    86.94s  user  발화 끝
    89.55s  agent 발화 끝
    90.49s  user  발화 시작: 오전 아홉시 거로 예매해 줘.
    92.69s  <ret> 발화 (turn33 첫 프레임)
    92.76s  agent 발화 시작: <ret> 예매가 완료되었습니다. 확인 번호는 구 팔 칠 육 오 사입니다.
    92.88s  user  발화 끝
    93.81s  ⚡SPAN 주입 [d'=1.12s / d_lead=4.30s]: (tool result) Booking confirmed. Confirmation number: 987654.
    96.68s  user  발화 시작: 혹시 짐 무게 제한이 있어?
    97.06s  agent 발화 끝
    98.38s  <ret> 발화 (turn35 첫 프레임)
    98.45s  agent 발화 시작: <ret> 플릭스버스는 가방당 이십kg까지 허용됩니다.
    98.61s  user  발화 끝
    99.58s  ⚡SPAN 주입 [d'=1.20s / d_lead=3.51s]: (tool result) FlixBus: 20kg per bag.
   101.90s  user  발화 시작: 아, 그런데—
   101.97s  agent 발화 끝
   103.02s  user  발화 시작: …혹시 덴버 공항 근처에서 출발하는 버스가 있어?
   103.23s  user  발화 끝
   106.19s  <ret> 발화 (turn38 첫 프레임)
   106.42s  agent 발화 시작: <ret> 죄송합니다. 덴버 공항에서 시카고로 가는 버스는 없습니다.
   106.62s  user  발화 끝
   108.19s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.26s]: (tool result) No buses found from Denver Airport to Chicago.
   108.52s  user  발화 시작: 응.
   109.01s  user  발화 끝
   110.68s  agent 발화 끝
   110.83s  user  발화 시작: 알았어. 그럼 됐어.
   112.65s  agent 발화 시작: 여행 준비 잘 하시고, 즐거운 여행 되세요.
   112.86s  user  발화 끝
   115.42s  agent 발화 끝
   115.58s  user  발화 시작: 고마워.
   116.21s  user  발화 끝
   116.34s  agent 발화 시작: 도움이 되었다니 기쁩니다.
   118.23s  agent 발화 끝
