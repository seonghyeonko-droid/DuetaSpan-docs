# v3_selfc_07_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_07",
#     "name": "Jamie",
#     "location": {
#       "city": "Paris",
#       "country": "France",
#       "timezone": "Europe/Paris (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "French",
#     "gender": "non-binary",
#     "age_range": "late 20s",
#     "language": "French"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-20",
#       "category": "home",
#       "text": "User's home address is 586 Maple Drive."
#     },
#     {
#       "date": "2026-03-31",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in August."
#     },
#     {
#       "date": "2026-03-08",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2026-02-27",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-01-15",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2025-12-09",
#       "category": "hobby",
#       "text": "User is into vintage synth collecting."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-09",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2026-02-11",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-12-12",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I need three bus tickets from New  | S2 That sounds good. Can… | S3 …you find restaurants nearby? | S4 Neptune Oyster sounds nice. What k

     0.00s  user  발화 시작: I need three bus tickets from New York to Boston for May twe
     9.44s  <ret> 발화 (turn1 첫 프레임)
     9.45s  agent 발화 시작: <ret> [happy] Okay, I found three bus tickets from New York 
     9.45s  user  발화 끝
    10.65s  ⚡SPAN 주입 [d'=1.21s / d_lead=10.74s]: {"origin": "New York", "destination": "Boston", "date": "2026-05-21", 
    20.19s  user  발화 시작: Wow.
    20.19s  agent 발화 끝
    20.62s  user  발화 시작: That sounds good. Can…
    20.62s  user  발화 끝
    22.34s  user  발화 시작: …you find restaurants nearby?
    22.34s  user  발화 끝
    23.81s  <ret> 발화 (turn5 첫 프레임)
    24.00s  ⚡SPAN 주입 [d'=1.22s / d_lead=9.45s]: Restaurants are plentiful in Boston, Massachusetts, with over four tho
    24.06s  agent 발화 시작: <ret> Boston has lots of restaurants, over four thousand! Ne
    24.06s  user  발화 끝
    33.51s  user  발화 시작: Neptune Oyster sounds nice. What kind of food do they serve?
    33.51s  agent 발화 끝
    37.89s  <ret> 발화 (turn7 첫 프레임)
    38.17s  ⚡SPAN 주입 [d'=1.02s / d_lead=7.73s]: Neptune Oyster serves New England-style seafood, specializing in oyste
    38.23s  agent 발화 시작: <ret> They serve New England seafood— oysters, lobster rolls
    38.23s  user  발화 끝
    45.96s  agent 발화 끝
