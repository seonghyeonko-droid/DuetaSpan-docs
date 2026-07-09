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
     4.46s  <ret> 발화 (turn1 첫 프레임)
     4.50s  agent 발화 시작: <ret> I found twenty-three photos… …from your France trip la
     4.72s  user  발화 끝
     5.03s  ⚡SPAN 주입 [d'=0.56s / d_lead=1.68s]: (tool result) path: /Users/sunan/Pictures/France2023, count: 23, sizes
     8.91s  user  발화 시작: Mhm.
     9.38s  user  발화 끝
    11.63s  agent 발화 끝
    12.31s  user  발화 시작: Oh, perfect! And can you remind me to back those up to the c
    16.19s  <ret> 발화 (turn4 첫 프레임)
    16.34s  agent 발화 시작: <ret> I’ve set a reminder for Friday evening to back up your
    16.52s  user  발화 끝
    18.19s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.21s]: (tool result) reminder_id: 78945, date: 2024-03-08, time: 18:00, task:
    18.92s  user  발화 시작: Yeah.
    19.41s  user  발화 끝
    20.55s  agent 발화 끝
    21.02s  user  발화 시작: That’s great, thanks. I— I mean, is it safe to just use clou
    24.97s  agent 발화 시작: Cloud storage is convenient, but consider a local backup too
    25.05s  user  발화 끝
    30.85s  agent 발화 끝
