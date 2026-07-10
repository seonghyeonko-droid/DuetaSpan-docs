# v3_mem_36_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_36",
#     "name": "Sky",
#     "location": {
#       "city": "New York",
#       "country": "United States",
#       "timezone": "America/New_York (EST, UTC-5)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "non-binary",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-03-06",
#       "category": "home",
#       "text": "User's home address is 70 Maple Drive."
#     },
#     {
#       "date": "2026-01-22",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2025-12-08",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2025-11-06",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2025-10-11",
#       "category": "work",
#       "text": "User works as a graphic designer."
#     },
#     {
#       "date": "2025-07-02",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-01-26",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-06-23",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: Hi Sky, I'm Lira. It's good to connect with you today.
     1.51s  user  발화 시작: Uh-huh.
     2.01s  user  발화 끝
     3.28s  agent 발화 끝
     3.29s  user  발화 시작: I was just thinking about my dentist appointment… I complete
     7.62s  <ret> 발화 (turn3 첫 프레임)
     7.85s  agent 발화 시작: <ret> You scheduled a dentist appointment with Dr. Han for a
     8.01s  user  발화 끝
     9.62s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.06s]: [2026-01-26] Past chat — Booked a dentist appointment: asked for an ea
    15.91s  agent 발화 끝
    17.08s  user  발화 시작: Oh, right! And… what was the name of my dog again? It’s slip
    21.82s  <ret> 발화 (turn5 첫 프레임)
    22.22s  agent 발화 시작: <ret> You have an adorable Corgi named Mochi, a lovely compa
    22.40s  user  발화 끝
    23.82s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.41s]: [2025-07-02] User has a Corgi named Mochi.
    29.63s  agent 발화 끝
