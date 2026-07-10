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

# EXAMINER(FDB-v2) 단계: S1 Find pictures related to my holida | S2 What’s the weather… | S3 …like in Lyon right now? | S4 Okay.

     0.00s  user  발화 시작: Find pictures related to my holiday in France last year, but
     5.00s  <ret> 발화 (turn1 첫 프레임)
     5.07s  agent 발화 시작: <ret> I found three pictures from your France holiday last y
     5.18s  user  발화 끝
     7.00s  ⚡SPAN 주입 [d'=2.00s / d_lead=12.01s]: (tool result) 3 files found: "Paris EiffelTower.jpg", "Nice Beach.png"
    12.56s  user  발화 시작: Mhm.
    13.20s  user  발화 끝
    17.08s  agent 발화 끝
    17.71s  user  발화 시작: Can you send “Paris_EiffelTower.jpg” to my sister, Sarah?
    22.34s  <ret> 발화 (turn4 첫 프레임)
    22.50s  agent 발화 시작: <ret> I’ve sent “Paris_EiffelTower.jpg” to Sarah. Your confi
    22.62s  user  발화 끝
    24.34s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.63s]: (tool result) File sent to Sarah. Confirmation number: 829571
    24.66s  user  발화 시작: Really?
    25.62s  user  발화 끝
    29.13s  agent 발화 끝
    29.59s  user  발화 시작: What’s the weather…
    31.02s  user  발화 끝
    32.39s  user  발화 시작: …like in Lyon right now?
    34.13s  agent 발화 시작: Let me check on that.
    34.28s  user  발화 끝
    34.85s  ⚡지연 SPAN 주입(선제발표 직전): (tool result) Partly cloudy, 18°C
    35.07s  user  발화 시작: Okay.
    35.24s  agent 발화 끝
    35.63s  agent 발화 시작: <ret> The weather in Lyon is currently partly cloudy with a 
    35.84s  user  발화 끝
    46.21s  agent 발화 끝
