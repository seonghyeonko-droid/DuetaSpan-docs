# v3_selfc_08_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_08",
#     "name": "Mia",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "female",
#     "age_range": "late 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-12",
#       "category": "work",
#       "text": "User works as a software engineer."
#     },
#     {
#       "date": "2026-04-01",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2026-03-21",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2026-03-18",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     },
#     {
#       "date": "2025-08-29",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in October."
#     },
#     {
#       "date": "2025-06-08",
#       "category": "home",
#       "text": "User's home address is 595 Oak Avenue."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-12",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-07-16",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-07-04",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 What is the quickest way to get fr | S2 What's the weather like in Shibuya | S3 [laugh] Sounds perfect. Can you ma | S4 Can you remind me of that reservat

     0.00s  user  발화 시작: What is the quickest way to get from Tokyo Station to Shibuy
     0.00s  <ret> 발화 (turn1 첫 프레임)
     0.00s  <ret> 발화 (turn4 첫 프레임)
     0.03s  <ret> 발화 (turn10 첫 프레임)
     0.06s  agent 발화 시작: <ret> The quickest route is about 9.6 kilometers and takes a
     0.06s  ⚡SPAN 주입 [d'=0.04s / d_lead=0.04s]: (tool result) {"distance": 9.6, "duration": 1800, "route": "JR Yamanot
     0.06s  user  발화 끝
     0.10s  agent 발화 시작: That’s using the JR Yamanote Line to Shibuya Station, then a
     0.10s  agent 발화 끝
     0.14s  user  발화 시작: Uh, actually, I meant to say Shinjuku Station, not Tokyo Sta
     0.14s  agent 발화 끝
     0.18s  agent 발화 시작: <ret> From Shinjuku Station to Shibuya Crossing, it's about 
     0.18s  ⚡SPAN 주입 [d'=0.05s / d_lead=0.05s]: (tool result) {"distance": 4.8, "duration": 600, "route": "JR Yamanote
     0.18s  user  발화 끝
     0.23s  agent 발화 시작: Again, taking the JR Yamanote Line to Shibuya Station, then 
     0.23s  agent 발화 끝
     0.25s  <ret> 발화 (turn17 첫 프레임)
     0.27s  user  발화 시작: Yeah.
     0.27s  agent 발화 끝
     0.28s  agent 발화 시작: It’s great to get the details right—planning ahead makes eve
     0.28s  user  발화 끝
     0.32s  user  발화 시작: Uh-huh.
     0.32s  agent 발화 끝
     0.32s  user  발화 시작: What's the weather like in Shibuya right now?
     0.32s  user  발화 끝
     0.35s  agent 발화 시작: <ret> It's currently 28.0 degrees Celsius in Shibuya, with 6
     0.35s  ⚡SPAN 주입 [d'=0.06s / d_lead=0.06s]: (tool result) "28.0°C, humidity 65%, wind 3.2 km/h, condition: partly 
     0.35s  user  발화 끝
     0.41s  <ret> 발화 (turn13 첫 프레임)
     0.41s  agent 발화 시작: The conditions are partly cloudy, so it looks like a nice da
     0.41s  agent 발화 끝
     0.45s  user  발화 시작: That sounds good. Is there a good ramen place nearby?
     0.45s  agent 발화 끝
     0.49s  agent 발화 시작: <ret> Ichiran Shibuya has 4.5 stars with 120 reviews, and th
     0.49s  ⚡SPAN 주입 [d'=0.06s / d_lead=0.06s]: (tool result) "Ichiran Shibuya, 4.5 stars, 120 reviews, price range: ¥
     0.49s  user  발화 끝
     0.54s  agent 발화 시작: It’s a really popular spot, perfect for a quick and tasty me
     0.54s  agent 발화 끝
     0.59s  user  발화 시작: Uh-huh.
     0.59s  agent 발화 끝
     0.59s  user  발화 시작: [laugh] Sounds perfect. Can you make a reservation for me th
     0.59s  user  발화 끝
     0.65s  agent 발화 시작: <ret> Your reservation at Ichiran Shibuya is confirmed for t
     0.65s  ⚡SPAN 주입 [d'=0.04s / d_lead=0.04s]: (tool result) "Reservation confirmed for Ichiran Shibuya, 2026-07-10 a
     0.65s  user  발화 끝
     0.69s  agent 발화 시작: Your confirmation ID is 7A9B2—enjoy your ramen!
     0.69s  agent 발화 끝
     0.71s  user  발화 시작: Mhm.
     0.71s  agent 발화 끝
     0.72s  user  발화 시작: Great, thanks so much!
     0.72s  user  발화 끝
     0.73s  agent 발화 시작: You’re very welcome! It’s wonderful you're taking the time t
     0.73s  user  발화 끝
     0.78s  agent 발화 시작: Remember, small pleasures like that really add up to a happi
     0.78s  agent 발화 끝
     0.82s  user  발화 시작: Yeah.
     0.82s  agent 발화 끝
     0.82s  user  발화 시작: Can you remind me of that reservation tomorrow morning?
     0.82s  user  발화 끝
     0.86s  agent 발화 시작: I can. What time would you like the reminder?
     0.86s  user  발화 끝
     0.89s  user  발화 시작: Yeah.
     0.89s  agent 발화 끝
     0.89s  user  발화 시작: 9 AM.
     0.89s  user  발화 끝
     0.90s  agent 발화 시작: Okay, I’ve set a reminder for your Ichiran Shibuya reservati
     0.90s  user  발화 끝
     0.94s  agent 발화 시작: It’s all about staying on track and making the most of your 
     0.94s  agent 발화 끝
     1.00s  agent 발화 끝
