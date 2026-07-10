# v3_pers_40_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_40",
#     "name": "Clara",
#     "location": {
#       "city": "New York",
#       "country": "United States",
#       "timezone": "America/New_York (EST, UTC-5)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "female",
#     "age_range": "late 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-14",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2026-03-20",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in March."
#     },
#     {
#       "date": "2025-12-15",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     },
#     {
#       "date": "2025-11-18",
#       "category": "diet",
#       "text": "User is vegan."
#     },
#     {
#       "date": "2025-08-27",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-10-03",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: Hello Clara, welcome. I’m Broras, and I’m here to support yo
     4.86s  agent 발화 끝
     4.93s  user  발화 시작: Broras… that’s an unusual name. What exactly do you *do*?
     9.65s  user  발화 끝
    10.11s  agent 발화 시작: I help people understand their sleep patterns and build rout
    13.06s  user  발화 시작: Uh-huh.
    13.56s  user  발화 끝
    16.32s  agent 발화 끝
    18.28s  user  발화 시작: Well, I’ve been having trouble winding down lately — my mind
    22.91s  user  발화 끝
    23.11s  agent 발화 시작: It’s very common for thoughts to feel overwhelming at night.
    30.34s  agent 발화 끝
