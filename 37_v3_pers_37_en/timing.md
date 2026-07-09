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


     0.00s  agent 발화 시작: Noah, welcome to Sydney. I'm Hunar, and I help people find t
     1.86s  user  발화 시작: Mm-hmm.
     2.45s  user  발화 끝
     6.47s  user  발화 시작: Hunar… that’s a beautiful name. I’m just feeling a bit overw
     6.49s  agent 발화 끝
    10.64s  agent 발화 시작: It’s perfectly natural to feel overwhelmed, Noah. A new city
    10.81s  user  발화 끝
    14.39s  user  발화 시작: Mhm.
    15.02s  user  발화 끝
    17.69s  user  발화 시작: I— I mean, I guess just… finding some routines. Knowing wher
    17.87s  agent 발화 끝
    23.31s  agent 발화 시작: Routines are wonderful anchors. What does a typical, comfort
    23.52s  user  발화 끝
    29.93s  agent 발화 끝
