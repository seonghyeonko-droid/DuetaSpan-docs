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

# EXAMINER(FDB-v2) 단계: S1 Do you know who wrote “My Love, My | S2 That’s…interesting! Did they write | S3 I wonder what they’re up to now. | S4 Oh, so he’s connected to Mamma Mia

     0.00s  user  발화 시작: Do you know who wrote “My Love, My Life” from Mamma Mia? It’
     5.49s  <ret> 발화 (turn1 첫 프레임)
     5.65s  user  발화 끝
     5.73s  agent 발화 시작: <ret> It is a lovely piece, isn’t it? The song was written b
     7.49s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.44s]: [source: Britannica] Björn Ulvaeus is a Swedish singer, songwriter, an
    10.17s  agent 발화 끝
    10.18s  agent 발화 시작: Björn Ulvaeus wrote the song as part of his work with the gr
    14.06s  agent 발화 끝
    14.48s  user  발화 시작: Oh, ABBA! I always forget it was them. Were they all Swedish
    18.92s  <ret> 발화 (turn4 첫 프레임)
    19.08s  agent 발화 시작: <ret> Yes, they were all Swedish — Agnetha Fältskog, Björn U
    19.11s  user  발화 끝
    20.92s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.13s]: [source: Official ABBA website] ABBA consisted of two married couples:
    26.04s  agent 발화 시작: ABBA’s lineup included Agnetha, Björn, Benny, and Anni-Frid,
    26.21s  agent 발화 끝
    31.93s  agent 발화 끝
    32.31s  user  발화 시작: That’s…interesting! Did they write all their own songs?
    35.91s  <ret> 발화 (turn7 첫 프레임)
    36.15s  agent 발화 시작: <ret> They primarily wrote their own songs, with Benny and B
    36.33s  user  발화 끝
    37.91s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.46s]: [source: Rolling Stone] Benny Andersson and Björn Ulvaeus were respons
    41.52s  agent 발화 시작: Benny Andersson and Björn Ulvaeus wrote most of ABBA’s well-
    41.61s  agent 발화 끝
    46.05s  agent 발화 끝
    46.15s  user  발화 시작: I wonder what they’re up to now.
    47.48s  <ret> 발화 (turn10 첫 프레임)
    47.55s  agent 발화 시작: <ret> [sigh] They've all pursued various projects since ABBA
    47.76s  user  발화 끝
    48.92s  ⚡SPAN 주입(IRRELEVANT) [d'=1.44s / d_lead=4.35s]: (tool result) AAPL: 170.34 USD, +0.89, 0.53%
    51.90s  agent 발화 끝
    51.91s  user  발화 시작: Like what, specifically?
    53.56s  <ret> 발화 (turn12 첫 프레임)
    53.87s  agent 발화 시작: <ret> Björn Ulvaeus has been involved in musical theatre, in
    53.94s  user  발화 끝
    54.92s  ⚡SPAN 주입 [d'=1.36s / d_lead=5.74s]: [source: The Guardian] Björn Ulvaeus co-wrote the musical *Chess* and 
    59.53s  agent 발화 시작: Björn Ulvaeus co-wrote *Chess* and helped develop *Mamma Mia
    59.60s  agent 발화 끝
    61.83s  user  발화 시작: Yeah.
    62.55s  user  발화 끝
    65.00s  agent 발화 끝
    65.54s  user  발화 시작: Oh, so he’s connected to Mamma Mia in more ways than one! Th
    70.83s  agent 발화 시작: It certainly does. It’s wonderful when an artist’s vision co
    70.96s  user  발화 끝
    76.15s  agent 발화 끝
