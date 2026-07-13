# v3_mem_36_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_36",
#     "name": "Nathan",
#     "location": {
#       "city": "Berlin",
#       "country": "Germany",
#       "timezone": "Europe/Berlin (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "German",
#     "gender": "male",
#     "age_range": "50s",
#     "language": "German"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-02",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-04-09",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2026-02-07",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in October."
#     },
#     {
#       "date": "2025-12-30",
#       "category": "work",
#       "text": "User works as a physical therapist."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-15",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2026-03-04",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: Hi Nathan, I'm Biax. It's lovely to meet you.
     3.09s  user  발화 시작: I am. I'm planning a trip to Switzerland in October, and I w
     3.09s  agent 발화 끝
     9.91s  <ret> 발화 (turn2 첫 프레임)
    10.31s  agent 발화 시작: <ret> Yes, I recall you mentioned a trip to Switzerland in O
    10.31s  user  발화 끝
    10.60s  ⚡SPAN 주입 [d'=0.69s / d_lead=4.81s]: [2026-02-07] User is planning a trip to Switzerland in October.
    15.12s  user  발화 시작: Mm-hmm.
    15.12s  agent 발화 끝
    15.46s  user  발화 시작: Do you remember if I said anything about what kind of things
    15.46s  user  발화 끝
    21.65s  user  발화 끝
