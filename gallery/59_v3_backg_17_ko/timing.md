# v3_backg_17_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_backg_17",
#     "name": "도정",
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
#       "date": "2026-06-04",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2026-02-07",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     },
#     {
#       "date": "2026-01-30",
#       "category": "home",
#       "text": "User's home address is 서울 마포구 성산동 45-6."
#     },
#     {
#       "date": "2026-01-18",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2025-10-23",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-09-26",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-01-02",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-09-20",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 안녕하세요, 혹시 건강한 사람의 평균 심박수는 어떻게 되나요? | S2 아, 그렇군요. 그럼 운동할 때 심박수는 얼마나 되어야 하는  | S3 아유, 오늘 날씨 진짜 덥네. | S4 주로 조깅을 해요.

     0.00s  user  발화 시작: 안녕하세요, 혹시 건강한 사람의 평균 심박수는 어떻게 되나요?
     3.57s  <ret> 발화 (turn1 첫 프레임)
     3.72s  agent 발화 시작: <ret> 건강한 성인의 정상적인 안정 시 심박수는 분당 육십회에서 백회 사이입니다.
     3.92s  user  발화 끝
     4.07s  ⚡SPAN 주입 [d'=0.50s / d_lead=6.30s]: A normal resting heart rate for adults ranges from 60 to 100 bpm.
    10.02s  agent 발화 끝
    11.46s  user  발화 시작: 아, 그렇군요. 그럼 운동할 때 심박수는 얼마나 되어야 하는 걸까요?
    15.95s  agent 발화 시작: 운동 강도에 따라 달라지는데요, 어떤 운동을 주로 하시나요?
    16.13s  user  발화 끝
    17.86s  user  발화 시작: 예.
    18.21s  user  발화 끝
    19.69s  user  발화 시작: 아유, 오늘 날씨 진짜 덥네.
    19.93s  agent 발화 끝
    21.55s  agent 발화 시작: 운동 종류를 알려주시면 좀 더 정확한 정보를 드릴 수 있어요.
    21.67s  user  발화 끝
    25.26s  agent 발화 끝
    25.76s  user  발화 시작: 주로 조깅을 해요.
    27.09s  <ret> 발화 (turn8 첫 프레임)
    27.49s  agent 발화 시작: <ret> 조깅을 하실 때는 최대 심박수의 오십%에서 칠십% 정도가 적절합니다.
    27.64s  user  발화 끝
    29.09s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.79s]: The target heart rate during moderate-intensity exercise is 50-70% of 
    33.28s  agent 발화 끝
