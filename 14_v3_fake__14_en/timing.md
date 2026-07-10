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

# EXAMINER(FDB-v2) 단계: S1 Hi Kliana, do you know who wrote “ | S2 Björn Ulvaeus, okay. Was he in ABB | S3 Really? Like what musicals? | S4 Wow, that’s a long run. Um, do you

     0.00s  user  발화 시작: Hi Kliana, do you know who wrote “My Love, My Life” from Mam
     5.90s  <ret> 발화 (turn1 첫 프레임)
     6.12s  user  발화 끝
     6.14s  agent 발화 시작: <ret> That’s a lovely choice, it truly is a classic. The son
     7.90s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.90s]: “My Love, My Life” was written by Björn Ulvaeus and Benny Andersson.
    14.95s  user  발화 시작: Oh, go on then, tell me!
    15.03s  agent 발화 끝
    16.49s  <ret> 발화 (turn3 첫 프레임)
    16.70s  user  발화 끝
    16.73s  agent 발화 시작: <ret> “My Love, My Life” was penned by Björn Ulvaeus… and Be
    18.49s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.42s]: Björn Ulvaeus and Benny Andersson are two members of the Swedish pop g
    24.14s  agent 발화 끝
    24.28s  user  발화 시작: Björn Ulvaeus, okay. Was he in ABBA?
    27.88s  <ret> 발화 (turn5 첫 프레임)
    28.20s  agent 발화 시작: <ret> Yes, Björn Ulvaeus was one of the founding members of 
    28.30s  user  발화 끝
    29.88s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.04s]: Björn Ulvaeus was a member of the Swedish pop group ABBA.
    32.05s  user  발화 시작: Yeah.
    32.54s  user  발화 끝
    37.23s  agent 발화 끝
    37.58s  user  발화 시작: That makes sense. Hmmm, what other songs did he write?
    40.92s  <ret> 발화 (turn8 첫 프레임)
    41.07s  agent 발화 시작: <ret> He has quite an extensive catalogue! Beyond ABBA, he’s
    41.28s  user  발화 끝
    42.92s  ⚡SPAN 주입(IRRELEVANT) [d'=2.00s / d_lead=6.85s]: 10.0°C, humidity 87%, wind 21.6 km/h
    43.44s  user  발화 시작: Yeah.
    44.03s  user  발화 끝
    47.92s  agent 발화 끝
    49.05s  user  발화 시작: Really? Like what musicals?
    51.24s  <ret> 발화 (turn11 첫 프레임)
    51.31s  agent 발화 시작: <ret> He co-wrote the music for… …the hugely successful musi
    51.59s  user  발화 끝
    52.28s  ⚡SPAN 주입 [d'=1.04s / d_lead=2.33s]: He co-wrote the musicals *Chess*, *Kristina from Duvemåla*, and *Mamma
    61.65s  user  발화 시작: Uh-huh.
    62.14s  user  발화 끝
    64.85s  agent 발화 끝
    64.96s  user  발화 시작: Chess, interesting. Was it popular?
    67.46s  <ret> 발화 (turn14 첫 프레임)
    67.77s  agent 발화 시작: <ret> “Chess” ran for over three years in London’s West End 
    67.91s  user  발화 끝
    69.22s  ⚡SPAN 주입 [d'=1.76s / d_lead=10.19s]: Chess was a hugely successful musical.
    75.60s  user  발화 시작: Yeah.
    76.05s  user  발화 끝
    77.83s  user  발화 시작: Wow, that’s a long run. Um, do you know anything about his l
    77.97s  agent 발화 끝
    82.10s  agent 발화 시작: He had a fairly typical upbringing in Sweden, and developed 
    82.18s  user  발화 끝
    85.70s  user  발화 시작: Uh-huh.
    86.20s  user  발화 끝
    88.11s  agent 발화 시작: It’s wonderful to see how early passions can blossom into su
    88.22s  agent 발화 끝
    90.84s  user  발화 시작: Oh.
    91.33s  user  발화 끝
    93.38s  user  발화 시작: It really is. Thanks so much for all the information, Kliana
    93.44s  agent 발화 끝
    97.15s  agent 발화 시작: You’re very welcome. I’m glad I could share a bit about Björ
    97.21s  user  발화 끝
   102.10s  agent 발화 끝
