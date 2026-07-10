# v3_rag_24_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_24",
#     "name": "우서",
#     "location": {
#       "city": "Seoul",
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
#       "date": "2026-04-03",
#       "category": "pet",
#       "text": "User has a Poodle named Coco."
#     },
#     {
#       "date": "2026-01-30",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     },
#     {
#       "date": "2025-12-29",
#       "category": "diet",
#       "text": "User is vegan."
#     },
#     {
#       "date": "2025-08-13",
#       "category": "home",
#       "text": "User's home address is 609 Oak Avenue."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-10-09",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-09-22",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 뒤플레시 이름이 어디에서 유래됐는지 궁금해요.
     2.63s  <ret> 발화 (turn1 첫 프레임)
     2.94s  agent 발화 시작: <ret> 뒤플레시라는 성에 대해 궁금하시군요. 그 이름의 기원을 알아봐 드릴게요.
     3.09s  user  발화 끝
     3.99s  ⚡SPAN 주입 [d'=1.36s / d_lead=4.72s]: [source: Britannica] The surname Du Plessis is of French origin, and i
     7.49s  agent 발화 시작: 뒤플레시 성은 프랑스에서 유래했으며, '플러스'라는 옛 프랑스어 단어에서 비롯된 지형적인 이름이라고 합니다.
     7.66s  agent 발화 끝
    12.61s  user  발화 시작: 네.
    13.05s  user  발화 끝
    14.31s  user  발화 시작: 그럼 아프리카너스(Afrikaans)와는 무슨 관계가 있죠?
    14.48s  agent 발화 끝
    17.55s  <ret> 발화 (turn5 첫 프레임)
    17.63s  agent 발화 시작: <ret> 아프리카너스에 대해서도 궁금하시군요. 뒤플레시 성이 아프리카너스와 관련이 있는 이유를 찾아볼게요.
    17.83s  user  발화 끝
    19.47s  ⚡SPAN 주입 [d'=1.92s / d_lead=5.74s]: [source: Wikipedia] Many Huguenots with the surname Du Plessis fled to
    23.34s  agent 발화 시작: 뒤플레시 성을 가진 위그노 교도들이 네덜란드로 피신했고, 이후 남아프리카에 정착하여 아프리카너스어를 사용하는
    23.37s  agent 발화 끝
    32.42s  agent 발화 끝
