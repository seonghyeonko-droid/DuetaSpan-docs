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

# EXAMINER(FDB-v2) 단계: S1 요즘 건강 관리에 관심이 많아서 그런데, 혹시 건강한 사람의  | S2 아, 그건 좀 높은 편이네요. 그럼 좀 더 건강한 사람의 평균 | S3 [sigh] 오늘따라 차가 너무 막히네. | S4 아하, 그럼 평균적으로는 분당 칠십오회 정도라고 생각하면 될까

     0.00s  user  발화 시작: 요즘 건강 관리에 관심이 많아서 그런데, 혹시 건강한 사람의 평균 심박수가 어떻게 되는지 궁금해요.
     6.12s  <ret> 발화 (turn1 첫 프레임)
     6.27s  agent 발화 시작: <ret> 건강한 성인의 정상적인 안정 시 심박수는 분당 육십 회에서 백 회 사이입니다.
     6.48s  user  발화 끝
     6.62s  ⚡SPAN 주입 [d'=0.50s / d_lead=5.00s]: [source: Mayo Clinic] A normal resting heart rate for adults ranges fr
     8.79s  user  발화 시작: 예.
     9.24s  user  발화 끝
    11.03s  user  발화 시작: 아, 그건 좀 높은 편이네요. 그럼 좀 더 건강한 사람의 평균 심박수는 어느 정도일까요?
    11.27s  agent 발화 끝
    16.60s  <ret> 발화 (turn4 첫 프레임)
    16.82s  user  발화 끝
    16.83s  agent 발화 시작: <ret> 좀 더 건강한 성인의 일반적인 심박수는 분당 육십 회에서 구십 회 사이입니다.
    18.60s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.18s]: [source: Cleveland Clinic] For adults, a typical heart rate ranges fro
    22.02s  agent 발화 끝
    22.16s  user  발화 시작: [sigh] 오늘따라 차가 너무 막히네.
    24.36s  user  발화 시작: 아하, 그럼 평균적으로는 분당 칠십오회 정도라고 생각하면 될까요?
    24.51s  user  발화 끝
    28.58s  agent 발화 시작: 네, 대략 분당 칠십오 회 정도로 생각하시면 괜찮겠습니다.
    28.67s  user  발화 끝
    32.28s  agent 발화 끝
