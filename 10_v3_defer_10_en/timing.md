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

# EXAMINER(FDB-v2) 단계: S1 Find pictures related to my holida | S2 …picture to my sister, Sarah? | S3 That’s great, thanks. What’s the w | S4 Okay, thanks.

     0.00s  user  발화 시작: Find pictures related to my holiday in France last year, but
     4.16s  <ret> 발화 (turn1 첫 프레임)
     4.22s  agent 발화 시작: <ret> I found twelve files from your France holiday last yea
     4.39s  user  발화 끝
     6.16s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.24s]: (tool result) 12 files found: 'Paris EiffelTower.jpg', 'Nice Beach.png
     8.65s  user  발화 시작: Mhm.
     9.09s  user  발화 끝
    11.46s  agent 발화 끝
    12.07s  user  발화 시작: Can you send the Paris…
    13.81s  user  발화 끝
    14.79s  user  발화 시작: …picture to my sister, Sarah?
    16.37s  <ret> 발화 (turn5 첫 프레임)
    16.68s  agent 발화 시작: <ret> I’ve just sent the Eiffel Tower picture to Sarah.
    16.78s  user  발화 끝
    17.33s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.67s]: (tool result) File 'Paris EiffelTower.jpg' sent to Sarah.
    18.29s  user  발화 시작: Yeah.
    18.79s  user  발화 끝
    19.36s  agent 발화 끝
    19.59s  user  발화 시작: That’s great, thanks. What’s the weather like in Paris right
    22.99s  agent 발화 시작: Let me check on that.
    23.11s  user  발화 끝
    24.19s  agent 발화 끝
    24.23s  ⚡지연 SPAN 주입(선제발표 직전): (tool result) Temperature: 15°C, Condition: Partly Cloudy, Wind: 12 km
    24.38s  user  발화 시작: Okay, thanks.
    25.17s  agent 발화 시작: <ret> The current weather in Paris is 15 degrees Celsius and
    25.20s  user  발화 끝
    32.49s  agent 발화 끝
