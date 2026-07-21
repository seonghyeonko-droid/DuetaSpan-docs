# v3_pers_39_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_39",
#     "name": "Oliver",
#     "location": {
#       "city": "New York",
#       "country": "United States",
#       "timezone": "America/New_York (EST, UTC-5)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "male",
#     "age_range": "mid 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-06",
#       "category": "car",
#       "text": "User drives a 2017 Honda Civic."
#     },
#     {
#       "date": "2026-02-24",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     },
#     {
#       "date": "2026-02-22",
#       "category": "employer",
#       "text": "User works at a construction firm."
#     },
#     {
#       "date": "2026-02-18",
#       "category": "floor",
#       "text": "User lives on the 5th floor."
#     },
#     {
#       "date": "2026-01-19",
#       "category": "learning",
#       "text": "User is training for a half-marathon."
#     },
#     {
#       "date": "2026-01-16",
#       "category": "trip",
#       "text": "User is planning a trip to Morocco in April."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-01",
#       "title": "Planning a wedding",
#       "bullets": [
#         "guest list around 80 people",
#         "comparing two venues for next May"
#       ]
#     },
#     {
#       "date": "2026-03-27",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building under 900k won/month",
#         "needed parking and a second bedroom near line 2"
#       ]
#     },
#     {
#       "date": "2025-12-17",
#       "title": "Learning to invest",
#       "bullets": [
#         "asked about index funds vs individual stocks",
#         "wants to start with 500k won a month"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: [happy] Hello Oliver, I’m Luna, your wellness coach. It’s lo
     5.00s  agent 발화 끝
     5.75s  user  발화 시작: Wellness coach? That sounds…intense. I just feel kind of stu
     7.57s  agent 발화 시작: Yeah, yeah.
     9.17s  agent 발화 끝
    11.16s  agent 발화 시작: It’s perfectly alright to feel stuck, Oliver. Many find them
    11.20s  user  발화 끝
    13.78s  user  발화 시작: Right.
    14.18s  user  발화 끝
    18.18s  user  발화 시작: [sigh] I guess. It's just work. Everything feels pointless, 
    18.53s  agent 발화 끝
    24.16s  agent 발화 시작: That’s very common, especially when feeling disconnected fro
    24.25s  user  발화 끝
    35.42s  agent 발화 끝
