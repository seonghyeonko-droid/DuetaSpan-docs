# v3_pers_41_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_41",
#     "name": "Sophie",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "female",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-03-30",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in May."
#     },
#     {
#       "date": "2026-01-28",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     },
#     {
#       "date": "2026-01-02",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2025-08-09",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-08-08",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-06-22",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: Hello Sophie, my name is Nia. I’m a counselor here to help y
     2.41s  user  발화 시작: Yeah.
     3.00s  user  발화 끝
     6.85s  agent 발화 끝
     7.24s  user  발화 시작: Oh, a counselor? That’s… unexpected. I just needed a quick t
    13.41s  agent 발화 시작: It is currently 2:33 PM in Seoul, Sophie. Perhaps we could t
    13.59s  user  발화 끝
    19.17s  user  발화 시작: Seoul? That’s a bit random, isn’t it? I’m in San Francisco.
    19.29s  agent 발화 끝
    23.71s  user  발화 끝
    23.90s  agent 발화 시작: It is 2:33 PM in Los Angeles, Sophie. Sometimes a small dist
    31.59s  agent 발화 끝
