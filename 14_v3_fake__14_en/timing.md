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

# EXAMINER(FDB-v2) 단계: S1 Do you know who wrote “My Love, My | S2 Right, ABBA! Of course. Um, what a | S3 Chess? I didn’t know that. That’s  | S4 That’s really cool. I think I’ll l

     0.00s  user  발화 시작: Do you know who wrote “My Love, My Life” from Mamma Mia? It’
     5.04s  <ret> 발화 (turn1 첫 프레임)
     5.24s  user  발화 끝
     5.27s  agent 발화 시작: <ret> Björn Ulvaeus wrote “My Love, My Life” for the musical
     7.04s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.72s]: [source: Wikipedia] "My Love, My Life" was written by Björn Ulvaeus.
     9.99s  agent 발화 끝
    10.04s  user  발화 시작: Oh, Björn Ulvaeus! I knew it sounded familiar. What else did
    14.80s  <ret> 발화 (turn3 첫 프레임)
    14.95s  agent 발화 시작: <ret> He was incredibly prolific, alongside Benny Andersson,
    15.09s  user  발화 끝
    16.80s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.05s]: [source: AllMusic] Björn Ulvaeus and Benny Andersson composed almost a
    19.98s  agent 발화 시작: Björn Ulvaeus and Benny Andersson collaborated on nearly all
    20.00s  agent 발화 끝
    25.12s  agent 발화 끝
    25.34s  user  발화 시작: Right, ABBA! Of course. Um, what about other musicals, did h
    30.37s  <ret> 발화 (turn6 첫 프레임)
    30.60s  agent 발화 시작: <ret> Björn Ulvaeus also co-wrote the musical Chess, alongsi
    30.75s  user  발화 끝
    32.37s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.63s]: [source: IMDB] Björn Ulvaeus co-wrote the musical Chess, with Tim Rice
    35.23s  agent 발화 끝
    35.43s  user  발화 시작: Chess? I didn’t know that. That’s interesting. I— I mean, is
    41.00s  <ret> 발화 (turn8 첫 프레임)
    41.16s  agent 발화 시작: <ret> It’s a fascinating piece, quite different from Mamma M
    41.31s  user  발화 끝
    41.96s  ⚡SPAN 주입(IRRELEVANT) [d'=0.96s / d_lead=4.91s]: (tool result) AAPL: 170.34 +0.45 (0.26%)
    46.06s  agent 발화 끝
    46.19s  user  발화 시작: A Cold War theme… hmm. So he really moves between genres eas
    51.59s  agent 발화 시작: He seems to have a knack for adapting his songwriting to var
    51.71s  user  발화 끝
    53.69s  user  발화 시작: Yeah.
    54.14s  user  발화 끝
    56.57s  user  발화 시작: That’s really cool. I think I’ll look into Chess. Thanks, Kl
    56.59s  agent 발화 끝
    60.95s  agent 발화 시작: You’re very welcome. Exploring different music is a wonderfu
    60.97s  user  발화 끝
    66.75s  agent 발화 끝
