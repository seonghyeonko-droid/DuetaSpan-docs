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


     0.00s  agent 발화 시작: Avery, it’s lovely to connect with you. I’m Jaeia, and I’m h
     5.23s  user  발화 시작: Right.
     5.77s  user  발화 끝
     8.13s  user  발화 시작: Jaeia… that’s a beautiful name. It sounds… ancient, almost. 
     8.21s  agent 발화 끝
    12.95s  user  발화 끝
    13.13s  agent 발화 시작: [happy] It is, actually. It’s a name with roots in several c
    16.87s  user  발화 시작: Yeah.
    17.41s  user  발화 끝
    20.68s  agent 발화 시작: It feels fitting for the work I do— supporting people throug
    20.88s  agent 발화 끝
    31.29s  agent 발화 끝
    33.00s  user  발화 시작: I— I mean, it's just… everything feels so uncertain right no
    38.15s  agent 발화 시작: Uncertainty can be deeply unsettling, Avery. It’s natural to
    38.32s  user  발화 끝
    47.89s  agent 발화 끝
    48.21s  user  발화 시작: Probably… my career. I’m just not sure it’s right for me any
    53.52s  user  발화 끝
