# v3_rag_25_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_25",
#     "name": "Morgan",
#     "location": {
#       "city": "Berlin",
#       "country": "Germany",
#       "timezone": "Europe/Berlin (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "German",
#     "gender": "non-binary",
#     "age_range": "late 20s",
#     "language": "German"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-20",
#       "category": "home",
#       "text": "User's home address is 461 Cedar Lane."
#     },
#     {
#       "date": "2025-10-29",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in May."
#     },
#     {
#       "date": "2025-09-03",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2025-08-06",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-05-29",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-11-23",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-06-18",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 So, I was reading about Jack Sock, | S2 No. 8? Wow, that's pretty good! Wh | S3 Nebraska… I didn’t know that. What | S4 Okay. Did Reggi coach anyone after

     0.00s  user  발화 시작: So, I was reading about Jack Sock, and I’m trying to figure 
     5.94s  <ret> 발화 (turn1 첫 프레임)
     6.10s  agent 발화 시작: <ret> Jack Sock and Raffaella Reggi both competed in… tennis
     6.26s  user  발화 끝
     7.94s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.07s]: [source: Wikipedia] Jack Sock and Raffaella Reggi competed together in
     7.95s  user  발화 시작: Yeah.
     8.30s  user  발화 끝
    12.17s  agent 발화 끝
    12.26s  user  발화 시작: Tennis, okay. But Reggi… I thought she was a figure skater? 
    16.35s  <ret> 발화 (turn4 첫 프레임)
    16.51s  agent 발화 시작: <ret> Raffaella Reggi is actually a former professional… ten
    16.74s  user  발화 끝
    18.35s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.11s]: [source: Britannica] Raffaella Reggi is an Italian former professional
    22.18s  user  발화 시작: Huh. Okay, tennis for both of them. Did they win anything to
    22.62s  agent 발화 끝
    25.48s  <ret> 발화 (turn6 첫 프레임)
    25.80s  agent 발화 시작: <ret> They did win a medal together—a bronze medal in mixed 
    25.93s  user  발화 끝
    27.48s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.78s]: [source: Olympics.com] Jack Sock and Raffaella Reggi won a bronze meda
    33.59s  agent 발화 끝
    34.72s  user  발화 시작: Bronze… not gold? That’s a little disappointing.
    37.81s  <ret> 발화 (turn8 첫 프레임)
    38.20s  agent 발화 시작: <ret> The gold medal went to Elena Vesnina and Andrey Rublev
    38.28s  user  발화 끝
    39.81s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.46s]: [source: ESPN] The gold medal in mixed doubles at the 2020 Summer Olym
    45.66s  agent 발화 끝
    46.11s  user  발화 시작: Okay, fair enough. So, was Jack Sock only good at doubles?
    49.95s  <ret> 발화 (turn10 첫 프레임)
    50.11s  agent 발화 시작: <ret> Jack Sock actually reached a career-high singles ranki
    50.23s  user  발화 끝
    51.95s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.34s]: [source: ATP Tour] Jack Sock reached a career-high singles ranking of 
    58.46s  agent 발화 끝
    58.62s  user  발화 시작: No. 8? Wow, that's pretty good! What about Reggi, what was h
    63.34s  <ret> 발화 (turn12 첫 프레임)
    63.74s  agent 발화 시작: <ret> Raffaella Reggi’s highest singles ranking was… No. 16,
    63.80s  user  발화 끝
    65.34s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.28s]: [source: WTA Tour] Raffaella Reggi’s highest WTA singles ranking was N
    70.95s  user  발화 시작: Wow.
    71.76s  user  발화 끝
    72.95s  user  발화 시작: So, she was higher ranked than Sock ever was? Interesting.
    73.02s  agent 발화 끝
    76.90s  <ret> 발화 (turn15 첫 프레임)
    77.12s  user  발화 끝
    77.30s  agent 발화 시작: <ret> Jack Sock’s highest ranking was world No. 8, on Novemb
    78.90s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.20s]: [source: Wikipedia] Jack Sock's highest ATP singles ranking was world 
    85.50s  agent 발화 끝
    85.96s  user  발화 시작: Okay, okay. What country is Raffaella Reggi from? I keep for
    90.06s  <ret> 발화 (turn17 첫 프레임)
    90.07s  user  발화 끝
    90.14s  agent 발화 시작: <ret> Raffaella Reggi represented… Italy in international co
    92.06s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.95s]: [source: ITF Tennis] Raffaella Reggi is a former tennis player represe
    94.54s  user  발화 시작: Yeah.
    94.85s  user  발화 끝
    97.09s  agent 발화 끝
    97.39s  user  발화 시작: Italy, right. And Sock? I know he’s American, but where exac
   101.35s  <ret> 발화 (turn20 첫 프레임)
   101.59s  agent 발화 시작: <ret> Jack Sock was born in… Lincoln, Nebraska, and represen
   101.74s  user  발화 끝
   103.35s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.46s]: [source: USTA] Jack Sock was born in Lincoln, Nebraska, and represents
   109.05s  agent 발화 끝
   109.75s  user  발화 시작: Nebraska… I didn’t know that. What year were they both born?
   112.97s  <ret> 발화 (turn22 첫 프레임)
   113.37s  agent 발화 시작: <ret> Jack Sock was born in 1992, and Raffaella Reggi in… 19
   113.55s  user  발화 끝
   114.97s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.20s]: [source: Wikipedia] Jack Sock was born on November 24, 1992, and Raffa
   118.85s  user  발화 시작: Right.
   119.35s  user  발화 끝
   121.57s  agent 발화 끝
   122.17s  user  발화 시작: That *is* a big difference! So, they were at very different 
   127.53s  <ret> 발화 (turn25 첫 프레임)
   127.77s  agent 발화 시작: <ret> Raffaella Reggi retired from professional tennis in… 1
   127.97s  user  발화 끝
   129.53s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.44s]: [source: Olympics.com] Raffaella Reggi retired from professional tenni
   134.21s  agent 발화 끝
   134.53s  user  발화 시작: Wow. That’s… a long time ago. Did Sock come out of retiremen
   139.85s  user  발화 끝
   140.21s  agent 발화 시작: It seems unlikely.
   141.68s  agent 발화 끝
   141.75s  user  발화 시작: Hmm, well… what was Sock doing in 2020, then?
   144.53s  <ret> 발화 (turn29 첫 프레임)
   144.85s  agent 발화 시작: <ret> Jack Sock was competing in ATP Challenger Tour events 
   144.99s  user  발화 끝
   146.45s  ⚡SPAN 주입 [d'=1.92s / d_lead=7.18s]: [source: ATP Tour] Jack Sock was competing in ATP Challenger Tour even
   152.02s  user  발화 시작: Challenger events… so, not at his peak anymore.
   152.03s  agent 발화 끝
   155.63s  <ret> 발화 (turn31 첫 프레임)
   155.79s  agent 발화 시작: <ret> Jack Sock earned $3,344,835 in career prize money. Tha
   155.91s  user  발화 끝
   157.63s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.29s]: [source: Tennis.com] Jack Sock’s highest career prize money earned was
   159.31s  user  발화 시작: Uh-huh.
   159.67s  user  발화 끝
   163.72s  user  발화 시작: Okay. Did Reggi coach anyone after she retired?
   164.09s  agent 발화 끝
   166.25s  <ret> 발화 (turn34 첫 프레임)
   166.66s  agent 발화 시작: <ret> Raffaella Reggi became a tennis coach, working with… y
   166.68s  user  발화 끝
   168.25s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.30s]: [source: ITF Tennis] Raffaella Reggi became a tennis coach after her r
   174.50s  user  발화 시작: That’s nice. So, she stayed involved in the sport.
   174.96s  agent 발화 끝
   177.03s  agent 발화 시작: It seems she did.
   177.09s  user  발화 끝
   178.31s  agent 발화 끝
   179.57s  user  발화 시작: This is all really interesting. I didn’t realize there was s
   182.80s  user  발화 끝
   183.12s  agent 발화 시작: It’s often the case, isn’t it? There's depth to most stories
   186.35s  user  발화 시작: Oh.
   186.71s  user  발화 끝
   187.79s  agent 발화 끝
   188.80s  user  발화 시작: Yeah. Thanks, Zura.
   189.90s  agent 발화 시작: You’re very welcome. It’s been a pleasure exploring this wit
   190.13s  user  발화 끝
   193.60s  agent 발화 끝
