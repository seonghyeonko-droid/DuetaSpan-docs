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

# EXAMINER(FDB-v2) 단계: S1 So, I was reading this book, and i | S2 Wow, that sounds pretty grim. Uhhh | S3 Right. Well… | S4 Okay, so pretty close to the title

     0.00s  user  발화 시작: So, I was reading this book, and it mentioned Big Brother…
     2.92s  <ret> 발화 (turn1 첫 프레임)
     3.24s  agent 발화 시작: <ret> The phrase “Big Brother” actually comes from literatur
     3.38s  user  발화 끝
     4.92s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.83s]: "[source: Wikipedia] The term 'Big Brother' originates from the 1949 n
    11.07s  agent 발화 끝
    11.45s  user  발화 시작: Nineteen Eighty-Four? That sounds……
    13.81s  user  발화 끝
    14.73s  user  발화 시작: …familiar. What’s it about, briefly?
    16.60s  <ret> 발화 (turn4 첫 프레임)
    17.00s  agent 발화 시작: <ret> It’s a dystopian novel set in a place called Oceania, 
    17.04s  user  발화 끝
    18.60s  ⚡SPAN 주입 [d'=2.00s / d_lead=12.43s]: "[source: Britannica] Nineteen Eighty-Four is a dystopian novel set in
    26.37s  user  발화 시작: Yeah, yeah.
    27.84s  user  발화 끝
    29.42s  agent 발화 끝
    30.32s  user  발화 시작: Wow, that sounds pretty grim. Uhhh, was Orwell trying to war
    35.83s  <ret> 발화 (turn7 첫 프레임)
    36.23s  agent 발화 시작: <ret> Orwell intended the book to be a warning against total
    36.34s  user  발화 끝
    37.75s  ⚡SPAN 주입 [d'=1.92s / d_lead=11.45s]: "[source: History.com] Orwell wrote Nineteen Eighty-Four as a warning 
    40.56s  user  발화 시작: Mm-hmm.
    41.06s  user  발화 끝
    47.68s  agent 발화 끝
    47.90s  user  발화 시작: Definitely. So, is it, like, a direct commentary on any spec
    52.93s  <ret> 발화 (turn10 첫 프레임)
    52.94s  user  발화 끝
    53.01s  agent 발화 시작: <ret> It wasn’t meant to be about one single country or lead
    54.93s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.81s]: "[source: Literary Hub] While not directly based on one figure, Ninete
    56.84s  user  발화 시작: Yeah.
    57.33s  user  발화 끝
    61.82s  agent 발화 끝
    62.02s  user  발화 시작: I see. That makes sense. It’s interesting how things like th
    66.36s  user  발화 끝
    66.42s  agent 발화 시작: It is, isn’t it? Concepts from great literature often become
    69.54s  user  발화 시작: Mm-hmm.
    70.09s  user  발화 끝
    74.12s  agent 발화 끝
    74.13s  user  발화 시작: Right. Well…
    75.32s  user  발화 끝
    76.21s  user  발화 시작: …I’m trying to plan a trip… to London, actually.
    79.40s  <ret> 발화 (turn17 첫 프레임)
    79.71s  agent 발화 시작: <ret> You could visit the Orwell Room at University College 
    79.91s  user  발화 끝
    81.40s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.16s]: "(tool result) UCL University College London has a dedicated Orwell Ro
    87.78s  user  발화 시작: A pub? That sounds nice. What year did Orwell actually *writ
    87.86s  agent 발화 끝
    92.58s  <ret> 발화 (turn19 첫 프레임)
    92.97s  agent 발화 시작: <ret> George Orwell began writing Nineteen Eighty-Four in ni
    93.24s  user  발화 끝
    94.58s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.69s]: "[source: George Orwell Online] George Orwell began writing Nineteen E
    98.23s  user  발화 시작: Mm-hmm.
    98.72s  user  발화 끝
   100.65s  agent 발화 끝
   102.17s  user  발화 시작: Okay, so pretty close to the title year. Hmm… are there any 
   107.39s  <ret> 발화 (turn22 첫 프레임)
   107.54s  agent 발화 시작: <ret> The narration by Simon Vance is very popular and avail
   107.81s  user  발화 끝
   108.67s  ⚡SPAN 주입 [d'=1.28s / d_lead=4.91s]: "(tool result) The Simon Vance narration of Nineteen Eighty-Four is hi
   109.36s  user  발화 시작: Yeah.
   109.86s  user  발화 끝
   112.45s  agent 발화 끝
   112.46s  user  발화 시작: Simon Vance… I’ll look him up. That’s really helpful, thanks
   116.12s  agent 발화 시작: You’re very welcome. I’m glad I could help you explore that 
   116.16s  user  발화 끝
   118.83s  user  발화 시작: Right.
   119.23s  user  발화 끝
   123.95s  agent 발화 끝
   124.36s  user  발화 시작: I think that’s all for now.
   125.68s  agent 발화 시작: Very well. Enjoy your trip to London, and I hope you find th
   125.78s  user  발화 끝
   132.21s  agent 발화 끝
