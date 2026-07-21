# v3_rags_31_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rags_31",
#     "name": "Noah",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "male",
#     "age_range": "mid 20s",
#     "language": "English"
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


     0.00s  user  발화 시작: Who played Milburn Drysdale, the banker on *The Beverly Hill
     4.12s  <ret> 발화 (turn1 첫 프레임)
     4.34s  agent 발화 시작: <ret> That would be Raymond Thomas Bailey—he played Milburn 
     4.43s  user  발화 끝
     5.62s  ⚡SPAN 주입 [d'=1.50s / d_lead=10.62s]: Raymond Thomas Bailey portrayed Milburn Drysdale, the president of the
    14.96s  agent 발화 끝
