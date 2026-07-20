# v3_chain_05_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_chain_05",
#     "name": "태은",
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
#       "date": "2026-05-26",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     },
#     {
#       "date": "2026-05-13",
#       "category": "airline",
#       "text": "User usually flies with Delta."
#     },
#     {
#       "date": "2026-03-27",
#       "category": "trip",
#       "text": "User is planning a trip to the Scottish Highlands in August."
#     },
#     {
#       "date": "2026-02-08",
#       "category": "coffee",
#       "text": "User's usual coffee order is a caramel latte."
#     },
#     {
#       "date": "2026-01-31",
#       "category": "partner",
#       "text": "User's partner is named Clara."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-27",
#       "title": "Meal-prep planning",
#       "bullets": [
#         "wants high-protein lunches under 600 calories",
#         "avoiding dairy this month"
#       ]
#     },
#     {
#       "date": "2026-03-29",
#       "title": "Booking a Japan trip",
#       "bullets": [
#         "5 nights in Kyoto and Osaka in October",
#         "wants a JR Pass and a ryokan for one night"
#       ]
#     },
#     {
#       "date": "2026-03-16",
#       "title": "Choosing a laptop",
#       "bullets": [
#         "budget around 1.8M won",
#         "needs it for video editing and light gaming"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 벨라지오 호텔, 라스베이거스, 칠월 십팔일부터 사박 예약 좀 해줘.
     5.90s  <ret> 발화 (turn1 첫 프레임)
     6.12s  user  발화 끝
     6.29s  agent 발화 시작: <ret> 벨라지오 호텔, 라스베이거스, 이천이십육년 칠월 십팔일부터 사박 예약이 완료되었어요. 확인번호는 
     6.82s  ⚡SPAN 주입 [d'=0.92s / d_lead=10.05s]: (tool result) {"hotel name": "Bellagio", "city": "Las Vegas", "check i
    13.96s  user  발화 시작: 응응.
    14.46s  user  발화 끝
    16.35s  agent 발화 끝
    17.01s  user  발화 시작: 그 호텔 근처에 괜찮은 식당 있어?
    18.89s  <ret> 발화 (turn4 첫 프레임)
    19.30s  agent 발화 시작: <ret> 벨라지오 호텔 안에도 괜찮은 식당이 있어요. 스파고라는 이탈리아 레스토랑인데, 벨라지오 분수대가 
    19.36s  user  발화 끝
    20.07s  ⚡SPAN 주입 [d'=1.17s / d_lead=9.18s]: Las Vegas's Bellagio Hotel is located at 3600 S Las Vegas Blvd, Las Ve
    28.48s  agent 발화 끝
