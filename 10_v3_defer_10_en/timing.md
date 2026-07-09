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
     4.33s  agent 발화 시작: <ret> I located twelve pictures from your France trip last y
     4.33s  <ret> 발화 (turn1 첫 프레임)
     4.58s  user  발화 끝
     6.33s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.35s]: (tool result) Found 12 images: "Paris_EiffelTower.jpg", "Nice_Beach.jp
     7.60s  user  발화 시작: Mhm.
     8.24s  user  발화 끝
     9.69s  agent 발화 끝
    10.39s  user  발화 시작: Oh, that's great! Can you set a reminder to back those up to
    14.62s  <ret> 발화 (turn4 첫 프레임)
    14.92s  agent 발화 시작: <ret> Absolutely. I’ve scheduled a reminder to back up those
    15.15s  user  발화 끝
    15.66s  ⚡SPAN 주입 [d'=1.04s / d_lead=5.04s]: (tool result) Reminder set: "Back up France holiday photos" - Friday a
    18.07s  user  발화 시작: Yeah.
    18.70s  user  발화 끝
    19.96s  agent 발화 끝
    20.41s  user  발화 시작: Perfect, thank you!
    21.73s  agent 발화 시작: You’re very welcome. It’s good to stay on top of those thing
    21.74s  user  발화 끝
    26.59s  agent 발화 끝
