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
     3.42s  user  발화 끝
     4.87s  user  발화 시작: …but not thumbnails.
     5.99s  <ret> 발화 (turn2 첫 프레임)
     6.07s  agent 발화 시작: <ret> I found twelve pictures from your France holiday in tw
     6.25s  user  발화 끝
     7.99s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.93s]: (tool result) 12 files found: 'Paris EiffelTower.jpg', 'Nice Beach.png
     9.65s  user  발화 시작: Mhm.
    10.38s  user  발화 끝
    12.00s  agent 발화 끝
    12.89s  user  발화 시작: Could you open the one of the Eiffel Tower?
    14.71s  <ret> 발화 (turn5 첫 프레임)
    14.86s  agent 발화 시작: <ret> I’ve opened ‘Paris_EiffelTower.jpg’ for you.
    14.97s  user  발화 끝
    15.67s  ⚡SPAN 주입 [d'=0.96s / d_lead=3.37s]: (tool result) file opened
    18.23s  agent 발화 끝
