# v3_rags_30_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rags_30",
#     "name": "윤슬",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-19",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2026-05-20",
#       "category": "pet",
#       "text": "User has a Poodle named Coco."
#     },
#     {
#       "date": "2025-12-26",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-09-08",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2025-06-25",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in March."
#     },
#     {
#       "date": "2025-06-07",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-12-26",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-06-14",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-06-08",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 삼 육 마피아 멤버가 누구누구야?
     2.49s  <ret> 발화 (turn1 첫 프레임)
     2.62s  agent 발화 시작: <ret> 삼 육 마피아 멤버로는 DJ 폴이 있습니다. 그는 멤피스 출신의 래퍼이자 프로듀서예요.
     2.65s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.02s]: DJ Paul is an American rapper, DJ, and record producer from Memphis, T
     2.72s  user  발화 끝
     8.64s  agent 발화 끝
