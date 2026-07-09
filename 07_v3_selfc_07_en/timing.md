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

# EXAMINER(FDB-v2) 단계: S1 Set up a viewing for me at The Gra | S2 Fifteen minutes? That sounds…fast. | S3 Yeah, definitely. So, what’s the a | S4 Hmm, 22 Pine Avenue sounds interes

     0.00s  user  발화 시작: Set up a viewing for me at The Grandview Lofts on June fifte
     3.36s  <ret> 발화 (turn1 첫 프레임)
     3.59s  agent 발화 시작: <ret> Great! I’ve scheduled a viewing for you at The Grandvi
     3.79s  user  발화 끝
     4.88s  ⚡SPAN 주입 [d'=1.52s / d_lead=6.76s]: (tool result) Viewing scheduled: The Grandview Lofts, June 15th, 2:00 
    10.35s  agent 발화 끝
    10.76s  user  발화 시작: That’s… actually, can we push that to the sixteenth?
    14.26s  <ret> 발화 (turn3 첫 프레임)
    14.32s  user  발화 끝
    14.42s  agent 발화 시작: <ret> Absolutely. I’ve rescheduled your viewing at The Grand
    16.26s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.97s]: (tool result) Viewing rescheduled: The Grandview Lofts, June 16th, 2:0
    22.32s  user  발화 시작: Perfect. And could you send me directions?
    22.39s  agent 발화 끝
    25.15s  <ret> 발화 (turn5 첫 프레임)
    25.38s  agent 발화 시작: <ret> Certainly. Directions to The Grandview Lofts are to 12
    25.55s  user  발화 끝
    27.15s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.64s]: (tool result) Directions to The Grandview Lofts: 123 Main Street, Anyt
    34.89s  user  발화 시작: Fifteen minutes? That sounds…fast.
    35.02s  agent 발화 끝
    38.68s  user  발화 끝
    38.72s  agent 발화 시작: Traffic can be unpredictable, but that’s what the navigation
    49.33s  agent 발화 끝
    49.40s  user  발화 시작: Right. Uh, what’s the neighborhood like around there?
    53.15s  <ret> 발화 (turn9 첫 프레임)
    53.15s  user  발화 끝
    53.30s  agent 발화 시작: <ret> It’s a quiet residential area. The Walk Score is seven
    55.15s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.48s]: (tool result) Neighborhood: Quiet residential area. Walk Score: 78/100
    59.12s  user  발화 시작: Right.
    59.90s  user  발화 끝
    63.79s  agent 발화 끝
    63.99s  user  발화 시작: Walkable is good. I like that.
    66.35s  agent 발화 시작: It’s wonderful to find a neighborhood that fits your lifesty
    66.44s  user  발화 끝
    73.53s  user  발화 시작: Yeah, definitely. So, what’s the average rent for a two-bedr
    73.62s  agent 발화 끝
    77.78s  <ret> 발화 (turn14 첫 프레임)
    77.94s  agent 발화 시작: <ret> The average rent for a two-bedroom in Anytown is eight
    78.07s  user  발화 끝
    79.78s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.73s]: (tool result) Average rent (2-bedroom, Anytown): $1800/month. Range: $
    87.67s  agent 발화 끝
    87.75s  user  발화 시작: Wow, that's…more than I expected.
    90.89s  user  발화 끝
    91.28s  agent 발화 시작: Rent can vary quite a bit depending on location and amenitie
   100.98s  agent 발화 끝
   102.16s  user  발화 시작: True. Okay, can you check if there are any other two-bedroom
   110.37s  <ret> 발화 (turn18 첫 프레임)
   110.50s  user  발화 끝
   110.61s  agent 발화 시작: <ret> I found three apartments near The Grandview Lofts unde
   112.37s  ⚡SPAN 주입 [d'=2.00s / d_lead=16.24s]: (tool result) Found 3 apartments: 11 Oak Street ($1650), 22 Pine Avenu
   117.62s  user  발화 시작: Mm-hmm.
   118.35s  user  발화 끝
   126.83s  user  발화 시작: Hmm, 22 Pine Avenue sounds interesting. Can you tell me more
   126.84s  agent 발화 끝
   131.83s  <ret> 발화 (turn21 첫 프레임)
   132.07s  agent 발화 시작: <ret> 22 Pine Avenue has two bedrooms, one bathroom, nine hu
   132.16s  user  발화 끝
   133.83s  ⚡SPAN 주입 [d'=2.00s / d_lead=12.02s]: (tool result) 22 Pine Avenue: 2 bed, 1 bath, 900 sq ft, includes in-un
   140.92s  user  발화 시작: Yeah.
   141.60s  user  발화 끝
   144.09s  agent 발화 끝
   144.12s  user  발화 시작: Pet-friendly is a must. That sounds…promising.
   148.00s  user  발화 끝
   148.22s  agent 발화 시작: It’s wonderful when a place checks all the boxes. It sounds 
   155.20s  user  발화 시작: [laugh] Yes, it does. Okay, let’s schedule a viewing for 22 
   155.31s  agent 발화 끝
   163.16s  <ret> 발화 (turn26 첫 프레임)
   163.32s  agent 발화 시작: <ret> Excellent! I’ve scheduled a viewing for 22 Pine Avenue
   163.35s  user  발화 끝
   163.88s  ⚡SPAN 주입 [d'=0.72s / d_lead=8.20s]: (tool result) Viewing scheduled: 22 Pine Avenue, tomorrow at 3:00 PM. 
   171.52s  agent 발화 끝
