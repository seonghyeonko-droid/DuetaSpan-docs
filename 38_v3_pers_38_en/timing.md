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
     4.08s  user  발화 시작: Right.
     4.44s  user  발화 끝
     6.38s  user  발화 시작: Jaeia… that’s a beautiful name. It sounds… ancient. Is it fr
     6.49s  agent 발화 끝
    11.44s  user  발화 끝
    11.62s  agent 발화 시작: It is, actually. It’s a name with roots in several cultures,
    16.25s  user  발화 시작: Yeah.
    16.79s  user  발화 끝
    20.96s  agent 발화 시작: It’s lovely to connect with you in Sydney— a vibrant city, I
    21.21s  agent 발화 끝
    30.97s  agent 발화 끝
    32.72s  user  발화 시작: Well, I’ve been feeling… untethered, I guess. Like I’m suppo
    38.70s  agent 발화 시작: That sense of being untethered is very common during times o
    38.79s  user  발화 끝
    50.29s  agent 발화 끝
    50.45s  user  발화 시작: It’s just… I feel like everyone else has a plan. A career, a
    61.02s  user  발화 끝
