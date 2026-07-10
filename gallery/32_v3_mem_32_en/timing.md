# v3_mem_32_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_32",
#     "name": "Oscar",
#     "location": {
#       "city": "Berlin",
#       "country": "Germany",
#       "timezone": "Europe/Berlin (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "German",
#     "gender": "male",
#     "age_range": "late 30s",
#     "language": "German"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-03",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2026-03-11",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     },
#     {
#       "date": "2026-01-24",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-01-23",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2025-11-15",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in March."
#     },
#     {
#       "date": "2025-11-11",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-03",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2026-01-16",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: Hi Oscar, I'm Frio. It's good to connect with you. I underst
     4.72s  agent 발화 끝
     5.46s  user  발화 시작: um, yeah, that’s right. I was hoping you could help me with 
     9.79s  agent 발화 시작: Oscar. What's on your mind today? I’m here to listen and off
     9.85s  user  발화 끝
    10.96s  user  발화 시작: Yeah.
    11.36s  user  발화 끝
    13.82s  agent 발화 끝
    13.89s  user  발화 시작: I was just wondering… do you recall if I mentioned anything 
    17.41s  <ret> 발화 (turn5 첫 프레임)
    17.81s  agent 발화 시작: <ret> Yes, you did mention a cat! You have a Siamese cat nam
    17.81s  ⚡SPAN 주입 [d'=1.20s / d_lead=5.18s]: [2025-11-11] User has a Siamese cat named Bella.
    17.92s  user  발화 끝
    23.00s  agent 발화 끝
