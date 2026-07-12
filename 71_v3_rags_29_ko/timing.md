# v3_rags_29_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rags_29",
#     "name": "주람",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-01-23",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-01-19",
#       "category": "work",
#       "text": "User works as a high-school teacher."
#     },
#     {
#       "date": "2025-12-20",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2025-10-08",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2025-08-29",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     },
#     {
#       "date": "2025-07-31",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in December."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-08-03",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 이천십육년 소유 댄스에서 누가 우승했는지 알려줘.
     3.27s  <ret> 발화 (turn1 첫 프레임)
     3.43s  agent 발화 시작: <ret> 이천십육년 소유 댄스 우승자는 레온 "키다" 번스라고 하네요. 춤 실력이 정말 대단했죠.
     3.43s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.86s]: Leon "Kida" Burns won the twelfth season of So You Think You Can Dance
     3.43s  user  발화 끝
    10.29s  agent 발화 끝
