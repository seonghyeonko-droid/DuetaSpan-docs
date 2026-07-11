# v3_hesit_18_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_hesit_18",
#     "name": "유은",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "early 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-02-11",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     },
#     {
#       "date": "2025-09-21",
#       "category": "work",
#       "text": "User works as a chef."
#     },
#     {
#       "date": "2025-09-17",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2025-09-03",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-08-16",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in March."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-28",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2026-04-22",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-06-05",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 갈리폴리 상륙 작전 때 연합군이 어디에 상륙하려고 했어?
     0.00s  <ret> 발화 (turn1 첫 프레임)
     0.23s  agent 발화 시작: <ret> 갈리폴리 상륙 작전에서 연합군은 갈리폴리 반도에 상륙할 예정이었습니다.
     0.23s  ⚡SPAN 주입 [d'=0.23s / d_lead=0.23s]: Gallipoli Peninsula.
     0.23s  user  발화 끝
     0.46s  user  발화 시작: 아, 그렇구나… 그쪽 지형은 어땠는데?
     0.46s  agent 발화 끝
     0.60s  agent 발화 시작: 지형에 대해서는 지금 바로 찾아볼 수 없습니다. 제가 도와드릴 수 있는 다른 일이 있을까요?
     0.60s  user  발화 끝
     1.00s  agent 발화 끝
