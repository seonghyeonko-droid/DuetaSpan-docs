# v3_selfc_07_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_07",
#     "name": "민서",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "late 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-10",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2026-02-12",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2025-12-24",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in May."
#     },
#     {
#       "date": "2025-12-05",
#       "category": "home",
#       "text": "User's home address is 서울 강남구 역삼동 678-9."
#     },
#     {
#       "date": "2025-06-19",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-11",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 바이어 주식 가격 좀 알려줘. | S2 테슬라. | S3 … 혹시 바이어랑 테슬라 동시에 비교해 줘. 지금. | S4 유월 십오일이구나.

     0.00s  user  발화 시작: 바이어 주식 가격 좀 알려줘.
     1.64s  <ret> 발화 (turn1 첫 프레임)
     1.75s  user  발화 끝
     1.87s  agent 발화 시작: <ret> 바이어 주식이 현재 육십오 점 이 삼달러에 거래되고 있는데, 어제보다 일 점 일 이달러 하락했습니
     1.88s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.20s]: (tool result) Bayer, trading under the ticker BAYN, is currently tradi
     6.79s  user  발화 시작: 맞아.
     7.15s  user  발화 끝
    10.07s  agent 발화 끝
    10.28s  user  발화 시작: 음… 혹시 다른 주식도 알아봐 줄 수 있어?
    13.06s  user  발화 끝
    13.23s  agent 발화 시작: 어떤 주식 가격을 확인해 드릴까요?
    15.62s  agent 발화 끝
    15.96s  user  발화 시작: 테슬라.
    16.54s  <ret> 발화 (turn6 첫 프레임)
    16.59s  user  발화 끝
    16.62s  agent 발화 시작: <ret> 테슬라 주식이 현재 백칠십칠 점 팔 팔달러에 거래되고 있고, 어제보다 삼 점 오 오달러 상승했습니
    16.62s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.65s]: (tool result) Tesla, trading under the ticker TSLA, is currently tradi
    21.40s  user  발화 시작: 응.
    21.71s  user  발화 끝
    24.27s  agent 발화 끝
    24.65s  user  발화 시작: 아, 그래? —
    25.36s  user  발화 시작: … 혹시 바이어랑 테슬라 동시에 비교해 줘. 지금.
    25.62s  user  발화 끝
    28.45s  <ret> 발화 (turn10 첫 프레임)
    28.69s  agent 발화 시작: <ret> 두 주식을 비교해 드리자면— 바이어는 현재 육십오 점 이 삼달러로 어제보다 일 점 일 이달러 하락
    28.69s  user  발화 끝
    29.57s  ⚡SPAN 주입 [d'=1.12s / d_lead=1.99s]: Bayer, trading under the ticker BAYN, is currently trading at $65.23, 
    32.86s  user  발화 시작: 우와.
    33.49s  user  발화 끝
    41.68s  user  발화 시작: 며칠 전에 바이어 주가가 제일 높았을 때는 얼마였어?
    42.09s  agent 발화 끝
    44.54s  <ret> 발화 (turn13 첫 프레임)
    44.61s  agent 발화 시작: <ret> 최근 시장 데이터에 따르면 바이어 주가가 지난달 유월 십오일에 육십팔 점 오 영달러로 가장 높았습
    44.62s  ⚡SPAN 주입 [d'=1.52s / d_lead=7.00s]: (tool result) According to recent market data, Bayer’s highest stock p
    44.63s  user  발화 끝
    51.61s  agent 발화 끝
    51.92s  user  발화 시작: 유월 십오일이구나.
    53.29s  agent 발화 시작: 네, 그렇습니다. 혹시 다른 정보가 더 필요하신가요?
    53.39s  user  발화 끝
    56.83s  agent 발화 시작: 도움이 되었다니 다행입니다.
    57.00s  agent 발화 끝
    58.76s  agent 발화 끝
