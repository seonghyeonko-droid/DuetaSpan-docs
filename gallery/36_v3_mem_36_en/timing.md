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
     5.78s  user  발화 시작: Uh-huh.
     6.23s  user  발화 끝
    11.55s  agent 발화 끝
    11.79s  user  발화 시작: Oh, hi Lira. Um, I was just thinking about that dentist appo
    19.75s  <ret> 발화 (turn3 첫 프레임)
    19.98s  agent 발화 시작: <ret> You scheduled a dentist appointment, requesting an ear
    20.13s  user  발화 끝
    21.75s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.20s]: [2026-01-26] Past chat — Booked a dentist appointment: asked for an ea
    29.86s  user  발화 시작: Right, that’s it! I need to change that, actually. I need to
    30.18s  agent 발화 끝
    33.45s  <ret> 발화 (turn5 첫 프레임)
    33.74s  user  발화 끝
    33.77s  agent 발화 시작: <ret> Your dentist appointment with Dr. Han is now scheduled
    35.45s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.39s]: (tool result) Appointment rescheduled to 2:30 PM with Dr. Han.
    42.16s  agent 발화 끝
