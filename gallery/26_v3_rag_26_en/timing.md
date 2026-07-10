# v3_rag_26_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_26",
#     "name": "Emilia",
#     "location": {
#       "city": "New York",
#       "country": "United States",
#       "timezone": "America/New_York (EST, UTC-5)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "female",
#     "age_range": "late 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-10",
#       "category": "home",
#       "text": "User's home address is 249 Cedar Lane."
#     },
#     {
#       "date": "2026-04-10",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2026-02-09",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-11-30",
#       "category": "work",
#       "text": "User works as a accountant."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-09-24",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-05-28",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Hey, uh, I was wondering about fla | S2 Hmm, Belgium… I wasn’t thinking of | S3 Right, okay. Good to know. I keep  | S4 Oh, okay. That’s good…

     0.00s  user  발화 시작: Hey, uh, I was wondering about flags… like, which countries 
     7.00s  <ret> 발화 (turn1 첫 프레임)
     7.13s  user  발화 끝
     7.23s  agent 발화 시작: <ret> The flag of Germany has black, red, and yellow horizon
     9.00s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.45s]: The flag of Germany features black, red, and yellow horizontal bands.
    13.64s  user  발화 시작: Oh, Germany, right. I knew that one, I think. But are there 
    13.68s  agent 발화 끝
    19.53s  <ret> 발화 (turn3 첫 프레임)
    19.62s  user  발화 끝
    19.77s  agent 발화 시작: <ret> Yes, Belgium also has a flag with those colors! It fea
    21.53s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.62s]: Belgium's flag consists of three vertical bands of black, yellow, and 
    22.82s  user  발화 시작: Right.
    23.54s  user  발화 끝
    26.36s  user  발화 시작: Hmm, Belgium… I wasn’t thinking of Europe at all. This is fo
    26.39s  agent 발화 끝
    32.98s  user  발화 끝
    32.99s  agent 발화 시작: A quiz sounds fun! Is it a geography quiz, or something else
    37.57s  agent 발화 끝
    37.68s  user  발화 시작: It’s a general knowledge one, mostly visual. Okay, so German
    45.38s  <ret> 발화 (turn8 첫 프레임)
    45.70s  agent 발화 시작: <ret> Actually, Austria's flag is red, white, and red—it doe
    45.74s  user  발화 끝
    47.38s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.07s]: The flag of Austria is composed of three horizontal bands of red, whit
    51.77s  agent 발화 끝
    51.83s  user  발화 시작: Right, okay. Good to know. I keep getting those central Euro
    58.23s  agent 발화 시작: It's very easy to do! They share some similarities in design
    58.32s  user  발화 끝
    62.37s  user  발화 시작: But are there any other flags with black, red, and yellow? I
    62.43s  agent 발화 끝
    67.20s  <ret> 발화 (turn12 첫 프레임)
    67.60s  agent 발화 시작: <ret> It appears Germany and Belgium are the only internatio
    67.74s  user  발화 끝
    69.20s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.91s]: No other internationally recognized national flag contains both black,
    72.70s  user  발화 시작: Yeah.
    73.20s  user  발화 끝
    74.51s  agent 발화 끝
    75.79s  user  발화 시작: Oh, okay. That’s good…
    78.28s  user  발화 끝
    80.32s  user  발화 시작: …to know. Thanks, Kiora!
    82.54s  user  발화 끝
    82.61s  agent 발화 시작: You’re very welcome! I’m glad I could help with your quiz. B
    87.70s  agent 발화 끝
