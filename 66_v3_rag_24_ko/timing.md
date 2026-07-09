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
     3.67s  agent 발화 시작: 뒤플레시라는 이름에 얽힌 이야기가 꽤 흥미로운데요.
     3.79s  user  발화 끝
     7.34s  <ret> 발화 (turn2 첫 프레임)
     7.73s  agent 발화 시작: <ret> 그 이름의 기원을 알아보기 위해 좀 더 자세히 살펴볼까요? 뒤플레시 성은 프랑스 위그노 출신으로,
     7.92s  agent 발화 끝
     9.34s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.97s]: The surname Du Plessis is of French Huguenot origin, meaning "from Ple
    15.97s  user  발화 시작: 아.
    16.66s  user  발화 끝
    18.54s  user  발화 시작: 아, 프랑스 지명에서 따온 거군요. 그럼 그 플레시라는 곳은 어떤 곳이에요?
    18.77s  agent 발화 끝
    23.63s  agent 발화 시작: 플레시라는 곳은 프랑스에 여러 군데가 있는데, 특히 뒤플레시 가문과 관련 있는 곳은 루아르 계곡에 있는 플레
    23.72s  user  발화 끝
    32.99s  <ret> 발화 (turn6 첫 프레임)
    33.05s  agent 발화 시작: <ret> 그 지역에 대해 좀 더 자세히 알아볼까요? 14세기부터 뒤플레시 가문의 요새였던 플레시-부르는 루
    33.13s  agent 발화 끝
    34.43s  ⚡SPAN 주입 [d'=1.44s / d_lead=3.75s]: Plessis-Bourg, in the Loire Valley, was a stronghold of the Du Plessis
    41.62s  agent 발화 끝
    41.72s  user  발화 시작: 그렇군요. 혹시 뒤플레시 가문은 프랑스 역사에서 중요한 역할을 했나요?
    47.79s  agent 발화 시작: 뒤플레시 가문은 프랑스 역사에서 꽤 중요한 역할을 했어요. 특히 프랑수아 드 뒤플레시는 루이 13세 시대의 
    47.93s  user  발화 끝
    57.95s  agent 발화 끝
