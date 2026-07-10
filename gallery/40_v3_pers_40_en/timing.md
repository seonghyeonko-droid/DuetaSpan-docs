# v3_pers_40_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_40",
#     "name": "Casey",
#     "location": {
#       "city": "London",
#       "country": "United Kingdom",
#       "timezone": "Europe/London (GMT, UTC+0)",
#       "currency": "GBP (£)"
#     },
#     "nationality": "British",
#     "gender": "non-binary",
#     "age_range": "late 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-15",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in December."
#     },
#     {
#       "date": "2026-02-27",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-10-29",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2025-08-26",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2025-08-01",
#       "category": "work",
#       "text": "User works as a accountant."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-07",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-09-01",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-07-01",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Oh, a life coach? That’s… unexpect | S2 Maybe. I was thinking a museum, bu | S3 I haven’t, actually. Are there man | S4 That sounds good. Really good, act

     0.00s  agent 발화 시작: Hello Casey, it’s lovely to connect with you. My name is Bia
     7.88s  agent 발화 끝
     7.92s  user  발화 시작: Oh, a life coach? That’s… unexpected. I just needed someone 
    15.38s  user  발화 끝
    15.74s  agent 발화 시작: It’s perfectly alright to feel a little surprised, Casey. Fi
    25.01s  agent 발화 끝
    26.34s  user  발화 시작: Well, she’s eight, loves art, but gets really bored easily. 
    33.95s  user  발화 끝
    34.18s  agent 발화 시작: That’s a common challenge with bright young minds! It sounds
    36.52s  user  발화 시작: Yeah.
    37.01s  user  발화 끝
    40.44s  user  발화 시작: Maybe. I was thinking a museum, but they're so… quiet. She'd
    41.12s  agent 발화 끝
    47.81s  user  발화 끝
    48.19s  agent 발화 시작: Museums can be tricky with energetic children. It's about fi
    57.56s  user  발화 시작: I haven’t, actually. Are there many of those around London?
    57.70s  agent 발화 끝
    61.49s  agent 발화 시작: There are quite a few options, actually. The Little Artists'
    61.58s  user  발화 끝
    65.19s  user  발화 시작: Mm-hmm.
    65.82s  user  발화 끝
    70.27s  user  발화 시작: Twenty-five pounds… that’s not bad, I suppose. Is it a big c
    70.39s  agent 발화 끝
    76.62s  user  발화 끝
    76.69s  agent 발화 시작: The classes are kept quite small, with a maximum of twelve c
    83.04s  agent 발화 끝
    83.17s  user  발화 시작: That sounds good. Really good, actually. Thanks, Bian.
    86.31s  user  발화 끝
    86.37s  agent 발화 시작: You’re very welcome, Casey. It’s often the small, thoughtful
    97.41s  agent 발화 끝
