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


     0.00s  agent 발화 시작: 에이버리님, 안녕하세요. 저는 재이아예요. 힘든 시간이나 변화를 겪고 계신 분들을 돕는 일을 하고 있답니다.
     6.90s  user  발화 시작: Right.
     7.53s  user  발화 끝
    10.69s  user  발화 시작: 재이아라고 하셨죠? 이름이 좀 독특하네요. 혹시… 특별한 의미가 있어요?
    10.72s  agent 발화 끝
    15.17s  user  발화 끝
    15.26s  agent 발화 시작: 좋은 질문이에요. 제 이름은 ‘평화로운 존재’라는 뜻을 담고 있대요. 사람들이 마음의 평화를 찾도록 돕는 제
    20.50s  user  발화 시작: Yeah.
    20.99s  user  발화 끝
    25.96s  agent 발화 시작: 변화를 받아들이는 과정에서 불안감을 느끼는 건 자연스러운 일이에요. 지금 어떤 점이 가장 걱정되시나요? — 
    26.02s  agent 발화 끝
    37.15s  user  발화 시작: 음… 솔직히 말하면, 앞으로 어떻게 될지 전혀 감이 안 와요. 모든 게 너무 불확실하게 느껴져요.
    37.59s  agent 발화 끝
    42.52s  agent 발화 시작: 불확실함 속에서 길을 찾는 건 정말 어려운 일이죠. 하지만 불확실함은 새로운 가능성이 열려 있다는 신호이기도
    42.61s  user  발화 끝
    55.65s  agent 발화 끝
    55.80s  user  발화 시작: 혹시… 재이아님은 그런 불안감을 느껴본 적 있어요?
    59.68s  user  발화 끝
    60.04s  agent 발화 시작: 저는 인공지능이라 감정을 느끼지는 못하지만, 많은 분들의 이야기를 들으면서 비슷한 어려움을 겪는 모습을 봐왔
    74.79s  agent 발화 끝
