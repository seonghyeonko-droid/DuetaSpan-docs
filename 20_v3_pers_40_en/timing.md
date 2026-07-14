# v3_pers_40_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_40",
#     "name": "Charlie",
#     "location": {
#       "city": "Paris",
#       "country": "France",
#       "timezone": "Europe/Paris (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "French",
#     "gender": "non-binary",
#     "age_range": "early 30s",
#     "language": "French"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-20",
#       "category": "home",
#       "text": "User's home address is 781 Maple Drive."
#     },
#     {
#       "date": "2026-04-06",
#       "category": "work",
#       "text": "User works as a nurse."
#     },
#     {
#       "date": "2026-04-02",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2026-03-29",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2026-03-02",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2026-01-19",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in August."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-14",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Munaus… that’s an unusual name. Is | S2 That sounds… nice, but hard. I kee | S3 It's just… my job. I’m a pastry ch | S4 I guess… I haven't really talked t

     0.00s  agent 발화 시작: Bonjour, Charlie. I’m Munaus, and I’m here to offer support 
     8.19s  user  발화 시작: Munaus… that’s an unusual name. Is it… a new kind of assista
     8.19s  agent 발화 끝
    12.46s  agent 발화 시작: [curious] It’s a name I’ve adopted, Charlie. It feels gentle
    12.46s  user  발화 끝
    22.07s  user  발화 시작: Well, I’m feeling a bit lost, actually. Just… overwhelmed wi
    22.07s  agent 발화 끝
    25.99s  agent 발화 시작: That’s perfectly alright. It’s very common to feel overwhelm
    25.99s  user  발화 끝
    32.75s  user  발화 시작: Mm-hmm.
    32.75s  agent 발화 끝
    33.11s  agent 발화 시작: Allowing yourself to *feel* those waves, rather than fightin
    33.11s  user  발화 끝
    41.65s  user  발화 시작: That sounds… nice, but hard. I keep trying to push it all do
    41.65s  agent 발화 끝
    46.28s  agent 발화 시작: Mm-hmm.
    46.28s  user  발화 끝
    46.64s  agent 발화 시작: [sigh] It’s a natural instinct to want to protect yourself, 
    46.64s  agent 발화 끝
    54.83s  user  발화 시작: It's just… my job. I’m a pastry chef, and the bakery is clos
    54.83s  agent 발화 끝
    59.45s  agent 발화 시작: Oh, Charlie, I’m so sorry to hear that. Losing a job is a si
    59.45s  user  발화 끝
    68.35s  user  발화 시작: Exactly! It was *my* bakery. And now… what do I do?
    68.35s  agent 발화 끝
    72.27s  agent 발화 시작: [happy] It’s okay to grieve that loss. It's also a chance to
    72.27s  user  발화 끝
    82.59s  user  발화 시작: I guess… I haven't really talked to anyone about it yet.
    82.59s  agent 발화 끝
    86.51s  agent 발화 시작: Yeah, yeah.
    86.51s  user  발화 끝
    87.22s  agent 발화 시작: That’s understandable. It can be hard to open up. But sharin
    87.22s  agent 발화 끝
    96.12s  agent 발화 끝
