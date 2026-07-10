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

# EXAMINER(FDB-v2) 단계: S1 Oh, hello. I was just wondering wh | S2 True. I really love sushi, actuall | S3 It is. I was thinking maybe I coul | S4 I haven’t actually booked anywhere

     0.00s  agent 발화 시작: Hi Casey, I'm Diolo. It’s lovely to connect with you today.
     2.84s  user  발화 시작: Yeah, yeah.
     4.07s  agent 발화 끝
     4.07s  user  발화 끝
     4.32s  user  발화 시작: Oh, hello. I was just wondering what the time is in London r
     8.04s  <ret> 발화 (turn3 첫 프레임)
     8.12s  user  발화 끝
     8.19s  agent 발화 시작: <ret> It’s currently 10:32 AM in London. A good time to star
    10.04s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.97s]: (tool result) It’s currently 10:32 AM in London.
    11.74s  user  발화 시작: Yeah.
    12.19s  user  발화 끝
    14.16s  agent 발화 끝
    15.21s  user  발화 시작: Yeah, I suppose so. I’m trying to decide what to make for di
    19.31s  agent 발화 시작: That sounds nice. Do you have any preferences or a cuisine y
    19.43s  user  발화 끝
    24.47s  user  발화 시작: I’m gluten-free, so that limits things a little.
    24.49s  agent 발화 끝
    26.90s  <ret> 발화 (turn8 첫 프레임)
    27.25s  user  발화 끝
    27.29s  agent 발화 시작: <ret> You are gluten-free, yes. That does narrow down the ch
    28.90s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.00s]: [2025-10-29] User is gluten-free.
    30.43s  user  발화 시작: Yeah, yeah.
    31.70s  user  발화 끝
    34.29s  agent 발화 끝
    34.52s  user  발화 시작: True. I really love sushi, actually.
    36.34s  <ret> 발화 (turn11 첫 프레임)
    36.57s  agent 발화 시작: <ret> Sushi is a wonderful choice! It’s naturally gluten-fre
    36.78s  user  발화 끝
    38.34s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.60s]: [2026-05-07] User's favorite cuisine is sushi.
    41.75s  user  발화 시작: Exactly. I was thinking about trying to make some at home, t
    42.17s  agent 발화 끝
    44.85s  agent 발화 시작: That’s ambitious! Do you enjoy cooking generally?
    44.99s  user  발화 끝
    48.74s  agent 발화 끝
    50.45s  user  발화 시작: I've been getting into home fermentation lately.
    53.03s  <ret> 발화 (turn15 첫 프레임)
    53.04s  user  발화 끝
    53.10s  agent 발화 시작: <ret> Home fermentation? That's fascinating! It’s a wonderfu
    55.03s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.99s]: [2026-03-07] User is into home fermentation.
    58.09s  agent 발화 끝
    58.14s  user  발화 시작: It is. I was thinking maybe I could ferment some vegetables 
    62.99s  agent 발화 시작: That sounds like a delightful combination of flavors. A real
    63.14s  user  발화 끝
    68.12s  user  발화 시작: I have a Beagle named Rusty, he'd probably try to steal ever
    68.18s  agent 발화 끝
    72.01s  user  발화 끝
    72.06s  <ret> 발화 (turn19 첫 프레임)
    72.13s  agent 발화 시작: <ret> Oh, Rusty! A Beagle, how lovely. They are notorious fo
    73.02s  ⚡SPAN 주입 [d'=0.96s / d_lead=6.86s]: [2025-08-08] User has a Beagle named Rusty.
    78.99s  agent 발화 끝
    80.40s  user  발화 시작: He really is. I'm planning a birthday dinner for a friend so
    84.06s  <ret> 발화 (turn21 첫 프레임)
    84.22s  agent 발화 시작: <ret> You’re planning a birthday dinner for six, with outdoo
    84.32s  user  발화 끝
    86.06s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.85s]: [2025-07-19] Past chat — Planning a birthday dinner: party of six; loo
    91.08s  agent 발화 끝
    93.48s  user  발화 시작: I haven’t actually booked anywhere yet. Somewhere with a nic
    97.74s  user  발화 끝
    97.86s  <ret> 발화 (turn23 첫 프레임)
    97.93s  agent 발화 시작: <ret> The Ivy Chelsea Garden has availability at 7:30 PM. It
    99.22s  ⚡SPAN 주입 [d'=1.36s / d_lead=4.86s]: (tool result) The Ivy Chelsea Garden has availability at 7:30 PM.
   102.78s  agent 발화 끝
   103.02s  user  발화 시작: Oh, that sounds perfect! Can you check if they have a peanut
   106.70s  <ret> 발화 (turn25 첫 프레임)
   106.85s  agent 발화 시작: <ret> You have a peanut allergy, yes. I’ll check for you.
   106.91s  user  발화 끝
   108.38s  ⚡SPAN 주입 [d'=1.68s / d_lead=3.42s]: [2025-06-20] User is allergic to peanuts.
   109.86s  <ret> 발화 (turn26 첫 프레임)
   110.17s  agent 발화 시작: <ret> The Ivy Chelsea Garden does offer a peanut-free menu, 
   110.27s  agent 발화 끝
   111.45s  user  발화 시작: Yeah.
   111.62s  ⚡SPAN 주입 [d'=1.76s / d_lead=4.34s]: (tool result) The Ivy Chelsea Garden confirms they offer a peanut-free
   111.94s  user  발화 끝
   114.51s  user  발화 시작: Wonderful! Let’s book it then, 7:30 PM.
   114.51s  agent 발화 끝
   117.47s  <ret> 발화 (turn29 첫 프레임)
   117.71s  agent 발화 시작: <ret> Your reservation at The Ivy Chelsea Garden is confirme
   117.74s  user  발화 끝
   119.47s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.34s]: (tool result) Booking confirmed for The Ivy Chelsea Garden, 7:30 PM, p
   124.05s  agent 발화 끝
