# v3_defer_09_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_defer_09",
#     "name": "Rowan",
#     "location": {
#       "city": "New York",
#       "country": "United States",
#       "timezone": "America/New_York (EST, UTC-5)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "non-binary",
#     "age_range": "50s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-15",
#       "category": "floor",
#       "text": "User lives on the 12th floor."
#     },
#     {
#       "date": "2026-04-03",
#       "category": "partner",
#       "text": "User's partner is named Minjun."
#     },
#     {
#       "date": "2026-03-12",
#       "category": "dish",
#       "text": "User's go-to comfort dish is bún chả."
#     },
#     {
#       "date": "2026-01-16",
#       "category": "child",
#       "text": "User has a child named Sara, age 3."
#     },
#     {
#       "date": "2025-12-25",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in June."
#     },
#     {
#       "date": "2025-12-18",
#       "category": "work",
#       "text": "User works as a barista."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-18",
#       "title": "Renovating the bathroom",
#       "bullets": [
#         "budget of 6M won",
#         "wants a walk-in shower instead of a tub"
#       ]
#     },
#     {
#       "date": "2026-01-21",
#       "title": "Booking a moving company",
#       "bullets": [
#         "moving a 2-bedroom apartment across town on the 30th",
#         "needs help disassembling furniture"
#       ]
#     },
#     {
#       "date": "2026-01-04",
#       "title": "Training for a 10K",
#       "bullets": [
#         "current pace is around 6 minutes per km",
#         "race is in November"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: Hey Arior, can you check…
     1.75s  user  발화 끝
     2.78s  user  발화 시작: …if there are any mindfulness workshops happening in San Fra
     7.32s  agent 발화 시작: Give me a moment on that one.
     7.50s  user  발화 끝
     9.16s  agent 발화 끝
     9.38s  user  발화 시작: Actually, I'm feeling a bit overwhelmed. Do you have any qui
    14.77s  agent 발화 시작: [happy] Try the five-four-three-two-one technique. Just name
    14.84s  user  발화 끝
    22.42s  ⚡지연 SPAN 주입(선제발표 직전): (tool result) Mindfulness in the City: Saturday, July eleventh, ten a.
    23.07s  agent 발화 시작: <ret> Oh — about those workshops in San Francisco. I found t
    23.12s  agent 발화 끝
    34.62s  agent 발화 끝
