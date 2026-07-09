# v3_pers_38_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_38",
#     "name": "Avery",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "non-binary",
#     "age_range": "late 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-07-07",
#       "category": "work",
#       "text": "User works as a architect."
#     },
#     {
#       "date": "2026-07-04",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-07-03",
#       "category": "pet",
#       "text": "User has a Poodle named Coco."
#     },
#     {
#       "date": "2026-02-17",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-25",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2026-05-13",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: Avery, welcome. I’m Jaeia, and I’m here to offer a gentle sp
     4.70s  user  발화 시작: Right.
     5.25s  user  발화 끝
     7.32s  user  발화 시작: Jaeia… that’s a lovely name. It sounds… ancient, somehow. Is
     7.41s  agent 발화 끝
    13.30s  user  발화 끝
    13.54s  agent 발화 시작: [happy] It is, actually. I’ve always been drawn to names tha
    17.02s  user  발화 시작: Yeah.
    17.52s  user  발화 끝
    20.59s  agent 발화 시작: It’s a privilege to be invited into someone’s journey, and a
    20.85s  agent 발화 끝
    26.05s  agent 발화 끝
    27.75s  user  발화 시작: I suppose so. I’m just…feeling a bit lost, I guess. Everythi
    33.37s  agent 발화 시작: That’s perfectly understandable, Avery. Change can be profou
    33.51s  user  발화 끝
    42.92s  agent 발화 끝
    42.97s  user  발화 시작: I— I mean, my grandmother passed away last month, and I’m st
    48.85s  user  발화 끝
