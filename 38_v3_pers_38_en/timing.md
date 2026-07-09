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
#       "date": "2026-04-02",
#       "category": "work",
#       "text": "User works as a architect."
#     },
#     {
#       "date": "2025-07-24",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-07-22",
#       "category": "pet",
#       "text": "User has a Poodle named Coco."
#     },
#     {
#       "date": "2025-07-17",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-10-25",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-09-30",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: Avery, it’s lovely to connect with you. I’m Jaeia, and I’m h
     4.91s  user  발화 시작: Right.
     5.41s  user  발화 끝
     7.68s  user  발화 시작: Jaeia… that’s a beautiful name. It sounds… ancient? Is that 
     7.79s  agent 발화 끝
    12.64s  user  발화 끝
    12.85s  agent 발화 시작: Not at all, Avery. It has roots in several cultures, yes— a 
    17.09s  user  발화 시작: Yeah.
    17.58s  user  발화 끝
    21.39s  agent 발화 시작: It’s wonderful you asked; it’s often the small curiosities t
    21.65s  agent 발화 끝
    30.14s  agent 발화 끝
    31.92s  user  발화 시작: I— I mean, yeah. My grandmother passed away last month, and 
    37.46s  agent 발화 시작: [sigh] Grief truly reshapes our world, doesn’t it? It’s a po
    37.56s  user  발화 끝
    47.61s  agent 발화 끝
    47.73s  user  발화 시작: It’s just… I keep replaying memories, and then feeling guilt
    55.94s  user  발화 끝
