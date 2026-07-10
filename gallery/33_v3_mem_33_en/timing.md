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

# EXAMINER(FDB-v2) 단계: S1 Um, what time is it right now? | S2 Welll… I’m also gluten-free, aren' | S3 That's perfect. Could you book a t | S4 Right. I should probably schedule 

     0.00s  agent 발화 시작: Hi Casey, I'm Diolo. It’s lovely to connect with you today.
     2.80s  user  발화 시작: Yeah, yeah.
     4.02s  agent 발화 끝
     4.18s  user  발화 끝
     5.03s  user  발화 시작: Um, what time is it right now?
     7.04s  <ret> 발화 (turn3 첫 프레임)
     7.20s  agent 발화 시작: <ret> It’s currently 2:33 PM in London, Casey. A lovely afte
     7.29s  user  발화 끝
     9.04s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.32s]: It is Friday, July 10, 2026 at 2:33 PM in London right now.
    10.38s  user  발화 시작: Yeah.
    10.83s  user  발화 끝
    12.42s  user  발화 시작: Yeah, hmmm… I’m trying to remember something.
    12.53s  agent 발화 끝
    15.65s  user  발화 끝
    15.82s  agent 발화 시작: Anything I can help you recall? Sometimes just talking it th
    20.63s  agent 발화 끝
    20.89s  user  발화 시작: I think it was about dinner… a birthday?
    23.17s  <ret> 발화 (turn8 첫 프레임)
    23.57s  agent 발화 시작: <ret> You were planning a birthday dinner for a party of six
    23.76s  user  발화 끝
    25.17s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.10s]: [2025-07-19] Past chat — Planning a birthday dinner: party of six; loo
    25.84s  user  발화 시작: Yeah, yeah.
    26.79s  user  발화 끝
    28.67s  agent 발화 끝
    29.52s  user  발화 시작: Oh, right! That’s it. Do you think I ever decided on a place
    34.00s  user  발화 끝
    34.45s  agent 발화 시작: I don't have a record of a final decision on that dinner, Ca
    38.23s  user  발화 시작: Welll… I’m also gluten-free, aren't I?
    38.43s  agent 발화 끝
    41.54s  <ret> 발화 (turn13 첫 프레임)
    41.78s  agent 발화 시작: <ret> Yes, you are gluten-free. That’s good to keep in mind 
    41.98s  user  발화 끝
    42.50s  ⚡SPAN 주입 [d'=0.96s / d_lead=4.35s]: [2025-10-29] User is gluten-free.
    46.13s  agent 발화 끝
    46.14s  user  발화 시작: And, uh, I love sushi, don’t I?
    48.93s  <ret> 발화 (turn15 첫 프레임)
    48.96s  user  발화 끝
    49.01s  agent 발화 시작: <ret> You do! Sushi is your favorite cuisine. Perhaps a glut
    50.93s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.65s]: [2026-05-07] User's favorite cuisine is sushi.
    54.66s  agent 발화 끝
    55.12s  user  발화 시작: That sounds nice. Is there one nearby?
    57.99s  <ret> 발화 (turn17 첫 프레임)
    58.38s  agent 발화 시작: <ret> Sushimania is 250 meters away, and Sushi Say is 480 me
    58.44s  user  발화 끝
    59.99s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.30s]: Sushimania (51.5178, 0.1278): <name> (250 m), Sushi Say (480 m); The G
    68.68s  agent 발화 끝
    68.75s  user  발화 시작: Hmm… Sushimania, okay. Do they have outdoor seating?
    73.06s  <ret> 발화 (turn19 첫 프레임)
    73.30s  agent 발화 시작: <ret> Yes, Sushimania does have outdoor seating and is open 
    73.42s  user  발화 끝
    75.06s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.09s]: Sushimania (51.5178, 0.1278): Outdoor seating available, open until 10
    82.29s  user  발화 시작: That's perfect. Could you book a table for six?
    82.39s  agent 발화 끝
    85.21s  <ret> 발화 (turn21 첫 프레임)
    85.53s  agent 발화 시작: <ret> I’ve booked a table for six at Sushimania for 7:00 PM 
    85.71s  ⚡SPAN 주입 [d'=0.50s / d_lead=8.16s]: Sushimania, July 10, 7:00 PM, party of 6, confirmation id 874923
    85.76s  user  발화 끝
    93.69s  agent 발화 끝
    93.78s  user  발화 시작: Oh, great! Thanks so much.
    95.99s  user  발화 끝
    96.31s  agent 발화 시작: You’re very welcome, Casey. I’m glad I could help you with y
   100.11s  user  발화 시작: I also have a Beagle… Rusty, right?
   100.15s  agent 발화 끝
   103.16s  <ret> 발화 (turn25 첫 프레임)
   103.31s  agent 발화 시작: <ret> Yes, you have a Beagle named Rusty! A wonderful compan
   103.49s  user  발화 끝
   104.83s  user  발화 시작: Yeah.
   105.16s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.04s]: [2025-08-08] User has a Beagle named Rusty.
   105.32s  user  발화 끝
   107.97s  user  발화 시작: He is. He needs a vet appointment soon.
   108.36s  agent 발화 끝
   110.62s  agent 발화 시작: I don’t have any information about Rusty’s vet appointments,
   110.74s  user  발화 끝
   115.07s  agent 발화 끝
   115.24s  user  발화 시작: Right. I should probably schedule that.
   118.29s  agent 발화 시작: It's a good idea to stay on top of those things, Casey. Proa
   118.47s  user  발화 끝
   123.66s  agent 발화 끝
   123.71s  user  발화 시작: I suppose so… I'm also allergic to peanuts, aren’t I?
   127.11s  <ret> 발화 (turn32 첫 프레임)
   127.42s  agent 발화 시작: <ret> Yes, you are allergic to peanuts. It’s always wise to 
   127.45s  user  발화 끝
   129.11s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.49s]: [2025-06-20] User is allergic to peanuts.
   129.95s  user  발화 시작: Yeah.
   130.45s  user  발화 끝
   131.85s  user  발화 시작: Yep. Thanks, Diolo.
   131.91s  agent 발화 끝
   133.59s  user  발화 끝
   133.81s  agent 발화 시작: You're most welcome, Casey. Take care and enjoy your evening
   137.51s  agent 발화 끝
