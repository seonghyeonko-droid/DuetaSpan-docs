# v3_rag_27_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_27",
#     "name": "Quinn",
#     "location": {
#       "city": "New York",
#       "country": "United States",
#       "timezone": "America/New_York (EST, UTC-5)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "non-binary",
#     "age_range": "late 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-07",
#       "category": "home",
#       "text": "User's home address is 644 Elm Street."
#     },
#     {
#       "date": "2026-03-18",
#       "category": "work",
#       "text": "User works as a accountant."
#     },
#     {
#       "date": "2025-12-08",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-06-11",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-08-18",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-06-14",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I’m trying to remember a British c | S2 …did he start on the show right aw | S3 It's good to know how people get t | S4 [happy] That sounds easy enough! W

     0.00s  user  발화 시작: I’m trying to remember a British comedy show, it’s on the ra
     4.73s  agent 발화 시작: It sounds like you might be thinking of a show called “The N
     4.73s  user  발화 끝
    10.25s  user  발화 시작: That’s it! Who was one of the early hosts, a comedian born i
    10.25s  agent 발화 끝
    15.36s  <ret> 발화 (turn3 첫 프레임)
    15.76s  agent 발화 시작: <ret> One of the early hosts was Jimmy Carr, born—
    15.76s  ⚡SPAN 주입 [d'=1.20s / d_lead=3.55s]: Born in East Dulwich, London, on 26 June 1969, Jimmy Carr is an Englis
    15.76s  user  발화 끝
    19.31s  user  발화 시작: …did he start on the show right away…
    19.31s  agent 발화 끝
    22.46s  user  발화 시작: …or was he on other things first?
    22.46s  user  발화 끝
    25.22s  agent 발화 시작: Before “The News Quiz,” Jimmy Carr was building a career in 
    25.22s  user  발화 끝
    29.95s  user  발화 시작: Mhm.
    29.95s  agent 발화 끝
    30.35s  agent 발화 시작: He began as a joke writer for established comedians, then di
    30.35s  user  발화 끝
    35.08s  user  발화 시작: It's good to know how people get their start. Do you have an
    35.08s  agent 발화 끝
    42.56s  agent 발화 시작: Fostering creativity is wonderful; offering open-ended mater
    42.56s  user  발화 끝
    46.90s  user  발화 시작: Mm-hmm.
    46.90s  agent 발화 끝
    47.29s  user  발화 시작: Like what kind of materials?
    47.29s  user  발화 끝
    49.26s  agent 발화 시작: Things like building blocks, paints, or even just cardboard 
    49.26s  user  발화 끝
    54.39s  user  발화 시작: [happy] That sounds easy enough! What’s the weather like in 
    54.39s  agent 발화 끝
    59.04s  <ret> 발화 (turn15 첫 프레임)
    59.12s  agent 발화 시작: <ret> The weather in London is currently 21.0°C, with partly
    59.12s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.06s]: (tool result) London: 21.0°C, humidity 68%, wind 6.2 km/h, condition: 
    59.12s  user  발화 끝
    68.18s  agent 발화 끝
