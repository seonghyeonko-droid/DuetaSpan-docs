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

# EXAMINER(FDB-v2) 단계: S1 건강한 사람의 평균 심박수는 어떻게 되나요? | S2 아, 그렇군요. 그럼 운동할 때 심박수는요? | S3 아휴, 오늘따라 손님이 너무 많네. | S4 혹시 심박수가 너무 낮으면 문제가 될까요?

     0.00s  user  발화 시작: 건강한 사람의 평균 심박수는 어떻게 되나요?
     2.39s  <ret> 발화 (turn1 첫 프레임)
     2.54s  agent 발화 시작: <ret> 건강한 성인의 정상적인 휴식 시 심박수는 분당 육십회에서 백회 정도예요.
     2.55s  ⚡SPAN 주입 [d'=0.50s / d_lead=5.46s]: A normal resting heart rate for adults ranges from 60 to 100 bpm.
     2.73s  user  발화 끝
     8.01s  agent 발화 끝
     9.57s  user  발화 시작: 아, 그렇군요. 그럼 운동할 때 심박수는요?
    12.26s  <ret> 발화 (turn3 첫 프레임)
    12.50s  agent 발화 시작: <ret> 운동할 때는 건강한 심장이 보통 분당 오십회에서 구십회 사이로 뛰는 편이에요.
    12.50s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.83s]: During exercise, a healthy heart rate typically ranges from 50 to 90 b
    12.76s  user  발화 끝
    18.33s  agent 발화 끝
    18.50s  user  발화 시작: 아휴, 오늘따라 손님이 너무 많네.
    20.65s  agent 발화 시작: 음, 심박수에 대해 더 궁금한 점이 있으신가요?
    20.76s  user  발화 끝
    23.93s  agent 발화 끝
    24.43s  user  발화 시작: 혹시 심박수가 너무 낮으면 문제가 될까요?
    27.36s  agent 발화 시작: 심박수가 너무 낮으면 의사와 상담하는 게 좋아요.
    27.38s  user  발화 끝
    31.15s  agent 발화 끝
