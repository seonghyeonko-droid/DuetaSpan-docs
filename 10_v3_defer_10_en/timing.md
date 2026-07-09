# v3_defer_10_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_defer_10",
#     "name": "Alice",
#     "location": {
#       "city": "Paris",
#       "country": "France",
#       "timezone": "Europe/Paris (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "French",
#     "gender": "female",
#     "age_range": "late 30s",
#     "language": "French"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-04",
#       "category": "home",
#       "text": "User's home address is 447 Oak Avenue."
#     },
#     {
#       "date": "2026-03-11",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2026-03-08",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in October."
#     },
#     {
#       "date": "2026-02-27",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-02-15",
#       "category": "work",
#       "text": "User works as a software engineer."
#     },
#     {
#       "date": "2026-01-28",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-28",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2026-04-11",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2026-04-09",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: Find pictures related to my holiday in France last year, but
     5.03s  <ret> 발화 (turn1 첫 프레임)
     5.09s  agent 발화 시작: <ret> I found twelve pictures from your France trip last yea
     5.28s  user  발화 끝
     7.03s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.16s]: (tool result) 12 files found: 'Paris_EiffelTower.jpg', 'Nice_Beach.png
     7.63s  user  발화 시작: Mhm.
     8.12s  user  발화 끝
     9.26s  agent 발화 끝
    10.00s  user  발화 시작: Oh, great! Can you send ‘Paris_EiffelTower.jpg’ to my sister
    18.22s  <ret> 발화 (turn4 첫 프레임)
    18.34s  agent 발화 시작: <ret> I’ve just sent the Eiffel Tower picture to Sarah at sa
    18.52s  user  발화 끝
    19.26s  ⚡SPAN 주입 [d'=1.04s / d_lead=4.48s]: (tool result) Email sent to sarah.jones@email.com with attachment 'Par
    21.19s  user  발화 시작: Yeah.
    21.83s  user  발화 끝
    22.82s  agent 발화 끝
    23.41s  user  발화 시작: Perfect, thank you! I— I mean, do you think I should start s
    27.66s  user  발화 끝
    27.67s  agent 발화 시작: It's wonderful to think about your financial future, and abs
    35.04s  agent 발화 끝
