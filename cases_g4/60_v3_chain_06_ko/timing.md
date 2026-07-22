# v3_chain_06_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_chain_06",
#     "name": "노아",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "late 40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-11",
#       "category": "coffee",
#       "text": "User's usual coffee order is a caramel latte."
#     },
#     {
#       "date": "2026-04-26",
#       "category": "streaming",
#       "text": "User subscribes to Apple Music and Coupang Play."
#     },
#     {
#       "date": "2026-03-15",
#       "category": "home",
#       "text": "User's home address is 서울 강남구 역삼동 678-9."
#     },
#     {
#       "date": "2026-03-11",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2026-02-16",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in July."
#     },
#     {
#       "date": "2026-01-30",
#       "category": "music",
#       "text": "User likes listening to a lo-fi jazz playlist."
#     },
#     {
#       "date": "2026-01-23",
#       "category": "wake",
#       "text": "User usually wakes up around 7:30am."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-03",
#       "title": "Training for a 10K",
#       "bullets": [
#         "current pace is around 6 minutes per km",
#         "race is in November"
#       ]
#     },
#     {
#       "date": "2026-04-23",
#       "title": "Choosing a laptop",
#       "bullets": [
#         "budget around 1.8M won",
#         "needs it for video editing and light gaming"
#       ]
#     },
#     {
#       "date": "2026-04-20",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers for a 3-story house",
#         "wanted coverage for the basement office"
#       ]
#     },
#     {
#       "date": "2026-04-05",
#       "title": "Building a PC",
#       "bullets": [
#         "budget around 2M won for gaming",
#         "torn between two GPUs"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 시안 종루에서 회민가까지 자전거로 얼마나 걸려? | S2 생각보다 가깝네. 거기 근처에 괜찮은 식당 있을까? | S3 양로우 파오모 여기로 예약할 수 있어? | S4 고마워!

     0.00s  user  발화 시작: 시안 종루에서 회민가까지 자전거로 얼마나 걸려?
     3.84s  <ret> 발화 (turn1 첫 프레임)
     4.02s  user  발화 끝
     4.14s  agent 발화 시작: <ret> 자전거로 가시면 금방 도착하시겠어요. 거리는 일 점 이 킬로미터고, 시간은 육분 정도 걸립니다. 
     5.06s  ⚡SPAN 주입 [d'=1.22s / d_lead=1.96s]: (tool result) Distance: 1.2 km, Duration: 6 minutes, Route: North via 
     7.32s  user  발화 시작: 어어.
     8.14s  user  발화 끝
    13.96s  agent 발화 끝
    14.47s  user  발화 시작: 생각보다 가깝네. 거기 근처에 괜찮은 식당 있을까?
    18.84s  <ret> 발화 (turn4 첫 프레임)
    18.93s  agent 발화 시작: <ret> 회민가 쪽에는 맛집이 정말 많죠. 양로우 파오모는 가격대가 중간 정도에 별점 사 점 오점이고, 비
    19.00s  user  발화 끝
    19.74s  ⚡SPAN 주입 [d'=0.90s / d_lead=2.57s]: (tool result) Restaurants in Muslim Quarter: Yangrou Paomo (Moderate, 
    27.10s  user  발화 시작: 응.
    27.59s  user  발화 끝
    29.68s  agent 발화 시작: [happy] 두 곳 다 유명한 곳인데, 혹시 더 끌리는—
    29.74s  agent 발화 끝
    31.72s  user  발화 시작: 양로우 파오모 여기로 예약할 수 있어?
    32.49s  agent 발화 끝
    34.30s  <ret> 발화 (turn8 첫 프레임)
    34.37s  agent 발화 시작: <ret> 오늘 열아홉시로 양로우 파오모 예약이 완료되었습니다.
    34.49s  user  발화 끝
    35.54s  ⚡SPAN 주입 [d'=1.23s / d_lead=3.70s]: (tool result) Reservation confirmed for Yangrou Paomo at 19:00 today.
    35.80s  user  발화 시작: 그치.
    36.44s  user  발화 끝
    37.98s  user  발화 시작: 고마워!
    38.07s  agent 발화 끝
    38.94s  user  발화 끝
    39.03s  agent 발화 시작: [happy] 별말씀을요. 가족분들과 함께 즐거운 식사 시간 되시길 바랍니다.
    43.76s  agent 발화 끝
