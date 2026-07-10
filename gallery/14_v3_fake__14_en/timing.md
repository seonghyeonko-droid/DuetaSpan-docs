# v3_fake__14_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__14",
#     "name": "Lukas",
#     "location": {
#       "city": "Paris",
#       "country": "France",
#       "timezone": "Europe/Paris (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "French",
#     "gender": "male",
#     "age_range": "late 20s",
#     "language": "French"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-02-19",
#       "category": "work",
#       "text": "User works as a architect."
#     },
#     {
#       "date": "2025-12-18",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2025-11-15",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in October."
#     },
#     {
#       "date": "2025-10-01",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2025-08-27",
#       "category": "home",
#       "text": "User's home address is 382 Elm Street."
#     },
#     {
#       "date": "2025-08-06",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-26",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-12-19",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Hi Bius, do you know when the Smit | S2 Wow, that's a lot. | S3 That's interesting— | S4 Free, that’s great!

     0.00s  user  발화 시작: Hi Bius, do you know when the Smithsonian Air and Space Muse
     4.67s  <ret> 발화 (turn1 첫 프레임)
     4.77s  user  발화 끝
     4.91s  agent 발화 시작: <ret> Well, it’s wonderful you’re curious about history. The
     4.91s  ⚡SPAN 주입 [d'=2.00s / d_lead=12.34s]: The Smithsonian National Air and Space Museum first opened its doors t
    11.91s  user  발화 시작: Yeah.
    12.36s  user  발화 끝
    17.11s  user  발화 시작: That’s good to know. What about the Udvar-Hazy Center?
    17.24s  agent 발화 끝
    21.12s  <ret> 발화 (turn4 첫 프레임)
    21.14s  user  발화 끝
    21.29s  agent 발화 시작: <ret> It’s natural to want to explore all aspects of a subje
    21.29s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.68s]: The Steven F. Udvar-Hazy Center, an extension of the National Air and 
    32.96s  agent 발화 끝
    32.99s  user  발화 시작: December 2003… hmm.
    35.96s  agent 발화 시작: Sometimes, just letting a date settle in your mind is enough
    36.13s  user  발화 끝
    39.46s  user  발화 시작: Yeah, totally.
    40.80s  user  발화 끝
    43.84s  agent 발화 끝
    44.19s  user  발화 시작: What kind of aircraft do they have at Udvar-Hazy?
    47.01s  <ret> 발화 (turn9 첫 프레임)
    47.25s  agent 발화 시작: <ret> It’s good to delve deeper into specifics. The Udvar-Ha
    47.25s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.87s]: The Udvar-Hazy Center houses a collection including the Space Shuttle 
    47.47s  user  발화 끝
    51.08s  user  발화 시작: Yeah.
    51.49s  user  발화 끝
    59.12s  agent 발화 끝
    60.24s  user  발화 시작: Wow, that's a lot.
    61.36s  agent 발화 시작: It is, isn't it? A collection like that can really inspire a
    61.62s  user  발화 끝
    67.19s  agent 발화 끝
    68.20s  user  발화 시작: Do they have the Wright brothers’ plane there?
    70.35s  <ret> 발화 (turn14 첫 프레임)
    70.43s  agent 발화 시작: <ret> It’s fascinating how we trace innovation back to its o
    70.43s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.08s]: The 1903 Wright Flyer, the first successful airplane, is currently on 
    70.60s  user  발화 끝
    74.11s  user  발화 시작: Yeah.
    74.69s  user  발화 끝
    81.50s  agent 발화 끝
    82.06s  user  발화 시작: Oh, okay. So it’s not at the other one.
    84.27s  agent 발화 시작: Precisely. It’s easy to get locations mixed up when we’re ta
    84.37s  user  발화 끝
    87.21s  user  발화 시작: Yeah.
    87.75s  user  발화 끝
    91.36s  agent 발화 끝
    91.38s  user  발화 시작: What was the first object ever put on display at the origina
    95.31s  <ret> 발화 (turn20 첫 프레임)
    95.62s  agent 발화 시작: <ret> Showing your deep curiosity. The first object displaye
    95.63s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.06s]: The first object displayed at the National Air and Space Museum was a 
    95.82s  user  발화 끝
   105.68s  agent 발화 끝
   105.91s  user  발화 시작: That's interesting—
   107.14s  user  발화 시작: …wait, was the Enola Gay actually *used* in a bombing?
   107.28s  user  발화 끝
   110.72s  <ret> 발화 (turn23 첫 프레임)
   110.88s  agent 발화 시작: <ret> It’s important to face difficult history with honesty.
   110.88s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.36s]: The Enola Gay was the Boeing B-29 Superfortress that dropped the atomi
   110.98s  user  발화 끝
   115.44s  user  발화 시작: Right.
   116.08s  user  발화 끝
   122.25s  agent 발화 끝
   122.29s  user  발화 시작: That's… heavy.
   123.24s  <ret> 발화 (turn26 첫 프레임)
   123.55s  agent 발화 시작: <ret> It is. Sometimes acknowledging the weight of the past 
   123.56s  ⚡SPAN 주입(IRRELEVANT) [d'=2.00s / d_lead=4.90s]: The current temperature in Reykjavik, Iceland is 8.2°C, with partly cl
   123.80s  user  발화 끝
   128.30s  agent 발화 시작: It's good to acknowledge the complexity of feelings.
   128.46s  agent 발화 끝
   131.44s  agent 발화 끝
   131.60s  user  발화 시작: Do they offer tours at the Air and Space Museum?
   134.39s  <ret> 발화 (turn29 첫 프레임)
   134.63s  agent 발화 시작: <ret> It’s wonderful to seek out guided experiences. Guided 
   134.63s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.41s]: (tool result) Event: Guided Tours, Smithsonian National Air and Space 
   134.79s  user  발화 끝
   139.95s  user  발화 시작: Nice.
   140.58s  user  발화 끝
   143.99s  user  발화 시작: Free, that’s great!
   144.04s  agent 발화 끝
   145.41s  agent 발화 시작: It’s lovely when opportunities for learning are accessible t
   145.59s  user  발화 끝
   149.67s  agent 발화 끝
   150.38s  user  발화 시작: How long are the tours usually?
   152.08s  <ret> 발화 (turn34 첫 프레임)
   152.40s  agent 발화 시작: <ret> It's good to plan your time effectively. The guided to
   152.40s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.99s]: Smithsonian National Air and Space Museum guided tours generally last 
   152.63s  user  발화 끝
   156.49s  user  발화 시작: Yeah.
   157.09s  user  발화 끝
   159.29s  user  발화 시작: Okay, good to know.
   159.39s  agent 발화 끝
   160.62s  user  발화 끝
   160.78s  agent 발화 시작: That’s helpful information, isn't it? Planning can reduce st
   164.58s  user  발화 시작: Yeah.
   165.07s  user  발화 끝
   166.35s  user  발화 시작: Thanks, Bius.
   166.57s  agent 발화 끝
   167.35s  agent 발화 시작: You’re very welcome. Remember, curiosity is a beautiful thin
   167.36s  user  발화 끝
   172.63s  agent 발화 끝
