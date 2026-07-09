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


     0.00s  agent 발화 시작: 노아 씨, 안녕하세요. 저는 후나르예요. 새로운 도시에서 정착하는 걸 도와드리는 웰니스 코치랍니다. 여기 시
    10.35s  user  발화 시작: 음, 솔직히 좀 당황스럽네요. 후나르라고 하니까 뭔가… 엄청 전문적인 느낌? 저는 그냥 편하게 얘기하고 싶은
    10.47s  agent 발화 끝
    17.07s  user  발화 끝
    17.08s  agent 발화 시작: [laugh] 괜찮아요, 노아 씨. 편하게 ‘후나르’라고 불러주세요. 전문적인 느낌은 잠시 접어두고, 지금 
    29.84s  agent 발화 끝
    30.19s  user  발화 시작: 그냥 모든 게 다 새롭고, 뭘 해야 할지 모르겠어요. 친구도 없고, 맛집도 모르고… 혼자 있는 시간이 너무 
    37.98s  user  발화 끝
    38.01s  agent 발화 시작: 새로운 환경에 적응하는 건 당연히 쉽지 않죠. 혼자 있는 시간이 길어서 울적하다니, 그 마음 충분히 이해해요
    49.65s  agent 발화 끝
