# v3_pause_16_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pause_16",
#     "name": "Hugo",
#     "location": {
#       "city": "Berlin",
#       "country": "Germany",
#       "timezone": "Europe/Berlin (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "German",
#     "gender": "male",
#     "age_range": "50s",
#     "language": "German"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-03-08",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     },
#     {
#       "date": "2026-02-11",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-12-12",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     },
#     {
#       "date": "2025-09-15",
#       "category": "pet",
#       "text": "User has a Poodle named Coco."
#     },
#     {
#       "date": "2025-08-30",
#       "category": "home",
#       "text": "User's home address is 754 Birch Road."
#     },
#     {
#       "date": "2025-07-28",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-13",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-09-07",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Hey Iano, do you know how many med | S2 Perfect. … I’m looking for action  | S3 …playing around that time? | S4 …can you find restaurants nearby?

     0.00s  user  발화 시작: Hey Iano, do you know how many medals India won at the 2018 
     3.81s  <ret> 발화 (turn1 첫 프레임)
     4.11s  agent 발화 시작: <ret> Well, India really shone at the 2018 Asian Games, taki
     4.13s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.11s]: India won a total of 69 medals at the 2018 Asian Games, including 16 g
     4.17s  user  발화 끝
    14.22s  agent 발화 끝
    14.61s  user  발화 시작: Sixty-nine… wow. Uh, what about the weather in Seoul right n
    18.27s  <ret> 발화 (turn3 첫 프레임)
    18.66s  agent 발화 시작: <ret> The weather in Seoul is currently twenty-six degrees C
    18.67s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.50s]: The current weather in Seoul is 26.0°C, humidity 78%, wind 4.1 km/h.
    18.68s  user  발화 끝
    28.16s  agent 발화 끝
    28.83s  user  발화 시작: That does sound nice. I'm thinking of going to a movie.
    32.07s  <ret> 발화 (turn5 첫 프레임)
    32.23s  agent 발화 시작: <ret> —but first, I was wondering, what time is it there rig
    32.23s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.59s]: It is Friday, July 10, 2026 at 2:41 PM in Asia/Seoul right now.
    32.39s  user  발화 끝
    43.82s  agent 발화 끝
    43.98s  user  발화 시작: Perfect. … I’m looking for action movies.
    46.88s  user  발화 끝
    46.92s  <ret> 발화 (turn7 첫 프레임)
    46.99s  agent 발화 시작: <ret> "Mission: Impossible - Dead Reckoning Part One" is sho
    47.00s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.57s]: "Mission: Impossible - Dead Reckoning Part One" is playing at Lotte Ci
    50.82s  user  발화 시작: Yeah.
    51.23s  user  발화 끝
    55.39s  agent 발화 시작: Thinking about the three o’clock showing? It’s a great optio
    55.56s  agent 발화 끝
    58.91s  user  발화 시작: Really?
    59.45s  user  발화 끝
    61.72s  agent 발화 끝
    61.95s  user  발화 시작: Is there anything else…
    63.70s  user  발화 끝
    65.35s  user  발화 시작: …playing around that time?
    66.34s  <ret> 발화 (turn13 첫 프레임)
    66.66s  agent 발화 시작: <ret> Actually, “Bad Boys: Ride or Die” is playing at Megabo
    66.66s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.07s]: "Bad Boys: Ride or Die" is playing at Megabox Coex at 3:15 PM and 6:30
    66.82s  user  발화 끝
    74.72s  agent 발화 끝
    74.74s  user  발화 시작: That sounds fun too. Iano…
    76.86s  user  발화 끝
    77.78s  user  발화 시작: …can you find restaurants nearby?
    79.46s  <ret> 발화 (turn16 첫 프레임)
    79.85s  agent 발화 시작: <ret> Seoul is full of delicious options! You could try Gaes
    79.86s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.31s]: There are many restaurants in Seoul, including Gaeseong Mandu Koong, k
    80.09s  user  발화 끝
    83.23s  user  발화 시작: Yeah.
    83.68s  user  발화 끝
    89.10s  user  발화 시작: Korean beef soup sounds amazing. Can you make a reservation 
    89.17s  agent 발화 끝
    92.76s  <ret> 발화 (turn19 첫 프레임)
    92.92s  agent 발화 시작: <ret> I'm happy to help with that. But I cannot directly mak
    92.92s  ⚡SPAN 주입 [d'=1.60s / d_lead=9.55s]: Hadongkwan's contact number is +82 2-2266-4282. Their website is hadon
    92.93s  user  발화 끝
   102.38s  agent 발화 시작: I found that Hadongkwan's number is plus eighty-two two two 
   102.47s  agent 발화 끝
   109.28s  agent 발화 끝
