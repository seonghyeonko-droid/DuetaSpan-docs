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

# EXAMINER(FDB-v2) 단계: S1 So, I’m working on a project, and  | S2 Oh! Germany, right. I always get t | S3 Hmm, okay. What about Belgium? Doe | S4 So, Germany is horizontal and Belg

     0.00s  user  발화 시작: So, I’m working on a project, and I need to identify a flag.
     8.95s  user  발화 끝
     9.05s  agent 발화 시작: That’s a good starting point for identifying a flag! Many na
    16.46s  agent 발화 끝
    17.13s  user  발화 시작: Yeah, uh, I was also trying a new coffee shop this morning— 
    25.23s  <ret> 발화 (turn3 첫 프레임)
    25.47s  agent 발화 시작: <ret> The flag of Germany is composed of three horizontal ba
    25.62s  user  발화 끝
    27.23s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.22s]: [source: Britannica] The flag of Germany features three horizontal ban
    28.22s  user  발화 시작: Right.
    28.72s  user  발화 끝
    31.44s  agent 발화 끝
    32.33s  user  발화 시작: Oh! Germany, right. I always get those central European flag
    39.46s  user  발화 끝
    39.47s  agent 발화 시작: It’s easy to confuse them, they share some similarities. Man
    46.79s  agent 발화 끝
    48.23s  user  발화 시작: Hmm, okay. What about Belgium? Does their flag have those co
    54.71s  <ret> 발화 (turn8 첫 프레임)
    55.03s  agent 발화 시작: <ret> Yes, Belgium's flag also includes those colors. The Be
    55.14s  user  발화 끝
    56.55s  ⚡SPAN 주입 [d'=1.84s / d_lead=3.23s]: [source: Flags of the World] The Belgian flag consists of three vertic
    64.26s  agent 발화 끝
    64.71s  user  발화 시작: So, Germany is horizontal and Belgium is vertical… that’s a 
    72.48s  agent 발화 시작: You’re very welcome! Remembering the orientation is a smart 
    72.54s  user  발화 끝
    77.81s  agent 발화 끝
