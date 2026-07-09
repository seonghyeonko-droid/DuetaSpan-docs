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
     2.93s  user  발화 시작: Uh-huh.
     3.33s  user  발화 끝
     6.07s  agent 발화 끝
     6.10s  user  발화 시작: Oh, hi Lira. I was just thinking about that trip I’m plannin
    12.68s  <ret> 발화 (turn3 첫 프레임)
    12.87s  agent 발화 시작: <ret> Thinking about travel is always exciting! You’re plann
    13.19s  user  발화 끝
    13.88s  ⚡SPAN 주입 [d'=1.20s / d_lead=2.29s]: [2026-07-14] User is planning a trip to Switzerland in March.
    22.05s  agent 발화 끝
    23.16s  user  발화 시작: Right, March. I was hoping to find some good vegetarian rest
    29.11s  <ret> 발화 (turn5 첫 프레임)
    29.51s  agent 발화 시작: <ret> Of course, enjoying local cuisine is a big part of tra
    29.69s  user  발화 끝
    31.11s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.79s]: [2026-05-07] User is vegetarian.
    39.53s  agent 발화 끝
