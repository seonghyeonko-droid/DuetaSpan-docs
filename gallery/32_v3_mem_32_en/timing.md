# v3_mem_32_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_32",
#     "name": "Thomas",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "male",
#     "age_range": "late 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-03-07",
#       "category": "work",
#       "text": "User works as a accountant."
#     },
#     {
#       "date": "2026-02-03",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2025-08-10",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in March."
#     },
#     {
#       "date": "2025-07-22",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-28",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-11-18",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: Hi Thomas, I'm Feaus. It's lovely to meet you. Is there anyt
     4.35s  agent 발화 끝
     4.99s  user  발화 시작: Um, I was just thinking about that trip I'm planning.
     7.85s  <ret> 발화 (turn2 첫 프레임)
     7.93s  agent 발화 시작: <ret> You mentioned a trip to Vietnam back in August, planni
     7.93s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.16s]: [2025-08-10] User is planning a trip to Vietnam in March.
     7.95s  user  발화 끝
    14.09s  agent 발화 끝
    14.51s  user  발화 시작: Yes, actually! What was the latest I said about it?
    17.81s  <ret> 발화 (turn4 첫 프레임)
    17.84s  user  발화 끝
    17.89s  agent 발화 시작: <ret> You were starting to plan a trip to Vietnam for March,
    17.89s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.25s]: [2025-08-10] User is planning a trip to Vietnam in March.
    26.14s  agent 발화 끝
