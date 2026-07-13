# v3_chain_05_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_chain_05",
#     "name": "하희",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "50s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-16",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-03-13",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     },
#     {
#       "date": "2026-02-14",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     },
#     {
#       "date": "2026-01-07",
#       "category": "work",
#       "text": "User works as a graphic designer."
#     },
#     {
#       "date": "2026-01-05",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2025-06-12",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in October."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-08-23",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-05-28",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 오늘 날씨 어때? | S2 그럼 이번 주 토요일 날씨는? | S3 아, 토요일에 친구랑 경복궁 가기로 했는데… | S4 응, 맛집 좀 찾아줘.

     0.00s  user  발화 시작: 오늘 날씨 어때?
     1.33s  <ret> 발화 (turn1 첫 프레임)
     1.65s  agent 발화 시작: <ret> 지금 서울 날씨는 이십팔도이고, 습도는 칠십퍼센트, 바람은 시속 사킬로미터입니다. 오늘 하루도 더
     1.65s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.69s]: (tool result) The current weather in Seoul is 28.0°C, humidity 70%, wi
     1.65s  user  발화 끝
     9.34s  user  발화 시작: 그럼 이번 주 토요일 날씨는?
     9.34s  agent 발화 끝
    11.76s  <ret> 발화 (turn3 첫 프레임)
    12.08s  agent 발화 시작: <ret> 이번 주 토요일, 칠월 십일일 서울 날씨는 삼십도로 예상되고, 습도는 육십오퍼센트이며, 비가 올 
    12.08s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.43s]: (tool result) The weather forecast for Saturday, July 11, 2026, in Seo
    12.08s  user  발화 끝
    22.52s  user  발화 시작: 아, 토요일에 친구랑 경복궁 가기로 했는데…
    22.52s  agent 발화 끝
    25.81s  agent 발화 시작: 경복궁에 친구분과 가신다니 좋네요. 혹시 경복궁 주변에 맛집을 알아봐 드릴까요?
    25.81s  user  발화 끝
    31.30s  user  발화 시작: 응, 맛집 좀 찾아줘.
    31.30s  agent 발화 끝
    33.42s  <ret> 발화 (turn7 첫 프레임)
    33.50s  agent 발화 시작: <ret> 경복궁 근처 식당으로는 '토속촌 삼계탕'(한국 음식, 별점 사 점 오점), '황생가 칼국수'(한국
    33.50s  ⚡SPAN 주입 [d'=2.00s / d_lead=13.18s]: (tool result) Restaurants near Gyeongbokgung Palace include 'Tosokchon
    33.50s  user  발화 끝
    46.68s  agent 발화 끝
