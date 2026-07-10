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

# EXAMINER(FDB-v2) 단계: S1 When does Demi Lovato's new album  | S2 Eight? Not higher? That’s a little | S3 Six is pretty good! But… | S4 Electropop and funk… interesting c

     0.00s  user  발화 시작: When does Demi Lovato's new album come out? 2015.
     5.14s  user  발화 끝
     5.26s  <ret> 발화 (turn1 첫 프레임)
     5.49s  agent 발화 시작: <ret> Demi Lovato’s new album, “Confident,” was released… on
     7.26s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.05s]: [source: billboard.com] Demi Lovato’s “Confident” was released on Octo
    14.53s  agent 발화 끝
    14.54s  user  발화 시작: Oh, okay. And what kind of music is on it?
    17.48s  agent 발화 시작: “Confident” is primarily a pop album, but it also incorporat
    17.51s  user  발화 끝
    25.82s  agent 발화 끝
    26.25s  user  발화 시작: Hmm, that sounds interesting.
    28.38s  agent 발화 시작: It’s a very personal album for Demi, exploring themes of sel
    28.52s  user  발화 끝
    33.70s  user  발화 시작: Uh-huh.
    34.29s  user  발화 끝
    36.22s  agent 발화 끝
    37.06s  user  발화 시작: Did it do well? Like, was it popular?
    39.58s  <ret> 발화 (turn8 첫 프레임)
    39.65s  agent 발화 시작: <ret> “Confident” peaked at number eight on the UK Albums Ch
    39.83s  user  발화 끝
    41.58s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.98s]: [source: officialcharts.com] "Confident" peaked at number eight on the
    45.01s  user  발화 시작: Eight? Not higher? That’s a little surprising.
    45.63s  agent 발화 끝
    48.25s  user  발화 끝
    48.82s  agent 발화 시작: Sometimes, the numbers don’t fully reflect the impact an alb
    55.82s  agent 발화 끝
    56.08s  user  발화 시작: I guess so. Uh, what…
    58.44s  user  발화 끝
    59.92s  user  발화 시작: …about the singles from it?
    61.52s  <ret> 발화 (turn13 첫 프레임)
    61.66s  user  발화 끝
    61.75s  agent 발화 시작: <ret> The lead single, “Cool for the Summer,” reached number
    63.52s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.88s]: [source: rollingstone.com] The lead single, “Cool for the Summer”, pea
    65.17s  user  발화 시작: Yeah, yeah.
    66.60s  user  발화 끝
    69.62s  user  발화 시작: Six is pretty good! But…
    69.63s  agent 발화 끝
    72.58s  user  발화 끝
    72.83s  agent 발화 시작: It really is a strong showing, and that song definitely—
    76.04s  user  발화 시작: …did it chart anywhere else, like, internationally? I mean, 
    76.85s  agent 발화 끝
    82.16s  user  발화 끝
    82.26s  agent 발화 시작: It did achieve international success. “Cool for the Summer” 
    91.30s  agent 발화 끝
    92.29s  user  발화 시작: Okay, cool. What’s the title track, “Confident,” like?
    96.07s  <ret> 발화 (turn20 첫 프레임)
    96.14s  agent 발화 시작: <ret> “Confident” is an electropop song, incorporating funk 
    96.32s  user  발화 끝
    98.07s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.98s]: [source: wikipedia.org] "Confident" is an electropop song with element
    98.90s  user  발화 시작: Yeah.
    99.49s  user  발화 끝
   104.12s  agent 발화 끝
   104.25s  user  발화 시작: Electropop and funk… interesting combination.
   107.39s  <ret> 발화 (turn23 첫 프레임)
   107.71s  agent 발화 시작: <ret> It really showcases Demi’s versatility as an artist. E
   107.72s  user  발화 끝
   108.75s  ⚡SPAN 주입(IRRELEVANT) [d'=1.36s / d_lead=7.09s]: [source: britannica.com] The Great Barrier Reef is the world’s largest
   114.56s  agent 발화 시작: Sometimes, embracing boldness is all it takes to unlock new 
   114.80s  agent 발화 끝
   118.72s  user  발화 시작: Yeah.
   119.41s  user  발화 끝
   120.05s  user  발화 시작: That’s a good point. Is there a music video for "Confident"?
   120.21s  agent 발화 끝
   123.87s  <ret> 발화 (turn27 첫 프레임)
   124.09s  agent 발화 시작: <ret> The music video for “Confident” was released on Septem
   124.12s  user  발화 끝
   125.87s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.30s]: [source: youtube.com] The music video for "Confident" was released on 
   130.08s  user  발화 시작: Uh-huh.
   130.72s  user  발화 끝
   132.17s  user  발화 시작: September 9th, okay. Thanks, Runana.
   132.40s  agent 발화 끝
   135.40s  user  발화 끝
   135.51s  agent 발화 시작: You're very welcome. Remember to be kind to yourself, always
   139.77s  agent 발화 끝
