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


     0.00s  agent 발화 시작: Welcome, Avery. I’m Jaeia, and I’m here to offer guidance as
     3.52s  user  발화 시작: Right.
     4.06s  user  발화 끝
     5.53s  user  발화 시작: Jaeia… that’s a beautiful name. It sounds… ancient? Is that 
     5.69s  agent 발화 끝
    10.12s  user  발화 끝
    10.29s  agent 발화 시작: Not at all, Avery. It’s a name with roots in many cultures, 
    14.41s  user  발화 시작: Yeah.
    14.91s  user  발화 끝
    18.61s  agent 발화 시작: I find names often carry a quiet wisdom, reflecting the jour
    18.82s  agent 발화 끝
    28.11s  agent 발화 끝
    29.78s  user  발화 시작: Well, I— I mean, it’s my grandmother. She passed last month,
    37.33s  user  발화 끝
    37.35s  agent 발화 시작: Grief is a landscape of shifting feelings, Avery. It’s natur
    48.06s  agent 발화 끝
    48.18s  user  발화 시작: It's just… Sydney feels so empty without her. We always went
    53.64s  user  발화 끝
    53.70s  agent 발화 시작: Those shared spaces hold such precious memories, don't they?
    64.00s  agent 발화 끝
