# v3_pers_41_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_41",
#     "name": "성영",
#     "location": {
#       "city": "Seoul",
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
#       "date": "2026-06-07",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in December."
#     },
#     {
#       "date": "2025-12-04",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2025-11-30",
#       "category": "work",
#       "text": "User works as a marketing manager."
#     },
#     {
#       "date": "2025-11-03",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2025-06-09",
#       "category": "home",
#       "text": "User's home address is 인천 연수구 송도동 12-5."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-10-16",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-08-03",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: 성영님, 안녕하세요. 저는 디오미라고 합니다. 커리어 고민이나 업무 스트레스, 어떤 어려움이든 편하게 말씀해
     0.20s  user  발화 시작: 네.
     0.20s  agent 발화 끝
     0.21s  user  발화 시작: 혹시 제가 어떤 걸 도와드릴 수 있을지 설명해 주실 수 있을까요?
     0.21s  user  발화 끝
     0.34s  agent 발화 시작: 디오미는 ‘나침반’이라는 뜻을 담고 있어요. 성영님의 방향을 찾도록 돕는 역할을 하고 싶다는 마음으로 지었어
     0.34s  user  발화 끝
     0.60s  user  발화 시작: 네.
     0.60s  agent 발화 끝
     0.61s  user  발화 시작: 요즘 회사 일이 너무 많아서, 뭘 먼저 해야 할지 모르겠어요. 계속 미루게 되네요.
     0.61s  user  발화 끝
     0.76s  agent 발화 시작: 일이 많아서 힘드시군요. 중요한 일들을 미루게 되면 더 큰 부담으로 느껴질 수 있어요. 혹시 어떤 종류의 일
     0.76s  user  발화 끝
     1.00s  agent 발화 끝
