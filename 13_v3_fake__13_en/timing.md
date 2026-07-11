# v3_fake__13_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__13",
#     "name": "Manon",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "female",
#     "age_range": "50s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-20",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     },
#     {
#       "date": "2026-05-09",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in March."
#     },
#     {
#       "date": "2026-02-15",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2025-09-26",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2025-06-29",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-27",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-09-20",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-07-20",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I was wondering, what is the movie | S2 That sounds incredibly stressful. | S3 That’s a huge impact! | S4 He’s such a talented actor.

     0.00s  user  발화 시작: I was wondering, what is the movie *The Imitation Game* abou
     3.36s  <ret> 발화 (turn1 첫 프레임)
     3.59s  agent 발화 시작: <ret> It tells the story of Alan Turing, a brilliant mind—
     3.60s  ⚡SPAN 주입 [d'=1.68s / d_lead=3.56s]: The film depicts the life of British cryptanalyst Alan Turing, who led
     3.74s  user  발화 끝
     6.49s  user  발화 시작: …was he the only one working on that?
     7.15s  agent 발화 끝
     8.76s  <ret> 발화 (turn3 첫 프레임)
     9.03s  user  발화 끝
     9.15s  agent 발화 시작: <ret> Bletchley Park was where the UK’s codebreakers worked 
     9.16s  ⚡SPAN 주입 [d'=1.20s / d_lead=4.30s]: Bletchley Park was the central site for the United Kingdom's Governmen
    10.93s  user  발화 시작: Yeah.
    11.66s  user  발화 끝
    13.45s  agent 발화 끝
    13.56s  user  발화 시작: That sounds incredibly stressful.
    15.62s  <ret> 발화 (turn6 첫 프레임)
    15.93s  agent 발화 시작: <ret> He developed a machine called the “Bombe” to help brea
    15.94s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.59s]: Alan Turing developed a machine called the "Bombe" to help decipher th
    16.01s  user  발화 끝
    17.53s  user  발화 시작: Yeah, totally.
    18.90s  user  발화 끝
    20.41s  agent 발화 시작: It significantly sped up the process of cracking those compl
    20.51s  agent 발화 끝
    23.13s  user  발화 시작: Yeah, yeah.
    24.42s  user  발화 끝
    24.76s  user  발화 시작: Did cracking the code actually shorten the war?
    24.85s  agent 발화 끝
    27.60s  <ret> 발화 (turn11 첫 프레임)
    27.81s  user  발화 끝
    27.84s  agent 발화 시작: <ret> Many historians believe their work shortened the war b
    27.84s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.34s]: Historians estimate that the work at Bletchley Park shortened the war 
    32.01s  user  발화 시작: That’s a huge impact!
    32.19s  agent 발화 끝
    33.34s  <ret> 발화 (turn13 첫 프레임)
    33.74s  agent 발화 시작: <ret> It really was, saving countless lives in the process.
    33.74s  ⚡SPAN 주입(IRRELEVANT) [d'=2.00s / d_lead=3.65s]: The current temperature in Rome, Italy is 28.5°C with clear skies and 
    33.77s  user  발화 끝
    37.17s  agent 발화 시작: It’s a story of immense courage and intellectual achievement
    37.40s  agent 발화 끝
    40.49s  user  발화 시작: I think I’ll add that to my watchlist.
    40.78s  agent 발화 끝
    42.70s  <ret> 발화 (turn16 첫 프레임)
    42.85s  agent 발화 시작: <ret> Benedict Cumberbatch was nominated for an Oscar for hi
    42.86s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.63s]: Benedict Cumberbatch received an Academy Award nomination for his port
    43.08s  user  발화 끝
    46.48s  agent 발화 끝
    46.60s  user  발화 시작: He’s such a talented actor.
    48.63s  agent 발화 시작: He truly captured Turing’s complexity, I think.
    48.67s  user  발화 끝
    51.88s  agent 발화 끝
    52.07s  user  발화 시작: Thanks for telling me about it, Broia.
    54.23s  agent 발화 시작: You’re very welcome. It's a story that deserves to be rememb
    54.28s  user  발화 끝
    57.70s  agent 발화 끝
