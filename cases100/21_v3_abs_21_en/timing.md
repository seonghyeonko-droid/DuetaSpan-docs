# v3_abs_21_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_abs_21",
#     "name": "Casey",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "non-binary",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-17",
#       "category": "medication",
#       "text": "User takes antihistamines in spring."
#     },
#     {
#       "date": "2026-02-22",
#       "category": "bloodtype",
#       "text": "User's blood type is O+."
#     },
#     {
#       "date": "2026-02-16",
#       "category": "dislike",
#       "text": "User can't stand liver."
#     },
#     {
#       "date": "2026-02-04",
#       "category": "employer",
#       "text": "User works at a fintech startup."
#     },
#     {
#       "date": "2026-02-01",
#       "category": "savings",
#       "text": "User is saving for paying off student loans."
#     },
#     {
#       "date": "2025-12-09",
#       "category": "allergy",
#       "text": "User is allergic to tree nuts."
#     },
#     {
#       "date": "2025-12-07",
#       "category": "diet",
#       "text": "User is pescatarian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-11",
#       "title": "Renovating the bathroom",
#       "bullets": [
#         "budget of 6M won",
#         "wants a walk-in shower instead of a tub"
#       ]
#     },
#     {
#       "date": "2026-05-06",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing the Kia Niro hybrid and Hyundai Ioniq",
#         "wants under 30k miles and below 25M won"
#       ]
#     },
#     {
#       "date": "2026-02-06",
#       "title": "Meal-prep planning",
#       "bullets": [
#         "wants high-protein lunches under 600 calories",
#         "avoiding dairy this month"
#       ]
#     },
#     {
#       "date": "2026-01-08",
#       "title": "Planning a dinner party",
#       "bullets": [
#         "hosting eight friends on Saturday",
#         "one guest is gluten-free"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 How many species of insects are kn | S2 Oh, really? That's surprising. | S3 That’s amazing. Do you think it's  | S4 That makes sense. Thanks, Bin.

     0.00s  user  발화 시작: How many species of insects are known to date?
     2.98s  user  발화 끝
     3.15s  agent 발화 시작: That’s a tough one! Scientists haven’t actually pinpointed a
     6.06s  user  발화 시작: Yeah.
     6.65s  user  발화 끝
     8.74s  user  발화 시작: Oh, really? That's surprising.
     8.86s  agent 발화 끝
    10.67s  user  발화 끝
    11.13s  agent 발화 시작: [curious] It is! Estimates vary widely, but it's thought to 
    14.23s  user  발화 시작: Yeah.
    14.67s  user  발화 끝
    17.59s  agent 발화 시작: And they’re still discovering thousands more every year! It’
    17.69s  agent 발화 끝
    21.39s  user  발화 시작: Oh.
    21.79s  user  발화 끝
    23.07s  agent 발화 끝
    23.28s  user  발화 시작: That’s amazing. Do you think it's hard to stay motivated whe
    28.37s  user  발화 끝
    28.83s  agent 발화 시작: [happy] Absolutely! Facing something vast and undefined can 
    37.54s  user  발화 시작: Yeah.
    37.98s  user  발화 끝
    40.76s  user  발화 시작: That makes sense. Thanks, Bin.
    40.84s  agent 발화 끝
    43.01s  user  발화 끝
