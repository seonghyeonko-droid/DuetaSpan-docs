# v3_defer_10_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_defer_10",
#     "name": "Felix",
#     "location": {
#       "city": "Paris",
#       "country": "France",
#       "timezone": "Europe/Paris (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "French",
#     "gender": "male",
#     "age_range": "early 20s",
#     "language": "French"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-24",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     },
#     {
#       "date": "2026-03-21",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-10-03",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     },
#     {
#       "date": "2025-09-26",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2025-07-06",
#       "category": "home",
#       "text": "User's home address is 590 Elm Street."
#     },
#     {
#       "date": "2025-06-17",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in December."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-14",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2026-04-18",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-12-06",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Please clear the final attempt one | S2 I need to book a… | S3 …hotel in Busan for next week. | S4 July twenty-sixth to twenty-eighth

     0.00s  user  발화 시작: Please clear the final attempt one hundred twenty three sess
     3.84s  user  발화 끝
     3.84s  <ret> 발화 (turn1 첫 프레임)
     3.91s  agent 발화 시작: <ret> Session one hundred twenty three is now clear for a fr
     3.92s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.75s]: (tool result) Session 123 cleared.
     9.66s  agent 발화 끝
     9.76s  user  발화 시작: Um, what's the weather like in Seoul right now?
    12.31s  <ret> 발화 (turn3 첫 프레임)
    12.47s  agent 발화 시작: <ret> It’s twenty-three point zero degrees Celsius in Seoul,
    12.47s  ⚡SPAN 주입 [d'=1.12s / d_lead=8.76s]: (tool result) 23.0°C, humidity 74%, wind 5.5 km/h
    12.67s  user  발화 끝
    20.87s  user  발화 시작: I need to book a…
    21.23s  agent 발화 끝
    22.02s  user  발화 끝
    24.03s  user  발화 시작: …hotel in Busan for next week.
    26.17s  agent 발화 시작: Busan sounds wonderful! To help me find the perfect place, c
    26.24s  user  발화 끝
    32.14s  user  발화 시작: July twenty-sixth to twenty-eighth.
    32.28s  agent 발화 끝
    33.60s  <ret> 발화 (turn8 첫 프레임)
    33.91s  agent 발화 시작: <ret> Give me a moment while I check availability for those 
    33.92s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.58s]: (no information found)
    33.98s  user  발화 끝
    40.37s  <ret> 발화 (turn9 첫 프레임)
    40.45s  agent 발화 시작: <ret> I’ve found the Hotel LCT The President in the Busan St
    40.45s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.59s]: Hotel LCT The President - ₩150,000/night, 4.5 stars, Busan Station are
    40.49s  agent 발화 끝
    52.05s  agent 발화 끝
