# v3_to_ot_12_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_12",
#     "name": "Nora",
#     "location": {
#       "city": "New York",
#       "country": "United States",
#       "timezone": "America/New_York (EST, UTC-5)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "female",
#     "age_range": "50s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-08",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2026-05-09",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2026-03-25",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     },
#     {
#       "date": "2026-03-21",
#       "category": "home",
#       "text": "User's home address is 151 Oak Avenue."
#     },
#     {
#       "date": "2025-10-06",
#       "category": "work",
#       "text": "User works as a accountant."
#     },
#     {
#       "date": "2025-08-05",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in October."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-07",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-10-26",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Hey, could you tell me who was… | S2 I think I saw it when it first air | S3 Oh, wow, I totally forgot about th | S4 I wonder if it's on streaming anyw

     0.00s  user  발화 시작: Hey, could you tell me who was…
     0.00s  <ret> 발화 (turn2 첫 프레임)
     0.00s  <ret> 발화 (turn4 첫 프레임)
     0.02s  user  발화 시작: …in "The House of the Rising Sun"?
     0.02s  user  발화 끝
     0.05s  agent 발화 시작: <ret> "The House of the Rising Sun" starred David Janssen, L
     0.05s  ⚡SPAN 주입 [d'=0.06s / d_lead=0.06s]: The cast of "The House of the Rising Sun" includes David Janssen, Loli
     0.05s  user  발화 끝
     0.07s  <ret> 발화 (turn6 첫 프레임)
     0.11s  user  발화 시작: Hmm, and was Amy Smart in it?
     0.11s  agent 발화 끝
     0.13s  agent 발화 시작: <ret> Yes, Amy Smart was indeed in it! She played Jenny Port
     0.13s  ⚡SPAN 주입 [d'=0.06s / d_lead=0.06s]: Amy Smart played Jenny Porter in "The House of the Rising Sun," a role
     0.13s  user  발화 끝
     0.20s  user  발화 시작: Oh, okay. What year did that show come out?
     0.20s  agent 발화 끝
     0.23s  <ret> 발화 (turn10 첫 프레임)
     0.23s  agent 발화 시작: <ret> It originally aired in 1994—quite a while ago now! It 
     0.23s  ⚡SPAN 주입 [d'=0.06s / d_lead=0.06s]: "The House of the Rising Sun" originally aired in 1994, captivating au
     0.23s  user  발화 끝
     0.29s  user  발화 시작: I think I saw it when it first aired… uh, my mom loved it.
     0.29s  agent 발화 끝
     0.34s  user  발화 시작: Did you finish the laundry yet?
     0.34s  user  발화 끝
     0.34s  <ret> 발화 (turn14 첫 프레임)
     0.36s  user  발화 시작: … anyway, what was Lolita Morena in after that?
     0.36s  user  발화 끝
     0.39s  agent 발화 시작: <ret> After "The House of the Rising Sun," Lolita Morena app
     0.39s  ⚡SPAN 주입 [d'=0.07s / d_lead=0.07s]: Lolita Morena appeared in several films and television shows after "Th
     0.39s  user  발화 끝
     0.46s  user  발화 시작: Oh, wow, I totally forgot about that show!
     0.46s  agent 발화 끝
     0.48s  agent 발화 시작: It was a huge hit back then, wasn't it? So many iconic shows
     0.48s  user  발화 끝
     0.54s  user  발화 시작: Yeah, it really was. Could you find me some information abou
     0.54s  agent 발화 끝
     0.58s  agent 발화 시작: <ret> David Janssen was a very well-known actor, especially 
     0.58s  ⚡SPAN 주입 [d'=0.06s / d_lead=0.06s]: David Janssen was an American film and television actor best known for
     0.58s  user  발화 끝
     0.64s  user  발화 시작: Yeah.
     0.64s  agent 발화 끝
     0.65s  user  발화 시작: Oh! The Fugitive! My grandpa used to watch that every week.
     0.65s  user  발화 끝
     0.68s  agent 발화 시작: It was a classic! A lot of families enjoyed watching it toge
     0.68s  user  발화 끝
     0.70s  <ret> 발화 (turn20 첫 프레임)
     0.75s  user  발화 시작: Mhm.
     0.75s  agent 발화 끝
     0.75s  user  발화 시작: I wonder if it's on streaming anywhere…
     0.75s  user  발화 끝
     0.78s  agent 발화 시작: <ret> Good news! You can stream "The Fugitive" on Amazon Pri
     0.78s  ⚡SPAN 주입 [d'=0.06s / d_lead=0.06s]: (tool result) You can stream "The Fugitive" on Amazon Prime Video, Tub
     0.78s  user  발화 끝
     0.84s  user  발화 시작: Yeah.
     0.84s  agent 발화 끝
     0.84s  user  발화 시작: Awesome, that’s great to know!
     0.84s  user  발화 끝
     0.86s  agent 발화 시작: That's fantastic! I'm glad I could help you find it. I find 
     0.86s  user  발화 끝
     0.93s  user  발화 시작: Thanks, Kaeia.
     0.93s  agent 발화 끝
     0.94s  agent 발화 시작: You're very welcome! If you ever need a little help streamli
     0.94s  user  발화 끝
     1.00s  agent 발화 끝
