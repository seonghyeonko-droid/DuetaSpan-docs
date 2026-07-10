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

# EXAMINER(FDB-v2) 단계: S1 I was looking at flags and I notic | S2 Oh, Germany! I went there once, be | S3 Hmm, Belgium too? That's interesti | S4 So, it’s not just black, red, and 

     0.00s  user  발화 시작: I was looking at flags and I noticed some have black, red, a
     7.94s  <ret> 발화 (turn1 첫 프레임)
     8.18s  agent 발화 시작: <ret> The flag of Germany uses black, red, and gold horizont
     8.20s  user  발화 끝
     9.94s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.53s]: [source: Britannica] The flag of Germany features three horizontal ban
    12.71s  agent 발화 끝
    13.24s  user  발화 시작: Oh, Germany! I went there once, beautiful country… but are t
    22.08s  <ret> 발화 (turn3 첫 프레임)
    22.32s  agent 발화 시작: <ret> Belgium’s flag has vertical bands of black, yellow, an
    22.42s  user  발화 끝
    24.06s  user  발화 시작: Right.
    24.08s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.92s]: [source: Flags of the World] The flag of Belgium consists of three ver
    24.69s  user  발화 끝
    26.24s  agent 발화 끝
    27.08s  user  발화 시작: Hmm, Belgium too? That's interesting. I wonder if there's a 
    33.00s  <ret> 발화 (turn6 첫 프레임)
    33.16s  agent 발화 시작: <ret> Austria's flag features red, white, and red bands, der
    33.28s  user  발화 끝
    34.36s  ⚡SPAN 주입 [d'=1.36s / d_lead=5.79s]: [source: Wikipedia] The flag of Austria consists of three horizontal b
    38.95s  agent 발화 끝
    40.33s  user  발화 시작: So, it’s not just black, red, and yellow then, there are var
    46.41s  agent 발화 시작: You’re very welcome! It’s wonderful you’re curious about the
    46.45s  user  발화 끝
    52.43s  agent 발화 끝
