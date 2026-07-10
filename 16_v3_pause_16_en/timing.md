# v3_pause_16_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pause_16",
#     "name": "Andrea",
#     "location": {
#       "city": "London",
#       "country": "United Kingdom",
#       "timezone": "Europe/London (GMT, UTC+0)",
#       "currency": "GBP (£)"
#     },
#     "nationality": "British",
#     "gender": "non-binary",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-12",
#       "category": "home",
#       "text": "User's home address is 148 Elm Street."
#     },
#     {
#       "date": "2026-02-27",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2026-02-11",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in May."
#     },
#     {
#       "date": "2025-08-18",
#       "category": "work",
#       "text": "User works as a graduate student."
#     },
#     {
#       "date": "2025-05-28",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-12-10",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-07-21",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I was just wondering… where did th | S2 So, it wasn’t just a random choice | S3 …experiences can shape such influe | S4 That’s a good point. Maybe it's go

     0.00s  user  발화 시작: I was just wondering… where did the name “Big Brother” come 
     3.75s  user  발화 끝
     5.34s  user  발화 시작: …… I think I heard it had something to do with a book?
     8.37s  <ret> 발화 (turn2 첫 프레임)
     8.69s  agent 발화 시작: <ret> The term originates from George Orwell’s novel, *Ninet
     8.95s  user  발화 끝
    10.37s  ⚡SPAN 주입 [d'=2.00s / d_lead=12.80s]: Nineteen Eighty-Four is a dystopian novel published in 1949, written b
    21.49s  agent 발화 끝
    21.57s  user  발화 시작: Oh, nineteen forty-nine, that's interesting. Uhhh, was Orwel
    28.52s  user  발화 끝
    28.86s  agent 발화 시작: Orwell was deeply concerned with the rise of surveillance an
    43.52s  agent 발화 끝
    43.62s  user  발화 시작: So, it wasn’t just a random choice then? It was a deliberate
    48.43s  agent 발화 시작: It’s a powerful symbol of government overreach and the dange
    48.53s  user  발화 끝
    52.60s  user  발화 시작: Mm-hmm.
    53.10s  user  발화 끝
    59.37s  agent 발화 끝
    59.61s  user  발화 시작: Hmm, that makes sense. I think I remember reading something 
    64.61s  user  발화 끝
    65.02s  agent 발화 시작: You are quite right to recall that. Orwell served in the Ind
    70.27s  user  발화 시작: Oh.
    70.77s  user  발화 끝
    79.12s  agent 발화 끝
    79.34s  user  발화 시작: That’s… wow. It’s amazing how personal…
    82.67s  user  발화 끝
    84.33s  user  발화 시작: …experiences can shape such influential works.
    87.53s  agent 발화 시작: It often is, isn't it? A writer’s perspective is always colo
    87.66s  user  발화 끝
    97.92s  agent 발화 끝
    98.00s  user  발화 시작: I wonder if he could have imagined how relevant it would sti
   104.30s  user  발화 끝
   104.33s  agent 발화 시작: It’s a testament to the enduring power of his writing that t
   109.58s  user  발화 시작: Mhm.
   110.08s  user  발화 끝
   115.17s  agent 발화 시작: It’s a reminder to be vigilant about protecting our freedoms
   115.32s  agent 발화 끝
   119.47s  user  발화 시작: Right.
   119.96s  user  발화 끝
   125.06s  user  발화 시작: Do you think it’s become… overused, though? Like, everyone c
   125.42s  agent 발화 끝
   130.21s  user  발화 끝
   130.30s  agent 발화 시작: It’s true the phrase has become somewhat diluted through ove
   142.36s  agent 발화 끝
   142.95s  user  발화 시작: That’s a good point. Maybe it's good that it’s a widely reco
   148.23s  agent 발화 시작: Precisely. Familiarity can breed awareness. The more people 
   148.32s  user  발화 끝
   159.31s  agent 발화 끝
   159.47s  user  발화 시작: Well, thanks, Braera. That was really helpful.
   161.73s  user  발화 끝
   161.75s  agent 발화 시작: You’re very welcome. I’m glad I could offer some insight int
   171.30s  agent 발화 끝
