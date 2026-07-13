# v3_fstart_15_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fstart_15",
#     "name": "은경",
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
#       "date": "2026-03-09",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2026-02-11",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-12-07",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2025-10-10",
#       "category": "pet",
#       "text": "User has a Poodle named Coco."
#     },
#     {
#       "date": "2025-08-28",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in August."
#     },
#     {
#       "date": "2025-06-24",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
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
#     },
#     {
#       "date": "2026-01-07",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-12-13",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 집에서 중학교까지 가는 길 좀 알려줘. 학교 가는 길로. | S2 음… 그 옆에 새로 생긴 카페 있잖아, 거기까지 가는 길은? | S3 아, 그냥 스타벅스 가는 길 알려줘. | S4 좋아, 그럼 거기로 택시 불러줘.

     0.00s  user  발화 시작: 집에서 중학교까지 가는 길 좀 알려줘. 학교 가는 길로.
     3.66s  <ret> 발화 (turn1 첫 프레임)
     4.25s  agent 발화 시작: <ret> 집에서 중학교까지는 육 점 이킬로미터, 십팔분 정도 걸려요. Elm 거리를 따라 Oak 애비뉴로 
     4.25s  user  발화 끝
     4.47s  ⚡SPAN 주입 [d'=0.80s / d_lead=10.87s]: (tool result) {"distance": "6.2 km", "duration": "18 minutes", "route"
    15.13s  user  발화 시작: 음… 그 옆에 새로 생긴 카페 있잖아, 거기까지 가는 길은?
    15.13s  agent 발화 끝
    19.86s  agent 발화 시작: 그 옆에 새로 생긴 카페 말씀이시군요.
    19.86s  user  발화 끝
    22.69s  agent 발화 시작: 죄송하지만, 그 카페에 대한 정보는 찾을 수 없었어요.
    22.69s  agent 발화 끝
    26.47s  user  발화 시작: 네.
    26.47s  agent 발화 끝
    26.95s  user  발화 시작: 아, 그냥 스타벅스 가는 길 알려줘.
    26.95s  user  발화 끝
    29.41s  <ret> 발화 (turn7 첫 프레임)
    29.78s  agent 발화 시작: <ret> 스타벅스까지는 일 점 오킬로미터, 오분 정도 걸려요. 백이십삼 Main Street에 있어요.
    29.78s  user  발화 끝
    29.84s  ⚡SPAN 주입 [d'=0.43s / d_lead=5.20s]: (tool result) {"name": "Starbucks", "address": "123 Main Street", "dis
    34.98s  user  발화 시작: 와.
    34.98s  agent 발화 끝
    35.46s  user  발화 시작: 좋아, 그럼 거기로 택시 불러줘.
    35.46s  user  발화 끝
    37.54s  <ret> 발화 (turn10 첫 프레임)
    37.82s  agent 발화 시작: <ret> 스타벅스까지 택시를 불러드렸어요. 예상 요금은 팔천 원이고, 삼분 안에 도착할 거예요. 택시 번호
    37.82s  user  발화 끝
    38.54s  ⚡SPAN 주입 [d'=1.01s / d_lead=9.45s]: (tool result) {"status": "success", "estimated fare": "₩8,000", "estim
    47.27s  agent 발화 끝
