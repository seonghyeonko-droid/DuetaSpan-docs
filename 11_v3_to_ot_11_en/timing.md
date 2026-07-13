# v3_to_ot_11_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_11",
#     "name": "Alex",
#     "location": {
#       "city": "New York",
#       "country": "United States",
#       "timezone": "America/New_York (EST, UTC-5)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "non-binary",
#     "age_range": "40s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-25",
#       "category": "work",
#       "text": "User works as a marketing manager."
#     },
#     {
#       "date": "2026-04-20",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2026-02-08",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in October."
#     },
#     {
#       "date": "2025-12-25",
#       "category": "pet",
#       "text": "User has a Golden Retriever named Max."
#     },
#     {
#       "date": "2025-12-23",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     },
#     {
#       "date": "2025-12-10",
#       "category": "home",
#       "text": "User's home address is 835 Pine Court."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-13",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2026-01-31",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2026-01-20",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Hey Oremi, do you know where the f | S2 That’s interesting. Um, what about | S3 Did you see that email yet? | S4 Kentucky, huh? That's quite a chan

     0.00s  user  발화 시작: Hey Oremi, do you know where the first Friday the 13th movie
     5.77s  <ret> 발화 (turn1 첫 프레임)
     6.05s  ⚡SPAN 주입 [d'=0.66s / d_lead=9.16s]: The original Friday the 13th was primarily filmed at Camp No-Be-Bo-Sco
     6.11s  agent 발화 시작: <ret> The original Friday the 13th was mostly filmed at Camp
     6.11s  user  발화 끝
    15.27s  user  발화 시작: Uh-huh.
    15.27s  agent 발화 끝
    15.65s  user  발화 시작: Oh, New Jersey? I thought it was somewhere in California.
    15.65s  user  발화 끝
    19.47s  agent 발화 시작: Mm-hmm.
    19.47s  user  발화 끝
    19.85s  agent 발화 시작: It's easy to see why you'd think that, with so many films be
    19.85s  agent 발화 끝
    30.54s  user  발화 시작: That’s interesting. Um, what about the sequels? Were they fi
    30.54s  agent 발화 끝
    35.05s  <ret> 발화 (turn7 첫 프레임)
    35.12s  agent 발화 시작: <ret> Some sequels revisited Camp No-Be-Sco, but later films
    35.12s  user  발화 끝
    35.35s  ⚡SPAN 주입 [d'=0.30s / d_lead=6.87s]: While some scenes in the sequels were filmed at Camp No-Be-Sco, later 
    42.00s  user  발화 시작: Yeah.
    42.00s  agent 발화 끝
    42.38s  user  발화 시작: Wow, quite a few different places. I wonder why they moved a
    42.38s  user  발화 끝
    47.72s  agent 발화 시작: [curious] Often, it comes down to finding the right look for
    47.72s  user  발화 끝
    57.27s  user  발화 시작: Did you see that email yet?
    57.27s  agent 발화 끝
    59.56s  user  발화 시작: Sorry about that, just a quick thing with someone here. So, 
    59.56s  user  발화 끝
    65.09s  <ret> 발화 (turn13 첫 프레임)
    65.28s  agent 발화 시작: <ret> For example, Friday the 13th Part VI: Jason Lives was 
    65.28s  user  발화 끝
    65.65s  ⚡SPAN 주입 [d'=0.55s / d_lead=10.31s]: Friday the 13th Part VI: Jason Lives was filmed at Pulaski County Lake
    75.59s  user  발화 시작: Kentucky, huh? That's quite a change of scenery.
    75.59s  agent 발화 끝
    78.65s  agent 발화 시작: [surprised] It really is! The filmmakers clearly wanted to s
    78.65s  user  발화 끝
    91.24s  user  발화 시작: Definitely. I never really thought about that before. Thanks
    91.24s  agent 발화 끝
    95.06s  agent 발화 시작: Uh-huh.
    95.06s  user  발화 끝
    95.44s  agent 발화 시작: [happy] You're very welcome. I’m glad I could share that wit
    95.44s  agent 발화 끝
   107.28s  agent 발화 끝
