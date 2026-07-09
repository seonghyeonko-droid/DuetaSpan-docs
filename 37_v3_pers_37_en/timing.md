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


     0.00s  agent 발화 시작: Noah, welcome to Sydney! I’m Hunar, and I help people feel s
     2.49s  user  발화 시작: Mm-hmm.
     2.98s  user  발화 끝
     8.53s  agent 발화 끝
     8.54s  user  발화 시작: Hunar… that’s a lovely name. I’m just… a bit overwhelmed, to
    13.28s  agent 발화 시작: It’s perfectly natural to feel overwhelmed, Noah. A new city
    13.45s  user  발화 끝
    18.50s  user  발화 시작: Mhm.
    18.94s  user  발화 끝
    23.04s  user  발화 시작: I— I mean, just… everything feels so far away. Back home, ev
    23.26s  agent 발화 끝
    29.79s  agent 발화 시작: That sense of distance is very common, Noah. It’s about buil
    29.95s  user  발화 끝
    40.31s  agent 발화 끝
