# v3_fake__14_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__14",
#     "name": "Remy",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "non-binary",
#     "age_range": "late 40s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-09",
#       "category": "child",
#       "text": "User has a child named Minjun, age 9."
#     },
#     {
#       "date": "2026-05-14",
#       "category": "schedule",
#       "text": "User has a four-day compressed week."
#     },
#     {
#       "date": "2026-05-03",
#       "category": "allergy",
#       "text": "User is allergic to latex."
#     },
#     {
#       "date": "2026-03-09",
#       "category": "phone",
#       "text": "User uses a Galaxy Z Flip."
#     },
#     {
#       "date": "2026-01-09",
#       "category": "coffee",
#       "text": "User's usual coffee order is a caramel latte."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-22",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers for a 3-story house",
#         "wanted coverage for the basement office"
#       ]
#     },
#     {
#       "date": "2026-05-08",
#       "title": "Fixing a leaking faucet",
#       "bullets": [
#         "it's a single-handle kitchen tap",
#         "asked whether to replace the cartridge"
#       ]
#     },
#     {
#       "date": "2026-04-18",
#       "title": "Renovating the bathroom",
#       "bullets": [
#         "budget of 6M won",
#         "wants a walk-in shower instead of a tub"
#       ]
#     },
#     {
#       "date": "2026-03-24",
#       "title": "Planning a camping trip",
#       "bullets": [
#         "a weekend at a lake site in September",
#         "asked about a 4-person tent and a cooler"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Hi Kellax, I was just wondering… w | S2 …about old movies, actually. | S3 That’s a good idea! What about the | S4 Wow, that’s really old! So it’s no

     0.00s  user  발화 시작: Hi Kellax, I was just wondering… when did The Wizard of Oz a
     4.81s  user  발화 끝
     4.90s  agent 발화 시작: That’s a wonderful film! It first graced the silver screen o
    11.04s  user  발화 시작: Wow, that was a long time ago. I love that movie.
    11.06s  agent 발화 끝
    12.26s  agent 발화 시작: Yeah.
    12.89s  agent 발화 끝
    13.72s  user  발화 끝
    13.88s  agent 발화 시작: It truly is a classic, isn’t it? Many people find its messag
    17.52s  user  발화 시작: Yeah, yeah.
    18.90s  user  발화 끝
    21.43s  agent 발화 끝
    21.53s  user  발화 시작: Yeah, it is. I was thinking…
    24.25s  user  발화 끝
    25.94s  user  발화 시작: …about old movies, actually.
    27.05s  agent 발화 시작: Yeah.
    27.68s  agent 발화 끝
    27.86s  user  발화 끝
    28.29s  agent 발화 시작: [happy] Old movies hold such a special charm, don’t they? Th
    34.41s  agent 발화 끝
    34.50s  user  발화 시작: They do. What about Disney’s Snow White? When did that one c
    38.25s  <ret> 발화 (turn11 첫 프레임)
    38.41s  agent 발화 시작: <ret> Disney’s first full-length animated film, Snow White, 
    38.62s  user  발화 끝
    39.41s  ⚡SPAN 주입 [d'=1.16s / d_lead=7.27s]: Snow White and the Seven Dwarfs, Walt Disney’s first full-length cel-a
    42.82s  user  발화 시작: Oh.
    43.78s  user  발화 끝
    45.69s  agent 발화 끝
    45.70s  agent 발화 시작: It was a groundbreaking achievement for animation at the tim
    47.98s  user  발화 시작: Yeah.
    48.66s  user  발화 끝
    51.39s  agent 발화 끝
    52.51s  user  발화 시작: That’s amazing. I’m planning a movie night with my kids.
    55.32s  <ret> 발화 (turn16 첫 프레임)
    55.77s  agent 발화 시작: <ret> That sounds like a lovely idea! A movie night is a won
    55.79s  ⚡SPAN 주입(IRRELEVANT) [d'=0.47s / d_lead=5.93s]: The average rainfall in Reykjavik, Iceland in November is 131mm, with 
    55.83s  user  발화 끝
    61.66s  agent 발화 시작: Perhaps you could make some themed snacks to go with the fil
    61.70s  agent 발화 끝
    62.92s  user  발화 시작: Yeah.
    63.55s  user  발화 끝
    64.99s  agent 발화 끝
    65.68s  user  발화 시작: That’s a good idea! What about the original Cinderella?
    67.09s  agent 발화 시작: Mm-hmm.
    67.72s  agent 발화 끝
    68.34s  <ret> 발화 (turn21 첫 프레임)
    68.59s  agent 발화 시작: <ret> The original Disney’s Cinderella was released in theat
    68.72s  user  발화 끝
    69.47s  ⚡SPAN 주입 [d'=1.12s / d_lead=5.28s]: Cinderella, a 1950 American animated musical fantasy film produced by 
    73.81s  user  발화 시작: February 15th, okay. That’s good to know. –
    73.87s  agent 발화 끝
    76.76s  user  발화 시작: …Do they have different versions of Cinderella, though? Like
    76.85s  user  발화 끝
    80.73s  user  발화 끝
    80.75s  agent 발화 시작: Yes, absolutely! There are many versions of the Cinderella s
    86.70s  agent 발화 시작: The earliest known version is actually a Chinese story, Yeh-
    86.78s  agent 발화 끝
    93.03s  agent 발화 시작: —it tells a very similar tale of a kind girl mistreated by h
    93.14s  agent 발화 끝
    95.83s  user  발화 시작: Mm-hmm.
    96.60s  user  발화 끝
    97.52s  agent 발화 끝
    97.92s  user  발화 시작: Wow, that’s really old! So it’s not just a Disney story?
   101.75s  user  발화 끝
   101.80s  agent 발화 시작: [curious] Not at all! The core elements of the story appear 
   108.99s  agent 발화 시작: It speaks to themes of hope, kindness, and overcoming advers
   109.08s  agent 발화 끝
   113.15s  user  발화 시작: Yeah.
   113.93s  user  발화 끝
   115.64s  user  발화 시작: That's really interesting. I think I'll look into those othe
   115.98s  agent 발화 끝
   118.27s  agent 발화 시작: Okay.
   119.09s  agent 발화 끝
   119.43s  user  발화 끝
   119.58s  agent 발화 시작: [happy] That’s a wonderful idea. Exploring different version
   127.41s  agent 발화 끝
