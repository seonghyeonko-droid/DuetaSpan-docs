# v3_mcp_03_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_03",
#     "name": "성국",
#     "location": {
#       "city": "Seoul",
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
#       "date": "2026-04-15",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2026-03-20",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in December."
#     },
#     {
#       "date": "2025-12-25",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2025-10-26",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-09-05",
#       "category": "work",
#       "text": "User works as a high-school teacher."
#     },
#     {
#       "date": "2025-07-04",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-22",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2026-05-25",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2026-03-23",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 수주 정원에서 평강로까지 자전거로 가는 거리가 얼마나 될까?
     4.71s  <ret> 발화 (turn1 첫 프레임)
     5.02s  agent 발화 시작: <ret> 수주 정원에서 평강로까지 자전거로 가려면 대략 삼 점 이킬로미터 정도이고, 십이분 정도 걸릴 거예
     5.03s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.96s]: (tool result) The bicycling distance from Suzhou Gardens to Pingjiang 
     5.28s  user  발화 끝
     7.87s  user  발화 시작: 헐.
     8.51s  user  발화 끝
    11.98s  agent 발화 끝
    12.39s  user  발화 시작: 십이분 정도면 괜찮네. 지금 바로 길 안내 시작해 줄 수 있어?
    16.64s  <ret> 발화 (turn4 첫 프레임)
    16.72s  agent 발화 시작: <ret> 네, 가능합니다. 수주 정원 도로를 북쪽으로 이백미터 이동한 다음, 평강로로 좌회전해서 삼킬로미터
    16.72s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.83s]: (tool result) Directions to Pingjiang Road from Suzhou Gardens (bicycl
    16.98s  user  발화 끝
    26.55s  agent 발화 끝
    27.06s  user  발화 시작: 고마워. 혹시 지금 날씨는 어때?
    29.49s  <ret> 발화 (turn6 첫 프레임)
    29.57s  agent 발화 시작: <ret> 지금 수주 날씨는 섭씨 이십팔도이고, 습도는 육십오%, 바람은 시속 칠 점 이킬로미터, 하늘은 맑
    29.57s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.79s]: (tool result) The current weather in Suzhou is 28.0°C, humidity 65%, w
    29.65s  user  발화 끝
    32.78s  user  발화 시작: 응.
    33.23s  user  발화 끝
    37.36s  agent 발화 끝
    37.38s  agent 발화 시작: 날씨가 좋으니 자전거 타기 딱 좋겠네요.
    39.63s  agent 발화 끝
