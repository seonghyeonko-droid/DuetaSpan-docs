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


     0.00s  agent 발화 시작: Jamie, welcome to Sydney.
     1.42s  agent 발화 끝
     1.72s  user  발화 시작: Hunar… that’s a beautiful name. It’s just, moving after so l
    10.03s  agent 발화 시작: It’s perfectly natural to feel overwhelmed, Jamie. Big trans
    10.11s  user  발화 끝
    15.82s  user  발화 시작: Welll… I’m trying to find some community, things to *do*, bu
    16.29s  agent 발화 끝
    24.45s  agent 발화 시작: Sydney does have a different rhythm than Melbourne. Perhaps 
    24.49s  user  발화 끝
    31.46s  user  발화 시작: I— I mean, I love live music. Small venues, not stadiums. An
    31.67s  agent 발화 끝
    38.70s  agent 발화 시작: [laugh] A love of good coffee is practically a Sydney requir
    38.73s  user  발화 끝
    46.49s  agent 발화 끝
