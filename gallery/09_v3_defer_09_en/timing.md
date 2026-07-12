# v3_defer_09_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_defer_09",
#     "name": "Lukas",
#     "location": {
#       "city": "London",
#       "country": "United Kingdom",
#       "timezone": "Europe/London (GMT, UTC+0)",
#       "currency": "GBP (£)"
#     },
#     "nationality": "British",
#     "gender": "male",
#     "age_range": "late 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-18",
#       "category": "home",
#       "text": "User's home address is 207 Elm Street."
#     },
#     {
#       "date": "2026-05-30",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2025-12-09",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2025-12-05",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     },
#     {
#       "date": "2025-11-29",
#       "category": "work",
#       "text": "User works as a graduate student."
#     },
#     {
#       "date": "2025-07-23",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-21",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2026-03-07",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-11-09",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: I need a house with laundry in Portland, Oregon with a ratin
     5.77s  <ret> 발화 (turn1 첫 프레임)
     6.01s  agent 발화 시작: <ret> There are two houses matching your request! The Rose C
     6.01s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.67s]: (tool result) {"houses": [{"id": "H12345", "name": "The Rose Cottage",
     6.01s  user  발화 끝
    17.68s  user  발화 시작: Yeah.
    17.68s  agent 발화 끝
    18.03s  user  발화 시작: That Pearl District Loft sounds nice. Can you book it for me
    18.03s  user  발화 끝
    23.18s  <ret> 발화 (turn4 첫 프레임)
    23.34s  agent 발화 시작: <ret> The Pearl District Loft is booked for July eleventh to
    23.34s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.55s]: (tool result) {"confirmation id": "BK98765", "house name": "Pearl Dist
    23.34s  user  발화 끝
    32.88s  user  발화 시작: Really?
    32.88s  agent 발화 끝
    33.23s  user  발화 시작: Great, thank you so much!
    33.23s  user  발화 끝
    35.00s  agent 발화 시작: You’re very welcome! It’s wonderful you’re planning a little
    35.00s  user  발화 끝
    42.07s  agent 발화 끝
