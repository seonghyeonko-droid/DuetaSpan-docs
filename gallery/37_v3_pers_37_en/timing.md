# v3_pers_37_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_37",
#     "name": "Léa",
#     "location": {
#       "city": "Berlin",
#       "country": "Germany",
#       "timezone": "Europe/Berlin (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "German",
#     "gender": "female",
#     "age_range": "early 30s",
#     "language": "German"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-02",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in December."
#     },
#     {
#       "date": "2026-02-13",
#       "category": "hobby",
#       "text": "User is into vintage synth collecting."
#     },
#     {
#       "date": "2025-11-26",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2025-11-02",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-08",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2026-01-01",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-06-01",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: Guten Tag, Léa. My name is Biami, and I’m here to listen and
     2.43s  user  발화 시작: Okay.
     3.06s  user  발화 끝
     6.86s  agent 발화 끝
     7.73s  user  발화 시작: Oh, hello. Biami… that's a lovely name. I’m just feeling a b
    13.75s  user  발화 끝
    14.12s  agent 발화 시작: Lost is a very human feeling, Léa. It often comes with big c
    18.06s  user  발화 시작: Mm-hmm.
    18.83s  user  발화 끝
    24.06s  agent 발화 시작: It sounds like you’re already beginning to explore that feel
    24.28s  agent 발화 끝
    31.65s  user  발화 시작: Uh-huh.
    32.14s  user  발화 끝
    35.54s  user  발화 시작: Well, I recently left my job. A really good job, everyone sa
    35.56s  agent 발화 끝
    40.26s  agent 발화 시작: And yet, you left. That tells me there was something within 
    40.31s  user  발화 끝
    48.05s  agent 발화 끝
    49.34s  user  발화 시작: But… what if I made a mistake?
    51.64s  user  발화 끝
    52.02s  agent 발화 시작: It’s natural to question big decisions, especially when othe
    63.80s  agent 발화 끝
