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

# EXAMINER(FDB-v2) 단계: S1 I was just reading about Jack Sock | S2 Never? That's… strange, considerin | S3 The French Open, in nineteen ninet | S4 Retired. I see. Is Sock planning a

     0.00s  user  발화 시작: I was just reading about Jack Sock and Raffaella Reggi. What
     4.09s  <ret> 발화 (turn1 첫 프레임)
     4.25s  agent 발화 시작: <ret> They both competed professionally in… tennis.
     4.49s  user  발화 끝
     5.16s  user  발화 시작: Yeah.
     5.29s  ⚡SPAN 주입 [d'=1.20s / d_lead=3.14s]: Jack Sock and Raffaella Reggi were both professional tennis players.
     5.52s  user  발화 끝
     7.39s  agent 발화 끝
     7.53s  user  발화 시작: Tennis, right? That's what I thought. But were they both equ
    11.35s  <ret> 발화 (turn4 첫 프레임)
    11.51s  agent 발화 시작: <ret> Jack Sock achieved a career-high ranking of… number ei
    11.74s  user  발화 끝
    13.35s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.35s]: Jack Sock reached a career-high ATP singles ranking of world No. 8, wh
    15.39s  user  발화 시작: Number eight? That’s pretty good. What about Reggi? Was she 
    15.85s  agent 발화 끝
    19.93s  <ret> 발화 (turn6 첫 프레임)
    20.25s  agent 발화 시작: <ret> Raffaella Reggi’s highest WTA singles ranking was… num
    20.35s  user  발화 끝
    21.77s  ⚡SPAN 주입 [d'=1.84s / d_lead=5.00s]: Raffaella Reggi achieved a career-high ranking of number 16 in the wor
    25.25s  agent 발화 끝
    26.38s  user  발화 시작: Only forty-three? Wow, quite a difference. Still, forty-thre
    31.70s  user  발화 끝
    31.75s  agent 발화 시작: It absolutely is. Success looks different for everyone, and 
    38.18s  agent 발화 끝
    38.53s  user  발화 시작: True. Did they ever play against each other? That seems unli
    41.94s  <ret> 발화 (turn10 첫 프레임)
    42.26s  agent 발화 시작: <ret> Records indicate Jack Sock and Raffaella Reggi never c
    42.36s  user  발화 끝
    43.94s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.80s]: (no information found)
    49.06s  agent 발화 끝
    49.19s  user  발화 시작: Never? That's… strange, considering they both played the sam
    53.97s  agent 발화 시작: It isn’t uncommon for players to have careers that don’t ove
    54.00s  user  발화 끝
    56.55s  user  발화 시작: Yeah.
    56.85s  user  발화 끝
    58.77s  user  발화 시작: I guess not. What were their best…
    58.83s  agent 발화 끝
    61.22s  user  발화 끝
    62.82s  user  발화 시작: …results in Grand Slam tournaments? Sock first.
    65.54s  <ret> 발화 (turn16 첫 프레임)
    65.78s  user  발화 끝
    65.84s  agent 발화 시작: <ret> Jack Sock’s best Grand Slam result was reaching the fo
    66.90s  ⚡SPAN 주입 [d'=1.36s / d_lead=6.49s]: Jack Sock reached the fourth round of the 2017 US Open, which remains 
    72.33s  agent 발화 끝
    74.56s  user  발화 시작: The French Open and Wimbledon? Not bad. Reggi’s?
    77.85s  <ret> 발화 (turn18 첫 프레임)
    78.09s  agent 발화 시작: <ret> Raffaella Reggi’s furthest advance in a Grand Slam tou
    78.22s  user  발화 끝
    79.85s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.36s]: Raffaella Reggi’s best Grand Slam result was reaching the quarter-fina
    85.45s  agent 발화 끝
    85.71s  user  발화 시작: The French Open, in nineteen ninety-one. That’s a long time 
    89.27s  agent 발화 시작: It speaks to a long and dedicated career, even if it was som
    89.41s  user  발화 끝
    91.85s  user  발화 시작: Yeah.
    92.16s  user  발화 끝
    93.48s  agent 발화 끝
    94.19s  user  발화 시작: It does. What country are they both from?
    95.96s  <ret> 발화 (turn23 첫 프레임)
    96.12s  agent 발화 시작: <ret> Jack Sock is from the United States, and Raffaella Reg
    96.26s  user  발화 끝
    97.96s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.60s]: Raffaella Reggi and her opponent are both from Italy.
   101.72s  agent 발화 끝
   102.34s  user  발화 시작: Italy. Okay. Did they both start playing tennis as children?
   105.73s  <ret> 발화 (turn25 첫 프레임)
   106.05s  agent 발화 시작: <ret> Jack Sock began playing tennis at age seven, while Raf
   106.18s  user  발화 끝
   107.49s  ⚡SPAN 주입 [d'=1.76s / d_lead=6.26s]: Jack Sock began playing tennis at age seven, and Raffaella Reggi start
   110.20s  user  발화 시작: Mm-hmm.
   110.70s  user  발화 끝
   112.30s  agent 발화 끝
   112.45s  user  발화 시작: Age five. Reggi started younger. What are their current coac
   116.37s  <ret> 발화 (turn28 첫 프레임)
   116.77s  agent 발화 시작: <ret> Jack Sock is currently coached by Josh Bascombe, and R
   116.85s  user  발화 끝
   118.37s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.09s]: Jack Sock is currently coached by Josh Goffi, and Raffaella Reggi is c
   125.86s  agent 발화 끝
   125.90s  user  발화 시작: Paolo Santini. Are they still actively coaching?
   129.21s  <ret> 발화 (turn30 첫 프레임)
   129.37s  agent 발화 시작: <ret> As of late 2023, Jack Sock was recovering from injury,
   129.46s  user  발화 끝
   130.81s  ⚡SPAN 주입 [d'=1.60s / d_lead=9.69s]: Raffaella Reggi’s last known coach was Ricardo Sanchez.
   139.06s  agent 발화 끝
   139.63s  user  발화 시작: Retired. I see. Is Sock planning a comeback?
   143.13s  <ret> 발화 (turn32 첫 프레임)
   143.29s  agent 발화 시작: <ret> Jack Sock announced his intention to return to profess
   143.43s  user  발화 끝
   145.13s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.74s]: As of late 2023, Jack Sock was recovering from injury.
   149.03s  agent 발화 끝
   150.33s  user  발화 시작: Early twenty-twenty-four. That's good to hear. What about Re
   154.92s  <ret> 발화 (turn34 첫 프레임)
   155.24s  agent 발화 시작: <ret> Following her retirement, Raffaella Reggi became a ten
   155.34s  user  발화 끝
   156.92s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.39s]: Raffaella Reggi had retired from professional tennis in 2004.
   159.03s  user  발화 시작: Uh-huh.
   159.53s  user  발화 끝
   161.27s  user  발화 시작: Italian television. That's a nice transition. One last thing
   161.64s  agent 발화 끝
   167.16s  <ret> 발화 (turn37 첫 프레임)
   167.20s  user  발화 끝
   167.24s  agent 발화 시작: <ret> Jack Sock’s height is six feet three inches, while Raf
   168.28s  ⚡SPAN 주입 [d'=1.12s / d_lead=6.71s]: Jack Sock is 6 ft 3 in (191 cm) tall, and Raffaella Reggi is 5 ft 8 in
   169.68s  user  발화 시작: Mhm.
   170.17s  user  발화 끝
   173.96s  agent 발화 끝
   174.18s  user  발화 시작: Five feet eight inches. Quite a difference in stature, too. 
   178.31s  agent 발화 시작: You’re very welcome. It’s good to explore these details and 
   178.54s  user  발화 끝
   183.50s  agent 발화 끝
