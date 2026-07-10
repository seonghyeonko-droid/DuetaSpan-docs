# v3_pers_40_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_40",
#     "name": "Camille",
#     "location": {
#       "city": "London",
#       "country": "United Kingdom",
#       "timezone": "Europe/London (GMT, UTC+0)",
#       "currency": "GBP (£)"
#     },
#     "nationality": "British",
#     "gender": "female",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-01",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     },
#     {
#       "date": "2026-04-30",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2025-11-03",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in August."
#     },
#     {
#       "date": "2025-08-14",
#       "category": "home",
#       "text": "User's home address is 420 Cedar Lane."
#     },
#     {
#       "date": "2025-06-30",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-18",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2026-04-09",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2026-01-17",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I’m just feeling incredibly overwh | S2 Welll… it’s work, mostly. Deadline | S3 Both, I think. I lie in bed replay | S4 That sounds… good, actually. But I

     0.00s  agent 발화 시작: Hello Camille, I’m Drorara. It’s lovely to connect with you.
     5.51s  agent 발화 끝
     5.54s  user  발화 시작: I’m just feeling incredibly overwhelmed at the moment, hones
     8.96s  user  발화 끝
     9.34s  agent 발화 시작: Overwhelm is very common, Camille. It sounds like you’re car
    14.80s  agent 발화 끝
    16.04s  user  발화 시작: Welll… it’s work, mostly. Deadlines are piling up, and I jus
    22.39s  user  발화 끝
    22.60s  agent 발화 시작: It’s understandable to feel that way when demands are high. 
    30.34s  agent 발화 끝
    30.36s  user  발화 시작: Both, I think. I lie in bed replaying meetings, and then I’m
    36.69s  agent 발화 시작: That creates a difficult cycle. Perhaps we could explore som
    36.71s  user  발화 끝
    38.88s  user  발화 시작: Uh-huh.
    39.33s  user  발화 끝
    42.85s  agent 발화 끝
    43.18s  user  발화 시작: That sounds… good, actually. But I’m terrible at meditation,
    49.62s  user  발화 끝
