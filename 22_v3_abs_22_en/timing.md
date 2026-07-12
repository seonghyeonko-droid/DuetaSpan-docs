# v3_abs_22_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_abs_22",
#     "name": "Charlie",
#     "location": {
#       "city": "London",
#       "country": "United Kingdom",
#       "timezone": "Europe/London (GMT, UTC+0)",
#       "currency": "GBP (£)"
#     },
#     "nationality": "British",
#     "gender": "non-binary",
#     "age_range": "40s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-01-26",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in October."
#     },
#     {
#       "date": "2025-07-17",
#       "category": "hobby",
#       "text": "User is into vintage synth collecting."
#     },
#     {
#       "date": "2025-06-11",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2025-06-03",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-08-09",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-07-25",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-06-26",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 In which year CE did Muhammad get  | S2 What was the cause of his illness, | S3 Interesting. What about his family | S4 That’s good to know. I’m thinking 

     0.00s  user  발화 시작: In which year CE did Muhammad get sick?
     2.55s  <ret> 발화 (turn1 첫 프레임)
     2.70s  agent 발화 시작: <ret> It’s understandable to wonder about such details, but 
     2.71s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.95s]: (no information found)
     2.91s  user  발화 끝
     5.47s  user  발화 시작: Yeah.
     5.92s  user  발화 끝
    11.53s  user  발화 시작: That’s a shame. Do you know when he died, though?
    11.65s  agent 발화 끝
    13.75s  <ret> 발화 (turn4 첫 프레임)
    13.91s  agent 발화 시작: <ret> Muhammad passed away on Monday, June eighth, six thirt
    13.91s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.37s]: Muhammad died on Monday, 8 June 632 CE, in Medina.
    14.02s  user  발화 끝
    23.28s  agent 발화 끝
    23.31s  user  발화 시작: Six thirty-two… so he wasn't very old, was he?
    27.15s  agent 발화 시작: It’s true, his life was relatively short, though impactful. 
    27.15s  user  발화 끝
    33.55s  user  발화 시작: What was the cause of his illness, if it’s not known when he
    33.91s  agent 발화 끝
    37.62s  user  발화 끝
    37.77s  <ret> 발화 (turn8 첫 프레임)
    37.93s  agent 발화 시작: <ret> Again, a precise cause remains unknown to historians—i
    37.93s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.35s]: (no information found)
    43.50s  user  발화 시작: …But was it poison, do you think? I read something about tha
    44.28s  agent 발화 끝
    47.15s  agent 발화 시작: That’s a question that’s been debated for centuries, actuall
    47.20s  user  발화 끝
    51.09s  user  발화 시작: Yeah.
    51.50s  user  발화 끝
    54.93s  agent 발화 끝
    55.20s  user  발화 시작: Interesting. What about his family? Did he have many childre
    58.93s  <ret> 발화 (turn13 첫 프레임)
    59.17s  agent 발화 시작: <ret> He did, in fact, have at least seven children—six sons
    59.17s  ⚡SPAN 주입 [d'=1.68s / d_lead=7.74s]: Muhammad had at least seven children, including six sons and four daug
    59.27s  user  발화 끝
    66.91s  agent 발화 끝
    67.21s  user  발화 시작: Wow, that’s a lot.
    68.82s  agent 발화 시작: Yes, it is. Raising a family alongside leading a religious a
    68.87s  user  발화 끝
    77.77s  agent 발화 끝
    78.24s  user  발화 시작: I can imagine! Was one of his daughters particularly well-kn
    82.22s  <ret> 발화 (turn17 첫 프레임)
    82.38s  agent 발화 시작: <ret> Fatima, his daughter, is deeply revered in Islam as a 
    82.38s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.37s]: Fatima, Muhammad's daughter, is highly revered in Islam as a role mode
    82.40s  user  발화 끝
    91.57s  user  발화 시작: That’s good to know. I’m thinking about a career change, act
    91.75s  agent 발화 끝
    95.58s  user  발화 끝
    95.92s  agent 발화 시작: Oh, that’s a big step! It’s very brave of you to consider su
   103.85s  agent 발화 끝
   105.61s  user  발화 시작: Yes, please. I feel really stuck in my current job.
   108.84s  user  발화 끝
   108.90s  agent 발화 시작: Feeling stuck is a common experience, and it's good you're a
   117.62s  agent 발화 끝
