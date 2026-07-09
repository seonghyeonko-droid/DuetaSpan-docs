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
#       "date": "2026-04-23",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2026-02-26",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in March."
#     },
#     {
#       "date": "2025-10-10",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     },
#     {
#       "date": "2025-09-14",
#       "category": "pet",
#       "text": "User has a Golden Retriever named Max."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-06-17",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Do you know who wrote “My Love, My | S2 That makes sense, the song sounds  | S3 Wow, that's amazing! So they reall | S4 Definitely. It’s nice to know the 

     0.00s  user  발화 시작: Do you know who wrote “My Love, My Life” from Mamma Mia? It’
     5.45s  <ret> 발화 (turn1 첫 프레임)
     5.65s  user  발화 끝
     5.68s  agent 발화 시작: <ret> Björn Ulvaeus composed “My Love, My Life” for the musi
     7.45s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.19s]: [source: AllMusic] “My Love, My Life” was written by Björn Ulvaeus.
    10.86s  user  발화 시작: Oh, Björn Ulvaeus! I know that name… wasn't he in ABBA?
    10.86s  agent 발화 끝
    15.57s  <ret> 발화 (turn3 첫 프레임)
    15.73s  agent 발화 시작: <ret> [happy] Yes, he was! Björn was a key member of the ico
    15.86s  user  발화 끝
    17.57s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.76s]: [source: Britannica] Björn Ulvaeus and Benny Andersson formed the song
    22.45s  agent 발화 시작: Björn Ulvaeus and Benny Andersson collaborated as the primar
    22.50s  agent 발화 끝
    27.31s  agent 발화 끝
    27.58s  user  발화 시작: That makes sense, the song sounds very ABBA-like, actually. 
    33.61s  <ret> 발화 (turn6 첫 프레임)
    33.85s  agent 발화 시작: <ret> They were heavily involved. Both Björn and Benny wrote
    34.01s  user  발화 끝
    35.61s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.27s]: [source: Mamma Mia! official website] Benny Andersson and Björn Ulvaeu
    38.91s  <ret> 발화 (turn7 첫 프레임)
    39.06s  agent 발화 시작: <ret> Benny Andersson and Björn Ulvaeus wrote the music and 
    39.12s  agent 발화 끝
    40.91s  ⚡SPAN 주입(IRRELEVANT) [d'=2.00s / d_lead=6.42s]: (tool result) AAPL: 170.34 +0.45
    45.29s  user  발화 시작: Wow, that's amazing! So they really put their heart into it.
    45.48s  agent 발화 끝
    49.73s  user  발화 끝
    49.77s  agent 발화 시작: It certainly seems that way. Their dedication shines through
    55.48s  user  발화 시작: Definitely. It’s nice to know the story behind the music. Th
    55.56s  agent 발화 끝
    60.16s  user  발화 끝
    60.26s  agent 발화 시작: You’re very welcome. I’m happy to help you explore the music
    64.88s  agent 발화 끝
