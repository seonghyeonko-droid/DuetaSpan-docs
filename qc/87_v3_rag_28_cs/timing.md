# v3_rag_28_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_28",
#     "name": "Ethan",
#     "location": {
#       "city": "Paris",
#       "country": "France",
#       "timezone": "Europe/Paris (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "French",
#     "gender": "male",
#     "age_range": "mid 30s",
#     "language": "French"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-24",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2026-05-13",
#       "category": "savings",
#       "text": "User is saving for a new car."
#     },
#     {
#       "date": "2026-05-09",
#       "category": "trip",
#       "text": "User is planning a trip to Morocco in February."
#     },
#     {
#       "date": "2026-04-18",
#       "category": "medication",
#       "text": "User takes insulin."
#     },
#     {
#       "date": "2026-04-03",
#       "category": "dislike",
#       "text": "User can't stand raw tomatoes."
#     },
#     {
#       "date": "2026-02-16",
#       "category": "dish",
#       "text": "User's go-to comfort dish is shakshuka."
#     },
#     {
#       "date": "2026-02-01",
#       "category": "sibling",
#       "text": "User has a younger sibling named Kenji."
#     },
#     {
#       "date": "2025-12-26",
#       "category": "skill",
#       "text": "User is quite experienced with vintage synth collecting."
#     },
#     {
#       "date": "2025-12-14",
#       "category": "streaming",
#       "text": "User subscribes to a shared Netflix family plan."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-22",
#       "title": "Booking a Japan trip",
#       "bullets": [
#         "5 nights in Kyoto and Osaka in October",
#         "wants a JR Pass and a ryokan for one night"
#       ]
#     },
#     {
#       "date": "2026-02-27",
#       "title": "Planning a camping trip",
#       "bullets": [
#         "a weekend at a lake site in September",
#         "asked about a 4-person tent and a cooler"
#       ]
#     },
#     {
#       "date": "2025-12-06",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six on the 14th",
#         "looking for outdoor seating with a vegetarian option"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 안녕, 스케줄이 좀 엉망진창인 것 같아.
     3.10s  agent 발화 시작: 안녕하세요. 저는 프렐랄이라고 해요. 도와드릴 수 있을 것 같아요. 루틴을 만드는 게 부담스러울 수 있지만,
     3.10s  user  발화 끝
    14.49s  user  발화 시작: 응.
    14.49s  agent 발화 끝
    15.01s  user  발화 시작: 그냥… 모든 게 다 흩어져 있는 느낌이야. 우선순위를 정하는 연습을 해야겠어.
    15.01s  user  발화 끝
    20.28s  <ret> 발화 (turn4 첫 프레임)
    20.70s  agent 발화 시작: <ret> 정리하기 위해, 정말 중요한 게 뭔지 파악하는 데 집중해 보는 게 좋겠어요. 긴급성과 중요도에 따
    20.70s  user  발화 끝
    21.27s  ⚡SPAN 주입 [d'=0.99s / d_lead=12.94s]: Prioritization involves identifying the most important tasks and focus
    33.64s  user  발화 시작: 아이젠하워 매트릭스? 그게 뭔데?
    33.64s  agent 발화 끝
    35.20s  <ret> 발화 (turn6 첫 프레임)
    35.71s  agent 발화 시작: <ret> 정말 유용한 도구예요! 아이젠하워 매트릭스는 긴급하고 중요한 일은 즉시 처리하고, 중요하지만 긴급
    35.71s  user  발화 끝
    36.19s  ⚡SPAN 주입 [d'=0.99s / d_lead=2.59s]: The Eisenhower Matrix, also known as the Urgent-Important Matrix, help
    52.27s  agent 발화 끝
