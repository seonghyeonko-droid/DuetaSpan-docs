# v3_rags_31_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rags_31",
#     "name": "다현",
#     "location": {
#       "city": "Seoul",
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
#       "date": "2026-03-22",
#       "category": "diet",
#       "text": "User is vegan."
#     },
#     {
#       "date": "2026-03-05",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in October."
#     },
#     {
#       "date": "2026-02-24",
#       "category": "work",
#       "text": "User works as a nurse."
#     },
#     {
#       "date": "2025-10-25",
#       "category": "pet",
#       "text": "User has a Golden Retriever named Max."
#     },
#     {
#       "date": "2025-09-18",
#       "category": "hobby",
#       "text": "User is into vintage synth collecting."
#     },
#     {
#       "date": "2025-07-29",
#       "category": "home",
#       "text": "User's home address is 부산 해운대구 해운대로 570."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-01-09",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-10-11",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-08-31",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 무지개 끝에서 노래한 사람은 누구였어?
     2.45s  <ret> 발화 (turn1 첫 프레임)
     2.69s  agent 발화 시작: <ret> 무지개 끝에서 노래한 사람은 얼 그랜트였어요. 그는 천구백오십팔년에 '무지개의 끝'이라는 곡으로 
     2.69s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.61s]: Earl Grant was an American baritone and bass singer, best known for hi
     2.69s  user  발화 끝
    11.31s  agent 발화 끝
