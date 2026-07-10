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


     0.00s  agent 발화 시작: Hello Jamie, welcome. I’m Hunar, and I’m here to support you
     2.46s  user  발화 시작: Mm-hmm.
     3.15s  user  발화 끝
     8.38s  agent 발화 끝
     8.92s  user  발화 시작: Hunar… that’s a lovely name. I’m actually already settled, b
    15.36s  user  발화 끝
    15.39s  agent 발화 시작: Lost, even after a year. That’s understandable; sometimes th
    20.55s  user  발화 시작: Mhm.
    21.04s  user  발화 끝
    25.08s  agent 발화 끝
    25.18s  agent 발화 시작: Perhaps it’s about finding a sense of belonging, or building
    34.08s  agent 발화 끝
    34.43s  user  발화 시작: It’s… hard to explain. Like I don't know where to *start* bu
    40.49s  agent 발화 시작: Sydney *is* expansive. It’s alright to feel overwhelmed. Ins
    40.54s  user  발화 끝
    51.02s  agent 발화 끝
