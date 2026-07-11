# v3_fake__14_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__14",
#     "name": "Paul",
#     "location": {
#       "city": "New York",
#       "country": "United States",
#       "timezone": "America/New_York (EST, UTC-5)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "male",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-03-28",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-10-21",
#       "category": "home",
#       "text": "User's home address is 837 Pine Court."
#     },
#     {
#       "date": "2025-10-01",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2025-08-06",
#       "category": "work",
#       "text": "User works as a architect."
#     },
#     {
#       "date": "2025-07-03",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in October."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-26",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 When was the last solar eclipse vi | S2 Was it visible across all of North | S3 …did it affect flights at all? | S4 An annular eclipse? What’s that?

     0.00s  user  발화 시작: When was the last solar eclipse visible in North America?
     0.00s  <ret> 발화 (turn1 첫 프레임)
     0.04s  agent 발화 시작: <ret> Well, that’s a fascinating question! The most recent t
     0.04s  ⚡SPAN 주입 [d'=0.12s / d_lead=0.12s]: The most recent total solar eclipse visible in North America was on Au
     0.04s  user  발화 끝
     0.14s  <ret> 발화 (turn6 첫 프레임)
     0.16s  user  발화 시작: Oh, wow, 2017… that feels like ages ago.
     0.16s  agent 발화 끝
     0.19s  agent 발화 시작: It does seem to fly by, doesn't it? Time has a funny way of 
     0.19s  user  발화 끝
     0.20s  <ret> 발화 (turn11 첫 프레임)
     0.26s  user  발화 시작: Yeah.
     0.26s  agent 발화 끝
     0.26s  user  발화 시작: Was it visible across all of North America?
     0.26s  user  발화 끝
     0.30s  agent 발화 시작: <ret> It wasn’t visible everywhere, but the path of totality
     0.30s  ⚡SPAN 주입 [d'=0.09s / d_lead=0.09s]: The path of totality for the August 21, 2017 eclipse crossed the entir
     0.30s  user  발화 끝
     0.39s  user  발화 시작: Yeah, yeah.
     0.39s  agent 발화 끝
     0.40s  user  발화 시작: I think I remember hearing about that one.
     0.40s  user  발화 끝
     0.42s  <ret> 발화 (turn18 첫 프레임)
     0.43s  agent 발화 시작: It was a really big event, and widely covered! People travel
     0.43s  user  발화 끝
     0.49s  user  발화 시작: …did it affect flights at all?
     0.49s  agent 발화 끝
     0.52s  agent 발화 시작: <ret> That's a good point to consider.
     0.52s  ⚡SPAN 주입 [d'=0.03s / d_lead=0.03s]: (no information found)
     0.52s  user  발화 끝
     0.54s  <ret> 발화 (turn16 첫 프레임)
     0.54s  agent 발화 시작: I’m sorry, but I don’t have any information about flight dis
     0.54s  agent 발화 끝
     0.61s  user  발화 시작: Yeah, yeah.
     0.61s  agent 발화 끝
     0.62s  agent 발화 시작: Perhaps there weren't significant disruptions, or the data i
     0.62s  user  발화 끝
     0.66s  user  발화 시작: Hmm, interesting. What about the one before that?
     0.66s  agent 발화 끝
     0.70s  agent 발화 시작: <ret> Before 2017, there was a partial solar eclipse visible
     0.70s  ⚡SPAN 주입 [d'=0.10s / d_lead=0.10s]: A partial solar eclipse was visible across North America on October 27
     0.70s  user  발화 끝
     0.80s  user  발화 시작: An annular eclipse? What’s that?
     0.80s  agent 발화 끝
     0.82s  agent 발화 시작: <ret> —and doesn't completely cover the sun, leaving a brigh
     0.82s  ⚡SPAN 주입(IRRELEVANT) [d'=0.07s / d_lead=0.07s]: The current price of Bitcoin is $67,385.80, with a 24-hour change of +
     0.82s  user  발화 끝
     0.89s  user  발화 시작: Uh-huh.
     0.89s  agent 발화 끝
     0.90s  user  발화 시작: That sounds cool. I'd love to see one sometime.
     0.90s  user  발화 끝
     0.94s  agent 발화 시작: That’s wonderful! Experiencing an eclipse is a truly unforge
     0.94s  user  발화 끝
     1.00s  agent 발화 끝
