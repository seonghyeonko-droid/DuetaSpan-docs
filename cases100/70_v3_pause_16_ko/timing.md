# v3_pause_16_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pause_16",
#     "name": "하진",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "late 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-15",
#       "category": "medication",
#       "text": "User takes blood-pressure medication."
#     },
#     {
#       "date": "2026-04-01",
#       "category": "streaming",
#       "text": "User subscribes to Disney+ and YouTube Premium."
#     },
#     {
#       "date": "2026-03-29",
#       "category": "partner",
#       "text": "User's partner is named Daniel."
#     },
#     {
#       "date": "2026-02-26",
#       "category": "pet",
#       "text": "User has a Bengal cat named Tiger."
#     },
#     {
#       "date": "2026-02-06",
#       "category": "schedule",
#       "text": "User has flexible hours."
#     },
#     {
#       "date": "2026-02-03",
#       "category": "home",
#       "text": "User's home address is 서울 마포구 성산동 45-6."
#     },
#     {
#       "date": "2025-12-03",
#       "category": "music",
#       "text": "User likes listening to indie folk."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-09",
#       "title": "Meal-prep planning",
#       "bullets": [
#         "wants high-protein lunches under 600 calories",
#         "avoiding dairy this month"
#       ]
#     },
#     {
#       "date": "2026-04-19",
#       "title": "Choosing a laptop",
#       "bullets": [
#         "budget around 1.8M won",
#         "needs it for video editing and light gaming"
#       ]
#     },
#     {
#       "date": "2025-12-13",
#       "title": "Planning a wedding",
#       "bullets": [
#         "guest list around 80 people",
#         "comparing two venues for next May"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 마추픽추… 그 고대 도시를 누가 발견했더라? | S2 뭐… 어떻게? | S3 그게… 쉽지가 않아. | S4 …혹시 서울에 조용한 공원 같은 곳 있어?

     0.00s  user  발화 시작: 마추픽추… 그 고대 도시를 누가 발견했더라?
     3.40s  <ret> 발화 (turn1 첫 프레임)
     3.56s  user  발화 끝
     3.65s  agent 발화 시작: <ret> 마추픽추를 서양에 알린 건 미국의 탐험가인 히람 빙엄 씨예요, 천구백십일년에요.
     3.70s  ⚡SPAN 주입 [d'=0.30s / d_lead=6.53s]: Hiram Bingham, an American explorer, brought Machu Picchu to Western a
     6.50s  user  발화 시작: 응.
     6.86s  user  발화 끝
    10.18s  agent 발화 끝
    10.44s  user  발화 시작: 음…
    10.88s  agent 발화 시작: 혹시 마추픽추에 대해 더 궁금한 점이 있으신가요?
    10.90s  user  발화 끝
    13.19s  user  발화 시작: 어.
    13.82s  user  발화 끝
    14.44s  agent 발화 끝
    14.63s  user  발화 시작: 아니, 그냥 갑자기 생각나서…
    16.80s  user  발화 끝
    18.36s  user  발화 시작: …물어봤어. 요즘 좀 불안해서…
    21.50s  user  발화 끝
    21.53s  agent 발화 시작: [sigh] 불안하시군요. 마음이 편안해지도록 제가 도와드릴게요.
    24.64s  user  발화 시작: 그치.
    25.27s  user  발화 끝
    26.86s  agent 발화 끝
    27.50s  user  발화 시작: 뭐… 어떻게?
    29.34s  user  발화 끝
    29.67s  agent 발화 시작: 혹시 심호흡을 해보셨어요? 깊게 숨을 들이쉬고 천천히 내쉬는 것만으로도 도움이 될 수 있어요.
    32.26s  user  발화 시작: 음.
    32.75s  user  발화 끝
    37.05s  agent 발화 끝
    38.54s  user  발화 시작: 해봤는데… 잘 안 돼.
    40.61s  user  발화 끝
    40.76s  agent 발화 시작: [curious] 어떤 점이 힘드신가요? 숨을 들이쉬는 것 자체가 어려운 건가요, 아니면 불안한 생각이 계속
    48.36s  agent 발화 끝
    48.75s  user  발화 시작: 생각 때문에… 계속 머릿속에 맴돌아.
    51.69s  agent 발화 시작: 생각 때문에 불안하시군요. 생각을 잠시 멈추는 연습을 해보는 건 어떨까요?
    51.70s  user  발화 끝
    57.11s  agent 발화 끝
    57.29s  user  발화 시작: 그게… 쉽지가 않아.
    59.13s  agent 발화 시작: [happy] 쉽지 않더라도 괜찮아요. 처음부터 완벽하게 하려고 하지 않아도 돼요.
    59.23s  user  발화 끝
    61.41s  user  발화 시작: 어어.
    62.04s  user  발화 끝
    64.23s  agent 발화 끝
    65.27s  user  발화 시작: 그럼 뭘 해야 할까?
    66.24s  <ret> 발화 (turn21 첫 프레임)
    66.54s  ⚡SPAN 주입 [d'=0.30s / d_lead=5.61s]: Mindfulness meditation involves focusing on the present moment without
    66.72s  agent 발화 시작: <ret> 판단 없이 현재에 집중하는 명상, 마음 챙김 명상을 해보는 건 어떠세요?
    66.83s  user  발화 끝
    72.25s  user  발화 시작: 명상…
    72.32s  agent 발화 끝
    73.10s  agent 발화 시작: 짧게 시작해 보세요. 오분이라도 괜찮아요. 편안한 곳에 앉아서 눈을 감고 호흡에 집중해 보세요.
    73.20s  user  발화 끝
    77.15s  user  발화 시작: 음.
    77.64s  user  발화 끝
    80.79s  agent 발화 끝
    80.84s  user  발화 시작: 좋아… 한번 해볼게. 근데…
    83.97s  user  발화 끝
    85.39s  user  발화 시작: …혹시 서울에 조용한 공원 같은 곳 있어?
    87.52s  <ret> 발화 (turn27 첫 프레임)
    87.94s  agent 발화 시작: <ret> 서울에 있는 올림픽공원은 넓은 녹지와 조용한 산책로를 제공해요.
    88.10s  user  발화 끝
    89.02s  ⚡SPAN 주입 [d'=1.50s / d_lead=5.28s]: Olympic Park in Seoul offers extensive green spaces and peaceful walki
    91.91s  user  발화 시작: 그치.
    92.69s  user  발화 끝
    93.22s  agent 발화 끝
    93.39s  user  발화 시작: 올림픽공원… 가봐야겠다.
    95.56s  user  발화 끝
    95.80s  agent 발화 시작: [happy] 좋은 선택이세요. 자연 속에서 시간을 보내면 마음이 훨씬 편안해질 거예요.
   102.01s  user  발화 시작: 고마워, 드래온.
   102.42s  agent 발화 끝
   103.24s  agent 발화 시작: [happy] 천만에요. 언제든 필요하시면 말씀해주세요. 제가 항상 곁에 있답니다.
   103.29s  user  발화 끝
   110.38s  agent 발화 끝
