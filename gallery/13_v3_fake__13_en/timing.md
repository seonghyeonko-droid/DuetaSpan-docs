# v3_fake__13_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__13",
#     "name": "Robin",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "non-binary",
#     "age_range": "40s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-28",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2026-06-02",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in May."
#     },
#     {
#       "date": "2026-03-28",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2025-08-25",
#       "category": "home",
#       "text": "User's home address is 238 Maple Drive."
#     },
#     {
#       "date": "2025-07-21",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Korean BBQ."
#     },
#     {
#       "date": "2025-06-19",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-27",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-11-07",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-06-01",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: Do you know who we got the Mexican Cession from?
     3.00s  user  발화 끝
     3.17s  <ret> 발화 (turn1 첫 프레임)
     3.40s  agent 발화 시작: <ret> Well, that land actually came from Mexico, in eighteen
     3.41s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.39s]: The Mexican Cession was land ceded to the United States by Mexico in 1
     9.79s  agent 발화 끝
     9.81s  user  발화 시작: That's interesting. What about treaties involved?
    12.81s  <ret> 발화 (turn3 첫 프레임)
    13.20s  agent 발화 시작: <ret> Treaties are often at the heart of such shifts, aren’t
    13.21s  ⚡SPAN 주입(IRRELEVANT) [d'=1.04s / d_lead=3.04s]: The current price of Tesla stock is 177.45 USD as of July 10, 2026.
    13.28s  user  발화 끝
    15.80s  <ret> 발화 (turn4 첫 프레임)
    16.11s  agent 발화 시작: <ret> The formal end to the war, and the finalization of the
    16.12s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.81s]: The Treaty of Guadalupe Hidalgo formally ended the Mexican–American Wa
    16.25s  agent 발화 끝
    22.48s  user  발화 시작: Was it a fair deal?
    22.93s  agent 발화 끝
    24.05s  user  발화 끝
    24.08s  agent 발화 시작: Fairness is often a matter of perspective, and so difficult 
    30.93s  agent 발화 끝
