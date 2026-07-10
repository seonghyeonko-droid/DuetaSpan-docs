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


     0.00s  user  발화 시작: Find pictures related to my holiday in France last year…
     3.23s  user  발화 끝
     4.66s  user  발화 시작: …but not thumbnails.
     5.85s  <ret> 발화 (turn2 첫 프레임)
     5.93s  agent 발화 시작: <ret> I found three pictures from your France trip last year
     6.08s  user  발화 끝
     7.85s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.21s]: (tool result) /Users/sunan/Pictures/France2023/beach.jpg, /Users/sunan
     9.73s  user  발화 시작: Mhm.
    10.23s  user  발화 끝
    12.14s  agent 발화 끝
    13.06s  user  발화 시작: Oh, fantastic! Could you open the Eiffel Tower one for me?
    16.57s  <ret> 발화 (turn5 첫 프레임)
    16.73s  agent 발화 시작: <ret> I’ve opened the Eiffel Tower picture for you now. It l
    16.90s  user  발화 끝
    17.61s  ⚡SPAN 주입 [d'=1.04s / d_lead=5.09s]: (tool result) opened /Users/sunan/Pictures/France2023/eiffel.jpg
    21.82s  agent 발화 끝
