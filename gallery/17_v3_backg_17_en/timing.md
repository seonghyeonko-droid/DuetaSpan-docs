# v3_backg_17_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_backg_17",
#     "name": "Hana",
#     "location": {
#       "city": "London",
#       "country": "United Kingdom",
#       "timezone": "Europe/London (GMT, UTC+0)",
#       "currency": "GBP (£)"
#     },
#     "nationality": "British",
#     "gender": "female",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-01-19",
#       "category": "home",
#       "text": "User's home address is 501 Maple Drive."
#     },
#     {
#       "date": "2025-10-21",
#       "category": "pet",
#       "text": "User has a Golden Retriever named Max."
#     },
#     {
#       "date": "2025-10-07",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2025-06-17",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in March."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-01",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2026-01-27",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 How many seats in lok sabha electi | S2 It is. Can you tell me about the w | S3 Sounds nice. How much would a meal | S4 It is. What about finding a good p

     0.00s  user  발화 시작: How many seats in lok sabha election 2014?
     2.89s  <ret> 발화 (turn1 첫 프레임)
     3.23s  user  발화 끝
     3.28s  agent 발화 시작: <ret> The Lok Sabha has a total of 543 seats, including both
     3.29s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.34s]: The Lok Sabha has 543 seats, of which 530 are elected and 13 are nomin
     9.62s  agent 발화 끝
     9.69s  user  발화 시작: Oh, okay.
    10.78s  user  발화 끝
    11.09s  agent 발화 시작: It's good to have a foundational understanding of the system
    14.54s  user  발화 시작: Yeah, totally.
    15.54s  user  발화 끝
    16.56s  agent 발화 끝
    18.32s  user  발화 시작: Yeah, uhhh, what about the current year?
    20.33s  agent 발화 시작: What year are you curious about now?
    20.44s  user  발화 끝
    22.38s  user  발화 시작: 2019.
    22.41s  agent 발화 끝
    23.47s  <ret> 발화 (turn8 첫 프레임)
    23.63s  agent 발화 시작: <ret> In 2019, the Bharatiya Janata Party secured 303 seats 
    23.63s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.60s]: In the 2019 Indian general election, the Bharatiya Janata Party won 30
    23.66s  user  발화 끝
    26.68s  user  발화 시작: Nice.
    27.17s  user  발화 끝
    29.16s  agent 발화 시작: It's interesting to see how the political landscape shifts o
    29.23s  agent 발화 끝
    33.35s  user  발화 시작: It is. Can you tell me about the weather in Delhi?
    33.46s  agent 발화 끝
    35.67s  <ret> 발화 (turn12 첫 프레임)
    35.93s  user  발화 끝
    35.98s  agent 발화 시작: <ret> The weather in Delhi is currently 32.0 degrees Celsius
    35.99s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.76s]: (tool result) The current weather in Delhi is 32.0°C, humidity 65%, wi
    40.99s  user  발화 시작: Yeah.
    41.48s  user  발화 끝
    44.23s  user  발화 시작: And Mumbai?
    44.74s  agent 발화 끝
    44.90s  <ret> 발화 (turn15 첫 프레임)
    45.05s  user  발화 끝
    45.29s  agent 발화 시작: <ret> In Mumbai, it’s currently 29.5 degrees Celsius, with h
    45.30s  ⚡SPAN 주입 [d'=1.44s / d_lead=9.13s]: (tool result) The current weather in Mumbai is 29.5°C, humidity 82%, w
    51.85s  user  발화 시작: Okay.
    52.39s  user  발화 끝
    54.42s  agent 발화 끝
    54.73s  user  발화 시작: Hmm, that's quite a difference.
    56.34s  agent 발화 시작: Coastal cities often have different microclimates. It’s good
    56.34s  user  발화 끝
    61.43s  agent 발화 끝
    61.58s  user  발화 시작: True. What's a good restaurant in Delhi?
    63.33s  <ret> 발화 (turn20 첫 프레임)
    63.72s  agent 발화 시작: <ret> Bukhara is a well-regarded restaurant in Delhi, specia
    63.73s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.22s]: (tool result) Bukhara is a highly-rated restaurant in Delhi, known for
    63.84s  user  발화 끝
    66.73s  user  발화 시작: Okay.
    67.36s  user  발화 끝
    70.94s  agent 발화 끝
    71.16s  user  발화 시작: Sounds nice. How much would a meal cost there?
    73.00s  <ret> 발화 (turn23 첫 프레임)
    73.14s  user  발화 끝
    73.24s  agent 발화 시작: <ret> You can expect a full meal at Bukhara to cost around 3
    73.24s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.69s]: (tool result) Bukhara Delhi price range: Expect to spend around ₹3000-
    78.80s  user  발화 시작: That’s…expensive.
    78.94s  agent 발화 끝
    80.73s  user  발화 끝
    80.88s  agent 발화 시작: It’s a splurge, certainly! There are many other delicious, m
    86.30s  user  발화 시작: Any cheaper options?
    86.39s  agent 발화 끝
    87.33s  <ret> 발화 (turn27 첫 프레임)
    87.65s  agent 발화 시작: <ret> Karim’s offers more affordable Mughlai cuisine, with m
    87.65s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.54s]: (tool result) Karim's in Delhi offers affordable Mughlai cuisine, with
    87.73s  user  발화 끝
    94.10s  user  발화 시작: Perfect.
    94.18s  agent 발화 끝
    94.73s  user  발화 끝
    94.94s  agent 발화 시작: Finding places that fit your budget is so important when est
    97.47s  user  발화 시작: Yeah.
    97.97s  user  발화 끝
   100.36s  agent 발화 끝
   100.86s  user  발화 시작: It is. What about finding a good park?
   102.68s  <ret> 발화 (turn32 첫 프레임)
   102.92s  agent 발화 시작: <ret> Lodhi Garden is a lovely park in Delhi, famous for its
   102.92s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.62s]: (tool result) Lodhi Garden is a popular park in Delhi, known for its h
   103.06s  user  발화 끝
   107.42s  user  발화 시작: Right.
   107.96s  user  발화 끝
   109.54s  agent 발화 끝
   110.22s  user  발화 시작: Oh, the traffic is awful today!
   112.20s  user  발화 끝
   112.62s  agent 발화 시작: And sometimes, just finding a quiet space to breathe is exac
   117.72s  user  발화 시작: Definitely.
   117.89s  agent 발화 끝
   118.53s  agent 발화 시작: It sounds like you're already starting to get a feel for Del
   118.54s  user  발화 끝
   122.66s  user  발화 시작: I think so. Thanks, Ararina.
   122.69s  agent 발화 끝
   124.27s  user  발화 끝
   124.35s  agent 발화 시작: You're very welcome. Remember, settling in takes time, so be
   129.21s  agent 발화 끝
