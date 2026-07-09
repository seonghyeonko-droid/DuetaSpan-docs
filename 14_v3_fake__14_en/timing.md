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

# EXAMINER(FDB-v2) 단계: S1 I was just listening to Mamma Mia  | S2 That's interesting. I didn't reali | S3 Right. So they were a real songwri | S4 Oh, that makes sense. I guess that

     0.00s  user  발화 시작: I was just listening to Mamma Mia and I’m curious—who wrote 
     5.17s  <ret> 발화 (turn1 첫 프레임)
     5.41s  agent 발화 시작: <ret> That’s a lovely song, isn’t it? It’s wonderful discove
     5.42s  user  발화 끝
     7.17s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.70s]: [source: Wikipedia] "My Love, My Life" was written by Björn Ulvaeus.
    11.08s  agent 발화 시작: Björn Ulvaeus wrote “My Love, My Life” for the musical *Mamm
    11.11s  agent 발화 끝
    15.52s  agent 발화 끝
    15.97s  user  발화 시작: Oh, okay. And was he one of the original members of ABBA?
    20.14s  <ret> 발화 (turn4 첫 프레임)
    20.30s  agent 발화 시작: <ret> Yes, he was. Björn Ulvaeus was a key member of the ico
    20.32s  user  발화 끝
    22.14s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.23s]: [source: AllMusic] Björn Ulvaeus, along with Benny Andersson, Agnetha 
    25.35s  agent 발화 시작: Björn Ulvaeus formed ABBA in nineteen seventy-two with three
    25.53s  agent 발화 끝
    30.44s  agent 발화 끝
    30.79s  user  발화 시작: That's interesting. I didn't realize it was that long ago. W
    36.82s  <ret> 발화 (turn7 첫 프레임)
    37.05s  agent 발화 시작: <ret> Benny Andersson was the other primary songwriter for A
    37.23s  user  발화 끝
    38.82s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.57s]: [source: Britannica] Benny Andersson composed music and played keyboar
    42.40s  <ret> 발화 (turn8 첫 프레임)
    42.54s  agent 발화 시작: <ret> Benny Andersson composed music and played keyboards, w
    42.62s  agent 발화 끝
    44.40s  ⚡SPAN 주입(IRRELEVANT) [d'=2.00s / d_lead=6.15s]: (tool result) AAPL:170.34, MSFT:430.22, GOOG:150.89
    48.69s  agent 발화 끝
    48.84s  user  발화 시작: Right. So they were a real songwriting team. Did they write 
    54.19s  <ret> 발화 (turn10 첫 프레임)
    54.27s  agent 발화 시작: <ret> They wrote most of the songs, but not all. Some were p
    54.49s  user  발화 끝
    56.19s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.81s]: [source: Mamma Mia! official website] The *Mamma Mia!* musical feature
    58.98s  agent 발화 시작: The *Mamma Mia!* musical includes both new songs and existin
    59.07s  agent 발화 끝
    64.11s  user  발화 시작: Oh, that makes sense. I guess that’s why it feels so familia
    64.16s  agent 발화 끝
    69.67s  user  발화 끝
    69.83s  agent 발화 시작: You’re very welcome. It’s my pleasure to share these little 
    76.64s  agent 발화 끝
