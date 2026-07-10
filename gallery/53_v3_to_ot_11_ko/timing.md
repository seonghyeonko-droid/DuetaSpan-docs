# v3_to_ot_11_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_11",
#     "name": "지안",
#     "location": {
#       "city": "Busan",
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
#       "date": "2026-05-11",
#       "category": "home",
#       "text": "User's home address is 대구 중구 동인동 88-1."
#     },
#     {
#       "date": "2026-02-02",
#       "category": "pet",
#       "text": "User has a Golden Retriever named Max."
#     },
#     {
#       "date": "2026-01-23",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     },
#     {
#       "date": "2025-06-21",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-15",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2026-01-20",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 음… 호주에서 코먼웰스 게임을… | S2 …마지막으로 개최한 게 언제였지? | S3 잠깐만, 아까 그 얘기는… | S4 아, 미안. 다시 말해서, 이천십팔년이라고 했지?

     0.00s  user  발화 시작: 음… 호주에서 코먼웰스 게임을…
     2.90s  user  발화 끝
     4.24s  user  발화 시작: …마지막으로 개최한 게 언제였지?
     5.84s  <ret> 발화 (turn2 첫 프레임)
     6.07s  agent 발화 시작: <ret> 호주에서 코먼웰스 게임을 마지막으로 개최한 건 이천십팔년이었습니다.
     6.08s  ⚡SPAN 주입 [d'=1.60s / d_lead=5.19s]: Australia last hosted the Commonwealth Games in 2018.
     6.12s  user  발화 끝
     7.90s  user  발화 시작: 응.
     8.53s  user  발화 끝
    11.22s  user  발화 시작: 잠깐만, 아까 그 얘기는…
    11.26s  agent 발화 끝
    13.34s  user  발화 끝
    15.48s  user  발화 시작: 아, 미안. 다시 말해서, 이천십팔년이라고 했지?
    18.48s  <ret> 발화 (turn6 첫 프레임)
    18.80s  agent 발화 시작: <ret> 네, 맞습니다. 호주에서 코먼웰스 게임을 마지막으로 개최한 건 이천십팔년입니다. 공부하시는데 도움
    18.80s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.43s]: Australia last hosted the Commonwealth Games in 2018.
    18.86s  user  발화 끝
    22.53s  user  발화 시작: 헐.
    22.93s  user  발화 끝
    27.23s  agent 발화 끝
    27.31s  agent 발화 시작: 혹시 공부 계획 세우는 데 어려움을 느끼고 계신가요? 제가 도와드릴 수 있어요.
    32.13s  agent 발화 끝
