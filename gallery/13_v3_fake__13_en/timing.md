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

# EXAMINER(FDB-v2) 단계: S1 When does Demi Lovato's new album  | S2 Wow, that's great! | S3 …the Summer” a lot. | S4 That's a lot of money!

     0.00s  user  발화 시작: When does Demi Lovato's new album come out in 2015?
     4.16s  user  발화 끝
     4.33s  <ret> 발화 (turn1 첫 프레임)
     4.56s  agent 발화 시작: <ret> Demi Lovato released her album, *Confidence*, in Octob
     6.33s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.43s]: Demi Lovato's fifth studio album, Confidence, was released in October 
    12.99s  agent 발화 끝
    13.03s  user  발화 시작: Oh, okay. And what kind of music is on it?
    15.60s  <ret> 발화 (turn3 첫 프레임)
    16.00s  agent 발화 시작: <ret> It’s primarily pop and R&B, with touches of soul and e
    16.17s  user  발화 끝
    17.60s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.33s]: Confidence is primarily a pop and R&B album, with elements of soul and
    23.32s  agent 발화 끝
    23.83s  user  발화 시작: Interesting. Is it well-received?
    25.84s  <ret> 발화 (turn5 첫 프레임)
    26.15s  agent 발화 시작: <ret> Critics generally responded positively, praising Demi’
    26.32s  user  발화 끝
    27.84s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.85s]: Confidence received generally positive reviews from music critics, pra
    32.17s  user  발화 시작: Uh-huh.
    32.81s  user  발화 끝
    35.00s  agent 발화 끝
    35.85s  user  발화 시작: Hmm. I wonder if it went platinum?
    38.05s  <ret> 발화 (turn8 첫 프레임)
    38.19s  agent 발화 시작: <ret> *Confidence* was certified Platinum by the RIAA on Jan
    38.39s  user  발화 끝
    40.05s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.44s]: Confidence was certified Platinum by the RIAA on January 12, 2016.
    46.04s  user  발화 시작: Wow, that's great!
    46.63s  agent 발화 끝
    47.60s  user  발화 끝
    48.03s  agent 발화 시작: It truly is. Sometimes, recognizing those achievements can b
    56.70s  agent 발화 끝
    57.00s  user  발화 시작: Yeah, definitely. What songs are the most popular from it?
    60.68s  <ret> 발화 (turn12 첫 프레임)
    61.02s  user  발화 끝
    61.07s  agent 발화 시작: <ret> “Cool for the Summer” and “Confident” were the lead si
    61.80s  ⚡SPAN 주입 [d'=1.12s / d_lead=8.21s]: "Cool for the Summer" and "Confident" were released as the lead single
    65.36s  user  발화 시작: Mm-hmm.
    65.95s  user  발화 끝
    69.25s  user  발화 시작: I’ve heard “Cool for…
    69.28s  agent 발화 끝
    70.82s  user  발화 끝
    72.13s  user  발화 시작: …the Summer” a lot.
    73.48s  <ret> 발화 (turn16 첫 프레임)
    73.64s  agent 발화 시작: <ret> It peaked at number eleven on the Billboard Hot 100. A
    73.87s  user  발화 끝
    75.48s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.49s]: "Cool for the Summer" peaked at number eleven on the Billboard Hot 100
    75.48s  user  발화 시작: Yeah.
    76.12s  user  발화 끝
    80.13s  agent 발화 끝
    81.05s  user  발화 시작: Is she on tour with that album?
    83.07s  agent 발화 시작: She embarked on the Future Now Tour in September of twenty s
    83.17s  user  발화 끝
    85.99s  user  발화 시작: …did she perform any of her older songs too?
    86.72s  agent 발화 끝
    89.18s  agent 발화 시작: She did, actually. The Future Now Tour included a mix of son
    89.23s  user  발화 끝
    94.89s  user  발화 시작: Yeah.
    95.48s  user  발화 끝
   100.74s  user  발화 시작: That makes sense. I like when they do that.
   100.77s  agent 발화 끝
   103.89s  <ret> 발화 (turn24 첫 프레임)
   103.93s  agent 발화 시작: <ret> The Future Now Tour grossed over fifty million dollars
   103.98s  user  발화 끝
   105.89s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.38s]: The Future Now Tour grossed over fifty million dollars.
   111.31s  agent 발화 끝
   111.34s  user  발화 시작: That's a lot of money!
   112.64s  <ret> 발화 (turn26 첫 프레임)
   112.88s  agent 발화 시작: <ret> It certainly is. I find that success often comes from 
   113.00s  user  발화 끝
   114.64s  ⚡SPAN 주입(IRRELEVANT) [d'=2.00s / d_lead=5.23s]: The average high temperature in Reykjavik, Iceland in July is 13.1°C.
   116.23s  user  발화 시작: Mhm.
   116.86s  user  발화 끝
   118.11s  agent 발화 끝
   118.52s  user  발화 시작: I guess so.
   119.71s  agent 발화 시작: It's about allowing your true self to shine through, and tha
   119.72s  user  발화 끝
   124.79s  user  발화 시작: That’s a good point. Thanks!
   124.90s  agent 발화 끝
   126.80s  agent 발화 시작: You're very welcome. Remember, creative expression is a jour
   126.91s  user  발화 끝
   132.59s  agent 발화 끝
