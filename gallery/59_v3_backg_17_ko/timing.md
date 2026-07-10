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

# EXAMINER(FDB-v2) 단계: S1 혹시 건강한 사람의 평균 심박수는 어떻게 돼요? | S2 아, 그건 좀 다르네요. 더 정확한 범위가 있을까요? | S3 오십 회에서 구십 회요? 그건 좀 놀랍네요. | S4 그럼 운동할 때 심박수는 어떻게 달라지나요?

     0.00s  user  발화 시작: 혹시 건강한 사람의 평균 심박수는 어떻게 돼요?
     2.65s  <ret> 발화 (turn1 첫 프레임)
     2.80s  agent 발화 시작: <ret> 성인의 정상적인 안정 시 심박수는 분당 육십 회에서 백 회 사이입니다. 건강 관리에 관심이 많으시
     3.05s  user  발화 끝
     3.15s  ⚡SPAN 주입 [d'=0.50s / d_lead=7.41s]: A normal resting heart rate for adults ranges from 60 to 100 bpm.
    10.15s  user  발화 시작: [sigh] 아, 오늘따라 차가 너무 막히네.
    10.21s  agent 발화 끝
    12.30s  user  발화 시작: 아, 그건 좀 다르네요. 더 정확한 범위가 있을까요?
    12.54s  user  발화 끝
    15.13s  <ret> 발화 (turn4 첫 프레임)
    15.37s  agent 발화 시작: <ret> 건강한 성인의 일반적인 심박수는 분당 오십 회에서 구십 회 사이입니다. 조금 더 정확한 수치로 말
    15.63s  user  발화 끝
    17.13s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.97s]: The typical heart rate for a healthy adult is between 50 and 90 bpm.
    23.26s  user  발화 시작: 오십 회에서 구십 회요? 그건 좀 놀랍네요.
    23.34s  agent 발화 끝
    25.70s  user  발화 끝
    25.73s  agent 발화 시작: 네, 맞습니다. 개인차가 있을 수 있지만, 보통 그 범위에 속한다고 알려져 있습니다.
    31.34s  agent 발화 끝
    32.64s  user  발화 시작: 그럼 운동할 때 심박수는 어떻게 달라지나요?
    35.09s  user  발화 끝
    35.50s  agent 발화 시작: 운동 중에는 심박수가 당연히 올라갑니다. 운동 강도에 따라 달라지는데, 최대 심박수의 오십%에서 팔십오% 정
    44.45s  agent 발화 끝
