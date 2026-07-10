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

# EXAMINER(FDB-v2) 단계: S1 I was just reading about Jack Sock | S2 Huh. Interesting. What country is  | S3 Retired already? Wow, time flies.  | S4 …Sock made a lot more money. What 

     0.00s  user  발화 시작: I was just reading about Jack Sock and Raffaella Reggi. What
     3.76s  <ret> 발화 (turn1 첫 프레임)
     3.92s  agent 발화 시작: <ret> They both competed in professional tennis, Jack Sock a
     4.16s  user  발화 끝
     5.76s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.04s]: Jack Sock and Raffaella Reggi both competed in professional tennis.
     6.08s  user  발화 시작: Yeah.
     6.42s  user  발화 끝
    10.96s  agent 발화 끝
    11.13s  user  발화 시작: Tennis, okay. But was Jack Sock better known for singles or 
    15.61s  <ret> 발화 (turn4 첫 프레임)
    15.76s  agent 발화 시작: <ret> Jack Sock was more recognized for his doubles performa
    15.86s  user  발화 끝
    17.61s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.11s]: Jack Sock achieved greater success in doubles, winning the 2018 Wimble
    21.80s  user  발화 시작: Wimbledon, huh? I didn’t realize that. Did Raffaella Reggi a
    21.87s  agent 발화 끝
    26.11s  <ret> 발화 (turn6 첫 프레임)
    26.43s  agent 발화 시작: <ret> No, Raffaella Reggi didn't win Wimbledon, though she r
    26.48s  user  발화 끝
    28.11s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.88s]: Raffaella Reggi did not win Wimbledon, but reached the quarter-finals 
    34.22s  user  발화 시작: Quarter-finals is good. What about Grand Slam titles overall
    34.32s  agent 발화 끝
    37.66s  <ret> 발화 (turn8 첫 프레임)
    38.06s  agent 발화 시작: <ret> Raffaella Reggi won one Grand Slam title, the Australi
    38.19s  user  발화 끝
    39.66s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.86s]: Raffaella Reggi won one Grand Slam title, the 1995 Australian Open wom
    44.73s  user  발화 시작: Just one? That seems low for a professional. What about Sock
    44.92s  agent 발화 끝
    50.38s  <ret> 발화 (turn10 첫 프레임)
    50.54s  agent 발화 시작: <ret> Jack Sock won four Grand Slam titles overall, three in
    50.56s  user  발화 끝
    52.38s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.92s]: Jack Sock has won four Grand Slam titles: three in doubles and one in 
    56.46s  agent 발화 끝
    57.01s  user  발화 시작: Three doubles and one mixed… So he didn't win any in singles
    60.35s  <ret> 발화 (turn12 첫 프레임)
    60.75s  agent 발화 시작: <ret> That’s right, Jack Sock didn’t win any Grand Slam titl
    60.81s  user  발화 끝
    62.35s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.95s]: Jack Sock did not win any Grand Slam titles in men's singles.
    63.35s  user  발화 시작: Yeah.
    63.70s  user  발화 끝
    65.70s  agent 발화 끝
    66.17s  user  발화 시작: Huh. Interesting. What country is Raffaella Reggi from?
    69.54s  <ret> 발화 (turn15 첫 프레임)
    69.94s  agent 발화 시작: <ret> Raffaella Reggi is from Italy. It’s wonderful to see a
    70.01s  user  발화 끝
    71.54s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.14s]: Raffaella Reggi is from Italy.
    74.97s  user  발화 시작: Italy, okay. And Jack Sock? Where does he represent?
    75.08s  agent 발화 끝
    78.34s  <ret> 발화 (turn17 첫 프레임)
    78.42s  agent 발화 시작: <ret> Jack Sock represents the United States of America in t
    78.54s  user  발화 끝
    80.34s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.12s]: Jack Sock represents the United States of America in tennis.
    84.54s  agent 발화 끝
    86.17s  user  발화 시작: The US. Were they ever on the same team, Reggi and Sock?
    89.59s  <ret> 발화 (turn19 첫 프레임)
    89.83s  agent 발화 시작: <ret> No, Jack Sock and Raffaella Reggi never competed as a 
    90.01s  user  발화 끝
    91.35s  ⚡SPAN 주입 [d'=1.76s / d_lead=5.05s]: Jack Sock and Raffaella Reggi never played together as a team in any o
    93.11s  user  발화 시작: Really?
    93.74s  user  발화 끝
    94.68s  user  발화 시작: That's a shame. What’s Reggi doing now? Is she still involve
    94.87s  agent 발화 끝
    98.31s  <ret> 발화 (turn22 첫 프레임)
    98.71s  agent 발화 시작: <ret> Currently, Raffaella Reggi works as a tennis coach and
    98.76s  user  발화 끝
   100.31s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.84s]: Raffaella Reggi is currently a tennis coach and commentator.
   102.55s  user  발화 시작: Mm-hmm.
   103.05s  user  발화 끝
   104.55s  agent 발화 끝
   104.65s  user  발화 시작: A coach… good for her. And Sock? Is he still playing profess
   108.80s  <ret> 발화 (turn25 첫 프레임)
   109.04s  agent 발화 시작: <ret> Jack Sock retired from professional tennis in January 
   109.14s  user  발화 끝
   110.80s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.43s]: Jack Sock retired from professional tennis in January 2024.
   117.47s  user  발화 시작: Retired already? Wow, time flies. When did Reggi retire?
   117.47s  agent 발화 끝
   121.42s  <ret> 발화 (turn27 첫 프레임)
   121.66s  agent 발화 시작: <ret> Raffaella Reggi retired from professional tennis in ni
   121.81s  user  발화 끝
   123.42s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.98s]: Raffaella Reggi retired from professional tennis in 1996.
   127.54s  user  발화 시작: A long time ago. What was Reggi’s highest singles ranking?
   127.64s  agent 발화 끝
   131.62s  <ret> 발화 (turn29 첫 프레임)
   131.70s  user  발화 끝
   131.70s  agent 발화 시작: <ret> Raffaella Reggi achieved a career-high singles ranking
   132.74s  ⚡SPAN 주입 [d'=1.12s / d_lead=6.12s]: Raffaella Reggi's highest singles ranking was number 16, achieved in F
   137.82s  agent 발화 끝
   137.93s  user  발화 시작: Number sixteen isn’t bad. And what about Sock’s peak ranking
   141.10s  <ret> 발화 (turn31 첫 프레임)
   141.50s  agent 발화 시작: <ret> Jack Sock’s highest singles ranking was number eight, 
   141.72s  user  발화 끝
   143.10s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.83s]: Jack Sock's highest singles ranking was number 8, achieved in November
   144.97s  user  발화 시작: Uh-huh.
   145.55s  user  발화 끝
   147.34s  agent 발화 끝
   147.50s  user  발화 시작: Eight is pretty good! What's the difference in their career 
   150.69s  <ret> 발화 (turn34 첫 프레임)
   151.09s  agent 발화 시작: <ret> Jack Sock earned six million eight hundred eighty-six 
   151.19s  user  발화 끝
   152.69s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.36s]: Jack Sock's career earnings are $6,886,272, while Raffaella Reggi's ar
   155.31s  user  발화 시작: Mhm.
   155.81s  user  발화 끝
   162.45s  agent 발화 끝
   163.00s  user  발화 시작: A big difference. So…
   164.38s  user  발화 끝
   166.44s  user  발화 시작: …Sock made a lot more money. What was his most lucrative yea
   169.40s  <ret> 발화 (turn38 첫 프레임)
   169.48s  agent 발화 시작: <ret> Jack Sock’s most lucrative year was two thousand eight
   169.49s  user  발화 끝
   171.40s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.53s]: Jack Sock’s most lucrative year was 2018, with earnings of $1,824,272.
   174.99s  user  발화 시작: Nice.
   175.62s  user  발화 끝
   177.88s  user  발화 시작: Two thousand eighteen. Anything special happen that year bes
   178.01s  agent 발화 끝
   181.73s  <ret> 발화 (turn41 첫 프레임)
   182.13s  agent 발화 시작: <ret> In two thousand eighteen, Jack Sock won the Wimbledon 
   182.23s  user  발화 끝
   183.73s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.86s]: In 2018, Jack Sock won the Wimbledon men's doubles title with Mike Bry
   188.99s  user  발화 시작: Doubles again. Well, that’s interesting. Is Reggi involved i
   188.99s  agent 발화 끝
   193.98s  <ret> 발화 (turn43 첫 프레임)
   194.22s  agent 발화 시작: <ret> Raffaella Reggi supports the Fondazione Giulia Onlus, 
   194.31s  user  발화 끝
   194.48s  ⚡SPAN 주입 [d'=0.50s / d_lead=8.76s]: Raffaella Reggi supports the Fondazione Giulia Onlus, a charity for ch
   199.75s  user  발화 시작: Mm-hmm.
   200.48s  user  발화 끝
   202.99s  agent 발화 끝
   204.38s  user  발화 시작: That’s very kind of her. What’s the biggest difference in th
   208.09s  <ret> 발화 (turn46 첫 프레임)
   208.33s  agent 발화 시작: <ret> Jack Sock was known for a powerful serve and aggressiv
   208.50s  user  발화 끝
   210.09s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.55s]: Jack Sock had a powerful serve and aggressive baseline game, while Raf
   215.88s  agent 발화 끝
   215.89s  user  발화 시작: Different approaches. Okay, that's all I wanted to know. Tha
   219.12s  user  발화 끝
   219.17s  agent 발화 시작: You’re very welcome. It's been a pleasure discussing these a
   223.00s  agent 발화 끝
