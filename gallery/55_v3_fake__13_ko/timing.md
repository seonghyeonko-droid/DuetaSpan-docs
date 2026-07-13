# v3_fake__13_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__13",
#     "name": "가완",
#     "location": {
#       "city": "Seoul",
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
#       "date": "2026-06-06",
#       "category": "home",
#       "text": "User's home address is 부산 해운대구 해운대로 570."
#     },
#     {
#       "date": "2026-06-03",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2026-02-21",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2026-02-08",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     },
#     {
#       "date": "2026-02-07",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in March."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-27",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2026-01-04",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-12-08",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 혹시 세상에서 가장 뛰어난 현악기 제작자는 누구라고 알려져 있나요?
     4.17s  <ret> 발화 (turn1 첫 프레임)
     4.72s  agent 발화 시작: <ret> [happy] 많은 분들이 안토니오 스트라디바리가 역사상 가장 뛰어난 현악기 제작자라고 생각하신답
     4.72s  user  발화 끝
     5.20s  ⚡SPAN 주입 [d'=1.03s / d_lead=8.91s]: Antonio Stradivari.
    13.59s  <ret> 발화 (turn2 첫 프레임)
    13.63s  agent 발화 시작: <ret> 요즘 날씨도 좋으니, 아름다운 음악 들으면서 여유로운 시간 보내시는 건 어떠세요?
    13.63s  agent 발화 끝
    15.09s  ⚡SPAN 주입(IRRELEVANT) [d'=1.50s / d_lead=5.77s]: The high in Seoul on July 10, 2026 is forecast to be 31.0°C, with humi
    19.40s  user  발화 시작: 맞아요.
    19.40s  agent 발화 끝
    19.92s  user  발화 시작: 스트라디바리우스 바이올린은 얼마나 비싼가요?
    19.92s  user  발화 끝
    21.84s  <ret> 발화 (turn5 첫 프레임)
    22.02s  agent 발화 시작: <ret> 스트라디바리우스 바이올린은 수백만 달러에 팔리기도 했는데요, 가장 비싼 악기는 이천십일년에 일천오
    22.02s  user  발화 끝
    22.14s  ⚡SPAN 주입 [d'=0.30s / d_lead=6.82s]: Stradivarius violins have sold for millions of dollars, with the most 
    28.84s  user  발화 시작: 네.
    28.84s  agent 발화 끝
    29.36s  agent 발화 시작: 네, 정말 대단하죠. 그 가치는 시간이 지날수록 더욱 높아질 거라고 예상하신답니다.
    29.36s  user  발화 끝
    35.13s  agent 발화 끝
