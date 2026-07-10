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

# EXAMINER(FDB-v2) 단계: S1 I was just wondering… where does t | S2 Surveillance, right. That’s… unset | S3 …are there any real-world examples | S4 It's funny how books can do that… 

     0.00s  user  발화 시작: I was just wondering… where does the phrase “big brother” ac
     4.35s  user  발화 끝
     6.00s  user  발화 시작: …I always assumed it was just a common saying…
     8.54s  user  발화 끝
     9.92s  user  발화 시작: …but it feels like there's more to it.
    11.52s  <ret> 발화 (turn3 첫 프레임)
    11.84s  agent 발화 시작: <ret> The phrase "big brother" actually comes from literatur
    11.90s  user  발화 끝
    13.52s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.05s]: [source: Wikipedia] "The term 'Big Brother' originated from George Orw
    20.61s  user  발화 시작: Oh, a book! That makes sense. Is it about actual brothers, o
    20.88s  agent 발화 끝
    26.26s  user  발화 끝
    26.34s  agent 발화 시작: It’s quite metaphorical, representing government surveillanc
    32.76s  user  발화 시작: Yeah, yeah.
    34.09s  user  발화 끝
    34.92s  agent 발화 끝
    35.89s  user  발화 시작: Surveillance, right. That’s… unsettling. Is that book still 
    40.99s  <ret> 발화 (turn8 첫 프레임)
    41.23s  agent 발화 시작: <ret> It is very widely read, actually… with over fifty mill
    41.35s  user  발화 끝
    42.67s  ⚡SPAN 주입 [d'=1.68s / d_lead=6.63s]: [source: Goodreads] " *Nineteen Eighty-Four* has sold over 50 million 
    43.71s  user  발화 시작: Mm-hmm.
    44.34s  user  발화 끝
    47.84s  user  발화 시작: Wow, fifty million! That’s incredible. It sounds like a pret
    47.85s  agent 발화 끝
    53.48s  agent 발화 시작: It certainly has been. The concepts within it continue to re
    53.63s  user  발화 끝
    56.28s  user  발화 시작: Yeah.
    57.00s  user  발화 끝
    59.81s  user  발화 시작: Hmm. So, if it's about surveillance…
    59.93s  agent 발화 끝
    62.58s  user  발화 끝
    64.09s  user  발화 시작: …are there any real-world examples that people often compare
    67.59s  <ret> 발화 (turn15 첫 프레임)
    67.67s  agent 발화 시작: <ret> It's often used when discussing government surveillanc
    67.84s  user  발화 끝
    69.03s  ⚡SPAN 주입 [d'=1.44s / d_lead=5.65s]: [source: Electronic Frontier Foundation] "The term 'Big Brother' is fr
    69.92s  user  발화 시작: Mm-hmm.
    70.56s  user  발화 끝
    73.21s  user  발화 시작: PRISM… I think I’ve heard of that. Was that the one Snowden 
    73.32s  agent 발화 끝
    77.25s  agent 발화 시작: Yes, Edward Snowden’s revelations in 2013 brought attention 
    77.42s  user  발화 끝
    84.75s  agent 발화 끝
    85.02s  user  발화 시작: So, Orwell basically predicted that kind of thing? That’s a 
    89.23s  user  발화 끝
    89.27s  agent 발화 시작: In a way, yes. He foresaw the potential for technology to be
    94.33s  user  발화 시작: Mm-hmm.
    95.06s  user  발화 끝
    96.68s  agent 발화 끝
    97.77s  user  발화 시작: It's funny how books can do that… predict the future, almost
   101.32s  agent 발화 시작: [curious] It's a testament to insightful observation and a d
   101.47s  user  발화 끝
   103.53s  user  발화 시작: Yeah.
   104.11s  user  발화 끝
   107.08s  user  발화 시작: I suppose so. I might actually have to read that book now.
   107.25s  agent 발화 끝
   110.27s  agent 발화 시작: It’s a powerful read, though it can be quite thought-provoki
   110.49s  user  발화 끝
   112.10s  user  발화 시작: Right.
   112.74s  user  발화 끝
   115.63s  user  발화 시작: Thanks, Braera. I appreciate the info.
   115.64s  agent 발화 끝
   117.91s  agent 발화 시작: You’re very welcome. It’s my pleasure to help you explore in
   118.12s  user  발화 끝
   123.52s  agent 발화 끝
