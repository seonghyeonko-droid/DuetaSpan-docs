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

# EXAMINER(FDB-v2) 단계: S1 I was wondering… where did the nam | S2 …It doesn't have roots in anything | S3 It really did. It’s used everywher | S4 You’re right. Hey, could you remin

     0.00s  user  발화 시작: I was wondering… where did the name “Big Brother” come from?
     5.79s  <ret> 발화 (turn1 첫 프레임)
     6.10s  agent 발화 시작: <ret> The phrase comes from George Orwell’s *Nineteen Eighty
     6.11s  user  발화 끝
     7.79s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.68s]: George Orwell’s novel Nineteen Eighty-Four, published in 1949, origina
    15.78s  agent 발화 끝
    16.17s  user  발화 시작: Nineteen forty-nine… so it's not some ancient phrase? That’s
    21.13s  user  발화 끝
    21.25s  agent 발화 시작: No, it’s not ancient at all. Orwell coined the term specific
    27.44s  user  발화 시작: Yeah, yeah.
    28.82s  user  발화 끝
    29.54s  agent 발화 끝
    30.50s  user  발화 시작: Surveillance… that makes sense. It’s about being watched, is
    34.24s  user  발화 끝
    34.27s  agent 발화 시작: Exactly. In the book, Big Brother is the omnipresent leader 
    37.26s  user  발화 시작: Mm-hmm.
    37.75s  user  발화 끝
    42.22s  user  발화 시작: So, Orwell just… made it up?…
    42.29s  agent 발화 끝
    44.80s  user  발화 끝
    46.10s  user  발화 시작: …It doesn't have roots in anything else?
    47.70s  <ret> 발화 (turn10 첫 프레임)
    48.09s  agent 발화 시작: <ret> Actually, there’s a little more to the story. Orwell d
    48.09s  user  발화 끝
    48.20s  ⚡SPAN 주입 [d'=0.50s / d_lead=3.42s]: Orwell drew inspiration from his experiences in a boarding school with
    53.36s  user  발화 시작: Yeah.
    53.77s  user  발화 끝
    60.05s  agent 발화 끝
    60.20s  user  발화 시작: A boarding school? That's… unexpected. What kind of monitori
    64.55s  user  발화 끝
    64.61s  agent 발화 시작: It was a system of prefects and masters who kept a very clos
    68.30s  user  발화 시작: Mm-hmm.
    68.79s  user  발화 끝
    73.31s  user  발화 시작: That sounds awful. I— I mean, it's still unsettling knowing 
    73.65s  agent 발화 끝
    77.37s  <ret> 발화 (turn16 첫 프레임)
    77.44s  agent 발화 시작: <ret> The phrase became a common idiom for invasive governme
    77.47s  user  발화 끝
    79.37s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.74s]: The phrase became a common idiom for invasive government monitoring af
    87.08s  user  발화 시작: It really did. It’s used everywhere now…
    87.18s  agent 발화 끝
    89.39s  user  발화 끝
    91.02s  user  발화 시작: …even casually.
    92.16s  agent 발화 시작: It has, hasn’t it? The power of literature to shape our lang
    92.35s  user  발화 끝
    97.09s  user  발화 시작: Mm-hmm.
    97.68s  user  발화 끝
    99.39s  agent 발화 끝
   100.86s  user  발화 시작: It is. [sigh] It’s just… a little scary, to think about.
   105.33s  agent 발화 시작: It can be, certainly. Awareness is the first step toward nav
   105.53s  user  발화 끝
   107.75s  user  발화 시작: Oh.
   108.38s  user  발화 끝
   111.67s  agent 발화 끝
   111.71s  user  발화 시작: You’re right. Hey, could you remind me of my schedule for to
   114.72s  <ret> 발화 (turn25 첫 프레임)
   114.95s  agent 발화 시작: <ret> Tomorrow, July eleventh, twenty twenty-six, you have a
   115.09s  user  발화 끝
   116.72s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.81s]: (tool result) Tomorrow, July eleventh, 2026, you have a meeting at nin
   123.54s  user  발화 시작: No, that's perfect. Thank you, Braera.
   123.76s  agent 발화 끝
   125.52s  agent 발화 시작: You’re very welcome. I’m glad I could help.
   125.62s  user  발화 끝
   126.87s  user  발화 시작: Yeah.
   127.36s  user  발화 끝
   128.19s  agent 발화 끝
   129.41s  user  발화 시작: I think that’s all for now.
   130.87s  user  발화 끝
   130.91s  agent 발화 시작: Enjoy your evening.
   132.28s  agent 발화 끝
