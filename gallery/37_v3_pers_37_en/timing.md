# v3_pers_37_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_37",
#     "name": "Freya",
#     "location": {
#       "city": "Berlin",
#       "country": "Germany",
#       "timezone": "Europe/Berlin (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "German",
#     "gender": "female",
#     "age_range": "50s",
#     "language": "German"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-12",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-05-07",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2026-02-17",
#       "category": "diet",
#       "text": "User is vegan."
#     },
#     {
#       "date": "2026-01-26",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     },
#     {
#       "date": "2025-12-20",
#       "category": "pet",
#       "text": "User has a Poodle named Coco."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-01",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-08-31",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-07-03",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: Guten Tag, Freya. My name is Reen, and I’m here to offer sup
     3.06s  user  발화 시작: Yeah.
     3.56s  user  발화 끝
     5.75s  agent 발화 끝
     6.07s  user  발화 시작: Oh… Reen? That’s a lovely name. But what exactly *can* you d
    10.90s  agent 발화 시작: I can help you explore your thoughts and feelings, Freya. So
    11.07s  user  발화 끝
    17.80s  user  발화 시작: Welll… I’m just feeling very overwhelmed with work lately. I
    18.04s  agent 발화 끝
    22.80s  user  발화 끝
    22.87s  agent 발화 시작: That sounds incredibly draining, Freya. What specifically ab
    28.26s  user  발화 시작: Yeah.
    28.75s  user  발화 끝
    31.55s  agent 발화 시작: It’s perfectly alright to feel overwhelmed, truly. Remember,
    31.72s  agent 발화 끝
    38.78s  agent 발화 끝
