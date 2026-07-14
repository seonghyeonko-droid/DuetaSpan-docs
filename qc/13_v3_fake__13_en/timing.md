# v3_fake__13_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__13",
#     "name": "Emilia",
#     "location": {
#       "city": "Paris",
#       "country": "France",
#       "timezone": "Europe/Paris (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "French",
#     "gender": "female",
#     "age_range": "early 20s",
#     "language": "French"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-08",
#       "category": "sibling",
#       "text": "User has a younger sibling named Noah."
#     },
#     {
#       "date": "2026-04-27",
#       "category": "employer",
#       "text": "User works at an e-commerce company."
#     },
#     {
#       "date": "2026-04-23",
#       "category": "trip",
#       "text": "User is planning a trip to Portugal in February."
#     },
#     {
#       "date": "2026-04-19",
#       "category": "work",
#       "text": "User works as a nurse."
#     },
#     {
#       "date": "2026-02-15",
#       "category": "show",
#       "text": "User is currently watching a stand-up comedy special."
#     },
#     {
#       "date": "2026-01-26",
#       "category": "emergency",
#       "text": "User's emergency contact is Marco."
#     },
#     {
#       "date": "2026-01-24",
#       "category": "airline",
#       "text": "User usually flies with Air France."
#     },
#     {
#       "date": "2026-01-17",
#       "category": "phone",
#       "text": "User uses a Galaxy Z Flip."
#     },
#     {
#       "date": "2025-12-15",
#       "category": "dish",
#       "text": "User's go-to comfort dish is mushroom risotto."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-07",
#       "title": "Building a PC",
#       "bullets": [
#         "budget around 2M won for gaming",
#         "torn between two GPUs"
#       ]
#     },
#     {
#       "date": "2026-02-12",
#       "title": "Planning a dinner party",
#       "bullets": [
#         "hosting eight friends on Saturday",
#         "one guest is gluten-free"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Hey Taeon, my son is getting into  | S2 Yeah, definitely. What about Studi | S3 Totoro, got it. I'll… | S4 No, that’s alright. I think I can 

     0.00s  user  발화 시작: Hey Taeon, my son is getting into anime, and he wants to wat
     5.84s  <ret> 발화 (turn1 첫 프레임)
     6.44s  agent 발화 시작: <ret> Oh, that's a great choice! Future Diary was adapted in
     6.44s  user  발화 끝
     7.21s  ⚡SPAN 주입 [d'=1.37s / d_lead=10.85s]: Future Diary, also known as Mirai Nikki, is a Japanese manga series wr
    17.30s  user  발화 시작: Yeah.
    17.30s  agent 발화 끝
    17.64s  user  발화 시작: Twenty-six, okay. Is it pretty dark? He’s ten.
    17.64s  user  발화 끝
    20.35s  agent 발화 시작: It definitely has some darker themes, yes. It’s about a surv
    20.35s  user  발화 끝
    29.17s  user  발화 시작: Hmm. Maybe we'll start with something lighter.
    29.17s  agent 발화 끝
    31.00s  <ret> 발화 (turn6 첫 프레임)
    31.41s  ⚡SPAN 주입 [d'=0.41s / d_lead=4.75s]: The city of Busan, South Korea, has a population of 3.4 million people
    31.54s  agent 발화 시작: <ret> Speaking of finding things, I was just reading about B
    31.54s  user  발화 끝
    36.29s  user  발화 시작: Uh-huh.
    36.29s  agent 발화 끝
    36.63s  agent 발화 시작: …with so much to offer. But let’s stick to anime for now, ok
    36.63s  user  발화 끝
    41.04s  user  발화 시작: Yeah, definitely. What about Studio Ghibli films? Are those 
    41.04s  agent 발화 끝
    45.11s  agent 발화 시작: Mm-hmm.
    45.11s  user  발화 끝
    45.20s  <ret> 발화 (turn11 첫 프레임)
    45.45s  agent 발화 시작: <ret> Oh, absolutely! Studio Ghibli films are wonderful for 
    45.45s  agent 발화 끝
    45.95s  ⚡SPAN 주입 [d'=0.75s / d_lead=7.80s]: Studio Ghibli films are acclaimed Japanese animated feature films, oft
    53.25s  user  발화 시작: Yeah.
    53.25s  agent 발화 끝
    53.59s  user  발화 시작: That sounds perfect. Which one would you recommend as a firs
    53.59s  user  발화 끝
    57.66s  <ret> 발화 (turn14 첫 프레임)
    58.00s  agent 발화 시작: <ret> I think My Neighbor Totoro is a fantastic starting poi
    58.00s  user  발화 끝
    58.62s  ⚡SPAN 주입 [d'=1.15s / d_lead=9.50s]: My Neighbor Totoro, released in 1988, is a beloved Studio Ghibli film 
    67.50s  user  발화 시작: Okay.
    67.50s  agent 발화 끝
    67.84s  user  발화 시작: Totoro, got it. I'll…
    67.84s  user  발화 끝
    69.19s  user  발화 시작: …look that up tonight.
    69.19s  user  발화 끝
    69.98s  <ret> 발화 (turn18 첫 프레임)
    70.55s  agent 발화 시작: <ret> I was just checking the weather… it seems Melbourne is
    70.55s  user  발화 끝
    71.11s  ⚡SPAN 주입 [d'=1.13s / d_lead=4.41s]: The average rainfall in Melbourne, Australia, in July is 48.8 mm, with
    74.96s  user  발화 시작: Yeah.
    74.96s  agent 발화 끝
    75.30s  agent 발화 시작: But, back to our topic, do you want me to help you find wher
    75.30s  user  발화 끝
    81.06s  user  발화 시작: No, that’s alright. I think I can find it. Thanks, Taeon.
    81.06s  agent 발화 끝
    84.80s  agent 발화 시작: You're very welcome! Remember, focusing on the enjoyment of 
    84.80s  user  발화 끝
    89.88s  user  발화 시작: That's a good point. I always forget that.
    89.88s  agent 발화 끝
    92.60s  agent 발화 시작: It’s easy to get caught up in finding the “best” thing, but 
    92.60s  user  발화 끝
   101.42s  agent 발화 끝
