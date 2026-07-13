# v3_pers_39_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_39",
#     "name": "Charlie",
#     "location": {
#       "city": "New York",
#       "country": "United States",
#       "timezone": "America/New_York (EST, UTC-5)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "non-binary",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-01-25",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-11-20",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2025-11-06",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in March."
#     },
#     {
#       "date": "2025-10-18",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2025-07-04",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-07",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2026-01-09",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2026-01-02",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: Hello Charlie, it’s lovely to meet you. I’m Feana, and I hel
     8.40s  user  발화 시작: Yeah, totally.
     8.40s  agent 발화 끝
     9.10s  user  발화 시작: What exactly does “planning time off” even *mean*? I feel li
     9.10s  user  발화 끝
    14.35s  agent 발화 시작: It often feels that way, doesn’t it? It’s about making space
    14.35s  user  발화 끝
    25.21s  user  발화 시작: Well, work is just… constant. And then there's always someth
    25.21s  agent 발화 끝
    31.16s  agent 발화 시작: That sounds incredibly draining, Charlie. It's understandabl
    31.16s  user  발화 끝
    42.01s  user  발화 시작: Hmm. Maybe. I was actually thinking about a longer break, th
    42.01s  agent 발화 끝
    48.31s  agent 발화 시작: A change of scenery can be wonderfully restorative. Do you h
    48.31s  user  발화 끝
    59.16s  agent 발화 끝
