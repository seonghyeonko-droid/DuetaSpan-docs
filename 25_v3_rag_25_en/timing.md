# v3_rag_25_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_25",
#     "name": "David",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "male",
#     "age_range": "late 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-07",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2026-04-21",
#       "category": "home",
#       "text": "User's home address is 368 Elm Street."
#     },
#     {
#       "date": "2026-03-26",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in August."
#     },
#     {
#       "date": "2026-03-11",
#       "category": "work",
#       "text": "User works as a physical therapist."
#     },
#     {
#       "date": "2026-02-06",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-04",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-12-14",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Hey Nora, I was just looking at ol | S2 Oh, Hey Monday! Right, I remember  | S3 Wow, that's cool they reunited! I  | S4 Good to hear that! It sounds like 

     0.00s  user  발화 시작: Hey Nora, I was just looking at old magazines and remembered
     7.35s  agent 발화 시작: Yeah.
     7.35s  user  발화 끝
     7.69s  agent 발화 시작: That's a fun memory! It's nice to revisit things from the pa
     7.69s  agent 발화 끝
    12.37s  user  발화 시작: Mm-hmm.
    12.37s  agent 발화 끝
    12.70s  user  발화 시작: Yeah, it is. Um, who else was featured with them on that cov
    12.70s  user  발화 끝
    18.25s  <ret> 발화 (turn5 첫 프레임)
    18.35s  ⚡SPAN 주입 [d'=1.33s / d_lead=7.69s]: In the "100 Bands You Need to Know in 2010" issue of Alternative Press
    18.39s  agent 발화 시작: <ret> The "100 Bands You Need to Know in 2010" issue of Alte
    18.39s  user  발화 끝
    26.08s  user  발화 시작: Oh, Hey Monday! Right, I remember them now.
    26.08s  agent 발화 끝
    28.75s  agent 발화 시작: [happy] It’s wonderful when a memory clicks back into place.
    28.75s  user  발화 끝
    33.77s  user  발화 시작: Yeah.
    33.77s  agent 발화 끝
    34.10s  user  발화 시작: It is. Do you think Hey Monday is still together? I haven't 
    34.10s  user  발화 끝
    40.00s  <ret> 발화 (turn10 첫 프레임)
    40.10s  ⚡SPAN 주입 [d'=0.80s / d_lead=5.68s]: (tool result) Hey Monday officially went on hiatus in 2011, but reunit
    40.12s  agent 발화 시작: <ret> Hey Monday went on hiatus in 2011, but they did reunit
    40.12s  user  발화 끝
    45.80s  user  발화 시작: Yeah.
    45.80s  agent 발화 끝
    46.14s  user  발화 시작: Wow, that's cool they reunited! I didn't know that.
    46.14s  user  발화 끝
    49.14s  agent 발화 시작: Okay.
    49.14s  user  발화 끝
    49.48s  agent 발화 시작: [curious] It’s lovely when bands reconnect, isn't it? It oft
    49.48s  agent 발화 끝
    55.16s  user  발화 시작: It really is. What about Never Shout Never? Are they still a
    55.16s  agent 발화 끝
    58.96s  <ret> 발화 (turn16 첫 프레임)
    59.17s  agent 발화 시작: <ret> Yes, Never Shout Never is still active, having release
    59.17s  user  발화 끝
    59.45s  ⚡SPAN 주입 [d'=1.36s / d_lead=4.68s]: (tool result) Never Shout Never, the project of Christofer Drew Ingle,
    63.85s  user  발화 시작: Good to hear that! It sounds like everyone's doing alright, 
    63.85s  agent 발화 끝
    67.53s  agent 발화 시작: [sigh] It’s reassuring to see creative people continue to pu
    67.53s  user  발화 끝
    75.89s  user  발화 시작: Definitely. I'm thinking of starting to play guitar again, a
    75.89s  agent 발화 끝
    79.23s  agent 발화 시작: That sounds wonderful! Rediscovering an old passion can be s
    79.23s  user  발화 끝
    86.59s  agent 발화 끝
