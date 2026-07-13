# v3_pers_37_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_37",
#     "name": "Emma",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "female",
#     "age_range": "late 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-15",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     },
#     {
#       "date": "2026-05-14",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-04-24",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     },
#     {
#       "date": "2026-04-14",
#       "category": "work",
#       "text": "User works as a architect."
#     },
#     {
#       "date": "2026-03-13",
#       "category": "home",
#       "text": "User's home address is 941 Cedar Lane."
#     },
#     {
#       "date": "2026-03-02",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in May."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-09",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2026-03-21",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Oh, that’s… interesting. I wasn't  | S2 …But what if something *does* come | S3 That sounds… good, actually. I’ve  | S4 Maybe. I’m thinking of going to It

     0.00s  agent 발화 시작: Hello Emma, it’s lovely to meet you. I’m Runa, and I help pe
    10.07s  user  발화 시작: Oh, that’s… interesting. I wasn't expecting a counselor. I j
    10.07s  agent 발화 끝
    17.71s  agent 발화 시작: It's very common to feel that way! Many people find it harde
    17.71s  user  발화 끝
    30.56s  user  발화 시작: I don't know, honestly. I always end up checking work email,
    30.56s  agent 발화 끝
    36.81s  agent 발화 시작: That guilt is a big hurdle. One technique I often suggest is
    36.81s  user  발화 끝
    49.31s  user  발화 시작: Yeah.
    49.31s  agent 발화 끝
    49.66s  agent 발화 시작: It’s about retraining your brain to associate vacation with 
    49.66s  user  발화 끝
    57.64s  user  발화 시작: …But what if something *does* come up at work? I feel like I
    57.64s  agent 발화 끝
    63.89s  agent 발화 시작: That’s a valid concern, and a really common one. Establishin
    63.89s  user  발화 끝
    75.00s  user  발화 시작: That sounds… good, actually. I’ve never really thought about
    75.00s  agent 발화 끝
    78.82s  agent 발화 시작: It takes practice, but it’s incredibly empowering. A little 
    78.82s  user  발화 끝
    93.75s  user  발화 시작: Maybe. I’m thinking of going to Italy next spring, but it fe
    93.75s  agent 발화 끝
   100.00s  agent 발화 시작: Yeah.
   100.00s  user  발화 끝
   100.35s  agent 발화 시작: Italy in the spring sounds wonderful! [surprised] It’s a pop
   100.35s  agent 발화 끝
   111.81s  agent 발화 끝
