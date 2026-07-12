# v3_pers_39_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_39",
#     "name": "Taylor",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "non-binary",
#     "age_range": "40s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-01-12",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in December."
#     },
#     {
#       "date": "2025-12-18",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     },
#     {
#       "date": "2025-11-27",
#       "category": "work",
#       "text": "User works as a high-school teacher."
#     },
#     {
#       "date": "2025-11-18",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-14",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-08-02",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-07-10",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: Hello Taylor, welcome. I'm Doralo.
     2.01s  user  발화 시작: Um, I’ve just been feeling so wired lately, even at night.
     2.01s  agent 발화 끝
     6.43s  agent 발화 시작: It’s understandable to feel that way, Taylor. What does “wir
     6.43s  user  발화 끝
    12.46s  user  발화 시작: Welll… just like my brain won’t *stop*. I keep replaying thi
    12.46s  agent 발화 끝
    17.29s  agent 발화 시작: That’s a common experience when stress builds up. Have you t
    17.29s  user  발화 끝
    23.72s  user  발화 시작: Mm-hmm.
    23.72s  agent 발화 끝
    24.12s  user  발화 시작: No, not really. I usually just… scroll on my phone until I p
    24.12s  user  발화 끝
    31.36s  user  발화 끝
