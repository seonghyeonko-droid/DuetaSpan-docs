# v3_chain_05_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_chain_05",
#     "name": "라온",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "late 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-05",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2026-03-27",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2025-09-06",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-08-26",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     },
#     {
#       "date": "2025-07-02",
#       "category": "home",
#       "text": "User's home address is 서울 마포구 성산동 45-6."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-29",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2026-03-21",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2026-01-06",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 지금부터 걸어서 이동하는 경로를 알려주세요. 위도 삼십사 점  | S2 혹시 그 카페가 지금 영업하고 있는지 확인할 수 있을까요? | S3 … 혹시 그 근처에 다른 맛집도 있을까요? | S4 그곳까지 가는 가장 빠른 길은 무엇인가요?

     0.00s  user  발화 시작: 지금부터 걸어서 이동하는 경로를 알려주세요. 위도 삼십사 점 영 오, 경도 -백십팔 점 이 사에서 위도 삼십
    12.38s  <ret> 발화 (turn1 첫 프레임)
    12.57s  user  발화 끝
    12.69s  agent 발화 시작: <ret> 지금 위치에서 목적지까지는 약 일 점 육킬로미터, 도보로 이십이분 정도 걸립니다. 사우스 브로드웨
    12.70s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.15s]: (tool result) {"distance": 1.6, "duration": 22, "route": "Walk north o
    22.84s  agent 발화 끝
    23.44s  user  발화 시작: 그 경로에 괜찮은 카페가 있는지 알려줄 수 있을까요?
    26.50s  <ret> 발화 (turn3 첫 프레임)
    26.81s  agent 발화 시작: <ret> 출발지 근처에 평점이 사 점 오점인 버브 커피 로스터스라는 카페가 있습니다.
    26.82s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.65s]: (tool result) {"results": [{"name": "Verve Coffee Roasters", "vicinity
    26.87s  user  발화 끝
    32.45s  user  발화 시작: 그 카페까지 얼마나 걸릴까요?
    32.46s  agent 발화 끝
    34.54s  <ret> 발화 (turn5 첫 프레임)
    34.71s  user  발화 끝
    34.77s  agent 발화 시작: <ret> 버브 커피 로스터스까지는 약 영 점 삼킬로미터, 걸어서 사분 정도 소요됩니다. 사우스 브로드웨이로
    34.78s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.36s]: (tool result) {"distance": 0.3, "duration": 4, "route": "Walk north on
    44.13s  agent 발화 끝
    44.47s  user  발화 시작: 혹시 그 카페가 지금 영업하고 있는지 확인할 수 있을까요?
    47.71s  <ret> 발화 (turn7 첫 프레임)
    47.84s  user  발화 끝
    48.02s  agent 발화 시작: <ret> 버브 커피 로스터스는 지금 영업 중이고, 오후 여섯시까지 영업합니다.
    48.03s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.18s]: (tool result) {"name": "Verve Coffee Roasters", "opening hours": "Open
    51.02s  user  발화 시작: 정말요?
    51.84s  user  발화 끝
    53.20s  agent 발화 끝
    53.34s  user  발화 시작: 아, 좋은 정보네요. 그런데—
    55.84s  user  발화 시작: … 혹시 그 근처에 다른 맛집도 있을까요?
    55.88s  user  발화 끝
    59.13s  <ret> 발화 (turn11 첫 프레임)
    59.20s  agent 발화 시작: <ret> 목적지 근처에 평점이 사 점 사점인 그랜드 센트럴 마켓이라는 맛집이 있습니다.
    59.21s  ⚡SPAN 주입 [d'=1.04s / d_lead=5.47s]: (tool result) {"results": [{"name": "Grand Central Market", "vicinity"
    59.26s  user  발화 끝
    64.67s  agent 발화 끝
    66.26s  user  발화 시작: 그랜드 센트럴 마켓은 어떤 종류의 음식을 파나요?
    69.13s  <ret> 발화 (turn13 첫 프레임)
    69.50s  user  발화 끝
    69.52s  agent 발화 시작: <ret> 그랜드 센트럴 마켓은 다양한 음식을 판매하는 역사적인 푸드 홀입니다. 여러 종류의 음식점을 만나볼
    69.53s  ⚡SPAN 주입 [d'=1.12s / d_lead=7.60s]: (tool result) {"name": "Grand Central Market", "cuisine": "Various", "
    77.12s  agent 발화 끝
    78.15s  user  발화 시작: 그곳까지 가는 가장 빠른 길은 무엇인가요?
    80.49s  <ret> 발화 (turn15 첫 프레임)
    80.80s  agent 발화 시작: <ret> 그랜드 센트럴 마켓까지는 약 영 점 육킬로미터, 걸어서 팔분 정도 걸립니다. 브로드웨이 남쪽 방향
    80.81s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.39s]: (tool result) {"distance": 0.6, "duration": 8, "route": "Walk south on
    80.87s  user  발화 끝
    88.97s  user  발화 시작: 정말 고맙습니다. 덕분에 계획을 세우는 데 도움이 많이 되었어요.
    89.19s  agent 발화 끝
    92.89s  user  발화 끝
    93.03s  agent 발화 시작: 도움이 되었다니 기쁩니다. 즐거운 시간 보내세요.
    96.27s  agent 발화 끝
