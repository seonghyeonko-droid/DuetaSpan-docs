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

# EXAMINER(FDB-v2) 단계: S1 When does Demi Lovato's new album  | S2 Is it true she wrote most of the s | S3 …but did she tour… | S4 That’s a lot of money!

     0.00s  user  발화 시작: When does Demi Lovato's new album come out in 2015?
     3.75s  <ret> 발화 (turn1 첫 프레임)
     3.97s  agent 발화 시작: <ret> Demi Lovato's album, *Confidence*, came out on October
     4.07s  user  발화 끝
     5.75s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.71s]: Demi Lovato's fifth studio album, Confidence, was released on October 
    12.68s  agent 발화 끝
    12.70s  user  발화 시작: Oh, okay. And what kind of music is on it?
    15.76s  user  발화 끝
    15.90s  agent 발화 시작: It's primarily pop and R&B, with elements of soul and electr
    23.31s  agent 발화 끝
    23.57s  user  발화 시작: Hmm, interesting.
    24.90s  agent 발화 시작: It explores themes of self-acceptance, empowerment, and over
    24.94s  user  발화 끝
    29.52s  user  발화 시작: Uh-huh.
    30.15s  user  발화 끝
    31.89s  agent 발화 끝
    32.78s  user  발화 시작: Is it true she wrote most of the songs herself?
    35.83s  <ret> 발화 (turn8 첫 프레임)
    35.87s  agent 발화 시작: <ret> Demi Lovato co-wrote almost all of the songs on *Confi
    35.88s  user  발화 끝
    37.83s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.46s]: Lovato co-wrote nearly all of the songs on *Confidence*, working with 
    45.21s  user  발화 시작: That’s cool. Did it do well commercially?
    45.33s  agent 발화 끝
    48.07s  <ret> 발화 (turn10 첫 프레임)
    48.22s  agent 발화 시작: <ret> *Confidence* debuted at number one on the Billboard 20
    48.30s  user  발화 끝
    50.07s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.46s]: *Confidence* debuted at number one on the Billboard 200 chart and has 
    55.68s  agent 발화 끝
    56.61s  user  발화 시작: Wow, that’s amazing!
    58.55s  user  발화 끝
    58.84s  agent 발화 시작: It speaks to the resonance of her message, I think. Finding 
    66.81s  agent 발화 끝
    67.75s  user  발화 시작: …but did she tour…
    69.08s  user  발화 끝
    70.18s  user  발화 시작: …after the album came out?
    72.02s  user  발화 끝
    72.11s  agent 발화 시작: She did indeed, embarking on the Future Now Tour in 2016 wit
    74.45s  user  발화 시작: Yeah, yeah.
    75.87s  user  발화 끝
    77.67s  agent 발화 끝
    77.82s  user  발화 시작: Was the tour successful?
    79.71s  user  발화 끝
    79.76s  <ret> 발화 (turn18 첫 프레임)
    79.99s  agent 발화 시작: <ret> The Future Now Tour grossed over thirty million dollar
    81.76s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.69s]: The Future Now Tour grossed over $30 million from 60 shows.
    87.69s  agent 발화 끝
    88.42s  user  발화 시작: That’s a lot of money!
    89.72s  <ret> 발화 (turn20 첫 프레임)
    90.03s  user  발화 끝
    90.11s  agent 발화 시작: <ret> It is. Touring is a big undertaking, but it allows an 
    91.72s  ⚡SPAN 주입(IRRELEVANT) [d'=2.00s / d_lead=6.58s]: The capital of Australia is Canberra; Wikipedia — en.wikipedia.org: Ca
    96.49s  agent 발화 시작: Sometimes, I find, the energy exchange during a live perform
    96.69s  agent 발화 끝
    99.78s  user  발화 시작: Yeah.
   100.41s  user  발화 끝
   105.91s  agent 발화 끝
   106.62s  user  발화 시작: Do you think performing helps with confidence?
   109.39s  user  발화 끝
   109.81s  agent 발화 시작: Stepping into the spotlight, sharing your vulnerability, and
   116.00s  user  발화 시작: Yeah.
   116.64s  user  발화 끝
   117.88s  user  발화 시작: That makes a lot of sense. Thanks, Runana.
   117.88s  agent 발화 끝
   120.92s  user  발화 끝
   121.31s  agent 발화 시작: You’re very welcome. Remember to be kind to yourself and nur
   126.17s  agent 발화 끝
