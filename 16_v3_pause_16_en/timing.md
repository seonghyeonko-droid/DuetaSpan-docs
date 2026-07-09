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
#       "date": "2026-08-04",
#       "category": "home",
#       "text": "User's home address is 148 Elm Street."
#     },
#     {
#       "date": "2026-06-19",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2026-03-14",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in May."
#     },
#     {
#       "date": "2026-03-06",
#       "category": "work",
#       "text": "User works as a graduate student."
#     },
#     {
#       "date": "2026-01-25",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-07-05",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2026-04-18",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 So, I was reading a book, and it m | S2 Hmm. So, it's about a government w | S3 A warning… so he was worried about | S4 So, “Big Brother” is just a charac

     0.00s  user  발화 시작: So, I was reading a book, and it mentioned “Big Brother”...
     3.37s  <ret> 발화 (turn1 첫 프레임)
     3.69s  agent 발화 시작: <ret> That’s a very interesting question! The concept has be
     3.79s  user  발화 끝
     5.37s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.32s]: [source: Wikipedia] “Big Brother is the all-pervasive totalitarian gov
     8.82s  agent 발화 시작: The phrase originates from George Orwell’s novel, Nineteen E
     9.01s  agent 발화 끝
    14.89s  agent 발화 끝
    15.15s  user  발화 시작: Nineteen Eighty-Four… I’ve heard of it…
    17.88s  user  발화 끝
    18.50s  user  발화 시작: …but I haven’t actually read it.
    20.34s  agent 발화 시작: It’s considered a profoundly impactful work, exploring theme
    20.57s  user  발화 끝
    25.74s  user  발화 시작: Yeah, yeah.
    26.98s  user  발화 끝
    27.57s  user  발화 시작: Hmm. So, it's about a government watching everyone?
    27.62s  agent 발화 끝
    30.71s  <ret> 발화 (turn8 첫 프레임)
    31.11s  agent 발화 시작: <ret> You’re touching on a relevant point. The novel explore
    31.22s  user  발화 끝
    31.68s  ⚡SPAN 주입 [d'=0.96s / d_lead=6.25s]: [source: Britannica] “Nineteen Eighty-Four depicts a future totalitari
    37.30s  agent 발화 시작: The book portrays a future where the government controls all
    37.36s  agent 발화 끝
    39.52s  user  발화 시작: Mm-hmm.
    40.15s  user  발화 끝
    43.09s  agent 발화 끝
    43.18s  user  발화 시작: Wow, that's… intense.
    45.47s  agent 발화 시작: It certainly does. Orwell wrote it as a warning, really, a c
    45.57s  user  발화 끝
    48.33s  user  발화 시작: Yeah.
    48.78s  user  발화 끝
    51.90s  user  발화 시작: A warning… so he was worried about this happening in real li
    52.09s  agent 발화 끝
    56.18s  <ret> 발화 (turn15 첫 프레임)
    56.33s  agent 발화 시작: <ret> He was deeply concerned about the rise of totalitarian
    56.35s  user  발화 끝
    57.94s  ⚡SPAN 주입 [d'=1.76s / d_lead=4.40s]: [source: The Orwell Foundation] “Orwell’s experiences during the Spani
    60.66s  agent 발화 시작: Orwell’s views were shaped by his experiences during the Spa
    60.73s  agent 발화 끝
    62.96s  user  발화 시작: Mm-hmm.
    63.46s  user  발화 끝
    66.26s  user  발화 시작: The Spanish Civil War… I should look that up.
    66.44s  agent 발화 끝
    69.49s  user  발화 끝
    69.52s  agent 발화 시작: It was *before*. He fought in the Spanish Civil War in the 1
    76.74s  agent 발화 끝
    77.23s  user  발화 시작: Okay, so the war influenced the book, then. That makes sense
    81.07s  user  발화 끝
    81.17s  agent 발화 시작: That's wonderful! Understanding the historical context often
    85.25s  user  발화 시작: Mm-hmm.
    85.75s  user  발화 끝
    87.19s  agent 발화 끝
    87.69s  user  발화 시작: So, “Big Brother” is just a character *in* the book, not som
    92.99s  <ret> 발화 (turn24 첫 프레임)
    93.22s  agent 발화 시작: <ret> Precisely. It’s a symbolic figure representing the opp
    93.33s  user  발화 끝
    94.27s  ⚡SPAN 주입 [d'=1.28s / d_lead=4.54s]: [source: Literary Devices] “Big Brother serves as the embodiment of th
    97.74s  agent 발화 시작: Big Brother embodies the Party’s absolute power and control 
    97.76s  agent 발화 끝
    99.43s  user  발화 시작: Yeah.
   100.06s  user  발화 끝
   102.28s  user  발화 시작: Right. That's good to know. Thanks, Braera.
   102.28s  agent 발화 끝
   105.24s  agent 발화 시작: You’re most welcome. I’m glad I could help clarify things fo
   105.42s  user  발화 끝
   110.47s  agent 발화 끝
