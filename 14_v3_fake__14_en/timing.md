# v3_fake__14_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__14",
#     "name": "Nora",
#     "location": {
#       "city": "New York",
#       "country": "United States",
#       "timezone": "America/New_York (EST, UTC-5)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "female",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-12",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-02-25",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in March."
#     },
#     {
#       "date": "2025-10-31",
#       "category": "home",
#       "text": "User's home address is 100 Elm Street."
#     },
#     {
#       "date": "2025-06-03",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-25",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-11-22",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Hi Zellar, how are you doing today | S2 Can you find me some movies playin | S3 Great. What time is it now? | S4 Okay, bye.

     0.00s  user  발화 시작: Hi Zellar, how are you doing today?
     2.26s  user  발화 끝
     2.37s  agent 발화 시작: I’m doing wonderfully, thank you for asking! Ready to help y
     4.67s  user  발화 시작: Yeah.
     5.16s  user  발화 끝
     8.70s  user  발화 시작: That’s good to hear. Um, who led the early republicans?
     8.86s  agent 발화 끝
    13.23s  user  발화 끝
    13.28s  <ret> 발화 (turn4 첫 프레임)
    13.59s  agent 발화 시작: <ret> Well, that’s a fascinating question! Abraham Lincoln w
    13.60s  ⚡SPAN 주입 [d'=2.00s / d_lead=12.71s]: Abraham Lincoln was a leader of the early Republican Party, opposing t
    26.30s  agent 발화 끝
    26.32s  user  발화 시작: Interesting. And what was his profession before politics?
    29.75s  <ret> 발화 (turn6 첫 프레임)
    29.91s  agent 발화 시작: <ret> Before he entered politics, Abraham Lincoln worked as 
    29.91s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.96s]: Before politics, Abraham Lincoln worked as a lawyer and a postmaster i
    30.02s  user  발화 끝
    35.52s  user  발화 시작: Yeah.
    35.96s  user  발화 끝
    39.88s  agent 발화 끝
    40.12s  user  발화 시작: A lawyer, huh? I always wonder about those early days.
    43.55s  agent 발화 시작: It really does give you perspective! Life is a journey, and 
    43.78s  user  발화 끝
    47.50s  user  발화 시작: Okay.
    48.04s  user  발화 끝
    49.25s  agent 발화 끝
    50.34s  user  발화 시작: Can you find me some movies playing tonight?
    52.56s  <ret> 발화 (turn12 첫 프레임)
    52.80s  agent 발화 시작: <ret> Oppenheimer is playing at seven, Barbie at seven-thirt
    52.80s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.42s]: (tool result) Oppenheimer — 7:00 PM, Barbie — 7:30 PM, Mission: Imposs
    53.07s  user  발화 끝
    56.55s  user  발화 시작: Okay.
    57.19s  user  발화 끝
    62.22s  agent 발화 끝
    62.34s  user  발화 시작: Wow, that’s a lot. Uh, is Oppenheimer good?
    65.45s  <ret> 발화 (turn15 첫 프레임)
    65.61s  agent 발화 시작: <ret> It’s been getting fantastic reviews! A really thought-
    65.61s  ⚡SPAN 주입(IRRELEVANT) [d'=0.96s / d_lead=4.86s]: The current temperature in Tokyo is 28.5°C, with humidity at 68% and w
    65.77s  user  발화 끝
    70.35s  agent 발화 시작: I'm happy to hear you're considering a movie night.
    70.47s  agent 발화 끝
    71.41s  user  발화 시작: Mm-hmm.
    71.91s  user  발화 끝
    73.37s  user  발화 시작: What about the weather in London tomorrow?
    73.40s  agent 발화 끝
    75.84s  <ret> 발화 (turn19 첫 프레임)
    76.00s  agent 발화 시작: <ret> Tomorrow in London, you can expect twenty-one degrees 
    76.00s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.45s]: (tool result) 21.0°C, humidity 78%, wind 8.0 km/h
    76.14s  user  발화 끝
    87.45s  agent 발화 끝
    87.48s  user  발화 시작: That sounds nice. I need to set an alarm for seven am.
    91.92s  <ret> 발화 (turn21 첫 프레임)
    91.97s  user  발화 끝
    91.99s  agent 발화 시작: <ret> Your alarm is now set for seven am. Starting your day 
    92.00s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.82s]: (tool result) Alarm set for 7:00 AM.
    98.79s  user  발화 시작: Great. What time is it now?
    98.81s  agent 발화 끝
   100.86s  <ret> 발화 (turn23 첫 프레임)
   101.18s  agent 발화 시작: <ret> Right now, it’s Friday, July tenth, two thousand twent
   101.18s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.24s]: (tool result) It is Friday, July 10, 2026 at 3:17 PM in Asia/Seoul rig
   101.19s  user  발화 끝
   111.22s  user  발화 시작: Wow, already? I should probably get going.
   111.42s  agent 발화 끝
   114.32s  user  발화 끝
   114.39s  agent 발화 시작: It sounds like a busy day! Remember to prioritize self-care 
   118.06s  user  발화 시작: Right.
   118.69s  user  발화 끝
   119.71s  agent 발화 끝
   120.66s  user  발화 시작: Yeah, you’re right. Thanks for all your help, Zellar.
   124.20s  agent 발화 시작: I’m always here to support you on your journey to wellness.
   124.31s  user  발화 끝
   127.94s  user  발화 시작: I appreciate that. I’ll talk to you later.
   128.09s  agent 발화 끝
   130.23s  agent 발화 시작: Wonderful! Take care, and don’t hesitate to reach out whenev
   130.43s  user  발화 끝
   133.25s  user  발화 시작: Right.
   133.75s  user  발화 끝
   135.59s  user  발화 시작: Okay, bye.
   135.68s  agent 발화 끝
   136.77s  agent 발화 시작: Goodbye! Have a fantastic rest of your day, and remember to 
   136.78s  user  발화 끝
   141.38s  user  발화 시작: I will.
   141.49s  agent 발화 끝
   141.92s  user  발화 끝
   142.24s  agent 발화 시작: That’s excellent! Small habits can make a big difference ove
   143.65s  user  발화 시작: Yeah.
   144.15s  user  발화 끝
   146.60s  user  발화 시작: You’re so encouraging.
   146.82s  agent 발화 끝
   148.14s  agent 발화 시작: I just want to see you thrive! Taking care of yourself is th
   148.20s  user  발화 끝
   149.75s  user  발화 시작: Oh.
   150.20s  user  발화 끝
   153.32s  agent 발화 끝
   153.57s  user  발화 시작: Thanks again.
   154.39s  user  발화 끝
   154.44s  agent 발화 시작: You're very welcome! Remember, I'm here whenever you need a 
   158.79s  agent 발화 끝
