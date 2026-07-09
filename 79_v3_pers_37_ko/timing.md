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


     0.00s  agent 발화 시작: 노아 씨, 안녕하세요. 저는 여러분의 정착을 돕는 웰니스 코치, 후나르예요. 시드니에 새로 오셨다고 들었는데
    11.65s  user  발화 시작: 음, 솔직히 좀 그래요. 후나르라고 하니까 뭔가 엄청 전문적으로 들리는데, 저는 그냥… 새로운 데 적응하는 
    11.78s  agent 발화 끝
    18.50s  user  발화 끝
    18.69s  agent 발화 시작: 새로운 환경에 적응하는 건 당연히 어려울 수 있죠. 특히 시드니처럼 활기찬 도시는 처음이시라면 더욱 그럴 거
    26.86s  user  발화 시작: 어어.
    27.31s  user  발화 끝
    29.50s  user  발화 시작: 그러니까, 사람들 만나는 게 제일 어렵네요. 친구가 하나도 없어서요.
    29.73s  agent 발화 끝
    33.34s  user  발화 끝
    33.67s  agent 발화 시작: 친구를 사귀는 게 쉽지 않다는 말씀이시군요. 노아 씨, 혹시 어떤 방식으로 사람들과 관계를 맺는 걸 좋아하시
    46.24s  agent 발화 끝
