# v3_pers_37_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_37",
#     "name": "Noah",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "male",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-19",
#       "category": "work",
#       "text": "User works as a nurse."
#     },
#     {
#       "date": "2026-06-02",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     },
#     {
#       "date": "2026-04-04",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2026-03-15",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in August."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-17",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: 노아 씨, 안녕하세요. 저는 여러분의 정착을 돕는 웰니스 코치, 후나르예요. 시드니로 오신 지 얼마 안 되셨
    14.23s  user  발화 시작: 후나르라고 하셨죠? 이름이 좀 특이한데, 혹시 어디서 들은 것 같아요… 낯설지가 않네요.
    14.33s  agent 발화 끝
    19.04s  user  발화 끝
    19.11s  agent 발화 시작: 이름에 대해 궁금해하시는군요. 후나르는 제 부모님께서 지어주신 이름이에요. 특별한 의미가 있다기보다는, 부드
    34.61s  agent 발화 끝
    34.98s  user  발화 시작: 음… 시드니는 정말 좋긴 한데, 친구가 한 명도 없어서 외로워요. 한국에서는 늘 친구들과 어울렸거든요.
    41.69s  user  발화 끝
    41.70s  agent 발화 시작: 새로운 환경에서 친구를 사귀는 건 분명 어려운 일이죠. 외로움을 느끼시는 건 당연해요. 혹시 어떤 종류의 활
    53.76s  agent 발화 끝
    54.87s  user  발화 시작: 저는 영화 보는 거랑, 맛집 탐방하는 거 좋아해요. 그리고… 그냥 편하게 이야기 나눌 수 있는 친구가 있으면
    61.82s  user  발화 끝
    61.94s  agent 발화 시작: 영화와 맛집이라… 정말 멋진 취미네요. 시드니에는 그런 취향을 공유할 수 있는 분들이 많을 거예요. 혹시 현
    79.14s  agent 발화 끝
