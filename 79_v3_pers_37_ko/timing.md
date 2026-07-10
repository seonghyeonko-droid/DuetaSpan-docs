# v3_pers_37_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_37",
#     "name": "노연",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "early 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-02-09",
#       "category": "work",
#       "text": "User works as a nurse."
#     },
#     {
#       "date": "2026-01-06",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     },
#     {
#       "date": "2025-09-20",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2025-08-17",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in August."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-05",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: 노연 씨, 안녕하세요. 저는 여러분의 정착을 돕는 웰니스 코치, Hunar라고 합니다. 부산으로 오신 걸 환
    10.25s  agent 발화 끝
    11.16s  user  발화 시작: 흐으으음…Hunar님이라고 하니까 좀 어색하네요. 그냥 편하게 불러도 돼요? 그리고 부산은 좋은데, 아는 사
    20.28s  agent 발화 시작: 물론 편하게 불러주세요. 노연 씨. 새로운 곳에 아는 사람이 없는 건 당연히 불안할 수 있죠. 혼자라는 느낌
    20.38s  user  발화 끝
    27.91s  user  발화 시작: 어어.
    28.72s  user  발화 끝
    30.46s  agent 발화 시작: 혼자 밥을 먹거나, 저녁에 시간을 보내는 게 특히 힘드신가요? 아니면 다른 부분일까요? 괜찮으시다면 조금 더
    30.48s  agent 발화 끝
    33.08s  user  발화 시작: 어.
    33.72s  user  발화 끝
    39.16s  user  발화 시작: 그냥… 다요. 혼자 카페 가기도 그렇고, 영화 보러 가기도 그렇고, 그냥 다 혼자 하려니까 좀 힘들어요.
    39.36s  agent 발화 끝
    46.85s  user  발화 끝
