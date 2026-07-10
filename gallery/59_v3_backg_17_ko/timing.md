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

# EXAMINER(FDB-v2) 단계: S1 혹시 건강한 사람의 평균 심박수는 어떻게 되나요? | S2 아, 그건 좀 높은데요. 그럼 평균이 육십에서 백이라고 하셨죠 | S3 어휴, 오늘따라 손님이 너무 많네. | S4 그럼 운동할 때 심박수는 얼마나 되어야 하는지 알려주시겠어요?

     0.00s  user  발화 시작: 혹시 건강한 사람의 평균 심박수는 어떻게 되나요?
     3.14s  <ret> 발화 (turn1 첫 프레임)
     3.29s  agent 발화 시작: <ret> 건강한 성인의 정상적인 휴식 시 심박수는 분당 육십회에서 백회 정도입니다. 괜찮으셨으면 좋겠어요.
     3.52s  user  발화 끝
     3.64s  ⚡SPAN 주입 [d'=0.50s / d_lead=7.46s]: A normal resting heart rate for adults ranges from 60 to 100 bpm.
    10.75s  agent 발화 끝
    12.16s  user  발화 시작: 아, 그건 좀 높은데요. 그럼 평균이 육십에서 백이라고 하셨죠?
    15.75s  <ret> 발화 (turn3 첫 프레임)
    15.99s  agent 발화 시작: <ret> 네, 맞습니다. 건강한 사람의 평균 심박수는 분당 오십회에서 구십회 사이입니다. 조금 차이가 있네
    16.18s  user  발화 끝
    17.75s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.96s]: The average heart rate for a healthy person is between 50 and 90 bpm.
    22.94s  agent 발화 끝
    23.02s  user  발화 시작: 어휴, 오늘따라 손님이 너무 많네.
    24.97s  agent 발화 시작: 혹시 심박수에 대해 더 궁금한 점이 있으신가요?
    25.14s  user  발화 끝
    28.11s  agent 발화 끝
    28.63s  user  발화 시작: 그럼 운동할 때 심박수는 얼마나 되어야 하는지 알려주시겠어요?
    32.70s  user  발화 끝
