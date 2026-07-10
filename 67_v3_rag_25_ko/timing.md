# v3_rag_25_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_25",
#     "name": "은연",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-20",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-10-29",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2025-09-03",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in May."
#     },
#     {
#       "date": "2025-08-06",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-19",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2026-02-19",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 혹시 잭 소크랑 라파엘라 레지가 무슨 스포츠 하는 선수들인지  | S2 라켓이 나무였다니… 상상도 안 되네요. 혹시 지금은 어떤 재료 | S3 정말 덥네요. 테니스 치기엔 딱 좋은 날씨네요. | S4 가벼운 게 좋겠네요. 혹시 오늘 저녁에 영화 볼만한 거 추천해

     0.00s  user  발화 시작: 혹시 잭 소크랑 라파엘라 레지가 무슨 스포츠 하는 선수들인지 아세요?
     3.94s  <ret> 발화 (turn1 첫 프레임)
     4.10s  agent 발화 시작: <ret> 잭 소크 선수와 라파엘라 레지 선수는 프로 테니스 선수입니다.
     4.34s  user  발화 끝
     5.29s  user  발화 시작: 네.
     5.64s  user  발화 끝
     5.94s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.03s]: Jack Sock and Raffaella Reggi are professional tennis players.
     8.08s  user  발화 시작: 음… 테니스 선수들은 보통 어떤 훈련을 많이 해요?
     8.12s  agent 발화 끝
    11.36s  agent 발화 시작: 테니스 선수들은 체력 훈련과 기술 훈련을 병행하는 편이에요. 코트에서 많은 시간을 보내면서 서브, 스트로크,
    11.36s  user  발화 끝
    20.67s  user  발화 시작: 발리 연습이라… 발리가 정확히 뭔데요?
    20.86s  agent 발화 끝
    22.75s  <ret> 발화 (turn6 첫 프레임)
    22.90s  agent 발화 시작: <ret> 발리는 테니스에서 공이 바닥에 닿기 전에 치는 샷을 말합니다. 네트 앞에서 빠르게 반응하는 기술이
    23.02s  user  발화 끝
    24.75s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.27s]: A volley in tennis is a shot played before the ball bounces on the gro
    30.13s  user  발화 시작: 아, 네트 앞에서 치는 거군요. 근데 테니스는 언제부터 시작된 스포츠예요?
    30.17s  agent 발화 끝
    34.02s  <ret> 발화 (turn8 첫 프레임)
    34.38s  user  발화 끝
    34.40s  agent 발화 시작: <ret> 현대 테니스는 천팔백칠십년대 영국에서 시작된 잔디 테니스에서 유래했습니다. 역사가 꽤 오래되었죠.
    36.02s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.42s]: Modern tennis evolved from lawn tennis, which originated in England in
    41.59s  user  발화 시작: 천팔백칠십년대면 엄청 오래됐네요. 그땐 지금이랑 규칙이 많이 달랐어요?
    41.81s  agent 발화 끝
    46.54s  agent 발화 시작: 네, 규칙도 장비도 많이 달랐습니다. 처음에는 라켓도 나무로 만들어졌고, 네트 높이도 지금보다 낮았다고 합니
    46.77s  user  발화 끝
    54.09s  agent 발화 끝
    54.11s  user  발화 시작: 라켓이 나무였다니… 상상도 안 되네요. 혹시 지금은 어떤 재료로 만들어요?
    59.31s  <ret> 발화 (turn12 첫 프레임)
    59.47s  agent 발화 시작: <ret> 요즘 테니스 라켓은 주로 흑연, 유리 섬유, 또는 복합 재료로 만들어집니다. 가볍고 내구성이 좋아
    59.48s  user  발화 끝
    61.31s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.97s]: Modern tennis rackets are typically made of graphite, fiberglass, or c
    63.78s  user  발화 시작: 네.
    64.18s  user  발화 끝
    67.45s  agent 발화 끝
    68.31s  user  발화 시작: 흑연이군요. 그럼 테니스 코트 크기는 정해져 있어요?
    70.99s  <ret> 발화 (turn15 첫 프레임)
    71.30s  agent 발화 시작: <ret> 단식 경기용 테니스 코트는 길이가 이십삼 점 칠 칠미터, 폭이 팔 점 이 삼미터입니다. 복식 경기
    71.55s  user  발화 끝
    72.99s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.90s]: A standard tennis court is 78 feet (23.77 meters) long and 27 feet (8.
    80.19s  agent 발화 끝
    81.32s  user  발화 시작: 복식 경기용은 얼마나 넓어요?
    82.87s  <ret> 발화 (turn17 첫 프레임)
    83.07s  user  발화 끝
    83.10s  agent 발화 시작: <ret> 복식 경기용 테니스 코트는 폭이 십 점 구 칠미터입니다. 공간이 더 필요하니까요.
    84.87s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.32s]: For doubles matches, the tennis court is 36 feet (10.97 meters) wide.
    88.43s  agent 발화 끝
    88.56s  user  발화 시작: 그렇군요. 혹시 지금 서울 날씨 어때요?
    91.28s  <ret> 발화 (turn19 첫 프레임)
    91.51s  agent 발화 시작: <ret> 지금 서울은 이십팔도이고, 습도는 육십오%, 바람은 시속 삼 점 이킬로미터입니다. 꽤 덥네요.
    91.52s  user  발화 끝
    92.56s  ⚡SPAN 주입 [d'=1.28s / d_lead=7.14s]: (tool result) 28.0°C, humidity 65%, wind 3.2 km/h
    96.25s  user  발화 시작: 그렇군요.
    96.98s  user  발화 끝
    98.55s  user  발화 시작: 정말 덥네요. 테니스 치기엔 딱 좋은 날씨네요.
    98.65s  agent 발화 끝
   101.50s  agent 발화 시작: 테니스 치기엔 정말 좋은 날씨입니다. 햇볕도 좋고, 바람도 적당히 불어서 시원하죠.
   101.69s  user  발화 끝
   105.56s  user  발화 시작: 음.
   105.77s  user  발화 끝
   107.66s  agent 발화 끝
   108.00s  user  발화 시작: 맞아요. 테니스 말고 다른 라켓 스포츠도 좋아하세요?
   111.49s  agent 발화 시작: 네, 테니스뿐만 아니라 배드민턴이나 스쿼시도 좋아합니다. 라켓으로 공을 치는 스포츠는 다 재미있죠.
   111.57s  user  발화 끝
   117.83s  user  발화 시작: 배드민턴도 재밌죠. 혹시 배드민턴 규칙도 알려주실 수 있어요?
   118.07s  agent 발화 끝
   121.65s  agent 발화 시작: 배드민턴 규칙은 테니스와 비슷하지만, 네트 높이가 더 낮고, 공의 무게가 가볍다는 차이점이 있습니다.
   121.71s  user  발화 끝
   127.67s  user  발화 시작: 아, 그렇군요. 그럼 배드민턴 라켓은 테니스 라켓보다 가벼워요?
   128.18s  agent 발화 끝
   131.48s  <ret> 발화 (turn29 첫 프레임)
   131.55s  agent 발화 시작: <ret> 네, 배드민턴 라켓은 보통 칠십그램에서 구십오그램 사이로, 테니스 라켓보다 가볍습니다. 빠르게 움
   131.65s  user  발화 끝
   133.48s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.88s]: Badminton rackets are generally lighter than tennis rackets, typically
   139.43s  agent 발화 끝
   139.96s  user  발화 시작: 가벼운 게 좋겠네요. 혹시 오늘 저녁에 영화 볼만한 거 추천해 주실 수 있나요?
   144.09s  <ret> 발화 (turn31 첫 프레임)
   144.33s  agent 발화 시작: <ret> 오늘 저녁에 볼 만한 액션 영화로는 '더 이퀄라이저 삼', '미션 임파서블: 데드 레코닝 파트 일
   144.54s  user  발화 끝
   146.09s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.57s]: (tool result) The Equalizer 3 — Antoine Fuqua — 2023; Mission: Impossi
   147.97s  user  발화 시작: 음.
   148.33s  user  발화 끝
   152.71s  user  발화 시작: 음… '미션 임파서블'이 제일 끌리네요. 예매해 주실 수 있나요?
   152.90s  agent 발화 끝
   156.48s  <ret> 발화 (turn34 첫 프레임)
   156.63s  agent 발화 시작: <ret> '미션 임파서블: 데드 레코닝 파트 일', CGV 강남, 저녁 일곱시, 성인 두명, 삼만 원입니다
   156.87s  user  발화 끝
   158.48s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.32s]: (tool result) Mission: Impossible - Dead Reckoning Part One, CGV 강남, 1
   167.95s  agent 발화 끝
   168.69s  user  발화 시작: 감사합니다. 덕분에 좋은 영화 보러 가겠네요.
   171.55s  agent 발화 시작: 영화 즐겁게 보시고, 좋은 시간 보내세요.
   171.60s  user  발화 끝
   172.57s  user  발화 시작: 네.
   173.02s  user  발화 끝
   174.26s  user  발화 시작: 아니요, 괜찮습니다. 즐거운 하루 보내세요.
   174.41s  agent 발화 끝
   176.84s  user  발화 끝
   176.85s  agent 발화 시작: 네, 선생님도 즐거운 하루 보내세요.
   179.34s  agent 발화 끝
