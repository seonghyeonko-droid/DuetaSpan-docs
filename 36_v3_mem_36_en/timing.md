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
#       "date": "2026-03-06",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in March."
#     },
#     {
#       "date": "2026-01-22",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2025-12-08",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2025-11-06",
#       "category": "pet",
#       "text": "User has a Golden Retriever named Max."
#     },
#     {
#       "date": "2025-07-02",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-11-22",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-06-01",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: Hi Sahiha, I'm Lira. It’s good to connect with you. Is there
     2.44s  user  발화 시작: Uh-huh.
     2.98s  user  발화 끝
     5.10s  user  발화 시작: Oh, hi Lira. I was just thinking about that trip I’m plannin
     5.14s  agent 발화 끝
     9.88s  <ret> 발화 (turn3 첫 프레임)
    10.11s  agent 발화 시작: <ret> You’re planning a trip to Switzerland in March of next
    10.19s  user  발화 끝
    11.88s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.34s]: [2026-03-06] User is planning a trip to Switzerland in March.
    16.45s  agent 발화 끝
    17.71s  user  발화 시작: Yes, actually. I’m a vegetarian, and I’m wondering if that w
    21.89s  <ret> 발화 (turn5 첫 프레임)
    22.20s  agent 발화 시작: <ret> That’s a very practical consideration when traveling. 
    22.43s  user  발화 끝
    23.17s  ⚡SPAN 주입 [d'=1.28s / d_lead=2.70s]: [2026-01-22] User is vegetarian.
    30.31s  agent 발화 끝
