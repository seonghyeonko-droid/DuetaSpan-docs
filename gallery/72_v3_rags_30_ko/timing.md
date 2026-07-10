# v3_rags_30_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rags_30",
#     "name": "보호",
#     "location": {
#       "city": "Seoul",
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
#       "date": "2026-04-13",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     },
#     {
#       "date": "2026-03-13",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     },
#     {
#       "date": "2026-03-09",
#       "category": "work",
#       "text": "User works as a chef."
#     },
#     {
#       "date": "2026-03-04",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in March."
#     },
#     {
#       "date": "2025-10-12",
#       "category": "home",
#       "text": "User's home address is 경기 성남시 분당구 판교로 235."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-11-01",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-07-20",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 라트비아 외무부 장관이 누구세요?
     2.81s  <ret> 발화 (turn1 첫 프레임)
     2.91s  user  발화 끝
     2.97s  agent 발화 시작: <ret> 라트비아 외무부 장관은 이천십일년부터 에드가르스 링케비치스 씨입니다.
     2.97s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.81s]: Edgars Rinkēvičs has been the Minister of Foreign Affairs of Latvia si
     7.78s  agent 발화 끝
