# v3_selfc_07_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_07",
#     "name": "Rennora",
#     "location": {
#       "city": "Tokyo",
#       "country": "Japan",
#       "timezone": "Asia/Tokyo (JST, UTC+9)",
#       "currency": "JPY (¥)"
#     },
#     "nationality": "Japanese",
#     "gender": "female",
#     "age_range": "50s",
#     "language": "Japanese"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-17",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in March."
#     },
#     {
#       "date": "2026-03-25",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2026-02-05",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     },
#     {
#       "date": "2026-01-17",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-08-02",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2026-07-09",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2026-04-23",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Set up a viewing for me at The Gra | S2 That sounds straightforward enough | S3 It is! I'm feeling a little overwh | S4 I think finding a good school dist

     0.00s  user  발화 시작: Set up a viewing for me at The Grandview Lofts on June fifte
     3.70s  <ret> 발화 (turn1 첫 프레임)
     3.94s  agent 발화 시작: <ret> Absolutely, let’s get that scheduled for you at The Gr
     4.17s  user  발화 끝
     5.22s  ⚡SPAN 주입 [d'=1.52s / d_lead=4.49s]: (tool result) A viewing at The Grandview Lofts is scheduled for June f
     8.32s  agent 발화 시작: Your viewing is confirmed for June fifteenth at two PM. Does
     8.42s  agent 발화 끝
    14.75s  agent 발화 끝
    14.83s  user  발화 시작: Yeah, that sounds perfect. Uh, actually, make that June sixt
    20.14s  <ret> 발화 (turn4 첫 프레임)
    20.30s  agent 발화 시작: <ret> No problem at all, adjusting the date is easy.
    20.43s  user  발화 끝
    21.11s  ⚡SPAN 주입 [d'=0.96s / d_lead=3.46s]: (tool result) A viewing at The Grandview Lofts is scheduled for June s
    23.58s  agent 발화 시작: Okay, I’ve rescheduled your viewing to June sixteenth at two
    23.77s  agent 발화 끝
    28.45s  agent 발화 끝
    29.56s  user  발화 시작: Great! And can you send me directions to The Grandview Lofts
    32.92s  <ret> 발화 (turn7 첫 프레임)
    33.16s  agent 발화 시작: <ret> Of course, I can certainly get those directions for yo
    33.31s  user  발화 끝
    34.92s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.49s]: (tool result) Directions to The Grandview Lofts: Head north on Elm Str
    37.43s  agent 발화 시작: The directions are to head north on Elm Street, then turn ri
    37.65s  agent 발화 끝
    42.94s  agent 발화 끝
    43.02s  user  발화 시작: That sounds straightforward enough. What about parking?
    45.73s  <ret> 발화 (turn10 첫 프레임)
    46.02s  user  발화 끝
    46.13s  agent 발화 시작: <ret> Parking can sometimes be tricky with viewings, so let'
    47.73s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.67s]: (tool result) The Grandview Lofts offers validated parking in the adja
    50.73s  agent 발화 시작: They offer validated parking in the garage next door, which 
    50.80s  agent 발화 끝
    56.98s  agent 발화 끝
    58.23s  user  발화 시작: Oh, excellent. That’s a relief. I— I mean, is there a grocer
    62.96s  <ret> 발화 (turn13 첫 프레임)
    63.20s  agent 발화 시작: <ret> It's good to think about those everyday conveniences! 
    63.37s  user  발화 끝
    64.96s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.71s]: (tool result) Fresh Foods Market is point-three miles from The Grandvi
    69.74s  agent 발화 시작: Fresh Foods Market is just point-three miles from The Grandv
    69.92s  agent 발화 끝
    72.57s  user  발화 시작: Right.
    73.29s  user  발화 끝
    74.88s  user  발화 시작: Perfect. That’s really helpful.
    74.88s  agent 발화 끝
    76.97s  agent 발화 시작: I’m glad I could help with that. Transitioning to a new plac
    77.18s  user  발화 끝
    82.62s  agent 발화 끝
    83.30s  user  발화 시작: It is! I'm feeling a little overwhelmed, honestly.
    86.91s  user  발화 끝
    87.33s  agent 발화 시작: [happy] That's perfectly normal, feeling overwhelmed is a ve
    95.86s  agent 발화 끝
    96.23s  user  발화 시작: It’s just… a lot to think about.
    98.77s  user  발화 끝
    98.88s  agent 발화 시작: It absolutely is. It’s like juggling several balls at once. 
   106.66s  agent 발화 끝
   107.73s  user  발화 시작: Yes, please. Maybe prioritizing tasks?
   111.33s  user  발화 끝
   111.52s  agent 발화 시작: Prioritizing is a fantastic strategy. Let’s focus on what fe
   114.47s  user  발화 시작: Mm-hmm.
   115.11s  user  발화 끝
   118.25s  user  발화 시작: I think finding a good school district is key.
   118.43s  agent 발화 끝
   120.50s  <ret> 발화 (turn26 첫 프레임)
   120.82s  agent 발화 시작: <ret> A good school district is certainly a very important f
   121.00s  ⚡SPAN 주입 [d'=0.50s / d_lead=4.72s]: (tool result) The Grandview Lofts is located in the Oakwood Unified Sc
   121.02s  user  발화 끝
   125.35s  agent 발화 시작: The Oakwood Unified School District, serving the area, is ra
   125.54s  agent 발화 끝
   127.68s  user  발화 시작: Mhm.
   128.18s  user  발화 끝
   131.33s  agent 발화 끝
   131.53s  user  발화 시작: Eight out of ten… that's pretty good.
   133.69s  user  발화 끝
   134.14s  agent 발화 시작: That's a very solid rating, yes. It indicates a strong educa
   140.57s  user  발화 시작: Okay. I think I'm feeling a bit better now.
   140.76s  agent 발화 끝
   143.31s  agent 발화 시작: [surprised] That's wonderful to hear! Recognizing your feeli
   143.43s  user  발화 끝
   150.50s  agent 발화 끝
