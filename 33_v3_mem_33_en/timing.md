# v3_mem_33_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_33",
#     "name": "Casey",
#     "location": {
#       "city": "New York",
#       "country": "United States",
#       "timezone": "America/New_York (EST, UTC-5)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
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

# EXAMINER(FDB-v2) 단계: S1 I'm alright, thanks. I was just wo | S2 Oh, that sounds perfect! Is it far | S3 Yes, it does. And I really enjoy s | S4 [laugh] Yeah, it’s definitely a ch

     0.00s  agent 발화 시작: Hi Casey, I’m Diolo. It's good to connect with you. How are 
     2.96s  user  발화 시작: Yeah, yeah.
     4.11s  user  발화 끝
     4.25s  agent 발화 끝
     4.57s  user  발화 시작: I'm alright, thanks. I was just wondering what time it is ri
     7.65s  <ret> 발화 (turn3 첫 프레임)
     7.80s  agent 발화 시작: <ret> Knowing your location helps with that. You’re in New Y
     7.90s  user  발화 끝
     8.69s  ⚡SPAN 주입 [d'=1.04s / d_lead=2.32s]: [2025-06-15] User's home address is 743 Cedar Lane.
    12.01s  user  발화 시작: Yeah.
    12.46s  user  발화 끝
    14.74s  agent 발화 끝
    15.84s  user  발화 시작: Oh, good. I need to remember to pick up Rusty’s food later.
    18.66s  agent 발화 시작: Rusty sounds like a wonderful companion. Is he a very active
    18.76s  user  발화 끝
    23.77s  user  발화 시작: He is! He needs a lot of exercise, and I was thinking about 
    23.79s  agent 발화 끝
    29.23s  agent 발화 시작: That sounds like a lovely outing for both of you. Are you lo
    29.23s  user  발화 끝
    31.86s  user  발화 시작: Yeah, yeah.
    33.10s  user  발화 끝
    35.02s  agent 발화 끝
    35.39s  user  발화 시작: Yeah, if you have any. Somewhere with outdoor seating would 
    38.49s  <ret> 발화 (turn11 첫 프레임)
    38.55s  agent 발화 시작: <ret> I recall you mentioned outdoor seating before. You pre
    38.77s  user  발화 끝
    39.77s  ⚡SPAN 주입 [d'=1.28s / d_lead=2.77s]: [2025-07-19] Past chat — Planning a birthday dinner: party of six; loo
    50.80s  user  발화 시작: Oh, that sounds perfect! Is it far from Cedar Lane?
    51.21s  agent 발화 끝
    53.51s  <ret> 발화 (turn13 첫 프레임)
    53.74s  agent 발화 시작: <ret> The Barking Beagle is approximately three miles from 7
    53.95s  user  발화 끝
    55.51s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.37s]: (tool result) The Barking Beagle has outdoor seating and welcomes dogs
    59.11s  agent 발화 끝
    60.91s  user  발화 시작: Okay, that's not too bad. I'm also trying to decide what to 
    65.49s  user  발화 끝
    65.68s  <ret> 발화 (turn15 첫 프레임)
    65.75s  agent 발화 시작: <ret> That’s a common dilemma! Do you have any cravings or p
    66.72s  ⚡SPAN 주입 [d'=1.04s / d_lead=5.14s]: [2025-06-15] User's home address is 743 Cedar Lane.
    70.88s  agent 발화 끝
    70.95s  user  발화 시작: I was thinking something light… I’m trying to eat gluten-fre
    74.23s  <ret> 발화 (turn17 첫 프레임)
    74.61s  agent 발화 시작: <ret> I remember you mentioned dietary needs. You are gluten
    74.65s  user  발화 끝
    74.73s  ⚡SPAN 주입 [d'=0.50s / d_lead=2.26s]: [2025-10-29] User is gluten-free.
    80.19s  user  발화 시작: Yes, it does. And I really enjoy sushi.
    80.25s  agent 발화 끝
    82.98s  <ret> 발화 (turn19 첫 프레임)
    83.21s  agent 발화 시작: <ret> You’ve mentioned your taste in cuisine before. Sushi i
    83.24s  user  발화 끝
    84.18s  ⚡SPAN 주입 [d'=1.20s / d_lead=2.56s]: [2026-05-07] User's favorite cuisine is sushi.
    89.80s  agent 발화 끝
    91.20s  user  발화 시작: Oh, yes please! Something I could maybe make relatively quic
    94.89s  agent 발화 시작: Certainly. How about a simple salmon avocado roll? It requir
    95.04s  user  발화 끝
   101.00s  agent 발화 끝
   103.34s  user  발화 시작: That sounds delicious! I also started getting into home ferm
   108.25s  user  발화 끝
   108.61s  agent 발화 시작: That’s fascinating! It’s a really rewarding hobby. What are 
   114.16s  agent 발화 끝
   114.30s  user  발화 시작: I’m trying to make kimchi, but I’m a little worried about me
   117.86s  user  발화 끝
   117.93s  agent 발화 시작: Kimchi can be a bit tricky, but very satisfying. It’s wonder
   119.78s  user  발화 시작: Yeah.
   120.23s  user  발화 끝
   124.04s  agent 발화 끝
   124.40s  user  발화 시작: [laugh] Yeah, it’s definitely a challenge. I’m also trying t
   129.16s  agent 발화 시작: That's very thoughtful of you. Do you have any concerns abou
   129.26s  user  발화 끝
   134.72s  user  발화 시작: Well, I know I’m allergic to peanuts.
   134.99s  agent 발화 끝
   136.79s  <ret> 발화 (turn30 첫 프레임)
   136.79s  user  발화 끝
   136.86s  agent 발화 시작: <ret> I recall you shared that important health information.
   137.29s  ⚡SPAN 주입 [d'=0.50s / d_lead=3.21s]: [2025-06-20] User is allergic to peanuts.
   144.58s  user  발화 시작: Right, definitely. Thanks for remembering that, Diolo.
   144.88s  agent 발화 끝
   147.45s  user  발화 끝
   147.50s  agent 발화 시작: Of course, Casey. Your well-being is important. Is there any
   152.31s  agent 발화 끝
