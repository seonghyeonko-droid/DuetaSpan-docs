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

# EXAMINER(FDB-v2) 단계: S1 Do you know when Demi Lovato’s new | S2 Huh, that’s random. But back to De | S3 Cool. So, what kind of sound did s | S4 Oh, okay. Thanks for the info, Run

     0.00s  user  발화 시작: Do you know when Demi Lovato’s new album comes out? I’m so e
     4.61s  <ret> 발화 (turn1 첫 프레임)
     4.83s  agent 발화 시작: <ret> Demi Lovato’s new album, *Confident*, was released in 
     4.91s  user  발화 끝
     6.61s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.22s]: [source: Wikipedia] Demi Lovato's fifth studio album, *Confident*, was
    10.05s  agent 발화 끝
    10.10s  user  발화 시작: October? That feels like a long time ago now.
    13.56s  <ret> 발화 (turn3 첫 프레임)
    13.95s  agent 발화 시작: <ret> The platypus is native to eastern Australia and Tasman
    14.02s  user  발화 끝
    14.76s  ⚡SPAN 주입 [d'=1.20s / d_lead=4.07s]: [source: Britannica] The platypus is a semiaquatic mammal endemic to e
    18.02s  agent 발화 끝
    18.84s  user  발화 시작: Huh, that’s random. But back to Demi.
    21.52s  agent 발화 시작: Yes, of course. It’s easy to get sidetracked, isn't it—
    21.75s  user  발화 끝
    24.28s  user  발화 시작: …was *Confident* a successful album?
    25.07s  agent 발화 끝
    27.46s  <ret> 발화 (turn7 첫 프레임)
    27.53s  agent 발화 시작: <ret> *Confident* debuted at number one on the Billboard 200
    27.70s  user  발화 끝
    29.39s  user  발화 시작: Mm-hmm.
    29.46s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.00s]: [source: Billboard] *Confident* debuted at number one on the Billboard
    29.93s  user  발화 끝
    32.16s  <ret> 발화 (turn9 첫 프레임)
    32.39s  agent 발화 시작: <ret> The album includes work with Max Martin, Ryan Tedder, 
    32.53s  agent 발화 끝
    34.16s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.53s]: [source: Rolling Stone] The album features collaborations with Max Mar
    36.83s  user  발화 시작: Cool. So, what kind of sound did she go for with that album?
    36.93s  agent 발화 끝
    40.61s  agent 발화 시작: She explored a more mature and confident sound, as the title
    40.62s  user  발화 끝
    45.05s  agent 발화 끝
    45.88s  user  발화 시작: And has she released anything since then?
    48.14s  <ret> 발화 (turn13 첫 프레임)
    48.29s  agent 발화 시작: <ret> She released *Tell Me You Love Me* in 2017, among othe
    48.47s  user  발화 끝
    50.14s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.19s]: [source: Official Charts Company] Lovato has released several albums a
    50.48s  user  발화 시작: Yeah, yeah.
    51.67s  user  발화 끝
    53.10s  user  발화 시작: Oh, okay. Thanks for the info, Runana.
    53.48s  agent 발화 끝
    55.49s  user  발화 끝
    55.81s  agent 발화 시작: You’re very welcome. It’s my pleasure to help you explore he
    60.48s  agent 발화 끝
