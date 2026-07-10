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

# EXAMINER(FDB-v2) 단계: S1 So, uh, I was reading this book… | S2 Sounds… intense. Was Orwell trying | S3 Hmm, that's pretty relevant even n | S4 That’s fascinating. It’s funny how

     0.00s  user  발화 시작: So, uh, I was reading this book…
     2.73s  user  발화 끝
     4.32s  user  발화 시작: …and it mentioned… Big Brother.
     5.92s  <ret> 발화 (turn2 첫 프레임)
     6.23s  agent 발화 시작: <ret> The concept of “Big Brother” originates from George Or
     6.49s  user  발화 끝
     7.92s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.22s]: Big Brother is the protagonist of George Orwell’s dystopian novel *Nin
    17.45s  agent 발화 끝
    17.55s  user  발화 시작: Nineteen Eighty-Four, right. I've heard of it, but I haven't
    21.16s  user  발화 끝
    21.39s  agent 발화 시작: It’s a rather impactful work, exploring themes of surveillan
    29.78s  agent 발화 끝
    29.86s  user  발화 시작: Sounds… intense. Was Orwell trying to predict the future, or
    33.43s  <ret> 발화 (turn6 첫 프레임)
    33.67s  agent 발화 시작: <ret> Orwell drew inspiration from his experiences during… …
    33.84s  user  발화 끝
    34.71s  ⚡SPAN 주입 [d'=1.28s / d_lead=3.25s]: George Orwell’s novel, Nineteen Eighty-Four, represents the oppressive
    39.37s  user  발화 시작: Mm-hmm.
    39.86s  user  발화 끝
    48.52s  agent 발화 끝
    48.81s  user  발화 시작: A warning, huh? About governments watching people?
    51.58s  <ret> 발화 (turn9 첫 프레임)
    51.77s  user  발화 끝
    51.97s  agent 발화 시작: <ret> Precisely. He wanted to illustrate the dangers of unch
    53.50s  ⚡SPAN 주입 [d'=1.92s / d_lead=11.27s]: Orwell drew inspiration from his experiences during the post-war era a
    56.93s  user  발화 시작: Yeah.
    57.42s  user  발화 끝
    63.24s  agent 발화 끝
    63.47s  user  발화 시작: Hmm, that's pretty relevant even now…
    66.34s  user  발화 끝
    67.98s  user  발화 시작: …I guess. What about the term itself, though?
    70.54s  <ret> 발화 (turn13 첫 프레임)
    70.62s  agent 발화 시작: <ret> The term "Big Brother" itself was inspired by… …a hist
    70.83s  user  발화 끝
    72.54s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.07s]: The term “1984” is often used to describe real-world events that resem
    79.05s  user  발화 시작: Mm-hmm.
    79.54s  user  발화 끝
    90.99s  agent 발화 끝
    91.01s  user  발화 시작: Tsar Nicholas II? I didn’t expect that. So, it's a Russian c
    95.62s  <ret> 발화 (turn16 첫 프레임)
    95.77s  agent 발화 시작: <ret> Indeed. Orwell associated the image with a pervasive, 
    96.01s  user  발화 끝
    97.62s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.97s]: George Orwell recalled a poster of Tsar Nicholas II from his childhood
    99.55s  user  발화 시작: Mhm.
   100.05s  user  발화 끝
   103.34s  <ret> 발화 (turn18 첫 프레임)
   103.58s  agent 발화 시작: <ret> The poster’s message was meant to convey… …the Tsar’s 
   103.74s  agent 발화 끝
   105.11s  ⚡SPAN 주입 [d'=1.76s / d_lead=3.08s]: Orwell associated the image with a pervasive, controlling authority… T
   115.05s  user  발화 시작: That’s fascinating. It’s funny how things get repurposed ove
   115.44s  agent 발화 끝
   118.13s  <ret> 발화 (turn20 첫 프레임)
   118.53s  agent 발화 시작: <ret> It is, isn’t it? Language evolves, and meanings shift 
   118.65s  user  발화 끝
   120.13s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.99s]: The poster’s message was meant to convey the Tsar’s omnipresence and w
   126.12s  user  발화 시작: Mm-hmm.
   126.62s  user  발화 끝
   129.15s  user  발화 시작: Yeah. Well, thanks for explaining all that, Braera. That was
   129.52s  agent 발화 끝
   132.67s  agent 발화 시작: You’re very welcome. It’s good to understand the roots of th
   132.76s  user  발화 끝
   138.50s  agent 발화 끝
