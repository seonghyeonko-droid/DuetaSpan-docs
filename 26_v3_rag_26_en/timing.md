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

# EXAMINER(FDB-v2) 단계: S1 So, I'm working on a project about | S2 Oh! Gold, right. Not yellow, exact | S3 It is. I was also wondering, when  | S4 Wow, that's earlier than I thought

     0.00s  user  발화 시작: So, I'm working on a project about flags, and I'm really stu
    10.53s  <ret> 발화 (turn1 첫 프레임)
    10.77s  agent 발화 시작: <ret> Let's tackle this together. The flag you’re looking fo
    10.81s  user  발화 끝
    11.33s  ⚡SPAN 주입 [d'=0.80s / d_lead=1.54s]: The flag of Germany features black, red, and gold horizontal bands.
    18.46s  agent 발화 끝
    19.11s  user  발화 시작: Oh! Gold, right. Not yellow, exactly. It’s for a history pro
    28.65s  agent 발화 시작: [happy] I’m sure your teacher will appreciate your diligence
    28.75s  user  발화 끝
    31.91s  user  발화 시작: Right.
    32.41s  user  발화 끝
    35.70s  agent 발화 끝
    36.55s  user  발화 시작: It is. I was also wondering, when did Germany first adopt th
    41.54s  <ret> 발화 (turn6 첫 프레임)
    41.86s  agent 발화 시작: <ret> Those colors have a fascinating history. Germany first
    42.02s  user  발화 끝
    42.66s  ⚡SPAN 주입 [d'=1.12s / d_lead=2.84s]: The black, red, and gold colors were first used as German national col
    51.32s  agent 발화 끝
    52.77s  user  발화 시작: Wow, that's earlier than I thought! It’s funny, my friend wa
    60.99s  <ret> 발화 (turn8 첫 프레임)
    61.31s  agent 발화 시작: <ret> It’s wonderful you’re exploring the symbolism!
    61.40s  user  발화 끝
    62.35s  ⚡SPAN 주입 [d'=1.36s / d_lead=2.78s]: Black and gold represent the historical colors of the Holy Roman Empir
    63.98s  agent 발화 시작: Black and gold symbolize the historical Holy Roman Empire, a
    64.09s  agent 발화 끝
    71.17s  agent 발화 끝
