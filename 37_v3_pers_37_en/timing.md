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


     0.00s  agent 발화 시작: Hello Jamie, welcome.
     1.66s  agent 발화 끝
     1.99s  user  발화 시작: Hunar… that’s a beautiful name. I’m feeling a bit overwhelme
     7.85s  agent 발화 시작: It’s kind of you to say so. Overwhelm is very common with a 
     7.87s  user  발화 끝
    15.35s  agent 발화 끝
    16.17s  user  발화 시작: Uhhh, finding a good coffee shop. Sounds silly, I know, but 
    21.39s  user  발화 끝
    21.77s  agent 발화 시작: Not silly at all. Those small rituals really anchor us. A co
    31.83s  agent 발화 끝
    31.84s  user  발화 시작: But… how do I even *begin* to choose a neighborhood? There a
    36.54s  agent 발화 시작: Sydney is quite vast, Jamie — it’s made up of seventy-nine d
    36.74s  user  발화 끝
    46.37s  agent 발화 끝
