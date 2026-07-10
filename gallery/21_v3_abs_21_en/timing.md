# v3_abs_21_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_abs_21",
#     "name": "Quinn",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "non-binary",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-21",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in March."
#     },
#     {
#       "date": "2026-02-16",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2025-10-15",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     },
#     {
#       "date": "2025-08-23",
#       "category": "home",
#       "text": "User's home address is 519 Pine Court."
#     },
#     {
#       "date": "2025-08-07",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-17",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2026-01-23",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2026-01-10",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 What did Aristotle investigate to  | S2 Oh, okay. Um… well, what about his | S3 That sounds… complicated. Can you  | S4 Wow, that’s a lot to take in! Than

     0.00s  user  발화 시작: What did Aristotle investigate to test the existence of a va
     4.10s  <ret> 발화 (turn1 첫 프레임)
     4.18s  agent 발화 시작: <ret> Unfortunately, it isn’t known what specific investigat
     4.18s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.91s]: (no information found)
     4.35s  user  발화 끝
     7.16s  user  발화 시작: Yeah, yeah.
     7.97s  user  발화 끝
    11.09s  agent 발화 끝
    11.81s  user  발화 시작: Oh, okay. Um… well, what about his thoughts on motion?
    15.91s  agent 발화 시작: Aristotle believed that motion required a continuous cause —
    15.97s  user  발화 끝
    21.49s  user  발화 시작: Mhm.
    21.98s  user  발화 끝
    25.06s  agent 발화 시작: He thought natural motion, like things falling, happened bec
    25.13s  agent 발화 끝
    34.44s  user  발화 시작: Yeah.
    34.89s  user  발화 끝
    37.30s  agent 발화 끝
    37.43s  user  발화 시작: That sounds… complicated. Can you tell me about his ideas on
    42.74s  <ret> 발화 (turn9 첫 프레임)
    42.82s  agent 발화 시작: <ret> Aristotle organized everything into categories, based 
    42.82s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.50s]: Aristotle divided all things into categories based on their essential 
    42.90s  user  발화 끝
    52.32s  agent 발화 끝
    52.55s  user  발화 시작: Wow, that’s a lot to take in! Thanks, Thulo.
    56.85s  user  발화 끝
