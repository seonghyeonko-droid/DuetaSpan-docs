# v3_hesit_18_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_hesit_18",
#     "name": "Andrea",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "non-binary",
#     "age_range": "early 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-03-02",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2025-10-26",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     },
#     {
#       "date": "2025-06-26",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2025-06-17",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in March."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-14",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-12-27",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Hi, I'm new to the city and a bit  | S2 That makes sense. I remember the L | S3 Wow, that’s a nice message. What a | S4 Seoul Garden sounds great! I love 

     0.00s  user  발화 시작: Hi, I'm new to the city and a bit lost.
     2.67s  agent 발화 시작: Welcome!
     2.77s  user  발화 끝
     3.49s  agent 발화 끝
     3.68s  user  발화 시작: That’s great to hear. I was just wondering… what did the Tin
     8.76s  <ret> 발화 (turn3 첫 프레임)
     9.07s  agent 발화 시작: <ret> He really wanted a heart, you know? It’s such a classi
     9.08s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.65s]: The Tin Man’s primary desire in The Wonderful Wizard of Oz was to poss
     9.23s  user  발화 끝
    12.52s  user  발화 시작: Yeah, yeah.
    13.80s  user  발화 끝
    14.71s  agent 발화 끝
    16.16s  user  발화 시작: Oh, a heart! Right. Uhhh… were there any other characters wh
    21.79s  agent 발화 시작: The Scarecrow and the Lion were also searching for things th
    21.85s  user  발화 끝
    26.48s  user  발화 시작: That makes sense. I remember the Lion wanting courage…
    26.64s  agent 발화 끝
    30.28s  agent 발화 시작: Yes, and the Scarecrow desired a brain, believing it would m
    30.31s  user  발화 끝
    33.21s  user  발화 시작: Uh-huh.
    33.70s  user  발화 끝
    34.72s  agent 발화 끝
    36.08s  user  발화 시작: Hmmmm… did the Wizard actually give them those things?
    39.76s  <ret> 발화 (turn11 첫 프레임)
    39.85s  agent 발화 시작: <ret> Actually, the Wizard showed them they already *had* th
    39.92s  ⚡SPAN 주입 [d'=1.76s / d_lead=7.09s]: The Wizard of Oz revealed that the Tin Man, Scarecrow, and Lion alread
    40.01s  user  발화 끝
    43.94s  user  발화 시작: Yeah.
    44.57s  user  발화 끝
    46.76s  user  발화 시작: Wow, that’s a nice message. What about Dorothy? What did *sh
    46.94s  agent 발화 끝
    51.29s  agent 발화 시작: Dorothy simply wanted to go home, back to Kansas with her Au
    51.43s  user  발화 끝
    56.48s  agent 발화 시작: It's funny how often we search for things outside ourselves 
    56.62s  agent 발화 끝
    59.71s  user  발화 시작: …do you think that's true for people moving to a new city to
    60.48s  agent 발화 끝
    62.90s  agent 발화 시작: It often is! People seek a sense of belonging, but it’s usua
    62.95s  user  발화 끝
    69.67s  agent 발화 끝
    70.56s  user  발화 시작: That’s a really good point. What’s a good place to start mak
    74.81s  user  발화 끝
    75.01s  <ret> 발화 (turn19 첫 프레임)
    75.09s  agent 발화 시작: <ret> Seoul Garden is close by and has amazing ratings—perha
    75.09s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.88s]: (tool result) Italian: Bella Notte, 4.6 stars, 0.3 miles; Mexican: El 
    79.29s  user  발화 시작: Nice.
    80.07s  user  발화 끝
    80.97s  agent 발화 끝
    82.06s  user  발화 시작: Seoul Garden sounds great! I love Korean food.
    85.85s  user  발화 끝
    85.90s  agent 발화 시작: I'm so glad to hear that! I think you'll really enjoy it. It
    91.75s  user  발화 시작: Thanks so much for all your help, Arariia.
    92.01s  agent 발화 끝
    93.69s  user  발화 끝
    93.76s  agent 발화 시작: It was my pleasure. I’m happy to assist you in making this c
    99.13s  agent 발화 끝
