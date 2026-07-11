# v3_to_ot_11_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_11",
#     "name": "윤현",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "late 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-30",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in December."
#     },
#     {
#       "date": "2025-12-20",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     },
#     {
#       "date": "2025-09-14",
#       "category": "pet",
#       "text": "User has a Golden Retriever named Max."
#     },
#     {
#       "date": "2025-08-11",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     },
#     {
#       "date": "2025-06-20",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2025-06-03",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-09-21",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-09-09",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 앤드루스 리버 솔트가 몸에 좋은 점이 뭐예요?
     2.99s  <ret> 발화 (turn1 첫 프레임)
     3.05s  user  발화 끝
     3.23s  agent 발화 시작: <ret> 그건 변비 완화에 도움이 되는 약이에요. 혹시 소화 문제로 불편하신가요?
     3.23s  ⚡SPAN 주입 [d'=1.60s / d_lead=4.87s]: Andrews liver salts are a laxative.
     6.43s  user  발화 시작: 네.
     6.96s  user  발화 끝
     8.06s  user  발화 시작: 아, 잠깐만요. 엄마한테 전화 좀 해야겠어요.
     8.10s  agent 발화 끝
    11.30s  user  발화 끝
    11.45s  user  발화 시작: 아, 죄송해요. 다시 말씀해 주시겠어요?
    13.99s  agent 발화 시작: 네, 앤드루스 리버 솔트는 변비 완화에 도움이 되는 약이라고 말씀드렸어요.
    14.03s  user  발화 끝
    18.53s  agent 발화 끝
