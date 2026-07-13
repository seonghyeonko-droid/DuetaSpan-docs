# v3_pers_41_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_41",
#     "name": "Emil",
#     "location": {
#       "city": "London",
#       "country": "United Kingdom",
#       "timezone": "Europe/London (GMT, UTC+0)",
#       "currency": "GBP (£)"
#     },
#     "nationality": "British",
#     "gender": "male",
#     "age_range": "50s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-14",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2026-04-20",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     },
#     {
#       "date": "2025-10-08",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in March."
#     },
#     {
#       "date": "2025-09-09",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     },
#     {
#       "date": "2025-08-20",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2025-05-28",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-18",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2026-01-13",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: Hello Emil, it’s lovely to meet you. I’m Fuen, and I help pe
     8.78s  user  발화 시작: Um, I’m just feeling completely overwhelmed at work, actuall
     8.78s  agent 발화 끝
    12.37s  agent 발화 시작: It sounds like you’re carrying a lot right now, Emil. What s
    12.37s  user  발화 끝
    19.95s  user  발화 시작: Yeah.
    19.95s  agent 발화 끝
    20.35s  user  발화 시작: Welll… everything, really. Deadlines, meetings, emails… it j
    20.35s  user  발화 끝
    27.13s  agent 발화 시작: That constant feeling of being behind can be incredibly drai
    27.13s  user  발화 끝
    36.31s  user  발화 시작: I’ve tried to-do lists, but they just get longer and longer.
    36.31s  agent 발화 끝
    42.70s  agent 발화 시작: I understand. Sometimes, seeing a long list can feel more de
    42.70s  user  발화 끝
    53.87s  agent 발화 끝
