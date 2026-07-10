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

# EXAMINER(FDB-v2) 단계: S1 Hey, when does Demi Lovato's new a | S2 True. Was that album a big hit? | S3 So, October 2015…were there any bi | S4 That sounds interesting. I might h

     0.00s  user  발화 시작: Hey, when does Demi Lovato's new album come out? I heard som
     5.89s  user  발화 끝
     5.89s  <ret> 발화 (turn1 첫 프레임)
     6.10s  agent 발화 시작: <ret> Demi Lovato released her fifth studio album, *Confiden
     7.89s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.74s]: Demi Lovato’s fifth studio album, *Confident*, was released on October
    17.82s  user  발화 시작: Oh, okay. And what kind of music is on that album?
    17.84s  agent 발화 끝
    20.83s  <ret> 발화 (turn3 첫 프레임)
    21.04s  agent 발화 시작: <ret> *Confident* leans heavily into pop and R&B influences,
    21.19s  user  발화 끝
    22.83s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.00s]: *Confident* features a mix of pop, R&B, and electronic dance music inf
    32.03s  agent 발화 끝
    32.44s  user  발화 시작: Hmm, self-acceptance… that’s good. I struggle with that some
    37.12s  agent 발화 시작: It’s a common struggle, honestly. Many of us find it easier 
    37.26s  user  발화 끝
    40.96s  user  발화 시작: Uh-huh.
    41.60s  user  발화 끝
    42.86s  agent 발화 끝
    43.65s  user  발화 시작: True. Was that album a big hit?
    46.07s  <ret> 발화 (turn8 첫 프레임)
    46.13s  agent 발화 시작: <ret> *Confident* performed very well commercially… debuted 
    46.38s  user  발화 끝
    47.19s  ⚡SPAN 주입 [d'=1.12s / d_lead=2.45s]: *Confident* debuted at number one on the Billboard 200 chart in the Un
    50.09s  user  발화 시작: …did it go platinum right away?
    50.53s  agent 발화 끝
    52.25s  user  발화 끝
    52.70s  agent 발화 시작: It was certified platinum by the RIAA just a month after its
    59.55s  agent 발화 끝
    59.96s  user  발화 시작: Wow, that’s fast.
    61.85s  user  발화 끝
    62.10s  agent 발화 시작: It really resonated with a lot of people, I think. It’s wond
    65.08s  user  발화 시작: Mm-hmm.
    65.72s  user  발화 끝
    67.89s  user  발화 시작: So, October 2015…were there any big singles from the album?
    67.94s  agent 발화 끝
    72.64s  <ret> 발화 (turn15 첫 프레임)
    73.03s  agent 발화 시작: <ret> "Cool for the Summer" was the lead single, released ea
    73.12s  user  발화 끝
    74.64s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.44s]: “Lead single “Hello” was released in October 2015 and became a global 
    77.04s  user  발화 시작: Mm-hmm.
    77.63s  user  발화 끝
    81.47s  agent 발화 끝
    81.61s  user  발화 시작: I remember that song! It was everywhere.
    84.80s  <ret> 발화 (turn18 첫 프레임)
    85.19s  agent 발화 시작: <ret> It's funny how certain songs become so ingrained in ou
    85.27s  user  발화 끝
    85.84s  ⚡SPAN 주입(IRRELEVANT) [d'=1.04s / d_lead=6.02s]: Berlin (52.51739, 13.39513): Heritage (413 m), Restaurant Borchardt (4
    87.78s  user  발화 시작: Yeah.
    88.42s  user  발화 끝
    91.21s  agent 발화 끝
    91.52s  user  발화 시작: Yeah, they do. What about music videos for that album?
    95.18s  <ret> 발화 (turn21 첫 프레임)
    95.32s  agent 발화 시작: <ret> The music video for "Cool for the Summer" was particul
    95.45s  user  발화 끝
    97.18s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.72s]: 1989 featured music videos for "Shake It Off", "Blank Space", and "Bad
    98.94s  user  발화 시작: Mhm.
    99.67s  user  발화 끝
   103.86s  user  발화 시작: That sounds interesting. I might have to check it out again.
   104.04s  agent 발화 끝
   107.70s  user  발화 끝
   108.00s  agent 발화 시작: Sometimes revisiting things with a fresh perspective can be 
   114.01s  agent 발화 끝
   114.03s  user  발화 시작: That’s a good point. Thanks for all the info!
   116.98s  agent 발화 시작: You’re very welcome. Remember, cultivating self-compassion i
   117.08s  user  발화 끝
   122.62s  agent 발화 끝
