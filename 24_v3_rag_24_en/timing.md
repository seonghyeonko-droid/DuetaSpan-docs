# v3_rag_24_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_24",
#     "name": "Sky",
#     "location": {
#       "city": "New York",
#       "country": "United States",
#       "timezone": "America/New_York (EST, UTC-5)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "non-binary",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-08",
#       "category": "work",
#       "text": "User works as a chef."
#     },
#     {
#       "date": "2026-04-27",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2026-03-28",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     },
#     {
#       "date": "2026-01-28",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2025-10-29",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in October."
#     },
#     {
#       "date": "2025-06-22",
#       "category": "home",
#       "text": "User's home address is 545 Elm Street."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-06",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2026-01-09",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-10-31",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Hi, Tunax! I’m feeling a little lo | S2 Um, well… the coding, mostly. And  | S3 I used to be a teacher, actually. | S4 I think I'd like the challenge of 

     0.00s  user  발화 시작: Hi, Tunax! I’m feeling a little lost about this career chang
     4.55s  agent 발화 시작: Hello! It's perfectly normal to feel lost during big transit
     4.55s  user  발화 끝
    13.25s  user  발화 시작: Uh-huh.
    13.25s  agent 발화 끝
    13.66s  user  발화 시작: I was thinking of becoming a software engineer, but it seems
    13.66s  user  발화 끝
    19.04s  agent 발화 시작: It can seem daunting, absolutely! But you’re already conside
    19.04s  user  발화 끝
    28.15s  user  발화 시작: Um, well… the coding, mostly. And all the different language
    28.15s  agent 발화 끝
    32.13s  <ret> 발화 (turn6 첫 프레임)
    32.29s  agent 발화 시작: <ret> Many people start with Python because it’s a widely us
    32.29s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.59s]: Python is a widely used high-level, general-purpose programming langua
    32.29s  user  발화 끝
    43.88s  user  발화 시작: That actually sounds… less scary.
    43.88s  agent 발화 끝
    45.95s  agent 발화 시작: Wonderful! Small steps are key, and finding the right starti
    45.95s  user  발화 끝
    54.23s  user  발화 시작: I used to be a teacher, actually.
    54.23s  agent 발화 끝
    57.13s  agent 발화 시작: That's wonderful! Teaching builds incredible problem-solving
    57.13s  user  발화 끝
    62.85s  <ret> 발화 (turn11 첫 프레임)
    62.93s  agent 발화 시작: <ret> The median annual wage for software developers was $12
    62.93s  ⚡SPAN 주입 [d'=0.96s / d_lead=10.76s]: The median annual wage for software developers was $123,980 in May 202
    62.93s  agent 발화 끝
    73.69s  user  발화 시작: Mhm.
    73.69s  agent 발화 끝
    74.10s  user  발화 시작: Wow, that’s a pretty good salary!
    74.10s  user  발화 끝
    76.59s  agent 발화 시작: It is! But remember, a career isn't just about the money. Wh
    76.59s  user  발화 끝
    86.11s  user  발화 시작: I think I'd like the challenge of building things.
    86.11s  agent 발화 끝
    89.84s  agent 발화 시작: That’s a fantastic reason! The creative aspect of building s
    89.84s  user  발화 끝
    95.65s  <ret> 발화 (turn17 첫 프레임)
    96.05s  agent 발화 시작: <ret> To help you explore… Codecademy offers interactive Pyt
    96.05s  agent 발화 끝
    96.93s  ⚡SPAN 주입 [d'=1.28s / d_lead=1.66s]: (tool result) Codecademy offers interactive Python courses for beginne
   108.47s  user  발화 시작: Yeah.
   108.47s  agent 발화 끝
   108.88s  user  발화 시작: That sounds perfect, thanks Tunax!
   108.88s  user  발화 끝
   110.95s  agent 발화 시작: You're very welcome! Remember, I'm here to support you as yo
   110.95s  user  발화 끝
   122.95s  agent 발화 끝
