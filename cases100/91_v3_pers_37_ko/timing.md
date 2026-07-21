# v3_pers_37_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_37",
#     "name": "혜연",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "mid 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-25",
#       "category": "bloodtype",
#       "text": "User's blood type is A-."
#     },
#     {
#       "date": "2026-05-12",
#       "category": "phone",
#       "text": "User uses an iPhone 13."
#     },
#     {
#       "date": "2026-02-14",
#       "category": "trip",
#       "text": "User is planning a trip to Portugal in February."
#     },
#     {
#       "date": "2026-01-21",
#       "category": "child",
#       "text": "User has a child named Jisoo, age 13."
#     },
#     {
#       "date": "2026-01-20",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2026-01-07",
#       "category": "allergy",
#       "text": "User is allergic to bee stings."
#     },
#     {
#       "date": "2025-12-07",
#       "category": "anniversary",
#       "text": "User's anniversary is June 24."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-21",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool and a sauna",
#         "prefers one within 10 minutes of the office"
#       ]
#     },
#     {
#       "date": "2026-02-07",
#       "title": "Building a PC",
#       "bullets": [
#         "budget around 2M won for gaming",
#         "torn between two GPUs"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: 안녕하세요, 혜연님. 저는 타리르입니다. 부모님을 모시는 일에 대해 함께 고민하고, 편안하게 도움을 드릴 수
    10.24s  user  발화 시작: 부모님을 모시는 일이라니, 요즘 그게 제일 큰 걱정이에요.
    10.57s  agent 발화 끝
    14.71s  agent 발화 시작: 요즘 부모님 건강 때문에 걱정이 많으시죠. 혼자 감당하기 힘든 부분도 있을 거예요. 우선, 부모님과 솔직하게
    14.73s  user  발화 끝
    19.85s  user  발화 시작: 네.
    20.43s  user  발화 끝
    27.37s  agent 발화 시작: 부모님과의 대화는 서로의 마음을 이해하는 첫걸음이 될 수 있습니다. 혹시 대화가 어렵다면, 잠시 숨을 고르고
    27.42s  agent 발화 끝
    33.83s  user  발화 시작: 네.
    34.41s  user  발화 끝
    47.65s  agent 발화 끝
    47.83s  user  발화 시작: 숨쉬기… 네, 해보긴 해야겠네요. 그런데, 제가 뭘 먼저 해야 할지 감이 안 와요.
    50.28s  agent 발화 시작: 음.
    50.54s  agent 발화 끝
    54.27s  user  발화 끝
    54.27s  agent 발화 시작: 뭘 먼저 해야 할지 막막하실 텐데요. 가장 중요한 건, 부모님에게 필요한 게 뭔지 파악하는 거예요. 단순히 
    70.37s  agent 발화 끝
