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


     0.00s  agent 발화 시작: Hello Jamie, it’s lovely to connect with you. My name is Hun
     2.09s  user  발화 시작: Mm-hmm.
     2.63s  user  발화 끝
     7.09s  agent 발화 끝
     8.07s  user  발화 시작: Oh, Hunar… that’s a beautiful name. I’m just feeling a bit o
    15.66s  user  발화 끝
    16.02s  agent 발화 시작: It’s completely understandable to feel overwhelmed, Jamie. M
    20.96s  user  발화 시작: Mhm.
    21.59s  user  발화 끝
    25.27s  agent 발화 시작: Everything at once is a lot to hold, isn't it? Perhaps we co
    25.42s  agent 발화 끝
    34.45s  agent 발화 끝
    34.61s  user  발화 시작: I suppose… just finding things. Like, good walks, quiet cafe
    42.99s  agent 발화 시작: Feeling lost in a new place is so common, Jamie. It’s about 
    43.14s  user  발화 끝
    53.66s  agent 발화 끝
