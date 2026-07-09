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


     0.00s  user  발화 시작: I’ve been researching my family history, and I keep coming a
     8.89s  <ret> 발화 (turn1 첫 프레임)
     8.97s  agent 발화 시작: <ret> That’s a wonderful endeavor, tracing your roots. It of
     9.08s  user  발화 끝
     9.93s  ⚡SPAN 주입 [d'=1.04s / d_lead=6.30s]: [source: Wikipedia] Du Plessis is a French surname, originally denotin
    15.27s  agent 발화 끝
    15.28s  agent 발화 시작: The name du Plessis originated in France, signifying someone
    20.20s  user  발화 시작: Mhm.
    20.75s  user  발화 끝
    21.90s  agent 발화 끝
    22.21s  user  발화 시작: Oh, France? I always assumed it was… well, something else. I
    29.39s  <ret> 발화 (turn5 첫 프레임)
    29.63s  agent 발화 시작: <ret> Interestingly, while French in origin, Currently, the 
    29.67s  user  발화 끝
    30.35s  ⚡SPAN 주입 [d'=0.96s / d_lead=1.96s]: [source: Forebears] The highest concentration of the du Plessis surnam
    39.00s  user  발화 시작: South Africa… that *is* surprising. Is there a reason for th
    39.05s  agent 발화 끝
    43.73s  <ret> 발화 (turn7 첫 프레임)
    44.13s  agent 발화 시작: <ret> That migration explains a lot, French Huguenots fleein
    44.28s  user  발화 끝
    44.69s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.21s]: [source: South African History Online] Many French Huguenots, fleeing 
    52.51s  agent 발화 끝
