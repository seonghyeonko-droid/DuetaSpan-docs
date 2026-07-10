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


     0.00s  agent 발화 시작: 노연 씨, 안녕하세요. 저는 여러분의 정착을 돕는 웰니스 코치, 후나르라고 해요. 부산으로 오신 걸 환영드려
     6.21s  user  발화 시작: [surprised] 후나르요? 이름이 좀 독특하네요. 혹시 외국분이세요?
     6.21s  agent 발화 끝
    10.14s  user  발화 끝
    10.39s  agent 발화 시작: 음, 이름이 조금 생소하게 들릴 수도 있겠네요. 저는 다양한 문화적 배경을 가진 사람들을 돕는 걸 좋아해요.
    16.60s  user  발화 시작: 어어.
    17.09s  user  발화 끝
    18.60s  user  발화 시작: 사실 부산은 처음이라서요. 여기 문화나 사람들이랑 잘 어울릴 수 있을지 걱정돼요.
    18.69s  agent 발화 끝
    24.62s  user  발화 끝
    24.98s  agent 발화 시작: 새로운 곳에 적응하는 건 당연히 걱정될 수 있어요. 하지만 부산은 정말 따뜻하고 활기찬 도시랍니다. 혹시 특
    32.39s  agent 발화 끝
