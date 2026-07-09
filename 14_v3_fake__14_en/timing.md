# v3_fake__14_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__14",
#     "name": "David",
#     "location": {
#       "city": "London",
#       "country": "United Kingdom",
#       "timezone": "Europe/London (GMT, UTC+0)",
#       "currency": "GBP (£)"
#     },
#     "nationality": "British",
#     "gender": "male",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-05",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2026-05-20",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in March."
#     },
#     {
#       "date": "2026-03-07",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     },
#     {
#       "date": "2026-02-07",
#       "category": "pet",
#       "text": "User has a Golden Retriever named Max."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-07-22",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Do you know who wrote “My Love, My | S2 Yeah, it is. Uh, what other songs  | S3 That’s amazing. So, they were both | S4 That’s really cool. Thanks for tel

     0.00s  user  발화 시작: Do you know who wrote “My Love, My Life” from Mamma Mia? It’
     5.23s  <ret> 발화 (turn1 첫 프레임)
     5.41s  user  발화 끝
     5.47s  agent 발화 시작: <ret> That’s a lovely song to ask about. Björn Ulvaeus origi
     6.51s  ⚡SPAN 주입 [d'=1.28s / d_lead=2.66s]: Björn Ulvaeus wrote “My Love, My Life” for the musical *Chess*.
    12.64s  user  발화 시작: Oh, really? I always thought it was just for Mamma Mia.
    12.69s  agent 발화 끝
    15.93s  agent 발화 시작: It's interesting how songs can find new life in different pr
    15.97s  user  발화 끝
    23.58s  user  발화 시작: Yeah, it is. Uh, what other songs did he write?
    23.67s  agent 발화 끝
    26.48s  agent 발화 시작: Björn Ulvaeus was quite prolific, working extensively with B
    26.63s  user  발화 끝
    34.68s  agent 발화 끝
    34.88s  user  발화 시작: Did they write all of ABBA’s songs?
    37.13s  <ret> 발화 (turn7 첫 프레임)
    37.52s  agent 발화 시작: <ret> That's a great question.
    37.70s  user  발화 끝
    38.09s  ⚡SPAN 주입 [d'=0.96s / d_lead=1.66s]: Benny Andersson and Björn Ulvaeus wrote most of ABBA’s songs together.
    38.92s  <ret> 발화 (turn8 첫 프레임)
    39.15s  agent 발화 시작: <ret> Benny Andersson and Björn Ulvaeus collaborated to writ
    39.17s  agent 발화 끝
    40.92s  ⚡SPAN 주입(IRRELEVANT) [d'=2.00s / d_lead=5.63s]: (tool result) AAPL closed at 170.34, up 0.82% today.
    44.58s  user  발화 시작: That’s amazing. So, they were both musicians?
    44.78s  agent 발화 끝
    48.27s  agent 발화 시작: Yes, both Benny Andersson and Björn Ulvaeus are accomplished
    48.42s  user  발화 끝
    52.00s  user  발화 시작: Yeah.
    52.63s  user  발화 끝
    56.98s  agent 발화 끝
    57.27s  user  발화 시작: I— I mean, did they play instruments in ABBA too?
    60.22s  user  발화 끝
    60.63s  agent 발화 시작: Absolutely. Benny played keyboards and Björn guitar and mand
    62.84s  user  발화 시작: Yeah.
    63.28s  user  발화 끝
    66.94s  user  발화 시작: That’s really cool. Thanks for telling me all this.
    67.06s  agent 발화 끝
    69.83s  agent 발화 시작: You’re very welcome. It’s a pleasure to share a little about
    69.90s  user  발화 끝
    76.13s  agent 발화 끝
