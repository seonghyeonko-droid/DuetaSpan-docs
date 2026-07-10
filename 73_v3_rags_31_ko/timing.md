# v3_rags_31_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rags_31",
#     "name": "다희",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "early 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-27",
#       "category": "diet",
#       "text": "User is vegan."
#     },
#     {
#       "date": "2026-02-13",
#       "category": "work",
#       "text": "User works as a accountant."
#     },
#     {
#       "date": "2026-02-04",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in August."
#     },
#     {
#       "date": "2025-12-16",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2025-11-21",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2025-09-01",
#       "category": "home",
#       "text": "User's home address is 부산 해운대구 우동 123-4."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-01-28",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-05-31",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 세상에서 제일 매운 고추는 어디에서 왔어?
     2.54s  <ret> 발화 (turn1 첫 프레임)
     2.77s  agent 발화 시작: <ret> 세상에서 제일 매운 고추는 미국 사우스캐롤라이나 주 록힐에서 처음 재배됐대요. 혹시 매운 음식 좋
     2.79s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.88s]: The Carolina Reaper, which once held the Guinness World Record for the
     2.91s  user  발화 끝
    10.66s  agent 발화 끝
