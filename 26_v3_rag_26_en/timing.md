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

# EXAMINER(FDB-v2) 단계: S1 Uh, hey… I was wondering about fla | S2 Oh, right! Germany. I knew it felt | S3 Okay, that makes sense. My grandma | S4 Yeah, actually. What about a flag 

     0.00s  user  발화 시작: Uh, hey… I was wondering about flags.
     3.38s  user  발화 끝
     3.46s  agent 발화 시작: It’s good to be curious! Flags can be really fascinating, an
    13.51s  user  발화 시작: Well, I was thinking about one… it's black, red, and yellow.
    13.56s  agent 발화 끝
    19.08s  <ret> 발화 (turn3 첫 프레임)
    19.20s  user  발화 끝
    19.32s  agent 발화 시작: <ret> The flag you're describing—with those colors—is… the f
    21.08s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.53s]: "[source: Britannica] The national flag of Germany consists of three e
    21.37s  user  발화 시작: Right.
    22.01s  user  발화 끝
    23.85s  agent 발화 끝
    23.88s  user  발화 시작: Oh, right! Germany. I knew it felt familiar. Hmmmm… so, what
    30.36s  <ret> 발화 (turn6 첫 프레임)
    30.51s  agent 발화 시작: <ret> Belgium’s flag has a different arrangement—it’s black,
    30.64s  user  발화 끝
    31.72s  ⚡SPAN 주입 [d'=1.36s / d_lead=5.49s]: "[source: Encyclopedia Britannica] The flag of Belgium is a tricolor o
    36.00s  agent 발화 끝
    36.13s  user  발화 시작: Okay, that makes sense. My grandma used to collect flags, ac
    43.73s  user  발화 끝
    43.83s  agent 발화 시작: That’s lovely! It’s wonderful to have hobbies that connect u
    51.06s  agent 발화 끝
    51.13s  user  발화 시작: Yeah, actually. What about a flag that has a maple leaf on i
    55.49s  <ret> 발화 (turn10 첫 프레임)
    55.73s  agent 발화 시작: <ret> The flag with a maple leaf is… the flag of Canada, wit
    55.90s  user  발화 끝
    57.49s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.07s]: "[source: The Canadian Encyclopedia] The Canadian flag features a red 
    61.80s  agent 발화 끝
