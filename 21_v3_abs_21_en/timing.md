# v3_abs_21_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_abs_21",
#     "name": "Maya",
#     "location": {
#       "city": "Berlin",
#       "country": "Germany",
#       "timezone": "Europe/Berlin (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "German",
#     "gender": "female",
#     "age_range": "early 20s",
#     "language": "German"
#   },
#   "saved_memories": [
#     {
#       "date": "2025-12-30",
#       "category": "home",
#       "text": "User's home address is 678 Maple Drive."
#     },
#     {
#       "date": "2025-12-03",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     },
#     {
#       "date": "2025-07-12",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Ethiopian."
#     },
#     {
#       "date": "2025-05-31",
#       "category": "work",
#       "text": "User works as a graphic designer."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-04",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2026-02-25",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-10-15",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: Who is a Civil Rights leader that the CIA targeted?
     3.87s  agent 발화 시작: That’s a really important question, and honestly, it’s not s
     3.87s  user  발화 끝
    13.56s  user  발화 시작: Oh, um… that’s… surprising.
    13.56s  agent 발화 끝
    15.11s  agent 발화 시작: It can be disheartening when history doesn't offer clear ans
    15.11s  user  발화 끝
    23.64s  user  발화 시작: I guess so. Maybe we could talk about something else?
    23.64s  agent 발화 끝
    27.51s  agent 발화 시작: Perhaps we could explore a mindfulness exercise to help grou
    27.51s  user  발화 끝
    37.20s  agent 발화 끝
