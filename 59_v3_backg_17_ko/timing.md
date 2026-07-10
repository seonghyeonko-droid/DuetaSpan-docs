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


     0.00s  user  발화 시작: 혹시 건강한 사람의 평균 심박수는 어떻게 돼요?
     2.89s  <ret> 발화 (turn1 첫 프레임)
     3.04s  agent 발화 시작: <ret> 건강한 성인의 정상적인 심박수는 분당… 정도입니다… 육십~백회 정도입니다.
     3.24s  user  발화 끝
     3.39s  ⚡SPAN 주입 [d'=0.50s / d_lead=6.29s]: 건강한 성인의 정상적인 휴식 시 심박수는 분당 60~100회입니다.
     9.34s  agent 발화 끝
    10.74s  user  발화 시작: 아니, 지금 택시가 왜 이렇게 안 오는 거야?
    12.98s  user  발화 시작: 분당 몇이라고요?
    13.13s  user  발화 끝
    13.98s  <ret> 발화 (turn4 첫 프레임)
    14.18s  user  발화 끝
    14.22s  agent 발화 시작: <ret> 일반적으로 건강한 성인의 안정 시 심박수는 분당… 정도입니다. 혹시 운동을 자주 하시는 편이세요?
    15.98s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.69s]: [A normal resting heart rate for adults ranges from 60 to 100 bpm.]
    21.91s  agent 발화 끝
