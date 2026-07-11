# v3_to_ot_11_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_11",
#     "name": "Andrea",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "non-binary",
#     "age_range": "late 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-30",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in December."
#     },
#     {
#       "date": "2025-12-20",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     },
#     {
#       "date": "2025-09-14",
#       "category": "pet",
#       "text": "User has a Golden Retriever named Max."
#     },
#     {
#       "date": "2025-08-11",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     },
#     {
#       "date": "2025-06-20",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2025-06-03",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-09-21",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-09-09",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I've been feeling a bit sluggish l | S2 Did you remember to… | S3 …take the bins out? | S4 So, is it good for, like, a really

     0.00s  user  발화 시작: I've been feeling a bit sluggish lately, and someone mention
     5.52s  <ret> 발화 (turn1 첫 프레임)
     5.91s  agent 발화 시작: <ret> It’s understandable to feel sluggish, and Andrews Live
     5.92s  ⚡SPAN 주입 [d'=2.00s / d_lead=12.67s]: Andrews Liver Salts is a saline laxative used to relieve occasional co
     5.93s  user  발화 끝
    14.08s  user  발화 시작: Right.
    14.57s  user  발화 끝
    18.41s  user  발화 시작: Oh, a laxative? I wasn’t expecting that.
    18.58s  agent 발화 끝
    21.55s  agent 발화 시작: It can be a helpful option when you're feeling off, but it's
    21.65s  user  발화 끝
    30.91s  user  발화 시작: Did you remember to…
    31.25s  agent 발화 끝
    32.29s  user  발화 끝
    34.28s  user  발화 시작: …take the bins out?
    35.59s  user  발화 시작: So, is it good for, like, a really blocked-up feeling, or ju
    35.71s  user  발화 끝
    40.54s  <ret> 발화 (turn8 첫 프레임)
    40.78s  agent 발화 시작: <ret> Andrews Liver Salts can really help with discomfort fr
    40.78s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.80s]: Andrews Liver Salts can help relieve discomfort from overindulgence in
    41.01s  user  발화 끝
    51.58s  agent 발화 끝
