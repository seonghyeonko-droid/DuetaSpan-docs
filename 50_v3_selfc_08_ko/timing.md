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

# EXAMINER(FDB-v2) 단계: S1 시카고에서 덴버까지 세 명, 5월 10일에 가는 버스 좀 보여 | S2 혹시 그 버스에 와이파이가 되는지 알 수 있을까? | S3 그럼 창가 쪽 세 자리를 예약해 줘. | S4 혹시 덴버에 도착해서 바로 호텔까지 가는 방법도 알려줄 수 있

     0.00s  user  발화 시작: 시카고에서 덴버까지 세 명, 5월 10일에 가는 버스 좀 보여줘.
     3.74s  <ret> 발화 (turn1 첫 프레임)
     3.94s  user  발화 끝
     4.05s  agent 발화 시작: <ret> 네, 시카고에서 덴버까지 가는 버스를 찾아볼게요. 5월 10일에 시카고에서 덴버로 가는 버스는 세
     5.74s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.30s]: (tool result) There are three buses departing Chicago for Denver on Ma
    14.03s  user  발화 시작: 와.
    14.53s  user  발화 끝
    19.45s  agent 발화 끝
    20.65s  user  발화 시작: 아, 근데 혹시 5월 9일로 날짜를 바꿔서 다시 찾아줄 수 있어?
    24.35s  <ret> 발화 (turn4 첫 프레임)
    24.66s  agent 발화 시작: <ret> 물론입니다. 날짜를 5월 9일로 변경해서 다시 찾아볼게요. 5월 9일에는 두 대의 버스가 있어요.
    24.86s  user  발화 끝
    26.35s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.88s]: (tool result) There are two buses departing Chicago for Denver on May 
    36.30s  agent 발화 끝
    36.53s  user  발화 시작: 4시 출발 버스, 그게 제일 저렴한 거 같네.
    39.39s  agent 발화 시작: 네, 맞아요. 오후 4시 출발 버스가 192달러로 가장 저렴합니다.
    39.44s  user  발화 끝
    42.57s  user  발화 시작: 대박.
    43.07s  user  발화 끝
    44.58s  agent 발화 끝
    44.80s  user  발화 시작: 그 버스로 예약해 줄 수 있어?
    46.33s  <ret> 발화 (turn9 첫 프레임)
    46.72s  agent 발화 시작: <ret> 그럼요, 예약 도와드릴게요. 네, 예약이 완료되었어요. 5월 9일 오후 4시 시카고에서 덴버 가는
    46.76s  user  발화 끝
    47.21s  ⚡SPAN 주입 [d'=0.88s / d_lead=1.79s]: (tool result) Your reservation for three passengers on the 4:00 PM bus
    58.68s  agent 발화 끝
    58.87s  user  발화 시작: 혹시 그 버스에 와이파이가 되는지 알 수 있을까?
    62.42s  <ret> 발화 (turn11 첫 프레임)
    62.66s  agent 발화 시작: <ret> 버스에 와이파이가 있는지 확인해 볼게요. 네, 그 버스에는 와이파이가 제공됩니다.
    62.76s  user  발화 끝
    63.54s  ⚡SPAN 주입 [d'=1.12s / d_lead=2.87s]: (tool result) Wi-Fi is available on the 4:00 PM bus from Chicago to De
    68.40s  agent 발화 끝
    69.35s  user  발화 시작: 아, 다행이다. 그럼 좌석 지정도 가능한가?
    72.30s  user  발화 끝
    72.62s  agent 발화 시작: 네, 좌석 지정도 가능합니다.
    74.58s  user  발화 시작: 혹시 그 버스에 콘센트도 있어?
    74.60s  agent 발화 끝
    76.35s  <ret> 발화 (turn15 첫 프레임)
    76.57s  agent 발화 시작: <ret> 아, 네, 콘센트가 있는지— 네, 콘센트도 있습니다. 충전 걱정 없이 편하게 가실 수 있겠네요.
    76.66s  user  발화 끝
    76.85s  ⚡SPAN 주입 [d'=0.50s / d_lead=1.84s]: (tool result) Power outlets are available on the 4:00 PM bus from Chic
    81.13s  user  발화 시작: 아.
    81.62s  user  발화 끝
    83.01s  agent 발화 끝
    83.26s  user  발화 시작: 그럼 창가 쪽 세 자리를 예약해 줘.
    85.55s  <ret> 발화 (turn18 첫 프레임)
    85.62s  agent 발화 시작: <ret> 창가 쪽 세 자리로 좌석을 변경해 드릴게요. 네, 좌석이 변경되었어요. 1A, 1B, 1C 세 자
    85.85s  user  발화 끝
    86.67s  ⚡SPAN 주입 [d'=1.12s / d_lead=3.69s]: (tool result) Your seats have been changed to window seats; seats 1A, 
    95.12s  agent 발화 끝
    97.01s  user  발화 시작: 좋아, 완벽해. 혹시 버스 출발 전에 알림을 받을 수 있을까?
   102.31s  agent 발화 시작: 물론입니다. 출발 전에 알림을 설정해 드릴게요.
   102.43s  user  발화 끝
   104.22s  user  발화 시작: 어어.
   104.66s  user  발화 끝
   105.38s  user  발화 시작: 알림은 출발 한 시간 전에 해줘.
   105.63s  agent 발화 끝
   107.45s  user  발화 끝
   107.49s  <ret> 발화 (turn23 첫 프레임)
   107.64s  agent 발화 시작: <ret> 한 시간 전에 알림을 설정해 드릴게요. 네, 5월 9일 오후 4시 출발 한 시간 전에 알림이 설정
   108.77s  ⚡SPAN 주입 [d'=1.28s / d_lead=2.75s]: (tool result) A reminder has been set for one hour before the 4:00 PM 
   111.14s  user  발화 시작: 진짜?
   111.77s  user  발화 끝
   115.42s  agent 발화 끝
   115.47s  user  발화 시작: 고마워, 덕분에 여행 준비가 훨씬 편해졌어.
   118.74s  agent 발화 시작: 천만에요. 여행 준비에 조금이나마 도움이 되었다니 기쁩니다.
   118.98s  user  발화 끝
   123.09s  agent 발화 끝
   123.10s  user  발화 시작: 혹시 덴버에 도착해서 바로 호텔까지 가는 방법도 알려줄 수 있을까?
   127.38s  agent 발화 시작: 네, 덴버 도착 후 호텔까지 가는 방법을 찾아볼게요. 호텔 이름을 알려주시겠어요?
   127.49s  user  발화 끝
   129.99s  user  발화 시작: 음.
   130.21s  user  발화 끝
   133.03s  agent 발화 끝
   133.34s  user  발화 시작: 호텔 이름은 ‘그랜드 덴버 호텔’이야.
   135.49s  <ret> 발화 (turn31 첫 프레임)
   135.88s  agent 발화 시작: <ret> ‘그랜드 덴버 호텔’까지 가는 방법을 찾아볼게요. 덴버 버스 정류장에서 그랜드 덴버 호텔까지 택시
   135.93s  user  발화 끝
   136.69s  ⚡SPAN 주입 [d'=1.20s / d_lead=3.59s]: (tool result) A taxi from the Denver Bus Station to the Grand Denver H
   140.67s  user  발화 시작: 응.
   140.88s  user  발화 끝
   147.85s  agent 발화 끝
   147.86s  user  발화 시작: 오, 택시비가 생각보다 저렴하네.
   150.17s  user  발화 끝
   150.28s  agent 발화 시작: 네, 예상보다 저렴해서 다행이네요. 즐거운 여행 되세요.
   154.44s  agent 발화 끝
