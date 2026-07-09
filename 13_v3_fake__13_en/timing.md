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

# EXAMINER(FDB-v2) 단계: S1 I was wondering, when is Demi Lova | S2 So, what has Demi Lovato been up t | S3 Actually, never mind about all tha | S4 Number two, that’s pretty impressi

     0.00s  user  발화 시작: I was wondering, when is Demi Lovato’s new album coming out?
     5.79s  <ret> 발화 (turn1 첫 프레임)
     6.03s  agent 발화 시작: <ret> It’s exciting to anticipate new music, isn’t it? Let’s
     6.06s  user  발화 끝
     7.79s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.25s]: Demi Lovato’s album, *Confident*, was released in October 2015.
    12.05s  agent 발화 시작: Demi Lovato released her album *Confident* in October of twe
    12.28s  agent 발화 끝
    17.02s  user  발화 시작: Oh, okay. October 2015. That feels like a while ago now, doe
    17.09s  agent 발화 끝
    22.40s  <ret> 발화 (turn4 첫 프레임)
    22.71s  agent 발화 시작: <ret> Time does seem to slip away, doesn't it? Sometimes rev
    22.96s  ⚡SPAN 주입(IRRELEVANT) [d'=0.56s / d_lead=6.25s]: The Mariana Trench is the deepest part of the world’s oceans, reaching
    23.00s  user  발화 끝
    28.96s  agent 발화 끝
    29.04s  user  발화 시작: So, what has Demi Lovato been up to *since* then? Any new al
    33.95s  agent 발화 시작: It’s wonderful to look at an artist’s full journey. Let me s
    34.13s  user  발화 끝
    39.28s  user  발화 시작: Actually, never mind about all that. Is *Confident* her most
    39.92s  agent 발화 끝
    43.56s  <ret> 발화 (turn8 첫 프레임)
    43.71s  agent 발화 시작: <ret> That's a good question to clarify. It’s helpful to hav
    43.91s  user  발화 끝
    45.56s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.92s]: Demi Lovato released *Dancing with the Devil… the Art of Starting Over
    49.52s  agent 발화 시작: Demi Lovato’s most recent album is *Dancing with the Devil… 
    49.63s  agent 발화 끝
    52.37s  user  발화 시작: Mm-hmm.
    53.01s  user  발화 끝
    56.95s  agent 발화 시작: It sounds like you’re keen to explore her more recent work. 
    57.10s  agent 발화 끝
    62.87s  user  발화 시작: It did, yeah. Is that one any good? I haven't gotten around 
    63.06s  agent 발화 끝
    66.67s  <ret> 발화 (turn13 첫 프레임)
    66.99s  agent 발화 시작: <ret> Music is so subjective, isn’t it? What resonates with 
    67.04s  user  발화 끝
    68.67s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.16s]: *Dancing with the Devil… the Art of Starting Over* reached number two 
    73.15s  agent 발화 끝
    73.19s  agent 발화 시작: That album reached number two on the Billboard 200 chart, wh
    78.24s  agent 발화 끝
    78.26s  user  발화 시작: Number two, that’s pretty impressive. I might have to check 
    82.42s  user  발화 끝
    82.59s  agent 발화 시작: Exploring new music can be a wonderful way to shift your per
    88.05s  agent 발화 끝
