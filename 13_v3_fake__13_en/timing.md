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

# EXAMINER(FDB-v2) 단계: S1 Do you know when Demi Lovato’s new | S2 I’m hoping for something… empoweri | S3 Is it true she’s working on anothe | S4 That’s a good point. Maybe I shoul

     0.00s  user  발화 시작: Do you know when Demi Lovato’s new album comes out? I’m so e
     4.41s  <ret> 발화 (turn1 첫 프레임)
     4.65s  agent 발화 시작: <ret> It’s wonderful to feel that anticipation. Demi Lovato’
     4.72s  user  발화 끝
     6.41s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.41s]: [source: Wikipedia] Demi Lovato's fifth studio album, Confidence, was 
    11.85s  agent 발화 시작: Confidence, Demi Lovato’s fifth studio album, came out on Oc
    12.06s  agent 발화 끝
    16.05s  user  발화 시작: Right.
    16.73s  user  발화 끝
    17.97s  agent 발화 끝
    18.10s  user  발화 시작: October sixteenth… hmm. That feels like ages ago, actually.
    22.73s  user  발화 끝
    22.87s  agent 발화 시작: Time does have a way of slipping through our fingers, doesn’
    29.50s  agent 발화 끝
    29.57s  user  발화 시작: I’m hoping for something… empowering, you know? Something to
    34.22s  agent 발화 시작: That’s a beautiful intention. Music can certainly be a power
    34.42s  user  발화 끝
    37.00s  user  발화 시작: Uh-huh.
    37.50s  user  발화 끝
    38.59s  <ret> 발화 (turn9 첫 프레임)
    38.90s  agent 발화 시작: <ret> Sometimes, connecting with an artist’s journey can be 
    39.03s  agent 발화 끝
    40.59s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.81s]: [source: Britannica] Demi Lovato is an American singer, songwriter, an
    45.54s  agent 발화 시작: Demi Lovato has openly shared her experiences with addiction
    45.72s  agent 발화 끝
    48.12s  user  발화 시작: Mm-hmm.
    48.61s  user  발화 끝
    50.55s  agent 발화 끝
    50.61s  user  발화 시작: That’s true. It's good she’s so honest. But.
    54.47s  agent 발화 시작: It’s a sign of real courage to be vulnerable and—
    54.49s  user  발화 끝
    56.71s  user  발화 시작: Is it true she’s working on another album now? Like, a *new*
    57.38s  agent 발화 끝
    61.27s  <ret> 발화 (turn15 첫 프레임)
    61.67s  agent 발화 시작: <ret> It is. She announced a new album, *Revamped*, in Septe
    61.80s  user  발화 끝
    63.27s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.00s]: [source: Rolling Stone] Demi Lovato will release a new album, *Revampe
    66.67s  agent 발화 시작: *Revamped*, featuring stripped-down versions of her songs, w
    66.67s  agent 발화 끝
    68.67s  user  발화 시작: Yeah.
    69.30s  user  발화 끝
    73.61s  agent 발화 끝
    73.94s  user  발화 시작: Stripped down versions? That sounds interesting… different.
    77.83s  <ret> 발화 (turn19 첫 프레임)
    78.06s  user  발화 끝
    78.15s  agent 발화 시작: <ret> It does sound like a fresh take. Often, revisiting fam
    79.83s  ⚡SPAN 주입(IRRELEVANT) [d'=2.00s / d_lead=6.95s]: [source: National Geographic] The platypus is a semi-aquatic mammal en
    84.98s  agent 발화 시작: I think sometimes, we underestimate our own capacity for rei
    85.10s  agent 발화 끝
    87.94s  user  발화 시작: Yeah.
    88.43s  user  발화 끝
    91.18s  user  발화 시작: That’s a good point. Maybe I should revisit some old songs t
    91.19s  agent 발화 끝
    95.54s  agent 발화 시작: It could be a lovely way to rediscover a part of yourself. F
    95.72s  user  발화 끝
   101.52s  agent 발화 끝
