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
#       "date": "2026-05-07",
#       "category": "home",
#       "text": "User's home address is 447 Oak Avenue."
#     },
#     {
#       "date": "2026-04-06",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2026-03-14",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in October."
#     },
#     {
#       "date": "2026-02-23",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-02-18",
#       "category": "work",
#       "text": "User works as a software engineer."
#     },
#     {
#       "date": "2025-09-16",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-12-28",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-12-23",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-07-31",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: Find pictures related to my holiday in France last year, but
     3.90s  <ret> 발화 (turn1 첫 프레임)
     3.96s  agent 발화 시작: <ret> I found twenty-seven pictures from your France holiday
     4.11s  user  발화 끝
     5.90s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.99s]: (tool result) 27 files found: ‘Paris EiffelTower.jpg’, ‘Nice Beach.png
     6.98s  user  발화 시작: Mhm.
     7.62s  user  발화 끝
     8.95s  agent 발화 끝
     9.60s  user  발화 시작: Oh, great! Could you send ‘Paris_EiffelTower.jpg’ to my sist
    17.51s  <ret> 발화 (turn4 첫 프레임)
    17.81s  agent 발화 시작: <ret> The picture of the Eiffel Tower has been sent to Sarah
    17.99s  user  발화 끝
    18.47s  ⚡SPAN 주입 [d'=0.96s / d_lead=4.43s]: (tool result) Email sent to sarah.jones@email.com with attachment ‘Par
    20.59s  user  발화 시작: Yeah.
    21.22s  user  발화 끝
    22.24s  agent 발화 끝
    22.80s  user  발화 시작: Perfect, thanks! I— I mean, do you think I’m spending too mu
    26.54s  agent 발화 시작: [sigh] It’s good to check in with yourself about spending. W
    26.64s  user  발화 끝
    31.87s  agent 발화 끝
