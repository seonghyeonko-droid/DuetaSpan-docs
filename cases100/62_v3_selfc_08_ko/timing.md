# v3_selfc_08_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_08",
#     "name": "태서",
#     "location": {
#       "city": "Seoul",
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
#       "date": "2026-06-19",
#       "category": "commute",
#       "text": "User drives about 40 minutes each way."
#     },
#     {
#       "date": "2026-05-21",
#       "category": "streaming",
#       "text": "User subscribes to Wavve and Melon."
#     },
#     {
#       "date": "2026-04-22",
#       "category": "savings",
#       "text": "User is saving for a down payment on an apartment."
#     },
#     {
#       "date": "2026-04-18",
#       "category": "sibling",
#       "text": "User has a younger sibling named Tobias."
#     },
#     {
#       "date": "2026-04-17",
#       "category": "coffee",
#       "text": "User's usual coffee order is a cold brew."
#     },
#     {
#       "date": "2026-03-21",
#       "category": "bloodtype",
#       "text": "User's blood type is A-."
#     },
#     {
#       "date": "2026-02-26",
#       "category": "partner",
#       "text": "User's partner is named Hana."
#     },
#     {
#       "date": "2026-02-18",
#       "category": "temp",
#       "text": "User keeps the home thermostat around 20°C."
#     },
#     {
#       "date": "2026-01-16",
#       "category": "learning",
#       "text": "User is learning Spanish."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-12",
#       "title": "Buying a gift for a parent",
#       "bullets": [
#         "mom's 60th birthday next month",
#         "considering a spa day or a watch"
#       ]
#     },
#     {
#       "date": "2026-04-29",
#       "title": "Renovating the bathroom",
#       "bullets": [
#         "budget of 6M won",
#         "wants a walk-in shower instead of a tub"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 휴스턴까지 기차표 좀 알아봐 줄 수 있어? 팔월 십팔일, 성인 네명, 아침 여섯시 사십오분쯤 출발하는 걸로.
     6.31s  <ret> 발화 (turn1 첫 프레임)
     6.69s  agent 발화 시작: <ret> 휴스턴까지 기차표는 팔월 십팔일 아침 일곱시에 출발하는 게 있어요. 성인 네명, 총 이백사십달러입
     6.71s  user  발화 끝
     7.52s  ⚡SPAN 주입 [d'=1.21s / d_lead=7.97s]: (tool result) Houston, TX to Dallas, TX, 2024-08-18, 4 adults, 07:00, 
     9.36s  user  발화 시작: 네.
     9.71s  user  발화 끝
    14.66s  agent 발화 끝
    15.47s  user  발화 시작: 아, 일곱시가 아니라 여섯시 삼십분쯤으로 바꿔줄래?
    18.29s  <ret> 발화 (turn4 첫 프레임)
    18.47s  agent 발화 시작: <ret> 아, 여섯시 삼십분으로 변경해 드릴게요. 성인 네명, 총 이백이십달러입니다.
    18.57s  user  발화 끝
    18.89s  ⚡SPAN 주입 [d'=0.60s / d_lead=6.02s]: Houston, TX to Dallas, TX, 2024-08-18, 4 adults, 06:30, TRAIN-91753, $
    24.48s  agent 발화 끝
