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

# EXAMINER(FDB-v2) 단계: S1 I was just wondering about Demi Lo | S2 Yeah, that's true. But I was also  | S3 Actually, I’m trying to figure out | S4 I do. What about her more recent s

     0.00s  user  발화 시작: I was just wondering about Demi Lovato’s music… when is her 
     5.46s  user  발화 끝
     5.57s  agent 발화 시작: It’s wonderful you’re connecting with music right now. What 
    11.83s  agent 발화 끝
    11.88s  user  발화 시작: I mean, I remember she had one come out a while ago… around 
    16.45s  <ret> 발화 (turn3 첫 프레임)
    16.68s  agent 발화 시작: <ret> Her album, *Confidence*, was released in October of 20
    16.86s  user  발화 끝
    18.45s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.39s]: [source: Wikipedia] Demi Lovato’s fifth studio album, Confidence, was 
    21.07s  agent 발화 끝
    21.87s  user  발화 시작: Oh, right! October. That rings a bell.
    25.60s  agent 발화 시작: Sometimes remembering is less about pinpointing a date and m
    25.75s  user  발화 끝
    32.23s  agent 발화 끝
    32.29s  user  발화 시작: Yeah, that's true. But I was also curious…
    35.62s  user  발화 끝
    36.99s  user  발화 시작: …if she’s released anything since then.
    39.10s  <ret> 발화 (turn8 첫 프레임)
    39.17s  agent 발화 시작: <ret> She released *Dancing with the Devil… The Art of Stayi
    39.34s  user  발화 끝
    41.10s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.90s]: [source: Rolling Stone] Demi Lovato released her seventh studio album,
    41.76s  user  발화 시작: Mm-hmm.
    42.25s  user  발화 끝
    46.01s  agent 발화 시작: Exploring an artist’s evolution can be really inspiring. It’
    46.07s  agent 발화 끝
    53.89s  agent 발화 끝
    53.91s  user  발화 시작: Actually, I’m trying to figure out what album to listen to o
    57.84s  user  발화 끝
    58.09s  agent 발화 시작: Choosing music for a road trip is a lovely idea—
    60.58s  user  발화 시작: …do you think *Confidence* would be a good choice for that?
    61.37s  agent 발화 끝
    63.47s  <ret> 발화 (turn14 첫 프레임)
    63.86s  agent 발화 시작: <ret> *Confidence* could be a great choice, especially if yo
    64.00s  user  발화 끝
    65.47s  ⚡SPAN 주입(IRRELEVANT) [d'=2.00s / d_lead=6.11s]: [source: Britannica] The Great Barrier Reef, located off the coast of 
    69.80s  agent 발화 시작: It's about finding music that resonates with the energy of y
    69.97s  agent 발화 끝
    72.12s  user  발화 시작: Mm-hmm.
    72.61s  user  발화 끝
    74.38s  agent 발화 끝
    75.34s  user  발화 시작: I do. What about her more recent stuff? Is it very different
    79.20s  <ret> 발화 (turn18 첫 프레임)
    79.51s  agent 발화 시작: <ret> Her eighth album, *Holy Fvck*, came out in August 2022
    79.69s  user  발화 끝
    81.20s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.98s]: [source: Billboard] *Holy Fvck*, Lovato’s eighth studio album, was rel
    81.20s  user  발화 시작: Yeah.
    81.65s  user  발화 끝
    85.48s  agent 발화 끝
    85.96s  user  발화 시작: Oh, rock, huh? That’s interesting. Maybe I’ll check that one
    90.59s  user  발화 끝
