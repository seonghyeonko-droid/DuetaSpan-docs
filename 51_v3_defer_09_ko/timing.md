# v3_defer_09_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_defer_09",
#     "name": "민경",
#     "location": {
#       "city": "Busan",
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
#       "date": "2026-06-21",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2026-05-24",
#       "category": "home",
#       "text": "User's home address is 인천 연수구 송도동 12-5."
#     },
#     {
#       "date": "2026-05-23",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in March."
#     },
#     {
#       "date": "2026-05-14",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2026-03-10",
#       "category": "work",
#       "text": "User works as a marketing manager."
#     },
#     {
#       "date": "2026-01-28",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-11-29",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 런던에서 자전거로 이동할 때, 빅벤에서 타워 브리지까지 거리랑 시간이 얼마나 걸릴까요?
     5.80s  <ret> 발화 (turn1 첫 프레임)
     5.96s  agent 발화 시작: <ret> 빅벤에서 타워 브리지까지 자전거로 약 구 점 사킬로미터, 삼십이분 정도 걸릴 거예요. 자전거 타는
     5.96s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.12s]: (tool result) distance: 9.4 km, duration: 32 minutes
     6.06s  user  발화 끝
     9.45s  user  발화 시작: 그렇군요.
    10.28s  user  발화 끝
    14.07s  agent 발화 끝
    14.43s  user  발화 시작: 아, 그럴까요? 요즘 스트레스가 너무 심해서 운동을 좀 해야겠어요.
    18.47s  agent 발화 시작: 스트레스 해소에는 운동만큼 좋은 게 없죠. 규칙적인 운동은 정신 건강에도 큰 도움이 될 거예요.
    18.64s  user  발화 끝
    24.13s  agent 발화 끝
    24.86s  user  발화 시작: 혹시 지난달에 제가 런던 여행 간다고 말씀드렸었죠?
    27.58s  <ret> 발화 (turn6 첫 프레임)
    27.90s  agent 발화 시작: <ret> 네, 칠월 오일에 런던 여행을 가신다고 말씀하셨어요. 즐거운 여행 되셨길 바랍니다.
    27.90s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.14s]: [2026-07-05] 런던 여행을 간다고 말씀하셨습니다.
    28.09s  user  발화 끝
    33.05s  agent 발화 끝
