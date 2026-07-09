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


     0.00s  user  발화 시작: 뒤플레시라는 성이 어디에서 유래됐는지 궁금해요.
     3.75s  <ret> 발화 (turn1 첫 프레임)
     4.06s  agent 발화 시작: <ret> 뒤플레시 성에 대해 알아보고 계시는군요. 뒤플레시 성은 프랑스에서 유래되었는데, ‘간단한 교회’라
     4.21s  user  발화 끝
     4.79s  ⚡SPAN 주입 [d'=1.04s / d_lead=3.09s]: [source: Britannica] The surname Du Plessis is of French origin, deriv
    11.33s  user  발화 시작: 네.
    12.06s  user  발화 끝
    13.94s  agent 발화 끝
    14.06s  user  발화 시작: 그럼 그 성을 가진 유명한 사람도 있나요?
    16.80s  <ret> 발화 (turn4 첫 프레임)
    17.19s  agent 발화 시작: <ret> 뒤플레시 성을 가진 유명한 분들이 꽤 있습니다.
    17.20s  user  발화 끝
    18.48s  ⚡SPAN 주입 [d'=1.68s / d_lead=3.61s]: [source: Wikipedia] Daniel du Plessis (1861–1934) was a South African 
    20.66s  agent 발화 시작: 다니엘 뒤플레시라는 분은, 일천팔백육십일 년부터 일천구백삼십사 년까지 남아프리카 공화국의 정치인이자 국회의원
    20.80s  agent 발화 끝
    30.07s  agent 발화 끝
