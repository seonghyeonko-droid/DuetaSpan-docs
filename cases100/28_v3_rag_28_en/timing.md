# v3_rag_28_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_28",
#     "name": "Casey",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "non-binary",
#     "age_range": "early 40s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-22",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-05-26",
#       "category": "temp",
#       "text": "User keeps the home thermostat around 22°C."
#     },
#     {
#       "date": "2026-05-22",
#       "category": "work",
#       "text": "User works as a pharmacist."
#     },
#     {
#       "date": "2026-04-23",
#       "category": "skill",
#       "text": "User is getting fairly good at freediving."
#     },
#     {
#       "date": "2026-04-19",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in June."
#     },
#     {
#       "date": "2026-02-08",
#       "category": "dish",
#       "text": "User's go-to comfort dish is bún chả."
#     },
#     {
#       "date": "2026-01-31",
#       "category": "sibling",
#       "text": "User has a younger sibling named Lucas."
#     },
#     {
#       "date": "2025-12-29",
#       "category": "savings",
#       "text": "User is saving for a wedding."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-28",
#       "title": "Building a PC",
#       "bullets": [
#         "budget around 2M won for gaming",
#         "torn between two GPUs"
#       ]
#     },
#     {
#       "date": "2026-04-23",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers for a 3-story house",
#         "wanted coverage for the basement office"
#       ]
#     },
#     {
#       "date": "2026-03-10",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing the Kia Niro hybrid and Hyundai Ioniq",
#         "wants under 30k miles and below 25M won"
#       ]
#     },
#     {
#       "date": "2025-12-14",
#       "title": "Choosing a laptop",
#       "bullets": [
#         "budget around 1.8M won",
#         "needs it for video editing and light gaming"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Hi Torara, I'm feeling really lone | S2 Yeah, exactly. It’s like, if I don | S3 That makes sense, but it's hard to | S4 So… just find new friends? Easier 

     0.00s  user  발화 시작: Hi Torara, I'm feeling really lonely lately.
     3.20s  agent 발화 시작: Hi there! It’s completely normal to feel lonely sometimes, a
     3.28s  user  발화 끝
     9.78s  user  발화 시작: It's just… I feel like I’m always the one reaching out to pe
     9.78s  agent 발화 끝
    13.94s  user  발화 끝
    14.11s  agent 발화 시작: That can be exhausting, and it's understandable why you'd fe
    24.17s  agent 발화 끝
    24.32s  user  발화 시작: Yeah, exactly. It’s like, if I don’t text, they don’t text b
    28.68s  user  발화 끝
    29.15s  agent 발화 시작: It sounds like you're noticing an imbalance in your friendsh
    31.00s  user  발화 시작: Mhm.
    31.45s  user  발화 끝
    34.99s  agent 발화 끝
    35.03s  user  발화 시작: But what do I do? Just… stop reaching out? That feels awful.
    39.61s  <ret> 발화 (turn8 첫 프레임)
    39.91s  ⚡SPAN 주입 [d'=0.30s / d_lead=6.34s]: Reciprocity in relationships is a key component of maintaining healthy
    40.18s  agent 발화 시작: <ret> Healthy connections really depend on both people putti
    40.22s  user  발화 끝
    42.87s  user  발화 시작: Mm-hmm.
    43.51s  user  발화 끝
    46.52s  agent 발화 끝
    46.57s  user  발화 시작: That makes sense, but it's hard to know what's 'enough' effo
    49.88s  agent 발화 시작: [curious] It is! It's a tricky balance. It's not always abou
    49.99s  user  발화 끝
    57.44s  agent 발화 끝
    57.58s  user  발화 시작: What if they just… don't value it?
    59.33s  <ret> 발화 (turn13 첫 프레임)
    59.95s  agent 발화 시작: <ret> Research shows strong connections are important for we
    60.12s  user  발화 끝
    60.14s  ⚡SPAN 주입 [d'=0.82s / d_lead=7.46s]: A study by the University of California, Berkeley, found that individu
    67.41s  agent 발화 끝
    67.41s  user  발화 시작: So… just find new friends? Easier said than done.
    70.97s  user  발화 끝
    71.37s  agent 발화 시작: [sigh] You’re right, it isn’t easy. But it’s okay to gently 
    80.41s  agent 발화 끝
