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

# EXAMINER(FDB-v2) 단계: S1 시카고에서 덴버까지 버스 좀 보여줘. 세 명이고, 5월 10일 | S2 혹시 짐 부치는 것도 가능한가요? | S3 예를 들면요? | S4 간식… 글쎄요. 뭘 사갈까요?

     0.00s  user  발화 시작: 시카고에서 덴버까지 버스 좀 보여줘. 세 명이고, 5월 10일로.
     4.35s  <ret> 발화 (turn1 첫 프레임)
     4.66s  agent 발화 시작: <ret> 물론입니다. 세 분을 위한 시카고에서 덴버행 버스를 찾아볼게요.
     4.68s  user  발화 끝
     6.35s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.91s]: (tool result) Three buses depart Chicago for Denver on May 10th: 8:00 
     9.52s  agent 발화 시작: 5월 10일에 시카고에서 덴버로 가는 버스는 세 대가 있습니다. 오전 8시, 오후 2시 30분, 저녁 7시에
     9.56s  agent 발화 끝
    17.53s  user  발화 시작: 와.
    18.03s  user  발화 끝
    21.85s  agent 발화 끝
    22.13s  user  발화 시작: 제일 싼 거로 예약해 줘.
    23.62s  <ret> 발화 (turn5 첫 프레임)
    23.93s  user  발화 끝
    24.02s  agent 발화 시작: <ret> 예약이 완료되었습니다. 5월 10일 저녁 7시에 출발하는 버스, 세 분, 총 22만 원입니다. 예
    25.62s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.51s]: (tool result) Reservation confirmed: bus departs Chicago at 7:00 PM on
    33.53s  agent 발화 끝
    33.84s  user  발화 시작: 혹시, 그 버스에 와이파이 있어요?
    36.10s  <ret> 발화 (turn7 첫 프레임)
    36.48s  agent 발화 시작: <ret> 그 버스에 와이파이가 있는지 확인해 볼게요.
    36.57s  user  발화 끝
    37.38s  ⚡SPAN 주입 [d'=1.28s / d_lead=3.14s]: (tool result) The 7:00 PM bus to Denver offers free Wi-Fi, power outle
    39.46s  agent 발화 시작: 네, 해당 버스에는 무료 와이파이, 콘센트, 화장실이 있습니다.
    39.62s  agent 발화 끝
    41.96s  user  발화 시작: 응.
    42.37s  user  발화 끝
    43.58s  agent 발화 끝
    43.76s  user  발화 시작: 아, 좋아요. 근데—
    44.89s  user  발화 시작: 혹시 짐 부치는 것도 가능한가요?
    45.13s  user  발화 끝
    47.36s  agent 발화 시작: 짐 부치는 것도 가능합니다. 각 승객당—
    47.43s  user  발화 끝
    50.60s  <ret> 발화 (turn13 첫 프레임)
    50.83s  agent 발화 시작: <ret> 각 승객당 무게 제한 23kg 이하의 수하물 한 개와 기내 반입 가방 한 개가 무료입니다. 추가 
    50.92s  agent 발화 끝
    51.96s  ⚡SPAN 주입 [d'=1.36s / d_lead=9.50s]: (tool result) Each passenger is allowed one free checked bag up to 50 
    60.34s  agent 발화 끝
    60.41s  user  발화 시작: 그럼, 수하물 추가로 하나 더 부치고 싶은데, 얼마 더 내야 해요?
    65.08s  user  발화 끝
    65.47s  agent 발화 시작: 수하물 추가 시 1만 원이 추가됩니다.
    68.29s  agent 발화 끝
    69.93s  user  발화 시작: 아, 1만 원이요? 알겠어요.
    71.90s  agent 발화 시작: 네, 맞습니다. 혹시 다른 도움이 필요하신가요?
    71.91s  user  발화 끝
    74.70s  user  발화 시작: 출발 전에 뭐 준비해야 할 거 있을까요?
    74.90s  agent 발화 끝
    77.28s  user  발화 끝
    77.30s  agent 발화 시작: 장거리 버스 여행을 떠나기 전에 챙겨야 할 몇 가지가 있습니다.
    80.16s  user  발화 시작: 아.
    80.47s  user  발화 끝
    81.47s  agent 발화 끝
    81.55s  user  발화 시작: 예를 들면요?
    82.37s  user  발화 끝
    82.50s  agent 발화 시작: 편안한 옷차림과 개인 위생용품, 그리고 읽을거리나 음악을 준비하면 좋습니다.
    88.15s  agent 발화 끝
    88.17s  user  발화 시작: 읽을거리… 책을 안 가져갔는데.
    90.68s  agent 발화 시작: 괜찮습니다. 버스에 비치된 잡지를 읽거나, 스마트폰으로 전자책을 읽을 수도 있습니다.
    90.75s  user  발화 끝
    94.66s  user  발화 시작: 어어.
    95.29s  user  발화 끝
    97.00s  user  발화 시작: 전자책도 괜찮겠네요. 혹시 버스에서 충전은 가능해요?
    97.27s  agent 발화 끝
   101.03s  user  발화 끝
   101.08s  agent 발화 시작: 네, 해당 버스에는 콘센트가 있어서 충전이 가능합니다.
   102.95s  user  발화 시작: 응.
   103.16s  user  발화 끝
   105.16s  user  발화 시작: 아, 다행이다. 배터리 걱정 없겠네요.
   105.38s  agent 발화 끝
   107.70s  agent 발화 시작: 그렇죠. 편안한 여행 되세요. 혹시 출발 전에 간식을 좀 사갈까요?
   107.84s  user  발화 끝
   109.76s  user  발화 시작: 그니까.
   110.25s  user  발화 끝
   112.88s  agent 발화 끝
   113.29s  user  발화 시작: 간식… 글쎄요. 뭘 사갈까요?
   115.88s  user  발화 끝
   116.06s  agent 발화 시작: 간단한 스낵이나 과일, 물 정도면 괜찮을 것 같습니다. 너무 과도한 간식은 소화에 부담을 줄 수 있으니 주의
   124.04s  agent 발화 끝
   124.90s  user  발화 시작: 과일은 괜찮겠네요. 사과라도 하나 사갈까.
   127.75s  agent 발화 시작: 좋은 생각입니다. 사과는 이동 중에 먹기에도 간편하고 건강에도 좋습니다.
   127.95s  user  발화 끝
   130.91s  user  발화 시작: 응.
   131.22s  user  발화 끝
   132.74s  agent 발화 끝
   135.40s  user  발화 시작: 그럼, 사과랑 물 사갈게요.
   137.56s  agent 발화 시작: 네, 잘 준비하셔서 즐거운 여행 되세요. 혹시 또 궁금한 점이 있으신가요?
   137.65s  user  발화 끝
   139.80s  user  발화 시작: 응.
   140.11s  user  발화 끝
   141.85s  user  발화 시작: 아뇨, 괜찮아요. 이제 갈 준비해야겠네요. 감사합니다.
   142.10s  agent 발화 끝
   145.92s  agent 발화 시작: 천만에요. 즐거운 여행 되세요.
   146.20s  user  발화 끝
   148.36s  agent 발화 끝
