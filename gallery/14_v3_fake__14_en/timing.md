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

# EXAMINER(FDB-v2) 단계: S1 Do you know who wrote “My Love, My | S2 Wow, those are classics! Did Agnet | S3 I’m thinking of visiting Stockholm | S4 Oh, okay. Good to know. I’ll have 

     0.00s  user  발화 시작: Do you know who wrote “My Love, My Life” from Mamma Mia? It’
     5.44s  <ret> 발화 (turn1 첫 프레임)
     5.50s  user  발화 끝
     5.68s  agent 발화 시작: <ret> Björn Ulvaeus wrote “My Love, My Life” for his wife, A
     7.44s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.20s]: Björn Ulvaeus wrote “My Love, My Life” as a song for his wife, Agnetha
    13.82s  user  발화 시작: Oh, that’s lovely. Was he in ABBA? I always get them mixed u
    13.87s  agent 발화 끝
    17.95s  <ret> 발화 (turn3 첫 프레임)
    18.11s  agent 발화 시작: <ret> Yes, Björn Ulvaeus was indeed a founding member of ABB
    18.12s  user  발화 끝
    19.95s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.23s]: Björn Ulvaeus was one of the founding members of the Swedish pop group
    25.33s  agent 발화 끝
    25.42s  user  발화 시작: That makes sense. What other songs did he write for ABBA?
    28.88s  <ret> 발화 (turn5 첫 프레임)
    29.11s  agent 발화 시작: <ret> He often collaborated with Benny Andersson, and togeth
    29.21s  user  발화 끝
    30.88s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.95s]: Björn Ulvaeus and Benny Andersson collaborated on the majority of ABBA
    36.06s  agent 발화 끝
    37.00s  user  발화 시작: Wow, those are classics! Did Agnetha sing on those too?
    40.59s  <ret> 발화 (turn7 첫 프레임)
    40.90s  agent 발화 시작: <ret> Yes, Agnetha Fältskog and Anni-Frid Lyngstad shared le
    41.08s  user  발화 끝
    41.09s  ⚡SPAN 주입 [d'=0.50s / d_lead=6.94s]: Agnetha Fältskog and Anni-Frid Lyngstad both contributed lead vocals o
    47.84s  agent 발화 끝
    49.18s  user  발화 시작: That’s amazing. They had such wonderful harmonies.
    52.33s  <ret> 발화 (turn9 첫 프레임)
    52.73s  agent 발화 시작: <ret> Their harmonies really were something special, weren’t
    52.74s  user  발화 끝
    54.33s  ⚡SPAN 주입(IRRELEVANT) [d'=2.00s / d_lead=6.53s]: The current temperature in Reykjavik, Iceland is 8.2°C, humidity 88%, 
    55.48s  user  발화 시작: Yeah.
    55.93s  user  발화 끝
    59.26s  agent 발화 끝
    59.89s  user  발화 시작: I’m thinking of visiting Stockholm someday. Is it a nice cit
    63.96s  <ret> 발화 (turn12 첫 프레임)
    64.03s  agent 발화 시작: <ret> Stockholm is the capital of Sweden and is well known f
    64.19s  user  발화 끝
    65.96s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.74s]: Stockholm is the capital of Sweden and is known for its beautiful arch
    66.72s  user  발화 시작: Yeah.
    67.21s  user  발화 끝
    71.76s  user  발화 시작: That sounds wonderful. Is it expensive to visit?
    71.77s  agent 발화 끝
    74.78s  <ret> 발화 (turn15 첫 프레임)
    75.01s  agent 발화 시작: <ret> Stockholm is generally quite expensive, similar to cit
    75.23s  user  발화 끝
    76.78s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.51s]: Stockholm is generally considered to be an expensive city to visit, co
    79.10s  user  발화 시작: Uh-huh.
    79.60s  user  발화 끝
    80.52s  agent 발화 끝
    80.86s  user  발화 시작: Oh, okay. Good to know. I’ll have to budget accordingly.
    84.50s  agent 발화 시작: It’s always best to plan ahead.
    84.56s  user  발화 끝
    85.53s  user  발화 시작: Exactly.
    86.49s  user  발화 끝
    87.23s  agent 발화 끝
    87.25s  user  발화 시작: That’s very kind of you. I think I’ll start looking at fligh
    91.15s  agent 발화 시작: Wonderful. I hope you have a lovely trip when you decide to 
    91.32s  user  발화 끝
    95.36s  agent 발화 끝
