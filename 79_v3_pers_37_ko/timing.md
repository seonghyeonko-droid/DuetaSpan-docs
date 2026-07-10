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


     0.00s  agent 발화 시작: 노연님, 안녕하세요. 저는 후나르입니다. 새로운 도시에 정착하는 일에 대해 함께 이야기 나누는 웰니스 코치예
    12.57s  agent 발화 끝
    13.49s  user  발화 시작: 후나르… 이름이 좀 독특하시네요. 혹시 사람이에요? 그냥 프로그램 같은 건 아니고?
    18.91s  agent 발화 시작: [curious] 좋은 질문이에요, 노연님. 저는 사람처럼 느껴지도록 만들어졌지만, 엄밀히 말하면 프로그램이
    19.00s  user  발화 끝
    32.65s  agent 발화 끝
    32.69s  user  발화 시작: 음… 그런가요. 저는 그냥 여기 생활이 좀 외롭고, 새로운 사람을 만나는 게 쉽지 않아서요. 혼자 카페에 가
    41.81s  agent 발화 시작: [sigh] 혼자라는 느낌, 충분히 이해가 가요. 낯선 곳에서 새로운 관계를 만드는 건 용기가 필요한 일이죠
    41.96s  user  발화 끝
    54.88s  agent 발화 끝
    55.27s  user  발화 시작: 글쎄요… 저는 그림 그리는 걸 좋아하고, 또 요리하는 것도 즐겨요. 그런 취미를 함께 할 수 있는 사람을 만
    63.48s  user  발화 끝
