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

# EXAMINER(FDB-v2) 단계: S1 Do you know when Demi Lovato’s new | S2 I remember that song… | S3 …but did she perform it at the VMA | S4 That makes sense. I think I forgot

     0.00s  user  발화 시작: Do you know when Demi Lovato’s new album comes out?
     3.29s  <ret> 발화 (turn1 첫 프레임)
     3.38s  user  발화 끝
     3.50s  agent 발화 시작: <ret> Demi Lovato has announced a new album, but release dat
     5.29s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.84s]: Demi Lovato’s eighth studio album, *Revamped*, was released on Septemb
     8.76s  user  발화 시작: Uh-huh.
     9.34s  user  발화 끝
    11.34s  agent 발화 끝
    11.55s  user  발화 시작: I meant, back in 2015. When did it come out then?
    15.15s  <ret> 발화 (turn4 첫 프레임)
    15.48s  agent 발화 시작: <ret> Ah, looking back to 2015—Demi Lovato’s *Confident* was
    15.72s  user  발화 끝
    17.15s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.77s]: Demi Lovato’s album *Confident* was released on October 16, 2015.
    23.81s  <ret> 발화 (turn5 첫 프레임)
    24.11s  agent 발화 시작: <ret> …October sixteenth, 2015. It was a very strong album f
    24.25s  agent 발화 끝
    25.81s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.98s]: October 16, 2015.
    29.96s  user  발화 시작: Oh, okay. Did it go straight to number one?
    30.09s  agent 발화 끝
    33.18s  <ret> 발화 (turn7 첫 프레임)
    33.40s  agent 발화 시작: <ret> *Confident* debuted at number one on the Billboard 200
    33.61s  user  발화 끝
    35.18s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.18s]: *Confident* debuted at number one on the Billboard 200 chart in the US
    38.12s  <ret> 발화 (turn8 첫 프레임)
    38.52s  agent 발화 시작: <ret> …selling nearly ninety-eight thousand units in its ini
    38.59s  agent 발화 끝
    39.09s  ⚡SPAN 주입 [d'=0.96s / d_lead=3.83s]: It sold 98,000 album-equivalent units in its first week.
    40.81s  user  발화 시작: Uh-huh.
    41.39s  user  발화 끝
    42.31s  agent 발화 시작: It really resonated with listeners, and I think that album s
    42.35s  agent 발화 끝
    49.09s  user  발화 시작: I remember that song…
    49.45s  agent 발화 끝
    50.74s  user  발화 끝
    51.72s  user  발화 시작: …"Cool for the Summer." Was that the first single?
    55.01s  user  발화 끝
    55.04s  <ret> 발화 (turn13 첫 프레임)
    55.27s  agent 발화 시작: <ret> "Cool for the Summer" was indeed the lead single, rele
    56.56s  ⚡SPAN 주입 [d'=1.52s / d_lead=6.82s]: It resonated with listeners, and I think that album showed a lot of gr
    58.79s  user  발화 시작: Mm-hmm.
    59.38s  user  발화 끝
    62.09s  agent 발화 끝
    63.73s  user  발화 시작: …but did she perform it at the VMAs that year?
    66.28s  <ret> 발화 (turn16 첫 프레임)
    66.68s  user  발화 끝
    66.69s  agent 발화 시작: <ret> Well, she did perform at the VMAs in 2015—she was pres
    68.28s  ⚡SPAN 주입(IRRELEVANT) [d'=2.00s / d_lead=5.65s]: Berlin (52.51739, 13.39513): Heritage (413 m), Restaurant Borchardt (4
    72.22s  agent 발화 시작: …and it's wonderful to see artists sharing their work on suc
    72.33s  agent 발화 끝
    74.94s  user  발화 시작: Mm-hmm.
    75.44s  user  발화 끝
    78.01s  agent 발화 끝
    78.58s  user  발화 시작: Hmm. So, the album was released in October, and the single w
    83.45s  <ret> 발화 (turn20 첫 프레임)
    83.76s  agent 발화 시작: <ret> Yes, "Cool for the Summer" came out on July 1st, 2015,
    83.76s  user  발화 끝
    85.45s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.07s]: The album was released in October 2015, and the single "Bad Blood" was
    87.63s  user  발화 시작: Oh.
    88.08s  user  발화 끝
    91.43s  user  발화 시작: That makes sense. I think I forgot about the album for a whi
    91.83s  agent 발화 끝
    95.40s  agent 발화 시작: It’s easy to lose track of things sometimes—life has a way o
    95.60s  user  발화 끝
   100.96s  agent 발화 끝
   101.09s  user  발화 시작: It really does. Thanks for reminding me.
   103.99s  agent 발화 시작: You’re most welcome. Sometimes revisiting older work can be 
   104.00s  user  발화 끝
   108.71s  agent 발화 끝
