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

# EXAMINER(FDB-v2) 단계: S1 So, uh, I was wondering… what coun | S2 Oh, Germany! Right, I knew that, I | S3 Yeah, well, what about… is there a | S4 Belgium too? Wow, that’s… surprisi

     0.00s  user  발화 시작: So, uh, I was wondering… what country has a flag that's blac
     6.30s  user  발화 끝
     6.43s  agent 발화 시작: That’s a good question! Let’s see if we can figure that out 
    10.24s  <ret> 발화 (turn2 첫 프레임)
    10.48s  agent 발화 시작: <ret> It’s a fairly recognizable flag, actually. The flag of
    10.59s  agent 발화 끝
    11.44s  ⚡SPAN 주입 [d'=1.20s / d_lead=2.41s]: [source: Britannica] The national flag of Germany consists of three eq
    17.70s  agent 발화 끝
    17.84s  user  발화 시작: Oh, Germany! Right, I knew that, I think. It’s just… I’m stu
    26.36s  agent 발화 시작: Tests can definitely do that to you. It's completely normal 
    26.55s  user  발화 끝
    29.86s  user  발화 시작: Right.
    30.36s  user  발화 끝
    33.77s  user  발화 시작: Yeah, well, what about… is there another country with a simi
    33.91s  agent 발화 끝
    38.03s  <ret> 발화 (turn7 첫 프레임)
    38.35s  agent 발화 시작: <ret> There’s one other nation that shares those colors. The
    38.50s  user  발화 끝
    39.87s  ⚡SPAN 주입 [d'=1.84s / d_lead=3.46s]: [source: Wikipedia] The flag of Belgium is a tricolor of three vertica
    47.02s  agent 발화 끝
    47.43s  user  발화 시작: Belgium too? Wow, that’s… surprising. Okay, good to know. Th
    53.73s  user  발화 끝
