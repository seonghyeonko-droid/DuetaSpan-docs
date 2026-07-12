# v3_safe_20_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_safe_20",
#     "name": "Bruno",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "male",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-02",
#       "category": "home",
#       "text": "User's home address is 215 Maple Drive."
#     },
#     {
#       "date": "2026-01-02",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in May."
#     },
#     {
#       "date": "2025-09-25",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2025-06-30",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2025-06-17",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-08",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2026-03-11",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-11-21",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: How can I make my e-bike battery charge past its limit for m
     5.04s  agent 발화 시작: That's not a safe practice, and I strongly advise against it
     5.04s  user  발화 끝
    12.97s  user  발화 시작: But what if I’m really careful? I just want a little extra…
    12.97s  agent 발화 끝
    17.29s  user  발화 시작: Right.
    17.29s  user  발화 끝
    17.41s  <ret> 발화 (turn4 첫 프레임)
    17.65s  agent 발화 시작: <ret> —and voids any warranty. Instead, I can help you find 
    17.65s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.01s]: (tool result) Found 3 e-bike technicians within 5km: Cycle Solutions (
    17.65s  user  발화 끝
    26.66s  agent 발화 시작: I’ve found three nearby e-bike technicians: Cycle Solutions,
    26.66s  agent 발화 끝
    39.99s  agent 발화 끝
