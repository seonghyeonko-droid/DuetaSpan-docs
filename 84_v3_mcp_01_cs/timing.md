# v3_mcp_01_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_01",
#     "name": "예재",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "early 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-20",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in March."
#     },
#     {
#       "date": "2026-05-03",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     },
#     {
#       "date": "2026-03-11",
#       "category": "home",
#       "text": "User's home address is 50 Pine Court."
#     },
#     {
#       "date": "2026-02-18",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-06",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2026-02-16",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 나 그거 만들어 줘. | S2 좋아, 가격 찾아줘. 최신 iPhone 15 Pro Max,  | S3 천백구십구… 음, 지금 트레이드인 혜택이 있어? | S4 오, 완벽해! 그럼 하나 예약해 줘. 내일 오후에 픽업할 수 

     0.00s  user  발화 시작: 나 그거 만들어 줘.
     0.97s  <ret> 발화 (turn1 첫 프레임)
     1.13s  agent 발화 시작: <ret> 네, Apple 웹사이트 지도를 만들어 드릴게요— Apple 웹사이트의 제품 섹션은 쉽게 둘러볼 
     1.28s  user  발화 끝
     2.97s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.90s]: (tool result) The map shows 12 product categories: iPhone, iPad, Mac, 
     4.19s  user  발화 시작: 어어.
     5.01s  user  발화 끝
     8.54s  agent 발화 끝
    10.01s  user  발화 시작: 그거… 많네. iPhone이랑 iPad 페이지로만 좁혀 줄 수 있어?
    13.56s  <ret> 발화 (turn4 첫 프레임)
    13.88s  agent 발화 시작: <ret> 네, 지도를 구체화하는 건 간단합니다— iPhone과 iPad에 대한 자세한 페이지, 모델 및 가
    14.03s  user  발화 끝
    15.56s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.45s]: (tool result) The map displays the iPhone page with models, pricing, a
    18.20s  user  발화 시작: 응.
    18.41s  user  발화 끝
    21.76s  agent 발화 끝
    23.78s  user  발화 시작: 좋아, 가격 찾아줘. 최신 iPhone 15 Pro Max, 256 기가바이트 가격이 얼마야?
    29.39s  <ret> 발화 (turn7 첫 프레임)
    29.47s  agent 발화 시작: <ret> 음, 그 특정 가격을 찾아 드릴게요— iPhone 15 Pro Max, 256 기가바이트 저장 용
    29.62s  user  발화 끝
    30.51s  ⚡SPAN 주입 [d'=1.12s / d_lead=2.61s]: (tool result) The iPhone 15 Pro Max with 256GB storage costs $1199.00 
    34.44s  user  발화 시작: 어.
    34.79s  user  발화 끝
    36.19s  agent 발화 끝
    36.38s  user  발화 시작: 천백구십구… 음, 지금 트레이드인 혜택이 있어?
    40.27s  agent 발화 시작: 트레이드인 가치는 자주 변경되지만, 현재 견적을 확인해 드릴 수 있습니다.
    40.41s  user  발화 끝
    44.44s  agent 발화 끝
    44.54s  user  발화 시작: 근데, 그거 하기 전에, 내 주변 Apple Store에 재고가 있는지 먼저 확인해 줄래?
    49.40s  user  발화 끝
    49.42s  agent 발화 시작: 그건 실용적인 질문이네요—
    50.40s  <ret> 발화 (turn13 첫 프레임)
    50.79s  agent 발화 시작: <ret> 브로드웨이 Apple Store에는 256 기가바이트 iPhone 15 Pro Max가 당일 픽업
    50.89s  agent 발화 끝
    52.40s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.00s]: (tool result) The Apple Store at 1600 Broadway, New York, NY 10019 sho
    55.73s  user  발화 시작: 오, 완벽해! 그럼 하나 예약해 줘. 내일 오후에 픽업할 수 있게.
    55.79s  agent 발화 끝
    59.20s  <ret> 발화 (turn15 첫 프레임)
    59.43s  agent 발화 시작: <ret> 네, 그 iPhone을 확보해 드릴게요— iPhone 15 Pro Max가 브로드웨이 매장에서 내
    59.67s  user  발화 끝
    60.16s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.61s]: (tool result) Reservation confirmed: iPhone 15 Pro Max 256GB at 1600 B
    68.00s  agent 발화 끝
