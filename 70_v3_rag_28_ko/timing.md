# v3_rag_28_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_28",
#     "name": "정슬",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-07-02",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2026-05-20",
#       "category": "work",
#       "text": "User works as a accountant."
#     },
#     {
#       "date": "2026-03-04",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-02-20",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2026-02-07",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in March."
#     },
#     {
#       "date": "2026-01-03",
#       "category": "home",
#       "text": "User's home address is 960 Pine Court."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-07-16",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2026-02-04",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 재향군인부(Veterans Affairs)가 언제 만들어졌는지 궁금해.
     3.76s  <ret> 발화 (turn1 첫 프레임)
     4.07s  agent 발화 시작: <ret> 재향군인들을 위한 부처가 언제 생겼는지 알아볼까요? 미국 재향군인부는 천구백삼십년 칠월 이십일일에
     4.17s  user  발화 끝
     5.76s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.13s]: [source: Britannica] The United States Department of Veterans Affairs 
    12.32s  agent 발화 끝
    13.57s  user  발화 시작: 음, 그게 좀 늦은 것 같은데. 그 전에는 재향군인들을 어떻게 보살폈어?
    19.06s  agent 발화 시작: 이전에는 여러 기관에서 재향군인들을 지원했지만, 하나의 부처로 통합된 건 천구백삼십년이었답니다.
    19.32s  user  발화 끝
    26.35s  user  발화 시작: 그러니까 그 전까지는 체계적인 관리가 안 됐다는 거네?
    26.43s  agent 발화 끝
    29.77s  user  발화 끝
    29.95s  agent 발화 시작: [curious] 음, 그렇다고 단정하긴 어렵지만, 통합 전에는 지원이 분산되어 있었던 건 사실이에요.
    36.02s  agent 발화 끝
