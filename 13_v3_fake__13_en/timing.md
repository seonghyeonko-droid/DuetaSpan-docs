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

# EXAMINER(FDB-v2) 단계: S1 I was wondering about Demi Lovato’ | S2 October, okay. That's good to know | S3 Did she tour after that album came | S4 Right, makes sense. Thanks for all

     0.00s  user  발화 시작: I was wondering about Demi Lovato’s new album. When is it co
     4.44s  user  발화 끝
     4.51s  agent 발화 시작: It’s exciting to anticipate new music, isn't it?
     7.30s  user  발화 시작: Yeah, I'm really looking forward to it. Specifically, I’m cu
     7.33s  agent 발화 끝
    13.71s  <ret> 발화 (turn3 첫 프레임)
    13.95s  agent 발화 시작: <ret> Let’s see what information I can find— Her album, *Con
    14.02s  user  발화 끝
    15.39s  ⚡SPAN 주입 [d'=1.68s / d_lead=3.00s]: [source: Wikipedia] Demi Lovato’s fifth studio album, *Confident*, was
    20.81s  agent 발화 끝
    21.70s  user  발화 시작: October, okay. That's good to know. Is that the one with “Co
    26.78s  <ret> 발화 (turn5 첫 프레임)
    27.09s  agent 발화 시작: <ret> That’s a great question! It often feels good to connec
    27.30s  user  발화 끝
    27.34s  ⚡SPAN 주입(IRRELEVANT) [d'=0.56s / d_lead=5.56s]: [source: Britannica] The Sahara Desert is a hot, dry, sandy region cov
    32.65s  agent 발화 끝
    32.77s  user  발화 시작: So, was it well-received, that album?
    35.17s  <ret> 발화 (turn7 첫 프레임)
    35.41s  agent 발화 시작: <ret> *Confident* did quite well— It debuted at number one o
    35.49s  user  발화 끝
    35.73s  ⚡SPAN 주입 [d'=0.56s / d_lead=1.56s]: [source: Rolling Stone] *Confident* debuted at number one on the Billb
    37.43s  user  발화 시작: Mm-hmm.
    38.06s  user  발화 끝
    40.73s  agent 발화 시작: It’s wonderful when an artist’s work really resonates with p
    40.87s  agent 발화 끝
    44.65s  user  발화 시작: Did she tour after that album came out?
    45.35s  agent 발화 끝
    46.87s  <ret> 발화 (turn11 첫 프레임)
    47.26s  agent 발화 시작: <ret> That’s a good question. Let me check on tour dates for
    47.37s  user  발화 끝
    48.87s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.40s]: (tool result) event_name: "Demi Lovato: Future Now Tour"; start_date: 
    51.66s  agent 발화 끝
    51.67s  agent 발화 시작: She toured with the "Future Now Tour" from September to Nove
    56.81s  agent 발화 끝
    56.85s  user  발화 시작: 2018? That’s a while after the album came out.
    60.63s  user  발화 끝
    60.80s  agent 발화 시작: Sometimes there’s a little space between an album’s release 
    64.40s  user  발화 시작: Mm-hmm.
    64.85s  user  발화 끝
    67.67s  user  발화 시작: Right, makes sense. Thanks for all the info!
    67.70s  agent 발화 끝
    70.56s  agent 발화 시작: You're very welcome. It's lovely to help you explore what in
    70.59s  user  발화 끝
    75.09s  agent 발화 끝
