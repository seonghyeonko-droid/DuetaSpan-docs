# v3_rag_26_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_26",
#     "name": "Emilia",
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
#       "date": "2026-04-23",
#       "category": "home",
#       "text": "User's home address is 249 Cedar Lane."
#     },
#     {
#       "date": "2026-03-15",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2026-02-13",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-01-11",
#       "category": "work",
#       "text": "User works as a accountant."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-08-04",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2026-05-28",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 So, uh, I’m working on a project,  | S2 Right, I figured. It’s for a histo | S3 Oh! Germany! Yes, that’s it. I kne | S4 Yeah, you’re right. It's just… som

     0.00s  user  발화 시작: So, uh, I’m working on a project, and I need to identify a f
     8.76s  user  발화 끝
     8.88s  agent 발화 시작: That's a good starting point for identifying a flag! Many na
    16.48s  agent 발화 끝
    17.00s  user  발화 시작: Right, I figured. It’s for a history assignment, actually. I
    23.90s  <ret> 발화 (turn3 첫 프레임)
    24.14s  agent 발화 시작: <ret> The flag of Germany is comprised of horizontal bands o
    24.28s  user  발화 끝
    25.90s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.09s]: [source: Britannica] The flag of Germany features three horizontal ban
    26.45s  user  발화 시작: Right.
    27.09s  user  발화 끝
    29.22s  agent 발화 끝
    30.06s  user  발화 시작: Oh! Germany! Yes, that’s it. I knew it was European, but my 
    37.52s  user  발화 끝
    37.54s  agent 발화 시작: It happens to the best of us! Sometimes a little nudge is al
    43.33s  agent 발화 끝
    44.78s  user  발화 시작: Yeah, you’re right. It's just… sometimes all the dates and n
    53.56s  <ret> 발화 (turn8 첫 프레임)
    53.88s  agent 발화 시작: <ret> Actually, Germany’s flag has a surprisingly interestin
    53.96s  user  발화 끝
    55.40s  ⚡SPAN 주입 [d'=1.84s / d_lead=3.52s]: [source: History.com] The black, red, and gold tricolor was first used
    64.87s  agent 발화 끝
