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

# EXAMINER(FDB-v2) 단계: S1 Do you know who wrote “My Love, My | S2 What did they do *before* ABBA? Th | S3 I’m thinking of visiting Stockholm | S4 That sounds lovely, actually. Mayb

     0.00s  user  발화 시작: Do you know who wrote “My Love, My Life” from Mamma Mia? It’
     4.83s  <ret> 발화 (turn1 첫 프레임)
     5.04s  user  발화 끝
     5.06s  agent 발화 시작: <ret> That song is lovely, isn’t it? Björn Ulvaeus composed 
     6.83s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.32s]: Björn Ulvaeus composed "My Love, My Life" with lyrics by Benny Anderss
    12.31s  user  발화 시작: Oh, Andersson and Ulvaeus… they did a lot of ABBA’s music, r
    12.38s  agent 발화 끝
    16.85s  user  발화 끝
    17.00s  agent 발화 시작: Yes, they were the primary songwriters for ABBA, a very succ
    22.04s  agent 발화 끝
    22.16s  user  발화 시작: I’m trying to get into their other work, but it’s hard to kn
    26.09s  agent 발화 시작: It can be overwhelming with such a large catalog. Perhaps ex
    26.10s  user  발화 끝
    33.55s  agent 발화 끝
    34.36s  user  발화 시작: What did they do *before* ABBA? That sounds like a good plac
    38.46s  <ret> 발화 (turn7 첫 프레임)
    38.86s  agent 발화 시작: <ret> They actually started writing songs for other artists 
    38.99s  user  발화 끝
    40.46s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.58s]: Benny Andersson and Björn Ulvaeus wrote songs for other artists in the
    45.44s  agent 발화 끝
    47.04s  user  발화 시작: Hmm, interesting. Do you know any of those songs?
    50.46s  user  발화 끝
    50.72s  <ret> 발화 (turn9 첫 프레임)
    51.03s  agent 발화 시작: <ret> That's a bit outside my area of expertise, I'm afraid.
    52.72s  ⚡SPAN 주입(IRRELEVANT) [d'=2.00s / d_lead=7.64s]: The population of Ulaanbaatar, Mongolia is 1,672,298 as of 2024.
    54.27s  user  발화 시작: Yeah.
    54.71s  user  발화 끝
    58.66s  agent 발화 끝
    59.30s  user  발화 시작: Oh, right, you help people settle in. I'm not moving anywher
    65.40s  agent 발화 시작: Music is a wonderful way to connect with a place, even from 
    65.46s  user  발화 끝
    66.90s  user  발화 시작: Yeah.
    67.36s  user  발화 끝
    69.84s  agent 발화 끝
    69.87s  user  발화 시작: I’m thinking of visiting Stockholm someday. Is it a nice cit
    73.23s  <ret> 발화 (turn15 첫 프레임)
    73.62s  agent 발화 시작: <ret> Stockholm is quite beautiful, built on fourteen island
    73.85s  user  발화 끝
    75.23s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.34s]: Stockholm is built on fourteen islands and is connected by over fifty 
    78.36s  user  발화 시작: Uh-huh.
    78.80s  user  발화 끝
    79.96s  agent 발화 끝
    80.38s  user  발화 시작: Wow, that sounds… complicated. Is it easy to get around?
    84.70s  agent 발화 시작: It's surprisingly easy! The public transport system is very 
    84.73s  user  발화 끝
    89.35s  user  발화 시작: Yeah.
    89.79s  user  발화 끝
    90.85s  agent 발화 끝
    90.91s  user  발화 시작: Good to know. What's the weather like there in July?
    94.63s  <ret> 발화 (turn21 첫 프레임)
    94.79s  agent 발화 시작: <ret> In July, Stockholm typically sees temperatures around 
    94.98s  user  발화 끝
    96.63s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.78s]: 20.0°C, humidity 65%, wind 3.2 km/h
   101.12s  user  발화 시작: Oh.
   101.56s  user  발화 끝
   106.57s  agent 발화 끝
   106.72s  user  발화 시작: That sounds lovely, actually. Maybe I should start planning…
   110.53s  agent 발화 시작: That sounds like a wonderful idea. I’m glad I could share a 
   110.56s  user  발화 끝
   116.05s  agent 발화 끝
   116.25s  user  발화 시작: Thanks so much for your help, Kliana.
   118.24s  agent 발화 시작: You are very welcome. Enjoy planning your potential trip.
   118.37s  user  발화 끝
   122.50s  agent 발화 끝
