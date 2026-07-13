# v3_rag_26_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_26",
#     "name": "Kim",
#     "location": {
#       "city": "Berlin",
#       "country": "Germany",
#       "timezone": "Europe/Berlin (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "German",
#     "gender": "non-binary",
#     "age_range": "early 20s",
#     "language": "German"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-07",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in May."
#     },
#     {
#       "date": "2026-01-02",
#       "category": "work",
#       "text": "User works as a nurse."
#     },
#     {
#       "date": "2025-12-10",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-11-16",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2025-09-07",
#       "category": "diet",
#       "text": "User is vegan."
#     },
#     {
#       "date": "2025-08-24",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-11-18",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-09-07",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-07-06",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Oh, you know, I was just rewatchin | S2 Polly Maberly, right. That rings a | S3 That sounds…pleasant. Maybe I… | S4 …should plan a trip.

     0.00s  user  발화 시작: Oh, you know, I was just rewatching Pride and Prejudice, the
     5.95s  agent 발화 시작: That adaptation is quite lovely, isn’t it? It captures a cer
     5.95s  user  발화 끝
    11.45s  user  발화 시작: It really does. Um, who played Kitty, do you remember?
    11.45s  agent 발화 끝
    15.78s  <ret> 발화 (turn3 첫 프레임)
    16.02s  agent 발화 시작: <ret> The role of Kitty Bennet was played by Polly Maberly i
    16.02s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.41s]: Polly Maberly played Kitty Bennet in the 1995 BBC adaptation of Pride 
    16.02s  user  발화 끝
    22.43s  user  발화 시작: Polly Maberly, right. That rings a bell. What’s the weather 
    22.43s  agent 발화 끝
    28.68s  <ret> 발화 (turn5 첫 프레임)
    28.84s  agent 발화 시작: <ret> It’s currently 20.5°C in London, with partly cloudy sk
    28.84s  ⚡SPAN 주입 [d'=1.36s / d_lead=5.95s]: (tool result) London: 20.5°C, humidity 68%, wind 8.2 km/h, condition: 
    28.84s  user  발화 끝
    34.80s  user  발화 시작: That sounds…pleasant. Maybe I…
    34.80s  agent 발화 끝
    36.63s  user  발화 시작: …should plan a trip.
    36.63s  user  발화 끝
    38.46s  agent 발화 시작: A change of scenery can be very restorative, especially when
    38.46s  user  발화 끝
    44.87s  agent 발화 끝
