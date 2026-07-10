# v3_pers_38_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_38",
#     "name": "Andrea",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "non-binary",
#     "age_range": "40s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-02",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Korean BBQ."
#     },
#     {
#       "date": "2026-02-12",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2026-01-25",
#       "category": "work",
#       "text": "User works as a graphic designer."
#     },
#     {
#       "date": "2025-07-24",
#       "category": "home",
#       "text": "User's home address is 778 Pine Court."
#     },
#     {
#       "date": "2025-07-22",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2025-07-17",
#       "category": "diet",
#       "text": "User is pescatarian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-08",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-07-28",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: Hello Andrea, welcome. My name is Jaeia, and I’m here to off
     4.67s  user  발화 시작: Right.
     5.21s  user  발화 끝
     7.21s  user  발화 시작: Jaeia… that’s a beautiful name. I’m just feeling…lost, I gue
     7.36s  agent 발화 끝
    14.97s  agent 발화 시작: It sounds like you're carrying a lot right now. Change can b
    15.05s  user  발화 끝
    20.17s  user  발화 시작: Yeah.
    20.71s  user  발화 끝
    25.59s  agent 발화 끝
    25.61s  agent 발화 시작: It's alright to take your time with that. Sometimes just ack
    40.22s  agent 발화 끝
    41.31s  user  발화 시작: My partner and I…we decided to separate. After fifteen years
    48.54s  user  발화 끝
    48.67s  agent 발화 시작: Fifteen years is a significant part of a life, Andrea. It’s 
    59.28s  agent 발화 끝
    59.32s  user  발화 시작: No, I…I don’t think I do. It’s just waves, isn’t it? Of sadn
    65.85s  user  발화 끝
    66.04s  agent 발화 시작: Exactly. Waves are a good way to describe it. They come and 
    79.40s  agent 발화 끝
