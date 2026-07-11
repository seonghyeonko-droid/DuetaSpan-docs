# v3_chain_06_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_chain_06",
#     "name": "노완",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-27",
#       "category": "home",
#       "text": "User's home address is 부산 해운대구 우동 123-4."
#     },
#     {
#       "date": "2026-05-24",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-04-08",
#       "category": "pet",
#       "text": "User has a Golden Retriever named Max."
#     },
#     {
#       "date": "2026-02-01",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     },
#     {
#       "date": "2026-01-31",
#       "category": "work",
#       "text": "User works as a architect."
#     },
#     {
#       "date": "2025-06-08",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in May."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-11-11",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-11-10",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 이번 주 토요일에 서울 날씨 알려줘. | S2 그 기차표 예매해 줘. | S3 이번 주말에 서울 근교… | S4 가평역에서 페리 타는 곳까지 얼마나 걸려?

     0.00s  user  발화 시작: 이번 주 토요일에 서울 날씨 알려줘.
     0.00s  <ret> 발화 (turn1 첫 프레임)
     0.00s  <ret> 발화 (turn4 첫 프레임)
     0.00s  <ret> 발화 (turn9 첫 프레임)
     0.00s  <ret> 발화 (turn11 첫 프레임)
     0.02s  agent 발화 시작: <ret> 이번 주 토요일 서울 날씨는 이십팔 점 오도이고, 습도는 육십팔퍼센트, 바람은 시속 칠 점 이킬로
     0.02s  ⚡SPAN 주입 [d'=0.09s / d_lead=0.09s]: (tool result) {"temperature": "28.5°C", "humidity": "68%", "wind speed
     0.02s  user  발화 끝
     0.12s  user  발화 시작: 음.
     0.12s  agent 발화 끝
     0.12s  user  발화 시작: 그럼 일요일은 어때?
     0.12s  user  발화 끝
     0.13s  agent 발화 시작: <ret> 일요일은 삼십 점 일도로 더욱 덥고, 습도는 칠십일퍼센트, 바람은 시속 육 점 오킬로미터로 맑을 
     0.13s  ⚡SPAN 주입 [d'=0.08s / d_lead=0.08s]: (tool result) {"temperature": "30.1°C", "humidity": "71%", "wind speed
     0.13s  user  발화 끝
     0.17s  <ret> 발화 (turn7 첫 프레임)
     0.21s  user  발화 시작: 어.
     0.21s  agent 발화 끝
     0.22s  user  발화 시작: 다음 주 화요일에 부산 가는 기차표 있나?
     0.22s  user  발화 끝
     0.25s  agent 발화 시작: <ret> 칠월 십오일 서울에서 부산으로 가는 기차표는 여러 개 있습니다. 혹시 시간대를 정해두신 게 있으신
     0.25s  ⚡SPAN 주입 [d'=0.06s / d_lead=0.06s]: (tool result) “There are several trains available on July 15, 2026, de
     0.25s  user  발화 끝
     0.30s  <ret> 발화 (turn15 첫 프레임)
     0.30s  user  발화 시작: 음… 아침 일찍 출발하는 걸로 알아봐 줘.
     0.30s  agent 발화 끝
     0.33s  agent 발화 시작: <ret> 아침 일찍 출발하는 기차는 서울역에서 여섯시 삼십분에 출발해서 부산에 열시에 도착하는 게 가장 빠
     0.33s  ⚡SPAN 주입 [d'=0.06s / d_lead=0.06s]: (tool result) [“The earliest train departs at 06:30 from Seoul Station
     0.33s  user  발화 끝
     0.39s  user  발화 시작: 그 기차표 예매해 줘.
     0.39s  agent 발화 끝
     0.40s  agent 발화 시작: <ret> 기차표 예매가 완료되었습니다. 확인번호는 티 알 사 오 구 팔 이 삼이고, 칠월 십오일 여섯시 삼
     0.40s  ⚡SPAN 주입 [d'=0.10s / d_lead=0.10s]: (tool result) {"confirmation id": "TR459823", "departure time": "06:30
     0.40s  user  발화 끝
     0.47s  <ret> 발화 (turn25 첫 프레임)
     0.51s  user  발화 시작: 어머.
     0.51s  agent 발화 끝
     0.51s  user  발화 시작: 아, 잠깐만.
     0.51s  user  발화 끝
     0.52s  user  발화 시작: … 혹시 그 기차에 와이파이 있나요?
     0.52s  user  발화 끝
     0.52s  <ret> 발화 (turn20 첫 프레임)
     0.54s  agent 발화 시작: <ret> KTX 고속열차는 모든 승객에게 무료 와이파이 서비스를 제공합니다. 안심하고 인터넷을 사용하실 수
     0.54s  ⚡SPAN 주입 [d'=0.05s / d_lead=0.05s]: (tool result) “KTX high-speed trains offer free Wi-Fi access to all pa
     0.54s  user  발화 끝
     0.60s  user  발화 시작: 응.
     0.60s  agent 발화 끝
     0.60s  agent 발화 시작: 여행 중에도 편안하게 인터넷을 사용할 수 있어서 다행이네요. 혹시 다른 필요한 정보가 있으신가요?
     0.60s  user  발화 끝
     0.60s  <ret> 발화 (turn22 첫 프레임)
     0.65s  user  발화 시작: 이번 주말에 서울 근교…
     0.65s  agent 발화 끝
     0.67s  user  발화 시작: …갈만한 곳 추천해 줘.
     0.67s  user  발화 끝
     0.68s  agent 발화 시작: <ret> 서울 근교에는 남이섬이 아름다운 경치와 숲길로 유명한 인기 명소입니다. 이번 주말에 방문하시면 좋
     0.68s  ⚡SPAN 주입 [d'=0.06s / d_lead=0.06s]: (tool result) “Nami Island is a popular destination near Seoul, known 
     0.68s  user  발화 끝
     0.74s  user  발화 시작: 남이섬 가려면 어떻게 가?
     0.74s  agent 발화 끝
     0.76s  agent 발화 시작: <ret> 경춘선 열차를 타고 가평역까지 가신 다음, 페리를 타시면 남이섬에 도착할 수 있습니다. 자세한 길
     0.76s  ⚡SPAN 주입 [d'=0.08s / d_lead=0.08s]: (tool result) “Take the Gyeongchun Line train to Gapyeong Station, the
     0.76s  user  발화 끝
     0.84s  user  발화 시작: 응.
     0.84s  agent 발화 끝
     0.84s  user  발화 시작: 가평역에서 페리 타는 곳까지 얼마나 걸려?
     0.84s  user  발화 끝
     0.87s  agent 발화 시작: <ret> 가평역에서 남이섬 페리 선착장까지는 약 삼 점 오킬로미터이고, 택시를 타면 약 십분 정도 걸립니다
     0.87s  ⚡SPAN 주입 [d'=0.06s / d_lead=0.06s]: (tool result) “The distance from Gapyeong Station to Nami Island Ferry
     0.87s  user  발화 끝
     0.92s  user  발화 시작: 고마워.
     0.92s  agent 발화 끝
     0.93s  agent 발화 시작: 도움이 되셨다니 기쁩니다. 혹시 스트레스 해소에 도움이 되는 명상 음악을 들려드릴까요?
     0.93s  user  발화 끝
     0.97s  user  발화 시작: 아니, 괜찮아. 그냥 잘게.
     0.97s  agent 발화 끝
     0.99s  agent 발화 시작: 편안한 밤 보내세요.
     0.99s  user  발화 끝
     1.00s  agent 발화 끝
