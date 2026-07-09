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


     0.00s  user  발화 시작: I’ve been researching my family history, and I came across t
     8.71s  <ret> 발화 (turn1 첫 프레임)
     8.79s  agent 발화 시작: <ret> That’s a lovely pursuit, tracing your roots. The name 
     8.90s  user  발화 끝
     9.75s  ⚡SPAN 주입 [d'=1.04s / d_lead=6.77s]: [source: Wikipedia] Du Plessis is a French surname of noble origin, me
    15.52s  agent 발화 시작: The surname du Plessis originates from France and indicates 
    15.56s  agent 발화 끝
    20.57s  user  발화 시작: Mhm.
    21.25s  user  발화 끝
    22.37s  agent 발화 끝
    22.55s  user  발화 시작: Oh, France! I always imagined it might be somewhere…older, I
    29.34s  <ret> 발화 (turn5 첫 프레임)
    29.55s  user  발화 끝
    29.58s  agent 발화 시작: <ret> It’s understandable to wonder about even older roots. 
    31.34s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.88s]: [source: House of Names] The name Plessis is derived from the Old Fren
    37.46s  agent 발화 끝
    37.47s  agent 발화 시작: Plessis, the place the name refers to, comes from an Old Fre
    44.00s  agent 발화 끝
    44.20s  user  발화 시작: So it’s tied to land ownership, then? That’s… interesting.
    48.45s  <ret> 발화 (turn8 첫 프레임)
    48.50s  user  발화 끝
    48.61s  agent 발화 시작: <ret> The name du Plessis was notably found in Normandy and 
    50.45s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.95s]: [source: The Internet Surname Database] The surname du Plessis was par
    55.57s  agent 발화 끝
