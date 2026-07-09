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


     0.00s  agent 발화 시작: 노아 씨, 안녕하세요. 저는 여러분의 정착을 돕는 웰니스 코치, 후나르예요. 시드니로 오신 걸 환영해요! 혹
    12.23s  user  발화 시작: 으음, 솔직히 좀 당황스럽네요. 후나르라고 하셨죠? 뭔가 로봇 같은 느낌이 들기도 하고…
    12.43s  agent 발화 끝
    18.52s  user  발화 끝
    18.61s  agent 발화 시작: 로봇 같다고 느끼셨다니, 솔직하게 말씀해주셔서 고마워요. 후나르는 제 이름이에요. 저는 여러분의 감정을 이해
    31.31s  agent 발화 끝
    31.71s  user  발화 시작: 음… 그럼, 시드니에서 살려면 꼭 알아둬야 할 게 있을까요? 뭔가 꿀팁 같은 거요.
    38.47s  user  발화 끝
    38.51s  agent 발화 시작: 시드니에서 알아두면 좋은 팁이라… 노아 씨가 어떤 부분을 가장 중요하게 생각하시는지 알면 더 좋을 것 같아요
    51.41s  agent 발화 끝
    52.51s  user  발화 시작: 음… 새로운 사람들을 만나는 게 제일 어렵네요. 혼자 사는 게 익숙해서 그런지…
    57.05s  user  발화 끝
