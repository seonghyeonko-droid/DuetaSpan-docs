# v3_pers_37_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_37",
#     "name": "Emilia",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "female",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-02-18",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     },
#     {
#       "date": "2025-12-23",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     },
#     {
#       "date": "2025-09-18",
#       "category": "home",
#       "text": "User's home address is 415 Maple Drive."
#     },
#     {
#       "date": "2025-07-30",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in December."
#     },
#     {
#       "date": "2025-07-21",
#       "category": "pet",
#       "text": "User has a Golden Retriever named Max."
#     },
#     {
#       "date": "2025-06-06",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-29",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-11-14",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-07-27",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: Hello Emilia, it’s lovely to connect with you. I’m Zae, and 
     7.74s  agent 발화 끝
     8.15s  user  발화 시작: Oh, uh, Zae? That's… different. I just need help figuring ou
    14.98s  agent 발화 시작: It is a little unusual, isn’t it? Burnout is serious, Emilia
    15.01s  user  발화 끝
    23.00s  agent 발화 끝
    23.64s  user  발화 시작: I don’t even know anymore. I used to love hiking, but now… e
    29.99s  user  발화 끝
    30.34s  agent 발화 시작: That feeling of overwhelm is so common when you’re depleted.
    35.51s  user  발화 시작: Mm-hmm.
    36.00s  user  발화 끝
    39.08s  agent 발화 시작: Sometimes, simply imagining a different environment can lift
    39.10s  agent 발화 끝
    46.01s  user  발화 시작: Well, I was thinking maybe somewhere warm… a beach, maybe? B
    46.03s  agent 발화 끝
    52.66s  agent 발화 시작: A warm, uncrowded beach sounds wonderful. It’s good to prior
    52.73s  user  발화 끝
    63.00s  agent 발화 끝
