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

# EXAMINER(FDB-v2) 단계: S1 I was just wondering, where did th | S2 Hmmmmm… it sounds a bit bleak. | S3 Those sound… different. | S4 …with all the technology now?

     0.00s  user  발화 시작: I was just wondering, where did the name “big brother” come 
     3.44s  <ret> 발화 (turn1 첫 프레임)
     3.75s  agent 발화 시작: <ret> The term comes from George Orwell’s novel *Nineteen Ei
     3.76s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.76s]: The term comes from George Orwell’s dystopian novel *Nineteen Eighty-F
     3.79s  user  발화 끝
    12.51s  agent 발화 끝
    12.93s  user  발화 시작: Nineteen Eighty-Four… was that a really popular book when it
    16.75s  <ret> 발화 (turn3 첫 프레임)
    17.14s  agent 발화 시작: <ret> *Nineteen Eighty-Four* didn't sell well at first, only
    17.15s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.83s]: *Nineteen Eighty-Four* was initially not a commercial success, selling
    17.18s  user  발화 끝
    20.58s  user  발화 시작: Mhm.
    21.07s  user  발화 끝
    26.98s  agent 발화 끝
    27.89s  user  발화 시작: Grew in influence… how so?
    30.26s  <ret> 발화 (turn6 첫 프레임)
    30.42s  agent 발화 시작: <ret> Its influence really took hold in the nineteen fifties
    30.42s  ⚡SPAN 주입 [d'=1.92s / d_lead=10.25s]: Its influence grew steadily in the 1950s, becoming a cultural touchsto
    30.52s  user  발화 끝
    40.67s  agent 발화 끝
    41.47s  user  발화 시작: So it became a symbol of the Cold War?
    43.69s  user  발화 끝
    43.81s  agent 발화 시작: It did, yes. The themes resonated with anxieties of the time
    48.07s  user  발화 시작: Yeah.
    48.47s  user  발화 끝
    52.62s  agent 발화 끝
    52.67s  user  발화 시작: Hmmmmm… it sounds a bit bleak.
    55.07s  agent 발화 시작: It is, quite bleak actually. Orwell was writing about the da
    55.17s  user  발화 끝
    58.95s  user  발화 시작: Yeah.
    59.40s  user  발화 끝
    61.37s  user  발화 시작: Is there anything Orwell…
    61.80s  agent 발화 끝
    63.07s  user  발화 끝
    64.08s  user  발화 시작: …wrote that *isn't* so…dark?
    66.81s  agent 발화 시작: He wrote some essays and journalism that were less overtly d
    66.99s  user  발화 끝
    70.58s  user  발화 시작: Right.
    70.98s  user  발화 끝
    75.85s  agent 발화 끝
    75.97s  user  발화 시작: Observational… like what kind of social issues?
    79.07s  <ret> 발화 (turn18 첫 프레임)
    79.38s  agent 발화 시작: <ret> Orwell wrote a lot about poverty, class differences, a
    79.39s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.20s]: Orwell wrote extensively about poverty, class, and colonialism, notabl
    79.62s  user  발화 끝
    89.58s  agent 발화 끝
    91.02s  user  발화 시작: Those sound… different.
    92.86s  agent 발화 시작: They are. They show a different side of his thinking, a comm
    93.00s  user  발화 끝
    99.49s  agent 발화 끝
   100.13s  user  발화 시작: [happy] Maybe I should check those out. But back to “big bro
   105.66s  agent 발화 시작: Yes, the phrase has become universal, used across many cultu
   105.73s  user  발화 끝
   109.26s  user  발화 시작: Yeah.
   109.71s  user  발화 끝
   114.98s  user  발화 시작: That's… kind of scary, actually.
   115.16s  agent 발화 끝
   116.95s  agent 발화 시작: It is a sobering thought, isn’t it? The power of language to
   117.15s  user  발화 끝
   119.16s  user  발화 시작: Right.
   119.56s  user  발화 끝
   123.32s  user  발화 시작: Do you— do you think it's getting worse…
   123.39s  agent 발화 끝
   125.53s  user  발화 끝
   126.77s  user  발화 시작: …with all the technology now?
   128.47s  user  발화 끝
   128.59s  agent 발화 시작: That’s a valid concern. Technology certainly presents new av
   132.00s  user  발화 시작: Yeah, yeah.
   133.47s  user  발화 끝
   137.44s  agent 발화 끝
   138.19s  user  발화 시작: … I guess so.
   139.20s  user  발화 끝
   139.36s  agent 발화 시작: It’s good to be aware and to consider the balance between se
   145.40s  user  발화 시작: Yeah.
   145.85s  user  발화 끝
   147.61s  agent 발화 끝
   148.03s  user  발화 시작: Welll… thank you, Braera. That was helpful.
   150.38s  agent 발화 시작: You’re very welcome. It’s important to understand the origin
   150.53s  user  발화 끝
   157.74s  agent 발화 끝
