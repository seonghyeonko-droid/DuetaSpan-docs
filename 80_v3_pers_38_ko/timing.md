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


     0.00s  agent 발화 시작: 에이버리님, 안녕하세요. 저는 제이아라고 해요. 힘든 시간을 보내고 계신 분들이 새로운 시작을 찾도록 돕는 
     6.02s  user  발화 시작: 응응.
     6.65s  user  발화 끝
     9.38s  user  발화 시작: [surprised] 어머, 제 이름을 알고 계시네요? 혹시 저에 대해 다른 것도 아시는 건가요?
     9.41s  agent 발화 끝
    13.41s  user  발화 끝
    13.55s  agent 발화 시작: 에이버리님께 편안하게 다가가고 싶어서, 간단한 정보만 미리 알고 있었어요. 혹시 지금 어떤 마음이신지 조금만
    18.33s  user  발화 시작: 응.
    18.77s  user  발화 끝
    23.34s  agent 발화 시작: 괜찮아요, 말씀하기 어려우시다면 괜찮아요. 때로는 말로 표현하는 것 자체가 어려운 일이죠. — 잠시 숨을 고
    23.38s  agent 발화 끝
    35.10s  user  발화 시작: 사실… 최근에 직장을 그만뒀거든요. 뭘 해야 할지, 앞으로 어떻게 해야 할지 너무 막막해요.
    35.53s  agent 발화 끝
    40.95s  agent 발화 시작: 직장을 그만두셨다니, 쉽지 않은 결정이었을 텐데요. 막막한 마음이 드는 건 당연해요. 지금 느끼는 감정들을 
    41.02s  user  발화 끝
    53.37s  agent 발화 끝
    53.50s  user  발화 시작: 네, 감사합니다. 그냥… 모든 게 다 불안하고 무서워요.
    57.20s  user  발화 끝
