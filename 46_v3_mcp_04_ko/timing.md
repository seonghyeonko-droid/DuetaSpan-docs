# v3_mcp_04_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_04",
#     "name": "우완",
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
#       "date": "2026-01-26",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2025-12-01",
#       "category": "home",
#       "text": "User's home address is 대구 중구 동인동 88-1."
#     },
#     {
#       "date": "2025-11-23",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2025-08-21",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-18",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-08-10",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 엄마한테 칠달러 칠십오센트 송금 요청 좀 보내줘. | S2 혹시 지금 서울 날씨 어때? | S3 음… 비 올 가능성은? | S4 알았어, 고마워.

     0.00s  user  발화 시작: 엄마한테 칠달러 칠십오센트 송금 요청 좀 보내줘.
     3.39s  <ret> 발화 (turn1 첫 프레임)
     3.42s  user  발화 끝
     3.78s  agent 발화 시작: <ret> 엄마께 칠달러 칠십오센트 송금 요청을 보냈어요. 확인 번호는 피 엑스 구 이 알 엠 칠 일입니다.
     3.79s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.14s]: (tool result) Payment request sent to Mom for $7.75. Confirmation ID i
     8.65s  user  발화 시작: 응.
     9.00s  user  발화 끝
    10.92s  agent 발화 끝
    11.32s  user  발화 시작: 그 확인 번호 다시 한 번만 말해 줄래?
    12.92s  <ret> 발화 (turn4 첫 프레임)
    13.15s  agent 발화 시작: <ret> 확인 번호는 피 엑스 구 이 알 엠 칠 일이에요.
    13.16s  ⚡SPAN 주입 [d'=1.76s / d_lead=3.70s]: (no information found)
    13.21s  user  발화 끝
    16.85s  agent 발화 끝
    17.16s  user  발화 시작: 혹시 지금 서울 날씨 어때?
    18.99s  <ret> 발화 (turn6 첫 프레임)
    19.01s  user  발화 끝
    19.05s  agent 발화 시작: <ret> 서울 날씨는 현재 이십팔 점 오도이고, 습도는 육십오%, 바람은 시속 삼 점 이킬로미터입니다.
    19.07s  ⚡SPAN 주입 [d'=0.64s / d_lead=6.34s]: (tool result) The current weather in Seoul is 28.5°C, humidity 65%, wi
    25.24s  user  발화 시작: 음… 비 올 가능성은?
    25.39s  agent 발화 끝
    27.12s  <ret> 발화 (turn8 첫 프레임)
    27.51s  agent 발화 시작: <ret> 서울에는 오늘 비가 올 확률이 이십% 정도예요.
    27.52s  ⚡SPAN 주입 [d'=1.84s / d_lead=3.23s]: (tool result) There is a 20% chance of rain in Seoul today.
    27.59s  user  발화 끝
    29.52s  user  발화 시작: 진짜?
    30.16s  user  발화 끝
    30.75s  agent 발화 끝
    31.68s  user  발화 시작: 그럼, 내일은 어때?
    32.91s  <ret> 발화 (turn11 첫 프레임)
    33.15s  user  발화 끝
    33.29s  agent 발화 시작: <ret> 내일 서울은 삼십 점 일도이고 습도는 오십팔%이며, 비가 올 확률은 십% 정도입니다.
    33.31s  ⚡SPAN 주입 [d'=0.96s / d_lead=6.11s]: (tool result) Tomorrow in Seoul will be 30.1°C, humidity 58%, with a 1
    36.21s  user  발화 시작: 대박.
    36.61s  user  발화 끝
    39.40s  agent 발화 끝
    39.57s  user  발화 시작: 알았어, 고마워.
    40.72s  user  발화 끝
    40.74s  agent 발화 시작: 도움이 되셨다니 다행이에요.
    42.49s  agent 발화 끝
