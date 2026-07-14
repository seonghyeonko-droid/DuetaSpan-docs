# v3_chain_05_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_chain_05",
#     "name": "보형",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "late 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-29",
#       "category": "partner",
#       "text": "User's partner is named Kenji."
#     },
#     {
#       "date": "2026-04-21",
#       "category": "airline",
#       "text": "User usually flies with Lufthansa."
#     },
#     {
#       "date": "2026-03-18",
#       "category": "dislike",
#       "text": "User can't stand cilantro."
#     },
#     {
#       "date": "2026-03-14",
#       "category": "work",
#       "text": "User works as a dentist."
#     },
#     {
#       "date": "2026-03-12",
#       "category": "medication",
#       "text": "User takes insulin."
#     },
#     {
#       "date": "2026-01-23",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-01-13",
#       "category": "dish",
#       "text": "User's go-to comfort dish is bún chả."
#     },
#     {
#       "date": "2025-12-31",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is French."
#     },
#     {
#       "date": "2025-12-09",
#       "category": "gym",
#       "text": "User has a gym membership near home."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-11",
#       "title": "Buying a gift for a parent",
#       "bullets": [
#         "mom's 60th birthday next month",
#         "considering a spa day or a watch"
#       ]
#     },
#     {
#       "date": "2026-04-18",
#       "title": "Booking a moving company",
#       "bullets": [
#         "moving a 2-bedroom apartment across town on the 30th",
#         "needs help disassembling furniture"
#       ]
#     },
#     {
#       "date": "2026-02-28",
#       "title": "Renovating the bathroom",
#       "bullets": [
#         "budget of 6M won",
#         "wants a walk-in shower instead of a tub"
#       ]
#     },
#     {
#       "date": "2026-02-26",
#       "title": "Training for a 10K",
#       "bullets": [
#         "current pace is around 6 minutes per km",
#         "race is in November"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 광저우 탑에서 진씨 가문 사당까지 자전거로 가는 데 얼마나 걸릴까요?
     5.14s  <ret> 발화 (turn1 첫 프레임)
     5.44s  agent 발화 시작: <ret> 자전거로 광저우 탑에서 진씨 가문 사당까지는 이 점 삼킬로미터이고, 대략 십이분 정도 걸릴 거예요
     5.44s  user  발화 끝
     6.44s  ⚡SPAN 주입 [d'=1.30s / d_lead=7.62s]: The bike route from Canton Tower to Chen Clan Academy is 2.3 kilometer
    13.03s  <ret> 발화 (turn3 첫 프레임)
    13.06s  user  발화 시작: 음.
    13.06s  agent 발화 끝
    13.61s  agent 발화 시작: <ret> 지금 광저우 날씨는 섭씨 이십팔도이고, 습도는 칠십오퍼센트, 동풍이 시속 삼 점 일킬로미터로 살짝
    13.61s  user  발화 끝
    13.99s  ⚡SPAN 주입 [d'=0.97s / d_lead=8.16s]: The current weather in Guangzhou is 28.0°C with humidity at 75% and a 
    21.77s  user  발화 시작: 네.
    21.77s  agent 발화 끝
    22.31s  user  발화 시작: 그럼 진씨 가문 사당 근처에 맛집도 알려주실 수 있나요?
    22.31s  user  발화 끝
    27.21s  agent 발화 시작: 예.
    27.21s  user  발화 끝
    27.29s  <ret> 발화 (turn7 첫 프레임)
    27.76s  agent 발화 시작: <ret> 진씨 가문 사당 근처에는 딤섬 궁전(사 점 오점, 광둥 요리, 저렴한 가격대), 바오화 면(사 점
    27.76s  agent 발화 끝
    28.79s  ⚡SPAN 주입 [d'=1.50s / d_lead=14.15s]: (tool result) Restaurants near Chen Clan Academy: Dim Sum Palace (4.5 
    41.91s  agent 발화 시작: 딤섬 궁전은 특히 인기가 많으니 한번 가보시는 걸 추천드려요.
    41.91s  agent 발화 끝
    46.81s  agent 발화 끝
