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


     0.00s  user  발화 시작: 뒤플레시 이름이 어디에서 유래됐는지 궁금해요.
     3.43s  <ret> 발화 (turn1 첫 프레임)
     3.74s  agent 발화 시작: <ret> 잠깐 알아봐도 될까요?
     3.83s  user  발화 끝
     4.87s  ⚡SPAN 주입 [d'=1.44s / d_lead=1.66s]: [source: Britannica] Du Plessis is a French surname of Huguenot origin
     5.18s  agent 발화 시작: 성씨에 대한 정보는 꽤 흥미로운 이야기를 담고 있는 경우가 많죠. 뒤플레시 성은 위그노 출신의 프랑스 성씨라
     5.40s  agent 발화 끝
    15.40s  user  발화 시작: 아.
    16.23s  user  발화 끝
    18.57s  user  발화 시작: 아, 프랑스 지명에서 왔군요. 그럼 아프리카너스어와는 무슨 관계가 있는 거죠?
    18.77s  agent 발화 끝
    23.96s  <ret> 발화 (turn5 첫 프레임)
    24.04s  agent 발화 시작: <ret> 아프리카너스어와 관련이 있다는 점이 궁금하시군요.
    24.18s  user  발화 끝
    25.96s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.79s]: [source: Wikipedia] Many South African du Plessis families descend fro
    27.78s  agent 발화 시작: 남아프리카 공화국에 있는 뒤플레시 가문은 십칠세기와 십팔세기에 케이프 식민지에 정착한 위그노 난민의 후손이라
    27.83s  agent 발화 끝
    35.89s  agent 발화 끝
