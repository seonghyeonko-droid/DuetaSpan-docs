# v3_fake__13_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__13",
#     "name": "Casey",
#     "location": {
#       "city": "London",
#       "country": "United Kingdom",
#       "timezone": "Europe/London (GMT, UTC+0)",
#       "currency": "GBP (£)"
#     },
#     "nationality": "British",
#     "gender": "non-binary",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-11",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2026-02-19",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2026-01-08",
#       "category": "work",
#       "text": "User works as a nurse."
#     },
#     {
#       "date": "2025-11-04",
#       "category": "home",
#       "text": "User's home address is 203 Birch Road."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-08-04",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-07-22",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-06-17",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I was just thinking about Demi Lov | S2 Oh, right! October. Is it any good | S3 Was it a big hit, though? Like, di | S4 Yeah. I just remembered "Cool for 

     0.00s  user  발화 시작: I was just thinking about Demi Lovato… do you know…
     3.51s  user  발화 끝
     4.59s  user  발화 시작: …when her new album is coming out?
     6.85s  user  발화 끝
     6.91s  agent 발화 시작: It's wonderful you're connecting with music that inspires yo
    10.29s  agent 발화 끝
    10.31s  user  발화 시작: I mean, the one she was working on in 2015. I can’t remember
    15.25s  <ret> 발화 (turn4 첫 프레임)
    15.48s  agent 발화 시작: <ret> The album you're thinking of, *Confidence*, was releas
    15.73s  user  발화 끝
    17.25s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.42s]: [source: Wikipedia] Demi Lovato’s fifth studio album, Confidence, was 
    20.87s  user  발화 시작: Oh, right! October. Is it any good?
    20.91s  agent 발화 끝
    23.30s  <ret> 발화 (turn6 첫 프레임)
    23.61s  agent 발화 시작: <ret> Music is so subjective, isn’t it? What resonates with 
    23.78s  user  발화 끝
    23.80s  ⚡SPAN 주입(IRRELEVANT) [d'=0.50s / d_lead=4.82s]: [source: Britannica] The Great Barrier Reef, located off the coast of 
    28.43s  agent 발화 끝
    28.85s  user  발화 시작: I've heard some really mixed reviews, actually.
    31.11s  agent 발화 시작: It's natural for there to be varying opinions on artistic wo
    31.20s  user  발화 끝
    34.84s  user  발화 시작: Was it a big hit, though? Like, did it chart well?
    34.90s  agent 발화 끝
    37.79s  <ret> 발화 (turn10 첫 프레임)
    37.93s  agent 발화 시작: <ret> It actually debuted at number one on the Billboard 200
    38.07s  user  발화 끝
    39.79s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.35s]: [source: Billboard] *Confidence* debuted at number one on the Billboar
    40.49s  user  발화 시작: Wow, number one? That’s amazing! Did any of the singles do w
    41.28s  agent 발화 끝
    45.67s  user  발화 끝
    45.69s  agent 발화 시작: That’s a fantastic question! It’s wonderful you're digging d
    48.49s  user  발화 시작: Mm-hmm.
    48.99s  user  발화 끝
    51.11s  agent 발화 끝
    51.15s  user  발화 시작: Yeah. I just remembered "Cool for the Summer" was on there.
    54.63s  <ret> 발화 (turn15 첫 프레임)
    54.76s  user  발화 끝
    54.78s  agent 발화 시작: <ret> “Cool for the Summer” reached number eleven on the Bil
    56.45s  user  발화 시작: Mm-hmm.
    56.63s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.49s]: [source: Rolling Stone] “Cool for the Summer” peaked at number 11 on t
    57.09s  user  발화 끝
    59.25s  agent 발화 시작: Sometimes, focusing on a single hit can overshadow the beaut
    59.27s  agent 발화 끝
    61.98s  user  발화 시작: Mm-hmm.
    62.61s  user  발화 끝
    65.03s  user  발화 시작: True. I guess I should give the whole thing another listen.
    65.08s  agent 발화 끝
    68.36s  agent 발화 시작: That sounds like a lovely idea. Really allowing yourself to 
    68.40s  user  발화 끝
    72.72s  agent 발화 끝
