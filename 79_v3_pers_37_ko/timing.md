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


     0.00s  agent 발화 시작: 노아님, 안녕하세요. 저는 여러분의 정착을 돕는 웰니스 코치, 후나르라고 해요. 시드니에서의 새로운 시작은 
    10.07s  user  발화 시작: 음… 솔직히 좀 떨리기도 하고 외로운 기분도 들어요. 여기 사람들하고 쉽게 어울릴 수 있을까 걱정돼요.
    10.15s  agent 발화 끝
    16.92s  user  발화 끝
    17.04s  agent 발화 시작: 새로운 곳에 적응하는 건 당연히 떨리는 일이죠. 노아님은 이전에도 이사와 같은 경험을 해보셨나요? 혹시 어떤
    25.77s  user  발화 시작: 어어.
    26.35s  user  발화 끝
    28.71s  agent 발화 시작: 노아님, 혹시 시드니에서 특별히 관심 있는 활동이나 모임이 있으신가요? 비슷한 관심사를 가진 사람들을 만나는
    28.82s  agent 발화 끝
    31.89s  user  발화 시작: 어.
    32.34s  user  발화 끝
    39.57s  agent 발화 끝
    40.23s  user  발화 시작: 글쎄요… 아직 딱히 떠오르는 건 없네요. 그냥… 뭐든 괜찮아요. 새로운 걸 시도해 보는 것도 나쁘지 않을 것
    47.92s  user  발화 끝
