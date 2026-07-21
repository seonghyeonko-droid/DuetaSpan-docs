# v3_rag_26_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_26",
#     "name": "수현",
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
#       "date": "2026-06-21",
#       "category": "schedule",
#       "text": "User has a fully remote setup."
#     },
#     {
#       "date": "2026-06-14",
#       "category": "wake",
#       "text": "User usually wakes up at 5:30am for a run."
#     },
#     {
#       "date": "2026-06-05",
#       "category": "hobby",
#       "text": "User is into freediving."
#     },
#     {
#       "date": "2026-04-01",
#       "category": "allergy",
#       "text": "User is allergic to latex."
#     },
#     {
#       "date": "2026-02-18",
#       "category": "coffee",
#       "text": "User's usual coffee order is a caramel latte."
#     },
#     {
#       "date": "2026-01-16",
#       "category": "dislike",
#       "text": "User can't stand durian."
#     },
#     {
#       "date": "2026-01-15",
#       "category": "child",
#       "text": "User has a child named Rin, age 11."
#     },
#     {
#       "date": "2025-12-22",
#       "category": "airline",
#       "text": "User usually flies with Emirates."
#     },
#     {
#       "date": "2025-12-06",
#       "category": "show",
#       "text": "User is currently watching a historical K-drama."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-24",
#       "title": "Booking a moving company",
#       "bullets": [
#         "moving a 2-bedroom apartment across town on the 30th",
#         "needs help disassembling furniture"
#       ]
#     },
#     {
#       "date": "2026-06-07",
#       "title": "Training for a 10K",
#       "bullets": [
#         "current pace is around 6 minutes per km",
#         "race is in November"
#       ]
#     },
#     {
#       "date": "2026-02-23",
#       "title": "Meal-prep planning",
#       "bullets": [
#         "wants high-protein lunches under 600 calories",
#         "avoiding dairy this month"
#       ]
#     },
#     {
#       "date": "2025-12-15",
#       "title": "Learning to invest",
#       "bullets": [
#         "asked about index funds vs individual stocks",
#         "wants to start with 500k won a month"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 안녕하세요, 에레 씨. 영화 '로빈 후드: 프린스 오브 티브스'에서 보안관 역할을 맡은 배우가 누구였죠? 갑
     8.02s  <ret> 발화 (turn1 첫 프레임)
     8.31s  agent 발화 시작: <ret> '로빈 후드: 프린스 오브 티브스'에서 보안관은 천구백구십일년에 앨런 리크먼 배우가 연기하셨어요.
     8.39s  user  발화 끝
     8.75s  ⚡SPAN 주입 [d'=0.73s / d_lead=11.41s]: Alan Rickman played the Sheriff of Nottingham in the 1991 film Robin H
    12.45s  user  발화 시작: 네.
    13.09s  user  발화 끝
    19.73s  agent 발화 끝
    20.04s  user  발화 시작: 아, 맞아요! 앨런 리크먼이었죠. 요즘 날씨가 너무 덥네요. 서울은 지금 몇 도 정도 될까요?
    23.01s  agent 발화 시작: 네.
    23.46s  agent 발화 끝
    26.73s  <ret> 발화 (turn5 첫 프레임)
    27.14s  agent 발화 시작: <ret> 지금 서울의 기온은 삼십일 점 오도이고, 습도는 육십팔퍼센트, 바람은 시속 사 점 이킬로미터로 측
    27.42s  user  발화 끝
    28.23s  ⚡SPAN 주입 [d'=1.50s / d_lead=9.00s]: (tool result) {"temperature": "31.5°C", "humidity": "68%", "wind speed
    36.00s  user  발화 시작: 네, 정말 덥네요. 보안관 역할 말고 앨런 리크먼 배우는 다른 영화에서도 유명하죠?
    36.14s  agent 발화 끝
    41.92s  user  발화 끝
    42.10s  agent 발화 시작: 네, 앨런 리크먼 배우는 '다이 하드'나 '해리 포터' 시리즈에서도 훌륭한 연기를 보여주셨어요. 특히 '해리
    52.63s  agent 발화 끝
