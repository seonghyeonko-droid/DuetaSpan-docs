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

# EXAMINER(FDB-v2) 단계: S1 Do you know who wrote “My Love, My | S2 So they really did everything for  | S3 Oh, I didn’t know that! Was it a p | S4 That's a long time ago! They must 

     0.00s  user  발화 시작: Do you know who wrote “My Love, My Life” from Mamma Mia? It’
     5.38s  <ret> 발화 (turn1 첫 프레임)
     5.62s  agent 발화 시작: <ret> That song is lovely, isn’t it? “My Love, My Life” was 
     5.65s  user  발화 끝
     7.38s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.76s]: [source: Wikipedia] "My Love, My Life" was written by Björn Ulvaeus an
    12.32s  user  발화 시작: Oh, just one of them? I thought it was a collaboration.
    12.38s  agent 발화 끝
    15.72s  <ret> 발화 (turn3 첫 프레임)
    15.93s  user  발화 끝
    15.96s  agent 발화 시작: <ret> It was a collaboration, but Björn Ulvaeus specifically
    17.73s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.53s]: [source: Songfacts] Björn Ulvaeus was responsible for the melody of "M
    22.50s  agent 발화 끝
    22.57s  user  발화 시작: Hmm, interesting. What about the lyrics, then?
    25.41s  <ret> 발화 (turn5 첫 프레임)
    25.73s  agent 발화 시작: <ret> Benny Andersson and Björn Ulvaeus also co-wrote the ly
    25.81s  user  발화 끝
    27.41s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.70s]: [source: Genius] Benny Andersson and Björn Ulvaeus co-wrote the lyrics
    31.42s  agent 발화 끝
    32.36s  user  발화 시작: So they really did everything for that song?
    34.49s  <ret> 발화 (turn7 첫 프레임)
    34.80s  agent 발화 시작: <ret> They were quite involved – “My Love, My Life” appeared
    34.94s  user  발화 끝
    36.49s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.83s]: [source: ABBA Official Website] "My Love, My Life" appeared on ABBA's 
    42.64s  agent 발화 끝
    44.03s  user  발화 시작: Right. I’m trying to remember what else they did.
    46.82s  user  발화 시작: Um, did ABBA write any other songs for musicals?
    47.08s  user  발화 끝
    50.15s  <ret> 발화 (turn10 첫 프레임)
    50.23s  agent 발화 시작: <ret> Yes, ABBA actually wrote the music for the musical *Ch
    50.43s  user  발화 끝
    51.59s  ⚡SPAN 주입 [d'=1.44s / d_lead=3.94s]: [source: Britannica] ABBA wrote the music for the musical *Chess*.
    51.84s  user  발화 시작: Yeah.
    52.34s  user  발화 끝
    53.83s  user  발화 시작: Oh, I didn’t know that! Was it a popular musical?
    54.16s  agent 발화 끝
    56.97s  <ret> 발화 (turn13 첫 프레임)
    57.28s  agent 발화 시작: <ret> *Chess* had a very successful run, with six hundred fi
    57.39s  user  발화 끝
    58.33s  ⚡SPAN 주입 [d'=1.36s / d_lead=5.75s]: [source: Playbill] *Chess* ran for six hundred five performances on Br
    59.25s  user  발화 시작: Yeah.
    59.79s  user  발화 끝
    63.00s  user  발화 시작: Wow, that’s quite a lot. I might have to look that one up.
    63.02s  agent 발화 끝
    66.59s  agent 발화 시작: It’s a really wonderful piece; I think you’d enjoy it.
    66.75s  user  발화 끝
    69.02s  user  발화 시작: Uh-huh.
    69.51s  user  발화 끝
    69.97s  agent 발화 끝
    70.05s  user  발화 시작: I will. What was ABBA like as a group, generally?
    73.31s  <ret> 발화 (turn19 첫 프레임)
    73.63s  agent 발화 시작: <ret> ABBA was a Swedish pop group that formed in Stockholm 
    73.76s  user  발화 끝
    75.31s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.18s]: [source: Rolling Stone] ABBA was a Swedish pop group formed in Stockho
    77.47s  user  발화 시작: Yeah.
    77.97s  user  발화 끝
    78.81s  agent 발화 끝
    79.01s  user  발화 시작: That's a long time ago! They must have had lots of hits.
    82.71s  user  발화 끝
    82.93s  agent 발화 시작: They certainly did—they became one of the most commercially 
    85.82s  user  발화 시작: Oh.
    86.36s  user  발화 끝
    88.40s  user  발화 시작: Well, that sounds about right. Thank you for all the informa
    88.49s  agent 발화 끝
    92.16s  agent 발화 시작: You're very welcome. It’s been my pleasure to share a bit ab
    92.32s  user  발화 끝
    97.16s  agent 발화 끝
