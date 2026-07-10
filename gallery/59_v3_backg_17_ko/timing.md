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

# EXAMINER(FDB-v2) 단계: S1 건강한 사람의 평균 심박수는 어떻게 되나요? | S2 [sigh] 아, 오늘따라 손님이 너무 없네… | S3 운동은 거의 안 해요. | S4 그렇군요. 감사합니다.

     0.00s  user  발화 시작: 건강한 사람의 평균 심박수는 어떻게 되나요?
     2.59s  <ret> 발화 (turn1 첫 프레임)
     2.75s  agent 발화 시작: <ret> 건강한 성인의 정상적인 안정 시 심박수는 분당 육십 회에서 백 회 사이입니다. 혹시 운동을 자주 
     2.91s  user  발화 끝
     3.09s  ⚡SPAN 주입 [d'=0.50s / d_lead=8.57s]: A normal resting heart rate for adults ranges from 60 to 100 bpm.
    11.32s  agent 발화 끝
    12.75s  user  발화 시작: [sigh] 아, 오늘따라 손님이 너무 없네…
    15.25s  user  발화 끝
    16.42s  user  발화 시작: 운동은 거의 안 해요.
    17.33s  <ret> 발화 (turn4 첫 프레임)
    17.56s  agent 발화 시작: <ret> 건강한 사람의 평균 심박수는 분당 오십 회에서 구십 회 정도라고 합니다. 규칙적인 운동을 하면 심
    17.66s  user  발화 끝
    19.33s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.17s]: The average heart rate for a healthy person is between 50 and 90 bpm.
    26.73s  user  발화 시작: 그렇군요. 감사합니다.
    26.73s  agent 발화 끝
    27.99s  agent 발화 시작: 도움이 되었다니 다행입니다.
    28.15s  user  발화 끝
    30.02s  agent 발화 끝
