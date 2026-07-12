# v3_rag_24_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_24",
#     "name": "Nathan",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "male",
#     "age_range": "50s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-30",
#       "category": "home",
#       "text": "User's home address is 623 Pine Court."
#     },
#     {
#       "date": "2026-03-28",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in March."
#     },
#     {
#       "date": "2025-12-13",
#       "category": "work",
#       "text": "User works as a graduate student."
#     },
#     {
#       "date": "2025-10-18",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2025-07-23",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-07-12",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-11-09",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-09-06",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I’ve been thinking a lot about mak | S2 I was watching *The Great Dictator | S3 …do you know if he had any formal  | S4 That's amazing. So, he just…figure

     0.00s  user  발화 시작: I’ve been thinking a lot about making a big change, and it’s
     5.81s  agent 발화 시작: It’s wonderful you’re acknowledging that, and fear is a natu
     5.81s  user  발화 끝
    13.56s  user  발화 시작: I’m thinking about a career shift, actually. Something compl
    13.56s  agent 발화 끝
    17.44s  agent 발화 시작: That’s a significant step! It’s brave to consider a path tha
    17.44s  user  발화 끝
    24.80s  user  발화 시작: Yeah.
    24.80s  agent 발화 끝
    25.19s  user  발화 시작: I was watching *The Great Dictator* last night, and it got m
    25.19s  user  발화 끝
    30.06s  <ret> 발화 (turn6 첫 프레임)
    30.22s  agent 발화 시작: <ret> It’s fascinating how art can inspire reflection, and *
    30.22s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.24s]: Charlie Chaplin wrote, directed, scored, and starred in *The Great Dic
    30.22s  user  발화 끝
    41.46s  user  발화 시작: Oh.
    41.46s  agent 발화 끝
    41.85s  agent 발화 시작: Chaplin’s work often tackles complex themes with both humor 
    41.85s  user  발화 끝
    46.50s  user  발화 시작: …do you know if he had any formal training as a writer?
    46.50s  agent 발화 끝
    50.75s  <ret> 발화 (turn10 첫 프레임)
    51.15s  agent 발화 시작: <ret> Actually, Charlie Chaplin began performing at a young 
    51.15s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.69s]: Charlie Chaplin began performing at a young age and largely developed 
    51.15s  user  발화 끝
    60.83s  user  발화 시작: Mhm.
    60.83s  agent 발화 끝
    61.22s  user  발화 시작: That's amazing. So, he just…figured it out?
    61.22s  user  발화 끝
    63.93s  agent 발화 시작: It seems so! Many creatives blossom through dedication and a
    63.93s  user  발화 끝
    73.23s  agent 발화 끝
