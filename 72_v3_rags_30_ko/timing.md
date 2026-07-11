# v3_rags_30_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rags_30",
#     "name": "민은",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "late 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2025-12-22",
#       "category": "work",
#       "text": "User works as a nurse."
#     },
#     {
#       "date": "2025-12-13",
#       "category": "home",
#       "text": "User's home address is 서울 용산구 이태원로 200."
#     },
#     {
#       "date": "2025-12-02",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in August."
#     },
#     {
#       "date": "2025-11-13",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2025-06-26",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     },
#     {
#       "date": "2025-06-18",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-14",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2026-05-28",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-06-26",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 혹시 'Nothing's Gonna Stop Us Now' 노래 부른 사람이 누구예요?
     0.32s  <ret> 발화 (turn1 첫 프레임)
     0.48s  agent 발화 시작: <ret> 그 노래는 천구백팔십오년에 스타쉽의 그레이스 슬릭이 불렀어요, 여러 나라에서 일위를 했답니다.
     0.48s  ⚡SPAN 주입 [d'=0.50s / d_lead=0.52s]: Grace Slick sang "Nothing's Gonna Stop Us Now" with Starship in 1985, 
     0.48s  user  발화 끝
     1.00s  agent 발화 끝
