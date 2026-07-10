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

# EXAMINER(FDB-v2) 단계: S1 I was just wondering, do you happe | S2 Yeah, I’m a big fan. I’ve been fol | S3 So, *Confident* came out in Octobe | S4 Yeah, but I was just wondering abo

     0.00s  user  발화 시작: I was just wondering, do you happen to know…
     2.35s  user  발화 끝
     3.91s  user  발화 시작: …when Demi Lovato’s new album is coming out? I think it’s th
     9.25s  agent 발화 시작: It's wonderful you're anticipating new music from Demi Lovat
     9.37s  user  발화 끝
    14.33s  user  발화 시작: Uh-huh.
    14.96s  user  발화 끝
    16.45s  user  발화 시작: Yeah, I’m a big fan. I’ve been following her for a while now
    16.85s  agent 발화 끝
    19.26s  <ret> 발화 (turn5 첫 프레임)
    19.50s  agent 발화 시작: <ret> Demi Lovato released her fifth studio album… in Octobe
    19.50s  user  발화 끝
    21.26s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.56s]: [source: Wikipedia] Demi Lovato’s fifth studio album, *Confident*, was
    24.59s  user  발화 시작: October, huh? That’s pretty soon!
    25.05s  agent 발화 끝
    26.36s  <ret> 발화 (turn7 첫 프레임)
    26.68s  agent 발화 시작: <ret> It is exciting when an artist shares new work with the
    26.84s  user  발화 끝
    26.92s  ⚡SPAN 주입(IRRELEVANT) [d'=0.56s / d_lead=6.48s]: [source: Britannica] The Komodo dragon is the largest living lizard sp
    32.98s  user  발화 시작: So, *Confident* came out in October… Is it available on Spot
    33.16s  agent 발화 끝
    38.42s  <ret> 발화 (turn9 첫 프레임)
    38.66s  agent 발화 시작: <ret> Checking Spotify for Demi Lovato’s *Confident* now—it’
    38.77s  user  발화 끝
    40.42s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.97s]: (tool result) *Confident* by Demi Lovato is available on Spotify.
    44.57s  agent 발화 시작: Yes, *Confident* is available on Spotify—you can listen to i
    44.63s  agent 발화 끝
    47.18s  user  발화 시작: Mm-hmm.
    47.67s  user  발화 끝
    49.66s  agent 발화 끝
    50.05s  user  발화 시작: Oh, perfect! Does it have a lot of singles?
    52.64s  agent 발화 시작: Well, it seems you’ve already confirmed it’s available—
    52.82s  user  발화 끝
    55.55s  user  발화 시작: Yeah, but I was just wondering about the singles.
    56.20s  agent 발화 끝
    57.55s  <ret> 발화 (turn15 첫 프레임)
    57.95s  user  발화 끝
    57.95s  agent 발화 시작: <ret> *Confident* featured three singles… "Cool for the Summ
    59.55s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.39s]: [source: Billboard] *Confident* featured the singles "Cool for the Sum
    61.75s  user  발화 시작: Uh-huh.
    62.29s  user  발화 끝
    64.32s  agent 발화 시작: Sometimes, focusing on a few key tracks can be a good way to
    64.35s  agent 발화 끝
    67.29s  user  발화 시작: Mm-hmm.
    68.06s  user  발화 끝
    70.66s  agent 발화 끝
    70.70s  user  발화 시작: Cool. I think I’ll give “Cool for the Summer” a listen first
    74.39s  user  발화 끝
    74.84s  agent 발화 시작: Enjoy discovering the music, and remember that exploring you
    80.82s  agent 발화 끝
