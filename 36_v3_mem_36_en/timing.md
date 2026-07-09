# v3_mem_36_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_36",
#     "name": "Sahiha",
#     "location": {
#       "city": "Tokyo",
#       "country": "Japan",
#       "timezone": "Asia/Tokyo (JST, UTC+9)",
#       "currency": "JPY (¥)"
#     },
#     "nationality": "Japanese",
#     "gender": "non-binary",
#     "age_range": "early 30s",
#     "language": "Japanese"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-07-14",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in March."
#     },
#     {
#       "date": "2026-05-07",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2026-04-19",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2026-03-24",
#       "category": "pet",
#       "text": "User has a Golden Retriever named Max."
#     },
#     {
#       "date": "2026-03-03",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-08-02",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2026-04-27",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: Hi Sahiha, I'm Lira. It's good to connect with you. I'm a co
     3.92s  user  발화 시작: Uh-huh.
     4.51s  user  발화 끝
     8.02s  agent 발화 끝
     8.05s  user  발화 시작: Oh, that's nice. I was just thinking about my trip to Switze
    12.60s  <ret> 발화 (turn3 첫 프레임)
    12.84s  agent 발화 시작: <ret> It's good to revisit plans. You are planning a trip to
    12.95s  user  발화 끝
    14.20s  ⚡SPAN 주입 [d'=1.60s / d_lead=1.67s]: [2026-07-14] User is planning a trip to Switzerland in March.
    21.18s  agent 발화 끝
    22.39s  user  발화 시작: Actually, before that, I need to book a dentist appointment.
    27.12s  <ret> 발화 (turn5 첫 프레임)
    27.27s  agent 발화 시작: <ret> I can certainly help with that. You prefer Dr. Han and
    27.44s  user  발화 끝
    28.80s  ⚡SPAN 주입 [d'=1.68s / d_lead=1.93s]: [2026-04-27] Past chat — Booked a dentist appointment: asked for an ea
    35.01s  agent 발화 끝
