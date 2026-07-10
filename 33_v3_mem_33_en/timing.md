# v3_mem_33_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_33",
#     "name": "Casey",
#     "location": {
#       "city": "London",
#       "country": "United Kingdom",
#       "timezone": "Europe/London (GMT, UTC+0)",
#       "currency": "GBP (£)"
#     },
#     "nationality": "British",
#     "gender": "non-binary",
#     "age_range": "40s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-07",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2026-03-07",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     },
#     {
#       "date": "2025-10-29",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2025-08-08",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2025-06-20",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2025-06-15",
#       "category": "home",
#       "text": "User's home address is 743 Cedar Lane."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-07-19",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-06-07",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Oh, hi! It’s… well, it’s a bit cha | S2 Oh, that would be amazing, actuall | S3 Hmm, FitnessFirst… I’ve heard of t | S4 It is! I’m making kimchi at the mo

     0.00s  agent 발화 시작: Hi Casey, I'm Diolo. It’s lovely to connect with you today.
     2.45s  user  발화 시작: Yeah, yeah.
     3.56s  agent 발화 끝
     3.73s  user  발화 끝
     3.89s  user  발화 시작: Oh, hi! It’s… well, it’s a bit chaotic here at the moment. W
     8.69s  <ret> 발화 (turn3 첫 프레임)
     8.85s  agent 발화 시작: <ret> You’re in London, so let me check the current time the
     8.94s  user  발화 끝
    10.69s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.65s]: [2025-06-15] User's home address is 743 Cedar Lane.
    12.21s  user  발화 시작: Yeah.
    12.85s  user  발화 끝
    14.49s  agent 발화 끝
    15.55s  user  발화 시작: Thanks! I’m trying to figure out dinner. I was thinking sush
    19.33s  <ret> 발화 (turn6 첫 프레임)
    19.57s  agent 발화 시작: <ret> That sounds wonderful, Casey – sushi is your favorite,
    19.68s  user  발화 끝
    21.33s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.97s]: [2026-05-07] User's favorite cuisine is sushi.
    25.53s  user  발화 시작: Yeah, maybe. Are there any good sushi places near me that ha
    25.54s  agent 발화 끝
    30.95s  <ret> 발화 (turn8 첫 프레임)
    31.19s  agent 발화 시작: <ret> There are three sushi restaurants near you with outdoo
    31.28s  user  발화 끝
    32.95s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.25s]: (tool result) Found three sushi restaurants with outdoor seating near 
    33.98s  user  발화 시작: Yeah, yeah.
    35.31s  user  발화 끝
    37.45s  agent 발화 끝
    37.76s  user  발화 시작: Hmm, SushiZen sounds good. What’s their phone number?
    41.18s  <ret> 발화 (turn11 첫 프레임)
    41.26s  agent 발화 시작: <ret> The phone number for SushiZen is 020-7946-0072. Would 
    41.37s  user  발화 끝
    42.22s  ⚡SPAN 주입 [d'=1.04s / d_lead=8.16s]: (tool result) SushiZen's phone number is 020-7946-0072.
    49.05s  user  발화 시작: Oh, that would be amazing, actually. For six people.
    49.42s  agent 발화 끝
    51.32s  <ret> 발화 (turn13 첫 프레임)
    51.72s  agent 발화 시작: <ret> Excellent! I've confirmed a reservation for six at Sus
    51.82s  ⚡SPAN 주입 [d'=0.50s / d_lead=4.63s]: (tool result) Reservation confirmed for six at SushiZen at 7:00 PM ton
    51.96s  user  발화 끝
    56.35s  agent 발화 끝
    58.04s  user  발화 시작: That’s fantastic! You’re a lifesaver. I’ve been so stressed 
    62.86s  user  발화 끝
    63.01s  agent 발화 시작: It's my pleasure to help ease your stress, Casey. Planning c
    68.00s  agent 발화 끝
    68.06s  user  발화 시작: It is! I’m also trying to get back into a fitness routine. I
    73.25s  <ret> 발화 (turn17 첫 프레임)
    73.33s  agent 발화 시작: <ret> I recall you were looking for a gym with a pool close 
    73.48s  user  발화 끝
    75.25s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.95s]: [2025-06-07] Past chat — Comparing gym memberships: wants a pool; clos
    78.24s  user  발화 시작: Yeah, definitely. A pool is essential. And somewhere not too
    78.28s  agent 발화 끝
    83.21s  <ret> 발화 (turn19 첫 프레임)
    83.37s  agent 발화 시작: <ret> FitnessFirst and The Gym Club both have pools and are 
    83.47s  user  발화 끝
    84.57s  ⚡SPAN 주입 [d'=1.36s / d_lead=4.54s]: (tool result) Found two gyms near your office with pools: FitnessFirst
    87.91s  agent 발화 끝
    89.50s  user  발화 시작: Hmm, FitnessFirst… I’ve heard of them. What are their member
    93.41s  <ret> 발화 (turn21 첫 프레임)
    93.57s  agent 발화 시작: <ret> FitnessFirst’s membership fees range from £49 to £79 p
    93.75s  user  발화 끝
    95.41s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.51s]: (tool result) FitnessFirst membership fees range from £49 to £79 per m
    99.08s  agent 발화 끝
   101.55s  user  발화 시작: Okay, that’s reasonable. I'm also trying to eat healthier. I
   106.74s  <ret> 발화 (turn23 첫 프레임)
   106.86s  user  발화 끝
   107.06s  agent 발화 시작: <ret> Yes, I remember you are gluten-free. That’s important 
   108.74s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.54s]: [2025-10-29] User is gluten-free.
   111.60s  agent 발화 끝
   111.80s  user  발화 시작: It is! It makes eating out tricky sometimes.
   115.27s  user  발화 끝
   115.34s  agent 발화 시작: It certainly can, but more restaurants are accommodating die
   116.69s  user  발화 시작: Yeah.
   117.32s  user  발화 끝
   119.88s  agent 발화 끝
   120.26s  user  발화 시작: That's good to hear. I've been trying to get into fermentati
   123.01s  <ret> 발화 (turn28 첫 프레임)
   123.17s  agent 발화 시작: <ret> Oh, that’s a fascinating hobby, Casey! Home fermentati
   123.31s  user  발화 끝
   123.89s  ⚡SPAN 주입 [d'=0.88s / d_lead=4.48s]: [2026-03-07] User is into home fermentation.
   127.45s  user  발화 시작: It is! I’m making kimchi at the moment. It’s… a process.
   127.66s  agent 발화 끝
   131.29s  user  발화 끝
   131.33s  agent 발화 시작: Kimchi is wonderful, and a bit of a journey! It sounds like 
   135.33s  user  발화 시작: I am. Oh! Rusty needs feeding.
   135.77s  agent 발화 끝
   138.38s  <ret> 발화 (turn32 첫 프레임)
   138.57s  user  발화 끝
   138.62s  agent 발화 시작: <ret> A Beagle needs their dinner. I hope you and Rusty have
   139.58s  ⚡SPAN 주입 [d'=1.20s / d_lead=4.03s]: [2025-08-08] User has a Beagle named Rusty.
   140.92s  user  발화 시작: Yeah.
   141.55s  user  발화 끝
   142.65s  agent 발화 끝
   142.67s  user  발화 시작: Thanks, Diolo. You've really helped me out.
   144.53s  agent 발화 시작: You’re very welcome, Casey. I’m glad I could be of assistanc
   144.74s  user  발화 끝
   149.53s  agent 발화 끝
