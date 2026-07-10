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
     6.54s  agent 발화 끝
     7.48s  user  발화 시작: 후나르… 이름이 좀 독특하시네요. 혹시 외국분이세요?
    11.53s  agent 발화 시작: [curious] 아, 그러시군요. 이름에 대해 궁금해하시네요. 제 이름은 여러 문화권에서 찾아볼 수 있는 
    11.64s  user  발화 끝
    20.02s  agent 발화 끝
    20.08s  user  발화 시작: 흐으으음… 부산에 온 지 얼마 안 됐는데, 아직 뭘 해야 할지 모르겠어요.
    24.84s  agent 발화 시작: 새로운 곳에 오시면 당연히 그런 기분이 드실 거예요. 혼란스러움은 자연스러운 감정이죠. 혹시 지금 가장 걱정
    24.98s  user  발화 끝
    32.58s  agent 발화 끝
    32.90s  user  발화 시작: 아무래도 혼자라는 게 제일 무섭네요…
    35.43s  user  발화 끝
