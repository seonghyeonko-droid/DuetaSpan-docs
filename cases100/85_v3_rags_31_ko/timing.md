# v3_rags_31_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rags_31",
#     "name": "서형",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "mid 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-17",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-04-05",
#       "category": "plant",
#       "text": "User is growing basil on the windowsill at home."
#     },
#     {
#       "date": "2026-03-27",
#       "category": "anniversary",
#       "text": "User's anniversary is December 3."
#     },
#     {
#       "date": "2026-03-07",
#       "category": "show",
#       "text": "User is currently watching a nature documentary series."
#     },
#     {
#       "date": "2026-02-06",
#       "category": "wake",
#       "text": "User usually wakes up around 6am."
#     },
#     {
#       "date": "2026-01-23",
#       "category": "floor",
#       "text": "User lives on the 12th floor."
#     },
#     {
#       "date": "2025-12-27",
#       "category": "emergency",
#       "text": "User's emergency contact is Emma."
#     },
#     {
#       "date": "2025-12-14",
#       "category": "temp",
#       "text": "User keeps the home thermostat around 25°C."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-12",
#       "title": "Comparing health insurance",
#       "bullets": [
#         "self-employed and needs dental",
#         "wants a low deductible"
#       ]
#     },
#     {
#       "date": "2026-04-20",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six on the 14th",
#         "looking for outdoor seating with a vegetarian option"
#       ]
#     },
#     {
#       "date": "2026-04-17",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers for a 3-story house",
#         "wanted coverage for the basement office"
#       ]
#     },
#     {
#       "date": "2026-02-03",
#       "title": "Training for a 10K",
#       "bullets": [
#         "current pace is around 6 minutes per km",
#         "race is in November"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 비버리힐즈의 백만장자에서 밀번 드라이스데일 역을 맡은 배우는 누구였나요?
     4.24s  <ret> 발화 (turn1 첫 프레임)
     4.52s  agent 발화 시작: <ret> 비버리힐즈의 백만장자에서 밀번 드라이스데일 역은 레이먼드 토마스 베일리 배우가 맡았답니다.
     4.54s  ⚡SPAN 주입 [d'=0.30s / d_lead=7.09s]: Raymond Thomas Bailey was an American actor best known for his role as
     4.63s  user  발화 끝
    11.61s  agent 발화 끝
