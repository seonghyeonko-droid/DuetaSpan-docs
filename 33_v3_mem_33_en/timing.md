# v3_mem_33_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_33",
#     "name": "Adam",
#     "location": {
#       "city": "Paris",
#       "country": "France",
#       "timezone": "Europe/Paris (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "French",
#     "gender": "male",
#     "age_range": "late 20s",
#     "language": "French"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-17",
#       "category": "diet",
#       "text": "User is vegan."
#     },
#     {
#       "date": "2026-03-14",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in August."
#     },
#     {
#       "date": "2026-03-13",
#       "category": "work",
#       "text": "User works as a accountant."
#     },
#     {
#       "date": "2026-02-08",
#       "category": "home",
#       "text": "User's home address is 816 Birch Road."
#     },
#     {
#       "date": "2025-09-11",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-20",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: Hi Adam, I'm Mora!
     1.49s  user  발화 시작: Hi Mora, it's nice to meet you too. What time is it right no
     1.49s  agent 발화 끝
     6.56s  <ret> 발화 (turn2 첫 프레임)
     6.72s  agent 발화 시작: <ret> It is currently 10:17 AM in Paris. A perfect time to s
     6.72s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.85s]: (tool result) It is Friday, July 10, 2026 at 10:17 AM in Europe/Paris 
     6.72s  user  발화 끝
    11.57s  user  발화 시작: Yeah, yeah.
    11.57s  agent 발화 끝
    12.32s  user  발화 시작: That’s good to know. I was looking at used cars last month…
    12.32s  user  발화 끝
    16.80s  agent 발화 시작: Ah, yes! I recall you were researching hybrid models—
    16.80s  user  발화 끝
    20.16s  user  발화 시작: …do you know if there are any vegan restaurants nearby?
    20.16s  agent 발화 끝
    23.49s  <ret> 발화 (turn7 첫 프레임)
    23.89s  agent 발화 시작: <ret> I found three vegan restaurants: Gentle Gourmet, VG Pâ
    23.89s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.85s]: (tool result) Found 3 vegan restaurants: Gentle Gourmet (4.5 stars, 12
    23.89s  user  발화 끝
    28.74s  agent 발화 끝
