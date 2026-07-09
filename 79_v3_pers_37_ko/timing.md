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


     0.00s  agent 발화 시작: 노아 씨, 안녕하세요. 저는 여러분의 정착을 돕는 웰니스 코치, 후나르라고 해요. 시드니에서의 새로운 시작은
    10.93s  user  발화 시작: [curious] 후나르… 이름이 좀 독특한데요? 혹시 특별한 의미가 있어요?
    11.04s  agent 발화 끝
    15.00s  user  발화 끝
    15.16s  agent 발화 시작: 음, 제 이름은 '빛'이라는 뜻을 담고 있대요. 어두운 곳에서 길을 찾는 분들에게 작은 빛이 되어드리고 싶다
    26.85s  user  발화 시작: Right.
    27.25s  user  발화 끝
    30.58s  user  발화 시작: 솔직히, 여기 와서 마음 맞는 친구를 한 명도 못 사귀어서 좀 외로운데… 어떻게 해야 할까요?
    30.84s  agent 발화 끝
    36.60s  user  발화 끝
    36.93s  agent 발화 시작: 외로움을 느끼시는군요. 새로운 환경에 적응하는 건 생각보다 많은 에너지를 필요로 하죠. 혹시 어떤 활동을 좋
    50.99s  agent 발화 끝
