# v3_defer_10_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_defer_10",
#     "name": "세현",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "early 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-28",
#       "category": "diet",
#       "text": "User is vegan."
#     },
#     {
#       "date": "2026-03-19",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2025-12-19",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in March."
#     },
#     {
#       "date": "2025-10-01",
#       "category": "work",
#       "text": "User works as a accountant."
#     },
#     {
#       "date": "2025-09-03",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     },
#     {
#       "date": "2025-07-05",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-12-10",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-08-05",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-06-25",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 안녕하세요. 런던 날씨 좀 알려주세요. | S2 흐음… 그럼 이번 주 토요일 런던 날씨는 어때요? | S3 토요일에 런던에 있는 좋은 레스토랑 좀 찾아주세요. | S4 파델라 예약 좀 해 주세요.

     0.00s  user  발화 시작: 안녕하세요. 런던 날씨 좀 알려주세요.
     2.16s  <ret> 발화 (turn1 첫 프레임)
     2.23s  agent 발화 시작: <ret> 지금 런던 날씨는 십팔 점 오도이고, 습도는 육십이%, 바람은 시속 칠 점 이킬로미터입니다.
     2.24s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.49s]: (tool result) The current weather in London is 18.5°C, with humidity a
     2.26s  user  발화 끝
     8.72s  agent 발화 끝
     8.80s  user  발화 시작: 흐음… 그럼 이번 주 토요일 런던 날씨는 어때요?
    12.30s  <ret> 발화 (turn3 첫 프레임)
    12.54s  agent 발화 시작: <ret> 이번 주 토요일 런던 날씨는 이십일도로, 부분적으로 흐리고 비 올 확률은 이십% 정도입니다.
    12.54s  ⚡SPAN 주입 [d'=1.12s / d_lead=6.12s]: (tool result) The weather forecast for London this Saturday is 21.0°C,
    12.54s  user  발화 끝
    15.96s  user  발화 시작: 아.
    16.57s  user  발화 끝
    18.66s  agent 발화 끝
    18.73s  user  발화 시작: 토요일에 런던에 있는 좋은 레스토랑 좀 찾아주세요.
    21.36s  <ret> 발화 (turn6 첫 프레임)
    21.67s  agent 발화 시작: <ret> 토요일 런던에는 더 리츠 레스토랑, 디슘 코벤트 가든, 파델라 등 괜찮은 식당들이 있습니다.
    21.68s  ⚡SPAN 주입 [d'=1.12s / d_lead=6.49s]: (tool result) Several restaurants in London are available on Saturday,
    21.92s  user  발화 끝
    28.16s  agent 발화 끝
    28.95s  user  발화 시작: 파델라 예약 좀 해 주세요.
    30.29s  agent 발화 시작: 파델라 예약은 제가 직접 해 드릴 수는 없어요. 예약은 직접 하셔야 합니다.
    30.42s  user  발화 끝
    35.01s  agent 발화 끝
