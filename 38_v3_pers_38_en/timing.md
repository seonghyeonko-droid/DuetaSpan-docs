# v3_pers_38_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_38",
#     "name": "Sam",
#     "location": {
#       "city": "New York",
#       "country": "United States",
#       "timezone": "America/New_York (EST, UTC-5)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "non-binary",
#     "age_range": "40s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-02-05",
#       "category": "pet",
#       "text": "User has a Golden Retriever named Max."
#     },
#     {
#       "date": "2026-01-30",
#       "category": "work",
#       "text": "User works as a graduate student."
#     },
#     {
#       "date": "2026-01-15",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-12-31",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in August."
#     },
#     {
#       "date": "2025-10-12",
#       "category": "diet",
#       "text": "User is vegetarian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-24",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-11-01",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-09-09",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Fellaen… that’s an unusual name. W | S2 Welll… I’m thinking about a big ch | S3 It’s just… leaving New York. Every | S4 I just… feel stuck. Like I need so

     0.00s  agent 발화 시작: Hello, Sam. I’m Fellaen, and I’m here to offer guidance as y
     0.11s  user  발화 시작: Fellaen… that’s an unusual name. What exactly does a “guidan
     0.11s  agent 발화 끝
     0.20s  agent 발화 시작: It’s a name I’ve carried for a long time. I help people find
     0.20s  user  발화 끝
     0.36s  user  발화 시작: Yeah.
     0.36s  agent 발화 끝
     0.37s  user  발화 시작: Welll… I’m thinking about a big change, alright. Maybe *too*
     0.37s  user  발화 끝
     0.45s  agent 발화 시작: It sounds like you’re feeling a bit overwhelmed. What’s maki
     0.45s  user  발화 끝
     0.61s  user  발화 시작: It’s just… leaving New York. Everything I know is here..
     0.61s  agent 발화 끝
     0.68s  agent 발화 시작: Leaving a familiar place is a significant step. It's natural
     0.68s  user  발화 끝
     0.88s  user  발화 시작: I just… feel stuck. Like I need something completely differe
     0.88s  agent 발화 끝
     1.00s  user  발화 끝
