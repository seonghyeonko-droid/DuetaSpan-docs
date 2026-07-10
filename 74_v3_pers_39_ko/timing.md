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


     0.00s  agent 발화 시작: 세재 님, 안녕하세요. 저는 아릴이라고 해요. 편안하게 친구 관계나 사회생활에 대해 이야기 나눌 수 있도록 
     3.40s  user  발화 시작: 응.
     3.84s  user  발화 끝
     9.22s  agent 발화 끝
     9.60s  user  발화 시작: 아릴… 이름이 좀 독특하네요. 혹시 저랑 비슷한 또래도 상담해 주시는 거예요?
    15.53s  user  발화 끝
    15.57s  agent 발화 시작: 세재 님처럼 인생의 깊이와 넓이를 경험하신 분들과 이야기하는 것을 좋아해요. 어떤 점이 가장 고민이신가요?
    18.84s  user  발화 시작: 음.
    19.33s  user  발화 끝
    22.70s  user  발화 시작: 요즘 친구들과 연락도 잘 안 되고, 뭔가 외로운 기분이 자꾸 들어요. 어떻게 해야 할까요?
    22.98s  agent 발화 끝
    29.33s  agent 발화 시작: 친구분들과의 관계가 예전 같지 않아서 마음이 힘드시군요. 혹시 어떤 변화가 있었는지 조금 더 자세히 말씀해 
    29.46s  user  발화 끝
    37.72s  agent 발화 끝
