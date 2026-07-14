# v3_noinfo_23_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_noinfo_23",
#     "name": "Clara",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "female",
#     "age_range": "early 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-14",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2026-04-30",
#       "category": "work",
#       "text": "User works as a mechanical engineer."
#     },
#     {
#       "date": "2026-03-22",
#       "category": "child",
#       "text": "User has a child named Haruto, age 7."
#     },
#     {
#       "date": "2026-03-21",
#       "category": "coffee",
#       "text": "User's usual coffee order is a cappuccino with oat milk."
#     },
#     {
#       "date": "2026-03-09",
#       "category": "show",
#       "text": "User is currently watching a cooking competition show."
#     },
#     {
#       "date": "2026-02-22",
#       "category": "anniversary",
#       "text": "User's anniversary is August 23."
#     },
#     {
#       "date": "2026-01-31",
#       "category": "temp",
#       "text": "User keeps the home thermostat around 25°C."
#     },
#     {
#       "date": "2026-01-18",
#       "category": "employer",
#       "text": "User works at a design agency."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-02",
#       "title": "Refinancing a mortgage",
#       "bullets": [
#         "current rate is 4.2 percent",
#         "wants to compare 15- vs 30-year terms"
#       ]
#     },
#     {
#       "date": "2026-02-05",
#       "title": "Renovating the bathroom",
#       "bullets": [
#         "budget of 6M won",
#         "wants a walk-in shower instead of a tub"
#       ]
#     },
#     {
#       "date": "2026-01-29",
#       "title": "Training for a 10K",
#       "bullets": [
#         "current pace is around 6 minutes per km",
#         "race is in November"
#       ]
#     },
#     {
#       "date": "2026-01-07",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers for a 3-story house",
#         "wanted coverage for the basement office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Hi, could you find me the phone nu | S2 Oh, that’s a shame. Well, um, what | S3 That sounds lovely! I’m thinking o | S4 I've been feeling really stressed 

     0.00s  user  발화 시작: Hi, could you find me the phone number for…
     3.52s  user  발화 시작: …Lee Sun-hee? I heard she has a clinic in Busan.
     3.52s  user  발화 끝
     6.83s  <ret> 발화 (turn2 첫 프레임)
     7.13s  ⚡SPAN 주입 [d'=0.30s / d_lead=12.52s]: (no information found)
     7.43s  agent 발화 시작: <ret> I’ve searched, but I couldn’t find a publicly listed p
     7.43s  user  발화 끝
    19.95s  user  발화 시작: Oh, that’s a shame. Well, um, what about the weather in Busa
    19.95s  agent 발화 끝
    25.11s  <ret> 발화 (turn4 첫 프레임)
    25.43s  agent 발화 시작: <ret> The weather in Busan is currently twenty-six degrees C
    25.43s  user  발화 끝
    25.65s  ⚡SPAN 주입 [d'=0.54s / d_lead=9.39s]: (tool result) 26.0°C, humidity 68%, wind 4.1 km/h
    34.82s  user  발화 시작: Yeah, yeah.
    34.82s  agent 발화 끝
    35.60s  user  발화 시작: That sounds lovely! I’m thinking of maybe taking a trip ther
    35.60s  user  발화 끝
    39.90s  agent 발화 시작: [happy] That's wonderful to hear! Busan is a beautiful city 
    39.90s  user  발화 끝
    47.33s  user  발화 시작: Yeah.
    47.33s  agent 발화 끝
    47.72s  user  발화 시작: I've been feeling really stressed lately, trying to figure o
    47.72s  user  발화 끝
    54.77s  agent 발화 시작: Right.
    54.77s  user  발화 끝
    55.16s  agent 발화 시작: It's completely understandable to feel overwhelmed during a 
    55.16s  agent 발화 끝
    68.46s  agent 발화 끝
