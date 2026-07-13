# v3_pers_41_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_41",
#     "name": "Jack",
#     "location": {
#       "city": "Paris",
#       "country": "France",
#       "timezone": "Europe/Paris (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "French",
#     "gender": "male",
#     "age_range": "late 20s",
#     "language": "French"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-24",
#       "category": "work",
#       "text": "User works as a graduate student."
#     },
#     {
#       "date": "2026-03-08",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in August."
#     },
#     {
#       "date": "2026-03-04",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2025-12-05",
#       "category": "hobby",
#       "text": "User is into vintage synth collecting."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-01-05",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2026-01-01",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-12-10",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: Bonjour, Jack. I’m Oro, and I help people navigate big chang
     6.72s  user  발화 시작: But what exactly do you *do*? I'm feeling a bit lost, honest
     6.72s  agent 발화 끝
    11.20s  agent 발화 시작: [happy] I help you find your footing when life feels overwhe
    11.20s  user  발화 끝
    20.91s  user  발화 시작: Yeah, yeah.
    20.91s  agent 발화 끝
    21.66s  user  발화 시작: Self-compassion… uh, that sounds nice, but I don't even know
    21.66s  user  발화 끝
    28.75s  agent 발화 시작: Yeah, yeah.
    28.75s  user  발화 끝
    29.50s  agent 발화 시작: It's completely normal to feel chaotic when facing uncertain
    29.50s  agent 발화 끝
    43.68s  agent 발화 끝
