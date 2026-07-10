# v3_rags_31_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rags_31",
#     "name": "혜현",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "early 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-27",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in December."
#     },
#     {
#       "date": "2026-05-13",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2026-05-11",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2026-04-27",
#       "category": "home",
#       "text": "User's home address is 대구 중구 동인동 88-1."
#     },
#     {
#       "date": "2026-03-10",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-11-06",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-03",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 세상에서 제일 높은 빌딩이 어디에 있어?
     1.73s  <ret> 발화 (turn1 첫 프레임)
     1.96s  agent 발화 시작: <ret> 세상에서 제일 높은 빌딩은 두바이의 부르즈 할리파인데, 지금 높이가 팔백이십팔미터 정도 된대요.
     1.97s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.55s]: The Burj Khalifa in Dubai is currently the tallest skyscraper in the w
     1.98s  user  발화 끝
     9.51s  agent 발화 끝
