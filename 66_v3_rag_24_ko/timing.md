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


     0.00s  user  발화 시작: 뒤플레시스라는 성이 어디에서 유래했는지 궁금해요.
     3.36s  <ret> 발화 (turn1 첫 프레임)
     3.67s  agent 발화 시작: <ret> 뒤플레시스 성에 대해 알아볼까요? 뒤플레시스 성은 프랑스에서 유래했는데, “플레시”라는 지명에서 
     3.84s  user  발화 끝
     4.40s  ⚡SPAN 주입 [d'=1.04s / d_lead=2.83s]: The surname Du Plessis is of French origin, meaning "from Plessis", a 
     9.86s  user  발화 시작: 네.
    10.49s  user  발화 끝
    12.15s  agent 발화 끝
    12.27s  user  발화 시작: 그럼 플레시는 어떤 곳인가요?
    14.11s  <ret> 발화 (turn4 첫 프레임)
    14.50s  agent 발화 시작: <ret> 플레시라는 지명은 프랑스에 여러 곳이 있어요.
    14.52s  user  발화 끝
    15.79s  ⚡SPAN 주입 [d'=1.68s / d_lead=4.07s]: Plessis is a common place name in France, referring to a fortified man
    18.44s  agent 발화 시작: 플레시는 프랑스에서 흔한 지명으로, 요새화된 저택이나 성을 의미한다고 하네요.
    18.57s  agent 발화 끝
    25.13s  user  발화 시작: 아프리카와도 관련이 있다던데, 맞나요?
    25.20s  agent 발화 끝
    27.94s  <ret> 발화 (turn7 첫 프레임)
    28.34s  agent 발화 시작: <ret> 네, 뒤플레시스 성은 아프리카에서도 흔해요. 뒤플레시스 성은 십칠세기와 십팔세기에 위그노가 남아프
    28.41s  user  발화 끝
    29.14s  ⚡SPAN 주입 [d'=1.20s / d_lead=3.34s]: The Du Plessis surname is common in South Africa due to Huguenot immig
    37.71s  agent 발화 끝
