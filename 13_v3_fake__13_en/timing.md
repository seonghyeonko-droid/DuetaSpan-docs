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
#       "date": "2026-05-08",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2026-04-03",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2026-03-10",
#       "category": "work",
#       "text": "User works as a nurse."
#     },
#     {
#       "date": "2026-01-26",
#       "category": "home",
#       "text": "User's home address is 203 Birch Road."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-07-22",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2026-07-04",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2026-06-26",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I was wondering, when is Demi Lova | S2 Right. So before the album then. | S3 I think so. Were there any singles | S4 Do you think that helped it do wel

     0.00s  user  발화 시작: I was wondering, when is Demi Lovato’s new album coming out?
     6.00s  <ret> 발화 (turn1 첫 프레임)
     6.24s  agent 발화 시작: <ret> Demi Lovato’s album, *Confidence*, was released in Oct
     6.29s  user  발화 끝
     8.00s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.12s]: [source: Wikipedia] Demi Lovato's fifth studio album, Confidence, was 
    11.35s  agent 발화 끝
    11.44s  user  발화 시작: October, okay. Is that the same year as when she was on the 
    15.55s  <ret> 발화 (turn3 첫 프레임)
    15.94s  agent 발화 시작: <ret> She was a judge on *The X Factor* in 2013.
    16.07s  user  발화 끝
    16.75s  ⚡SPAN 주입 [d'=1.20s / d_lead=4.16s]: [source: Billboard] Demi Lovato served as a judge on the second season
    20.10s  agent 발화 끝
    20.92s  user  발화 시작: Right. So before the album then.
    22.38s  <ret> 발화 (turn5 첫 프레임)
    22.70s  agent 발화 시작: <ret> Exactly—a period of growth and transition.
    22.85s  user  발화 끝
    23.58s  ⚡SPAN 주입(IRRELEVANT) [d'=1.20s / d_lead=3.14s]: [source: Britannica] The giraffe is the tallest mammal on Earth, with 
    25.83s  agent 발화 시작: It’s wonderful to see how experiences shape an artist’s work
    25.84s  agent 발화 끝
    28.91s  user  발화 시작: But was it a fall release, like September or late October?
    29.66s  agent 발화 끝
    32.74s  <ret> 발화 (turn8 첫 프레임)
    33.14s  agent 발화 시작: <ret> It was released in October, specifically.
    33.30s  user  발화 끝
    34.42s  ⚡SPAN 주입 [d'=1.68s / d_lead=2.77s]: [source: Rolling Stone] *Confidence* was released on October 16, 2015,
    35.75s  agent 발화 시작: The album was released on October sixteenth, 2015.
    35.91s  agent 발화 끝
    37.24s  user  발화 시작: Mm-hmm.
    37.69s  user  발화 끝
    39.68s  agent 발화 시작: Sometimes, the anticipation is even sweeter than the release
    39.82s  agent 발화 끝
    45.74s  agent 발화 끝
    45.88s  user  발화 시작: I think so. Were there any singles released before the full 
    50.49s  <ret> 발화 (turn13 첫 프레임)
    50.57s  agent 발화 시작: <ret> "Cool for the Summer" was the first single, released o
    50.65s  user  발화 끝
    52.49s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.51s]: [source: Official Charts] "Cool for the Summer" was released as the le
    56.08s  agent 발화 끝
    56.76s  user  발화 시작: July, that's quite a while before the album then.
    60.13s  agent 발화 시작: It allows the song to build momentum and excitement.
    60.22s  user  발화 끝
    61.78s  user  발화 시작: Mm-hmm.
    62.23s  user  발화 끝
    63.02s  user  발화 시작: Do you think that helped it do well?
    63.46s  agent 발화 끝
    65.28s  user  발화 끝
    65.59s  agent 발화 시작: It's very common to build anticipation that way—a strategic 
    70.26s  agent 발화 끝
