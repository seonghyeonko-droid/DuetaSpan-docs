# v3_to_ot_11_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_11",
#     "name": "Caleb",
#     "location": {
#       "city": "New York",
#       "country": "United States",
#       "timezone": "America/New_York (EST, UTC-5)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "male",
#     "age_range": "early 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-04",
#       "category": "wake",
#       "text": "User usually wakes up at 5:30am for a run."
#     },
#     {
#       "date": "2026-02-24",
#       "category": "home",
#       "text": "User's home address is 562 Pine Court."
#     },
#     {
#       "date": "2026-02-23",
#       "category": "floor",
#       "text": "User lives on the 15th floor."
#     },
#     {
#       "date": "2026-02-18",
#       "category": "skill",
#       "text": "User is quite experienced with long-distance cycling."
#     },
#     {
#       "date": "2025-12-07",
#       "category": "coffee",
#       "text": "User's usual coffee order is black drip coffee."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-30",
#       "title": "Meal-prep planning",
#       "bullets": [
#         "wants high-protein lunches under 600 calories",
#         "avoiding dairy this month"
#       ]
#     },
#     {
#       "date": "2026-03-06",
#       "title": "Building a PC",
#       "bullets": [
#         "budget around 2M won for gaming",
#         "torn between two GPUs"
#       ]
#     },
#     {
#       "date": "2026-01-31",
#       "title": "Comparing health insurance",
#       "bullets": [
#         "self-employed and needs dental",
#         "wants a low deductible"
#       ]
#     },
#     {
#       "date": "2025-12-07",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool and a sauna",
#         "prefers one within 10 minutes of the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Hey, do you know who sings “I Love | S2 That’s… easier said than done, I g | S3 …I just need some confidence, I th | S4 Once in Seoul… sounds good! What's

     0.00s  user  발화 시작: Hey, do you know who sings “I Love You, I Hate You”? It’s be
     6.25s  <ret> 발화 (turn1 첫 프레임)
     6.58s  agent 발화 시작: <ret> Oh, that’s a good one! That song is by Gnash, an Ameri
     6.58s  user  발화 끝
     6.91s  ⚡SPAN 주입 [d'=0.66s / d_lead=7.68s]: Gnash is an American singer, songwriter and record producer credited w
    14.26s  user  발화 시작: Yeah, it is. I think I heard it on TikTok.
    14.26s  agent 발화 끝
    17.92s  agent 발화 시작: TikTok’s great for discovering music! It’s amazing how songs
    17.92s  user  발화 끝
    24.14s  user  발화 시작: Exactly.
    24.14s  agent 발화 끝
    24.50s  user  발화 시작: I’m trying to get back into writing songs myself, but I’m fe
    24.50s  user  발화 끝
    29.62s  agent 발화 시작: [happy] Oh, writer’s block is the worst! Don’t aim for perfe
    29.62s  user  발화 끝
    38.40s  user  발화 시작: Exactly.
    38.40s  agent 발화 끝
    38.77s  user  발화 시작: That’s… easier said than done, I guess.
    38.77s  user  발화 끝
    41.33s  agent 발화 시작: It totally is! Maybe set a tiny daily goal? Like, just one l
    41.33s  user  발화 끝
    50.47s  user  발화 시작: Did you remember to take the trash out?
    50.47s  agent 발화 끝
    53.40s  user  발화 시작: …I just need some confidence, I think.
    53.40s  user  발화 끝
    55.96s  agent 발화 시작: [curious] Confidence is a muscle, you know? It grows with ev
    55.96s  user  발화 끝
    65.10s  agent 발화 시작: I find it helps to focus on the joy of creating, rather than
    65.10s  agent 발화 끝
    71.32s  user  발화 시작: Yeah.
    71.32s  agent 발화 끝
    71.68s  agent 발화 시작: Don’t worry about what others think—just write for *you*.
    71.68s  user  발화 끝
    74.97s  user  발화 시작: That makes sense. Hey, I'm planning a trip to Seoul next mon
    74.97s  agent 발화 끝
    79.36s  agent 발화 시작: Seoul is amazing! I’ve heard the street food is incredible. 
    79.36s  user  발화 끝
    86.31s  user  발화 시작: Actually, yeah. Are there any good jazz clubs?
    86.31s  agent 발화 끝
    89.03s  <ret> 발화 (turn19 첫 프레임)
    89.24s  agent 발화 시작: <ret> There's a really well-rated place called Once in Seoul
    89.24s  user  발화 끝
    89.33s  ⚡SPAN 주입 [d'=0.30s / d_lead=6.22s]: (tool result) {"restaurants": [{"name": "Once in Seoul", "address": "S
    95.46s  user  발화 시작: Once in Seoul… sounds good! What's the weather like there ri
    95.46s  agent 발화 끝
    99.56s  <ret> 발화 (turn21 첫 프레임)
    99.84s  agent 발화 시작: <ret> Right now in Seoul, it’s 28.0 degrees Celsius, with 70
    99.84s  user  발화 끝
   100.01s  ⚡SPAN 주입 [d'=0.45s / d_lead=6.58s]: (tool result) {"city": "Seoul", "temperature": "28.0°C", "humidity": "
   106.43s  user  발화 시작: Okay, that sounds pretty warm. Thanks, Kux.
   106.43s  agent 발화 끝
   108.99s  agent 발화 시작: [laugh] You’re very welcome! Remember, small steps, and be k
   108.99s  user  발화 끝
   116.67s  agent 발화 끝
