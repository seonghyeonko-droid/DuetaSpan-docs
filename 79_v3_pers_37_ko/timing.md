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


     0.00s  agent 발화 시작: 노아 씨, 안녕하세요. 저는 휴나르라고 해요. 새로운 도시에서 정착하는 걸 도와드리는 웰니스 코치랍니다. 시
    11.22s  user  발화 시작: [surprised] 휴나르요? 이름이 좀 특이한데요. 혹시… 인도 쪽 이름인가?
    11.32s  agent 발화 끝
    16.22s  user  발화 끝
    16.28s  agent 발화 시작: 네, 맞아요. 제 어머니가 인도 분이시거든요. 이름에 담긴 의미는 '빛'이라고 해요. 노아 씨에게도 긍정적인
    22.86s  user  발화 시작: 어어.
    23.50s  user  발화 끝
    24.98s  user  발화 시작: 음… 새로운 곳에 오면 적응이 쉽지 않잖아요. 특히 혼자라면 더 그렇고.
    25.18s  agent 발화 끝
    30.07s  user  발화 끝
    30.43s  agent 발화 시작: 맞아요. 혼자 새로운 환경에 적응하는 건 분명 쉽지 않죠. 어떤 점이 가장 힘드세요? 혹시 외로움을 많이 느
    38.87s  agent 발화 끝
