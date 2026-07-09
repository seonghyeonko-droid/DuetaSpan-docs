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
     3.62s  <ret> 발화 (turn1 첫 프레임)
     3.86s  agent 발화 시작: <ret> Absolutely, let’s get that scheduled for you at The Gr
     4.02s  user  발화 끝
     5.14s  ⚡SPAN 주입 [d'=1.52s / d_lead=4.49s]: (tool result) A viewing at The Grandview Lofts is scheduled for June f
     8.20s  agent 발화 시작: Your viewing is confirmed for June fifteenth at two PM. Does
     8.34s  agent 발화 끝
    13.99s  agent 발화 끝
    14.08s  user  발화 시작: Yeah, that sounds perfect. Uh, actually, make that June sixt
    18.72s  <ret> 발화 (turn4 첫 프레임)
    18.88s  agent 발화 시작: <ret> No problem at all, adjusting the date is easy.
    18.94s  user  발화 끝
    19.68s  ⚡SPAN 주입 [d'=0.96s / d_lead=3.38s]: (tool result) A viewing at The Grandview Lofts is scheduled for June s
    22.14s  agent 발화 시작: Okay, I’ve rescheduled your viewing to June sixteenth at two
    22.26s  agent 발화 끝
    27.69s  agent 발화 끝
    28.80s  user  발화 시작: Great! And can you send me directions to The Grandview Lofts
    31.82s  <ret> 발화 (turn7 첫 프레임)
    32.06s  agent 발화 시작: <ret> Of course, I can certainly get those directions for yo
    32.22s  user  발화 끝
    33.82s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.93s]: (tool result) Directions to The Grandview Lofts: Head north on Elm Str
    35.83s  agent 발화 시작: The directions are to head north on Elm Street, then turn ri
    35.99s  agent 발화 끝
    41.52s  agent 발화 끝
    41.60s  user  발화 시작: That sounds straightforward enough. What about parking?
    44.73s  <ret> 발화 (turn10 첫 프레임)
    44.88s  user  발화 끝
    45.12s  agent 발화 시작: <ret> Parking can sometimes be tricky with viewings, so let'
    46.73s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.26s]: (tool result) The Grandview Lofts offers validated parking in the adja
    49.36s  agent 발화 시작: They offer validated parking in the garage next door, which 
    49.38s  agent 발화 끝
    55.33s  agent 발화 끝
    56.53s  user  발화 시작: Oh, excellent. That’s a relief. I— I mean, is there a grocer
    60.96s  <ret> 발화 (turn13 첫 프레임)
    61.36s  agent 발화 시작: <ret> It's good to think about those everyday conveniences! 
    61.54s  user  발화 끝
    62.96s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.15s]: (tool result) Fresh Foods Market is point-three miles from The Grandvi
    67.38s  agent 발화 시작: Fresh Foods Market is just point-three miles from The Grandv
    67.52s  agent 발화 끝
    70.19s  user  발화 시작: Right.
    70.97s  user  발화 끝
    72.50s  user  발화 시작: Perfect. That’s really helpful.
    72.52s  agent 발화 끝
    74.53s  agent 발화 시작: I’m glad I could help with that. Transitioning to a new plac
    74.75s  user  발화 끝
    80.04s  agent 발화 끝
    80.72s  user  발화 시작: It is! I'm feeling a little overwhelmed, honestly.
    84.37s  user  발화 끝
    84.79s  agent 발화 시작: [happy] That's perfectly normal, feeling overwhelmed is a ve
    93.09s  agent 발화 끝
    93.45s  user  발화 시작: It’s just… a lot to think about.
    96.12s  user  발화 끝
    96.17s  agent 발화 시작: It absolutely is. It’s like juggling several balls at once. 
   102.89s  agent 발화 끝
   103.98s  user  발화 시작: Yes, please. Maybe prioritizing tasks?
   107.03s  user  발화 끝
   107.16s  agent 발화 시작: Prioritizing is a fantastic strategy. Let’s focus on what fe
   110.41s  user  발화 시작: Mm-hmm.
   110.86s  user  발화 끝
   114.58s  user  발화 시작: I think finding a good school district is key.
   114.81s  agent 발화 끝
   117.04s  <ret> 발화 (turn26 첫 프레임)
   117.19s  agent 발화 시작: <ret> A good school district is certainly a very important f
   117.34s  user  발화 끝
   119.04s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.91s]: (tool result) The Grandview Lofts is located in the Oakwood Unified Sc
   121.91s  agent 발화 시작: The Oakwood Unified School District, serving the area, is ra
   122.10s  agent 발화 끝
   124.25s  user  발화 시작: Mhm.
   124.97s  user  발화 끝
   127.88s  agent 발화 끝
   128.07s  user  발화 시작: Eight out of ten… that's pretty good.
   130.19s  user  발화 끝
   130.66s  agent 발화 시작: That's a very solid rating, yes. It indicates a strong educa
   137.56s  user  발화 시작: Okay. I think I'm feeling a bit better now.
   137.84s  agent 발화 끝
   140.29s  agent 발화 시작: [surprised] That's wonderful to hear! Recognizing your feeli
   140.38s  user  발화 끝
   147.93s  agent 발화 끝
