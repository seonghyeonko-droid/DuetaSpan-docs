# v3_fake__13_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__13",
#     "name": "Jamie",
#     "location": {
#       "city": "New York",
#       "country": "United States",
#       "timezone": "America/New_York (EST, UTC-5)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "non-binary",
#     "age_range": "early 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-07",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in October."
#     },
#     {
#       "date": "2026-04-19",
#       "category": "home",
#       "text": "User's home address is 223 Cedar Lane."
#     },
#     {
#       "date": "2026-03-27",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2026-03-24",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2026-01-19",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2026-01-12",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-29",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2026-02-15",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Do you know who plays Liv and Madd | S2 Hmm. Okay. | S3 I try to do that, but it’s hard so | S4 I guess so. Maybe we should read a

     0.00s  user  발화 시작: Do you know who plays Liv and Maddie?
     2.93s  agent 발화 시작: Oh, that's a fun show! Dove Cameron played both Liv and Madd
     2.93s  user  발화 끝
     8.79s  user  발화 시작: Yeah.
     8.79s  agent 발화 끝
     9.15s  user  발화 시작: Really? Both of them?
     9.15s  user  발화 끝
    10.06s  <ret> 발화 (turn4 첫 프레임)
    10.62s  agent 발화 시작: <ret> Yes, she did! It was a dual role, and she handled it w
    10.62s  user  발화 끝
    10.80s  ⚡SPAN 주입 [d'=0.74s / d_lead=6.96s]: Dove Cameron is an American singer and actress, best known for her dua
    17.57s  agent 발화 시작: She's actually an American singer and actress, best known fo
    17.57s  agent 발화 끝
    25.26s  user  발화 시작: Uh-huh.
    25.26s  agent 발화 끝
    25.62s  user  발화 시작: That’s amazing.
    25.62s  user  발화 끝
    26.36s  agent 발화 시작: [happy] It really is! Taking on two characters like that req
    26.36s  user  발화 끝
    32.58s  agent 발화 시작: I’m checking if there’s more information about other actors 
    32.58s  agent 발화 끝
    39.90s  user  발화 시작: Hmm. Okay.
    39.90s  agent 발화 끝
    40.63s  agent 발화 시작: Sometimes, shows really center around one or two key perform
    40.63s  user  발화 끝
    45.39s  user  발화 시작: Mm-hmm.
    45.39s  agent 발화 끝
    45.76s  user  발화 시작: Do you have any advice for encouraging a child who is strugg
    45.76s  user  발화 끝
    50.88s  agent 발화 시작: Creating a relaxed, positive environment is key. Focus on th
    50.88s  user  발화 끝
    57.11s  user  발화 시작: Okay.
    57.11s  agent 발화 끝
    57.47s  user  발화 시작: That makes sense.
    57.47s  user  발화 끝
    58.57s  agent 발화 시작: It does. Reading aloud *to* your child, even as they get old
    58.57s  user  발화 끝
    66.62s  user  발화 시작: Uh-huh.
    66.62s  agent 발화 끝
    66.99s  agent 발화 시작: And praising their effort—their willingness to try—is more h
    66.99s  user  발화 끝
    73.21s  user  발화 시작: Okay.
    73.21s  agent 발화 끝
    73.58s  user  발화 시작: I try to do that, but it’s hard sometimes.
    73.58s  user  발화 끝
    76.73s  <ret> 발화 (turn23 첫 프레임)
    76.87s  agent 발화 시작: Yeah.
    76.87s  user  발화 끝
    77.03s  ⚡SPAN 주입 [d'=0.30s / d_lead=6.59s]: Consistency is crucial when establishing reading routines, and creatin
    77.24s  agent 발화 시작: <ret> Consistency is really crucial when you’re establishing
    77.24s  agent 발화 끝
    83.83s  user  발화 시작: Okay.
    83.83s  agent 발화 끝
    84.20s  user  발화 시작: That’s a good idea about the space.
    84.20s  user  발화 끝
    86.34s  <ret> 발화 (turn26 첫 프레임)
    86.76s  agent 발화 시작: <ret> I was just checking the weather in Buenos Aires, and t
    86.76s  user  발화 끝
    87.84s  ⚡SPAN 주입 [d'=1.50s / d_lead=8.05s]: The average rainfall in Buenos Aires, Argentina is 1,210 millimeters (
    94.81s  user  발화 시작: Oh, wow. That’s interesting.
    94.81s  agent 발화 끝
    96.28s  agent 발화 시작: [curious] It is! Sometimes a little bit of geography can be 
    96.28s  user  발화 끝
   101.40s  user  발화 시작: Yeah.
   101.40s  agent 발화 끝
   101.77s  user  발화 시작: I guess so. Maybe we should read a book…
   101.77s  user  발화 끝
   105.06s  user  발화 시작: …about Argentina.
   105.06s  user  발화 끝
   105.79s  agent 발화 시작: That’s a wonderful idea! A story set in a different place ca
   105.79s  user  발화 끝
   112.75s  agent 발화 끝
