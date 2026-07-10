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


     0.00s  agent 발화 시작: Jamie, welcome to Sydney. I’m Hunar, and I help people find 
     5.97s  agent 발화 끝
     6.38s  user  발화 시작: Hunar… that’s a beautiful name. It sounds… peaceful. I’m jus
    12.67s  agent 발화 시작: It’s kind of you to say so, Jamie. Overwhelm is perfectly na
    12.72s  user  발화 끝
    21.06s  agent 발화 끝
    21.74s  user  발화 시작: Welll… I’m trying to find a quiet park, somewhere to just… b
    27.86s  user  발화 끝
    28.23s  agent 발화 시작: Sydney has wonderful green spaces. Are you hoping for somewh
    35.65s  agent 발화 끝
    35.67s  user  발화 시작: Closer would be good, I think. I’m in Surry Hills, and hones
    42.00s  agent 발화 시작: Surry Hills is lovely. It's understandable to feel hesitant 
    42.16s  user  발화 끝
    50.40s  agent 발화 끝
