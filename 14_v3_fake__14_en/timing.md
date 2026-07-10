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

# EXAMINER(FDB-v2) 단계: S1 Do you know who wrote “My Love, My | S2 That’s interesting. What else has  | S3 I guess so. What kind of music doe | S4 Wow, they’re a dynamic duo.

     0.00s  user  발화 시작: Do you know who wrote “My Love, My Life”? It’s from Mamma Mi
     3.98s  <ret> 발화 (turn1 첫 프레임)
     4.03s  user  발화 끝
     4.22s  agent 발화 시작: <ret> That song was written by Björn Ulvaeus, actually. It’s
     5.98s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.38s]: Björn Ulvaeus wrote “My Love, My Life” for the musical Mamma Mia!.
     9.56s  user  발화 시작: Hmm, yeah, it is. Is he in ABBA?
     9.59s  agent 발화 끝
    13.29s  <ret> 발화 (turn3 첫 프레임)
    13.52s  agent 발화 시작: <ret> Yes, he is! Björn Ulvaeus was one of the founding memb
    13.55s  user  발화 끝
    15.29s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.22s]: Björn Ulvaeus is a member of the Swedish pop group ABBA.
    20.75s  agent 발화 끝
    20.91s  user  발화 시작: Oh, okay, so he writes music for both?
    23.84s  agent 발화 시작: He does. Both Benny Andersson and Björn Ulvaeus were the pri
    23.86s  user  발화 끝
    26.44s  user  발화 시작: Yeah.
    26.88s  user  발화 끝
    29.96s  agent 발화 끝
    30.36s  user  발화 시작: That’s interesting. What else has Björn Ulvaeus written?
    33.86s  <ret> 발화 (turn8 첫 프레임)
    34.09s  agent 발화 시작: <ret> He co-wrote the musical *Chess* with Benny Andersson a
    34.33s  user  발화 끝
    35.86s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.95s]: Björn Ulvaeus co-wrote the musical Chess, with Benny Andersson and Tim
    36.50s  user  발화 시작: Yeah.
    36.95s  user  발화 끝
    41.04s  agent 발화 끝
    42.16s  user  발화 시작: Chess? Like, the game?
    44.00s  <ret> 발화 (turn11 첫 프레임)
    44.32s  agent 발화 시작: <ret> It's a conceptual musical set in the world of competit
    44.50s  ⚡SPAN 주입(IRRELEVANT) [d'=0.50s / d_lead=5.65s]: The current weather in Reykjavik, Iceland is 8.0°C, humidity 88%, wind
    44.56s  user  발화 끝
    49.82s  agent 발화 시작: Settling into a new city can feel overwhelming, but explorin
    49.98s  agent 발화 끝
    54.95s  user  발화 시작: Uh-huh.
    55.44s  user  발화 끝
    56.68s  agent 발화 끝
    57.33s  user  발화 시작: I guess so. What kind of music does Benny Andersson write?
    61.05s  <ret> 발화 (turn15 첫 프레임)
    61.21s  agent 발화 시작: <ret> Benny Andersson’s music is known for its strong melodi
    61.40s  user  발화 끝
    62.41s  ⚡SPAN 주입 [d'=1.36s / d_lead=4.91s]: Benny Andersson is known for writing music with a strong melodic and h
    64.07s  user  발화 시작: Uh-huh.
    64.56s  user  발화 끝
    66.01s  agent 발화 시작: It certainly does. Their combined talents created such iconi
    66.12s  agent 발화 끝
    69.87s  user  발화 시작: Yeah.
    70.32s  user  발화 끝
    71.10s  user  발화 시작: So they worked together on Mamma Mia! too?
    71.20s  agent 발화 끝
    73.76s  <ret> 발화 (turn20 첫 프레임)
    74.06s  agent 발화 시작: <ret> Yes, they collaborated on the music and lyrics for *Ma
    74.20s  user  발화 끝
    75.76s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.53s]: Björn Ulvaeus and Benny Andersson wrote the music and lyrics for Mamma
    75.99s  user  발화 시작: Yeah.
    76.44s  user  발화 끝
    78.58s  user  발화 시작: Wow, they’re a dynamic duo.
    78.60s  agent 발화 끝
    80.80s  agent 발화 시작: They truly are. It's wonderful when creative partnerships wo
    80.83s  user  발화 끝
    86.33s  user  발화 시작: I think I'll listen to some ABBA now.
    86.53s  agent 발화 끝
    88.59s  user  발화 끝
    88.63s  agent 발화 시작: That sounds like a lovely idea. Enjoy your music!
    92.42s  agent 발화 끝
