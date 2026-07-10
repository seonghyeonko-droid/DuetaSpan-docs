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

# EXAMINER(FDB-v2) 단계: S1 혹시 건강한 사람의 평균 심박수는 어떻게 돼요? | S2 아, 그럼 좀 더 정확하게 알고 싶어요. 평균적인 수치는 얼마 | S3 [happy] 아, 오늘 날씨 진짜 좋다! | S4 분당 오십회에서 구십회군요… 그럼 저는 좀 빠른가 봐요.

     0.00s  user  발화 시작: 혹시 건강한 사람의 평균 심박수는 어떻게 돼요?
     2.87s  <ret> 발화 (turn1 첫 프레임)
     3.03s  agent 발화 시작: <ret> 건강한 성인의 정상적인 안정 시 심박수는 분당 육십회에서 백회 사이입니다.
     3.23s  user  발화 끝
     3.37s  ⚡SPAN 주입 [d'=0.50s / d_lead=5.33s]: [source: Mayo Clinic] A normal resting heart rate for adults ranges fr
     6.40s  user  발화 시작: 정말요?
     7.13s  user  발화 끝
     8.36s  agent 발화 끝
     8.37s  user  발화 시작: 아, 그럼 좀 더 정확하게 알고 싶어요. 평균적인 수치는 얼마예요?
    12.21s  user  발화 끝
    12.24s  <ret> 발화 (turn4 첫 프레임)
    12.48s  agent 발화 시작: <ret> 평균 심박수는 보통 분당 오십회에서 구십회 정도입니다.
    14.24s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.26s]: [source: Cleveland Clinic] A normal heart rate typically falls between
    16.57s  user  발화 시작: [happy] 아, 오늘 날씨 진짜 좋다!
    16.74s  agent 발화 끝
    18.52s  user  발화 시작: 분당 오십회에서 구십회군요… 그럼 저는 좀 빠른가 봐요.
    18.64s  user  발화 끝
    21.97s  agent 발화 시작: 분당 오십회에서 구십회가 일반적인 범위이고, 조금 빠르다고 해서 꼭 걱정하실 필요는 없습니다.
    22.04s  user  발화 끝
    28.83s  agent 발화 끝
