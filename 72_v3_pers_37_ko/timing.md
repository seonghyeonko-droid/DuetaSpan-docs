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


     0.00s  agent 발화 시작: 노연 씨, 안녕하세요. 저는 여러분의 정착을 돕는 웰니스 코치, 후나르입니다. 부산으로 오신 걸 환영드려요.
     6.16s  agent 발화 끝
     6.26s  user  발화 시작: 후나르… 이름이 특이하시네요. 혹시 외국분이세요?
     9.68s  user  발화 끝
     9.69s  agent 발화 시작: [curious] 제 이름이 조금 독특하게 들릴 수도 있겠네요. 저는 한국에서 자랐지만, 여러 문화를 접하며
    14.22s  user  발화 시작: 어어.
    14.99s  user  발화 끝
    15.99s  agent 발화 끝
    16.52s  user  발화 시작: 부산에 온 지 얼마 안 됐는데, 적응이 쉽지 않네요. 외로운 기분도 들고…
    21.35s  agent 발화 시작: 부산에서의 새로운 시작이 쉽지 않으시군요. 외로움은 자연스러운 감정이에요. 혹시 어떤 점이 가장 힘드신가요?
    21.51s  user  발화 끝
    28.44s  agent 발화 끝
