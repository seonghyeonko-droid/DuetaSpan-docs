# v3_defer_10_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_defer_10",
#     "name": "세영",
#     "location": {
#       "city": "Busan",
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
#       "date": "2026-05-23",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-03-06",
#       "category": "diet",
#       "text": "User is vegan."
#     },
#     {
#       "date": "2026-01-10",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in October."
#     },
#     {
#       "date": "2025-10-28",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-08-26",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 그 이탈리아 식당 영업시간이 어떻게 돼요? | S2 잠깐만, 이번 주 토요일에 거기… | S3 …예약할 수 있는지 알아봐 줄래? | S4 고마워, 시아미. 혹시 오늘 날씨는 어때?

     0.00s  user  발화 시작: 그 이탈리아 식당 영업시간이 어떻게 돼요?
     2.86s  <ret> 발화 (turn1 첫 프레임)
     2.94s  agent 발화 시작: <ret> 라 피아짜의 영업시간은 월요일부터 토요일까지는 오전 열한시부터 밤 열시까지이고, 일요일은 낮 열두
     2.94s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.82s]: (tool result) {"name": "La Piazza", "address": "123 Main Street, Anyto
     2.94s  user  발화 끝
    11.75s  user  발화 시작: 음, 그 식당까지 가는 길 좀 알려줄 수 있어?
    11.75s  agent 발화 끝
    15.76s  <ret> 발화 (turn3 첫 프레임)
    16.16s  agent 발화 시작: <ret> 현재 위치에서 라 피아짜까지는 이 점 오마일, 약 십분 정도 걸려요. 메인 스트리트를 북쪽으로 가
    16.16s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.80s]: (tool result) {"distance": "2.5 miles", "duration": "10 minutes", "rou
    16.16s  user  발화 끝
    25.96s  user  발화 시작: 잠깐만, 이번 주 토요일에 거기…
    25.96s  agent 발화 끝
    28.41s  user  발화 시작: …예약할 수 있는지 알아봐 줄래?
    28.41s  user  발화 끝
    30.53s  <ret> 발화 (turn6 첫 프레임)
    30.85s  agent 발화 시작: <ret> 이번 주 토요일 일곱시에 두명으로 라 피아짜 예약이 완료되었어요. 확인번호는 엘 피 칠 일 일 이
    30.85s  ⚡SPAN 주입 [d'=1.36s / d_lead=9.80s]: {"restaurant_name": "La Piazza", "date": "2026-07-11", "time": "7:00 P
    30.85s  user  발화 끝
    40.65s  user  발화 시작: 아.
    40.65s  agent 발화 끝
    41.14s  user  발화 시작: 고마워, 시아미. 혹시 오늘 날씨는 어때?
    41.14s  user  발화 끝
    43.68s  <ret> 발화 (turn9 첫 프레임)
    44.08s  agent 발화 시작: <ret> 현재 애니타운의 날씨는 섭씨 이십팔도이고, 습도는 육십오퍼센트, 풍속은 시속 팔 점 이킬로미터이며
    44.08s  ⚡SPAN 주입 [d'=1.76s / d_lead=6.37s]: (tool result) {"temperature": "28.0°C", "humidity": "65%", "wind speed
    44.08s  user  발화 끝
    50.44s  agent 발화 끝
