# v3_defer_10_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_defer_10",
#     "name": "소훈",
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
#       "date": "2026-06-20",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-06-17",
#       "category": "car",
#       "text": "User drives a 2017 Honda Civic."
#     },
#     {
#       "date": "2026-05-06",
#       "category": "coffee",
#       "text": "User's usual coffee order is black drip coffee."
#     },
#     {
#       "date": "2026-05-04",
#       "category": "medication",
#       "text": "User takes blood-pressure medication."
#     },
#     {
#       "date": "2026-05-01",
#       "category": "temp",
#       "text": "User keeps the home thermostat around 23°C."
#     },
#     {
#       "date": "2026-02-21",
#       "category": "schedule",
#       "text": "User has flexible hours."
#     },
#     {
#       "date": "2026-02-14",
#       "category": "anniversary",
#       "text": "User's anniversary is November 25."
#     },
#     {
#       "date": "2026-02-10",
#       "category": "savings",
#       "text": "User is saving for an emergency fund of six months' expenses."
#     },
#     {
#       "date": "2026-01-21",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Spanish tapas."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-11",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool and a sauna",
#         "prefers one within 10 minutes of the office"
#       ]
#     },
#     {
#       "date": "2026-03-19",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building under 900k won/month",
#         "needed parking and a second bedroom near line 2"
#       ]
#     },
#     {
#       "date": "2026-03-10",
#       "title": "Buying a gift for a parent",
#       "bullets": [
#         "mom's 60th birthday next month",
#         "considering a spa day or a watch"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 달러에서 유로로 환율 좀 알려줄 수 있어요?
     2.16s  <ret> 발화 (turn1 첫 프레임)
     2.44s  agent 발화 시작: <ret> 지금 달러 한 개는 유로로 영 점 구 삼유로 정도예요.
     2.72s  user  발화 끝
     3.26s  ⚡SPAN 주입 [d'=1.09s / d_lead=4.07s]: (tool result) As of July 10, 2026, at 2:35 PM, one US dollar is equiva
     6.51s  agent 발화 끝
     6.93s  user  발화 시작: 음, 그럼 오백달러는 얼마예요?
     9.15s  user  발화 끝
     9.42s  agent 발화 시작: 오백달러는 대략 사백육십육 점 삼 구유로 정도가 되겠네요.
    14.55s  user  발화 시작: 아, 고마워요. 근데 내일 부산 날씨는 어때요?
    14.61s  agent 발화 끝
    17.13s  <ret> 발화 (turn5 첫 프레임)
    17.60s  agent 발화 시작: <ret> 내일 부산은 이십팔 점 오도이고, 약간 흐릴 것으로 예상돼요. 습도는 육십팔퍼센트, 바람은 시속 
    17.78s  user  발화 끝
    18.39s  ⚡SPAN 주입 [d'=1.26s / d_lead=10.34s]: {"location": "Busan", "temperature": "28.5°C", "humidity": "68%", "win
    27.93s  agent 발화 끝
