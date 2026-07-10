# v3_hesit_18_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_hesit_18",
#     "name": "Camille",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "female",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-13",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     },
#     {
#       "date": "2025-09-23",
#       "category": "hobby",
#       "text": "User is into vintage synth collecting."
#     },
#     {
#       "date": "2025-08-28",
#       "category": "home",
#       "text": "User's home address is 134 Elm Street."
#     },
#     {
#       "date": "2025-07-08",
#       "category": "work",
#       "text": "User works as a chef."
#     },
#     {
#       "date": "2025-06-05",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-06-06",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 uh, I was reading about Italy… and | S2 okay, good. Good to know. Um… what | S3 I’m just worried I’ll freeze up… | S4 do you… have any other suggestions

     0.00s  user  발화 시작: uh, I was reading about Italy… and I was wondering, when did
     5.25s  <ret> 발화 (turn1 첫 프레임)
     5.49s  agent 발화 시작: <ret> Mount Vesuvius last erupted in March of nineteen forty
     5.66s  user  발화 끝
     7.25s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.41s]: Mount Vesuvius last erupted in March of nineteen forty-four.
    12.90s  agent 발화 끝
    12.96s  user  발화 시작: nineteen forty-four… wow. That’s… a while ago.
    17.93s  agent 발화 시작: It is quite some time ago, yes. Though, it remains an active
    18.01s  user  발화 끝
    24.90s  user  발화 시작: monitored closely? Like, are they expecting another eruption
    25.11s  agent 발화 끝
    29.24s  <ret> 발화 (turn5 첫 프레임)
    29.46s  agent 발화 시작: <ret> Scientists currently assess Vesuvius’ eruption risk as
    29.53s  user  발화 끝
    31.24s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.93s]: Scientists currently assess Vesuvius’ eruption risk as moderate.
    37.39s  agent 발화 끝
    38.08s  user  발화 시작: moderate… hmmmm. So, not *imminent* then?
    42.15s  agent 발화 시작: Not imminent, no. Moderate means they observe ongoing activi
    42.24s  user  발화 끝
    49.82s  user  발화 시작: okay, good. Good to know. Um… what about Pompeii?
    50.03s  agent 발화 끝
    53.09s  <ret> 발화 (turn9 첫 프레임)
    53.15s  agent 발화 시작: <ret> Pompeii was largely destroyed by the eruption of Mount
    53.38s  user  발화 끝
    54.45s  ⚡SPAN 주입 [d'=1.36s / d_lead=8.67s]: Pompeii was largely destroyed by the eruption of Mount Vesuvius in sev
    61.74s  user  발화 시작: yeah, I’ve seen pictures. It’s… incredible, really.
    61.82s  agent 발화 끝
    64.64s  agent 발화 시작: It is a poignant reminder of nature’s power, isn’t it? And t
    64.69s  user  발화 끝
    66.85s  user  발화 시작: Yeah.
    67.39s  user  발화 끝
    70.40s  agent 발화 시작: Thinking about career paths, sometimes acknowledging those k
    70.43s  agent 발화 끝
    77.11s  user  발화 시작: Yeah.
    77.70s  user  발화 끝
    80.13s  agent 발화 끝
    80.98s  user  발화 시작: that’s… a really interesting point. I hadn’t thought of it l
    85.39s  agent 발화 시작: Sometimes, reframing things can offer a fresh perspective. I
    85.42s  user  발화 끝
    92.28s  user  발화 시작: welll… I’m actually feeling pretty stressed about a job inte
    92.34s  agent 발화 끝
    96.81s  agent 발화 시작: Job interviews can certainly be stressful. What specifically
    96.86s  user  발화 끝
   103.44s  agent 발화 끝
   104.42s  user  발화 시작: I’m just worried I’ll freeze up…
   106.36s  user  발화 끝
   108.44s  user  발화 시작: …and forget everything I want to say.
   110.52s  user  발화 끝
   110.64s  agent 발화 시작: That’s a very common fear. Have you practiced answering pote
   113.90s  user  발화 시작: Right.
   114.54s  user  발화 끝
   115.51s  user  발화 시작: I’ve tried, but it feels so… awkward.
   115.74s  agent 발화 끝
   117.84s  <ret> 발화 (turn24 첫 프레임)
   118.00s  agent 발화 시작: <ret> Practicing with a friend or mentor can help reduce int
   118.05s  user  발화 끝
   119.84s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.13s]: Practicing with a friend or mentor can help reduce interview anxiety.
   120.41s  user  발화 시작: Uh-huh.
   120.91s  user  발화 끝
   125.13s  agent 발화 끝
   126.60s  user  발화 시작: maybe. I guess I could ask my sister.
   129.01s  agent 발화 시작: That's a great idea! A supportive friend or family member ca
   129.23s  user  발화 끝
   130.72s  user  발화 시작: Yeah.
   131.21s  user  발화 끝
   134.48s  user  발화 시작: do you… have any other suggestions?
   134.61s  agent 발화 끝
   136.60s  <ret> 발화 (turn30 첫 프레임)
   136.77s  agent 발화 시작: <ret> Deep breathing exercises can help calm nerves before a
   136.97s  user  발화 끝
   137.72s  ⚡SPAN 주입 [d'=1.12s / d_lead=6.95s]: Deep breathing exercises can help calm nerves before an interview.
   139.59s  user  발화 시작: Right.
   140.18s  user  발화 끝
   143.72s  agent 발화 끝
   144.01s  user  발화 시작: oh. I’ve heard of that.
   146.27s  user  발화 끝
   146.33s  agent 발화 시작: It’s worth a try! Even a few minutes of focused breathing ca
   151.96s  user  발화 시작: yeah, I suppose so. Thanks, Bena.
   152.07s  agent 발화 끝
   154.83s  user  발화 끝
   154.91s  agent 발화 시작: You’re very welcome. Remember to be kind to yourself—you’ve 
   159.71s  user  발화 시작: I'll try.
   159.72s  agent 발화 끝
   160.44s  agent 발화 시작: Good. I have faith in you. Enjoy your preparation, and remem
   160.53s  user  발화 끝
   165.11s  agent 발화 끝
