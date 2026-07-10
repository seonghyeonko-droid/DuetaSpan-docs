# v3_mem_36_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_36",
#     "name": "Mason",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "male",
#     "age_range": "late 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-06",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2026-05-25",
#       "category": "home",
#       "text": "User's home address is 220 Birch Road."
#     },
#     {
#       "date": "2025-10-02",
#       "category": "pet",
#       "text": "User has a Golden Retriever named Max."
#     },
#     {
#       "date": "2025-07-28",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-07-26",
#       "category": "work",
#       "text": "User works as a marketing manager."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-03",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: Hi Mason, I'm Elea. It's lovely to meet you.
     2.27s  user  발화 시작: Yeah.
     2.77s  user  발화 끝
     3.24s  agent 발화 끝
     3.47s  user  발화 시작: Um, I was just wondering, do you remember anything about my 
     7.28s  <ret> 발화 (turn3 첫 프레임)
     7.51s  agent 발화 시작: <ret> Yes, I do. You booked a dentist appointment and asked 
     7.52s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.72s]: [2026-02-03] Past chat — Booked a dentist appointment: asked for an ea
     7.73s  user  발화 끝
    13.91s  user  발화 시작: Oh, right! And what time was that appointment again?
    14.23s  agent 발화 끝
    16.68s  user  발화 끝
    16.80s  agent 발화 시작: I have no note of the specific time of that appointment, jus
    26.63s  agent 발화 끝
