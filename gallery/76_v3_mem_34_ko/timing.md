# v3_mem_34_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_34",
#     "name": "윤은",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-03-16",
#       "category": "home",
#       "text": "User's home address is 서울 강남구 역삼동 678-9."
#     },
#     {
#       "date": "2026-02-14",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2025-12-16",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2025-12-02",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-22",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2026-04-18",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: 안녕하세요, 윤은님. 저는 브리오입니다. 오늘 하루는 어떠셨어요?
     0.10s  user  발화 시작: 안녕하세요, 브리오님. 잘 지냈어요. 혹시 지금 제 집에서 강남역까지 얼마나 걸릴까요?
     0.10s  agent 발화 끝
     0.19s  <ret> 발화 (turn2 첫 프레임)
     0.27s  agent 발화 시작: <ret> 네, 윤은님. 저장된 주소 기준으로 강남역까지 가는 데는 대략 이십분 정도 소요될 것 같아요.
     0.27s  ⚡SPAN 주입 [d'=0.21s / d_lead=0.21s]: User's home address is 서울 강남구 역삼동 678-9.
     0.27s  user  발화 끝
     0.33s  <ret> 발화 (turn5 첫 프레임)
     0.48s  user  발화 시작: 네.
     0.48s  agent 발화 끝
     0.49s  user  발화 시작: … 지금 교통 상황은 어떤가요?
     0.49s  user  발화 끝
     0.57s  agent 발화 시작: <ret> 강남역까지 거리는 육 점 이킬로미터이고, 현재 교통 상황 때문에 이십삼분 정도 걸릴 것으로 예상됩
     0.57s  ⚡SPAN 주입 [d'=0.21s / d_lead=0.21s]: (tool result) {"distance": "6.2 km", "duration": "23 minutes", "status
     0.57s  user  발화 끝
     0.78s  user  발화 시작: 진짜요?
     0.78s  agent 발화 끝
     0.79s  agent 발화 시작: 혹시 지금 출발하시면, 딱 저녁 시간대에 도착하실 것 같네요. 오늘 하루 마무리 잘 하세요.
     0.79s  user  발화 끝
     1.00s  agent 발화 끝
