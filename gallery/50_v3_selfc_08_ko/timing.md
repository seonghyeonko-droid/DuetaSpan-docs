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

# EXAMINER(FDB-v2) 단계: S1 시카고에서 덴버까지 세 명, 오월 십일에 가는 버스 좀 보여줘 | S2 BX927이 뭐야? | S3 그 버스 예약해 줘. | S4 이 점 오 영달러가 얼마야?

     0.00s  user  발화 시작: 시카고에서 덴버까지 세 명, 오월 십일에 가는 버스 좀 보여줘.
     4.22s  <ret> 발화 (turn1 첫 프레임)
     4.44s  user  발화 끝
     4.53s  agent 발화 시작: <ret> 시카고에서 덴버까지 오월 십일에 가는 버스는 두 대가 있습니다… 첫 번째는 아침 여덟시에 출발해서
     6.22s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.90s]: [{"bus_id": "7492", "departure_time": "08:00", "arrival_time": "16:00"
    11.55s  user  발화 시작: 와.
    12.18s  user  발화 끝
    15.43s  agent 발화 끝
    15.80s  user  발화 시작: 아침 여덟시 버스 말고, 좀 더 늦게 출발하는 거 있어?
    19.05s  <ret> 발화 (turn4 첫 프레임)
    19.44s  agent 발화 시작: <ret> 오월 십일에 시카고에서 덴버로 가는 버스 중, 아침 여덟시 이후 출발하는 건… 정오 열두시에 출발
    19.50s  user  발화 끝
    21.05s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.48s]: [{"bus_id": "8915", "departure_time": "12:00", "arrival_time": "20:00"
    29.92s  agent 발화 끝
    31.34s  user  발화 시작: 그 버스, 좌석이 몇 개 남았어?
    32.94s  <ret> 발화 (turn6 첫 프레임)
    33.33s  agent 발화 시작: <ret> 그 버스에는 현재 좌석이 두 개 남아 있습니다…
    33.40s  user  발화 끝
    34.22s  ⚡SPAN 주입 [d'=1.28s / d_lead=2.58s]: [{"bus_id": "8915", "departure_time": "12:00", "arrival_time": "20:00"
    34.89s  user  발화 시작: 응.
    35.29s  user  발화 끝
    35.88s  user  발화 시작: 아, 맞다. 혹시 오월 구일은 어때?
    35.91s  agent 발화 끝
    38.81s  <ret> 발화 (turn9 첫 프레임)
    39.21s  agent 발화 시작: <ret> 오월 구일에 시카고에서 덴버로 가는 버스는… 아침 아홉시에 출발해서 오후 다섯시에 도착하는 백육십
    39.39s  user  발화 끝
    40.81s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.18s]: [{"bus_id": "2341", "departure_time": "09:00", "arrival_time": "17:00"
    50.20s  user  발화 시작: 그 버스, 예약해 줘.
    50.38s  agent 발화 끝
    51.96s  <ret> 발화 (turn11 첫 프레임)
    52.09s  user  발화 끝
    52.12s  agent 발화 시작: <ret> 오월 구일 아침 아홉시 버스, 세 분 예약 완료되었습니다… 확인 번호는 BX927입니다.
    53.96s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.71s]: {"confirmation_number": "BX927", "status": "confirmed"}
    58.66s  user  발화 시작: BX927이 뭐야?
    58.83s  agent 발화 끝
    60.72s  agent 발화 시작: BX927은 예약 확인 번호입니다… 혹시 예약 내용을 다시 한번 확인해 드릴까요?
    60.74s  user  발화 끝
    66.37s  agent 발화 끝
    67.38s  user  발화 시작: 아니, 됐어. 그 버스에 와이파이 있어?
    70.02s  <ret> 발화 (turn15 첫 프레임)
    70.08s  agent 발화 시작: <ret> 해당 버스에는 와이파이가 제공됩니다… 인터넷 사용은 가능합니다.
    70.27s  user  발화 끝
    71.38s  ⚡SPAN 주입 [d'=1.36s / d_lead=4.86s]: {"bus_id": "2341", "wifi": "available"}
    73.45s  user  발화 시작: 맞아.
    74.08s  user  발화 끝
    74.94s  agent 발화 끝
    75.21s  user  발화 시작: 아, 다행이다. 근데, 혹시 그 버스에 콘센트도 있어?
    78.33s  <ret> 발화 (turn18 첫 프레임)
    78.72s  agent 발화 시작: <ret> 아쉽게도 해당 버스에는 콘센트가 없습니다… 충전은 어려울 수 있습니다.
    78.91s  user  발화 끝
    80.33s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.00s]: {"bus_id": "2341", "power_outlet": "unavailable"}
    83.72s  agent 발화 끝
    83.81s  user  발화 시작: 흐음… 그럼 다른 버스는?
    85.28s  <ret> 발화 (turn20 첫 프레임)
    85.67s  agent 발화 시작: <ret> 오월 구일에 시카고에서 덴버로 가는 버스 중, 콘센트가 있는 버스는… 오후 두시에 출발해서 밤 열
    85.74s  user  발화 끝
    87.28s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.06s]: [{"bus_id": "5829", "departure_time": "14:00", "arrival_time": "22:00"
    90.52s  user  발화 시작: 그래.
    91.33s  user  발화 끝
    95.57s  user  발화 시작: 그 버스 예약해 줘.
    95.74s  agent 발화 끝
    96.32s  <ret> 발화 (turn23 첫 프레임)
    96.71s  agent 발화 시작: <ret> 오후 두시 버스, 세 분 예약 완료되었습니다… 확인 번호는 PY513입니다.
    96.99s  user  발화 끝
    98.32s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.45s]: {"confirmation_number": "PY513", "status": "confirmed"}
   101.54s  user  발화 시작: 진짜?
   102.17s  user  발화 끝
   103.16s  agent 발화 끝
   103.75s  user  발화 시작: PY513이 뭐야?
   105.19s  agent 발화 시작: PY513은 새로 예약하신 버스의 확인 번호입니다… 혹시 이전 예약은 취소해 드릴까요?
   105.31s  user  발화 끝
   107.87s  user  발화 시작: 응.
   108.37s  user  발화 끝
   111.44s  user  발화 시작: 아니, 됐어. 그 버스에 화장실은 있어?
   111.62s  agent 발화 끝
   114.00s  <ret> 발화 (turn29 첫 프레임)
   114.39s  agent 발화 시작: <ret> 해당 버스에는 화장실이 있습니다… 편하게 이용하실 수 있습니다.
   114.54s  user  발화 끝
   116.00s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.60s]: {"bus_id": "5829", "toilet": "available"}
   118.00s  agent 발화 끝
   118.12s  user  발화 시작: 좋아. 근데, 혹시 덴버에 도착해서 시내까지 가는 방법도 알려줄 수 있어?
   123.86s  <ret> 발화 (turn31 첫 프레임)
   123.93s  agent 발화 시작: <ret> 덴버 버스 정류장에서 시내까지 가는 방법은… 사십일번 버스를 타면 이십분 정도 걸리고, 요금은 이
   124.04s  user  발화 끝
   124.36s  ⚡SPAN 주입 [d'=0.50s / d_lead=8.10s]: [{"mode": "bus", "route": "41", "estimated_time": "20 minutes", "cost"
   129.98s  user  발화 시작: 진짜?
   130.62s  user  발화 끝
   132.03s  agent 발화 끝
   133.03s  user  발화 시작: 이 점 오 영달러가 얼마야?
   134.96s  agent 발화 시작: 이 점 오 영달러는 현재 환율로 약 삼천삼백원 정도입니다… 정확한 금액은 환율에 따라 달라질 수 있습니다.
   135.06s  user  발화 끝
   142.13s  user  발화 시작: 알았어.
   142.47s  agent 발화 끝
   142.78s  agent 발화 시작: 좋습니다.
   142.90s  user  발화 끝
   143.59s  agent 발화 끝
   143.64s  user  발화 시작: …근데 그 버스, 수하물 규정이 어떻게 돼?
   146.22s  <ret> 발화 (turn38 첫 프레임)
   146.29s  agent 발화 시작: <ret> 해당 버스의 수하물 규정은… 승객당 두개의 가방까지 허용되며, 각 가방의 최대 무게는 이십삼kg입
   146.54s  user  발화 끝
   148.22s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.93s]: {"bus_id": "5829", "luggage_allowance": "2 bags per passenger, max 50 
   153.98s  user  발화 시작: 아, 알았어. 고마워.
   154.22s  agent 발화 끝
   155.59s  agent 발화 시작: 천만에요. 안전한 여행 되세요.
   155.59s  user  발화 끝
   157.99s  agent 발화 끝
