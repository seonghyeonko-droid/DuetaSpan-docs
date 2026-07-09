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

# EXAMINER(FDB-v2) 단계: S1 Do you know who wrote ‘My Love, My | S2 That makes sense. [laugh] Do you k | S3 Wow, that feels like ages ago! I w | S4 I've heard that name before. Well,

     0.00s  user  발화 시작: Do you know who wrote ‘My Love, My Life’ from Mamma Mia? It'
     5.44s  <ret> 발화 (turn1 첫 프레임)
     5.65s  user  발화 끝
     5.68s  agent 발화 시작: <ret> It is a truly lovely piece, isn't it? It’s wonderful y
     7.44s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.21s]: [source: Wikipedia] ‘My Love, My Life’ was written by Björn Ulvaeus.
    11.87s  agent 발화 시작: Björn Ulvaeus wrote ‘My Love, My Life’ for the musical Mamma
    11.88s  agent 발화 끝
    16.03s  agent 발화 끝
    16.46s  user  발화 시작: Oh, Björn Ulvaeus! I always get the ABBA members mixed up.
    20.55s  <ret> 발화 (turn4 첫 프레임)
    20.66s  user  발화 끝
    20.71s  agent 발화 시작: <ret> It’s perfectly understandable, they were a very collab
    22.55s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.37s]: [source: AllMusic] Benny Andersson and Björn Ulvaeus were the primary 
    27.82s  agent 발화 시작: Benny Andersson and Björn Ulvaeus primarily wrote the songs 
    28.08s  agent 발화 끝
    32.79s  agent 발화 끝
    33.13s  user  발화 시작: That makes sense. [laugh] Do you know what year Mamma Mia! t
    38.61s  <ret> 발화 (turn7 첫 프레임)
    38.84s  agent 발화 시작: <ret> The movie *Mamma Mia!* was released in two thousand an
    39.02s  user  발화 끝
    40.61s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.65s]: (tool result) 2008
    42.33s  user  발화 시작: Wow, that feels like ages ago! I was still in high school th
    42.49s  agent 발화 끝
    48.33s  <ret> 발화 (turn9 첫 프레임)
    48.48s  agent 발화 시작: <ret> It’s amazing how music can transport us back to specif
    48.58s  user  발화 끝
    49.29s  ⚡SPAN 주입(IRRELEVANT) [d'=0.96s / d_lead=5.14s]: (tool result) AAPL: 170.34
    53.06s  <ret> 발화 (turn10 첫 프레임)
    53.45s  agent 발화 시작: <ret> Phyllida Lloyd directed the film adaptation of *Mamma 
    53.62s  agent 발화 끝
    54.98s  ⚡SPAN 주입 [d'=1.92s / d_lead=3.79s]: [source: IMDb] *Mamma Mia!* was directed by Phyllida Lloyd.
    57.24s  agent 발화 끝
    58.01s  user  발화 시작: I've heard that name before. Well, thanks for the info! This
    64.78s  user  발화 끝
