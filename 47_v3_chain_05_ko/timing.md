# v3_chain_05_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_chain_05",
#     "name": "연빈",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "late 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-15",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2025-10-25",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     },
#     {
#       "date": "2025-10-18",
#       "category": "work",
#       "text": "User works as a chef."
#     },
#     {
#       "date": "2025-06-15",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-06",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-11-08",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 자전거로 베이징 대학교에서 이화원을 가는 길 좀 알려줄래?
     0.00s  <ret> 발화 (turn1 첫 프레임)
     0.12s  agent 발화 시작: <ret> 자전거로 베이징 대학교에서 이화원까지는 약 삼십일 점 사킬로미터, 한시간 이십사분 정도 걸립니다.
     0.12s  ⚡SPAN 주입 [d'=0.27s / d_lead=0.27s]: (tool result) {"distance": "31.4 km", "duration": "1 hr 24 min", "rout
     0.12s  user  발화 끝
     0.39s  user  발화 시작: 응.
     0.39s  agent 발화 끝
     0.40s  user  발화 시작: 그 경로에 지하철역이 많이 보여. 지하철역 근처로 조금만 바꿔줄 수 있어?
     0.40s  user  발화 끝
     0.49s  <ret> 발화 (turn4 첫 프레임)
     0.57s  agent 발화 시작: <ret> 네, 지하철역 근처로 경로를 변경했습니다. 거리는 삼십삼 점 이킬로미터, 소요 시간은 한시간 삼십
     0.57s  ⚡SPAN 주입 [d'=0.19s / d_lead=0.19s]: (tool result) {"distance": "33.2 km", "duration": "1 hr 35 min", "rout
     0.57s  user  발화 끝
     0.76s  user  발화 시작: 와.
     0.76s  agent 발화 끝
     0.78s  user  발화 시작: 음… 그래도 좀 먼 것 같네.
     0.78s  user  발화 끝
     0.87s  agent 발화 시작: 혹시 다른 경로를 원하시나요? 아니면 다른 교통 수단을 알아보실까요?
     0.87s  user  발화 끝
     1.00s  agent 발화 끝
