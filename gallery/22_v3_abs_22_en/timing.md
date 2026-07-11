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
     0.00s  <ret> 발화 (turn1 첫 프레임)
     0.00s  <ret> 발화 (turn4 첫 프레임)
     0.00s  <ret> 발화 (turn8 첫 프레임)
     0.03s  agent 발화 시작: <ret> It’s understandable to wonder about such details, but 
     0.03s  ⚡SPAN 주입 [d'=0.06s / d_lead=0.06s]: (no information found)
     0.03s  user  발화 끝
     0.09s  user  발화 시작: Yeah.
     0.09s  agent 발화 끝
     0.09s  user  발화 시작: That’s a shame. Do you know when he died, though?
     0.09s  user  발화 끝
     0.13s  agent 발화 시작: <ret> Muhammad passed away on Monday, June eighth, six thirt
     0.13s  ⚡SPAN 주입 [d'=0.07s / d_lead=0.07s]: Muhammad died on Monday, 8 June 632 CE, in Medina.
     0.13s  user  발화 끝
     0.19s  user  발화 시작: Six thirty-two… so he wasn't very old, was he?
     0.19s  agent 발화 끝
     0.22s  agent 발화 시작: It’s true, his life was relatively short, though impactful. 
     0.22s  user  발화 끝
     0.27s  user  발화 시작: What was the cause of his illness, if it’s not known when he
     0.27s  agent 발화 끝
     0.32s  agent 발화 시작: <ret> Again, a precise cause remains unknown to historians—i
     0.32s  ⚡SPAN 주입 [d'=0.05s / d_lead=0.05s]: (no information found)
     0.32s  user  발화 끝
     0.34s  <ret> 발화 (turn13 첫 프레임)
     0.37s  <ret> 발화 (turn17 첫 프레임)
     0.37s  user  발화 시작: …But was it poison, do you think? I read something about tha
     0.37s  agent 발화 끝
     0.41s  agent 발화 시작: That’s a question that’s been debated for centuries, actuall
     0.41s  user  발화 끝
     0.47s  user  발화 시작: Yeah.
     0.47s  agent 발화 끝
     0.47s  user  발화 시작: Interesting. What about his family? Did he have many childre
     0.47s  user  발화 끝
     0.50s  agent 발화 시작: <ret> He did, in fact, have at least seven children—six sons
     0.50s  ⚡SPAN 주입 [d'=0.06s / d_lead=0.06s]: Muhammad had at least seven children, including six sons and four daug
     0.50s  user  발화 끝
     0.57s  user  발화 시작: Wow, that’s a lot.
     0.57s  agent 발화 끝
     0.58s  agent 발화 시작: Yes, it is. Raising a family alongside leading a religious a
     0.58s  user  발화 끝
     0.66s  user  발화 시작: I can imagine! Was one of his daughters particularly well-kn
     0.66s  agent 발화 끝
     0.69s  agent 발화 시작: <ret> Fatima, his daughter, is deeply revered in Islam as a 
     0.69s  ⚡SPAN 주입 [d'=0.08s / d_lead=0.08s]: Fatima, Muhammad's daughter, is highly revered in Islam as a role mode
     0.69s  user  발화 끝
     0.77s  user  발화 시작: That’s good to know. I’m thinking about a career change, act
     0.77s  agent 발화 끝
     0.80s  agent 발화 시작: Oh, that’s a big step! It’s very brave of you to consider su
     0.80s  user  발화 끝
     0.89s  user  발화 시작: Yes, please. I feel really stuck in my current job.
     0.89s  agent 발화 끝
     0.92s  agent 발화 시작: Feeling stuck is a common experience, and it's good you're a
     0.92s  user  발화 끝
     1.00s  agent 발화 끝
