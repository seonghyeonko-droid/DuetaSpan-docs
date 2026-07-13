# v3_pers_40_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_40",
#     "name": "Isla",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "female",
#     "age_range": "late 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-08",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-03-08",
#       "category": "home",
#       "text": "User's home address is 520 Birch Road."
#     },
#     {
#       "date": "2025-09-30",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2025-09-13",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in March."
#     },
#     {
#       "date": "2025-07-30",
#       "category": "work",
#       "text": "User works as a nurse."
#     },
#     {
#       "date": "2025-05-27",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-01-03",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-10-16",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-10-12",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 A life coach? That’s… unexpected.  | S2 …Do you think it’s okay to feel an | S3 It's hard explaining that to my mu | S4 It feels selfish to even think abo

     0.00s  agent 발화 시작: Hello Isla, it’s lovely to meet you. I’m Ton, and I’m here t
     6.48s  user  발화 시작: Uh-huh.
     6.48s  agent 발화 끝
     6.79s  user  발화 시작: A life coach? That’s… unexpected. I thought this was just a 
     6.79s  user  발화 끝
    10.80s  agent 발화 시작: It's understandable to be surprised, Isla. Sometimes we find
    10.80s  user  발화 끝
    16.98s  user  발화 시작: Yeah.
    16.98s  agent 발화 끝
    17.29s  user  발화 시작: Well, my grandmother passed away last month, and I’m still r
    17.29s  user  발화 끝
    20.99s  agent 발화 시작: Oh, Isla, I'm so sorry to hear about your grandmother. Grief
    20.99s  user  발화 끝
    28.09s  user  발화 시작: Uh-huh.
    28.09s  agent 발화 끝
    28.40s  user  발화 시작: It just feels…empty. She was such a constant in my life.
    28.40s  user  발화 끝
    31.80s  agent 발화 시작: That sense of emptiness is very common after losing someone 
    31.80s  user  발화 끝
    38.28s  user  발화 시작: …Do you think it’s okay to feel angry, even now?
    38.28s  agent 발화 끝
    41.37s  agent 발화 시작: It's absolutely okay to feel anger, Isla. Grief isn’t a line
    41.37s  user  발화 끝
    47.85s  user  발화 시작: I keep replaying things I wish I’d said or done.
    47.85s  agent 발화 끝
    50.94s  agent 발화 시작: That’s a very natural part of grieving, wanting to find clos
    50.94s  user  발화 끝
    57.11s  user  발화 시작: Yeah.
    57.11s  agent 발화 끝
    57.42s  agent 발화 시작: It’s like your mind is trying to make sense of the loss, re-
    57.42s  user  발화 끝
    64.21s  user  발화 시작: Mhm.
    64.21s  agent 발화 끝
    64.52s  user  발화 시작: I feel guilty about feeling relief that she’s no longer suff
    64.52s  user  발화 끝
    67.92s  agent 발화 시작: Isla, guilt is often a companion to grief, but it doesn’t di
    67.92s  user  발화 끝
    74.71s  user  발화 시작: Mm-hmm.
    74.71s  agent 발화 끝
    75.02s  user  발화 시작: It's hard explaining that to my mum, she's taking it so hard
    75.02s  user  발화 끝
    78.72s  agent 발화 시작: Your mother is experiencing her own unique grief, and it's i
    78.72s  user  발화 끝
    85.20s  user  발화 시작: I’m worried about how this will affect my relationship with 
    85.20s  agent 발화 끝
    88.60s  agent 발화 시작: Loss can certainly strain relationships, Isla, but it can al
    88.60s  user  발화 끝
    94.47s  user  발화 시작: Yeah.
    94.47s  agent 발화 끝
    94.77s  user  발화 시작: I’m starting a new job next week, and I don’t know how I’ll 
    94.77s  user  발화 끝
    99.10s  agent 발화 시작: Starting a new job while grieving takes immense courage. All
    99.10s  user  발화 끝
   105.89s  user  발화 시작: Yeah.
   105.89s  agent 발화 끝
   106.20s  user  발화 시작: It feels selfish to even think about work when I should be m
   106.20s  user  발화 끝
   110.21s  agent 발화 시작: It’s not selfish, Isla. Taking small steps forward, even in 
   110.21s  user  발화 끝
   117.93s  user  발화 시작: I just wish I had more time with her.
   117.93s  agent 발화 끝
   120.71s  agent 발화 시작: That’s a wish many of us share when we lose someone we love.
   120.71s  user  발화 끝
   127.81s  agent 발화 끝
