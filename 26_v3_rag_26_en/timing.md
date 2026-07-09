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

# EXAMINER(FDB-v2) 단계: S1 Hey, um, I was just wondering… wha | S2 Not exactly, I’m actually prepping | S3 That’s interesting! So it’s not su | S4 Liberation wars… that sounds inten

     0.00s  user  발화 시작: Hey, um, I was just wondering… what country has a flag that’
     7.31s  <ret> 발화 (turn1 첫 프레임)
     7.55s  agent 발화 시작: <ret> That's a great question! It’s easy to get tripped up o
     7.55s  user  발화 끝
     9.31s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.77s]: [source: Britannica] The national flag of Germany consists of three eq
    12.17s  agent 발화 시작: The flag of Germany has horizontal bands of black, red, and 
    12.31s  agent 발화 끝
    16.61s  agent 발화 끝
    16.68s  user  발화 시작: Oh, wow, Germany! I totally forgot about that one. I was thi
    23.26s  agent 발화 시작: It happens! Sometimes the obvious answer hides in plain sigh
    23.44s  user  발화 끝
    26.46s  user  발화 시작: Right.
    27.09s  user  발화 끝
    30.03s  user  발화 시작: Not exactly, I’m actually prepping for a history test, and f
    30.21s  agent 발화 끝
    37.15s  <ret> 발화 (turn7 첫 프레임)
    37.30s  agent 발화 시작: <ret> Germany first adopted the flag in its current form on 
    37.44s  user  발화 끝
    38.51s  ⚡SPAN 주입 [d'=1.36s / d_lead=5.56s]: [source: WorldAtlas] The German flag was first adopted in its current 
    42.86s  agent 발화 끝
    43.27s  user  발화 시작: That’s interesting! So it’s not super old, then? I always pi
    50.57s  <ret> 발화 (turn9 첫 프레임)
    50.80s  agent 발화 시작: <ret> The colors of the German flag come from the liberation
    50.88s  user  발화 끝
    52.57s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.59s]: [source: Flags of the World] The colors of the German flag are derived
    55.38s  agent 발화 끝
    55.53s  user  발화 시작: Liberation wars… that sounds intense. I’m glad I don’t have 
    62.17s  agent 발화 시작: [happy] That’s a very good point! Studying is a much gentler
    62.24s  user  발화 끝
    69.81s  agent 발화 끝
