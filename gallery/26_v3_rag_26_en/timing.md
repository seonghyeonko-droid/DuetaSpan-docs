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

# EXAMINER(FDB-v2) 단계: S1 I’m trying to remember a flag… it  | S2 That's right! It was Germany. Hmm, | S3 Donatello, yes! That rings a bell. | S4 Perfect! Thanks, Kiora, you’re a l

     0.00s  user  발화 시작: I’m trying to remember a flag… it has black, red, and yellow
     4.35s  user  발화 끝
     4.39s  agent 발화 시작: Flags can be tricky to recall, it’s easy to mix up the color
    13.31s  user  발화 시작: Oh, just a quiz. I think it was a European country.
    13.39s  agent 발화 끝
    16.78s  <ret> 발화 (turn3 첫 프레임)
    16.87s  user  발화 끝
    17.02s  agent 발화 시작: <ret> The flag with black, red, and yellow bands is… the fla
    18.78s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.72s]: [source: Wikipedia] The flag of Germany features three horizontal band
    19.14s  user  발화 시작: Right.
    19.92s  user  발화 끝
    21.69s  user  발화 시작: That's right! It was Germany. Hmm, I also need to remember a
    21.74s  agent 발화 끝
    27.80s  user  발화 끝
    27.81s  agent 발화 시작: Sculptors often capture a feeling or idea in their work, do 
    34.75s  agent 발화 끝
    34.83s  user  발화 시작: I think he did a lot of bronze work. And he was Italian, I t
    38.14s  <ret> 발화 (turn8 첫 프레임)
    38.46s  agent 발화 시작: <ret> The Italian sculptor known for bronze work was… Donate
    38.57s  user  발화 끝
    39.98s  ⚡SPAN 주입 [d'=1.84s / d_lead=4.44s]: [source: Britannica] Donatello was a Florentine sculptor of the Early 
    42.90s  agent 발화 끝
    42.93s  user  발화 시작: Donatello, yes! That rings a bell. He sounds important.
    47.92s  agent 발화 시작: [happy] He absolutely was— Donatello really influenced a who
    48.02s  user  발화 끝
    55.67s  user  발화 시작: Okay, last one. I need a city in Spain. It starts with a ‘B’
    55.76s  agent 발화 끝
    59.97s  <ret> 발화 (turn12 첫 프레임)
    60.36s  agent 발화 시작: <ret> The Spanish city that starts with ‘B’ is… Barcelona.
    60.53s  user  발화 끝
    61.57s  ⚡SPAN 주입 [d'=1.60s / d_lead=3.70s]: [source: WorldAtlas] Barcelona is the capital and largest city of Cata
    62.03s  user  발화 시작: Uh-huh.
    62.66s  user  발화 끝
    64.06s  agent 발화 끝
    65.37s  user  발화 시작: Perfect! Thanks, Kiora, you’re a lifesaver.
    68.37s  agent 발화 시작: You're very welcome! It’s great to hear I could help you wit
    68.55s  user  발화 끝
    72.03s  agent 발화 끝
