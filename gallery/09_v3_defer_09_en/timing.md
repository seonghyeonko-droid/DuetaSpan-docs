# v3_defer_09_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_defer_09",
#     "name": "Amelia",
#     "location": {
#       "city": "Paris",
#       "country": "France",
#       "timezone": "Europe/Paris (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "French",
#     "gender": "female",
#     "age_range": "early 30s",
#     "language": "French"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-21",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2026-05-24",
#       "category": "home",
#       "text": "User's home address is 740 Oak Avenue."
#     },
#     {
#       "date": "2026-05-23",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in March."
#     },
#     {
#       "date": "2026-05-14",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2026-03-10",
#       "category": "work",
#       "text": "User works as a marketing manager."
#     },
#     {
#       "date": "2026-01-28",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-11-29",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: Tell me the biking distance and time between the London Eye 
     4.09s  <ret> 발화 (turn1 첫 프레임)
     4.21s  user  발화 끝
     4.33s  agent 발화 시작: <ret> The biking distance is two point nine kilometers, taki
     4.33s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.37s]: (tool result) Distance: 2.9 km, Duration: 11 mins
     7.72s  user  발화 시작: Yeah.
     8.54s  user  발화 끝
     9.70s  agent 발화 끝
     9.79s  user  발화 시작: That’s good to know. Um, what about finding a quiet coffee s
    14.28s  agent 발화 시작: Give me a moment while I check for quiet coffee shops in tha
    14.42s  user  발화 끝
    16.79s  user  발화 시작: Right.
    17.23s  user  발화 끝
    18.35s  agent 발화 끝
    18.65s  user  발화 시작: Thanks, Arellar.
    18.71s  ⚡지연 SPAN 주입(선제발표 직전): The Attendant is a coffee shop with 4.5 stars, located 0.7 miles from 
    19.47s  user  발화 끝
    19.74s  agent 발화 시작: <ret> I've found a few options for you. I discovered The Att
    30.87s  agent 발화 끝
