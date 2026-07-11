# v3_fake__14_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__14",
#     "name": "Jordan",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "non-binary",
#     "age_range": "50s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-28",
#       "category": "hobby",
#       "text": "User is into vintage synth collecting."
#     },
#     {
#       "date": "2026-01-15",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in December."
#     },
#     {
#       "date": "2025-08-29",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     },
#     {
#       "date": "2025-06-28",
#       "category": "work",
#       "text": "User works as a architect."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-01-01",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-12-03",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-09-06",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Do you know who wrote “Night the L | S2 Yeah, it is. What was Bobby Russel | S3 I guess so. What kind of music did | S4 Oh, that's too bad.

     0.00s  user  발화 시작: Do you know who wrote “Night the Lights Went Out in Georgia”
     0.00s  <ret> 발화 (turn1 첫 프레임)
     0.05s  agent 발화 시작: <ret> That song was written by Bobby Russell, and it really 
     0.05s  ⚡SPAN 주입 [d'=0.09s / d_lead=0.09s]: Bobby Russell wrote "Night the Lights Went Out in Georgia", which beca
     0.05s  user  발화 끝
     0.11s  <ret> 발화 (turn5 첫 프레임)
     0.14s  user  발화 시작: Oh, okay. That’s interesting.
     0.14s  agent 발화 끝
     0.16s  <ret> 발화 (turn9 첫 프레임)
     0.16s  agent 발화 시작: It’s lovely when a song’s story connects with so many people
     0.16s  user  발화 끝
     0.22s  user  발화 시작: Yeah, it is. What was Bobby Russell known for besides that s
     0.22s  agent 발화 끝
     0.27s  agent 발화 시작: <ret> Beyond that well-known song, Bobby Russell was a proli
     0.27s  ⚡SPAN 주입 [d'=0.09s / d_lead=0.09s]: Bobby Russell was an American country and pop songwriter, also known f
     0.27s  user  발화 끝
     0.34s  <ret> 발화 (turn10 첫 프레임)
     0.36s  user  발화 시작: Yeah, yeah.
     0.36s  agent 발화 끝
     0.37s  agent 발화 시작: He had a real gift for crafting memorable melodies and lyric
     0.37s  user  발화 끝
     0.42s  <ret> 발화 (turn15 첫 프레임)
     0.45s  user  발화 시작: Did he write other popular songs?
     0.45s  agent 발화 끝
     0.48s  agent 발화 시작: <ret> Yes, he also penned “Little Brave Ones”, which became 
     0.48s  ⚡SPAN 주입 [d'=0.10s / d_lead=0.10s]: Russell penned "Little Brave Ones", which became a hit for Patsy Cline
     0.48s  user  발화 끝
     0.53s  <ret> 발화 (turn13 첫 프레임)
     0.58s  agent 발화 시작: <ret> Sometimes, a song can truly capture a moment in time, 
     0.58s  ⚡SPAN 주입(IRRELEVANT) [d'=0.06s / d_lead=0.06s]: The current temperature in Reykjavik, Iceland is 8.2°C, humidity is 88
     0.58s  agent 발화 끝
     0.64s  user  발화 시작: Yeah, totally.
     0.64s  agent 발화 끝
     0.64s  user  발화 시작: I guess so. What kind of music did he usually write?
     0.64s  user  발화 끝
     0.69s  agent 발화 시작: <ret> He mainly wrote country and pop songs, often focusing 
     0.69s  ⚡SPAN 주입 [d'=0.09s / d_lead=0.09s]: Bobby Russell primarily wrote country and pop songs, often with a stor
     0.69s  user  발화 끝
     0.78s  user  발화 시작: That makes sense. Was he still writing music recently?
     0.78s  agent 발화 끝
     0.82s  agent 발화 시작: <ret> Sadly, Bobby Russell passed away on September eighth, 
     0.82s  ⚡SPAN 주입 [d'=0.08s / d_lead=0.08s]: Bobby Russell died on September 8, 2002, in Hendersonville, Tennessee,
     0.82s  user  발화 끝
     0.90s  user  발화 시작: Yeah.
     0.90s  agent 발화 끝
     0.90s  user  발화 시작: Oh, that's too bad.
     0.90s  user  발화 끝
     0.92s  agent 발화 시작: It’s always sad to lose someone with such a talent for touch
     0.92s  user  발화 끝
     1.00s  agent 발화 끝
