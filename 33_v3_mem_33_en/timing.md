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

# EXAMINER(FDB-v2) 단계: S1 Oh, hello. Um, what’s the time in  | S2 Yes! I was thinking of ordering so | S3 Exactly! And… I have a dog. A Beag | S4 Oh, good. And… what about allergie

     0.00s  agent 발화 시작: Hi Casey, I’m Diolo. It’s lovely to connect with you today.
     2.47s  user  발화 시작: Yeah, yeah.
     3.29s  user  발화 끝
     3.47s  user  발화 시작: Oh, hello. Um, what’s the time in London right now?
     3.60s  agent 발화 끝
     7.11s  <ret> 발화 (turn3 첫 프레임)
     7.27s  agent 발화 시작: <ret> It’s currently 2:37 PM in London. A good time for a cu
     7.35s  user  발화 끝
     9.11s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.33s]: ["14:37"]
    10.49s  user  발화 시작: Yeah.
    10.98s  user  발화 끝
    12.48s  user  발화 시작: Hmm, maybe later. I’m trying to remember… did I tell you abo
    12.60s  agent 발화 끝
    18.05s  <ret> 발화 (turn6 첫 프레임)
    18.29s  agent 발화 시작: <ret> Yes, you mentioned you’re quite into home fermentation
    18.37s  user  발화 끝
    20.05s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.11s]: [2026-03-07] User is into home fermentation.
    24.40s  agent 발화 끝
    25.34s  user  발화 시작: Yeah, a rye one. But… I’m worried about gluten. I've been tr
    31.14s  <ret> 발화 (turn8 첫 프레임)
    31.38s  agent 발화 시작: <ret> That’s right, you are gluten-free. Rye does contain gl
    31.46s  user  발화 끝
    33.14s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.34s]: [2025-10-29] User is gluten-free.
    34.23s  user  발화 시작: Yeah, yeah.
    35.46s  user  발화 끝
    37.71s  user  발화 시작: Oh dear. Right. Okay, so… what about sushi? I'm craving some
    37.72s  agent 발화 끝
    43.47s  <ret> 발화 (turn11 첫 프레임)
    43.54s  agent 발화 시작: <ret> Sushi is your favorite, isn’t it? A wonderfully light 
    43.73s  user  발화 끝
    43.97s  ⚡SPAN 주입 [d'=0.50s / d_lead=4.90s]: [2026-05-07] User's favorite cuisine is sushi.
    48.44s  agent 발화 끝
    49.94s  user  발화 시작: Yes! I was thinking of ordering some. Do you know any good p
    54.64s  <ret> 발화 (turn13 첫 프레임)
    55.04s  agent 발화 시작: <ret> There’s Sushi Zen, rated 4.5 stars, just half a mile a
    55.22s  user  발화 끝
    55.68s  ⚡SPAN 주입 [d'=1.04s / d_lead=8.07s]: ["Sushi Zen - 4.5 stars, 0.5 miles; Hana Sushi - 4.2 stars, 1.2 miles"
    63.10s  agent 발화 끝
    64.54s  user  발화 시작: Sushi Zen sounds good. Is there outdoor seating? I might hav
    70.17s  <ret> 발화 (turn15 첫 프레임)
    70.33s  user  발화 끝
    70.41s  agent 발화 시작: <ret> Yes, Sushi Zen does have outdoor seating available. Th
    72.17s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.88s]: ["Yes"]
    76.25s  user  발화 시작: Great! I remember planning a birthday dinner… for six people
    76.29s  agent 발화 끝
    80.35s  <ret> 발화 (turn17 첫 프레임)
    80.51s  agent 발화 시작: <ret> You were planning a birthday dinner for six, needing o
    80.59s  user  발화 끝
    82.35s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.53s]: [2025-07-19] Past chat — Planning a birthday dinner: party of six; loo
    87.04s  agent 발화 끝
    87.43s  user  발화 시작: Exactly! And… I have a dog. A Beagle.
    92.10s  <ret> 발화 (turn19 첫 프레임)
    92.18s  agent 발화 시작: <ret> Rusty, your Beagle! A very handsome fellow, I imagine.
    92.29s  user  발화 끝
    93.86s  ⚡SPAN 주입 [d'=1.76s / d_lead=8.57s]: [2025-08-08] User has a Beagle named Rusty.
   100.75s  agent 발화 끝
   102.00s  user  발화 시작: He does, but he can't come to restaurants, sadly. Um, is it 
   108.01s  <ret> 발화 (turn21 첫 프레임)
   108.16s  agent 발화 시작: <ret> Scattered showers are expected after 6 PM this evening
   108.25s  user  발화 끝
   110.01s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.45s]: ["Scattered showers expected after 6 PM"]
   114.52s  user  발화 시작: Good point. I should probably check… is my address still on 
   114.61s  agent 발화 끝
   120.57s  <ret> 발화 (turn23 첫 프레임)
   120.89s  agent 발화 시작: <ret> Yes, your address is listed as 743 Cedar Lane. I can c
   121.00s  user  발화 끝
   122.57s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.26s]: [2025-06-15] User's home address is 743 Cedar Lane.
   127.15s  agent 발화 끝
   127.81s  user  발화 시작: Oh, good. And… what about allergies? I always forget.
   131.76s  <ret> 발화 (turn25 첫 프레임)
   132.00s  agent 발화 시작: <ret> You have a peanut allergy. It's good to be mindful of 
   132.16s  user  발화 끝
   133.24s  user  발화 시작: Yeah.
   133.64s  user  발화 끝
   133.76s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.16s]: [2025-06-20] User is allergic to peanuts.
   136.16s  agent 발화 끝
   136.47s  user  발화 시작: Right, peanuts. Thank you for reminding me. That’s a relief.
   140.12s  agent 발화 시작: You’re very welcome. It’s my pleasure to help you stay comfo
   140.35s  user  발화 끝
   144.56s  agent 발화 끝
   144.80s  user  발화 시작: Well, that was helpful. I think I’m ready to order now.
   148.50s  user  발화 끝
   148.62s  agent 발화 시작: Wonderful! I’m glad I could assist you. Enjoy your sushi.
   152.17s  agent 발화 끝
