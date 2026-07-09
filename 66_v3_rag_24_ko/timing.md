# v3_rag_24_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
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


     0.00s  user  발화 시작: 뒤플레시 가문 이름이 어디에서 유래되었는지 궁금해요.
     4.71s  <ret> 발화 (turn1 첫 프레임)
     5.02s  agent 발화 시작: <ret> 뒤플레시라는 성은 프랑스에서 유래되었는데, 그 이름의 뜻이 궁금하시군요.
     5.18s  user  발화 끝
     6.07s  ⚡SPAN 주입 [d'=1.36s / d_lead=5.61s]: [source: Wikipedia] Du Plessis is a French surname, originating as a t
    10.39s  agent 발화 시작: 뒤플레시 성은 ‘합의의 장소’ 또는 ‘모임 장소’라는 뜻의 라틴어 ‘플라키툼’에서 비롯된 ‘플레시’라는 지명
    10.63s  agent 발화 끝
    20.27s  agent 발화 끝
    20.42s  user  발화 시작: 아, 그렇군요. 그럼 그 가문은 프랑스 귀족이었나요?
    24.97s  <ret> 발화 (turn4 첫 프레임)
    25.04s  agent 발화 시작: <ret> 프랑스 귀족 가문이었는지 알아보니, 뒤플레시 가문은 푸아투 지방에서 유래된 프랑스 귀족 가문으로,
    25.05s  user  발화 끝
    26.41s  ⚡SPAN 주입 [d'=1.44s / d_lead=2.48s]: [source: The Peerage] The House of du Plessis is a French noble family
    33.84s  user  발화 시작: 어머.
    34.52s  user  발화 끝
    36.73s  user  발화 시작: 그 가문 중에 유명한 사람이 있었나요?
    36.82s  agent 발화 끝
    39.33s  agent 발화 시작: 뒤플레시 가문에서 유명한 인물은 프랑수아 뒤플레시였는데, 그는 앙리 사세의 측근이었고, 뛰어난 군사 전략가였
    39.36s  user  발화 끝
    47.86s  agent 발화 끝
