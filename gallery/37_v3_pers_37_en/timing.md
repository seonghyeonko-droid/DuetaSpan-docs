# v3_pers_37_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_37",
#     "name": "Jamie",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "non-binary",
#     "age_range": "50s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-03-07",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2025-10-19",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     },
#     {
#       "date": "2025-09-20",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-08-18",
#       "category": "home",
#       "text": "User's home address is 178 Elm Street."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-24",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-12-14",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: Jamie, welcome. I’m Hunar, and I help people feel more settl
     5.97s  agent 발화 끝
     7.00s  user  발화 시작: Hunar… that’s a lovely name. It’s just… Sydney feels so big,
    13.49s  user  발화 끝
    13.57s  agent 발화 시작: It’s completely natural to feel overwhelmed by a city’s size
    21.31s  agent 발화 끝
    21.45s  user  발화 시작: Welll… I miss having a local coffee shop. Somewhere I can ju
    28.69s  agent 발화 시작: Ah, a familiar space is so grounding. It’s about finding a r
    28.82s  user  발화 끝
    37.35s  agent 발화 끝
    37.88s  user  발화 시작: That’s a good idea, I suppose. But where do I even start? Th
    42.88s  user  발화 끝
