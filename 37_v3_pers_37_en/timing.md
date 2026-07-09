# v3_pers_37_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_37",
#     "name": "Noah",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "male",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-19",
#       "category": "work",
#       "text": "User works as a nurse."
#     },
#     {
#       "date": "2026-06-02",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     },
#     {
#       "date": "2026-04-04",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2026-03-15",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in August."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-17",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: Noah, welcome to Sydney! I’m Hunar, and I’m here to help you
     1.80s  user  발화 시작: Mm-hmm.
     2.48s  user  발화 끝
     6.20s  user  발화 시작: Hunar… that’s a beautiful name. I’m just feeling a bit overw
     6.30s  agent 발화 끝
    11.28s  agent 발화 시작: It’s completely natural to feel overwhelmed, Noah. Moving is
    11.39s  user  발화 끝
    15.23s  user  발화 시작: Mhm.
    15.76s  user  발화 끝
    18.69s  user  발화 시작: I— I mean, I don’t really know where to start with making fr
    18.88s  agent 발화 끝
    23.93s  agent 발화 시작: Finding your rhythm takes time. Perhaps we could explore wha
    24.16s  user  발화 끝
    31.34s  agent 발화 끝
