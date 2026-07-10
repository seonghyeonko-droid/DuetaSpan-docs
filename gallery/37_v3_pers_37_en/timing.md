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


     0.00s  agent 발화 시작: Hello Jamie, welcome. I’m Hunar, and I’m here to offer suppo
     8.02s  agent 발화 끝
     8.40s  user  발화 시작: Hunar… that’s a beautiful name. It sounds… peaceful. I’m jus
    14.74s  agent 발화 시작: Thank you, Jamie. Overwhelmed is perfectly understandable. W
    14.84s  user  발화 끝
    22.20s  agent 발화 끝
    23.01s  user  발화 시작: Uhhh, well, I keep second-guessing if I made the right choic
    28.98s  user  발화 끝
    29.38s  agent 발화 시작: It’s natural to feel that pull, Jamie. Nostalgia is a powerf
    37.49s  agent 발화 끝
    37.50s  user  발화 시작: Just… knowing everyone. Being able to walk everywhere. It fe
    45.39s  agent 발화 시작: That sense of connection is truly important. Perhaps explori
    45.56s  user  발화 끝
    53.41s  agent 발화 끝
