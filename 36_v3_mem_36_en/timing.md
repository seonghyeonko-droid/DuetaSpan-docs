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


     0.00s  agent 발화 시작: Hi Sahiha, I'm Lira. It’s good to connect with you. Is there
     5.83s  agent 발화 끝
     6.06s  user  발화 시작: Oh, hi Lira. I was just thinking about that trip I’m plannin
    11.96s  <ret> 발화 (turn2 첫 프레임)
    12.19s  agent 발화 시작: <ret> You’re planning a trip to Switzerland in March. Is the
    12.22s  user  발화 끝
    13.16s  ⚡SPAN 주입 [d'=1.20s / d_lead=2.34s]: [2026-07-14] User is planning a trip to Switzerland in March.
    15.53s  user  발화 시작: Yeah.
    16.03s  user  발화 끝
    17.75s  agent 발화 끝
    18.93s  user  발화 시작: Actually, yes. I’m trying to figure out what kind of food I’
    23.51s  agent 발화 시작: Switzerland has a growing vegetarian scene, though it’s trad
    23.66s  user  발화 끝
    33.20s  agent 발화 끝
