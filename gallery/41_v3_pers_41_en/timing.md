# v3_pers_41_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_41",
#     "name": "Leo",
#     "location": {
#       "city": "New York",
#       "country": "United States",
#       "timezone": "America/New_York (EST, UTC-5)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "male",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-13",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in May."
#     },
#     {
#       "date": "2026-06-08",
#       "category": "home",
#       "text": "User's home address is 494 Oak Avenue."
#     },
#     {
#       "date": "2026-04-16",
#       "category": "work",
#       "text": "User works as a accountant."
#     },
#     {
#       "date": "2026-02-12",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2025-12-26",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2025-12-14",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-14",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2026-06-08",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2026-05-15",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: Hello Leo, it’s lovely to meet you! I'm Jeliia.
     3.60s  user  발화 시작: Yeah.
     3.60s  agent 발화 끝
     4.00s  user  발화 시작: But what exactly *do* you help with? I’m just…feeling a bit 
     4.00s  user  발화 끝
     9.59s  agent 발화 시작: Yeah.
     9.59s  user  발화 끝
     9.99s  agent 발화 시작: [happy] I understand, Leo. Feeling lost in friendships happe
     9.99s  agent 발화 끝
    21.57s  user  발화 시작: It’s just… I keep waiting for *them* to contact me. It’s bee
    21.57s  agent 발화 끝
    27.57s  agent 발화 시작: Yeah, totally.
    27.57s  user  발화 끝
    28.37s  agent 발화 시작: It's very common to hope others will initiate, but often, ta
    28.37s  agent 발화 끝
    39.95s  agent 발화 끝
