# v3_rags_31_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rags_31",
#     "name": "라경",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "late 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-15",
#       "category": "diet",
#       "text": "User is vegan."
#     },
#     {
#       "date": "2026-03-12",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-02-24",
#       "category": "home",
#       "text": "User's home address is 경기 성남시 분당구 판교로 235."
#     },
#     {
#       "date": "2026-01-24",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     },
#     {
#       "date": "2025-12-18",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2025-11-04",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in October."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-01-25",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 혹시 데어데블 시즌 삼은 언제 공개됐는지 알 수 있을까요?
     2.88s  <ret> 발화 (turn1 첫 프레임)
     3.12s  agent 발화 시작: <ret> 데어데블 시즌 삼은 이천십팔년 십월 이십육일에 공개되었어요.
     3.33s  user  발화 끝
     3.92s  ⚡SPAN 주입 [d'=1.04s / d_lead=4.67s]: The third season of Daredevil was released on October 26, 2018.
     7.79s  agent 발화 끝
