# v3_rag_25_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_25",
#     "name": "Morgan",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "non-binary",
#     "age_range": "late 20s",
#     "language": "English"
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

# EXAMINER(FDB-v2) 단계: S1 So, I was reading about Jack Sock  | S2 Sixteen doubles titles… that’s imp | S3 Cecchini… I don’t recognize that n | S4 Nineteen ninety-five… wow, that wa

     0.00s  user  발화 시작: So, I was reading about Jack Sock and Raffaella Reggi, and I
     7.43s  <ret> 발화 (turn1 첫 프레임)
     7.59s  agent 발화 시작: <ret> Jack Sock and Raffaella Reggi are both professional te
     7.79s  user  발화 끝
     8.77s  user  발화 시작: Yeah.
     8.95s  ⚡SPAN 주입 [d'=1.52s / d_lead=3.97s]: [source: Wikipedia] Jack Sock and Raffaella Reggi are both professiona
     9.26s  user  발화 끝
    11.35s  user  발화 시작: Tennis, huh? I thought maybe Jack Sock did a bit of baseball
    11.56s  agent 발화 끝
    17.13s  <ret> 발화 (turn4 첫 프레임)
    17.27s  user  발화 끝
    17.29s  agent 발화 시작: <ret> Jack Sock’s highest singles ranking was world No. 8 in
    19.13s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.70s]: [source: ATP Tour] Jack Sock achieved a career-high singles ranking of
    22.64s  user  발화 시작: Okay, eight. Still, I keep thinking I saw something about hi
    22.99s  agent 발화 끝
    29.82s  <ret> 발화 (turn6 첫 프레임)
    30.10s  user  발화 끝
    30.14s  agent 발화 시작: <ret> Raffaella Reggi won six singles and sixteen doubles ti
    31.66s  ⚡SPAN 주입 [d'=1.84s / d_lead=5.42s]: [source: ITF Tennis] Raffaella Reggi won six singles and sixteen doubl
    35.56s  agent 발화 끝
    35.70s  user  발화 시작: Sixteen doubles titles… that’s impressive. Was she more know
    41.76s  <ret> 발화 (turn8 첫 프레임)
    42.15s  agent 발화 시작: <ret> It appears so. Often, athletes specialize, and she cle
    42.19s  user  발화 끝
    43.76s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.44s]: [source: ESPN] Jack Sock won a gold medal in doubles at the 2016 Summe
    48.39s  agent 발화 시작: Jack Sock won a gold medal in doubles at the 2016 Rio Olympi
    48.59s  agent 발화 끝
    53.25s  agent 발화 끝
    53.38s  user  발화 시작: Oh, right, the Olympics! I remember that now. So, both tenni
    60.09s  <ret> 발화 (turn11 첫 프레임)
    60.41s  agent 발화 시작: <ret> Raffaella Reggi’s highest WTA singles ranking was No. 
    60.51s  user  발화 끝
    61.45s  ⚡SPAN 주입 [d'=1.36s / d_lead=6.40s]: [source: Britannica] Raffaella Reggi reached her highest WTA singles r
    66.81s  agent 발화 끝
    67.64s  user  발화 시작: Number sixteen… that's still pretty high up there. Did she p
    73.92s  <ret> 발화 (turn13 첫 프레임)
    74.16s  agent 발화 시작: <ret> Raffaella Reggi won the Italian Open doubles title wit
    74.30s  user  발화 끝
    75.92s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.71s]: [source: Tennis Abstract] Raffaella Reggi won the Italian Open doubles
    79.31s  user  발화 시작: Wow.
    79.95s  user  발화 끝
    80.79s  user  발화 시작: Cecchini… I don’t recognize that name. Okay, so mostly doubl
    80.87s  agent 발화 끝
    85.61s  <ret> 발화 (turn16 첫 프레임)
    85.84s  agent 발화 시작: <ret> It seems she had notable success in doubles, particula
    85.97s  user  발화 끝
    87.61s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.37s]: [source: Olympics.com] Jack Sock and Vasek Pospisil won the gold medal
    91.14s  agent 발화 시작: Jack Sock won his Olympic gold with Vasek Pospisil.
    91.21s  agent 발화 끝
    94.84s  user  발화 시작: Pospisil, right. I keep getting the names mixed up. So, both
    94.84s  agent 발화 끝
   101.57s  <ret> 발화 (turn19 첫 프레임)
   101.81s  agent 발화 시작: <ret> Jack Sock retired from professional tennis in November
   101.89s  user  발화 끝
   103.57s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.48s]: [source: Wikipedia] Jack Sock retired from professional tennis in Nove
   104.69s  user  발화 시작: Really?
   105.42s  user  발화 끝
   106.22s  user  발화 시작: Oh, he retired recently. That's a shame. What about Reggi, i
   106.29s  agent 발화 끝
   112.67s  <ret> 발화 (turn22 첫 프레임)
   112.98s  agent 발화 시작: <ret> Raffaella Reggi retired from professional tennis in 19
   113.08s  user  발화 끝
   114.43s  ⚡SPAN 주입 [d'=1.76s / d_lead=4.53s]: [source: ITF Tennis] Raffaella Reggi retired from professional tennis 
   115.94s  user  발화 시작: Right.
   116.44s  user  발화 끝
   117.51s  user  발화 시작: Nineteen ninety-five… wow, that was a while ago. They both h
   117.52s  agent 발화 끝
   124.12s  <ret> 발화 (turn25 첫 프레임)
   124.53s  agent 발화 시작: <ret> Absolutely. Both athletes achieved significant milesto
   124.69s  user  발화 끝
   126.12s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.75s]: [source: ATP Tour] Jack Sock has transitioned into a role as a tennis 
   130.22s  agent 발화 시작: Jack Sock is now a tennis analyst for ESPN.
   130.27s  agent 발화 끝
   133.44s  user  발화 시작: That’s nice, staying involved with the sport. It’s good to s
   133.46s  agent 발화 끝
   137.41s  <ret> 발화 (turn28 첫 프레임)
   137.65s  agent 발화 시작: <ret> Raffaella Reggi is currently a tennis coach in Italy.
   137.83s  user  발화 끝
   139.01s  ⚡SPAN 주입 [d'=1.60s / d_lead=3.69s]: [source: WTA Tennis] Raffaella Reggi now works as a tennis coach in It
   141.34s  agent 발화 끝
   141.37s  user  발화 시작: A coach… passing on her knowledge. That’s a lovely full circ
   147.09s  agent 발화 시작: You’re very welcome. It’s been a pleasure exploring their st
   147.11s  user  발화 끝
   151.39s  agent 발화 끝
