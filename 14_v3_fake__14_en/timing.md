# v3_fake__14_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__14",
#     "name": "Taylor",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "non-binary",
#     "age_range": "40s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-02-19",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in May."
#     },
#     {
#       "date": "2026-02-18",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2026-02-15",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-11-24",
#       "category": "home",
#       "text": "User's home address is 559 Cedar Lane."
#     },
#     {
#       "date": "2025-10-15",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2025-08-11",
#       "category": "hobby",
#       "text": "User is into vintage synth collecting."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-19",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-10-16",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-06-08",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I was just thinking about that sho | S2 …like I missed the last episode. | S3 Oh wow, that’s… a lot to take in. | S4 Maybe. Do you know if there are an

     0.00s  user  발화 시작: I was just thinking about that show, “The Haves and the Have
     3.84s  user  발화 끝
     4.01s  agent 발화 시작: It’s a show that really draws you in, doesn't it? I find tho
    10.01s  user  발화 시작: Do you remember how it ended? I feel…
    10.07s  agent 발화 끝
    13.34s  user  발화 끝
    15.33s  user  발화 시작: …like I missed the last episode.
    17.11s  <ret> 발화 (turn4 첫 프레임)
    17.40s  user  발화 끝
    17.41s  agent 발화 시작: <ret> The show wrapped up on July nineteenth, two thousand t
    17.43s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.55s]: “The Haves and the Have Nots” concluded on July 19, 2022, with a shock
    24.81s  user  발화 시작: Oh wow, that’s… a lot to take in.
    24.97s  agent 발화 끝
    27.41s  <ret> 발화 (turn6 첫 프레임)
    27.55s  agent 발화 시작: <ret> Sometimes endings leave us feeling a little exhausted,
    27.57s  ⚡SPAN 주입(IRRELEVANT) [d'=2.00s / d_lead=6.67s]: The current price of gold per troy ounce is $2,328.60 as of July 10, 2
    27.68s  user  발화 끝
    34.23s  agent 발화 끝
    34.96s  user  발화 시작: Yeah, definitely. I think I just need to find something ligh
    38.68s  agent 발화 시작: That sounds like a very good idea. Perhaps a comedy or somet
    38.75s  user  발화 끝
    44.19s  agent 발화 끝
    45.78s  user  발화 시작: Maybe. Do you know if there are any good movies playing near
    49.71s  <ret> 발화 (turn10 첫 프레임)
    49.94s  agent 발화 시작: <ret> The Super Mario Bros. Movie is playing one and a half 
    49.95s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.13s]: (tool result) The Super Mario Bros. Movie — 1.5 miles — 2:45 PM, 5:15 
    50.04s  user  발화 끝
    59.07s  agent 발화 끝
