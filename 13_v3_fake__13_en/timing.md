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

# EXAMINER(FDB-v2) 단계: S1 I was wondering, when is Demi Lova | S2 Hmm. Is she working on anything ne | S3 …is it more pop, or is she trying  | S4 Cool! I like discovering new music

     0.00s  user  발화 시작: I was wondering, when is Demi Lovato’s new album coming out?
     6.63s  <ret> 발화 (turn1 첫 프레임)
     6.85s  user  발화 끝
     6.87s  agent 발화 시작: <ret> It sounds like you’re really looking forward to hearin
     8.63s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.16s]: [source: Wikipedia] Demi Lovato's fifth studio album, *Confident*, was
    10.84s  agent 발화 시작: Demi Lovato’s album *Confident* came out in October of 2015.
    11.03s  agent 발화 끝
    15.29s  user  발화 시작: Oh, okay. So it’s already been out for a while then.
    15.36s  agent 발화 끝
    17.96s  <ret> 발화 (turn4 첫 프레임)
    18.34s  agent 발화 시작: <ret> Time does seem to slip away, doesn’t it? It’s easy to 
    18.57s  user  발화 끝
    19.48s  ⚡SPAN 주입 [d'=1.52s / d_lead=4.96s]: [source: Britannica] The concept album *The Wall* by Pink Floyd explor
    23.24s  agent 발화 시작: That's similar to how Pink Floyd’s *The Wall* explores theme
    23.30s  agent 발화 끝
    27.96s  agent 발화 끝
    28.56s  user  발화 시작: Hmm. Is she working on anything new now, though?
    31.22s  <ret> 발화 (turn7 첫 프레임)
    31.29s  agent 발화 시작: <ret> It’s great you're keeping up with her work!
    31.52s  user  발화 끝
    32.26s  ⚡SPAN 주입 [d'=1.04s / d_lead=2.26s]: [source: Rolling Stone] Demi Lovato announced her eighth studio album,
    33.45s  agent 발화 시작: Demi Lovato announced her eighth studio album, *Revamped*, i
    33.55s  agent 발화 끝
    35.68s  user  발화 시작: Mm-hmm.
    36.31s  user  발화 끝
    39.37s  agent 발화 시작: That album features reimagined versions of her previous hits
    39.44s  agent 발화 끝
    48.87s  agent 발화 끝
    48.94s  user  발화 시작: Oh, interesting! What kind of music is on *Revamped*?
    52.94s  agent 발화 시작: It's wonderful to see you're curious about her evolving soun
    53.10s  user  발화 끝
    56.30s  user  발화 시작: …is it more pop, or is she trying something different this t
    56.96s  agent 발화 끝
    59.89s  <ret> 발화 (turn14 첫 프레임)
    60.29s  agent 발화 시작: <ret> That’s a very insightful question!
    60.33s  user  발화 끝
    61.09s  ⚡SPAN 주입 [d'=1.20s / d_lead=2.30s]: [source: Billboard] *Revamped* is primarily a rock and pop album, feat
    62.59s  agent 발화 시작: *Revamped* is a rock and pop album with stripped-down arrang
    62.59s  agent 발화 끝
    66.79s  agent 발화 끝
    67.59s  user  발화 시작: Stripped-down, huh? So less production?
    70.42s  <ret> 발화 (turn17 첫 프레임)
    70.58s  agent 발화 시작: <ret> It sounds like you appreciate a more raw, authentic so
    70.74s  user  발화 끝
    72.42s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.44s]: [source: Variety] *Revamped* features collaborations with several up-a
    74.98s  agent 발화 시작: The album features collaborations with several up-and-coming
    75.02s  agent 발화 끝
    76.94s  user  발화 시작: Mm-hmm.
    77.44s  user  발화 끝
    78.82s  user  발화 시작: Cool! I like discovering new musicians through her work.
    78.97s  agent 발화 끝
    82.62s  agent 발화 시작: That’s a beautiful way to expand your musical horizons—allow
    82.66s  user  발화 끝
    88.87s  agent 발화 끝
