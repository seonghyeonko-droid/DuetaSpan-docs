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


     0.00s  agent 발화 시작: Hi Sahiha, I'm Lira. It's good to connect with you. I’m a co
     3.68s  user  발화 시작: Uh-huh.
     4.41s  user  발화 끝
     7.55s  agent 발화 끝
     7.59s  user  발화 시작: Oh, hi Lira. That sounds helpful. I was just remembering som
    14.22s  <ret> 발화 (turn3 첫 프레임)
    14.45s  agent 발화 시작: <ret> You were researching hybrid cars with less than thirty
    14.63s  user  발화 끝
    16.22s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.09s]: [2026-08-02] Past chat — Researching a used car: comparing hybrid mode
    19.54s  agent 발화 끝
    20.74s  user  발화 시작: Right, that’s it! Thanks. I’m now thinking about a trip, and
    26.70s  <ret> 발화 (turn5 첫 프레임)
    27.10s  agent 발화 시작: <ret> An aisle seat offers more freedom of movement, which c
    27.27s  user  발화 끝
    28.38s  ⚡SPAN 주입 [d'=1.68s / d_lead=4.35s]: [2026-03-03] User prefers an aisle seat when traveling.
    31.21s  agent 발화 시작: You do prefer an aisle seat when you travel, Sahiha. Would y
    31.45s  agent 발화 끝
    37.32s  agent 발화 끝
