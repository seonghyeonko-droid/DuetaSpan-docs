# v3_rag_28_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
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


     0.00s  user  발화 시작: Hi, I'm feeling a bit lost with my schedule.
     3.91s  agent 발화 시작: Hi there! I'm Frellal, and I can definitely help with that. 
     3.91s  user  발화 끝
    17.37s  user  발화 시작: Mm-hmm.
    17.37s  agent 발화 끝
    17.80s  user  발화 시작: I just… everything feels very scattered. I need to get bette
    17.80s  user  발화 끝
    23.22s  <ret> 발화 (turn4 첫 프레임)
    23.45s  agent 발화 시작: <ret> To get a handle on things, let's focus on identifying 
    23.45s  user  발화 끝
    23.52s  ⚡SPAN 주입 [d'=0.30s / d_lead=13.46s]: Prioritization involves identifying the most important tasks and focus
    36.91s  user  발화 시작: The Eisenhower Matrix? What exactly is that?
    36.91s  agent 발화 끝
    39.63s  <ret> 발화 (turn6 첫 프레임)
    39.95s  agent 발화 시작: <ret> It’s a really handy tool! The Eisenhower Matrix, somet
    39.95s  user  발화 끝
    40.41s  ⚡SPAN 주입 [d'=0.78s / d_lead=2.17s]: The Eisenhower Matrix, also known as the Urgent-Important Matrix, help
    59.05s  agent 발화 끝
