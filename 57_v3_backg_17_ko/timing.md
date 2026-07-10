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


     0.00s  user  발화 시작: 음… 건강한 사람의 정상 심박수가 어느 정도인지 궁금하네요.
     6.19s  <ret> 발화 (turn1 첫 프레임)
     6.27s  agent 발화 시작: <ret> 건강한 성인의 정상적인 심박수는 분당 육십회에서 백회 정도라고 합니다.
     6.44s  user  발화 끝
     8.19s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.83s]: [source: Mayo Clinic] A normal resting heart rate for adults ranges fr
    18.10s  agent 발화 끝
    18.39s  user  발화 시작: [sigh] 아, 오늘따라 지하철이 왜 이렇게 붐비는 거야.
    19.19s  user  발화 시작: 아, 그렇군요. 그럼 좀 더 건강한 사람의 심박수는요?
    19.35s  user  발화 끝
    21.65s  <ret> 발화 (turn4 첫 프레임)
    21.97s  user  발화 끝
    22.04s  agent 발화 시작: <ret> 좋은 체력을 가진 분들의 경우, 안정 시 심박수는 분당 오십회에서 구십회 사이입니다.
    23.65s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.70s]: [source: Cleveland Clinic] For people in good physical shape, a normal
    27.74s  agent 발화 끝
