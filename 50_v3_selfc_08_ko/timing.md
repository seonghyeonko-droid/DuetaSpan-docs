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

# EXAMINER(FDB-v2) 단계: S1 시카고에서 덴버까지 세 명, 오월 십일에 가는 버스 좀 보여줘 | S2 혹시 그 버스에 와이파이가 되는지 알 수 있을까? | S3 그럼 창가 쪽 세 자리를 예약해 줘. | S4 혹시 덴버에 도착해서 바로 호텔까지 가는 방법도 알려줄 수 있

     0.00s  user  발화 시작: 시카고에서 덴버까지 세 명, 오월 십일에 가는 버스 좀 보여줘.
     3.71s  <ret> 발화 (turn1 첫 프레임)
     4.03s  agent 발화 시작: <ret> 네, 시카고에서 덴버까지 가는 버스를 찾아볼게요. 오월 십일에 시카고에서 덴버로 가는 버스는 세 
     4.07s  user  발화 끝
     5.71s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.35s]: (tool result) There are three buses departing Chicago for Denver on Ma
    14.14s  user  발화 시작: 와.
    14.60s  user  발화 끝
    19.66s  agent 발화 끝
    20.81s  user  발화 시작: 아, 근데 혹시 오월 구일로 날짜를 바꿔서 다시 찾아줄 수 있어?
    24.95s  <ret> 발화 (turn4 첫 프레임)
    25.26s  agent 발화 시작: <ret> 물론입니다. 날짜를 오월 구일로 변경해서 다시 찾아볼게요. 오월 구일에는 두 대의 버스가 있어요.
    25.49s  user  발화 끝
    26.95s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.05s]: (tool result) There are two buses departing Chicago for Denver on May 
    37.41s  agent 발화 끝
    37.59s  user  발화 시작: 네시 출발 버스, 그게 제일 저렴한 거 같네.
    40.82s  user  발화 끝
    40.90s  agent 발화 시작: 네, 맞아요. 오후 네시 출발 버스가 백구십이달러로 가장 저렴합니다.
    43.65s  user  발화 시작: 대박.
    44.13s  user  발화 끝
    45.44s  agent 발화 끝
    45.61s  user  발화 시작: 그 버스로 예약해 줄 수 있어?
    47.16s  <ret> 발화 (turn9 첫 프레임)
    47.55s  agent 발화 시작: <ret> 그럼요, 예약 도와드릴게요. 네, 예약이 완료되었어요. 오월 구일 오후 네시 시카고에서 덴버 가는
    47.59s  user  발화 끝
    48.04s  ⚡SPAN 주입 [d'=0.88s / d_lead=1.40s]: (tool result) Your reservation for three passengers on the 4:00 PM bus
    59.65s  agent 발화 끝
    59.83s  user  발화 시작: 혹시 그 버스에 와이파이가 되는지 알 수 있을까?
    62.87s  <ret> 발화 (turn11 첫 프레임)
    63.06s  user  발화 끝
    63.11s  agent 발화 시작: <ret> 버스에 와이파이가 있는지 확인해 볼게요. 네, 그 버스에는 와이파이가 제공됩니다.
    63.99s  ⚡SPAN 주입 [d'=1.12s / d_lead=2.78s]: (tool result) Wi-Fi is available on the 4:00 PM bus from Chicago to De
    68.67s  agent 발화 끝
    69.59s  user  발화 시작: 아, 다행이다. 그럼 좌석 지정도 가능한가?
    72.17s  user  발화 끝
    72.60s  agent 발화 시작: 네, 좌석 지정도 가능합니다.
    74.67s  user  발화 시작: 혹시 그 버스에 콘센트도 있어?
    74.72s  agent 발화 끝
    76.75s  <ret> 발화 (turn15 첫 프레임)
    76.93s  user  발화 끝
    76.99s  agent 발화 시작: <ret> 아, 네, 콘센트가 있는지— 네, 콘센트도 있습니다. 충전 걱정 없이 편하게 가실 수 있겠네요.
    77.25s  ⚡SPAN 주입 [d'=0.50s / d_lead=1.71s]: (tool result) Power outlets are available on the 4:00 PM bus from Chic
    81.17s  user  발화 시작: 아.
    81.81s  user  발화 끝
    82.97s  agent 발화 끝
    83.20s  user  발화 시작: 그럼 창가 쪽 세 자리를 예약해 줘.
    85.51s  <ret> 발화 (turn18 첫 프레임)
    85.58s  agent 발화 시작: <ret> 창가 쪽 세 자리로 좌석을 변경해 드릴게요. 네, 좌석이 변경되었어요. 일A, 일B, 일C 세 자
    85.65s  user  발화 끝
    86.63s  ⚡SPAN 주입 [d'=1.12s / d_lead=3.68s]: (tool result) Your seats have been changed to window seats; seats 1A, 
    95.04s  agent 발화 끝
    96.91s  user  발화 시작: 좋아, 완벽해. 혹시 버스 출발 전에 알림을 받을 수 있을까?
   101.47s  agent 발화 시작: 물론입니다. 출발 전에 알림을 설정해 드릴게요.
   101.59s  user  발화 끝
   103.32s  user  발화 시작: 어어.
   104.14s  user  발화 끝
   104.43s  user  발화 시작: 알림은 출발 한 시간 전에 해줘.
   104.70s  agent 발화 끝
   106.50s  user  발화 끝
   106.54s  <ret> 발화 (turn23 첫 프레임)
   106.69s  agent 발화 시작: <ret> 한 시간 전에 알림을 설정해 드릴게요. 네, 오월 구일 오후 네시 출발 한 시간 전에 알림이 설정
   107.66s  ⚡SPAN 주입 [d'=1.12s / d_lead=2.54s]: (tool result) A reminder has been set for one hour before the 4:00 PM 
   109.94s  user  발화 시작: 진짜?
   110.71s  user  발화 끝
   113.88s  agent 발화 끝
   113.95s  user  발화 시작: 고마워, 덕분에 여행 준비가 훨씬 편해졌어.
   117.10s  agent 발화 시작: 천만에요. 여행 준비에 조금이나마 도움이 되었다니 기쁩니다.
   117.18s  user  발화 끝
   121.15s  user  발화 시작: 혹시 덴버에 도착해서 바로 호텔까지 가는 방법도 알려줄 수 있을까?
   121.36s  agent 발화 끝
   125.36s  user  발화 끝
   125.41s  agent 발화 시작: 네, 덴버 도착 후 호텔까지 가는 방법을 찾아볼게요. 호텔 이름을 알려주시겠어요?
   128.15s  user  발화 시작: 음.
   128.55s  user  발화 끝
   131.28s  agent 발화 끝
   131.62s  user  발화 시작: 호텔 이름은 ‘그랜드 덴버 호텔’이야.
   133.62s  <ret> 발화 (turn31 첫 프레임)
   134.01s  agent 발화 시작: <ret> ‘그랜드 덴버 호텔’까지 가는 방법을 찾아볼게요. 덴버 버스 정류장에서 그랜드 덴버 호텔까지 택시
   134.11s  user  발화 끝
   134.82s  ⚡SPAN 주입 [d'=1.20s / d_lead=3.24s]: (tool result) A taxi from the Denver Bus Station to the Grand Denver H
   138.30s  user  발화 시작: 응.
   138.66s  user  발화 끝
   144.80s  user  발화 시작: 오, 택시비가 생각보다 저렴하네.
   144.81s  agent 발화 끝
   147.10s  user  발화 끝
   147.25s  agent 발화 시작: 네, 예상보다 저렴해서 다행이네요. 즐거운 여행 되세요.
   150.85s  agent 발화 끝
