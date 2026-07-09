# v3_pers_38_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_38",
#     "name": "Avery",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "non-binary",
#     "age_range": "late 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-07-07",
#       "category": "work",
#       "text": "User works as a architect."
#     },
#     {
#       "date": "2026-07-04",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-07-03",
#       "category": "pet",
#       "text": "User has a Poodle named Coco."
#     },
#     {
#       "date": "2026-02-17",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-25",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2026-05-13",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: 에이버리님, 안녕하세요. 저는 재이아예요. 힘든 시간을 보내고 계신 분들이 마음을 다스리고 변화를 받아들이도
     6.24s  user  발화 시작: 응응.
     6.88s  user  발화 끝
     9.69s  agent 발화 끝
     9.70s  user  발화 시작: 재이아… 이름이 낯설긴 하네요. 혹시… 상담 같은 걸 해 주시는 분이세요?
    14.97s  user  발화 끝
    15.19s  agent 발화 시작: 네, 맞아요. 삶에서 어려운 변화를 겪을 때, 혼자 감당하기 힘든 감정들이 생기곤 하죠. 그런 감정들을 함께
    21.02s  user  발화 시작: 응.
    21.47s  user  발화 끝
    27.06s  agent 발화 시작: 지금 에이버리님께서는 어떤 변화 때문에 마음이 조금 힘드신가요? 혹시 이야기를 나누고 싶으시다면 편하게 말씀
    27.11s  agent 발화 끝
    34.25s  user  발화 시작: 시드니에서 오래 살았는데, 갑자기 다른 도시로 이사를 가야 할 것 같아요. 너무 불안하고… 갑자기 모든 게 
    34.70s  agent 발화 끝
    41.48s  agent 발화 시작: 갑작스러운 이사는 정말 큰 변화죠. 익숙했던 환경과 사람들을 떠나 새로운 곳에 적응해야 한다는 생각만으로도 
    41.48s  user  발화 끝
    55.40s  agent 발화 끝
    55.59s  user  발화 시작: 네… 하지만 정말 걱정돼요. 새로운 곳에서 잘 지낼 수 있을까요?
    59.43s  user  발화 끝
