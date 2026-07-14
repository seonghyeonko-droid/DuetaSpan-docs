# v3_mcp_00_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_00",
#     "name": "Olivia",
#     "location": {
#       "city": "New York",
#       "country": "United States",
#       "timezone": "America/New_York (EST, UTC-5)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "female",
#     "age_range": "early 40s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-16",
#       "category": "allergy",
#       "text": "User is allergic to gluten."
#     },
#     {
#       "date": "2026-05-10",
#       "category": "dislike",
#       "text": "User can't stand anchovies."
#     },
#     {
#       "date": "2026-01-08",
#       "category": "child",
#       "text": "User has a child named Rin, age 12."
#     },
#     {
#       "date": "2025-12-25",
#       "category": "bloodtype",
#       "text": "User's blood type is A+."
#     },
#     {
#       "date": "2025-12-16",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-08",
#       "title": "Booking a Japan trip",
#       "bullets": [
#         "5 nights in Kyoto and Osaka in October",
#         "wants a JR Pass and a ryokan for one night"
#       ]
#     },
#     {
#       "date": "2026-04-10",
#       "title": "Planning a camping trip",
#       "bullets": [
#         "a weekend at a lake site in September",
#         "asked about a 4-person tent and a cooler"
#       ]
#     },
#     {
#       "date": "2026-03-08",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing the Kia Niro hybrid and Hyundai Ioniq",
#         "wants under 30k miles and below 25M won"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: I’m planning a trip to New York City next month, and I'd lik
     9.42s  <ret> 발화 (turn2 첫 프레임)
     9.47s  agent 발화 시작: Mhm.
     9.47s  user  발화 끝
     9.74s  ⚡SPAN 주입 [d'=1.08s / d_lead=9.80s]: New York City is home to many theaters, including the Broadway Theatre
     9.80s  agent 발화 시작: <ret> New York City has quite a few theaters! Broadway Theat
     9.80s  agent 발화 끝
    19.59s  user  발화 시작: Uh-huh.
    19.59s  agent 발화 끝
    19.92s  user  발화 시작: That’s great! Could you find me some events happening at the
    19.92s  user  발화 끝
    24.55s  <ret> 발화 (turn5 첫 프레임)
    24.82s  agent 발화 시작: <ret> Next week, Wicked is playing on July seventeenth at se
    24.82s  user  발화 끝
    25.41s  ⚡SPAN 주입 [d'=0.90s / d_lead=10.12s]: (tool result) {"events": [{"name": "Wicked", "date": "2026-07-17", "ti
    34.94s  user  발화 시작: Mm-hmm.
    34.94s  agent 발화 끝
    35.27s  user  발화 시작: Oh, that sounds fun. Maybe Wicked.
    35.27s  user  발화 끝
    37.22s  agent 발화 시작: [happy] Wicked is a popular choice! It’s wonderful you’re pl
    37.22s  user  발화 끝
    42.12s  agent 발화 끝
