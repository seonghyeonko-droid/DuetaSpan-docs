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
     1.79s  user  발화 시작: Mm-hmm.
     2.28s  user  발화 끝
     6.19s  user  발화 시작: Hunar… that’s a beautiful name. It’s just, moving here feels
     6.29s  agent 발화 끝
    10.69s  agent 발화 시작: It’s perfectly natural to feel overwhelmed, Noah. A new city
    10.86s  user  발화 끝
    14.91s  user  발화 시작: Mhm.
    15.49s  user  발화 끝
    18.61s  user  발화 시작: I— I mean, I guess just finding some routines? Somewhere to 
    18.81s  agent 발화 끝
    23.46s  agent 발화 시작: Establishing routines is a wonderful way to ground yourself.
    23.70s  user  발화 끝
    31.89s  agent 발화 끝
