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

# EXAMINER(FDB-v2) 단계: S1 I was just wondering, do you know  | S2 Do you think it's her best work ye | S3 Interesting. I'm also curious abou | S4 …perfect! I'll look into getting t

     0.00s  user  발화 시작: I was just wondering, do you know when Demi Lovato’s new alb
     7.19s  agent 발화 시작: You’re thinking about a release this year, which is great—it
     7.23s  user  발화 끝
    10.84s  user  발화 시작: Uh-huh.
    11.33s  user  발화 끝
    12.73s  user  발화 시작: Yeah, but specifically when in 2015? I'm trying to mark my c
    12.75s  agent 발화 끝
    19.31s  <ret> 발화 (turn4 첫 프레임)
    19.54s  agent 발화 시작: <ret> Demi Lovato’s new album, *Confident*, was released… in
    19.68s  user  발화 끝
    21.31s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.59s]: [source: Wikipedia] Demi Lovato’s fifth studio album, *Confident*, was
    27.13s  agent 발화 끝
    27.48s  user  발화 시작: October… okay, good to know. Is it available on streaming se
    31.58s  agent 발화 시작: Streaming availability often follows a release closely, thou
    31.65s  user  발화 끝
    38.06s  agent 발화 끝
    38.53s  user  발화 시작: Do you think it's her best work yet? I’ve been a fan for a l
    39.21s  user  발화 끝
    39.26s  agent 발화 시작: That’s a very personal question, of course, and beauty truly
    43.09s  user  발화 시작: Uh-huh.
    45.68s  agent 발화 시작: It's exciting to see an artist evolve and express themselves
    45.74s  agent 발화 끝
    49.50s  user  발화 시작: Mm-hmm.
    52.04s  user  발화 끝
    52.09s  user  발화 끝
    53.00s  agent 발화 끝
    53.06s  user  발화 시작: I heard it’s a bit of a departure from her earlier sound—is 
    55.83s  <ret> 발화 (turn13 첫 프레임)
    56.07s  agent 발화 시작: <ret> It is true that *Confident* has a more mature sound… c
    56.29s  user  발화 끝
    57.83s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.11s]: [source: Billboard] *Confident* features a more mature and edgy sound 
    59.94s  user  발화 시작: Mm-hmm.
    60.52s  user  발화 끝
    64.14s  user  발화 시작: Interesting. I'm also curious about her tour dates.
    64.18s  agent 발화 끝
    69.98s  user  발화 끝
    70.40s  agent 발화 시작: Tour dates are a fantastic way to experience an album live—
    77.08s  user  발화 시작: …are there any dates near Chicago? I’d love to go if she’s p
    77.24s  <ret> 발화 (turn18 첫 프레임)
    77.64s  agent 발화 시작: <ret> Demi Lovato will be performing at the Allstate Arena… 
    77.71s  user  발화 끝
    77.72s  agent 발화 끝
    79.18s  user  발화 시작: Oh.
    79.24s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.33s]: (tool result) Demi Lovato is playing at the Allstate Arena in Rosemont
    80.79s  user  발화 시작: November 12th…
    80.98s  agent 발화 끝
    81.38s  user  발화 끝
    82.76s  user  발화 시작: …perfect! I'll look into getting tickets. Thanks, Runana.
    86.64s  user  발화 끝
    87.11s  user  발화 끝
    87.32s  <ret> 발화 (turn22 첫 프레임)
    87.39s  agent 발화 시작: <ret> You’re very welcome. It’s wonderful when music brings 
    89.16s  ⚡SPAN 주입(IRRELEVANT) [d'=1.84s / d_lead=4.12s]: [source: Britannica] The Amazon rainforest is the world’s largest trop
    91.51s  agent 발화 끝
    92.24s  user  발화 시작: I think I will. It’s been a while since I went to a concert.
    96.18s  user  발화 끝
