# v3_rags_31_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rags_31",
#     "name": "수정",
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
#       "date": "2026-04-03",
#       "category": "work",
#       "text": "User works as a chef."
#     },
#     {
#       "date": "2025-12-20",
#       "category": "diet",
#       "text": "User is vegan."
#     },
#     {
#       "date": "2025-10-26",
#       "category": "hobby",
#       "text": "User is into vintage synth collecting."
#     },
#     {
#       "date": "2025-07-13",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in December."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-14",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-08-11",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-07-25",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 인도 대법원의 최초 여성 판사는 누구였나요?
     0.14s  <ret> 발화 (turn1 첫 프레임)
     0.38s  agent 발화 시작: <ret> 인도 고등법 최초의 여성 판사는 안나 찬디 판사였으며, 천구백삼십칠년에 임명되었습니다.
     0.38s  ⚡SPAN 주입 [d'=0.50s / d_lead=0.62s]: Justice Anna Chandy was the first woman judge in India’s High Court, a
     0.38s  user  발화 끝
     1.00s  agent 발화 끝
