# v3_hesit_18_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_hesit_18",
#     "name": "Sam",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "non-binary",
#     "age_range": "40s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-04",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in October."
#     },
#     {
#       "date": "2026-03-17",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2025-10-31",
#       "category": "work",
#       "text": "User works as a chef."
#     },
#     {
#       "date": "2025-09-02",
#       "category": "home",
#       "text": "User's home address is 258 Elm Street."
#     },
#     {
#       "date": "2025-05-28",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-29",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2026-02-19",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-08-08",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: uh, I was just wondering… what’s the most populated region i
     0.00s  <ret> 발화 (turn1 첫 프레임)
     0.11s  agent 발화 시작: <ret> Well, it sounds like you’re exploring Ghana, which is 
     0.11s  ⚡SPAN 주입 [d'=0.29s / d_lead=0.29s]: The Ashanti Region of Ghana is the country’s most populous region, wit
     0.11s  user  발화 끝
     0.40s  user  발화 시작: [surprised] Wow, that’s a lot of people!
     0.40s  agent 발화 끝
     0.41s  <ret> 발화 (turn6 첫 프레임)
     0.47s  agent 발화 시작: It truly is. Sometimes understanding the scale of things hel
     0.47s  user  발화 끝
     0.64s  user  발화 시작: Yeah.
     0.64s  agent 발화 끝
     0.65s  user  발화 시작: Um, do you know when Ghana became independent?
     0.65s  user  발화 끝
     0.73s  agent 발화 시작: <ret> Ghana’s independence is a significant moment in histor
     0.73s  ⚡SPAN 주입 [d'=0.27s / d_lead=0.27s]: (tool result) Ghana gained its independence from the United Kingdom on
     0.73s  user  발화 끝
     1.00s  agent 발화 끝
