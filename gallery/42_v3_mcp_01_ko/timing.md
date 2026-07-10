# v3_mcp_01_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_01",
#     "name": "예재",
#     "location": {
#       "city": "Seoul",
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
#       "date": "2026-03-31",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in March."
#     },
#     {
#       "date": "2026-02-18",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     },
#     {
#       "date": "2025-11-13",
#       "category": "home",
#       "text": "User's home address is 50 Pine Court."
#     },
#     {
#       "date": "2025-08-15",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-04",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-11-08",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 애플 웹사이트 제품 페이지 상세 지도를 만들어 줘. | S2 배터리 사용 시간 정보는 어디에 나와 있어? | S3 가장 저렴한 아이폰 모델은 뭐야? | S4 Apple Store 강남으로 가는 길 안내해 줘.

     0.00s  user  발화 시작: 애플 웹사이트 제품 페이지 상세 지도를 만들어 줘.
     3.51s  <ret> 발화 (turn1 첫 프레임)
     3.75s  agent 발화 시작: <ret> 애플 웹사이트 제품 페이지 지도를 만드는 데 도움을 드릴 수 있습니다. 애플 제품 페이지 지도를 
     3.88s  user  발화 끝
     5.51s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.19s]: (tool result) Map created: Apple Products Page (https://www.apple.com/
    12.52s  agent 발화 끝
    13.20s  user  발화 시작: 아이폰 십오 프로 모델 스펙 페이지는 어디에 있어?
    16.30s  <ret> 발화 (turn3 첫 프레임)
    16.62s  agent 발화 시작: <ret> 아이폰 십오 프로 스펙 페이지 위치를 찾고 있습니다.
    16.72s  user  발화 끝
    18.30s  ⚡SPAN 주입 [d'=2.00s / d_lead=2.96s]: (tool result) Found: iPhone 15 Pro Specs Page (https://www.apple.com/k
    19.58s  agent 발화 끝
    19.71s  agent 발화 시작: 아이폰 십오 프로 스펙 페이지 링크를 찾았습니다. 바로 이동해 드릴까요?
    21.14s  user  발화 시작: 어.
    21.68s  user  발화 끝
    23.71s  <ret> 발화 (turn6 첫 프레임)
    23.73s  agent 발화 끝
    23.78s  agent 발화 시작: <ret> 아이폰 십오 프로 스펙 페이지를 열었어요.
    24.83s  user  발화 시작: 우와.
    25.15s  ⚡SPAN 주입 [d'=1.44s / d_lead=2.73s]: (tool result) URL opened: https://www.apple.com/kr/iphone-15-pro/specs
    25.65s  user  발화 끝
    26.50s  agent 발화 끝
    26.63s  user  발화 시작: 배터리 사용 시간 정보는 어디에 나와 있어?
    29.61s  <ret> 발화 (turn9 첫 프레임)
    29.78s  user  발화 끝
    29.84s  agent 발화 시작: <ret> 배터리 사용 시간 정보 위치를 찾고 있습니다.
    31.37s  ⚡SPAN 주입 [d'=1.76s / d_lead=2.31s]: (tool result) Found: Battery Life section - Under "Battery and Power" 
    32.15s  agent 발화 끝
    32.16s  agent 발화 시작: 배터리 사용 시간 정보는 '배터리 및 전원' 섹션 아래에 있습니다.
    36.37s  agent 발화 끝
    36.71s  user  발화 시작: 음… 아이폰 십오 프로 모델의 가격은 얼마야?
    40.74s  user  발화 끝
    40.79s  <ret> 발화 (turn12 첫 프레임)
    40.87s  agent 발화 시작: <ret> 아이폰 십오 프로 모델의 가격을 확인해 보겠습니다.
    42.39s  ⚡SPAN 주입 [d'=1.60s / d_lead=2.58s]: (tool result) iPhone 15 Pro starts at ₩1,449,000.
    43.45s  agent 발화 끝
    43.57s  agent 발화 시작: 아이폰 십오 프로는 천사백사십구만 원부터 시작합니다.
    46.80s  agent 발화 끝
    47.21s  user  발화 시작: 가장 저렴한 아이폰 모델은 뭐야?
    49.88s  <ret> 발화 (turn15 첫 프레임)
    50.12s  agent 발화 시작: <ret> 가장 저렴한 아이폰 모델은 아이폰 SE 삼세대이며, 삼십오만 원부터 시작합니다.
    50.16s  user  발화 끝
    51.32s  ⚡SPAN 주입 [d'=1.44s / d_lead=5.46s]: (tool result) iPhone SE (3rd generation) starts at ₩350,000.
    55.44s  user  발화 시작: 아이폰 SE 삼세대 재고가 있는 매장 찾아줘.
    55.59s  agent 발화 끝
    58.41s  <ret> 발화 (turn17 첫 프레임)
    58.81s  agent 발화 시작: <ret> Apple Store 강남에는 재고가 있고, Digital Plaza 영등포에는 제한적인 재고가 
    59.00s  user  발화 끝
    59.45s  ⚡SPAN 주입 [d'=1.04s / d_lead=5.33s]: (tool result) Apple Store 강남: In stock. Digital Plaza 영등포: Limited sto
    61.92s  user  발화 시작: 응.
    62.32s  user  발화 끝
    64.09s  user  발화 시작: Apple Store 강남으로 가는 길 안내해 줘.
    64.14s  agent 발화 끝
    66.88s  <ret> 발화 (turn20 첫 프레임)
    67.14s  user  발화 끝
    67.20s  agent 발화 시작: <ret> Apple Store 강남으로 가는 길을 안내해 드립니다.
    68.00s  ⚡SPAN 주입 [d'=1.12s / d_lead=2.54s]: (tool result) Navigation started to Apple Store Gangnam. Estimated tim
    69.74s  agent 발화 끝
