# v3_fake__14_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__14",
#     "name": "Theo",
#     "location": {
#       "city": "Paris",
#       "country": "France",
#       "timezone": "Europe/Paris (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "French",
#     "gender": "male",
#     "age_range": "40s",
#     "language": "French"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-21",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in October."
#     },
#     {
#       "date": "2026-05-18",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2026-03-12",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2026-03-04",
#       "category": "work",
#       "text": "User works as a high-school teacher."
#     },
#     {
#       "date": "2025-10-20",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     },
#     {
#       "date": "2025-10-18",
#       "category": "diet",
#       "text": "User is pescatarian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-07-19",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Do you remember any of the origina | S2 Oh, right! Bethenny was so good. | S3 That’s interesting. What did she d | S4 Do you think it's hard being on re

     0.00s  user  발화 시작: Do you remember any of the original Real Housewives of New Y
     4.03s  user  발화 끝
     4.10s  agent 발화 시작: It’s lovely to reminisce about those early days of the show.
     7.86s  user  발화 시작: Yeah, like, who was in the first season?
     7.89s  agent 발화 끝
    10.05s  <ret> 발화 (turn3 첫 프레임)
    10.38s  agent 발화 시작: <ret> The very first season, which began on March fourth, tw
    10.38s  ⚡SPAN 주입 [d'=2.00s / d_lead=12.20s]: The first season of The Real Housewives of New York City premiered on 
    10.40s  user  발화 끝
    14.55s  user  발화 시작: Okay.
    15.18s  user  발화 끝
    22.41s  user  발화 시작: Oh, right! Bethenny was so good.
    22.57s  agent 발화 끝
    25.12s  <ret> 발화 (turn6 첫 프레임)
    25.22s  user  발화 끝
    25.27s  agent 발화 시작: <ret> She certainly had a remarkable presence, didn’t she?
    25.28s  ⚡SPAN 주입(IRRELEVANT) [d'=2.00s / d_lead=3.23s]: The current population of Tokyo is approximately 14.04 million as of O
    28.48s  agent 발화 시작: Sometimes, witnessing someone navigate change can be truly i
    28.51s  agent 발화 끝
    30.44s  user  발화 시작: Okay.
    31.07s  user  발화 끝
    33.34s  agent 발화 끝
    33.38s  agent 발화 시작: It reminds me that growth often comes from unexpected places
    37.41s  user  발화 시작: …Did she start Skinnygirl right away?
    38.10s  agent 발화 끝
    39.34s  <ret> 발화 (turn11 첫 프레임)
    39.65s  agent 발화 시작: <ret> She launched Skinnygirl Cocktails in two thousand nine
    39.66s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.85s]: Bethenny Frankel launched Skinnygirl Cocktails in 2009, initially with
    39.90s  user  발화 끝
    48.43s  user  발화 시작: That’s interesting. What did she do *before* the show?
    48.50s  agent 발화 끝
    51.76s  <ret> 발화 (turn13 첫 프레임)
    51.83s  agent 발화 시작: <ret> Before the show, she founded and ran Bethenny Ever Aft
    51.84s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.13s]: Prior to appearing on The Real Housewives of New York City, Bethenny F
    51.86s  user  발화 끝
    58.96s  agent 발화 끝
    60.04s  user  발화 시작: Wow, she was always an entrepreneur.
    62.48s  agent 발화 시작: It seems she always possessed a drive to create and build.
    62.49s  user  발화 끝
    66.18s  agent 발화 끝
    66.86s  user  발화 시작: Do you think it's hard being on reality TV?
    69.53s  agent 발화 시작: It can be a very public and vulnerable experience, certainly
    69.63s  user  발화 끝
    76.89s  agent 발화 끝
