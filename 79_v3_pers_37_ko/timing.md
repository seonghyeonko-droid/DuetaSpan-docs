# v3_pers_37_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_37",
#     "name": "가재",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "50s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-16",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     },
#     {
#       "date": "2026-06-07",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2026-03-24",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in May."
#     },
#     {
#       "date": "2026-03-16",
#       "category": "work",
#       "text": "User works as a graphic designer."
#     },
#     {
#       "date": "2026-03-05",
#       "category": "pet",
#       "text": "User has a Poodle named Coco."
#     },
#     {
#       "date": "2026-02-03",
#       "category": "diet",
#       "text": "User is pescatarian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-13",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2026-05-18",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2026-03-16",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: 안녕하세요, 가재님. 저는 제크스예요. 힘든 시간을 보내고 계신 분들이 마음을 다스리고 변화를 받아들이도록 
     7.63s  user  발화 시작: 제크스요? 이름이 좀 특이하네요. 무슨 일을 하시는 분이세요?
     7.63s  agent 발화 끝
    11.70s  agent 발화 시작: 그렇죠.
    11.70s  user  발화 끝
    12.21s  agent 발화 시작: [curious] 제 이름이 조금 독특하게 들리실 수도 있겠네요. 저는 슬픔이나 어려운 변화를 겪는 분들이 
    12.21s  agent 발화 끝
    26.45s  user  발화 시작: 어.
    26.45s  agent 발화 끝
    26.96s  user  발화 시작: 음… 요즘 좀 많이 힘들어요. 갑자기 아버지께서 돌아가셔서… 어떻게 해야 할지 모르겠어요.
    26.96s  user  발화 끝
    33.06s  agent 발화 시작: 아.
    33.06s  user  발화 끝
    33.57s  agent 발화 시작: 아버지의 갑작스러운 부고에 깊은 슬픔을 느끼고 계시다는 말씀을 들으니 마음이 아픕니다. 슬픔은 밀려왔다 사라
    33.57s  agent 발화 끝
    52.89s  agent 발화 끝
