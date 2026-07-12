# v3_hesit_18_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_hesit_18",
#     "name": "지재",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "early 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-01-11",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2026-01-04",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in December."
#     },
#     {
#       "date": "2025-10-07",
#       "category": "work",
#       "text": "User works as a chef."
#     },
#     {
#       "date": "2025-06-12",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Korean BBQ."
#     },
#     {
#       "date": "2025-06-10",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2025-06-06",
#       "category": "home",
#       "text": "User's home address is 경기 성남시 분당구 판교로 235."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-04",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2026-04-18",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-06-07",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 호주에 마지막 죄수들이 언제 도착했는지 궁금해.
     2.90s  <ret> 발화 (turn1 첫 프레임)
     3.22s  agent 발화 시작: <ret> 호주에 마지막 죄수들이 도착한 건, 천팔백육십팔년 일월 십일이었어요. 힘든 시간이었겠죠?
     3.22s  ⚡SPAN 주입 [d'=1.60s / d_lead=5.36s]: The last convicts arrived in Australia on 10 January 1868.
     3.22s  user  발화 끝
     8.58s  user  발화 시작: 어.
     8.58s  agent 발화 끝
     9.12s  user  발화 시작: 그럴 것 같아… 그 당시 상황이 어땠을까?
     9.12s  user  발화 끝
    12.87s  agent 발화 시작: 그 시기는 변화의 물결 속에서 많은 이들이 새로운 삶을 시작하려 애썼을 거예요. 괜찮으시다면, 그 마음을 조
    12.87s  user  발화 끝
    23.07s  agent 발화 끝
