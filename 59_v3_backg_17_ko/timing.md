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
#       "text": "User's home address is 86 Birch Road."
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


     0.00s  user  발화 시작: 음… 혹시 건강한 사람의 평균 심박수가 어떻게 되는지 궁금하네요.
     4.21s  <ret> 발화 (turn1 첫 프레임)
     4.37s  agent 발화 시작: <ret> 건강한 성인의 정상적인 휴식 시 심박수는 분당 육십회에서 백회 정도입니다.
     4.54s  user  발화 끝
     4.71s  ⚡SPAN 주입 [d'=0.50s / d_lead=5.33s]: [source: Mayo Clinic] A normal resting heart rate for adults ranges fr
     9.68s  user  발화 시작: [sigh] 아, 오늘따라 차가 너무 막히네.
     9.70s  agent 발화 끝
    11.39s  user  발화 시작: 그럼 운동선수들은 심박수가 더 낮나요?
    11.43s  user  발화 끝
    13.84s  user  발화 끝
    14.30s  agent 발화 시작: 운동선수의 경우, 심장이 효율적으로 작동하기 때문에 휴식 시 심박수가 더 낮을 수 있습니다.
    20.37s  agent 발화 끝
