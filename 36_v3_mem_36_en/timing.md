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


     0.00s  agent 발화 시작: Hi Sahiha, I'm Lira. It's good to connect with you today. I'
     3.03s  user  발화 시작: Uh-huh.
     3.65s  user  발화 끝
     6.27s  user  발화 시작: Oh, that's good to hear. I was just thinking about that trip
     6.29s  agent 발화 끝
    10.04s  <ret> 발화 (turn3 첫 프레임)
    10.25s  user  발화 끝
    10.27s  agent 발화 시작: <ret> Regarding your Switzerland trip, you mentioned you’re 
    10.60s  ⚡SPAN 주입 [d'=0.56s / d_lead=1.23s]: [2026-07-14] User is planning a trip to Switzerland in March.
    17.64s  agent 발화 끝
    18.77s  user  발화 시작: Actually, yes! I completely forgot about my shellfish allerg
    23.86s  <ret> 발화 (turn5 첫 프레임)
    24.18s  agent 발화 시작: <ret> That’s a very important detail to remember, you have a
    24.42s  user  발화 끝
    25.38s  ⚡SPAN 주입 [d'=1.52s / d_lead=2.00s]: [2026-04-19] User is allergic to shellfish.
    31.04s  agent 발화 끝
