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
     1.79s  user  발화 시작: Uh-huh.
     2.24s  user  발화 끝
     3.80s  agent 발화 끝
     3.99s  user  발화 시작: Uh, hi Lira. I was just thinking about that dentist appointm
     6.90s  <ret> 발화 (turn3 첫 프레임)
     7.13s  agent 발화 시작: <ret> You booked a dentist appointment, requesting an early 
     7.14s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.42s]: [2026-01-26] Past chat — Booked a dentist appointment: asked for an ea
     7.32s  user  발화 끝
    12.23s  user  발화 시작: Right, and did I mention anything about… parking there?
    12.55s  agent 발화 끝
    15.70s  user  발화 끝
    15.78s  agent 발화 시작: No, that detail wasn’t in our previous conversation. I don't
    21.06s  agent 발화 끝
