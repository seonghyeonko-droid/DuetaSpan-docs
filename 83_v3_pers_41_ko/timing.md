# v3_pers_41_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_41",
#     "name": "연완",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-14",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2026-04-20",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     },
#     {
#       "date": "2025-10-08",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in March."
#     },
#     {
#       "date": "2025-09-09",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     },
#     {
#       "date": "2025-08-20",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2025-05-28",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-18",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2026-01-13",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: 연완님, 안녕하세요. 저는 여러분의 생산성과 일상을 돕는 라이프 코치, 푸엔이라고 해요. 오늘 하루는 어떠셨
     6.16s  user  발화 시작: 혹시 제가 뭘 해야 할지 알려주시는 분이신가요?
     6.16s  agent 발화 끝
     9.24s  agent 발화 시작: 맞아요, 연완님. 무엇을 해야 할지 고민이시거나, 일상에 어려움을 느끼실 때 제가 곁에서 함께 고민하고 방향
     9.24s  user  발화 끝
    19.81s  user  발화 시작: 아.
    19.81s  agent 발화 끝
    20.25s  user  발화 시작: 음… 사실 요즘 일이 너무 많아서 뭘 먼저 해야 할지 모르겠어요. 해야 할 일 목록만 계속 늘어나는 것 같고
    20.25s  user  발화 끝
    28.61s  agent 발화 시작: 일이 많아서 혼란스러우시군요. 마치 쌓여만 가는 빨래 더미를 보는 것 같다고 말씀하시는 분들도 많아요. 지금
    28.61s  user  발화 끝
    38.29s  user  발화 시작: 음.
    38.29s  agent 발화 끝
    38.73s  agent 발화 시작: 혹시 그 일을 조금 더 작은 단계로 나누어 보면 어떨까요? 작은 성공 경험들이 쌓이면 좀 더 차분하게 전체 
    38.73s  user  발화 끝
    48.86s  user  발화 시작: 그 방법도 좋겠네요. 한번 시도해 봐야겠어요.
    48.86s  agent 발화 끝
    51.50s  user  발화 끝
