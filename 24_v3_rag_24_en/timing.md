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
     8.26s  <ret> 발화 (turn1 첫 프레임)
     8.34s  agent 발화 시작: <ret> That’s a lovely pursuit, tracing your roots. It often 
     8.44s  user  발화 끝
     9.30s  ⚡SPAN 주입 [d'=1.04s / d_lead=5.69s]: [source: Wikipedia] Du Plessis is a French surname, originally denotin
    14.03s  agent 발화 끝
    14.04s  agent 발화 시작: The name du Plessis originates in France, specifically indic
    19.38s  user  발화 시작: Mhm.
    20.02s  user  발화 끝
    21.22s  agent 발화 끝
    21.45s  user  발화 시작: Oh, France? That’s interesting. I thought it might be Dutch 
    27.88s  <ret> 발화 (turn5 첫 프레임)
    27.93s  user  발화 끝
    28.12s  agent 발화 시작: <ret> It’s quite common for family lines to intertwine acros
    29.40s  ⚡SPAN 주입 [d'=1.52s / d_lead=4.58s]: [source: House of Names] The surname du Plessis is of French origin, a
    32.70s  agent 발화 끝
    32.73s  agent 발화 시작: The du Plessis name is thought to have originated in Normand
    38.05s  agent 발화 끝
    38.28s  user  발화 시작: Normandy… so it travelled. Was it a noble family, or somethi
    44.29s  <ret> 발화 (turn8 첫 프레임)
    44.30s  user  발화 끝
    44.36s  agent 발화 시작: <ret> Sometimes surnames reflect a family’s status or profes
    46.29s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.21s]: [source: Forebears] The Plessis family were prominent in Normandy duri
    48.48s  agent 발화 시작: During the medieval period, the Plessis family held lands an
    48.57s  agent 발화 끝
    53.62s  agent 발화 끝
