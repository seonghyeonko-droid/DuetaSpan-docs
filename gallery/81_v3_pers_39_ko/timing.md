# v3_pers_39_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_39",
#     "name": "세재",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "50s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-15",
#       "category": "pet",
#       "text": "User has a Corgi named Mochi."
#     },
#     {
#       "date": "2026-06-03",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     },
#     {
#       "date": "2026-01-05",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2025-05-31",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-07-19",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: 안녕하세요, 세재님. 저는 아릴이라고 해요. 편안하게 고민 나누실 수 있도록 도와드리는 라이프 코치입니다.
     2.67s  user  발화 시작: 응.
     3.03s  user  발화 끝
     6.96s  user  발화 시작: 혹시 제가 친구 관계 때문에 고민하는 거, 잘 들어주실 수 있어요?
     7.32s  agent 발화 끝
    11.47s  agent 발화 시작: 세재님. 친구 관계 때문에 힘드시다니 마음이 쓰이네요. 어떤 점이 가장 어려우신가요? 좀 더 자세히 말씀해 
    11.68s  user  발화 끝
    15.47s  user  발화 시작: 음.
    15.96s  user  발화 끝
    20.37s  agent 발화 시작: 혹시 친구분과의 관계에서 오해가 있거나, 아니면 서로에게 기대하는 바가 달라서 힘든 건가요?
    20.42s  agent 발화 끝
    27.22s  agent 발화 끝
