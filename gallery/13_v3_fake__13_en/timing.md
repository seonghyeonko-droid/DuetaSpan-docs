# v3_fake__13_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__13",
#     "name": "Taylor",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "non-binary",
#     "age_range": "40s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-02-06",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2026-01-16",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2025-08-29",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2025-08-18",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     },
#     {
#       "date": "2025-07-31",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-07-12",
#       "category": "home",
#       "text": "User's home address is 524 Oak Avenue."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-10",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2026-02-12",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-08-18",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 When was the last time England won | S2 I remember watching them lose to G | S3 Right. I worry about injuries. | S4 …about my brother lately…

     0.00s  user  발화 시작: When was the last time England won the World Cup?
     3.24s  user  발화 끝
     3.27s  <ret> 발화 (turn1 첫 프레임)
     3.51s  agent 발화 시작: <ret> That was in 1966, when England defeated West Germany a
     3.51s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.06s]: England won the FIFA World Cup tournament in 1966, defeating West Germ
    11.56s  user  발화 시작: Wow, that was a long time ago.
    11.58s  agent 발화 끝
    13.89s  agent 발화 시작: It certainly was. Time has a way of slipping by, doesn't it?
    13.97s  user  발화 끝
    18.20s  user  발화 시작: Yeah, yeah.
    19.34s  user  발화 끝
    20.55s  user  발화 시작: Do you think they’ll ever win again?
    21.03s  agent 발화 끝
    22.37s  <ret> 발화 (turn6 첫 프레임)
    22.59s  agent 발화 시작: <ret> That's a question on many minds! Success in football i
    22.69s  ⚡SPAN 주입(IRRELEVANT) [d'=0.56s / d_lead=7.69s]: The average high temperature in Buenos Aires, Argentina on July 10th i
    22.77s  user  발화 끝
    30.28s  agent 발화 끝
    30.42s  user  발화 시작: What about their performance in recent tournaments?
    33.28s  user  발화 끝
    33.47s  agent 발화 시작: They've consistently reached the later stages, showing real 
    36.90s  user  발화 시작: Uh-huh.
    37.49s  user  발화 끝
    39.69s  agent 발화 시작: It's a fine line between being a strong contender and actual
    39.73s  agent 발화 끝
    44.12s  user  발화 시작: Yeah.
    44.99s  user  발화 끝
    46.19s  user  발화 시작: I remember watching them lose to Germany in 2010.
    46.64s  agent 발화 끝
    50.26s  user  발화 끝
    50.71s  agent 발화 시작: That was a heartbreaking match for England supporters. It hi
    54.95s  user  발화 시작: Yeah.
    55.57s  user  발화 끝
    56.83s  agent 발화 끝
    57.04s  user  발화 시작: It really was. Is there any particular reason they haven’t w
    62.83s  user  발화 끝
    63.04s  agent 발화 시작: There are many theories, from tactical shifts in the game to
    69.90s  agent 발화 끝
    70.27s  user  발화 시작: I suppose so. Is Gareth Southgate still the manager?
    73.93s  <ret> 발화 (turn18 첫 프레임)
    74.32s  agent 발화 시작: <ret> Yes, Gareth Southgate is still managing the team, sinc
    74.33s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.58s]: Gareth Southgate is the current manager of the England national footba
    74.38s  user  발화 끝
    80.72s  user  발화 시작: Oh.
    81.16s  user  발화 끝
    82.90s  agent 발화 끝
    83.09s  user  발화 시작: Good to know. What are their chances in the next World Cup?
    86.94s  user  발화 끝
    87.00s  agent 발화 시작: They’re consistently ranked among the top teams, so their ch
    94.58s  user  발화 시작: Right. I worry about injuries.
    94.69s  agent 발화 끝
    97.78s  user  발화 끝
    97.91s  agent 발화 시작: That's a valid concern. Key injuries can significantly impac
   105.79s  user  발화 시작: So true. It’s stressful to watch sometimes.
   105.92s  agent 발화 끝
   109.09s  agent 발화 시작: It can be! Sports often evoke strong emotions, both joy and 
   109.30s  user  발화 끝
   117.99s  agent 발화 끝
   118.36s  user  발화 시작: It really is. You're very good at putting things into perspe
   122.25s  agent 발화 시작: I appreciate that. Sometimes, a little perspective can help 
   122.52s  user  발화 끝
   129.63s  user  발화 시작: I’ve been feeling a lot of anxiety…
   129.67s  agent 발화 끝
   132.03s  user  발화 끝
   134.09s  user  발화 시작: …about my brother lately…
   135.70s  agent 발화 시작: That sounds difficult. It’s brave of you to acknowledge that
   135.84s  user  발화 끝
   138.75s  user  발화 시작: Mm-hmm.
   139.34s  user  발화 끝
   142.18s  agent 발화 끝
   142.32s  user  발화 시작: Well, he's been really distant.
   144.45s  user  발화 끝
   144.50s  agent 발화 시작: Distance in a relationship can be unsettling. It's natural t
   147.86s  user  발화 시작: Right.
   148.49s  user  발화 끝
   151.92s  agent 발화 끝
   152.23s  user  발화 시작: He won't really talk to me about anything.
   155.09s  agent 발화 시작: That can feel very isolating. It’s hard when communication b
   155.10s  user  발화 끝
   162.69s  agent 발화 끝
