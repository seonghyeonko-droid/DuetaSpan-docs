# v3_rag_24_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_24",
#     "name": "Hugo",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "male",
#     "age_range": "50s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-04",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2026-05-17",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-01-13",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in October."
#     },
#     {
#       "date": "2025-11-18",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     },
#     {
#       "date": "2025-08-08",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Korean BBQ."
#     },
#     {
#       "date": "2025-08-04",
#       "category": "home",
#       "text": "User's home address is 977 Maple Drive."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-07-24",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-07-06",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-07-04",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I’m feeling really stuck in my car | S2 …Where do I even start? | S3 Hmm, I always loved building thing | S4 …was that always the case, though?

     0.00s  user  발화 시작: I’m feeling really stuck in my career.
     2.82s  agent 발화 시작: It’s perfectly normal to feel that way sometimes. We can exp
     2.82s  user  발화 끝
     8.45s  user  발화 시작: Okay, that sounds good.…
     8.45s  agent 발화 끝
    10.06s  user  발화 시작: …Where do I even start?
    10.06s  user  발화 끝
    12.07s  agent 발화 시작: Often, reflecting on what truly motivates you is a good firs
    12.07s  user  발화 끝
    20.12s  user  발화 시작: Hmm, I always loved building things with LEGOs.
    20.12s  agent 발화 끝
    23.18s  <ret> 발화 (turn6 첫 프레임)
    23.34s  agent 발화 시작: <ret> The practice of standing for the national anthem—
    23.34s  ⚡SPAN 주입 [d'=1.84s / d_lead=3.22s]: The tradition of standing for the national anthem in the United States
    23.34s  user  발화 끝
    26.56s  user  발화 시작: …was that always the case, though? Didn’t people sit for it 
    26.56s  agent 발화 끝
    31.39s  agent 발화 시작: That’s a very insightful question. Prior to the 1940s, it wa
    31.39s  user  발화 끝
    36.62s  user  발화 시작: Oh.
    36.62s  agent 발화 끝
    37.02s  agent 발화 시작: Yes, it's interesting. The custom solidified during a time o
    37.02s  user  발화 끝
    44.67s  agent 발화 끝
