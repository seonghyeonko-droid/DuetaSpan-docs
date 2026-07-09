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
     4.72s  <ret> 발화 (turn1 첫 프레임)
     4.79s  agent 발화 시작: <ret> I found thirty-seven pictures from your France trip in
     4.96s  user  발화 끝
     6.72s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.70s]: (tool result) Found 37 images matching 'France holiday' from 2023, exc
     8.26s  user  발화 시작: Mhm.
     8.89s  user  발화 끝
    10.49s  agent 발화 끝
    11.14s  user  발화 시작: Can you show me just the ones from Paris?
    13.36s  <ret> 발화 (turn4 첫 프레임)
    13.51s  agent 발화 시작: <ret> Okay, I’ve filtered those down to twelve photos tagged
    13.68s  user  발화 끝
    15.36s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.40s]: (tool result) Filtered to 12 images tagged 'Paris' from the previous s
    16.22s  user  발화 시작: Yeah.
    16.71s  user  발화 끝
    17.91s  agent 발화 끝
    18.36s  user  발화 시작: That's great, thanks.
    19.52s  agent 발화 시작: You’re very welcome! It’s good to revisit happy memories, is
    19.60s  user  발화 끝
    26.19s  agent 발화 끝
