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

# EXAMINER(FDB-v2) 단계: S1 건강한 사람의 평균 심박수는 어떻게 되나요? | S2 아, 오늘 날씨 진짜 좋다! | S3 분당 몇 번이라고요? | S4 아, 그렇군요. 감사합니다.

     0.00s  user  발화 시작: 건강한 사람의 평균 심박수는 어떻게 되나요?
     2.47s  <ret> 발화 (turn1 첫 프레임)
     2.63s  agent 발화 시작: <ret> 건강한 성인의 정상적인 심박수는 분당… 정도입니다… 육십 to 백회 정도입니다.
     2.81s  user  발화 끝
     2.97s  ⚡SPAN 주입 [d'=0.50s / d_lead=6.30s]: 성인의 정상적인 휴식 심박수는 분당 60~100회입니다.
     8.94s  agent 발화 끝
    10.47s  user  발화 시작: 아, 오늘 날씨 진짜 좋다!
    12.30s  user  발화 시작: 분당 몇 번이라고요?
    12.45s  user  발화 끝
    13.26s  <ret> 발화 (turn4 첫 프레임)
    13.50s  agent 발화 시작: <ret> 건강한 사람의 심박수는 보통 분당… 에서… 사이로 측정됩니다. 걱정하지 않으셔도 될 거예요… 육십
    13.64s  user  발화 끝
    15.26s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.33s]: 건강한 성인의 정상적인 심박수는 분당 육십 to 백회 정도입니다.
    21.79s  user  발화 시작: 아, 그렇군요. 감사합니다.
    21.83s  agent 발화 끝
    23.77s  user  발화 끝
