# v3_fake__14_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__14",
#     "name": "Marcus",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "male",
#     "age_range": "late 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-23",
#       "category": "home",
#       "text": "User's home address is 240 Birch Road."
#     },
#     {
#       "date": "2026-02-26",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2025-11-09",
#       "category": "work",
#       "text": "User works as a graduate student."
#     },
#     {
#       "date": "2025-10-10",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     },
#     {
#       "date": "2025-09-14",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-01-07",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I was just listening to Mamma Mia  | S2 That’s interesting! Did he write… | S3 Wow, almost all of them? That’s in | S4 Really? What’s it like?

     0.00s  user  발화 시작: I was just listening to Mamma Mia and I’m trying to remember
     5.79s  user  발화 끝
     6.00s  agent 발화 시작: It’s lovely isn’t it? That song really captures a certain fe
    10.09s  user  발화 시작: It does. I’m putting together a playlist and want to make su
    10.15s  agent 발화 끝
    14.64s  <ret> 발화 (turn3 첫 프레임)
    14.96s  agent 발화 시작: <ret> The song “My Love, My Life” was written… by Björn Ulva
    15.10s  user  발화 끝
    16.64s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.34s]: [source: Wikipedia] "My Love, My Life" was written by Björn Ulvaeus.
    21.12s  user  발화 시작: Oh, Björn Ulvaeus! Right, of course. I always get the ABBA m
    21.31s  agent 발화 끝
    25.84s  <ret> 발화 (turn5 첫 프레임)
    25.99s  agent 발화 시작: <ret> Björn Ulvaeus was born… on April 25, 1945. That makes 
    26.16s  user  발화 끝
    27.84s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.33s]: [source: AllMusic] Björn Ulvaeus was born on April 25, 1945, in Gothen
    33.32s  agent 발화 끝
    33.47s  user  발화 시작: That’s interesting! Did he write…
    36.38s  user  발화 끝
    37.98s  user  발화 시작: …a lot of ABBA’s hits?
    39.61s  <ret> 발화 (turn8 첫 프레임)
    39.85s  agent 발화 시작: <ret> Björn Ulvaeus and Benny Andersson composed… almost all
    39.92s  user  발화 끝
    41.61s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.81s]: [source: The Official ABBA Website] Ulvaeus and Benny Andersson compos
    46.51s  user  발화 시작: Wow, almost all of them? That’s incredible.
    46.66s  agent 발화 끝
    49.73s  user  발화 시작: I'm actually moving to Sweden soon. I'm a little nervous abo
    49.84s  user  발화 끝
    53.34s  <ret> 발화 (turn11 첫 프레임)
    53.66s  user  발화 끝
    53.66s  agent 발화 시작: <ret> [curious] Moving to a new country is a big step! It’s 
    53.84s  ⚡SPAN 주입(IRRELEVANT) [d'=0.50s / d_lead=6.72s]: (tool result) AAPL: 170.34
    56.49s  user  발화 시작: Yeah.
    57.13s  user  발화 끝
    60.36s  user  발화 시작: It is! I'm hoping to really immerse myself in the culture, b
    60.38s  agent 발화 끝
    65.36s  agent 발화 시작: That’s wonderful. Gothenburg, where Björn Ulvaeus was born, 
    65.45s  user  발화 끝
    67.90s  user  발화 시작: Yeah.
    68.39s  user  발화 끝
    72.68s  agent 발화 끝
    73.41s  user  발화 시작: Really? What’s it like?
    74.67s  <ret> 발화 (turn17 첫 프레임)
    74.83s  agent 발화 시작: <ret> Gothenburg is known… for its canals and thriving café 
    75.02s  user  발화 끝
    76.43s  ⚡SPAN 주입 [d'=1.76s / d_lead=7.37s]: [source: Visit Gothenburg] Gothenburg is known for its canals, leafy b
    80.33s  user  발화 시작: Uh-huh.
    80.96s  user  발화 끝
    82.19s  agent 발화 끝
    82.27s  user  발화 시작: That sounds lovely, actually. Maybe starting in Gothenburg w
    87.13s  user  발화 끝
    87.17s  agent 발화 시작: [happy] I think so. It’s a beautiful city with a friendly at
    93.89s  agent 발화 끝
