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


     0.00s  user  발화 시작: I was reading a book and came across the name du Plessis. It
     9.73s  user  발화 끝
     9.76s  agent 발화 시작: That's a lovely question. Names often carry such fascinating
    14.75s  <ret> 발화 (turn2 첫 프레임)
    15.15s  agent 발화 시작: <ret> The name du Plessis has roots in… It’s a French surnam
    15.17s  agent 발화 끝
    16.03s  ⚡SPAN 주입 [d'=1.28s / d_lead=2.40s]: Du Plessis is a French surname originating from the Norman family name
    20.82s  user  발화 시작: Mhm.
    21.31s  user  발화 끝
    22.70s  agent 발화 끝
    23.05s  user  발화 시작: Oh, so it *is* French! Is Plessis a place then? Like a town 
    28.45s  <ret> 발화 (turn5 첫 프레임)
    28.69s  agent 발화 시작: <ret> Yes, Plessis refers to several places… Plessis is the 
    28.70s  user  발화 끝
    30.05s  ⚡SPAN 주입 [d'=1.60s / d_lead=2.65s]: Plessis is the name of several communes and places in France, most not
    37.08s  agent 발화 끝
