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
#       "date": "2026-04-02",
#       "category": "work",
#       "text": "User works as a architect."
#     },
#     {
#       "date": "2025-07-24",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-07-22",
#       "category": "pet",
#       "text": "User has a Poodle named Coco."
#     },
#     {
#       "date": "2025-07-17",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-10-25",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-09-30",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: 에이버리님, 안녕하세요. 저는 재이아예요. 힘든 시간을 보내고 계신 분들이 변화를 잘 받아들이고 슬픔을 극복
     7.47s  user  발화 시작: 응응.
     7.91s  user  발화 끝
    11.51s  user  발화 시작: 재이아… 이름이 예쁘네요. 근데, 상담사라고 하셨죠? 저는 그냥 좀 마음이 복잡해서요.
    11.60s  agent 발화 끝
    17.81s  user  발화 끝
    17.90s  agent 발화 시작: 복잡한 마음이 드시는군요. 어떤 점이 가장 힘드신가요? 지금 느끼시는 감정을 편하게 말씀해 주시면 좋겠어요.
    21.49s  user  발화 시작: 응.
    21.94s  user  발화 끝
    25.32s  agent 발화 시작: 때로는 말로 표현하는 것만으로도 마음이 조금은 가벼워질 수 있답니다. 어떤 생각들이 머릿속을 맴돌고 계신지,
    25.40s  agent 발화 끝
    36.68s  user  발화 시작: 사실… 최근에 직장을 그만뒀거든요. 뭘 해야 할지 전혀 감이 안 와요.
    37.09s  agent 발화 끝
    41.48s  agent 발화 시작: 직장을 그만두셨다니, 쉽지 않은 결정이셨을 텐데요. 새로운 시작을 앞두고 불안하고 막막한 마음이 드시는 건 
    41.48s  user  발화 끝
    52.56s  agent 발화 끝
    52.69s  user  발화 시작: 그냥… 뭘 해도 되는 것 같지 않고, 뭘 해야 할지도 모르겠어요. 그냥 멍한 상태로 하루하루가 흘러가는 것 
    60.10s  user  발화 끝
