# v3_to_ot_11_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_11",
#     "name": "Casey",
#     "location": {
#       "city": "Berlin",
#       "country": "Germany",
#       "timezone": "Europe/Berlin (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "German",
#     "gender": "non-binary",
#     "age_range": "40s",
#     "language": "German"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-09",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     },
#     {
#       "date": "2026-03-28",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2025-12-24",
#       "category": "home",
#       "text": "User's home address is 755 Oak Avenue."
#     },
#     {
#       "date": "2025-09-18",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in March."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-01-20",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-09-22",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-07-09",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Hi Kliomi, quick question.… | S2 Oh, did you see that new cafe open | S3 Right, sorry about that. So, 2018… | S4 That's true. I'm trying to stay mo

     0.00s  user  발화 시작: Hi Kliomi, quick question.…
     2.12s  user  발화 끝
     3.81s  user  발화 시작: …When was the last time Australia hosted the Commonwealth Ga
     6.68s  <ret> 발화 (turn2 첫 프레임)
     7.03s  user  발화 끝
     7.06s  agent 발화 시작: <ret> Australia last hosted the Commonwealth Games in 2018, 
     7.08s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.02s]: The 2018 Commonwealth Games were held on the Gold Coast in Queensland,
    11.06s  user  발화 시작: Yeah.
    11.74s  user  발화 끝
    16.94s  user  발화 시작: Oh, did you see that new cafe opened down the street?
    17.08s  agent 발화 끝
    19.19s  user  발화 시작: Right, sorry about that. So, 2018… that’s fairly recent, isn
    19.34s  user  발화 끝
    23.80s  agent 발화 시작: Yes, 2018 is quite recent, and I think it shows Australia's 
    23.87s  user  발화 끝
    33.49s  agent 발화 끝
    33.69s  user  발화 시작: That's true. I'm trying to stay motivated with my studies, a
    38.94s  agent 발화 시작: I understand completely! Studying can be challenging, but yo
    38.96s  user  발화 끝
    48.59s  agent 발화 끝
