# v3_pers_38_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_38",
#     "name": "Morgan",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "non-binary",
#     "age_range": "late 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-01",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     },
#     {
#       "date": "2026-05-03",
#       "category": "home",
#       "text": "User's home address is 598 Elm Street."
#     },
#     {
#       "date": "2025-09-07",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2025-07-21",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-05",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-12-09",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: Hello Morgan, it’s lovely to connect with you. I'm Elaen.
     3.70s  agent 발화 끝
     3.96s  user  발화 시작: I’m just feeling completely overwhelmed lately, to be honest
     7.28s  agent 발화 시작: It’s understandable to feel that way, Morgan. Overwhelm is s
     7.34s  user  발화 끝
    10.11s  user  발화 시작: Yeah.
    10.66s  user  발화 끝
    16.14s  agent 발화 시작: Often, when things feel chaotic, it’s helpful to identify on
    16.18s  agent 발화 끝
    25.42s  user  발화 시작: But there are *so* many things! I don't even know where to b
    26.15s  agent 발화 끝
    29.72s  user  발화 끝
    29.90s  agent 발화 시작: That’s a very valid feeling. It sounds like you're caught in
    39.60s  user  발화 시작: I guess... maybe. I just feel like I'm constantly playing ca
    39.68s  agent 발화 끝
    43.77s  user  발화 끝
    43.85s  agent 발화 시작: It's okay to feel like you’re playing catch-up, Morgan. It's
    53.21s  agent 발화 끝
