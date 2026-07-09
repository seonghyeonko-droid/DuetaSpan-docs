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


     0.00s  user  발화 시작: I was wondering about the name du Plessis. It sounds…French,
     4.76s  <ret> 발화 (turn1 첫 프레임)
     4.84s  agent 발화 시작: <ret> It has a lovely sound, doesn’t it? The name does have 
     4.95s  user  발화 끝
     5.80s  ⚡SPAN 주입 [d'=1.04s / d_lead=6.86s]: [source: Wikipedia] ‘Du Plessis’ is a French surname originating as a 
    11.67s  agent 발화 시작: The surname ‘du Plessis’ means ‘of the enclosure’ or ‘of the
    11.70s  agent 발화 끝
    16.93s  user  발화 시작: Mhm.
    17.43s  user  발화 끝
    18.76s  agent 발화 끝
    19.05s  user  발화 시작: Oh, so it literally means “of the fort”? That’s cool. Was it
    25.97s  <ret> 발화 (turn5 첫 프레임)
    26.21s  agent 발화 시작: <ret> It certainly became associated with prominent families
    26.23s  user  발화 끝
    27.97s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.37s]: [source: House of Names] Several noble families took the name ‘du Ples
    29.57s  agent 발화 시작: The House of Plessis, originating in Normandy, became promin
    29.59s  agent 발화 끝
    36.48s  agent 발화 끝
