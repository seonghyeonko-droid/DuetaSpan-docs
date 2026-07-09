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
     5.02s  user  발화 시작: Right.
     5.66s  user  발화 끝
     7.80s  user  발화 시작: Jaeia… that’s a beautiful name. It sounds… ancient. Is that 
     7.93s  agent 발화 끝
    14.02s  user  발화 끝
    14.21s  agent 발화 시작: It is, actually. It’s a name with roots in several cultures,
    19.07s  user  발화 시작: Yeah.
    19.37s  user  발화 끝
    24.00s  agent 발화 시작: It’s perfectly natural to feel a little unsure when beginnin
    24.17s  agent 발화 끝
    34.52s  agent 발화 끝
    36.20s  user  발화 시작: Well, I’m feeling pretty lost, to be honest. I just… I don’t
    40.91s  agent 발화 시작: That sense of being overwhelmed is very common, Avery. It’s 
    41.01s  user  발화 끝
    50.32s  agent 발화 끝
    50.48s  user  발화 시작: I— I mean, it’s my grandmother. She passed away last month, 
    57.10s  user  발화 끝
