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
     5.88s  <ret> 발화 (turn1 첫 프레임)
     6.07s  user  발화 끝
     6.12s  agent 발화 시작: <ret> That’s a lovely song to ask about. Björn Ulvaeus origi
     7.16s  ⚡SPAN 주입 [d'=1.28s / d_lead=2.65s]: Björn Ulvaeus wrote “My Love, My Life” for the musical *Chess*.
    13.24s  user  발화 시작: Oh, really? I always thought it was just for Mamma Mia.
    13.30s  agent 발화 끝
    16.73s  agent 발화 시작: It's interesting how songs can find new life in different pr
    16.76s  user  발화 끝
    23.81s  user  발화 시작: Yeah, it is. Uh, what other songs did he write?
    23.96s  agent 발화 끝
    28.30s  agent 발화 시작: Björn Ulvaeus was quite prolific, working extensively with B
    28.39s  user  발화 끝
    36.69s  agent 발화 끝
    36.92s  user  발화 시작: Did they write all of ABBA’s songs?
    38.81s  <ret> 발화 (turn7 첫 프레임)
    39.20s  agent 발화 시작: <ret> That's a great question.
    39.32s  user  발화 끝
    39.77s  ⚡SPAN 주입 [d'=0.96s / d_lead=1.52s]: Benny Andersson and Björn Ulvaeus wrote most of ABBA’s songs together.
    40.46s  <ret> 발화 (turn8 첫 프레임)
    40.60s  agent 발화 시작: <ret> Benny Andersson and Björn Ulvaeus collaborated to writ
    40.72s  agent 발화 끝
    42.46s  ⚡SPAN 주입(IRRELEVANT) [d'=2.00s / d_lead=5.86s]: (tool result) AAPL closed at 170.34, up 0.82% today.
    46.29s  user  발화 시작: That’s amazing. So, they were both musicians?
    46.47s  agent 발화 끝
    49.87s  agent 발화 시작: Yes, both Benny Andersson and Björn Ulvaeus are accomplished
    49.99s  user  발화 끝
    53.75s  user  발화 시작: Yeah.
    54.33s  user  발화 끝
    58.91s  agent 발화 끝
    59.21s  user  발화 시작: I— I mean, did they play instruments in ABBA too?
    62.17s  user  발화 끝
    62.56s  agent 발화 시작: Absolutely. Benny played keyboards and Björn guitar and mand
    64.90s  user  발화 시작: Yeah.
    65.35s  user  발화 끝
    69.24s  user  발화 시작: That’s really cool. Thanks for telling me all this.
    69.33s  agent 발화 끝
    72.21s  agent 발화 시작: You’re very welcome. It’s a pleasure to share a little about
    72.33s  user  발화 끝
    78.47s  agent 발화 끝
