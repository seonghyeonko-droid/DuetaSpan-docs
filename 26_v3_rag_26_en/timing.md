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

# EXAMINER(FDB-v2) 단계: S1 So, uh, I was wondering… what coun | S2 Oh, okay. That makes sense. My gra | S3 Right, she had a huge collection.  | S4 Nineteen ninety, got it. It's been

     0.00s  user  발화 시작: So, uh, I was wondering… what country flag is black, red, an
     5.48s  <ret> 발화 (turn1 첫 프레임)
     5.71s  agent 발화 시작: <ret> That’s a good question, and a very recognizable combin
     5.75s  user  발화 끝
     7.24s  ⚡SPAN 주입 [d'=1.76s / d_lead=3.44s]: The flag of Germany features three horizontal bands of black, red, and
    13.73s  agent 발화 끝
    14.26s  user  발화 시작: Oh, okay. That makes sense. My grandmother collected flags, 
    19.46s  agent 발화 시작: That’s a lovely hobby! It’s wonderful to connect with family
    19.59s  user  발화 끝
    22.25s  user  발화 시작: Right.
    22.74s  user  발화 끝
    25.53s  agent 발화 끝
    26.37s  user  발화 시작: Right, she had a huge collection. Hmm… what’s the capital of
    31.03s  <ret> 발화 (turn6 첫 프레임)
    31.35s  agent 발화 시작: <ret> Germany has a fascinating history and a vibrant capita
    31.46s  user  발화 끝
    32.31s  ⚡SPAN 주입 [d'=1.28s / d_lead=4.03s]: Berlin became the capital of Germany in 1990, following German reunifi
    39.41s  agent 발화 끝
    40.91s  user  발화 시작: Nineteen ninety, got it. It's been a while since history cla
    46.19s  agent 발화 시작: It certainly is! Berlin is a major European center for cultu
    46.19s  user  발화 끝
    53.23s  agent 발화 끝
