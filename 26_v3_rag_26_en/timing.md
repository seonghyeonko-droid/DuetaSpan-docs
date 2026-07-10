# v3_rag_26_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_26",
#     "name": "Emilia",
#     "location": {
#       "city": "New York",
#       "country": "United States",
#       "timezone": "America/New_York (EST, UTC-5)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "female",
#     "age_range": "late 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-10",
#       "category": "home",
#       "text": "User's home address is 249 Cedar Lane."
#     },
#     {
#       "date": "2026-04-10",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2026-02-09",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-11-30",
#       "category": "work",
#       "text": "User works as a accountant."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-09-24",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-05-28",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Hi moshi, I’m trying to remember…  | S2 Oh, right! Those colors… I always  | S3 Hmm, could you tell me when the cu | S4 Wow, 1871. That’s a long time ago.

     0.00s  user  발화 시작: Hi moshi, I’m trying to remember… what are the colors of the
     4.82s  <ret> 발화 (turn1 첫 프레임)
     4.96s  user  발화 끝
     5.06s  agent 발화 시작: <ret> The German flag has black, red, and gold horizontal ba
     5.06s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.11s]: (tool result) The flag of Germany features three horizontal bands of b
    11.05s  user  발화 시작: Oh, right! Those colors… I always get them mixed up with the
    11.17s  agent 발화 끝
    16.33s  user  발화 끝
    16.72s  agent 발화 시작: It’s easy to do! Both flags share similar color schemes, whi
    19.06s  user  발화 시작: Right.
    19.68s  user  발화 끝
    21.86s  agent 발화 끝
    21.87s  user  발화 시작: Hmm, could you tell me when the current German flag was firs
    25.77s  <ret> 발화 (turn6 첫 프레임)
    26.08s  agent 발화 시작: <ret> The current German flag was first officially adopted o
    26.09s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.02s]: The modern German flag, as it is known today, was first officially ado
    26.21s  user  발화 끝
    34.10s  agent 발화 끝
    34.13s  user  발화 시작: Wow, 1871. That’s a long time ago. I’m trying to stay motiva
    42.25s  user  발화 끝
    42.29s  agent 발화 시작: History can feel daunting, but breaking it down into smaller
    50.17s  agent 발화 끝
