# v3_rags_31_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rags_31",
#     "name": "정호",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "50s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-08",
#       "category": "pet",
#       "text": "User has a Golden Retriever named Max."
#     },
#     {
#       "date": "2026-02-12",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2025-11-21",
#       "category": "work",
#       "text": "User works as a architect."
#     },
#     {
#       "date": "2025-08-06",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in December."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-04",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2026-02-10",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-10-15",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 혹시 'I've Been Everywhere'라는 노래 누가 불렀는지 아세요?
     2.72s  <ret> 발화 (turn1 첫 프레임)
     2.95s  user  발화 끝
     2.96s  agent 발화 시작: <ret> 'I've Been Everywhere'는 천구백육십이년에 호주 컨트리 가수인 제프 맥이 처음 불
     2.96s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.42s]: Australian country singer Geoff Mack wrote and originally performed th
     8.38s  agent 발화 끝
