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


     0.00s  agent 발화 시작: 세재 님, 안녕하세요. 저는 아릴이라고 해요. 편안하게 당신의 관계와 사회생활을 함께 만들어갈 라이프 코치입
     3.37s  user  발화 시작: 응.
     3.77s  user  발화 끝
     8.76s  user  발화 시작: 아릴… 이름이 독특하네요. 혹시 저한테 어떤 도움을 줄 수 있는 건가요?
     9.13s  agent 발화 끝
    14.01s  agent 발화 시작: 세재 님께서는 혹시 지금 어떤 점이 가장 고민이신가요? 친구 관계에서 어려움을 느끼시거나, 새로운 사람들과의
    14.22s  user  발화 끝
    18.80s  user  발화 시작: 음.
    19.61s  user  발화 끝
    24.63s  agent 발화 시작: 새로운 사람을 만나는 게 걱정되신다니, 어떤 부분이 특히 불안하신가요? 혹시 과거에 비슷한 경험이 있으셨을까
    24.68s  agent 발화 끝
    32.46s  agent 발화 끝
