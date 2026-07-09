# v3_rag_24_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_24",
#     "name": "우서",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-21",
#       "category": "pet",
#       "text": "User has a Poodle named Coco."
#     },
#     {
#       "date": "2026-04-08",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     },
#     {
#       "date": "2026-03-20",
#       "category": "diet",
#       "text": "User is vegan."
#     },
#     {
#       "date": "2026-02-17",
#       "category": "home",
#       "text": "User's home address is 609 Oak Avenue."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-01",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2026-05-21",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: I was wondering about the name Du Plessis… it’s my grandmoth
     7.36s  <ret> 발화 (turn1 첫 프레임)
     7.44s  agent 발화 시작: <ret> That’s a lovely connection to explore, tracing a famil
     7.55s  user  발화 끝
     8.40s  ⚡SPAN 주입 [d'=1.04s / d_lead=4.86s]: [source: Wikipedia] Du Plessis is a French surname originating as a ti
    12.30s  agent 발화 끝
    12.32s  agent 발화 시작: The name Du Plessis began as a title for the younger son of 
    16.14s  user  발화 시작: Mhm.
    16.77s  user  발화 끝
    17.55s  agent 발화 끝
    17.83s  user  발화 시작: Oh, interesting! Was it always a French name, then?
    21.65s  <ret> 발화 (turn5 첫 프레임)
    21.89s  agent 발화 시작: <ret> It evolved as families migrated and settled in differe
    21.95s  user  발화 끝
    23.65s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.19s]: [source: etymonline.com] The surname Du Plessis is of Afrikaans origin
    27.07s  agent 발화 끝
    27.11s  agent 발화 시작: Du Plessis is also an Afrikaans surname, meaning “from the c
    32.44s  agent 발화 끝
    32.64s  user  발화 시작: That's quite a shift in meaning! So, it went from a title to
    37.46s  user  발화 끝
