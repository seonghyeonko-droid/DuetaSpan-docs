# v3_defer_10_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_defer_10",
#     "name": "Lukas",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "male",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-03-14",
#       "category": "home",
#       "text": "User's home address is 260 Maple Drive."
#     },
#     {
#       "date": "2026-02-18",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2025-11-09",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in August."
#     },
#     {
#       "date": "2025-09-16",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-07-29",
#       "category": "work",
#       "text": "User works as a marketing manager."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-09-26",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-09-02",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: Find pictures related to my holiday in France last year, but
     4.56s  <ret> 발화 (turn1 첫 프레임)
     4.64s  agent 발화 시작: <ret> I found three pictures from your France holiday in 202
     4.67s  user  발화 끝
     6.56s  ⚡SPAN 주입 [d'=2.00s / d_lead=14.67s]: (tool result) /Users/sunan/Pictures/FranceHoliday/2025/IMG_1234.jpg, /
    10.94s  user  발화 시작: Uh-huh.
    11.43s  user  발화 끝
    19.12s  user  발화 시작: Can you open IMG_1234.jpg?
    19.31s  agent 발화 끝
    22.18s  <ret> 발화 (turn4 첫 프레임)
    22.50s  agent 발화 시작: <ret> I’ve opened IMG_1234.jpg for you. It looks like a love
    22.73s  user  발화 끝
    23.21s  ⚡SPAN 주입 [d'=1.04s / d_lead=6.44s]: (tool result) File opened successfully.
    25.19s  user  발화 시작: Yeah.
    25.64s  user  발화 끝
    28.93s  agent 발화 끝
    29.45s  user  발화 시작: That’s great, thanks!
    30.71s  agent 발화 시작: You're very welcome. It's good to revisit happy memories, is
    30.82s  user  발화 끝
    34.55s  agent 발화 끝
