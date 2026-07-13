# v3_selfc_07_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_07",
#     "name": "Sky",
#     "location": {
#       "city": "London",
#       "country": "United Kingdom",
#       "timezone": "Europe/London (GMT, UTC+0)",
#       "currency": "GBP (£)"
#     },
#     "nationality": "British",
#     "gender": "non-binary",
#     "age_range": "50s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-28",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in March."
#     },
#     {
#       "date": "2026-03-30",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2026-03-04",
#       "category": "home",
#       "text": "User's home address is 349 Maple Drive."
#     },
#     {
#       "date": "2026-02-27",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2026-02-06",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     },
#     {
#       "date": "2026-02-02",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-17",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2026-02-11",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2026-01-25",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I’m thinking of going to Seoul nex | S2 That sounds pretty nice. I wonder  | S3 Perfect. — | S4 …Village. What’s a good time to vi

     0.00s  user  발화 시작: I’m thinking of going to Seoul next week. Can you crawl the 
     8.86s  <ret> 발화 (turn1 첫 프레임)
     9.07s  agent 발화 시작: <ret> ESPN.com currently contains twelve thousand, seven hun
     9.07s  user  발화 끝
     9.90s  ⚡SPAN 주입 [d'=1.03s / d_lead=7.10s]: (tool result) ESPN.com contains 12,783 links as of July 10, 2026, 2:38
    16.17s  user  발화 시작: Mhm.
    16.17s  agent 발화 끝
    16.57s  user  발화 시작: Wow, that’s a lot. I’m trying to decide if I should go to N 
    16.57s  user  발화 끝
    24.06s  agent 발화 시작: That sounds lovely. N Seoul Tower is a popular destination, 
    24.06s  user  발화 끝
    30.37s  user  발화 시작: Yeah.
    30.37s  agent 발화 끝
    30.77s  user  발화 시작: What’s the weather forecast for Seoul next Tuesday?
    30.77s  user  발화 끝
    33.52s  <ret> 발화 (turn7 첫 프레임)
    33.92s  agent 발화 시작: <ret> Next Tuesday in Seoul, the forecast is 25.5 degrees Ce
    33.92s  user  발화 끝
    34.15s  ⚡SPAN 주입 [d'=0.64s / d_lead=8.68s]: (tool result) Seoul: July 14, 2026, 25.5°C, humidity 78%, wind 7.2 km/
    42.60s  user  발화 시작: Wow.
    42.60s  agent 발화 끝
    42.99s  user  발화 시작: That sounds pretty nice. I wonder if there are any good Kore
    42.99s  user  발화 끝
    49.69s  <ret> 발화 (turn10 첫 프레임)
    49.70s  agent 발화 시작: <ret> There are three Korean barbecue restaurants near N Seo
    49.70s  user  발화 끝
    50.40s  ⚡SPAN 주입 [d'=0.71s / d_lead=7.89s]: (tool result) 3 Korean BBQ restaurants near N Seoul Tower: Maple Tree 
    57.59s  user  발화 시작: Maple Tree House sounds good. Can you reserve a table for tw
    57.59s  agent 발화 끝
    64.51s  <ret> 발화 (turn13 첫 프레임)
    64.69s  agent 발화 시작: Yeah.
    64.69s  user  발화 끝
    65.08s  agent 발화 시작: <ret> Your reservation at Maple Tree House Namsan is confirm
    65.08s  agent 발화 끝
    65.42s  ⚡SPAN 주입 [d'=1.02s / d_lead=8.28s]: (tool result) Reservation confirmed at Maple Tree House Namsan for 2 p
    73.37s  user  발화 시작: Perfect. —
    73.37s  agent 발화 끝
    74.15s  user  발화 시작: …Actually, what’s the best way to get there from the Myeongd
    74.15s  user  발화 끝
    78.89s  agent 발화 시작: Oh.
    78.89s  user  발화 끝
    79.28s  agent 발화 시작: From Myeongdong, you can take bus number 02 or 05 to Namsan 
    79.28s  agent 발화 끝
    90.72s  user  발화 시작: Yeah.
    90.72s  agent 발화 끝
    91.12s  agent 발화 시작: [happy] It’s a fairly easy journey, and many people enjoy th
    91.12s  user  발화 끝
    97.03s  user  발화 시작: Mm-hmm.
    97.03s  agent 발화 끝
    97.43s  user  발화 시작: Sounds good. I think I’ll also check out the Bukchon Hanok…
    97.43s  user  발화 끝
   101.76s  user  발화 시작: …Village. What’s a good time to visit to avoid the crowds?
   101.76s  user  발화 끝
   105.91s  <ret> 발화 (turn23 첫 프레임)
   106.04s  ⚡SPAN 주입 [d'=1.00s / d_lead=10.26s]: (tool result) Bukchon Hanok Village is least crowded on weekdays befor
   106.10s  agent 발화 시작: <ret> Bukchon Hanok Village is generally least crowded on we
   106.10s  user  발화 끝
   116.36s  user  발화 시작: That’s helpful. Thanks, Horax.
   116.36s  agent 발화 끝
   117.94s  agent 발화 시작: You’re very welcome. I'm glad I could assist you in planning
   117.94s  user  발화 끝
   128.59s  agent 발화 끝
