# v3_defer_09_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_defer_09",
#     "name": "Morgan",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "non-binary",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-02-03",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2026-01-31",
#       "category": "home",
#       "text": "User's home address is 616 Oak Avenue."
#     },
#     {
#       "date": "2026-01-09",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in May."
#     },
#     {
#       "date": "2025-12-31",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2025-09-07",
#       "category": "work",
#       "text": "User works as a high-school teacher."
#     },
#     {
#       "date": "2025-07-30",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-19",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-08-27",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: What details do you have about the Colosseum?
     2.00s  <ret> 발화 (turn1 첫 프레임)
     2.24s  agent 발화 시작: <ret> The Colosseum is a large amphitheater in central Rome,
     2.24s  ⚡SPAN 주입 [d'=2.00s / d_lead=16.05s]: (tool result) The Colosseum is a large amphitheater in central Rome, I
     2.35s  user  발화 끝
     7.61s  user  발화 시작: Yeah.
     8.11s  user  발화 끝
    18.29s  agent 발화 끝
    18.44s  user  발화 시작: That’s incredible. I’m planning a trip to Italy next month.
    21.68s  agent 발화 시작: That sounds wonderful!
    21.86s  user  발화 끝
    23.52s  agent 발화 끝
    24.29s  user  발화 시작: Um, welll… do you think I should book a hotel near the Spani
    28.64s  user  발화 끝
    28.74s  agent 발화 시작: Booking near the Spanish Steps would be lovely – it’s a very
    36.39s  agent 발화 끝
